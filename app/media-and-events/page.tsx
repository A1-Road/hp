"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import type { News, Event } from "@/types/database";
import { formatDate } from "@/lib/utils";

// アイテム表示用の共通型定義
interface NewsItem {
  id: string;
  type: string;
  title: string;
  date: Date;
  image: string;
  url: string;
  excerpt?: string;
  location?: never;
}

interface EventItem {
  id: string;
  type: string;
  title: string;
  date: Date;
  image: string;
  url: string;
  location?: string;
  excerpt?: never;
}

type DisplayItem = NewsItem | EventItem;

// カテゴリータブ
const tabs = [
  { id: "all", label: "すべて" },
  { id: "news", label: "プレスリリース" },
  { id: "blog", label: "メディア掲載" },
  { id: "events", label: "イベント" },
];

// 時期フィルター
const timeFilters = [
  { id: "all", label: "すべての期間" },
  { id: "upcoming", label: "今後" },
  { id: "past", label: "過去" },
];

export default function MediaAndEventsPage() {
  const [newsItems, setNewsItems] = useState<News[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [timeFilter, setTimeFilter] = useState("all");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [newsResponse, eventsResponse] = await Promise.all([
          fetch("/api/news"),
          fetch("/api/events"),
        ]);

        if (newsResponse.ok) {
          const newsData = await newsResponse.json();
          setNewsItems(newsData);
        }

        if (eventsResponse.ok) {
          const eventsData = await eventsResponse.json();
          setEvents(eventsData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // 表示するアイテムをフィルタリング
  const filteredItems = (): DisplayItem[] => {
    const now = new Date();

    // ニュース記事をアイテムとして変換
    const newsAsItems: NewsItem[] = newsItems.map((news) => ({
      id: `news-${news.id}`,
      type: news.category || "news",
      title: news.title,
      date: new Date(news.date),
      image: news.image_url || "/placeholder.svg?height=200&width=400",
      url: `/news/${news.id}`,
      excerpt: news.excerpt,
    }));

    // イベントをアイテムとして変換
    const eventsAsItems: EventItem[] = events.map((event) => ({
      id: `event-${event.id}`,
      type: "events",
      title: event.title,
      date: new Date(event.date),
      location: event.location,
      image: "/placeholder.svg?height=200&width=400",
      url: event.url,
    }));

    // 全てのアイテムを結合
    let allItems = [...newsAsItems, ...eventsAsItems];

    // タブに応じてフィルタリング
    if (activeTab !== "all") {
      if (activeTab === "news") {
        allItems = allItems.filter((item) => item.type === "news" || item.type === "press");
      } else if (activeTab === "blog") {
        allItems = allItems.filter((item) => item.type === "blog" || item.type === "media");
      } else {
        allItems = allItems.filter((item) => item.type === activeTab);
      }
    }

    // 時期でフィルタリング
    if (timeFilter === "upcoming") {
      allItems = allItems.filter((item) => item.date >= now);
    } else if (timeFilter === "past") {
      allItems = allItems.filter((item) => item.date < now);
    }

    // 日付順に並べ替え
    return allItems.sort((a, b) => b.date.getTime() - a.date.getTime());
  };

  // フィルタリングされたアイテム
  const displayedItems = filteredItems();

  return (
    <div className="pt-24">
      {/* ヘッダーセクション */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Media and Events</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            プレスリリース、メディア掲載情報、イベント情報を掲載しています
          </p>
        </div>
      </section>

      {/* フィルターセクション */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-beige-50/80 p-6 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    activeTab === tab.id ? "bg-primary text-white" : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex overflow-x-auto gap-2">
              {timeFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setTimeFilter(filter.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    timeFilter === filter.id
                      ? "bg-primary text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* コンテンツセクション */}
      <section className="container mx-auto px-4 mb-16">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="h-96 animate-pulse bg-beige-100 rounded-2xl"></div>
                </AnimatedSection>
              ))}
          </div>
        ) : displayedItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedItems.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 100}>
                <Link href={item.url}>
                  <div className="card-3d h-full overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                        {item.type === "events"
                          ? "イベント"
                          : item.type === "news" || item.type === "press"
                            ? "プレスリリース"
                            : "メディア掲載"}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <FaCalendarAlt className="mr-2 h-3 w-3" />
                        {formatDate(item.date.toISOString(), true)}

                        {item.type === "events" && item.location && (
                          <div className="flex items-center ml-4">
                            <FaMapMarkerAlt className="mr-2 h-3 w-3" />
                            {item.location}
                          </div>
                        )}
                      </div>

                      <h3 className="font-bold mb-3 line-clamp-2">{item.title}</h3>

                      {item.excerpt && (
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                          {item.excerpt}
                        </p>
                      )}

                      {item.type === "events" && (
                        <div className="flex items-center text-primary text-sm font-medium">
                          <span>詳細を見る</span>
                          <FaExternalLinkAlt className="ml-2 h-3 w-3" />
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">選択した条件に一致するコンテンツがありません。</p>
          </div>
        )}
      </section>

      {/* 今後のイベントセクション */}
      <section className="py-16 bg-beige-50/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">今後のイベント</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                弊社主催・登壇予定のイベント情報をご紹介します
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {loading ? (
              <div className="space-y-4">
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <AnimatedSection key={index} delay={index * 100}>
                      <div className="h-32 animate-pulse bg-white rounded-2xl"></div>
                    </AnimatedSection>
                  ))}
              </div>
            ) : (
              <>
                {events.filter((event) => new Date(event.date) >= new Date()).length > 0 ? (
                  <div className="space-y-4">
                    {events
                      .filter((event) => new Date(event.date) >= new Date())
                      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                      .slice(0, 3)
                      .map((event, index) => (
                        <AnimatedSection key={event.id} delay={index * 100}>
                          <div className="card-3d p-6 bg-white rounded-xl">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div>
                                <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                                  <div className="flex items-center">
                                    <FaCalendarAlt className="mr-2 h-3 w-3" />
                                    {formatDate(event.date, true)}
                                  </div>
                                  <div className="flex items-center">
                                    <FaMapMarkerAlt className="mr-2 h-3 w-3" />
                                    {event.location}
                                  </div>
                                </div>
                              </div>
                              <Button asChild size="sm" className="whitespace-nowrap rounded-full">
                                <Link href={event.url} target="_blank" rel="noopener noreferrer">
                                  <span className="flex items-center">
                                    詳細・申し込み
                                    <FaExternalLinkAlt className="ml-2 h-3 w-3" />
                                  </span>
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </AnimatedSection>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      現在予定されているイベントはありません。
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
