import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_MESSAGE_LENGTH = 2500;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const body = typeof payload === "object" && payload !== null ? payload : {};
  const record = body as Record<string, unknown>;

  const name = String(record.name ?? "").trim();
  const email = String(record.email ?? "").trim();
  const company = String(record.company ?? "").trim();
  const message = String(record.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { message: "Message is too long. Please keep it concise." },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL ?? "jaroenpronprasit@gmail.com";
  const contactFromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  if (!resendApiKey) {
    return NextResponse.json(
      {
        message:
          "The contact form is not configured yet. Please email me directly instead.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(resendApiKey);
  const subject = `Portfolio enquiry from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : undefined,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const { error } = await resend.emails.send({
      from: contactFromEmail,
      to: [contactToEmail],
      replyTo: email,
      subject,
      text,
    });

    if (error) {
      return NextResponse.json(
        { message: "Unable to send the message right now. Please try again later." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      message: "Message sent successfully. I will get back to you soon.",
    });
  } catch {
    return NextResponse.json(
      { message: "Unable to send the message right now. Please try again later." },
      { status: 500 },
    );
  }
}
