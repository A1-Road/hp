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
              name: "法規認証対応AI",
              description:
                "認証業務AIの設計・構築・運用をトータルサポート。車両や製品の法規認証プロセスを自動化・効率化し、開発スピードとコンプライアンス精度を飛躍的に向上させます。",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Service",
              name: "AIエージェント開発",
              description:
                "製造業向けにカスタマイズされたAIソリューションを提供。業務効率化と新たな価値創造を支援します。",
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
