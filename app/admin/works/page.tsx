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
import Image from "next/image";
import { toast } from "sonner";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

interface Work {
  id: string;
  title: string;
  description: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export default function WorksPage() {
  const [works, setWorks] = useState<Work[]>([]);
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
    const fetchWorks = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // テーブルの存在確認
        const { data: tableExists, error: tableError } = await supabase
          .from("works")
          .select("id")
          .limit(1);

        if (tableError) {
          if (tableError.code === "42P01") {
            setError(
              "実績テーブルが存在しません。Supabaseのダッシュボードでテーブルを作成してください。"
            );
            toast.error("実績テーブルが存在しません");
            return;
          }
          throw tableError;
        }

        const { data, error } = await supabase
          .from("works")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching works:", error);
          setError(`実績の取得に失敗しました: ${error.message}`);
          toast.error(`実績の取得に失敗しました: ${error.message}`);
          return;
        }
        setWorks(data || []);
      } catch (error) {
        console.error("Error fetching works:", error);
        setError("実績の取得に失敗しました");
        toast.error("実績の取得に失敗しました");
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorks();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("この実績を削除してもよろしいですか？")) {
      return;
    }

    try {
      const { error } = await supabase.from("works").delete().eq("id", id);

      if (error) {
        throw error;
      }

      toast.success("実績を削除しました");
      setWorks(works.filter((work) => work.id !== id));
    } catch (error) {
      console.error("Error deleting work:", error);
      toast.error("実績の削除に失敗しました");
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
        <h1 className="text-2xl font-bold">実績管理</h1>
        <Button>新規作成</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>画像</TableHead>
              <TableHead>タイトル</TableHead>
              <TableHead>説明</TableHead>
              <TableHead>作成日</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {works.map((work) => (
              <TableRow key={work.id}>
                <TableCell>
                  <div className="relative w-12 h-12">
                    <Image
                      src={work.image_url}
                      alt={work.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </TableCell>
                <TableCell>{work.title}</TableCell>
                <TableCell>{work.description}</TableCell>
                <TableCell>
                  {format(new Date(work.created_at), "yyyy/MM/dd", { locale: ja })}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => router.push(`/admin/works/${work.id}`)}
                    >
                      編集
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(work.id)}
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
