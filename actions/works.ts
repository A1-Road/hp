"use server";

import { supabaseServer } from "@/lib/supabase";
import type { Work } from "@/types/database";

export async function getWorks(options?: {
  limit?: number;
  industry?: string;
  search?: string;
}): Promise<Work[]> {
  const { limit = 100, industry, search } = options || {};

  let query = supabaseServer.from("works").select("*").order("created_at", { ascending: false });

  if (industry) {
    query = query.eq("industry", industry);
  }

  if (search && search.trim() !== "") {
    // 簡易的な検索（複数のフィールドでOR検索）
    const searchTerm = `%${search}%`;
    query = query.or(
      `title.ilike.${searchTerm},industry.ilike.${searchTerm},challenge.ilike.${searchTerm},solution.ilike.${searchTerm}`
    );
  }

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching works:", error);
    return [];
  }

  return data as Work[];
}

export async function getWorkById(id: number): Promise<Work | null> {
  const { data, error } = await supabaseServer.from("works").select("*").eq("id", id).single();

  if (error) {
    console.error("Error fetching work by id:", error);
    return null;
  }

  return data as Work;
}

export async function getIndustries(): Promise<string[]> {
  const { data, error } = await supabaseServer.from("works").select("industry").order("industry");

  if (error) {
    console.error("Error fetching industries:", error);
    return [];
  }

  // 重複を排除
  const industries = [...new Set(data.map((item) => item.industry))];
  return industries;
}
