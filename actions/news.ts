"use server";

import { supabase as supabaseServer } from "@/lib/supabase";
// import { createClient } from "@/lib/supabase/server"; // このファイルは存在しないようです
import { getEvents as getLumaEvents } from "@/lib/luma";
import type { News, Event } from "@/types/database";

export async function getNews(options?: {
  limit?: number;
  category?: string;
  search?: string;
}): Promise<News[]> {
  const { limit = 100, category, search } = options || {};

  let query = supabaseServer.from("news").select("*").order("date", { ascending: false });

  if (category) {
    query = query.eq("category", category);
  }

  if (search && search.trim() !== "") {
    // 簡易的な検索（複数のフィールドでOR検索）
    const searchTerm = `%${search}%`;
    query = query.or(
      `title.ilike.${searchTerm},category.ilike.${searchTerm},excerpt.ilike.${searchTerm},content.ilike.${searchTerm}`
    );
  }

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching news:", error);
    return [];
  }

  return data as News[];
}

export async function getNewsById(id: number): Promise<News | null> {
  const { data, error } = await supabaseServer.from("news").select("*").eq("id", id).single();

  if (error) {
    console.error("Error fetching news by id:", error);
    return null;
  }

  return data as News;
}

export async function getCategories(): Promise<string[]> {
  const { data, error } = await supabaseServer.from("news").select("category").order("category");

  if (error) {
    console.error("Error fetching categories:", error);
    return [];
  }

  // 重複を排除
  const categories = [...new Set(data.map((item) => item.category))];
  return categories;
}

export async function getEvents(): Promise<Event[]> {
  const lumaEvents = await getLumaEvents();
  return lumaEvents.map((event) => ({
    id: Number(event.id),
    title: event.title,
    date: new Date(event.start_time).toISOString(),
    location: event.location,
    url: event.url,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }));
}
