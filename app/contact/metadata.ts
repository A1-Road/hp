import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | エーワンロード株式会社",
  description:
    "エーワンロード株式会社へのお問い合わせフォーム。AIとWeb3を活用したDX支援、DAOプラットフォーム構築、ウォレットレス認証技術についてのご相談を承っています。",
  openGraph: {
    title: "お問い合わせ | エーワンロード株式会社",
    description:
      "エーワンロード株式会社へのお問い合わせフォーム。AIとWeb3を活用したDX支援、DAOプラットフォーム構築、ウォレットレス認証技術についてのご相談を承っています。",
    images: [
      {
        url: "https://a1road.com/og-image-contact.jpg",
        width: 1200,
        height: 630,
        alt: "エーワンロード株式会社 お問い合わせ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "お問い合わせ | エーワンロード株式会社",
    description:
      "エーワンロード株式会社へのお問い合わせフォーム。AIとWeb3を活用したDX支援、DAOプラットフォーム構築、ウォレットレス認証技術についてのご相談を承っています。",
    images: ["https://a1road.com/twitter-image-contact.jpg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "お問い合わせ | エーワンロード株式会社",
      description:
        "エーワンロード株式会社へのお問い合わせフォーム。AIとWeb3を活用したDX支援、DAOプラットフォーム構築、ウォレットレス認証技術についてのご相談を承っています。",
      publisher: {
        "@type": "Organization",
        name: "エーワンロード株式会社",
        logo: {
          "@type": "ImageObject",
          url: "https://a1road.com/logo.png",
        },
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+81-3-1234-5678",
        contactType: "customer service",
        areaServed: "JP",
        availableLanguage: ["Japanese"],
      },
    }),
  },
};
