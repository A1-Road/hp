import { LumaEvent } from "@/types/database";

const LUMA_API_KEY = process.env.LUMA_API_KEY;
const LUMA_API_BASE_URL = "https://api.lu.ma/api/v1";

export async function getEvents(): Promise<LumaEvent[]> {
  if (!LUMA_API_KEY) {
    console.warn("LUMA_API_KEY is not defined. Events will not be fetched.");
    return [];
  }

  try {
    const response = await fetch(`${LUMA_API_BASE_URL}/events`, {
      headers: {
        "x-luma-api-key": LUMA_API_KEY,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch events: ${response.statusText}`);
    }

    const data = await response.json();
    return data.events.map((event: any) => ({
      id: event.id,
      title: event.title,
      description: event.description,
      start_time: event.start_time,
      end_time: event.end_time,
      location: event.location,
      url: `https://lu.ma/${event.slug}`,
      status: event.status,
      cover_image_url: event.cover_image_url,
    }));
  } catch (error) {
    console.error("Error fetching Luma events:", error);
    return [];
  }
}
