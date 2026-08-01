import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { LayoutProvider } from "./contexts/header-context";
import Script from "next/script";
import { getContentItem, getContentItems } from "@/lib/site-content";
import { getSiteLocale } from "@/lib/locale";

export const runtime = "edge";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "エーワンロード株式会社 | 金型・治具の保管問題を解決します",
  description:
    "大型金型・治具の長納期と高コスト、廃番部品の再生産、少量多品種の採算。エーワンロード株式会社は、これらの課題に取り組んでいる横浜のスタートアップです。保管コストと稼働状況を可視化し、保管し続けるより安く早い選択肢をご提案します。",
  keywords:
    "金型保管, 治具保管, 廃番部品, 少量多品種生産, 製造業DX, 大型積層造形, WAAM, LFAM, 海外SaaS 日本導入, テクノロジー導入支援, エーワンロード, A-one road",
  authors: [{ name: "エーワンロード株式会社" }],
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  generator: "Next.js",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://a-oneroad.com",
    title: "エーワンロード株式会社 | 金型・治具の保管問題を解決します",
    description:
      "大型金型・治具の長納期と高コスト、廃番部品の再生産、少量多品種の採算。保管コストと稼働状況を可視化し、保管し続けるより安く早い選択肢をご提案します。",
    siteName: "エーワンロード株式会社",
    images: [
      {
        url: "https://a-oneroad.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "エーワンロード株式会社",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A-One Road Co., Ltd. | Solving the Mold & Die Storage Problem",
    description:
      "Long lead times and high costs for large molds and jigs, reproducing discontinued parts, low-volume profitability. We visualize your storage cost and utilization, then propose a cheaper, faster alternative to storage.",
    images: ["https://a-oneroad.com/twitter-image.jpg"],
    creator: "@a1road",
  },
  other: {
    "application/ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "エーワンロード株式会社",
        url: "https://a-oneroad.com",
        logo: "https://a-oneroad.com/logo.png",
        description:
          "大型金型・治具の長納期と高コスト、廃番部品の再生産、少量多品種の採算といった製造現場の課題に取り組む横浜のスタートアップ。",
        address: {
          "@type": "PostalAddress",
          addressCountry: "JP",
        },
        sameAs: [
          "https://twitter.com/a1road",
          "https://linkedin.com/company/a1road",
          "https://github.com/A1-Road",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+81-80-4870-5690",
          contactType: "customer service",
          areaServed: "JP",
          availableLanguage: ["Japanese"],
        },
      },
    ]),
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getSiteLocale();
  const navigation = await getContentItems("global", "navigation");
  const socials = await getContentItems("global", "socials");
  const contactInfo = await getContentItems("global", "contactInfo");
  const footer = await getContentItem("global", "footer");

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SBXZP4QP82"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SBXZP4QP82');
          `}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutProvider>
            <div className="relative overflow-hidden">
              <Header
                navigation={navigation.map((item) => ({ label: item.label, href: item.href }))}
                currentLang={locale}
              />
              <main>{children}</main>
              <Footer
                navigation={navigation.map((item) => ({ label: item.label, href: item.href }))}
                socials={socials.map((item) => ({ label: item.label, href: item.href }))}
                contactInfo={contactInfo.map((item) => ({ label: item.label, value: item.value }))}
                tagline={footer.tagline}
                privacyLabel={footer.privacyLabel}
                copyright={footer.copyright}
              />
            </div>
          </LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
