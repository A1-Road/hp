"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLayout } from "../app/contexts/header-context";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navigation = [
  { name: "About Us", href: "/about-us" },
  { name: "Case", href: "/case" },
  { name: "Media and Events", href: "/media-and-events" },
];

export default function NewHeader() {
  const { isHeaderVisible } = useLayout();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isHeaderVisible) return null;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-[#fffaeb]/80 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/a-one-road-logo-lay.png"
            alt="エーワンロード株式会社"
            width={150}
            height={40}
            className="w-auto h-9"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <nav className="flex items-center space-x-8 mx-auto">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex space-x-2">
          <Button
            asChild
            className="rounded-full bg-primary text-white hover:bg-primary/90 hover:text-white hover:scale-105 transition-all duration-200 text-lg font-bold"
          >
            <Link href="/contact">まずはご相談</Link>
          </Button>
          <Button
            asChild
            className="rounded-full bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-200 border-2 border-primary text-lg font-bold"
          >
            <Link href="/request">資料請求</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#fffaeb] border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 items-center">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary text-center",
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="w-full rounded-full bg-primary text-white hover:bg-primary/90 hover:text-white hover:scale-105 transition-all duration-200 text-lg font-bold"
            >
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                相談する
              </Link>
            </Button>
            <Button
              asChild
              className="w-full rounded-full bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-200 border-2 border-primary text-lg font-bold"
            >
              <Link href="/request" onClick={() => setIsMenuOpen(false)}>
                資料請求
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
