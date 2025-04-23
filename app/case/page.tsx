"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";

// ケース研究データ
const caseStudies = [
  {
    id: "rag",
    title: "デジタル化：地域DAOにおける対話型LLM実装ならびにエンゲージメント向上",
    industry: "AI・コミュニティ",
    challenge: `1. コミュニティ活性化の課題
新規ユーザー獲得施策の不足と、動的な環境に対応したプロジェクト導入の難しさ

2. UX/UI設計の課題
デジタルリテラシーを考慮した設計不足により、高齢層や関係者の利用に支障

3. 技術実装の課題
AI対話型コミュニティDAOの実装ノウハウ不足と、データ学習の精度向上が必要`,
    solution: `1. データ収集・分析基盤の構築
RAGとAIチャットボットを活用した高精度な対話システムの実装

2. ユーザー体験の最適化
世界観、トークノミクス、ビジュアル、ゲーム性を一貫させたUI/UX設計

3. 外部連携の強化
コミュニティメンバーや関係者とのネットワーク構築、プラットフォーム連携の実現`,
    description: `DAOコミュニティの立ち上げにあたる生成AIの実装において、ユーザーデータをAIで分析することによるチャットエンゲージメントの向上を目指しました。ユーザー会話分析や、AIによるアイデア出し、会話、エンゲージメント支援を行うことでデータと顧客分析の質を向上させています。

対話型LLMとDAOを組み合わせ、RAGを活用した高精度AI応答とトークノミクスでコミュニティを活性化。ナラティブやゲーム性を組み込んだUI/UXで多層ユーザーを取り込み、投稿回数に応じたデータ蓄積で学習精度を向上させました。

SNSや外部連携施策を活用し、PDCAサイクルを回しながら継続的なエンゲージメント向上を実現しています。`,
    results: [
      "LINE登録＋エンゲージメント向上250名＋",
      "地元新聞社含めメディア掲載3社＋",
      "事前登録者20%向上",
    ],
    image: "/placeholder.svg?height=400&width=600",
    imagePosition: "right",
  },
  {
    id: "walletless",
    title: "開発事例：ウォレットレスブロックチェーンアプリツール",
    industry: "Web3・ブロックチェーン",
    challenge: `1. 秘密鍵管理の課題
ブロックチェーンウォレットの導入における秘密鍵とシードフレーズの管理リスク

2. 技術的ハードル
Web3実装における専門性、技術、ライセンスなどの高い参入障壁

3. ユーザビリティの課題
従来の複雑なウォレット操作による一般ユーザーの利用障壁`,
    solution: `1. 認証の簡略化
Face IDのみでログイン可能なノンカストディウォレットの実装

2. 管理負担の軽減
Privyの暗号化システムによる安全性確保と運営側の管理簡略化

3. シームレスな導入
既存アプリケーションへのWeb3機能の簡単な統合を実現`,
    description: `ブロックチェーン導入が難しい企業様に対して、ログインシステムを実装することにより圧倒的簡略化を実現。アカウント・ウォレット管理も簡略化することで、プロジェクトの簡略導入化を実現しました。

Web3/ブロックチェーンという用語を一切使用せず、シームレスなUXを実現しています。

ユーザーはFace IDをスキャンするのみでログイン/サインアップが可能で、ウォレットデータも紐づきます。運営主体はログイン状態を管理するのみで、秘密鍵などの保持は不要です。

既存のアプリケーションにWeb3機能を簡単かつシンプルに導入可能で、セキュリティもPrivyの暗号化システムにより担保されています。`,
    results: [
      "ログインステップを7回→2回へ削減",
      "名前入力、パスワード入力、ログインボタン、Emailに確認コードを入力、確認コード入力完了、ユーザーサインアップ完了、ユーザーログインの7ステップから、FaceID登録、ログイン完了の2ステップへ簡略化",
    ],
    image: "/placeholder.svg?height=400&width=600",
    imagePosition: "left",
  },
  {
    id: "fa1rness",
    title: "教育事業：業界団体イベント「FA1RNESS 2024」を開催",
    industry: "Web3・教育",
    challenge: `1. 実務知識の不足
DAOビジネスモデルの具体的な実装事例や実務ノウハウの不足

2. 法的課題
日本国内でのDAO導入における法的・実務的な障壁

3. 運営ノウハウの不足
ガバナンス設計やコミュニティマネジメントの実践的知識不足`,
    solution: `1. 専門家による知見共有
国際的な専門家を招いたワークショップとパネルディスカッションの実施

2. 法的フレームワークの提示
Marshall議員のDAO LLC等、先進的な法的枠組みの紹介と日本での適用検討

3. 実践的な学習機会の提供
ワークショップ形式でのDAO設立、ガバナンス設計、コミュニティ形成の体験`,
    description: `FA1RNESS 2024は、DAOを活用したビジネスモデルの具体的な導入事例や運営ノウハウを共有するためのイベントです。専門家による国際的な知見を活用し、法的・実務的な課題の克服を図り、日本企業がWeb3技術を効果的にビジネスに組み込めるよう支援することを目的としています。

イベント参加者からは、「起業家育成プログラムで開発中のサービスにブロックチェーンを組み込もうと考えており、貢献度に応じた報酬制度が選択肢として増えました。DAO実証や法律面の考察も非常に有益で、学んだことを自社のユーザーヒアリングにも活かしています」といった声が寄せられています。

また、DAO創業者からは「外から見ていたDAOが、実際に動かされている方の話を聞くことができて、グッと身近に感じられるようになりました。イメージがより具体的になりました」という感想も得られました。

企業様・法人様のDX化においてコミュニティ運用の知識が不足している課題や、DAO（自立分散型組織）へのノウハウが断片的で実装方法がわからないという課題に対して、専門家とのマッチング・対話形式のワークショップで初心者・上級者にとっての限定コンテンツを提供しています。`,
    results: [
      "DAOやWeb3コミュニティへの新規エンゲージメントが250名以上増加",
      "イベントの取り組みが評価され、主要メディア3社に掲載され、認知度向上",
      "DAO導入を検討する企業の想定事前登録者数が20%以上向上し、具体的な導入検討や実証実験につながるケースが増加した",
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
                      <p className="text-muted-foreground">{caseStudy.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">ソリューション</h3>
                      <p className="text-muted-foreground">{caseStudy.solution}</p>
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
                  <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover"
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
