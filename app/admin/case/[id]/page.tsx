"use client";

export const runtime = "edge";

import { useEffect, useState, use } from "react";
import { supabase } from "@/lib/supabase";
import { Work } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";

export default function CaseEdit({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [title, setTitle] = useState("");
  const [industry, setIndustry] = useState("");
  const [challenge, setChallenge] = useState("");
  const [solution, setSolution] = useState("");
  const [results, setResults] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [currentImageUrl, setCurrentImageUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const { data, error } = await supabase
          .from("works")
          .select("*")
          .eq("id", resolvedParams.id)
          .single();

        if (error) throw error;

        setTitle(data?.title || "");
        setIndustry(data?.industry || "");
        setChallenge(data?.challenge || "");
        setSolution(data?.solution || "");
        setResults(data?.results.join(", ") || "");
        setTechnologies(data?.technologies.join(", ") || "");
        setCurrentImageUrl(data?.image_url || null);
      } catch (error) {
        console.error("Error fetching work:", error);
        toast.error("事例情報の取得に失敗しました");
        router.push("/admin/contacts");
      }
    };

    fetchWork();
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
        const filePath = `works/${fileName}`;

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

      const resultsArray = results.split(",").map((item) => item.trim());
      const technologiesArray = technologies.split(",").map((item) => item.trim());

      const { error: updateError } = await supabase
        .from("works")
        .update({
          title,
          industry,
          challenge,
          solution,
          results: resultsArray,
          technologies: technologiesArray,
          image_url: imageUrl,
          updated_at: new Date().toISOString(),
        })
        .eq("id", resolvedParams.id);

      if (updateError) {
        throw new Error(`事例の更新に失敗しました: ${updateError.message}`);
      }

      toast.success("事例を更新しました");
      router.push("/admin/case");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "予期せぬエラーが発生しました";
      setError(errorMessage);
      toast.error(errorMessage);
      console.error("Error updating work:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">事例編集</h1>
      {error && <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-md">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">タイトル</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">業界</label>
          <Input value={industry} onChange={(e) => setIndustry(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">課題</label>
          <Textarea
            value={challenge}
            onChange={(e) => setChallenge(e.target.value)}
            required
            className="min-h-[100px]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">解決策</label>
          <Textarea
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            required
            className="min-h-[100px]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">成果（カンマ区切り）</label>
          <Input value={results} onChange={(e) => setResults(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">使用技術（カンマ区切り）</label>
          <Input value={technologies} onChange={(e) => setTechnologies(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">画像</label>
          {currentImageUrl && (
            <div className="mb-4">
              <Image
                src={currentImageUrl}
                alt="現在の画像"
                width={320}
                height={180}
                className="rounded-lg shadow-md"
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
          <Button type="button" variant="outline" onClick={() => router.push("/admin/case")}>
            キャンセル
          </Button>
        </div>
      </form>
    </div>
  );
}
