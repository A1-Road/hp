"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Contact {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiry_type: string;
  message: string;
  privacy_agreed: boolean;
  created_at: string;
  updated_at: string;
}

export default function ContactDetail({ params }: { params: { id: string } }) {
  const [contact, setContact] = useState<Contact | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const { data, error } = await supabase
          .from("contacts")
          .select("*")
          .eq("id", params.id)
          .single();

        if (error) throw error;

        setContact(data);
      } catch (error) {
        console.error("Error fetching contact:", error);
        setError("お問い合わせ情報の取得に失敗しました");
        toast.error("お問い合わせ情報の取得に失敗しました");
        router.push("/admin/contacts");
      } finally {
        setIsLoading(false);
      }
    };

    fetchContact();
  }, [params.id, router]);

  if (isLoading) {
    return <div>読み込み中...</div>;
  }

  if (error || !contact) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">お問い合わせ詳細</h1>
      <div className="space-y-4">
        <div>
          <h2 className="font-bold">名前</h2>
          <p>{contact.name}</p>
        </div>
        <div>
          <h2 className="font-bold">会社名</h2>
          <p>{contact.company}</p>
        </div>
        <div>
          <h2 className="font-bold">メールアドレス</h2>
          <p>{contact.email}</p>
        </div>
        <div>
          <h2 className="font-bold">電話番号</h2>
          <p>{contact.phone}</p>
        </div>
        <div>
          <h2 className="font-bold">お問い合わせ種別</h2>
          <p>{contact.inquiry_type}</p>
        </div>
        <div>
          <h2 className="font-bold">メッセージ</h2>
          <p className="whitespace-pre-wrap">{contact.message}</p>
        </div>
        <div>
          <h2 className="font-bold">プライバシーポリシー同意</h2>
          <p>{contact.privacy_agreed ? "同意済み" : "未同意"}</p>
        </div>
        <div>
          <h2 className="font-bold">受信日時</h2>
          <p>{new Date(contact.created_at).toLocaleString()}</p>
        </div>
      </div>
      <div className="mt-6">
        <Button variant="outline" onClick={() => router.push("/admin/contacts")}>
          一覧に戻る
        </Button>
      </div>
    </div>
  );
}
