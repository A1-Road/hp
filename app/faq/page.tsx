import { Metadata, Viewport } from "next";
import { AnimatedSection } from "@/components/ui/animated-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "よくある質問 | エーワンロード株式会社",
  description: "エーワンロード株式会社のサービスや技術に関するよくある質問と回答をまとめています。",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      name: "エーワンロード株式会社 よくある質問",
      description: "エーワンロード株式会社のサービスや技術に関するよくある質問と回答",
      publisher: {
        "@type": "Organization",
        name: "エーワンロード株式会社",
        url: "https://a1road.com",
        logo: {
          "@type": "ImageObject",
          url: "https://a1road.com/logo.png",
        },
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "AIとWeb3の組み合わせにはどのようなメリットがありますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AIとWeb3の組み合わせにより、データの透明性と信頼性が向上し、より公平で効率的な意思決定が可能になります。また、AIの分析能力とWeb3の分散型特性を活かすことで、新しいビジネスモデルの創出が期待できます。",
          },
        },
        {
          "@type": "Question",
          name: "DAOプラットフォームの導入にはどのくらいの期間がかかりますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "プロジェクトの規模や要件によって異なりますが、基本的なプラットフォームの構築には3-6ヶ月程度かかります。その後、組織の特性に合わせたカスタマイズや、メンバーのトレーニング期間も考慮する必要があります。",
          },
        },
      ],
    }),
  },
};

const faqs = [
  {
    question: "AIとWeb3の組み合わせにはどのようなメリットがありますか？",
    answer:
      "AIとWeb3の組み合わせにより、データの透明性と信頼性が向上し、より公平で効率的な意思決定が可能になります。また、AIの分析能力とWeb3の分散型特性を活かすことで、新しいビジネスモデルの創出が期待できます。",
    category: "技術",
  },
  {
    question: "DAOプラットフォームの導入にはどのくらいの期間がかかりますか？",
    answer:
      "プロジェクトの規模や要件によって異なりますが、基本的なプラットフォームの構築には3-6ヶ月程度かかります。その後、組織の特性に合わせたカスタマイズや、メンバーのトレーニング期間も考慮する必要があります。",
    category: "サービス",
  },
  {
    question: "ウォレットレス認証はどのように安全性を確保していますか？",
    answer:
      "ウォレットレス認証は、生体認証やデバイス固有の識別子を活用し、従来のパスワード認証よりも高いセキュリティを実現しています。また、ブロックチェーン技術を活用することで、認証情報の改ざんを防ぎ、より安全な認証プロセスを提供しています。",
    category: "セキュリティ",
  },
  {
    question: "AI導入の際のデータプライバシー対策はどのように行っていますか？",
    answer:
      "データの匿名化や暗号化、アクセス制御など、多層的なセキュリティ対策を実施しています。また、GDPRや個人情報保護法などの規制に準拠したデータ管理を行い、プライバシー保護に配慮しています。",
    category: "セキュリティ",
  },
  {
    question: "Web3技術の導入にはどのような準備が必要ですか？",
    answer:
      "組織のデジタル化レベルや既存システムとの連携、セキュリティ要件の整理などが必要です。また、社内の理解促進や人材育成も重要な要素となります。当社では、導入前の現状分析から具体的なロードマップの策定まで、包括的なサポートを提供しています。",
    category: "サービス",
  },
  {
    question: "AIモデルの精度を向上させるためにどのような取り組みを行っていますか？",
    answer:
      "高品質な学習データの収集と前処理、適切なモデルアーキテクチャの選択、継続的なモデルの改善と検証など、多角的なアプローチで精度向上に取り組んでいます。また、ドメイン知識とAI技術の融合により、より実用的なソリューションを提供しています。",
    category: "技術",
  },
];

export default function FAQPage() {
  return (
    <div className="pt-24 blob-bg">
      <div className="absolute inset-0 grid-pattern opacity-30 z-0"></div>

      <section className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">よくある質問</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            サービスや技術に関するよくある質問と回答をまとめています
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <AccordionItem value={`item-${index}`} className="card-3d mb-4">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-primary">{faq.category}</span>
                      <span className="font-medium">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
