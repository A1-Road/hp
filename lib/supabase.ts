import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// サーバーサイド用のSupabaseクライアント
export const supabaseServer = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey
);

// クライアントサイド用のSupabaseクライアント（シングルトンパターン）
let supabaseClient: ReturnType<typeof createClient> | null = null;

export const getSupabaseClient = () => {
  if (!supabaseClient) {
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabaseClient;
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type News = {
  id: string;
  title: string;
  content: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
};

export type Work = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  created_at: string;
  updated_at: string;
};

export type Member = {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image_url: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  created_at: string;
  updated_at: string;
};
