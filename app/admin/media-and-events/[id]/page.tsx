"use client";

export const runtime = "edge";

import { useState, useEffect, use } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";

export default function NewsEdit({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [currentImageUrl, setCurrentImageUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase
          .from("news")
          .select("*")
          .eq("id", resolvedParams.id)
          .single();

        if (error) throw error;

        setTitle(data.title);
        setContent(data.content);
        setCategory(data.category);
        setExcerpt(data.excerpt);
        setCurrentImageUrl(data.image_url);
      } catch (error) {
        console.error("Error fetching news:", error);
        toast.error("ニュース情報の取得に失敗しました");
        router.push("/admin/media-and-events");
      }
    };

    fetchNews();
  }, [resolvedParams.id, router]);

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    setError(null);

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        throw new Error("認証されていません。ログインしてください。");
      }

      let imageUrl = currentImageUrl;

      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `news/${fileName}`;

        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (!user) {
          throw new Error("ユーザー情報の取得に失敗しました。");
        }

        const { error: uploadError } = await supabase.storage
          .from("images")
          .upload(filePath, imageFile, {
            cacheControl: "3600",
            upsert: false,
          });

        if (uploadError) {
          throw new Error(`画像のアップロードに失敗しました: ${uploadError.message}`);
        }

        const {
          data: { publicUrl },
        } = supabase.storage.from("images").getPublicUrl(filePath);

        imageUrl = publicUrl;
      }

      const { error: updateError } = await supabase
        .from("news")
        .update({
          title,
          content,
          category,
          excerpt,
          image_url: imageUrl,
          updated_at: new Date().toISOString(),
        })
        .eq("id", resolvedParams.id);

      if (updateError) {
        throw new Error(`ニュースの更新に失敗しました: ${updateError.message}`);
      }

      toast.success("ニュースを更新しました");
      router.push("/admin/media-and-events");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "予期せぬエラーが発生しました";
      setError(errorMessage);
      toast.error(errorMessage);
      console.error("Error updating news:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">ニュース編集</h1>
      {error && <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-md">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">タイトル</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">カテゴリー</label>
          <Select value={category} onValueChange={setCategory} required>
            <SelectTrigger>
              <SelectValue placeholder="カテゴリーを選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="お知らせ">お知らせ</SelectItem>
              <SelectItem value="イベント">イベント</SelectItem>
              <SelectItem value="メンテナンス">メンテナンス</SelectItem>
              <SelectItem value="その他">その他</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">概要</label>
          <Textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            required
            placeholder="ニュースの概要を入力してください"
            className="min-h-[100px]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">内容</label>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="min-h-[200px]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">画像</label>
          {currentImageUrl && (
            <div className="mb-2">
              <Image
                src={currentImageUrl}
                alt="現在の画像"
                width={320}
                height={180}
                className="rounded-md"
              />
            </div>
          )}
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="cursor-pointer"
          />
        </div>
        <div className="flex space-x-2">
          <Button type="submit" disabled={isUploading}>
            {isUploading ? "更新中..." : "更新"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin/media-and-events")}
          >
            キャンセル
          </Button>
        </div>
      </form>
    </div>
  );
}
