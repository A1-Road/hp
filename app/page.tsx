"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getEvents } from "@/actions/events";
import { getNewsList } from "@/actions/news";
import { getYoutubeVideos } from "@/actions/youtube";
import type { Event } from "@/lib/luma";
import type { Article } from "@/lib/microcms";
import type { YouTubeVideo } from "@/actions/youtube";
import { useEffect, useState } from "react";
import { formatDate } from "@/lib/utils";
import { Factory, Building2, Plane } from "lucide-react";
import FAQ from "@/components/faq";

export const runtime = "edge";

// 事業内容カード
const businessCards = [
  {
    id: 1,
    title: "DAOアドバイザリー",
    description:
      "DAO（分散型自律組織）の設計・構築・運営をトータルサポート。組織の透明性と効率性を高め、新しい形の事業の進め方を実現します。",
    image: "/dao-advisory.png",
  },
  {
    id: 2,
    title: "AIエージェント開発",
    description:
      "企業の特性や課題に合わせたAIエージェントを提供。AIと人間の協働による新たな価値創造と、業界のパラダイムシフトを推進します。",
    image: "/ai-agent.png",
  },
  {
    id: 3,
    title: "Bankless Japan",
    description:
      "グローバルで認知されたWeb3メディア「Bankless」の日本版。AI、クリプト、DeFi、Web3の基本から最新トレンドまで、わかりやすく解説。",
    image: "/bankless-logo.png",
    link: "https://banklessjp.substack.com/",
  },
];

