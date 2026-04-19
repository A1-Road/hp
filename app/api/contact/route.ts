import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "edge";

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

  return NextResponse.json(
    {
      message:
        "This endpoint is not used in production. Please submit the embedded HubSpot form instead.",
      payload: parsed.data,
    },
    { status: 501 }
  );
}
