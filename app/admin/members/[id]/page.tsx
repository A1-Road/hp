"use client";

export const runtime = "edge";

import { useEffect, useState, use } from "react";
import { supabase } from "@/lib/supabase";
import type { Member } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";

export default function MemberEdit({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [expertise, setExpertise] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [currentImageUrl, setCurrentImageUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [social, setSocial] = useState({
    twitter: "",
    linkedin: "",
    github: "",
  });
  const router = useRouter();

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const { data, error } = await supabase
          .from("members")
          .select("*")
          .eq("id", resolvedParams.id)
          .single();

        if (error) throw error;

        setName(data?.name || "");
        setRole(data?.role || "");
        setBio(data?.bio || "");
        setExpertise(data?.expertise?.join(", ") || "");
        setCurrentImageUrl(data?.image_url || null);

        // social オブジェクトを安全に初期化 - null/undefinedのケースもカバー
        const socialData = data?.social || {};
        setSocial({
          twitter: typeof socialData.twitter === "string" ? socialData.twitter : "",
          linkedin: typeof socialData.linkedin === "string" ? socialData.linkedin : "",
          github: typeof socialData.github === "string" ? socialData.github : "",
        });
      } catch (error) {
        console.error("Error fetching member:", error);
        toast.error("メンバー情報の取得に失敗しました");
        router.push("/admin/members");
      }
    };

    fetchMember();
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

      const { error: updateError } = await supabase
        .from("members")
        .update({
          name,
          role,
          bio,
          expertise: expertiseArray,
          image_url: imageUrl,
          social,
          updated_at: new Date().toISOString(),
        })
        .eq("id", resolvedParams.id);

      if (updateError) {
        throw new Error(`メンバー情報の更新に失敗しました: ${updateError.message}`);
      }

      toast.success("メンバー情報を更新しました");
      router.push("/admin/members");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "予期せぬエラーが発生しました";
      setError(errorMessage);
      toast.error(errorMessage);
      console.error("Error updating member:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">メンバー編集</h1>
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
            {isUploading ? "更新中..." : "更新"}
          </Button>
          <Button type="button" variant="outline" onClick={() => router.push("/admin/members")}>
            キャンセル
          </Button>
        </div>
      </form>
    </div>
  );
}
