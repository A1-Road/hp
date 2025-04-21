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

// FAQ アイテム
const faqItems = [
  {
    question: "AIとWeb3の組み合わせにはどのようなメリットがありますか？",
    answer:
      "AIとWeb3の組み合わせにより、データの透明性と信頼性が向上し、より公平で効率的な意思決定が可能になります。また、AIの分析能力とWeb3の分散型特性を活かすことで、新しいビジネスモデルの創出が期待できます。",
  },
  {
    question: "DAOプラットフォームの導入にはどのくらいの期間がかかりますか？",
    answer:
      "プロジェクトの規模や要件によって異なりますが、基本的なプラットフォームの構築には3-6ヶ月程度かかります。その後、組織の特性に合わせたカスタマイズや、メンバーのトレーニング期間も考慮する必要があります。",
  },
  {
    question: "ウォレットレス認証はどのように安全性を確保していますか？",
    answer:
      "ウォレットレス認証は、生体認証やデバイス固有の識別子を活用し、従来のパスワード認証よりも高いセキュリティを実現しています。また、ブロックチェーン技術を活用することで、認証情報の改ざんを防ぎ、より安全な認証プロセスを提供しています。",
  },
  {
    question: "AI導入の際のデータプライバシー対策はどのように行っていますか？",
    answer:
      "データの匿名化や暗号化、アクセス制御など、多層的なセキュリティ対策を実施しています。また、GDPRや個人情報保護法などの規制に準拠したデータ管理を行い、プライバシー保護に配慮しています。",
  },
];

// 実績データ
const achievements = [
  {
    id: 1,
    title: "Road to devcon",
    image: "/placeholder.svg?height=200&width=200",
    description: "Ethereumの世界的カンファレンスへの道程をサポート",
  },
  {
    id: 2,
    title: "Joba",
    image: "/placeholder.svg?height=200&width=200",
    description: "ブロックチェーン技術を活用した就労支援プラットフォーム",
  },
  {
    id: 3,
    title: "Unyte",
    image: "/placeholder.svg?height=200&width=200",
    description: "分散型自律組織による新しいコミュニティ構築",
  },
  {
    id: 4,
    title: "Showtime",
    image: "/placeholder.svg?height=200&width=200",
    description: "Web3とエンターテイメントの融合プロジェクト",
  },
  {
    id: 5,
    title: "やいまSDGsシンポジウム",
    image: "/placeholder.svg?height=200&width=200",
    description: "持続可能な地域開発のための技術導入事例",
  },
];

// 事業内容カード
const businessCards = [
  {
    id: 1,
    title: "DAOアドバイザリー",
    description:
      "分散型自律組織の設計・構築・運営をトータルサポート。組織の透明性と効率性を高め、新しい形の協業を実現します。",
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
      "暗号資産とDeFiを活用した、より開かれた金融システムの構築と普及活動を推進しています。",
    image: "/placeholder.svg?height=300&width=400",
  },
];

// News type definition
interface NewsItem {
  id: string | number;
  title: string;
  excerpt: string;
  image_url: string;
  published_at: string;
}

// Event type definition
interface EventItem {
  id: number;
  title: string;
  date: string;
  location: string;
  url: string;
}

export default function HomePage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [newsResponse, eventsResponse] = await Promise.all([
          fetch("/api/news?limit=3"),
          fetch("/api/events"),
        ]);

        if (newsResponse.ok && eventsResponse.ok) {
          const [newsData, eventsData] = await Promise.all([
            newsResponse.json(),
            eventsResponse.json(),
          ]);

          setNews(newsData);
          setEvents(eventsData);
        }
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
        <div className="absolute inset-0">
          <Image
            src="/placeholder.jpg"
            alt="Hero Background"
            fill
            className="object-cover z-0 opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="text-gradient">会社のDXはAIが加速する</span>
              </h1>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">まずはご相談</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="/request-documentation">資料請求</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WHAT WE DO セクション */}
      <section className="py-20 bg-beige-50/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">WHAT WE DO</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                観光、建設、製造など向けに、AIエージェント開発。そしてDAOアドバイザリーをしています。
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 事業内容セクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">事業内容</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessCards.map((business, index) => (
              <AnimatedSection key={business.id} delay={index * 100}>
                <div className="card-3d h-full overflow-hidden rounded-2xl shadow-md">
                  <div className="relative h-48">
                    <Image
                      src={business.image}
                      alt={business.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{business.title}</h3>
                    <p className="text-muted-foreground">{business.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 相談までの流れセクション */}
      <section className="py-20 bg-beige-50/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">相談までの流れ</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="max-w-4xl mx-auto">
              <Image
                src="/workflow.png"
                alt="相談までの流れ"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">実績</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={achievement.id} delay={index * 100}>
                <div className="text-center">
                  <div className="relative h-36 w-36 mx-auto mb-4 overflow-hidden rounded-full border-2 border-beige-100">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </AnimatedSection>
            ))}
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
            ) : events && events.length > 0 ? (
              <div className="space-y-4">
                {events
                  .filter((event) => new Date(event.date) >= new Date())
                  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
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
                                {new Date(event.date).toLocaleDateString("ja-JP")}
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
                            <Link href={event.url} target="_blank" rel="noopener noreferrer">
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
              <Link href="/media-and-events?tab=events">すべてのイベントを見る</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <section className="py-20 bg-beige-50/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">よくある質問</h2>
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

      {/* 最新メディアセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">最新メディア</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loading
              ? // ローディング状態
                Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <AnimatedSection key={index} delay={index * 100}>
                      <div className="h-64 animate-pulse bg-beige-100 rounded-2xl"></div>
                    </AnimatedSection>
                  ))
              : news && news.length > 0
                ? // データ取得成功
                  news.map((item, index) => (
                    <AnimatedSection key={item.id} delay={index * 100}>
                      <Link href={`/news/${item.id}`}>
                        <div className="card-3d h-full overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                          <div className="relative h-40">
                            <Image
                              src={item.image_url || "/placeholder.svg?height=200&width=400"}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <p className="text-sm text-muted-foreground mb-2">
                              {new Date(item.published_at).toLocaleDateString("ja-JP")}
                            </p>
                            <h3 className="font-bold mb-2 line-clamp-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-3">
                              {item.excerpt}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </AnimatedSection>
                  ))
                : // フォールバックデータ
                  Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <AnimatedSection key={index} delay={index * 100}>
                        <div className="card-3d h-full overflow-hidden rounded-2xl shadow-md">
                          <div className="relative h-40">
                            <Image
                              src="/placeholder.svg?height=200&width=400"
                              alt="プレースホルダー"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <p className="text-sm text-muted-foreground mb-2">
                              2025年4月{index + 1}日
                            </p>
                            <h3 className="font-bold mb-2">プレスリリースタイトル {index + 1}</h3>
                            <p className="text-sm text-muted-foreground">
                              新しいAI技術や取り組みについてのプレスリリース内容がここに表示されます。
                            </p>
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
          </div>
        </div>
      </section>
    </div>
  );
}
