import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { LayoutProvider } from "./contexts/header-context";
import Script from "next/script";
import { getContentItem, getContentItems } from "@/lib/site-content";
import { getSiteLocale } from "@/lib/locale";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "エーワンロード株式会社 | Japanese Commercial Vehicles for Global Buyers",
  description:
    "全ての人の正当な価値を取り戻すというミッションの下、日本の商用中古車輸出を通じて我が国と世界の自動車文化をアップデートし、再定義します。",
  keywords:
    "Japanese Commercial Vehicles for Global Buyers, Business Sourcing, Bulk Orders, Export Support, Verified Vehicle Information, 商用中古車輸出, 法人調達",
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
    title: "エーワンロード株式会社 | Japanese Commercial Vehicles for Global Buyers",
    description:
      "自動車を通じて日本の価値を世界に問い続ける会社。Business Sourcing / Bulk Orders / Export Support / Verified Vehicle Information。",
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
    title: "エーワンロード株式会社 | Japanese Commercial Vehicles for Global Buyers",
    description:
      "For dealers, fleets, and commercial buyers seeking reliable sourcing from Japan.",
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
          "日本の商用中古車輸出を通じて、我が国と世界の自動車文化をアップデートし、再定義します。",
        address: {
          "@type": "PostalAddress",
          addressCountry: "JP",
        },
        sameAs: [
          "https://twitter.com/a1road",
          "https://linkedin.com/company/a1road",
          "https://github.com/a1road",
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
      <body
        className={`${inter.variable} ${notoSansJP.variable} font-sans`}
        suppressHydrationWarning
      >
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
