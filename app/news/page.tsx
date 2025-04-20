import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { getNews, getCategories, getEvents } from "@/actions/news";
import NewsFilter from "@/components/news/news-filter";
import type { News as NewsType, Event } from "@/types/database";
import { formatDate } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Metadata } from "next";

interface NewsItemProps {
  news: NewsType;
  index: number;
}

function NewsItem({ news, index }: NewsItemProps) {
  return (
    <AnimatedSection delay={index * 100}>
      <div className="glass-card p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
            {news.category}
          </span>
          <div className="flex items-center text-muted-foreground text-sm">
            <FaCalendarAlt className="h-3 w-3 mr-1" />
            {formatDate(news.date)}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{news.title}</h3>
        <p className="text-muted-foreground mb-4">{news.excerpt}</p>
        <Link
          href={`/news/${news.id}`}
          className="text-primary hover:underline flex items-center text-sm font-medium"
        >
          詳細を読む
          <FaArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </AnimatedSection>
  );
}

interface EventItemProps {
  event: Event;
  index: number;
}

function EventItem({ event, index }: EventItemProps) {
  return (
    <AnimatedSection delay={index * 100}>
      <div className="card-3d p-4 bg-white rounded-xl border border-beige-200/50 shadow-md">
        <h3 className="font-bold mb-2">{event.title}</h3>
        <div className="text-sm text-muted-foreground mb-2">
          <div className="flex items-center mb-1">
            <FaCalendarAlt className="h-3 w-3 mr-1" />
            {formatDate(event.date, true)}
          </div>
          <div>{event.location}</div>
        </div>
        <Button asChild size="sm" className="w-full rounded-full">
          <Link href={event.url} target="_blank" rel="noopener noreferrer">
            詳細・申し込み
          </Link>
        </Button>
      </div>
    </AnimatedSection>
  );
}

export const metadata: Metadata = {
  title: "ニュース | エーワンロード株式会社",
  description: "エーワンロード株式会社の最新ニュースやお知らせを掲載しています。",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "NewsMediaOrganization",
      name: "エーワンロード株式会社",
      url: "https://a1road.com",
      logo: {
        "@type": "ImageObject",
        url: "https://a1road.com/logo.png",
      },
      publishingPrinciples: "https://a1road.com/terms",
      newsUpdatesAndGuidelines: "https://a1road.com/news",
      mainEntityOfPage: {
        "@type": "CollectionPage",
        name: "ニュース一覧",
        description: "エーワンロード株式会社の最新ニュースやお知らせ",
        publisher: {
          "@type": "Organization",
          name: "エーワンロード株式会社",
        },
      },
    }),
  },
};

export default async function News({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  const { category, search } = await searchParams;
  const newsItems = await getNews({ category, search });
  const categories = await getCategories();
  const eventItems = await getEvents();

  return (
    <div className="pt-24 blob-bg">
      <div className="absolute inset-0 grid-pattern opacity-30 z-0"></div>

      <section className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            ニュース・イベント情報
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            エーワンロードの最新情報やイベント情報をお届けします
          </p>
        </div>

        <AnimatedSection>
          <NewsFilter categories={categories} selectedCategory={category} search={search} />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            <AnimatedSection>
              <h2 className="text-2xl font-bold mb-6">最新ニュース</h2>
            </AnimatedSection>

            {newsItems.length > 0 ? (
              <div className="space-y-6">
                {newsItems.map((item, index) => (
                  <NewsItem key={item.id} news={item} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  検索条件に一致するニュースが見つかりませんでした。
                </p>
              </div>
            )}

            <div className="mt-8 text-center">
              <Button variant="outline" className="rounded-full">
                過去のニュース一覧
              </Button>
            </div>
          </div>

          <div>
            <AnimatedSection delay={200}>
              <h2 className="text-2xl font-bold mb-6">イベント情報</h2>

              <div className="space-y-4">
                {eventItems.length > 0 ? (
                  eventItems.map((event, index) => (
                    <EventItem key={event.id} event={event} index={index} />
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">現在開催予定のイベントはありません。</p>
                  </div>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="mt-8 glass-card rounded-xl p-6">
                <h3 className="font-bold mb-4">メールマガジン登録</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  最新のニュースやイベント情報をメールでお届けします。
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="メールアドレス"
                    className="w-full px-3 py-2 border border-beige-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <Button type="submit" className="w-full rounded-full">
                    登録する
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
