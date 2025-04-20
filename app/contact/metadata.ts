import { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | エーワンロード株式会社",
  description:
    "エーワンロード株式会社へのお問い合わせフォーム。AI、ブロックチェーン、Web3に関するご相談・お問い合わせをお待ちしています。",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "お問い合わせ",
      description: "エーワンロード株式会社へのお問い合わせフォーム",
      publisher: {
        "@type": "Organization",
        name: "エーワンロード株式会社",
        url: "https://a1road.com",
        logo: {
          "@type": "ImageObject",
          url: "https://a1road.com/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://a1road.com/contact",
      },
    }),
  },
};
