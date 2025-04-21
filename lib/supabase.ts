import { createClient } from "@supabase/supabase-js";
import type { News, Work, Member } from "@/types/database";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

// サーバーサイド用のSupabaseクライアント
export const supabaseServer = createClient(supabaseUrl, supabaseServiceRoleKey || supabaseAnonKey);

// クライアントサイド用のSupabaseクライアント（シングルトンパターン）
let supabaseClient: ReturnType<typeof createClient> | null = null;

export const getSupabaseClient = () => {
  if (!supabaseClient) {
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabaseClient;
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type { News, Work, Member };
