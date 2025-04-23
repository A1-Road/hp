"use server";

import { getEvents as getLumaEvents } from "@/lib/luma";
import type { Event } from "@/lib/luma";

export async function getEvents(): Promise<Event[]> {
  try {
    const lumaEvents = await getLumaEvents();
    return lumaEvents.map((event) => ({
      id: event.id,
      title: event.title,
      description: event.description,
      start_time: event.start_time,
      cover_image_url: event.cover_image_url,
      end_time: event.end_time,
      location: event.location,
      slug: event.slug,
      status: event.status,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }));
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}
