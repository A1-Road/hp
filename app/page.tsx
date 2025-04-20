"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { BsBuilding, BsCompass } from "react-icons/bs";
import { FaMountain, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import HeroSection from "@/components/home/hero-section";
import FeatureCard from "@/components/home/feature-card";
import IndustrySection from "@/components/home/industry-section";
import CaseStudyCard from "@/components/home/case-study-card";
import { useEffect, useState } from "react";
import type { Work, Event } from "@/types/database";
import { AnimatedSection } from "@/components/ui/animated-section";
import { formatDate } from "@/lib/utils";

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

interface EventsSectionProps {
  events: Event[];
}

function EventsSection({ events }: EventsSectionProps) {
  return (
    <section className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-6">最新のイベント</h2>
        <div className="space-y-4">
          {events.length > 0 ? (
            events
              .slice(0, 3)
              .map((event, index) => <EventItem key={event.id} event={event} index={index} />)
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">現在開催予定のイベントはありません。</p>
            </div>
          )}
        </div>
        {events.length > 0 && (
          <div className="mt-6 text-center">
            <Button variant="outline" asChild className="rounded-full">
              <Link href="/news">
                すべてのイベントを見る
                <FaArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  const [latestWorks, setLatestWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // 実績データの取得
        const worksResponse = await fetch("/api/works?limit=3");
        if (worksResponse.ok) {
          const worksData = await worksResponse.json();
          setLatestWorks(worksData);
        }

        // イベントデータの取得
        const eventsResponse = await fetch("/api/events");
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

  return (
    <div className="pt-20">
      {/* ヒーローセクション */}
      <HeroSection />

      {/* 技術の強みセクション */}
      <section className="container-custom blob-bg">
        <div className="text-center mb-12">
          <AnimatedSection>
            <h2 className="section-title mx-auto">技術の強み</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AIとWeb3の専門知識を活かし、日本の産業基盤をグローバル競争力のあるものへと変革します
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BsBuilding className="h-10 w-10 text-primary" />}
            title="ニッポンの屋台骨 × グローバル競争力"
            description="日本の製造業・建設業・観光業の強みを活かしながら、最新技術で国際競争力を高めます。"
          />
          <FeatureCard
            icon={<BsCompass className="h-10 w-10 text-primary" />}
            title="AI・Web3のワンストップ開発"
            description="AIモデル構築からブロックチェーン連携まで、一貫した開発体制で効率的なDX推進を実現します。"
          />
          <FeatureCard
            icon={<FaMountain className="h-10 w-10 text-primary" />}
            title="ウォレットレス認証技術"
            description="Web3の利便性と安全性を両立する独自の認証技術で、導入障壁を大幅に低減します。"
          />
        </div>
      </section>

      {/* 対象業界セクション */}
      <IndustrySection />

      {/* 実績紹介セクション */}
      <section className="container-custom bg-gradient-soft rounded-3xl my-16 relative overflow-hidden">
        <div className="absolute inset-0 blob-bg"></div>

        <div className="relative z-10">
          <div className="text-center mb-12">
            <AnimatedSection>
              <h2 className="section-title mx-auto">実績紹介</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                AIとWeb3技術を活用した具体的な課題解決事例をご紹介します
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              // ローディング状態
              Array(3)
                .fill(0)
                .map((_, index) => (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="h-96 animate-pulse bg-white/50 backdrop-blur-sm rounded-2xl"></div>
                  </AnimatedSection>
                ))
            ) : latestWorks.length > 0 ? (
              // データ取得成功
              latestWorks.map((work, index) => (
                <AnimatedSection key={work.id} delay={index * 100}>
                  <CaseStudyCard
                    title={work.title}
                    problem={work.challenge}
                    solution={work.solution}
                    result={work.results[0]}
                    imageSrc={work.image_url}
                  />
                </AnimatedSection>
              ))
            ) : (
              // フォールバックデータ
              <>
                <AnimatedSection>
                  <CaseStudyCard
                    title="ウォレットレスログインツール"
                    problem="Web3サービスの複雑なウォレット連携が利用障壁に"
                    solution="シンプルな認証フローと安全なウォレット管理の両立"
                    result="ログインステップを3ステップから1ステップへ削減"
                    imageSrc="/placeholder.svg?height=200&width=400"
                  />
                </AnimatedSection>
                <AnimatedSection delay={100}>
                  <CaseStudyCard
                    title="地域DAO × LLMチャットエンジン"
                    problem="地域情報の分散と住民エンゲージメントの低下"
                    solution="地域特化型LLMと参加型DAOプラットフォームの構築"
                    result="LINE登録者250名増、地域提案10件の実現"
                    imageSrc="/placeholder.svg?height=200&width=400"
                  />
                </AnimatedSection>
                <AnimatedSection delay={200}>
                  <CaseStudyCard
                    title="製造業向けデジタル導入支援"
                    problem="アナログな業務プロセスによる生産性低下"
                    solution="DAO活用による業務可視化と意思決定の効率化"
                    result="意思決定時間40%削減、生産効率15%向上"
                    imageSrc="/placeholder.svg?height=200&width=400"
                  />
                </AnimatedSection>
              </>
            )}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/works" className="inline-flex items-center">
                実績をもっと見る
                <HiArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* イベントセクション */}
      <section className="container-custom bg-gradient-soft rounded-3xl my-16 relative overflow-hidden">
        <div className="absolute inset-0 blob-bg"></div>

        <div className="relative z-10">
          <div className="text-center mb-12">
            <AnimatedSection>
              <h2 className="section-title mx-auto">最新のイベント</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                最新のイベント情報をお届けします
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              // ローディング状態
              Array(3)
                .fill(0)
                .map((_, index) => (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="h-48 animate-pulse bg-white/50 backdrop-blur-sm rounded-2xl"></div>
                  </AnimatedSection>
                ))
            ) : events.length > 0 ? (
              // データ取得成功
              events.slice(0, 3).map((event, index) => (
                <AnimatedSection key={event.id} delay={index * 100}>
                  <div className="card-3d p-6 bg-white rounded-2xl border border-beige-200/50 shadow-md hover:shadow-lg transition-all duration-300">
                    <h3 className="font-bold mb-2">{event.title}</h3>
                    <div className="text-sm text-muted-foreground mb-4">
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
              ))
            ) : (
              // フォールバックメッセージ
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">現在開催予定のイベントはありません。</p>
              </div>
            )}
          </div>

          {events.length > 0 && (
            <div className="text-center mt-12">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/news" className="inline-flex items-center">
                  すべてのイベントを見る
                  <HiArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA セクション */}
      <section className="container-custom">
        <AnimatedSection>
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 blob-bg"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                AIとWeb3で、あなたのビジネスを次のステージへ
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                デジタル変革の第一歩は、まずは相談から。
                あなたのビジネス課題に合わせた最適なソリューションをご提案します。
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">相談してみる</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="/service-flow">サービスの流れを見る</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
