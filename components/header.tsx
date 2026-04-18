"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLayout } from "../app/contexts/header-context";
import { usePathname, useRouter } from "next/navigation";
import { SITE_LANG_COOKIE, type SiteLocale } from "@/lib/site-locale";

type NavigationItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  navigation: NavigationItem[];
  currentLang: SiteLocale;
};

export default function Header({ navigation, currentLang }: HeaderProps) {
  const { isHeaderVisible } = useLayout();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function switchLanguage(nextLang: SiteLocale) {
    if (nextLang === currentLang) return;
    document.cookie = `${SITE_LANG_COOKIE}=${nextLang}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  }

  if (!isHeaderVisible) return null;

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled || !isHome
          ? "border-b border-black/10 bg-white/96 py-3 text-black backdrop-blur"
          : "bg-black/24 py-5 text-white backdrop-blur"
      )}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 md:px-10">
        <Link href="/" className="flex items-center text-sm font-semibold uppercase tracking-[0.28em]">
          A-One Road
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium tracking-[0.16em] transition-opacity hover:opacity-60",
                pathname === item.href ? "opacity-100" : "opacity-80"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => switchLanguage("ja")}
            className={cn(
              "text-xs font-semibold tracking-[0.18em] transition-opacity",
              currentLang === "ja" ? "opacity-100" : "opacity-50 hover:opacity-80"
            )}
          >
            JP
          </button>
          <span className="opacity-40">/</span>
          <button
            type="button"
            onClick={() => switchLanguage("en")}
            className={cn(
              "text-xs font-semibold tracking-[0.18em] transition-opacity",
              currentLang === "en" ? "opacity-100" : "opacity-50 hover:opacity-80"
            )}
          >
            EN
          </button>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-label="Open navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-black/10 bg-white md:hidden">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-5 py-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => switchLanguage("ja")}
                className={cn("text-sm font-medium", currentLang === "ja" ? "opacity-100" : "opacity-50")}
              >
                JP
              </button>
              <button
                type="button"
                onClick={() => switchLanguage("en")}
                className={cn("text-sm font-medium", currentLang === "en" ? "opacity-100" : "opacity-50")}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
