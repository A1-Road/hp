import { NextResponse } from "next/server";
import { getEvents } from "@/actions/events";

export async function GET() {
  try {
    const events = await getEvents();
    return NextResponse.json(events);
  } catch (error) {
    console.error("Events API error:", error);
    return NextResponse.json([]);
  }
}
