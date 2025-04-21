"use server";

import { supabaseServer } from "@/lib/supabase";
import type { Contact } from "@/types/database";

export async function submitContactForm(data: Omit<Contact, "id" | "created_at" | "status">) {
  try {
    // Supabaseの環境変数が設定されている場合のみデータベースに保存
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const { error: dbError } = await supabaseServer.from("contacts").insert([
        {
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone,
          inquiry_type: data.inquiry_type,
          message: data.message,
          privacy_agreed: data.privacy_agreed,
          status: "pending",
        },
      ]);

      if (dbError) {
        console.error("Error saving contact form:", dbError);
        return {
          success: false,
          error: `データの保存に失敗しました: ${dbError.message || "不明なエラー"}`,
        };
      }
    }

    // フォーム送信成功
    return {
      success: true,
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      error: "予期せぬエラーが発生しました",
    };
  }
}
