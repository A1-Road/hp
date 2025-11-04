"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EventCarousel from "@/components/event-carousel";

// ケース
const caseStudies = [
  {
    id: "rag",
    title: "セールスストン：法人営業向けパーソナライズドメール・フォーム営業自動化AI",
    industry: "AI",
    challenge: [
      "属人営業：受注がベテラン依存で若手が案件を獲得できない",
      "リスト作成の負担：営業対象企業の選定に時間がかかる",
      "追客が非効率：リマインドやメール作成が手動で工数が膨大",
    ],
    solution: [
      "営業AI：フォーム・メールを一括対応し、個社最適化された文章を自動生成",
      "リンク入力のみ：URLを入力するだけでリスト自動作成",
      "自動送信と追客：指定時間での送信やフォローアップも自動化",
      "フォローアップ：フォローアップのリマインドやメール作成を自動化",
    ],
    description: `B2B新規営業において、従来の属人型営業プロセスからの脱却を図るため、営業自動化ツール「セールスストン」を導入。ターゲット企業の抽出からメッセージ文面の作成、送信、追客までを自動化。

営業担当者は案件化に集中できるようになり、煩雑なリスト整備やメール文面作成の工数が92%削減。営業AIは問い合わせの傾向を学習し、カスタマイズの精度が継続的に向上しています。

フォーム入力・メール送信のいずれにも対応し、ITリテラシーが高くない現場でも運用可能なUI設計としました。`,
    results: [
      "導入1週間で100万円の案件受注を実現",
      "営業リスト作成にかかる時間を92％削減",
      "PoC導入後1週間で新規引き合い14件を獲得",
    ],
    image: "Salesstone.ai.png",
    imagePosition: "left",
  },
  {
    id: "rag",
    title: "デジタル化：地域コミュニティ構築における対話型LLM実装ならびにエンゲージメント向上",
    industry: "AI・コミュニティ構築",
    challenge: [
      "コミュニティの活性化：新しい参加者が増えず、変化に対応した活動ができない",
      "使いやすさ：高齢者やデジタルに不慣れな方でも簡単に使える仕組みが必要",
      "ノウハウ不足：AIを使ったコミュニティ運営のノウハウが不足している",
    ],
    solution: [
      "AIによるサポート：チャットボットを使って、誰でも簡単に質問や相談ができるように",
      "使いやすいデザイン：ゲーム感覚で楽しめる仕組みを導入し、参加しやすい環境を整備",
      "コミュニティの連携：地域の関係者と協力して、より良い活動を実現",
    ],
    description: `コミュニティ構築コミュニティの立ち上げにあたる生成AIの実装において、ユーザーデータをAIで分析することによるチャットエンゲージメントの向上を目指しました。ユーザー会話分析や、AIによるアイデア出し、会話、エンゲージメント支援を行うことでデータと顧客分析の質を向上させています。

対話型LLMとコミュニティ構築を組み合わせ、RAGを活用した高精度AI応答とトークノミクスでコミュニティを活性化。ナラティブやゲーム性を組み込んだUI/UXで多層ユーザーを取り込み、投稿回数に応じたデータ蓄積で学習精度を向上させました。

SNSや外部連携施策を活用し、PDCAサイクルを回しながら継続的なエンゲージメント向上を実現しています。`,
    results: [
      "LINEで250名以上の新規参加者を獲得",
      "地元新聞など3社以上のメディアで取り上げられました",
      "事前登録者が20%増加し、より多くの方に参加いただけるようになりました",
    ],
    image: "/rag.png",
    imagePosition: "right",
  },
  {
    id: "walletless",
    title: "開発事例：ウォレットレスブロックチェーンアプリツール",
    industry: "ブロックチェーン",
    challenge: [
      "セキュリティの課題：パスワードや秘密鍵の管理が難しく、紛失のリスクがある",
      "技術的な難しさ：専門知識が必要で、導入のハードルが高い",
      "使いにくさ：操作が複雑で、一般の方が使いこなせない",
    ],
    solution: [
      "簡単なログイン：顔認証だけでログインできるようにし、パスワード不要に",
      "安全な管理：専門的な知識がなくても安全に使える仕組みを導入",
      "シンプルな操作：難しい専門用語を使わず、誰でも簡単に使えるように",
    ],
    description: `ブロックチェーン導入が難しい企業様に対して、ログインシステムを実装することにより圧倒的簡略化を実現。アカウント・ウォレット管理も簡略化することで、プロジェクトの簡略導入化を実現しました。

Web3/ブロックチェーンという用語を一切使用せず、シームレスなUXを実現しています。

ユーザーはFace IDをスキャンするのみでログイン/サインアップが可能で、ウォレットデータも紐づきます。運営主体はログイン状態を管理するのみで、秘密鍵などの保持は不要です。

既存のアプリケーションにWeb3機能を簡単かつシンプルに導入可能で、セキュリティもPrivyの暗号化システムにより担保されています。`,
    results: [
      "ログイン手順を7ステップから2ステップに簡略化",
      "難しい専門用語を使わず、誰でも簡単に使えるようになりました",
      "セキュリティを保ちながら、より安全に使えるようになりました",
    ],
    image: "/walletless.png",
    imagePosition: "left",
  },
  {
    id: "fa1rness",
    title: "教育事業：業界団体イベント「FA1RNESS 2024」を開催",
    industry: "コミュニティ構築・教育",
    challenge: [
      "知識の不足：コミュニティ構築の具体的な使い方や運営方法が分からない",
      "法律の課題：日本でのコミュニティ構築導入に関する法律やルールが不明確",
      "運営の難しさ：コミュニティの運営方法やルール作りが分からない",
    ],
    solution: [
      "専門家による説明：国内外の専門家が分かりやすくコミュニティ構築について説明",
      "法律の解説：コミュニティ構築に関する法律やルールを具体的に解説",
      "実践的な学習：実際にコミュニティ構築を体験しながら学べるワークショップを開催",
    ],
    description: `FA1RNESS 2024は、コミュニティ構築を活用したビジネスモデルの具体的な導入事例や運営ノウハウを共有するためのイベントです。専門家による国際的な知見を活用し、法的・実務的な課題の克服を図り、日本企業がWeb3技術を効果的にビジネスに組み込めるよう支援することを目的としています。

イベント参加者からは、「起業家育成プログラムで開発中のサービスにブロックチェーンを組み込もうと考えており、貢献度に応じた報酬制度が選択肢として増えました。コミュニティ構築実証や法律面の考察も非常に有益で、学んだことを自社のユーザーヒアリングにも活かしています」といった声が寄せられています。

また、コミュニティ構築創業者からは「外から見ていたコミュニティ構築が、実際に動かされている方の話を聞くことができて、グッと身近に感じられるようになりました。イメージがより具体的になりました」という感想も得られました。

企業様・法人様のDX化においてコミュニティ運用の知識が不足している課題や、コミュニティ構築（自立分散型組織）へのノウハウが断片的で実装方法がわからないという課題に対して、専門家とのマッチング・対話形式のワークショップで初心者・上級者にとっての限定コンテンツを提供しています。`,
    results: [
      "250名以上の新規参加者を獲得し、コミュニティが拡大",
      "主要メディア3社に取り上げられ、認知度が向上",
      "コミュニティ構築導入を検討する企業が20%以上増加し、具体的な導入が進みました",
    ],
    image: "/fa1rness.jpg",
    imagePosition: "right",
  },
  {
    id: "コミュニティ構築athon",
    title: "コミュニティ構築-A-THON - アジア初のコミュニティ構築実践イベント",
    industry: "コミュニティ構築・コミュニティ",
    challenge: [
      "知識の不足：コミュニティ構築の概念や実装方法についての理解が不足している",
      "実践の機会：実際にコミュニティ構築を構築・運営する体験の場が少ない",
      "コミュニティ：コミュニティ構築に興味がある人同士のつながりが少ない",
    ],
    solution: [
      "実践的な学習：コミュニティ構築のアイデア創出からデプロイまでを一気通貫で体験",
      "専門家のサポート：国内外のコミュニティ構築専門家によるメンタリングと審査",
      "コミュニティ形成：オンライン・オフラインで世界中のコミュニティ構築エンスージアストが集結",
    ],
    description: `2023年4月1日から9日にかけて、東京でアジア初となるコミュニティ構築-A-THONが開催されました。1週間かけてコミュニティ構築の概念のアイデア創出から、ツールを用いたコミュニティ構築のデプロイまでを一気通貫で行う本イベントでは、累計50名が集結しました。

キックオフセッションでは、Yosui/Monobundle、Uwaizumi.eth/Unyte、Alex Poon/CharmVerse、Balu/コミュニティ構築Lens、Whiplus/IVS Crypto（敬称略）などの豪華審査員を招き、日本・世界におけるコミュニティ構築の可能性と実現可能性を多方面から探りました。大企業とコミュニティ構築の関係、法整備、市場選定などコミュニティ構築という新領域を日本でどのように広めていくかを模索するセッションが行われました。

4月9日の最終日には日本橋に累計50名が集い、地方創生・音楽・労働環境といったあらゆる領域に対してコミュニティ構築というアプローチが適切かどうかのピッチが行われました。プログラミングの知識がなくても参加可能で、専用の"コミュニティ構築キャンバス"を使用して必要な要素を洗い出し、実際にWeb3上にコミュニティ構築をデプロイする体験を提供しました。`,
    results: [
      "累計50名の参加者が集結し、アジア初の大規模コミュニティ構築イベントを実現",
      "地方創生・音楽・労働環境など多様な分野でのコミュニティ構築活用提案",
      "国内外の専門家による審査とメンタリングで質の高い学びを提供",
      "https://コミュニティ構築-a-thon.studio.site/",
    ],
    image: "/コミュニティ構築athon.jpg",
    imagePosition: "left",
  },
];

