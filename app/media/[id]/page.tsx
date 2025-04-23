"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { getNewsDetail } from "@/actions/news";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Article } from "@/lib/microcms";

export default function MediaDetailPage() {
  const { id } = useParams();
  const [news, setNews] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await getNewsDetail(id as string);
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
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

  if (!news) {
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
    <div className="pt-24">
      <article className="container mx-auto px-4 max-w-4xl">
        <header className="mb-8">
          <div className="mb-4">
            <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm">
              {news.category?.name || "プレスリリース"}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{news.title}</h1>
          <div className="flex items-center text-sm text-muted-foreground">
            <time dateTime={news.createdAt}>{formatDate(news.createdAt, true)}</time>
          </div>
        </header>

        {news.thumbnail && (
          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src={news.thumbnail.url}
              alt={news.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: news.content }} />
        </div>

        <div className="mt-16 pt-8 border-t mb-16">
          <Button asChild variant="outline">
            <Link href="/media-and-events">メディア一覧に戻る</Link>
          </Button>
        </div>
      </article>
    </div>
  );
}
