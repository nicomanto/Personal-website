import { NextRequest, NextResponse } from "next/server";
import sendCollaborationEmail from "@/service/Nodemailer/manageEmail/contactEmail";

export interface EmailInfo {
  readonly name: string;
  readonly email: string;
  readonly message: string;
}

const validateHuman = async (token: string) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    { method: "POST" }
  );
  const data = await res.json();
  if (!data.success) {
    console.error("Errore Google reCAPTCHA:", data["error-codes"]);
  }
  return data.success;
};

const validateForm = (info: EmailInfo) =>
  !!info.name && !!info.email && !!info.message;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { token, infoEmail } = body as { token: string; infoEmail: EmailInfo };

    if (!(await validateHuman(token))) {
      return NextResponse.json({ error: "Bot not allowed!" }, { status: 429 });
    }

    if (!validateForm(infoEmail)) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const sent = await sendCollaborationEmail(infoEmail);
    if (!sent)
      return NextResponse.json({ error: "Failed to send email." }, { status: 502 });

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message || "Unknown error" }, { status: 500 });
  }
}