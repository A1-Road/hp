import { Metadata, Viewport } from "next";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HiArrowRight } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "サービス | エーワンロード株式会社",
  description:
    "AIとWeb3技術を活用したデジタル変革支援、DAOプラットフォーム構築、ウォレットレス認証技術の研究開発を行っています。",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "エーワンロード株式会社 サービス一覧",
      description: "AIとWeb3技術を活用したサービス一覧",
      itemListElement: [
        {
          "@type": "Service",
          position: 1,
          name: "デジタル変革支援",
          description: "AIとWeb3技術を活用した企業のデジタル変革を支援します。",
          provider: {
            "@type": "Organization",
            name: "エーワンロード株式会社",
          },
        },
        {
          "@type": "Service",
          position: 2,
          name: "DAOプラットフォーム構築",
          description: "分散型自律組織のプラットフォーム構築を支援します。",
          provider: {
            "@type": "Organization",
            name: "エーワンロード株式会社",
          },
        },
        {
          "@type": "Service",
          position: 3,
          name: "ウォレットレス認証技術開発",
          description: "次世代の認証技術の研究開発を行っています。",
          provider: {
            "@type": "Organization",
            name: "エーワンロード株式会社",
          },
        },
      ],
    }),
  },
};

const services = [
  {
    id: 1,
    title: "デジタル変革支援",
    description:
      "AIとWeb3技術を活用し、企業のデジタル変革を包括的に支援します。業務プロセスの自動化、データ分析、新規ビジネス創出まで、一貫したサポートを提供します。",
    features: [
      "AIを活用した業務プロセス最適化",
      "ブロックチェーン技術による透明性の向上",
      "データドリブンな意思決定支援",
      "新規ビジネスモデルの創出支援",
    ],
    image: "/images/services/digital-transformation.jpg",
  },
  {
    id: 2,
    title: "DAOプラットフォーム構築",
    description:
      "分散型自律組織（DAO）のプラットフォーム構築を支援します。スマートコントラクトの開発から、ガバナンス設計、コミュニティ形成まで、包括的なサポートを提供します。",
    features: [
      "カスタマイズ可能なDAOフレームワーク",
      "スマートコントラクト開発",
      "ガバナンス設計支援",
      "コミュニティ形成支援",
    ],
    image: "/images/services/dao-platform.jpg",
  },
  {
    id: 3,
    title: "ウォレットレス認証技術開発",
    description:
      "次世代の認証技術の研究開発を行っています。生体認証やデバイス固有の識別子を活用し、より安全で使いやすい認証方式を提供します。",
    features: [
      "生体認証技術の活用",
      "ブロックチェーンによる認証情報の保護",
      "マルチデバイス対応",
      "シームレスなユーザー体験",
    ],
    image: "/images/services/walletless-auth.jpg",
  },
];

const steps = [
  {
    number: 1,
    title: "目的・課題整理",
    description:
      "企業・組織課題の特定、技術要件選定、AIデータ収集など、プロジェクトの方向性を決定します",
    period: "2週間",
    height: "h-[120px]",
    subSteps: ["導線設計・デザイン", "技術要件選定", "企業・組織課題の特定", "AIデータ収集"],
  },
  {
    number: 2,
    title: "コンセプト設計",
    description: "収集したデータと要件に基づき、最適なソリューションの設計を行います",
    period: "1ヶ月",
    height: "h-[200px]",
    subSteps: ["要件定義", "システム設計", "プロトタイプ設計"],
  },
  {
    number: 3,
    title: "実装・開発",
    description: "初期版構築、改善提案、学習など、具体的な開発フェーズを進めます",
    period: "1.5ヶ月",
    height: "h-[300px]",
    subSteps: ["初期版構築", "改善提案", "学習"],
  },
  {
    number: 4,
    title: "テスト & 調整",
    description: "システム開発とクリエイティブな改善を行い、実用化に向けて調整します",
    period: "2ヶ月",
    height: "h-[400px]",
    subSteps: ["クリエイティブ", "システム開発", "テスト運用改善"],
  },
  {
    number: 5,
    title: "導入・運用",
    description: "本番環境への導入と継続的な運用・保守を行います",
    period: "要相談",
    height: "h-[200px]",
    subSteps: ["運用・保守", "継続学習"],
  },
  {
    number: 6,
    title: "改善・向上",
    description: "定期的な改善とアップデートにより、システムの価値を継続的に向上させます",
    period: "要相談",
    height: "h-[200px]",
    subSteps: ["改善・アップデート", "アップデート"],
  },
];

const additionalInfo = {
  education: {
    title: "教育・研修事業",
    items: ["デジタル化アドバイザリー", "メディア・講演", "セミナー企画・開催"],
  },
  details: [
    {
      title: "料金",
      description: "内容・工数に応じ要相談",
    },
    {
      title: "契約形態",
      description: "請負・委任・準委任等柔軟に対応",
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className="pt-24 blob-bg">
      <div className="absolute inset-0 grid-pattern opacity-30 z-0"></div>

      <section className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">サービス</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AIとWeb3技術を活用した革新的なソリューションを提供します
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 100}>
              <Card className="card-3d overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-64 md:h-full">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 mt-6">
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* 導入の流れセクション */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">導入の流れ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AIとWeb3.0を用いたデジタル化・DAO化のプロセス
            </p>
          </div>

          <AnimatedSection delay={300}>
            <Image
              src="/workflow.png"
              alt="導入の流れ"
              width={1500}
              height={500}
              className="w-full h-auto max-w-5xl mx-auto"
            />
          </AnimatedSection>
        </div>

        {/* 追加情報セクション */}
        <div className="mt-16">
          <Card className="card-3d overflow-hidden">
            <div className="grid md:grid-cols-2 divide-x divide-border">
              <div className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl">{additionalInfo.education.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2">
                    {additionalInfo.education.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {additionalInfo.details.map((detail, index) => (
                    <div key={index}>
                      <h3 className="font-semibold mb-2">{detail.title}</h3>
                      <p className="text-muted-foreground">{detail.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTAセクション */}
        <div className="mt-24">
          <AnimatedSection>
            <Card className="card-3d bg-gradient-to-r from-primary/10 to-primary/5 p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">まずはお気軽にご相談ください</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                お客様の課題やご要望に合わせて、最適なソリューションをご提案します
              </p>
              <Button asChild size="lg">
                <Link href="/contact" className="inline-flex items-center">
                  お問い合わせ
                  <HiArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
