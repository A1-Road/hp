import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | エーワンロード株式会社",
  description:
    "エーワンロード株式会社は、中小企業向けの営業/DX支援会社です。『セールスストン（Salesstone.ai）』『サポートストン（Supportstone）』を通じて、営業と顧客対応を一体化した省力型DXを実現します。",
  openGraph: {
    title: "会社概要 | エーワンロード株式会社",
    description:
      "エーワンロード株式会社は、中小企業向けの営業/DX支援会社です。『セールスストン（Salesstone.ai）』『サポートストン（Supportstone）』を通じて、営業と顧客対応を一体化した省力型DXを実現します。",
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
      "エーワンロード株式会社は、中小企業向けの営業/DX支援会社です。『セールスストン（Salesstone.ai）』『サポートストン（Supportstone）』を通じて、営業と顧客対応を一体化した省力型DXを実現します。",
    images: ["https://a1road.com/twitter-image-about.jpg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "会社概要 | エーワンロード株式会社",
      description:
        "エーワンロード株式会社は、中小企業向けの営業/DX支援会社です。『セールスストン（Salesstone.ai）』『サポートストン（Supportstone）』を通じて、営業と顧客対応を一体化した省力型DXを実現します。",
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
