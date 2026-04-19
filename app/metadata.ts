import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "エーワンロード株式会社 | 日本の商用車を、世界の現場へ。",
  description:
    "個人・法人向けに、日本の軽トラックやユーティリティ車両を輸出しています。用途に応じた車両選定から輸出まで、一貫して対応します。",
  openGraph: {
    title: "エーワンロード株式会社 | 日本の商用車を、世界の現場へ。",
    description:
      "個人・法人向けに、日本の軽トラックやユーティリティ車両を輸出しています。用途に応じた車両選定から輸出まで、一貫して対応します。",
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
    title: "エーワンロード株式会社 | 日本の商用車を、世界の現場へ。",
    description:
      "個人・法人向けに、日本の軽トラックやユーティリティ車両を輸出しています。用途に応じた車両選定から輸出まで、一貫して対応します。",
    images: ["https://a1road.com/twitter-image.jpg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "エーワンロード株式会社 | 日本の商用車を、世界の現場へ。",
      description:
        "個人・法人向けに、日本の軽トラックやユーティリティ車両を輸出しています。用途に応じた車両選定から輸出まで、一貫して対応します。",
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
              name: "日本の軽トラックおよび商用車の輸出",
              description:
                "個人および法人向けに、日本の商用中古車の調達と輸出を行っています。用途や市場に応じて、適した車両の選定を支援します。",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Service",
              name: "法人向け車両調達",
              description:
                "日本国内の軽トラックやユーティリティ車両から、用途に応じた車両を選定し、導入判断に必要な情報を整理します。",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "Service",
              name: "複数台導入支援",
              description:
                "複数拠点や継続仕入れに向け、台数・用途・仕向地に合わせた調達と輸出の進行を一貫して支援します。",
            },
          },
        ],
      },
    }),
  },
};
