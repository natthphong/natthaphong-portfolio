import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_UU8BLov8_DF9ve1RQxx71JZtaqYibugEj");
const fromEmail = "tazamaak07@gmail.com";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();

  console.log("Hello world");
  console.log(email, subject, message);
  // console.log(process.env.RESEND_API_KEY);
  // console.log(process.env.FROM_EMAIL);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
