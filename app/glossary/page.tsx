import { Metadata, Viewport } from "next";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "用語集 | エーワンロード株式会社",
  description:
    "AI、ブロックチェーン、Web3に関する専門用語の解説集。技術的な概念や最新のトレンド用語をわかりやすく説明します。",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      name: "エーワンロード株式会社 用語集",
      description: "AI、ブロックチェーン、Web3に関する専門用語の解説集",
      publisher: {
        "@type": "Organization",
        name: "エーワンロード株式会社",
        url: "https://a1road.com",
        logo: {
          "@type": "ImageObject",
          url: "https://a1road.com/logo.png",
        },
      },
      hasDefinedTerm: [
        {
          "@type": "DefinedTerm",
          name: "AI（人工知能）",
          description:
            "人間の知能を模倣し、学習、推論、問題解決などの知的活動を行うコンピュータシステム。",
        },
        {
          "@type": "DefinedTerm",
          name: "ブロックチェーン",
          description:
            "分散型台帳技術の一種で、取引データをブロック単位で記録し、暗号化技術によって改ざんを防ぐ仕組み。",
        },
        {
          "@type": "DefinedTerm",
          name: "Web3",
          description:
            "次世代のインターネット技術で、分散型、透明性、ユーザー主権を特徴とする新しいウェブの概念。",
        },
      ],
    }),
  },
};

const terms = [
  {
    term: "AI（人工知能）",
    description:
      "人間の知能を模倣し、学習、推論、問題解決などの知的活動を行うコンピュータシステム。機械学習や深層学習などの技術を活用して、データからパターンを学習し、予測や判断を行うことができます。",
    category: "AI",
  },
  {
    term: "ブロックチェーン",
    description:
      "分散型台帳技術の一種で、取引データをブロック単位で記録し、暗号化技術によって改ざんを防ぐ仕組み。中央管理者を必要とせず、ネットワーク参加者全員でデータの整合性を保証します。",
    category: "Web3",
  },
  {
    term: "Web3",
    description:
      "次世代のインターネット技術で、分散型、透明性、ユーザー主権を特徴とする新しいウェブの概念。ブロックチェーン技術を基盤とし、中央集権的なプラットフォームに依存しない、ユーザー中心のインターネットを目指します。",
    category: "Web3",
  },
  {
    term: "DAO（分散型自律組織）",
    description:
      "ブロックチェーン上で運営される、中央管理者を持たない組織形態。スマートコントラクトによって運営ルールが自動化され、トークン保有者による投票で意思決定が行われます。",
    category: "Web3",
  },
  {
    term: "機械学習",
    description:
      "AIの一分野で、データから自動的にパターンを学習し、予測や判断を行う技術。教師あり学習、教師なし学習、強化学習などの手法があります。",
    category: "AI",
  },
  {
    term: "スマートコントラクト",
    description:
      "ブロックチェーン上で実行される、契約条件の自動実行プログラム。条件が満たされると自動的に契約が履行され、改ざんが不可能な形で記録されます。",
    category: "Web3",
  },
];

export default function GlossaryPage() {
  return (
    <div className="pt-24 blob-bg">
      <div className="absolute inset-0 grid-pattern opacity-30 z-0"></div>

      <section className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">用語集</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI、ブロックチェーン、Web3に関する専門用語をわかりやすく解説します
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="用語を検索..." className="pl-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {terms.map((term, index) => (
            <AnimatedSection key={term.term} delay={index * 100}>
              <Card className="h-full card-3d">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{term.term}</CardTitle>
                    <span className="text-sm text-primary">{term.category}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{term.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
