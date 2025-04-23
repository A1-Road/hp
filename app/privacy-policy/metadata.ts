import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | エーワンロード株式会社",
  description:
    "エーワンロード株式会社のプライバシーポリシー。個人情報の取り扱い、Cookieの使用、データ保護に関する方針を説明しています。",
  openGraph: {
    title: "プライバシーポリシー | エーワンロード株式会社",
    description:
      "エーワンロード株式会社のプライバシーポリシー。個人情報の取り扱い、Cookieの使用、データ保護に関する方針を説明しています。",
    images: [
      {
        url: "https://a1road.com/og-image-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "エーワンロード株式会社 プライバシーポリシー",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "プライバシーポリシー | エーワンロード株式会社",
    description:
      "エーワンロード株式会社のプライバシーポリシー。個人情報の取り扱い、Cookieの使用、データ保護に関する方針を説明しています。",
    images: ["https://a1road.com/twitter-image-privacy.jpg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "プライバシーポリシー | エーワンロード株式会社",
      description:
        "エーワンロード株式会社のプライバシーポリシー。個人情報の取り扱い、Cookieの使用、データ保護に関する方針を説明しています。",
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
