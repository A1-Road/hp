import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";
import { getWorks, getIndustries } from "@/actions/works";
import WorksFilter from "@/components/works/works-filter";
import type { Work } from "@/types/database";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "実績紹介 | エーワンロード株式会社",
  description:
    "エーワンロード株式会社のデジタル変革、DAOプラットフォーム構築、ウォレットレス認証技術開発の実績を紹介しています。",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "実績紹介",
      description:
        "エーワンロード株式会社のデジタル変革、DAOプラットフォーム構築、ウォレットレス認証技術開発の実績",
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

interface CaseStudyProps {
  work: Work;
  index: number;
}

function CaseStudyCard({ work, index }: CaseStudyProps) {
  return (
    <AnimatedSection delay={index * 100} className="h-full">
      <Link href={`/works/${work.id}`}>
        <div className="card-3d h-full overflow-hidden">
          <div className="relative h-64">
            <Image
              src={work.image_url || "/placeholder.svg"}
              alt={work.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
              {work.industry}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">{work.title}</h3>

            <div className="mb-4">
              <h4 className="font-bold text-sm uppercase text-muted-foreground mb-2">課題</h4>
              <p>{work.challenge}</p>
            </div>

            <div className="mb-4">
              <h4 className="font-bold text-sm uppercase text-primary mb-2">ソリューション</h4>
              <p>{work.solution}</p>
            </div>

            <div className="mb-4">
              <h4 className="font-bold text-sm uppercase text-muted-foreground mb-2">成果</h4>
              <ul className="space-y-1">
                {work.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FaCheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase text-muted-foreground mb-2">使用技術</h4>
              <div className="flex flex-wrap gap-2">
                {work.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-beige-200 text-foreground px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}

export default async function Works({
  searchParams,
}: {
  searchParams: { industry?: string; search?: string };
}) {
  const { industry, search } = await searchParams;
  const works = await getWorks({ industry, search });
  const industries = await getIndustries();

  return (
    <div className="pt-24 blob-bg">
      <div className="absolute inset-0 grid-pattern opacity-30 z-0"></div>

      <section className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">実績紹介</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AIとWeb3技術を活用した具体的な課題解決事例をご紹介します
          </p>
        </div>

        <AnimatedSection>
          <WorksFilter industries={industries} selectedIndustry={industry} search={search} />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {works.map((work, index) => (
            <CaseStudyCard key={work.id} work={work} index={index} />
          ))}
        </div>

        {works.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">検索条件に一致する実績が見つかりませんでした。</p>
          </div>
        )}
      </section>

      {/* 技術アプローチセクション */}
      <section className="bg-gradient-soft py-16 md:py-24 my-16 relative overflow-hidden">
        <div className="absolute inset-0 blob-bg"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <AnimatedSection>
              <h2 className="section-title mx-auto">技術アプローチ</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                私たちが実績を生み出すための技術的アプローチをご紹介します
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">AIとWeb3の融合</h3>
                <p className="text-muted-foreground mb-6">
                  AIの分析・予測能力とWeb3の分散型・透明性を組み合わせることで、
                  従来の技術では解決できなかった課題に対応します。
                  例えば、AIによる予測結果をブロックチェーン上に記録することで、
                  信頼性と透明性を両立させた意思決定システムを実現しています。
                </p>

                <h3 className="text-2xl font-bold mb-4">業界特化型ソリューション</h3>
                <p className="text-muted-foreground">
                  製造業、建設業、観光業それぞれの特性と課題を深く理解し、
                  業界に最適化されたソリューションを提供します。
                  汎用的なツールではなく、業界特有のワークフローやデータ構造に
                  合わせたカスタマイズ開発により、高い効果を実現しています。
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="card-3d overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="技術アプローチのイメージ"
                  className="w-full h-auto transition-transform duration-500 hover:scale-105"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <AnimatedSection>
            <h2 className="section-title mx-auto">お客様の声</h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <p className="italic text-lg mb-6">
                    「複雑なWeb3技術を簡単に導入できるようにしてくれました。特にウォレットレス認証は、
                    非技術者の社員でも簡単に利用でき、社内DXの大きな推進力になっています。」
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-beige-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-bold">田中様</h4>
                      <p className="text-sm text-muted-foreground">製造業 DX推進部長</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <p className="italic text-lg mb-6">
                    「地域DAOの導入により、住民参加型の地域づくりが実現しました。
                    AIチャットボットとの連携で、観光客への情報提供も格段に向上し、
                    地域全体の活性化につながっています。」
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-beige-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-bold">佐藤様</h4>
                      <p className="text-sm text-muted-foreground">観光協会 事務局長</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="container-custom">
        <AnimatedSection>
          <div className="bg-gradient-soft rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 blob-bg"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                あなたのビジネス課題を解決します
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                AIとWeb3技術を活用した革新的なソリューションで、
                ビジネスの課題解決と成長をサポートします。 まずはお気軽にご相談ください。
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact" className="inline-flex items-center">
                  相談してみる
                  <HiArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
