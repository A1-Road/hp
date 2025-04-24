import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "事例紹介 | エーワンロード株式会社",
  description:
    "エーワンロード株式会社の事例紹介。AIとWeb3を活用したDX支援、DAOプラットフォーム構築、ウォレットレス認証技術の導入事例をご紹介します。",
  openGraph: {
    title: "事例紹介 | エーワンロード株式会社",
    description:
      "エーワンロード株式会社の事例紹介。AIとWeb3を活用したDX支援、DAOプラットフォーム構築、ウォレットレス認証技術の導入事例をご紹介します。",
    images: [
      {
        url: "https://a1road.com/og-image-case.jpg",
        width: 1200,
        height: 630,
        alt: "エーワンロード株式会社 事例紹介",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "事例紹介 | エーワンロード株式会社",
    description:
      "エーワンロード株式会社の事例紹介。AIとWeb3を活用したDX支援、DAOプラットフォーム構築、ウォレットレス認証技術の導入事例をご紹介します。",
    images: ["https://a1road.com/twitter-image-case.jpg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "事例紹介 | エーワンロード株式会社",
      description:
        "エーワンロード株式会社の事例紹介。AIとWeb3を活用したDX支援、DAOプラットフォーム構築、ウォレットレス認証技術の導入事例をご紹介します。",
      publisher: {
        "@type": "Organization",
        name: "エーワンロード株式会社",
        logo: {
          "@type": "ImageObject",
          url: "https://a1road.com/logo.png",
        },
      },
    }),
  },
};
