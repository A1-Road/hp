import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  if (secret !== process.env.DRAFT_MODE_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();

  redirect(slug || "/");
}
