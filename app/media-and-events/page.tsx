"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import type { Event } from "@/lib/luma";
import type { Article } from "@/lib/microcms";
import type { YouTubeVideo } from "@/actions/youtube";
import { formatDate } from "@/lib/utils";
import { getEvents } from "@/actions/events";
import { getNewsList } from "@/actions/news";
import { getYoutubeVideos } from "@/actions/youtube";

export const runtime = "edge";

// カテゴリータブ
const tabs = [
  { id: "all", label: "すべて" },
  { id: "プレスリリース", label: "プレスリリース" },
  { id: "ニュース", label: "ニュース" },
];

export default function MediaAndEventsPage() {
  const [newsItems, setNewsItems] = useState<Article[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  // YouTube動画を取得
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoData = await getYoutubeVideos();
        setVideos(videoData);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [newsData, eventsData] = await Promise.all([getNewsList(), getEvents()]);

        setNewsItems(newsData.contents);
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // 表示するアイテムをフィルタリング
  const filteredNewsItems = () => {
    const newsAsItems = newsItems.map((news) => ({
      id: `news-${news.id}`,
      type: news.category?.name || "press",
      title: news.title,
      date: new Date(news.createdAt),
      image: news.thumbnail?.url || "/placeholder.svg?height=200&width=400",
      url: `/media/${news.id}`,
      excerpt: news.description,
    }));

    if (activeTab !== "all") {
      return newsAsItems.filter((item) => item.type === activeTab);
    }

    return newsAsItems;
  };

  // イベントをアイテムとして変換
  const eventItems = events.map((event) => ({
    id: `event-${event.id}`,
    type: "events",
    title: event.title,
    date: new Date(event.start_time),
    location: event.location,
    image: event.cover_image_url || "/placeholder.svg?height=200&width=400",
    url: `https://lu.ma/event/${event.slug}`,
  }));

  // フィルタリングされたニュースアイテム
  const displayedNewsItems = filteredNewsItems();

  return (
    <div className="pt-24">
      {/* ヘッダーセクション */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Media and Events</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            プレスリリース、ニュース、イベント情報を掲載しています
          </p>
        </div>
      </section>

      {/* メディアセクション */}
      <section className="container mx-auto px-4 mb-16">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Media</h2>
          </div>
        </AnimatedSection>

        {/* フィルターセクション */}
        <div className="bg-beige-50/80 p-6 rounded-xl shadow-sm mb-8">
          <div className="flex overflow-x-auto pb-2 gap-2">
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
        </div>

        {/* コンテンツセクション */}
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
        ) : displayedNewsItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedNewsItems.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 100}>
                <Link href={item.url}>
                  <div className="card-3d h-full overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                        {item.type}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <FaCalendarAlt className="mr-2 h-3 w-3" />
                        {formatDate(item.date.toISOString(), true)}
                      </div>

                      <h3 className="font-bold mb-3 line-clamp-2">{item.title}</h3>

                      {item.excerpt && (
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                          {item.excerpt}
                        </p>
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

      {/* 動画セクション */}
      <section className="container mx-auto px-4 mb-16">
        <AnimatedSection>
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">Videos</h2>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto text-right mb-8">
          <Button
            asChild
            className="rounded-full bg-primary text-white hover:bg-primary/90 hover:text-white hover:scale-105 transition-all duration-200"
          >
            <Link
              href="https://www.youtube.com/@daoathon"
              target="_blank"
              rel="noopener noreferrer"
            >
              チャンネルはこちら →
            </Link>
          </Button>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* 強調する動画1 */}
            <AnimatedSection delay={100}>
              <div className="flex flex-col">
                <div className="aspect-video rounded-lg shadow-md overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/ajQZWOjOH20"
                    title="DAOathon動画"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-sm mt-3 font-medium">
                  DAOathon : Japan&apos;s first Decentralized Autonomous Organization Hackathon
                </p>
              </div>
            </AnimatedSection>

            {/* 強調する動画2 */}
            <AnimatedSection delay={200}>
              <div className="flex flex-col">
                <div className="aspect-video rounded-lg shadow-md overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/IBQWBi5ww7w"
                    title="DAOathon動画"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-sm mt-3 font-medium">
                  DAO Hackathon : Exploring the Future of Web3 Organizations
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* プレイリスト動画一覧 */}
          <AnimatedSection delay={300}>
            <div className="mt-12">
              <div className="flex justify-center">
                <div className="grid grid-cols-5 gap-6 max-w-[1200px]">
                  {videos.slice(0, 5).map((video) => {
                    const videoId = video.snippet.resourceId.videoId;
                    return (
                      <div key={videoId} className="flex flex-col">
                        <div className="aspect-video rounded-lg shadow-md overflow-hidden h-[120px]">
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={video.snippet.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <p className="text-xs mt-2 line-clamp-2 text-center">
                          {video.snippet.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 今後のイベントセクション */}
      <section className="py-16 bg-beige-50/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Events</h2>
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
                {eventItems.filter((event) => new Date(event.date) >= new Date()).length > 0 ? (
                  <div className="space-y-4">
                    {eventItems
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
                                    {formatDate(event.date.toISOString(), true)}
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
