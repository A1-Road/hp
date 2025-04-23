import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { LayoutProvider } from "./contexts/header-context";
import Script from "next/script";

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
  title: "エーワンロード株式会社 | AIとWeb3で社会の屋台骨をアップデート",
  description:
    "AIおよびブロックチェーン（Web3）を活用したデジタル変革支援、DAOプラットフォーム構築、ウォレットレス認証技術の研究開発を行っています。",
  keywords: "AI, Web3, ブロックチェーン, デジタル変革, DAO, ウォレットレス認証, エーワンロード",
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
    url: "https://a1road.com",
    title: "エーワンロード株式会社 | AIとWeb3で社会の屋台骨をアップデート",
    description:
      "AIおよびブロックチェーン（Web3）を活用したデジタル変革支援、DAOプラットフォーム構築、ウォレットレス認証技術の研究開発を行っています。",
    siteName: "エーワンロード株式会社",
    images: [
      {
        url: "https://a1road.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "エーワンロード株式会社",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "エーワンロード株式会社 | AIとWeb3で社会の屋台骨をアップデート",
    description:
      "AIおよびブロックチェーン（Web3）を活用したデジタル変革支援、DAOプラットフォーム構築、ウォレットレス認証技術の研究開発を行っています。",
    images: ["https://a1road.com/twitter-image.jpg"],
    creator: "@a1road",
  },
  other: {
    "application/ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "エーワンロード株式会社",
        url: "https://a1road.com",
        logo: "https://a1road.com/logo.png",
        description:
          "AIおよびブロックチェーン（Web3）を活用したデジタル変革支援、DAOプラットフォーム構築、ウォレットレス認証技術の研究開発を行っています。",
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
          telephone: "+81-3-1234-5678",
          contactType: "customer service",
          areaServed: "JP",
          availableLanguage: ["Japanese"],
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "エーワンロード株式会社",
        url: "https://a1road.com",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://a1road.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ]),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansJP.variable} font-sans bg-beige-50`}>
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
              <BackgroundShapes />
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

function BackgroundShapes() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-beige-200/30 blur-3xl" />
      <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-beige-300/20 blur-3xl" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-beige-100/30 blur-3xl" />
      <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-beige-200/20 blur-3xl" />
    </div>
  );
}
