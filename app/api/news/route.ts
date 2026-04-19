import { NextResponse } from "next/server";
import { getNewsList } from "@/actions/news";

export const runtime = "edge";

const emptyList = {
  contents: [],
  totalCount: 0,
  offset: 0,
  limit: 0,
};

export async function GET() {
  try {
    const data = await getNewsList();
    return NextResponse.json(data);
  } catch (error) {
    console.error("News API error:", error);
    return NextResponse.json(emptyList);
  }
}
