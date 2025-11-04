import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "エーワンロード株式会社 | AIで縁の下の走りを支える",
  description:
    "AIを活用したDX支援や、検査業務向けRAGの研究開発を行っています。",
  openGraph: {
    title: "エーワンロード株式会社 | AIで縁の下の走りを支える",
    description:
      "AIを活用したDX支援や、検査業務向けRAGの研究開発を行っています。",
    images: [
      {
        url: "https://a1road.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "エーワンロード株式会社",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "エーワンロード株式会社 | AIで縁の下の走りを支える",
    description:
      "AIを活用したDX支援や、検査業務向けRAGの研究開発を行っています。",
    images: ["https://a1road.com/twitter-image.jpg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "エーワンロード株式会社 | AIで縁の下の走りを支える",
      description:
        "AIを活用したDX支援や、検査業務向けRAGの研究開発を行っています。",
      publisher: {
        "@type": "Organization",
        name: "エーワンロード株式会社",
        logo: {
          "@type": "ImageObject",
          url: "https://a1road.com/logo.png",
        },
      },
mainEntity: {
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "AIエージェント開発",
        description:
          "貴社の特性や課題に合わせたAIエージェントを提供。お問合せ・リーチ増加など効率化とブランディングを推進します。",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "営業支援エージェント「セールスストン」",
        description:
          "フォームやメール、FAXに対応した営業支援エージェント。アポ獲得からメッセージ作成まで、柔軟に対応します。",
            },
          },
        ],
      },
    }),
  },
};
