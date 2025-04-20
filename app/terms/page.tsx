import { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | エーワンロード株式会社",
  description: "エーワンロード株式会社の利用規約について説明しています。",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "利用規約",
      description: "エーワンロード株式会社の利用規約",
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
        "@type": "LegalDocument",
        name: "利用規約",
        description: "エーワンロード株式会社の利用規約",
        dateCreated: "2024-03-20",
        dateModified: "2024-03-20",
        jurisdiction: "日本",
        legalForceStatus: "https://schema.org/InForce",
      },
    }),
  },
};

// ... 既存のコンポーネントコード ...
