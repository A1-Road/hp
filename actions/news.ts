"use server";

import { createClient } from "@supabase/supabase-js";
import type { News, Event } from "@/types/database";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function getNews(options?: {
  limit?: number;
  category?: string;
  search?: string;
}): Promise<News[]> {
  const { limit = 100, category, search } = options || {};

  let query = supabase.from("news").select("*").order("created_at", { ascending: false });

  if (category) {
    query = query.eq("category", category);
  }

  if (search && search.trim() !== "") {
    query = query.ilike("title", `%${search}%`);
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

export async function getNewsById(id: string): Promise<News | null> {
  const { data, error } = await supabase.from("news").select("*").eq("id", id).single();

  if (error) {
    console.error("Error fetching news by id:", error);
    return null;
  }

  return data as News;
}

export async function getCategories(): Promise<string[]> {
  const { data, error } = await supabase
    .from("news")
    .select("category")
    .not("category", "is", null);

  if (error) {
    console.error("Error fetching categories:", error);
    return [];
  }

  // 重複を排除
  const categories = [...new Set(data.map((item) => item.category))];
  return categories;
}
