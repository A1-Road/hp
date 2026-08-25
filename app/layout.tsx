import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { LayoutProvider } from "./contexts/header-context";
import Script from "next/script";
import { getContentItem, getContentItems } from "@/lib/site-content";
import { getSiteLocale } from "@/lib/locale";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "エーワンロード株式会社 | 海外の技術で、日本の現場を強くする",
  description:
    "海外の優れた機械・AI・SaaSを、日本企業の課題に合わせて選定し、導入・実装・運用まで担う。製造業向けのFactory事業と、営業・バックオフィス向けのBPO事業を展開する横浜のスタートアップです。",
  keywords:
    "製造業DX, 大型積層造形, WAAM, LFAM, 海外SaaS 日本導入, テクノロジー導入支援, BPO, AI SDR, 営業自動化, エーワンロード, A-one road",
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
    title: "エーワンロード株式会社 | 海外の技術で、日本の現場を強くする",
    description:
      "海外の優れた機械・AI・SaaSを、日本企業の課題に合わせて選定し、導入・実装・運用まで担う。Factory事業とBPO事業を展開しています。",
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
    title: "A-One Road Co., Ltd. | Country Manager as a Service, for Japan",
    description:
      "We source proven machines, AI, and SaaS from overseas and take them through selection, deployment, and operation for Japanese businesses. Focus areas: Factory and BPO.",
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
          "海外の優れた機械・AI・SaaSを日本企業の課題に合わせて導入・実装・運用する、Factory事業とBPO事業を展開する横浜のスタートアップ。",
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
