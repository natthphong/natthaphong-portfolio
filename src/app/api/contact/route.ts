import { NextResponse } from "next/server";
import {
  isValidEmailAddress,
  sendContactSubmissionEmail,
} from "@/lib/contact-email";

const MAX_MESSAGE_LENGTH = 2500;

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

  if (!isValidEmailAddress(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { message: "Message is too long. Please keep it concise." },
      { status: 400 },
    );
  }

  const result = await sendContactSubmissionEmail({
    name,
    email,
    company,
    message,
  });

  return NextResponse.json({ message: result.message }, { status: result.status });
}
