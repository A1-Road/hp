"use server";

import { supabaseServer } from "@/lib/supabase";

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiry: string;
  message: string;
  privacy: boolean;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // お問い合わせデータをデータベースに保存
    const { error: dbError } = await supabaseServer.from("contacts").insert([
      {
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        inquiry_type: data.inquiry,
        message: data.message,
        privacy_agreed: data.privacy,
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
          // to: "admin@a1-road.com",
          to: "apple1167water@gmail.com",
          subject: "新しいお問い合わせがありました",
          html: `
          <h2>新しいお問い合わせ</h2>
          <p><strong>お名前:</strong> ${data.name}</p>
          <p><strong>会社名:</strong> ${data.company || "未記入"}</p>
          <p><strong>メールアドレス:</strong> ${data.email}</p>
          <p><strong>電話番号:</strong> ${data.phone || "未記入"}</p>
          <p><strong>お問い合わせ内容:</strong> ${data.inquiry}</p>
          <p><strong>メッセージ:</strong></p>
          <p>${data.message}</p>
        `,
        }),
      }
    );

    if (!emailResponse.ok) {
      console.error("Error sending email:", await emailResponse.text());
      // メール送信に失敗しても、データベースへの保存は成功しているので、
      // ユーザーには成功を返す
    }

    return { success: true };
  } catch (error) {
    console.error("Error in submitContactForm:", error);
    return { success: false, error: "予期せぬエラーが発生しました" };
  }
}
