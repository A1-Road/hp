"use server";

import { supabaseServer } from "@/lib/supabase";
import type { Member } from "@/lib/supabase";

export async function getMembers(): Promise<Member[]> {
  const { data, error } = await supabaseServer
    .from("members")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching members:", error);
    return [];
  }

  return data as Member[];
}

export async function getMemberById(id: string): Promise<Member | null> {
  const { data, error } = await supabaseServer.from("members").select("*").eq("id", id).single();

  if (error) {
    console.error("Error fetching member by id:", error);
    return null;
  }

  return data as Member;
}
