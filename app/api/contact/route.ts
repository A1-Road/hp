import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  inquiryType: z.string().trim().min(1, "Inquiry type is required.").max(120),
  name: z.string().trim().min(1, "Name is required.").max(120),
  email: z.string().trim().email("Email is invalid."),
  subject: z.string().trim().min(1, "Subject is required.").max(200),
  message: z.string().trim().min(1, "Message is required.").max(5000),
});

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message || "入力内容を確認してください。" },
      { status: 400 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    return NextResponse.json(
      { message: "メール送信設定が未完了です。環境変数を確認してください。" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const payload = parsed.data;

  await transporter.sendMail({
    from: CONTACT_FROM_EMAIL || SMTP_USER,
    to: CONTACT_TO_EMAIL,
    replyTo: payload.email,
    subject: `[Web Contact] ${payload.subject}`,
    text: [
      `Inquiry Type: ${payload.inquiryType}`,
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Subject: ${payload.subject}`,
      "",
      "Message:",
      payload.message,
    ].join("\n"),
  });

  return NextResponse.json({ message: "ok" });
}