export default function HomePage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      setVideos(await getYoutubeVideos());
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [eventsData, newsData] = await Promise.all([getEvents(), getNewsList()]);

        setEvents(eventsData);
        setNews(newsData.contents);
      } catch (error) {
        console.error("データ取得エラー:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="pt-20">
      {/* ヒーローセクション */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 bottom-0 w-full">
            <Image
              src="/top-back.jpg"
              alt="Hero Background"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/30 to-transparent z-10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid grid-cols-[4fr_18fr_5fr_4fr] items-center gap-4 mx-auto">
            <div className="col-start-2 max-w-3xl">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  <span className="text-black [text-shadow:_-0.5px_-0.5px_0_white,_0.5px_-0.5px_0_white,_-0.5px_0.5px_0_white,_0.5px_0.5px_0_white]">
                    日本の「屋台骨」産業に特化した
                  </span>
                  <div className="h-4" />
                  <span className="text-black [text-shadow:_-0.5px_-0.5px_0_white,_0.5px_-0.5px_0_white,_-0.5px_0.5px_0_white,_0.5px_0.5px_0_white] md:whitespace-nowrap">
                    AI/Web3開発企業
                  </span>
                </h2>
                <h3 className="text-2xl font-bold mb-4 text-black [text-shadow:_-0.5px_-0.5px_0_white,_0.5px_-0.5px_0_white,_-0.5px_0.5px_0_white,_0.5px_0.5px_0_white] max-w-3xl mx-auto">
                  エーワンロードは、製造業・観光業・建設業・クリエイター業など日本の基幹産業が抱える課題に対し、AIとWeb3（ブロックチェーン・DAO等）技術を活用したワンストップ開発・コンサルティングでデジタル化・DXを推進し、グローバルな競争力強化を支援します。
                </h3>
              </AnimatedSection>
            </div>
            <div className="col-start-3">
              <AnimatedSection delay={100}>
                <div className="flex flex-col gap-4 mx-auto items-center">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-primary text-white hover:bg-primary/90 hover:text-white hover:scale-105 transition-all duration-200 text-2xl font-bold w-full max-w-xs"
                  >
                    <Link href="/contact">まずはご相談</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-200 border-2 border-primary text-2xl font-bold w-full max-w-xs"
                  >
                    <Link href="/request">資料請求</Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO セクション */}
      <section className="py-20 bg-beige-50/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">WHAT WE DO</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                エーワンロードは、製造業・観光業・建設業を中心にAI技術や分散化技術でデジタル化を提供するソフトウェア開発企業です。
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessCards.map((business, index) => (
              <AnimatedSection key={business.id} delay={index * 100}>
                <div className="card-3d h-full overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="relative h-48 bg-gradient-to-br from-beige-50 to-beige-100 flex items-center justify-center">
                    {business.link ? (
                      <Link
                        href={business.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src={business.image}
                            alt={business.title}
                            width={200}
                            height={200}
                            className="object-contain hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </Link>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src={business.image}
                          alt={business.title}
                          width={200}
                          height={200}
                          className="object-contain hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{business.title}</h3>
                    <p className="text-muted-foreground">{business.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              className="rounded-full bg-primary text-white hover:bg-primary/90 hover:text-white hover:scale-105 transition-all duration-200 text-lg"
            >
              <Link href="/case">具体的な事例を見る</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 相談までの流れセクション */}
      <section className="py-20 bg-beige-50/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                あなたのお悩みを一気通貫でサポート、解決します
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="max-w-4xl mx-auto">
              <Image
                src="/workflow.png"
                alt="あなたのお悩みを一気通貫でサポート、解決します"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 実績セクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">実績（一部）</h2>
            </div>
          </AnimatedSection>

          <div className="flex justify-center mb-16">
            <AnimatedSection>
              <div className="relative w-[60vw] h-[15vw]">
                <Image src="/collaborate.png" alt="実績" fill className="object-contain" />
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="max-w-6xl mx-auto mt-16">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold">弊社セミナー・過去動画一覧</h3>
                <Button
                  asChild
                  className="rounded-full bg-primary text-white hover:bg-primary/90 hover:text-white hover:scale-105 transition-all duration-200"
                >
                  <Link
                    href="https://www.youtube.com/playlist?list=PLTf_ID6qmwYIwa4KLmc_wfptX_Pzkc49H"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    弊社YouTubeはこちら →
                  </Link>
                </Button>
              </div>

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

      {/* メディアセクション */}
      <section className="py-20 bg-beige-50/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">最新ニュース</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                最新のニュース・プレスリリースをご紹介します
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
                      <div className="h-16 animate-pulse bg-white rounded-xl"></div>
                    </AnimatedSection>
                  ))}
              </div>
            ) : news.length > 0 ? (
              <div className="space-y-4">
                {news
                  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                  .slice(0, 3)
                  .map((item, index) => (
                    <AnimatedSection key={item.id} delay={index * 100}>
                      <Link href={`/media/${item.id}`}>
                        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            {formatDate(item.createdAt, true)}
                          </span>
                          <span className="text-gray-900">{item.title}</span>
                        </div>
                      </Link>
                    </AnimatedSection>
                  ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">現在ニュースはありません。</p>
              </div>
            )}
          </div>
          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              className="rounded-full bg-primary text-white hover:bg-primary/90 hover:text-white hover:scale-105 transition-all duration-200 text-lg"
            >
              <Link href="/media-and-events">すべてのニュースを見る</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* イベントセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">今後のイベント</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
            ) : events.length > 0 ? (
              <div className="space-y-4">
                {events
                  .filter((event) => new Date(event.start_time) >= new Date())
                  .sort(
                    (a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
                  )
                  .slice(0, 3)
                  .map((event, index) => (
                    <AnimatedSection key={event.id} delay={index * 100}>
                      <div className="card-3d p-6 bg-white rounded-xl shadow-md">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-1"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                {formatDate(event.start_time, true)}
                              </div>
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-1"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                {event.location}
                              </div>
                            </div>
                          </div>
                          <Button
                            asChild
                            size="sm"
                            className="whitespace-nowrap rounded-full bg-primary text-white hover:bg-primary/90 hover:text-white hover:scale-105 transition-all duration-200 text-lg"
                          >
                            <Link
                              href={`https://lu.ma/event/${event.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              詳細・申し込み
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">現在予定されているイベントはありません。</p>
              </div>
            )}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              className="rounded-full bg-primary text-white hover:bg-primary/90 hover:text-white hover:scale-105 transition-all duration-200 text-lg"
            >
              <Link href="/media-and-events">すべてのイベントを見る</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <FAQ />
    </div>
  );
}
