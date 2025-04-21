"use server";

import { getEvents as getLumaEvents } from "@/lib/luma";
import type { Event } from "@/types/database";

export async function getEvents(): Promise<Event[]> {
  try {
    const lumaEvents = await getLumaEvents();
    return lumaEvents.map((event) => ({
      id: event.id,
      title: event.title,
      date: event.start_time,
      location: event.location,
      url: event.url,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }));
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}
