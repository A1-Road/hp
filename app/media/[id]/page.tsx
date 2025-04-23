"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MediaArticle } from "@/types/media";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function MediaArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState<MediaArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const response = await fetch("/data/media.json");
        if (!response.ok) {
          throw new Error("Failed to fetch media articles");
        }
        const data = await response.json();
        const foundArticle = data.articles.find((a: MediaArticle) => a.id === id);
        setArticle(foundArticle || null);
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-24">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-96 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">記事が見つかりません</h1>
        <p className="text-muted-foreground mb-4">
          お探しの記事は存在しないか、削除された可能性があります。
        </p>
        <Button asChild>
          <Link href="/media-and-events">メディア一覧に戻る</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              {article.category === "press" ? "プレスリリース" : "メディア"}
            </span>
            <time className="text-sm text-muted-foreground">{formatDate(article.date)}</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
          <p className="text-xl text-muted-foreground">{article.excerpt}</p>
        </div>

        <div className="prose prose-lg max-w-none mb-8">
          {article.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        )}

        {article.youtubeUrl && (
          <div className="mt-8">
            <Button asChild variant="outline" className="gap-2">
              <a href={article.youtubeUrl} target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-red-500" />
                YouTubeで視聴する
              </a>
            </Button>
          </div>
        )}

        <div className="mt-12 pt-8 border-t">
          <Button asChild variant="outline">
            <Link href="/media-and-events">メディア一覧に戻る</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
