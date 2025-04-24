import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | エーワンロード株式会社",
  description:
    "エーワンロード株式会社の会社概要。AIとWeb3を活用したDX支援、DAOプラットフォーム構築、ウォレットレス認証技術の研究開発を行っています。",
  openGraph: {
    title: "会社概要 | エーワンロード株式会社",
    description:
      "エーワンロード株式会社の会社概要。AIとWeb3を活用したDX支援、DAOプラットフォーム構築、ウォレットレス認証技術の研究開発を行っています。",
    images: [
      {
        url: "https://a1road.com/og-image-about.jpg",
        width: 1200,
        height: 630,
        alt: "エーワンロード株式会社 会社概要",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "会社概要 | エーワンロード株式会社",
    description:
      "エーワンロード株式会社の会社概要。AIとWeb3を活用したDX支援、DAOプラットフォーム構築、ウォレットレス認証技術の研究開発を行っています。",
    images: ["https://a1road.com/twitter-image-about.jpg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "会社概要 | エーワンロード株式会社",
      description:
        "エーワンロード株式会社の会社概要。AIとWeb3を活用したDX支援、DAOプラットフォーム構築、ウォレットレス認証技術の研究開発を行っています。",
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
