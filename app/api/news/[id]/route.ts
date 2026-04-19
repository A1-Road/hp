import { NextResponse } from "next/server";
import { getNewsDetail } from "@/actions/news";

export const runtime = "edge";

export async function GET(_: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const data = await getNewsDetail(id);
    return NextResponse.json(data);
  } catch (error) {
    console.error("News detail API error:", error);
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
}
