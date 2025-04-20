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

interface Member {
  id: string;
  name: string;
  position: string;
  bio: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
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
    const fetchMembers = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // テーブルの存在確認
        const { data: tableExists, error: tableError } = await supabase
          .from("members")
          .select("id")
          .limit(1);

        if (tableError) {
          if (tableError.code === "42P01") {
            setError(
              "メンバーテーブルが存在しません。Supabaseのダッシュボードでテーブルを作成してください。"
            );
            toast.error("メンバーテーブルが存在しません");
            return;
          }
          throw tableError;
        }

        const { data, error } = await supabase
          .from("members")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching members:", error);
          setError(`メンバーの取得に失敗しました: ${error.message}`);
          toast.error(`メンバーの取得に失敗しました: ${error.message}`);
          return;
        }
        setMembers(data || []);
      } catch (error) {
        console.error("Error fetching members:", error);
        setError("メンバーの取得に失敗しました");
        toast.error("メンバーの取得に失敗しました");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("このメンバーを削除してもよろしいですか？")) {
      return;
    }

    try {
      const { error } = await supabase.from("members").delete().eq("id", id);

      if (error) {
        throw error;
      }

      toast.success("メンバーを削除しました");
      setMembers(members.filter((member) => member.id !== id));
    } catch (error) {
      console.error("Error deleting member:", error);
      toast.error("メンバーの削除に失敗しました");
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
        <h1 className="text-2xl font-bold">メンバー管理</h1>
        <Button>新規作成</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>画像</TableHead>
              <TableHead>名前</TableHead>
              <TableHead>役職</TableHead>
              <TableHead>作成日</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className="relative w-12 h-12">
                    <Image
                      src={member.image_url}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.position}</TableCell>
                <TableCell>
                  {format(new Date(member.created_at), "yyyy/MM/dd", { locale: ja })}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => router.push(`/admin/members/${member.id}`)}
                    >
                      編集
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(member.id)}
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
