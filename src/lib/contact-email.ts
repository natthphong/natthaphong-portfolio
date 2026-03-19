import { readFile } from "node:fs/promises";
import path from "node:path";

import { Resend } from "resend";

const DEFAULT_EMAIL_FROM = "no-reply@tarcloud.win";
const DEFAULT_RESUME_PDF_PATH = "./public/cv.pdf";
const DEFAULT_RESUME_FILENAME = "Natthaphong_Jaroenpronprasit_Resume.pdf";

export type ContactSubmission = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type ContactEmailConfig = {
  resendApiKey?: string;
  emailFrom: string;
  emailNotifyTo?: string;
  emailResumePdfPath: string;
};

type SendContactEmailResult = {
  ok: boolean;
  status: number;
  message: string;
};

export function isValidEmailAddress(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function getContactEmailConfig(): ContactEmailConfig {
  return {
    resendApiKey: process.env.RESEND_API_KEY?.trim(),
    emailFrom: process.env.EMAIL_FROM?.trim() || DEFAULT_EMAIL_FROM,
    emailNotifyTo:
      process.env.EMAIL_NOTIFY_TO?.trim() ||
      process.env.CONTACT_TO_EMAIL?.trim() ||
      undefined,
    emailResumePdfPath:
      process.env.EMAIL_RESUME_PDF_PATH?.trim() || DEFAULT_RESUME_PDF_PATH,
  };
}

export function buildRecipientList(submittedEmail: string, notifyEmail?: string) {
  return Array.from(
    new Set(
      [submittedEmail.trim(), notifyEmail?.trim()]
        .filter((value): value is string => Boolean(value))
        .filter(isValidEmailAddress),
    ),
  );
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function resolveResumePdfPath(filePath: string) {
  return path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath);
}

async function loadResumeAttachment(filePath: string) {
  const resolvedPath = resolveResumePdfPath(filePath);
  const fileBuffer = await readFile(resolvedPath);

  return {
    filename: DEFAULT_RESUME_FILENAME,
    content: fileBuffer.toString("base64"),
    contentType: "application/pdf",
  };
}

function buildEmailContent(submission: ContactSubmission) {
  const escapedMessage = escapeHtml(submission.message).replace(/\n/g, "<br />");
  const escapedName = escapeHtml(submission.name);
  const escapedEmail = escapeHtml(submission.email);
  const escapedCompany = submission.company ? escapeHtml(submission.company) : undefined;

  const subject = "Thank you for your email";
  const text = [
    `Dear ${submission.email},`,
    "",
    "Thank you for your email. I have received your message successfully.",
    "I have attached my resume in PDF format for your consideration.",
    "Thank you very much for your time.",
    "",
    "Message details",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    escapedCompany ? `Company: ${submission.company}` : undefined,
    "",
    "Your message:",
    submission.message,
    "",
    "Best regards,",
    "Natthaphong Jaroenpronprasit",
    "094-324-8965",
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #0f172a; line-height: 1.65;">
      <p>Dear ${escapedEmail},</p>
      <p>Thank you for your email. I have received your message successfully.</p>
      <p>I have attached my resume in PDF format for your consideration.<br />Thank you very much for your time.</p>
      <div style="margin: 24px 0; padding: 16px; border: 1px solid #cbd5e1; border-radius: 12px; background: #f8fafc;">
        <p style="margin: 0 0 12px; font-weight: 600;">Message details</p>
        <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapedName}</p>
        <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapedEmail}</p>
        ${
          escapedCompany
            ? `<p style="margin: 0 0 8px;"><strong>Company:</strong> ${escapedCompany}</p>`
            : ""
        }
        <p style="margin: 16px 0 8px;"><strong>Your message:</strong></p>
        <p style="margin: 0; white-space: pre-wrap;">${escapedMessage}</p>
      </div>
      <p style="margin-top: 24px;">
        Best regards,<br />
        Natthaphong Jaroenpronprasit<br />
        094-324-8965
      </p>
    </div>
  `;

  return { subject, text, html };
}

export async function sendContactSubmissionEmail(
  submission: ContactSubmission,
): Promise<SendContactEmailResult> {
  const config = getContactEmailConfig();

  if (!config.resendApiKey) {
    return {
      ok: false,
      status: 503,
      message: "The contact form is not configured yet. Please email me directly instead.",
    };
  }

  const notifyEmail =
    config.emailNotifyTo && isValidEmailAddress(config.emailNotifyTo)
      ? config.emailNotifyTo
      : undefined;

  if (config.emailNotifyTo && !notifyEmail) {
    console.warn("Ignoring invalid EMAIL_NOTIFY_TO value.", {
      emailNotifyTo: config.emailNotifyTo,
    });
  }

  const recipients = buildRecipientList(submission.email, notifyEmail);

  if (recipients.length === 0) {
    return {
      ok: false,
      status: 400,
      message: "A valid recipient email address is required.",
    };
  }

  let attachment: Awaited<ReturnType<typeof loadResumeAttachment>>;

  try {
    attachment = await loadResumeAttachment(config.emailResumePdfPath);
  } catch (error) {
    console.error("Failed to load resume attachment from disk.", {
      emailResumePdfPath: config.emailResumePdfPath,
      error,
    });

    return {
      ok: false,
      status: 500,
      message: "The resume attachment is not configured correctly. Please try again later.",
    };
  }

  const resend = new Resend(config.resendApiKey);
  const content = buildEmailContent(submission);

  try {
    const { data, error } = await resend.emails.send({
      from: config.emailFrom,
      to: recipients,
      replyTo: notifyEmail,
      subject: content.subject,
      text: content.text,
      html: content.html,
      attachments: [attachment],
    });

    if (error) {
      console.error("Resend email send failed.", {
        error,
        from: config.emailFrom,
        recipients,
      });

      return {
        ok: false,
        status: 500,
        message: "Unable to send the message right now. Please try again later.",
      };
    }

    console.info("Contact email sent successfully.", {
      emailId: data?.id,
      from: config.emailFrom,
      recipients,
      attachmentFilename: attachment.filename,
    });

    return {
      ok: true,
      status: 200,
      message: "Message sent successfully. Please check your inbox for the attached resume.",
    };
  } catch (error) {
    console.error("Unexpected error while sending contact email.", {
      error,
      from: config.emailFrom,
      recipients,
    });

    return {
      ok: false,
      status: 500,
      message: "Unable to send the message right now. Please try again later.",
    };
  }
}
