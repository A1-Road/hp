"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";

// ケース研究データ
const caseStudies = [
  {
    id: "rag",
    title: "RAG実装",
    industry: "AI・製造業",
    challenge: "製造業向けの大量のマニュアルや技術資料を効率的に検索・活用する手段が限られていた",
    solution: "Retrieval Augmented Generation（RAG）を実装した社内向け技術文書検索システム",
    description: `製造業の現場では、長年にわたって蓄積された技術マニュアルや過去のトラブルシューティング記録など、膨大な専門文書が存在します。これらの情報は企業の貴重な知的資産である一方、必要な情報を素早く見つけ出すことが困難でした。

特に新人技術者が過去の事例から学ぶ際や、現場で急を要する問題に直面した際に、関連する情報へのアクセスに時間がかかり、業務効率の低下を招いていました。

エーワンロード社は、これらの課題を解決するために、Retrieval Augmented Generation（RAG）を実装した社内向け技術文書検索システムを開発しました。このシステムでは、大規模言語モデル（LLM）を用いて、自然言語による問い合わせに対して、関連する技術文書を検索・分析し、具体的な回答を生成します。

独自のベクトルデータベースを構築し、日本語の専門用語に特化したインデックス化を行うことで、検索精度を大幅に向上させました。また、検索結果は引用元と共に表示され、情報の信頼性を確保しています。`,
    results: [
      "技術情報へのアクセス時間が平均70%短縮",
      "新人教育期間が約30%短縮",
      "トラブルシューティング時間が40%削減",
    ],
    image: "/placeholder.svg?height=400&width=600",
    imagePosition: "right",
  },
  {
    id: "walletless",
    title: "ウォレットレス認証技術",
    industry: "Web3・認証",
    challenge: "Web3サービスの複雑なウォレット操作が一般ユーザーの利用障壁となっていた",
    solution: "生体認証と秘密分散技術を組み合わせたウォレットレス認証システムの開発",
    description: `ブロックチェーン技術を活用したサービスが増加する中、暗号資産ウォレットの作成や秘密鍵の管理といった複雑な操作は、多くの一般ユーザーにとって大きな参入障壁となっていました。特に、秘密鍵の紛失やセキュリティリスクへの不安が、Web3サービスの普及を妨げる要因となっていました。

エーワンロード社は、この課題を解決するため、生体認証と秘密分散技術を組み合わせた革新的なウォレットレス認証システムを開発しました。このシステムでは、ユーザーは指紋や顔認証などの生体情報を用いて認証を行い、バックグラウンドで安全に秘密鍵を管理します。

秘密鍵は複数のフラグメントに分割され、異なるサーバーに分散保存されるため、一箇所が侵害されても秘密鍵全体が漏洩するリスクを大幅に軽減します。また、スマートコントラクトによる多要素認証を導入し、不正アクセスを防止する仕組みも構築しました。`,
    results: [
      "ユーザーの認証ステップを3ステップから1ステップに削減",
      "新規ユーザー獲得率が150%向上",
      "セキュリティインシデントの発生率が90%減少",
    ],
    image: "/placeholder.svg?height=400&width=600",
    imagePosition: "left",
  },
  {
    id: "daoathon",
    title: "DAOATHON",
    industry: "イベント・教育",
    challenge: "Web3技術者の不足と、DAOの概念や実装方法についての理解不足",
    solution: "実践的なDAO開発イベント「DAOATHON」の企画・運営",
    description: `Web3技術の普及に伴い、分散型自律組織（DAO）への注目が高まる中、実際にDAOを設計・構築できる技術者は日本国内で大幅に不足していました。また、多くの企業や個人がDAOの概念や実装方法について十分な理解を持っていないという課題がありました。

この状況を改善するため、エーワンロード社は実践的なDAO開発イベント「DAOATHON」を企画・運営しました。このイベントは、2日間にわたるハッカソン形式で、参加者がチームを組んでDAO関連のプロジェクトを開発する取り組みです。

イベントでは、DAOの基礎からスマートコントラクトの実装、ガバナンス設計まで、エキスパートによるワークショップを提供しました。参加者は実際のプロジェクトに取り組むことで、理論だけでなく実践的なスキルを身につけることができます。

また、業界の第一線で活躍する審査員によるフィードバックや、優秀プロジェクトへの資金提供も行い、参加者のモチベーション向上とプロジェクトの継続的発展を支援しました。`,
    results: [
      "100名以上の開発者・起業家が参加",
      "15件の実用的なDAOプロジェクトが誕生",
      "参加者の87%がWeb3キャリアへの関心を高めた",
    ],
    image: "/placeholder.svg?height=400&width=600",
    imagePosition: "right",
  },
  {
    id: "fa1rness",
    title: "FA1RNESS",
    industry: "AI倫理・ガバナンス",
    challenge: "AIシステムの公平性と透明性の確保が困難で、評価基準も不明確だった",
    solution: "ブロックチェーンを活用したAI透明性・公平性評価プラットフォーム「FA1RNESS」の開発",
    description: `AIシステムの社会実装が進む中、アルゴリズムの透明性や公平性の確保が重要な課題となっていました。特に、AIによる意思決定プロセスのブラックボックス化や、学習データのバイアスによる差別的な結果の生成といった問題が指摘されていました。

また、AIシステムの公平性や透明性を評価する統一された基準やツールが不足しており、企業や開発者が自社のAIシステムを適切に評価・改善することが困難な状況でした。

エーワンロード社は、これらの課題に対応するため、ブロックチェーンを活用したAI透明性・公平性評価プラットフォーム「FA1RNESS」を開発しました。このプラットフォームでは、AIシステムの学習データ、アルゴリズム、評価結果などの重要な情報をブロックチェーン上に記録することで、変更不可能な形で透明性を確保します。

また、独自の公平性評価指標を開発し、様々な側面から公平性を測定・評価できるようにしました。評価結果は「FA1RNESS Score」として数値化され、第三者による検証も可能です。`,
    results: [
      "30社以上の企業がプラットフォームを導入",
      "AIシステムの公平性スコアが平均25%向上",
      "透明性確保による企業のレピュテーション向上",
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
