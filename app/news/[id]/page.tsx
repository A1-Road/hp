import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaArrowLeft } from "react-icons/fa";
import { getNewsById } from "@/actions/news";
import { formatDate } from "@/lib/utils";
import Markdown from "react-markdown";
import { AnimatedSection } from "@/components/ui/animated-section";

export default async function NewsDetail({ params }: { params: { id: string } }) {
  const { id } = await params;
  const newsId = Number.parseInt(id);

  if (isNaN(newsId)) {
    notFound();
  }

  const news = await getNewsById(newsId);

  if (!news) {
    notFound();
  }

  return (
    <div className="pt-24 blob-bg">
      <div className="absolute inset-0 grid-pattern opacity-30 z-0"></div>

      <article className="container-custom relative z-10">
        <AnimatedSection>
          <div className="mb-8">
            <Link
              href="/news"
              className="text-primary hover:underline flex items-center text-sm font-medium"
            >
              <FaArrowLeft className="mr-1 h-4 w-4" />
              ニュース一覧に戻る
            </Link>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              {news.category}
            </span>
            <div className="flex items-center text-muted-foreground">
              <FaCalendarAlt className="h-4 w-4 mr-1" />
              {formatDate(news.date)}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">{news.title}</h1>
        </AnimatedSection>

        {news.image_url && (
          <AnimatedSection delay={200}>
            <div className="mb-8 relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src={news.image_url || "/placeholder.svg"}
                alt={news.title}
                width={1200}
                height={600}
                className="w-full h-auto transition-transform duration-500 hover:scale-105"
              />
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection delay={300}>
          <div className="glass-card p-8 rounded-2xl mb-8">
            <div className="prose prose-lg max-w-none">
              <Markdown>{news.content}</Markdown>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="mt-12 border-t pt-8">
            <h2 className="text-xl font-bold mb-4">関連情報</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/works">実績紹介を見る</Link>
              </Button>
              <Button asChild className="rounded-full">
                <Link href="/contact">お問い合わせ</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </article>
    </div>
  );
}
