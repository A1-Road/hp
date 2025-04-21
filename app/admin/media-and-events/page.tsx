"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { toast } from "sonner";

interface News {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export default function MediaAndEventsPage() {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
      }
    };
    checkAuth();
  }, [router]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // テーブルの存在確認
        const { data: tableExists, error: tableError } = await supabase
          .from("news")
          .select("id")
          .limit(1);

        if (tableError) {
          if (tableError.code === "42P01") {
            setError(
              "ニューステーブルが存在しません。Supabaseのダッシュボードでテーブルを作成してください。"
            );
            toast.error("ニューステーブルが存在しません");
            return;
          }
          throw tableError;
        }

        const { data, error } = await supabase
          .from("news")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching news:", error);
          setError(`ニュースの取得に失敗しました: ${error.message}`);
          toast.error(`ニュースの取得に失敗しました: ${error.message}`);
          return;
        }
        setNews(data || []);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("ニュースの取得に失敗しました");
        toast.error("ニュースの取得に失敗しました");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("このニュースを削除してもよろしいですか？")) {
      return;
    }

    try {
      const { error } = await supabase.from("news").delete().eq("id", id);

      if (error) {
        throw error;
      }

      toast.success("ニュースを削除しました");
      setNews(news.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting news:", error);
      toast.error("ニュースの削除に失敗しました");
    }
  };

  if (isLoading) {
    return (
      <div className="container-custom py-8">
        <div className="text-center">読み込み中...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-custom py-8">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">メディア＆イベント管理</h1>
        <Button onClick={() => router.push("/admin/media-and-events/new")}>新規作成</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>タイトル</TableHead>
              <TableHead>作成日</TableHead>
              <TableHead>更新日</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {news.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>
                  {format(new Date(item.created_at), "yyyy/MM/dd", {
                    locale: ja,
                  })}
                </TableCell>
                <TableCell>
                  {format(new Date(item.updated_at), "yyyy/MM/dd", {
                    locale: ja,
                  })}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => router.push(`/admin/media-and-events/${item.id}`)}
                    >
                      編集
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(item.id)}
                    >
                      削除
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
