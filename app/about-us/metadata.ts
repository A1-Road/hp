import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABOUT | エーワンロード株式会社",
  description:
    "ミッション、ビジョン、事業定義、法人情報を掲載しています。人物紹介は載せず、会社の定義だけを整理しています。",
  openGraph: {
    title: "ABOUT | エーワンロード株式会社",
    description:
      "全ての人の正当な価値を取り戻す。自動車を通じて日本の価値を世界に問い続ける会社。",
    images: [
      {
        url: "https://a-oneroad.com/og-image-about.jpg",
        width: 1200,
        height: 630,
        alt: "ABOUT | エーワンロード株式会社",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ABOUT | エーワンロード株式会社",
    description:
      "Japanese Commercial Vehicles for Global Buyers.",
    images: ["https://a-oneroad.com/twitter-image-about.jpg"],
  },
};
