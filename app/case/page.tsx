"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";

// ケース
const caseStudies = [
  {
    id: "rag",
    title: "デジタル化：地域DAOにおける対話型LLM実装ならびにエンゲージメント向上",
    industry: "AI・DAO",
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
    description: `DAOコミュニティの立ち上げにあたる生成AIの実装において、ユーザーデータをAIで分析することによるチャットエンゲージメントの向上を目指しました。ユーザー会話分析や、AIによるアイデア出し、会話、エンゲージメント支援を行うことでデータと顧客分析の質を向上させています。

対話型LLMとDAOを組み合わせ、RAGを活用した高精度AI応答とトークノミクスでコミュニティを活性化。ナラティブやゲーム性を組み込んだUI/UXで多層ユーザーを取り込み、投稿回数に応じたデータ蓄積で学習精度を向上させました。

SNSや外部連携施策を活用し、PDCAサイクルを回しながら継続的なエンゲージメント向上を実現しています。`,
    results: [
      "LINEで250名以上の新規参加者を獲得",
      "地元新聞など3社以上のメディアで取り上げられました",
      "事前登録者が20%増加し、より多くの方に参加いただけるようになりました",
    ],
    image: "/placeholder.svg?height=400&width=600",
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
    image: "/placeholder.svg?height=400&width=600",
    imagePosition: "left",
  },
  {
    id: "fa1rness",
    title: "教育事業：業界団体イベント「FA1RNESS 2024」を開催",
    industry: "DAO・教育",
    challenge: [
      "知識の不足：DAOの具体的な使い方や運営方法が分からない",
      "法律の課題：日本でのDAO導入に関する法律やルールが不明確",
      "運営の難しさ：コミュニティの運営方法やルール作りが分からない",
    ],
    solution: [
      "専門家による説明：国内外の専門家が分かりやすくDAOについて説明",
      "法律の解説：DAOに関する法律やルールを具体的に解説",
      "実践的な学習：実際にDAOを体験しながら学べるワークショップを開催",
    ],
    description: `FA1RNESS 2024は、DAOを活用したビジネスモデルの具体的な導入事例や運営ノウハウを共有するためのイベントです。専門家による国際的な知見を活用し、法的・実務的な課題の克服を図り、日本企業がWeb3技術を効果的にビジネスに組み込めるよう支援することを目的としています。

イベント参加者からは、「起業家育成プログラムで開発中のサービスにブロックチェーンを組み込もうと考えており、貢献度に応じた報酬制度が選択肢として増えました。DAO実証や法律面の考察も非常に有益で、学んだことを自社のユーザーヒアリングにも活かしています」といった声が寄せられています。

また、DAO創業者からは「外から見ていたDAOが、実際に動かされている方の話を聞くことができて、グッと身近に感じられるようになりました。イメージがより具体的になりました」という感想も得られました。

企業様・法人様のDX化においてコミュニティ運用の知識が不足している課題や、DAO（自立分散型組織）へのノウハウが断片的で実装方法がわからないという課題に対して、専門家とのマッチング・対話形式のワークショップで初心者・上級者にとっての限定コンテンツを提供しています。`,
    results: [
      "250名以上の新規参加者を獲得し、コミュニティが拡大",
      "主要メディア3社に取り上げられ、認知度が向上",
      "DAO導入を検討する企業が20%以上増加し、具体的な導入が進みました",
    ],
    image: "/placeholder.svg?height=400&width=600",
    imagePosition: "right",
  },
  {
    id: "daoathon",
    title: "DAO-A-THON - アジア初のDAO実践イベント",
    industry: "DAO・コミュニティ",
    challenge: [
      "知識の不足：DAOの概念や実装方法についての理解が不足している",
      "実践の機会：実際にDAOを構築・運営する体験の場が少ない",
      "コミュニティ：DAOに興味がある人同士のつながりが少ない",
    ],
    solution: [
      "実践的な学習：DAOのアイデア創出からデプロイまでを一気通貫で体験",
      "専門家のサポート：国内外のDAO専門家によるメンタリングと審査",
      "コミュニティ形成：オンライン・オフラインで世界中のDAOエンスージアストが集結",
    ],
    description: `2023年4月1日から9日にかけて、東京でアジア初となるDAO-A-THONが開催されました。1週間かけてDAOの概念のアイデア創出から、ツールを用いたDAOのデプロイまでを一気通貫で行う本イベントでは、累計50名が集結しました。

キックオフセッションでは、Yosui/Monobundle、Uwaizumi.eth/Unyte、Alex Poon/CharmVerse、Balu/DAOLens、Whiplus/IVS Cryptoなどの豪華審査員を招き、日本・世界におけるDAOの可能性と実現可能性を多方面から探りました。大企業とDAOの関係、法整備、市場選定などDAOという新領域を日本でどのように広めていくかを模索するセッションが行われました。

4月9日の最終日には日本橋に累計50名が集い、地方創生・音楽・労働環境といったあらゆる領域に対してDAOというアプローチが適切かどうかのピッチが行われました。プログラミングの知識がなくても参加可能で、専用の"DAOキャンバス"を使用して必要な要素を洗い出し、実際にWeb3上にDAOをデプロイする体験を提供しました。`,
    results: [
      "累計50名の参加者が集結し、アジア初の大規模DAOイベントを実現",
      "地方創生・音楽・労働環境など多様な分野でのDAO活用提案",
      "国内外の専門家による審査とメンタリングで質の高い学びを提供",
    ],
    image: "/placeholder.svg?height=400&width=600",
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
            AIとWeb3技術を活用した具体的な課題解決事例をご紹介します
          </p>
        </div>
      </section>

      {/* ケース研究 */}
      {caseStudies.map((caseStudy, index) => (
        <section
          key={caseStudy.id}
          id={caseStudy.id}
          className={`py-16 ${index % 2 === 0 ? "bg-beige-50/50" : ""}`}
        >
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  caseStudy.imagePosition === "right"
                    ? "md:grid-flow-row"
                    : "md:grid-flow-row-dense"
                }`}
              >
                {/* コンテンツ部分 */}
                <div className={caseStudy.imagePosition === "right" ? "md:order-1" : "md:order-2"}>
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
                      <h3 className="text-lg font-semibold mb-2">詳細</h3>
                      <div className="text-muted-foreground space-y-4">
                        {caseStudy.description.split("\n\n").map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">成果</h3>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 画像部分 */}
                <div className={caseStudy.imagePosition === "right" ? "md:order-2" : "md:order-1"}>
                  <div className="relative aspect-video">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}
    </div>
  );
}
