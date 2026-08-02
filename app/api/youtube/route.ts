import { NextResponse } from "next/server";
import { getYoutubeVideos } from "@/actions/youtube";

export async function GET() {
  if (!process.env.YOUTUBE_API_KEY) {
    return NextResponse.json([]);
  }

  try {
    const videos = await getYoutubeVideos();
    return NextResponse.json(videos);
  } catch (error) {
    console.error("YouTube API error:", error);
    return NextResponse.json([]);
  }
}
