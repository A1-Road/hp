"use client";

export const runtime = "edge";

import { useEffect, useState } from "react";
import { use } from "react";
import { supabase } from "@/lib/supabase";

interface Achievement {
  id: string;
  title: string;
  description: string;
  image_url: string;
  created_at?: string;
  updated_at?: string;
}
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

export default function AchievementEdit({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [achievement, setAchievement] = useState<Achievement | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchAchievement = async () => {
      const { data } = await supabase
        .from("achievements")
        .select("*")
        .eq("id", resolvedParams.id)
        .single();

      if (data) {
        setAchievement(data);
        setTitle(data.title);
        setDescription(data.description);
        setImageUrl(data.image_url);
      }
    };

    fetchAchievement();
  }, [resolvedParams.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase
      .from("achievements")
      .update({
        title,
        description,
        image_url: imageUrl,
        updated_at: new Date().toISOString(),
      })
      .eq("id", resolvedParams.id);

    if (error) {
      console.error("Error updating achievement:", error);
      return;
    }

    router.push("/admin/achievements");
  };

  if (!achievement) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">実績編集</h1>
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
          <label className="block text-sm font-medium mb-1">画像URL</label>
          <Input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        </div>
        <div className="flex space-x-2">
          <Button type="submit">保存</Button>
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
