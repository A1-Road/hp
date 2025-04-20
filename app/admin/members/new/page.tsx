"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function MemberCreate() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [expertise, setExpertise] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [social, setSocial] = useState({
    twitter: "",
    linkedin: "",
    github: "",
  });
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
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        throw new Error("認証されていません。ログインしてください。");
      }

      let imageUrl = null;

      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `members/${fileName}`;

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

      const expertiseArray = expertise.split(",").map((item) => item.trim());

      const { error: insertError } = await supabase.from("members").insert({
        name,
        role,
        bio,
        expertise: expertiseArray,
        image_url: imageUrl,
        social,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      if (insertError) {
        throw new Error(`メンバー情報の作成に失敗しました: ${insertError.message}`);
      }

      toast.success("メンバー情報を作成しました");
      router.push("/admin/dashboard");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "予期せぬエラーが発生しました";
      setError(errorMessage);
      toast.error(errorMessage);
      console.error("Error creating member:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">メンバー作成</h1>
      {error && <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-md">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">名前</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">役職</label>
          <Input value={role} onChange={(e) => setRole(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">自己紹介</label>
          <Textarea value={bio} onChange={(e) => setBio(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">専門領域（カンマ区切り）</label>
          <Input value={expertise} onChange={(e) => setExpertise(e.target.value)} required />
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
        <div>
          <label className="block text-sm font-medium mb-1">SNSリンク</label>
          <div className="space-y-4">
            <Input
              placeholder="Twitter URL"
              value={social.twitter}
              onChange={(e) => setSocial({ ...social, twitter: e.target.value })}
            />
            <Input
              placeholder="LinkedIn URL"
              value={social.linkedin}
              onChange={(e) => setSocial({ ...social, linkedin: e.target.value })}
            />
            <Input
              placeholder="GitHub URL"
              value={social.github}
              onChange={(e) => setSocial({ ...social, github: e.target.value })}
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <Button type="submit" disabled={isUploading}>
            {isUploading ? "作成中..." : "作成"}
          </Button>
          <Button type="button" variant="outline" onClick={() => router.push("/admin/dashboard")}>
            キャンセル
          </Button>
        </div>
      </form>
    </div>
  );
}
