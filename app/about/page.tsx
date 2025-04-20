import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsBuilding } from "react-icons/bs";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | エーワンロード株式会社",
  description: "エーワンロード株式会社の会社概要、経営理念、事業内容などをご紹介します。",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "エーワンロード株式会社",
      description:
        "AIおよびブロックチェーン（Web3）を活用したデジタル変革支援、DAOプラットフォーム構築、ウォレットレス認証技術の研究開発を行っています。",
      publisher: {
        "@type": "Organization",
        name: "エーワンロード株式会社",
        url: "https://a1road.com",
        logo: {
          "@type": "ImageObject",
          url: "https://a1road.com/logo.png",
        },
      },
      mainEntity: {
        "@type": "Organization",
        name: "エーワンロード株式会社",
        description:
          "AIおよびブロックチェーン（Web3）を活用したデジタル変革支援、DAOプラットフォーム構築、ウォレットレス認証技術の研究開発を行っています。",
        url: "https://a1road.com",
        sameAs: ["https://twitter.com/a1road", "https://linkedin.com/company/a1road"],
      },
    }),
  },
};

export default function About() {
  return (
    <div className="pt-24">
      <section className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">会社概要</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AIとWeb3で社会の屋台骨をアップデートする、エーワンロード株式会社の概要をご紹介します
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center">
            <Image src="/a1road-logo.png" width={300} height={300} alt="エーワンロード株式会社" />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">企業情報</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <BsBuilding className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">会社名</h3>
                  <p>エーワンロード株式会社（設立準備中）</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">代表者</h3>
                  <p>Kaz Tamura（田村一馬）</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">設立日</h3>
                  <p>2023年</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">事業内容</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>AIを活用した製造業向け予測分析システムの開発・導入支援</li>
                    <li>Web3技術を活用した建設業向け工程管理・品質保証プラットフォームの構築</li>
                    <li>観光業向けデジタル体験プラットフォームの開発・運営</li>
                    <li>ウォレットレス認証技術の研究開発と実装支援</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MdEmail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">メールアドレス</h3>
                  <p>admin@a1-road.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MdLocationOn className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">所在地</h3>
                  <p>
                    〒225-0013
                    <br />
                    神奈川県横浜市青葉区荏田町1150-34
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ミッション・ビジョンセクション */}
      <section className="bg-beige-100 py-16 md:py-24 my-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">ミッション・ビジョン</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="floating-card p-8 bg-white">
              <h3 className="text-2xl font-bold mb-4 text-center">ミッション</h3>
              <p className="text-center text-lg mb-6">AIとWeb3で、日本の産業を革新する</p>
              <p className="text-muted-foreground">
                製造業、建設業、観光業といった日本の基幹産業に最先端技術を導入し、
                グローバル市場での競争力を強化します。技術の力で業務効率を向上させ、
                新たな価値創造を実現することで、持続可能な産業基盤の構築に貢献します。
              </p>
            </div>

            <div className="floating-card p-8 bg-white">
              <h3 className="text-2xl font-bold mb-4 text-center">ビジョン</h3>
              <p className="text-center text-lg mb-6">
                テクノロジーと産業の融合による、持続可能な社会の実現
              </p>
              <p className="text-muted-foreground">
                AIやWeb3といった先端技術を、各業界の特性に合わせて最適化し、
                実践的なソリューションとして提供します。技術の民主化を通じて、
                誰もがイノベーションを起こせる環境を創出し、日本の産業全体の
                デジタル変革を推進します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 主な取引先・提携実績セクション */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">主な取引先・提携実績</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="floating-card p-6 flex items-center justify-center">
            <Image
              src="/placeholder-logo.svg"
              width={150}
              height={75}
              alt="住信SBIネット銀行"
              className="max-h-12 w-auto"
            />
          </div>

          <div className="floating-card p-6 flex items-center justify-center">
            <Image
              src="/placeholder-logo.svg"
              width={150}
              height={75}
              alt="100BANCH"
              className="max-h-12 w-auto"
            />
          </div>

          <div className="floating-card p-6 flex items-center justify-center">
            <Image
              src="/placeholder-logo.svg"
              width={150}
              height={75}
              alt="パートナー企業"
              className="max-h-12 w-auto"
            />
          </div>

          <div className="floating-card p-6 flex items-center justify-center">
            <Image
              src="/placeholder-logo.svg"
              width={150}
              height={75}
              alt="パートナー企業"
              className="max-h-12 w-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="container-custom">
        <div className="bg-primary/10 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            私たちと一緒に、未来を創りませんか？
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            AIとWeb3の力で、あなたのビジネスを次のステージへ。 まずはお気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/members">
                メンバーを見る
                <HiArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