export default function CasePage() {
  return (
    <div className="pt-24">
      {/* ヘッダーセクション */}
      <section className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            弊社が過去に実施した具体的な課題解決の事例をご紹介します
          </p>
        </div>
      </section>

      {/* ケース */}
      {caseStudies.map((caseStudy, index) => (
        <section
          key={caseStudy.id}
          id={caseStudy.id}
          className={`py-16 ${index % 2 === 0 ? "bg-beige-50/50" : ""}`}
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <AnimatedSection>
              <div
                className={`grid md:grid-cols-5 gap-12 items-center ${
                  caseStudy.imagePosition === "right"
                    ? "md:grid-flow-row"
                    : "md:grid-flow-row-dense"
                }`}
              >
                {/* コンテンツ部分 */}
                <div
                  className={`${caseStudy.imagePosition === "right" ? "md:order-1 md:col-span-3" : "md:order-2 md:col-span-3"}`}
                >
                  <div className="space-y-6">
                    <div>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {caseStudy.industry}
                      </span>
                      <h2 className="text-3xl font-bold mt-4 mb-2">{caseStudy.title}</h2>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">課題</h3>
                      <div className="text-muted-foreground space-y-4">
                        {caseStudy.challenge.map((challenge, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-primary font-bold">{idx + 1}.</span>
                            <p>{challenge}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">ソリューション</h3>
                      <div className="text-muted-foreground space-y-4">
                        {caseStudy.solution.map((solution, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-primary font-bold">{idx + 1}.</span>
                            <p>{solution}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">成果</h3>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            {result.startsWith("http") ? (
                              <p>
                                <Link
                                  href={result}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline"
                                >
                                  イベントサイトはこちら
                                </Link>
                              </p>
                            ) : (
                              <p>{result}</p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="rounded-full bg-white text-gray-900 hover:bg-blue-100 hover:scale-105 transition-all duration-200 border border-gray-600"
                        >
                          詳細を見る
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl text-white border-white">
                        <DialogHeader>
                          <DialogTitle className="text-white">{caseStudy.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 text-white">
                          {caseStudy.description.split("\n\n").map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                {/* 画像部分 */}
                <div
                  className={`${caseStudy.imagePosition === "right" ? "md:order-2 md:col-span-2" : "md:order-1 md:col-span-2"}`}
                >
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      width={800}
                      height={500}
                      className="object-contain rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* セミナー・イベント実績セクション */}
      <EventCarousel />
    </div>
  );
}
