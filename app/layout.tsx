import SiteAnalytics from "@/components/site-analytics";
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
};

export const metadata: Metadata = {
  metadataBase: new URL("https://a-oneroad.com"),
  title: "A-one road | Global Manufacturing Technology. Delivered to Japan.",
  description: "製造技術の日本展開と調達をつなぐValue-Added Distributor。",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  icons: {icon:"/favicon.ico", apple:"/apple-touch-icon.png"},
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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:p-4">{locale === "en" ? "Skip to content" : "本文へ移動"}</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"A-one road",legalName:"エーワンロード株式会社",url:"https://a-oneroad.com",logo:"https://a-oneroad.com/a-one-road-logo.png",foundingDate:"2021-03",email:"admin@a1-road.com",description:"Japan-based Value-Added Distributor for manufacturing equipment, materials and technology.",address:{"@type":"PostalAddress",streetAddress:"浅間町1丁目4-3 ウィザードビル402",addressLocality:"横浜市西区",addressRegion:"神奈川県",postalCode:"220-0072",addressCountry:"JP"},contactPoint:{"@type":"ContactPoint",contactType:"sales",email:"admin@a1-road.com",availableLanguage:["Japanese","English"]},sameAs:["https://linkedin.com/company/a1road","https://github.com/A1-Road"]})}}/>
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
              <SiteAnalytics/>
              <main id="main-content">{children}</main>
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
