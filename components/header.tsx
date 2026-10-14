"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLayout } from "../app/contexts/header-context";
import { usePathname } from "next/navigation";
import { localeHref, type SiteLocale } from "@/lib/site-locale";

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


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function switchLanguage(nextLang: SiteLocale) {
    const base = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
    window.location.assign(localeHref(nextLang, base) + window.location.search + window.location.hash);
  }

  if (!isHeaderVisible) return null;

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-[100] isolate border-b border-black/10 bg-white text-black transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 md:px-10">
        <Link href={localeHref(currentLang,"/")} className="flex items-center text-sm font-semibold tracking-[0.08em]">
          A-one road
        </Link>

        <nav aria-label={currentLang === "en" ? "Main navigation" : "メインナビゲーション"} className="hidden items-center gap-5 lg:flex">
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

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={() => switchLanguage("ja")}
            className={cn(
              "text-xs font-semibold tracking-[0.18em] transition-opacity",
              currentLang === "ja" ? "opacity-100" : "opacity-75 hover:opacity-100"
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
              currentLang === "en" ? "opacity-100" : "opacity-75 hover:opacity-100"
            )}
          >
            EN
          </button>
        </div>

        <button
          type="button"
          className="min-h-11 min-w-11 lg:hidden"
          aria-label={currentLang === "en" ? "Open navigation" : "メニューを開く"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen ? (
        <div id="mobile-navigation" className="border-t border-black/10 bg-white lg:hidden">
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
                className={cn("text-sm font-medium", currentLang === "ja" ? "opacity-100" : "opacity-75")}
              >
                JP
              </button>
              <button
                type="button"
                onClick={() => switchLanguage("en")}
                className={cn("text-sm font-medium", currentLang === "en" ? "opacity-100" : "opacity-75")}
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
