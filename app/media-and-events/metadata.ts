import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "メディアとイベント | エーワンロード株式会社",
  description:
    "エーワンロード株式会社のプレスリリース、ニュース、イベント情報。AIとWeb3を活用したデジタル変革支援、DAOプラットフォーム構築、ウォレットレス認証技術に関する最新情報をご紹介します。",
  openGraph: {
    title: "メディアとイベント | エーワンロード株式会社",
    description:
      "エーワンロード株式会社のプレスリリース、ニュース、イベント情報。AIとWeb3を活用したデジタル変革支援、DAOプラットフォーム構築、ウォレットレス認証技術に関する最新情報をご紹介します。",
    images: [
      {
        url: "https://a1road.com/og-image-media.jpg",
        width: 1200,
        height: 630,
        alt: "エーワンロード株式会社 メディアとイベント",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "メディアとイベント | エーワンロード株式会社",
    description:
      "エーワンロード株式会社のプレスリリース、ニュース、イベント情報。AIとWeb3を活用したデジタル変革支援、DAOプラットフォーム構築、ウォレットレス認証技術に関する最新情報をご紹介します。",
    images: ["https://a1road.com/twitter-image-media.jpg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "メディアとイベント | エーワンロード株式会社",
      description:
        "エーワンロード株式会社のプレスリリース、ニュース、イベント情報。AIとWeb3を活用したデジタル変革支援、DAOプラットフォーム構築、ウォレットレス認証技術に関する最新情報をご紹介します。",
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
