"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function AchievementCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
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
      let imageUrl = null;

      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `achievements/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("images")
          .upload(filePath, imageFile);

        if (uploadError) {
          throw new Error(`画像のアップロードに失敗しました: ${uploadError.message}`);
        }

        const {
          data: { publicUrl },
        } = supabase.storage.from("images").getPublicUrl(filePath);

        imageUrl = publicUrl;
      }

      const { error: insertError } = await supabase.from("achievements").insert({
        title,
        description,
        image_url: imageUrl,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      if (insertError) {
        throw new Error(`実績の作成に失敗しました: ${insertError.message}`);
      }

      toast.success("実績を作成しました");
      router.push("/admin/achievements");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "予期せぬエラーが発生しました";
      setError(errorMessage);
      toast.error(errorMessage);
      console.error("Error creating achievement:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">実績作成</h1>
      {error && <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-md">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">タイトル</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">説明</label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="min-h-[200px]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">画像</label>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="cursor-pointer"
          />
        </div>
        <div className="flex space-x-2">
          <Button type="submit" disabled={isUploading}>
            {isUploading ? "アップロード中..." : "作成"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin/achievements")}
          >
            キャンセル
          </Button>
        </div>
      </form>
    </div>
  );
}
