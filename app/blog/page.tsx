import { Metadata, Viewport } from "next";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HiArrowRight } from "react-icons/hi";
import Link from "next/link";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "ブログ | エーワンロード株式会社",
  description: "AIとWeb3に関する最新情報、技術トレンド、活用事例などを発信しています。",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "エーワンロード株式会社 ブログ",
      description: "AIとWeb3に関する最新情報、技術トレンド、活用事例などを発信しています。",
      publisher: {
        "@type": "Organization",
        name: "エーワンロード株式会社",
        url: "https://a1road.com",
        logo: {
          "@type": "ImageObject",
          url: "https://a1road.com/logo.png",
        },
      },
    }),
  },
};

const blogPosts = [
  {
    id: 1,
    title: "AIとWeb3の融合がもたらす新たなビジネスモデル",
    description:
      "AIとWeb3技術の組み合わせが、どのように新しいビジネスモデルを生み出しているか解説します。",
    date: "2024-03-15",
    category: "技術トレンド",
    readTime: "5分",
  },
  {
    id: 2,
    title: "DAOプラットフォーム構築の実践ガイド",
    description:
      "分散型自律組織（DAO）のプラットフォーム構築における重要なポイントと実践的なアプローチを紹介します。",
    date: "2024-03-10",
    category: "技術解説",
    readTime: "8分",
  },
  {
    id: 3,
    title: "ウォレットレス認証の未来と可能性",
    description:
      "パスワードレス認証の新たな形として注目されるウォレットレス認証技術の最新動向と活用事例を解説します。",
    date: "2024-03-05",
    category: "技術解説",
    readTime: "6分",
  },
  {
    id: 4,
    title: "製造業におけるAI活用の最前線",
    description: "製造業におけるAI活用の最新事例と、導入における重要なポイントを解説します。",
    date: "2024-02-28",
    category: "活用事例",
    readTime: "7分",
  },
  {
    id: 5,
    title: "Web3時代のデータプライバシー対策",
    description: "Web3時代におけるデータプライバシー保護の重要性と、最新の対策手法を紹介します。",
    date: "2024-02-20",
    category: "セキュリティ",
    readTime: "6分",
  },
  {
    id: 6,
    title: "ブロックチェーン技術の最新トレンド",
    description: "2024年のブロックチェーン技術の主要トレンドと、ビジネスへの影響を分析します。",
    date: "2024-02-15",
    category: "技術トレンド",
    readTime: "5分",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 blob-bg">
      <div className="absolute inset-0 grid-pattern opacity-30 z-0"></div>

      <section className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">ブログ</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AIとWeb3に関する最新情報、技術トレンド、活用事例などを発信しています
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 100}>
              <Card className="h-full card-3d">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm text-primary">{post.category}</span>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.description}</p>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href={`/blog/${post.id}`} className="inline-flex items-center">
                      続きを読む
                      <HiArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
