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
  title: "エーワンロード株式会社 | グローバルGTMパートナー & モビリティ",
  description:
    "世の中の隠された価値の語り部となる。エーワンロード（A-one road）は、世界の先端プロダクト（AI・SaaS）を日本企業の課題に合わせて選定・導入するグローバルGTMパートナー事業と、日本の車両を発信・調達・輸出するモビリティ事業を通じて、すべての人の正当な価値を取り戻します。",
  keywords:
    "グローバルGTMパートナー, 海外SaaS 日本導入, 海外AIプロダクト 日本市場参入, テクノロジー導入支援, ディストリビューター, ローカライズ, PoC, 車両輸出, モビリティ, エーワンロード, A-one road",
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
    title: "エーワンロード株式会社 | グローバルGTMパートナー & モビリティ",
    description:
      "世界の先端プロダクトを、日本企業の課題に合わせて選び・つなぎ・導入するグローバルGTMパートナー。日本の車両を扱うモビリティ事業も。",
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
    title: "エーワンロード株式会社 | グローバルGTMパートナー & モビリティ",
    description:
      "A global GTM partner bringing the world leading AI and SaaS to Japan, plus a mobility business.",
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
          "世界の先端プロダクト（AI・SaaS）を日本企業の課題に合わせて選定・導入するグローバルGTMパートナー事業と、日本の車両の発信・調達・輸出を行うモビリティ事業。",
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
