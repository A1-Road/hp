"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getEvents } from "@/actions/events";
import { getNewsList } from "@/actions/news";
import type { Event } from "@/lib/luma";
import type { Article } from "@/lib/microcms";
import { formatDate } from "@/lib/utils";
import { Factory, Building2, Plane } from "lucide-react";

export const runtime = "edge";

// FAQ アイテム
const faqItems: { question: string; answer: string }[] = [
  // {
  //   question: "AIとWeb3の組み合わせにはどのようなメリットがありますか？",
  //   answer:
  //     "AIとWeb3の組み合わせにより、データの透明性と信頼性が向上し、より公平で効率的な意思決定が可能になります。また、AIの分析能力とWeb3の分散型特性を活かすことで、新しいビジネスモデルの創出が期待できます。",
  // },
  // {
  //   question: "DAOプラットフォームの導入にはどのくらいの期間がかかりますか？",
  //   answer:
  //     "プロジェクトの規模や要件によって異なりますが、基本的なプラットフォームの構築には3-6ヶ月程度かかります。その後、組織の特性に合わせたカスタマイズや、メンバーのトレーニング期間も考慮する必要があります。",
  // },
  // {
  //   question: "ウォレットレス認証はどのように安全性を確保していますか？",
  //   answer:
  //     "ウォレットレス認証は、生体認証やデバイス固有の識別子を活用し、従来のパスワード認証よりも高いセキュリティを実現しています。また、ブロックチェーン技術を活用することで、認証情報の改ざんを防ぎ、より安全な認証プロセスを提供しています。",
  // },
  // {
  //   question: "AI導入の際のデータプライバシー対策はどのように行っていますか？",
  //   answer:
  //     "データの匿名化や暗号化、アクセス制御など、多層的なセキュリティ対策を実施しています。また、GDPRや個人情報保護法などの規制に準拠したデータ管理を行い、プライバシー保護に配慮しています。",
  // },
];

// 実績データ
const achievements = [
  {
    id: 1,
    title: "Road to DEVCON SOUTHEAST ASIA",
    image: "/road-to-devcon.png",
  },
  {
    id: 2,
    title: "Joba",
    image: "/joba.png",
  },
  {
    id: 3,
    title: "Unyte",
    image: "/unyte.png",
  },
  {
    id: 4,
    title: "Showtime",
    image: "/showtime.png",
  },
  {
    id: 5,
    title: "やいまSDGsシンポジウム",
    image: "/yaima.png",
  },
];

// 事業内容カード
const businessCards = [
  {
    id: 1,
    title: "DAOアドバイザリー",
    description:
      "DAO（分散型自律組織）の設計・構築・運営をトータルサポート。組織の透明性と効率性を高め、新しい形の事業の進め方を実現します。",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "AIエージェント開発",
    description:
      "製造業、建設業、観光業向けにカスタマイズされたAIソリューションを提供。業務効率化と新たな価値創造を支援します。",
    image: "/placeholder.svg?height=300&width=400",
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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden blob-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-beige-500/20 to-transparent"></div>
        {/* <div className="absolute inset-0">
          <Image
            src="/placeholder.jpg"
            alt="Hero Background"
            fill
            className="object-cover z-0 opacity-20"
            priority
          />
        </div> */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] items-center gap-8 max-w-6xl mx-auto">
            <div className="md:pl-12 lg:pl-24">
              <AnimatedSection>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  <span className="text-gradient">AIで会社を動かす、</span>
                  <br />
                  <span className="text-gradient">経営の新時代へ。</span>
                </h1>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-white text-gray-900 hover:bg-blue-100 hover:scale-105 transition-all duration-200 border border-gray-600"
                  >
                    <Link href="/contact">まずはご相談</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-white text-gray-900 hover:bg-blue-100 hover:scale-105 transition-all duration-200 border border-gray-600"
                  >
                    <Link href="/request">資料請求</Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
            <div className="flex items-center">
              <AnimatedSection>
                <div className="relative w-full flex justify-center md:justify-start md:pt-12">
                  <Image
                    src="/a1road-logo.png"
                    alt="A1 Road Logo"
                    width={400}
                    height={400}
                    className="w-[200px] md:w-[280px] h-auto"
                    priority
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 渋沢栄一セクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-center max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center">
                <div className="relative aspect-[3/4] w-full max-w-[300px] mx-auto">
                  <Image
                    src="/shibusawa.png"
                    alt="渋沢栄一"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="font-bold text-xl">渋沢栄一</p>
                  <p className="text-muted-foreground">日本近代資本主義の父</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">すべての人々をつなぐ架け橋へ</h2>
              <div className="space-y-6 text-lg">
                <p>
                  世界にある見えない資産をつなげ、その力を引き出します。ブロックチェーン技術をはじめとする最新テクノロジーの力で、我々の生きる社会のあらゆる問題を解決します。
                </p>
                <p>私たちのミッションは、すべての人々をつなげることです。</p>
                <p>
                  近代日本資本主義の礎を築いた渋沢栄一の精神を繋ぎ、社会に広めることで、皆様と未来をつくりあげてゆきます。
                </p>
              </div>
            </AnimatedSection>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/about-us">エーワンロード株式会社について</Link>
            </Button>
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
                        <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center">
                          {index === 0 && <Factory className="w-16 h-16 text-beige-600" />}
                          {index === 1 && <Building2 className="w-16 h-16 text-beige-600" />}
                          {index === 2 && <Plane className="w-16 h-16 text-beige-600" />}
                        </div>
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
            <Button asChild variant="outline" className="rounded-full">
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
                className="w-full h-auto rounded-2xl shadow-lg"
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

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={achievement.id} delay={index * 100}>
                <div className="text-center">
                  <div className="relative h-36 w-full mx-auto mb-4 overflow-hidden">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      width={200}
                      height={200}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="font-bold mb-2">{achievement.title}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
            <Button asChild variant="outline" className="rounded-full">
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
                          <Button asChild size="sm" className="whitespace-nowrap rounded-full">
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
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/media-and-events">すべてのイベントを見る</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <section className="py-20 bg-beige-50/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">よくあるご質問</h2>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white mb-4 rounded-lg shadow-sm"
                  >
                    <AccordionTrigger className="px-6 py-4">{faq.question}</AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </AnimatedSection>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
