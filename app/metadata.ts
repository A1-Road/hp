import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "エーワンロード株式会社 | AIとWeb3で社会の屋台骨をアップデート",
  description:
    "AIおよびブロックチェーン（Web3）を活用したデジタル変革支援、DAOプラットフォーム構築、ウォレットレス認証技術の研究開発を行っています。",
  openGraph: {
    title: "エーワンロード株式会社 | AIとWeb3で社会の屋台骨をアップデート",
    description:
      "AIおよびブロックチェーン（Web3）を活用したデジタル変革支援、DAOプラットフォーム構築、ウォレットレス認証技術の研究開発を行っています。",
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
    title: "エーワンロード株式会社 | AIとWeb3で社会の屋台骨をアップデート",
    description:
      "AIおよびブロックチェーン（Web3）を活用したデジタル変革支援、DAOプラットフォーム構築、ウォレットレス認証技術の研究開発を行っています。",
    images: ["https://a1road.com/twitter-image.jpg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "エーワンロード株式会社 | AIとWeb3で社会の屋台骨をアップデート",
      description:
        "AIおよびブロックチェーン（Web3）を活用したデジタル変革支援、DAOプラットフォーム構築、ウォレットレス認証技術の研究開発を行っています。",
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
              name: "DAOアドバイザリー",
              description:
                "DAO（分散型自律組織）の設計・構築・運営をトータルサポート。組織の透明性と効率性を高め、新しい形の事業の進め方を実現します。",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Service",
              name: "AIエージェント開発",
              description:
                "製造業、建設業、観光業向けにカスタマイズされたAIソリューションを提供。業務効率化と新たな価値創造を支援します。",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "Service",
              name: "Bankless Japan",
              description:
                "グローバルで認知されたWeb3メディア「Bankless」の日本版。AI、クリプト、DeFi、Web3の基本から最新トレンドまで、わかりやすく解説。",
            },
          },
        ],
      },
    }),
  },
};
