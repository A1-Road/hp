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

      // メール送信
      const emailResponse = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
          },
          body: JSON.stringify({
            to: process.env.CONTACT_EMAIL || "",
            subject: `新しいお問い合わせ: ${data.inquiry_type}`,
            html: `
            <h2>新しいお問い合わせがありました</h2>
            <p><strong>お名前:</strong> ${data.name}</p>
            <p><strong>会社名:</strong> ${data.company}</p>
            <p><strong>メールアドレス:</strong> ${data.email}</p>
            <p><strong>電話番号:</strong> ${data.phone}</p>
            <p><strong>お問い合わせ種別:</strong> ${data.inquiry_type}</p>
            <p><strong>メッセージ:</strong></p>
            <p>${data.message}</p>
          `,
          }),
        }
      );

      if (!emailResponse.ok) {
        console.error("Error sending email:", await emailResponse.text());
        // メール送信に失敗しても、データベースへの保存は成功しているので、
        // エラーは返さずに成功として扱う
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
