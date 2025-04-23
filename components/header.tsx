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
        scrolled ? "bg-beige-50/80 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/a1road-logo.png"
            alt="エーワンロード株式会社"
            width={200}
            height={67}
            className="w-auto h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex space-x-2">
            <Button
              asChild
              className="rounded-full bg-white text-gray-900 hover:bg-blue-100 hover:scale-105 transition-all duration-200 border border-gray-600"
            >
              <Link href="/contact">まずはご相談</Link>
            </Button>
            <Button
              asChild
              className="rounded-full bg-white text-gray-900 hover:bg-blue-100 hover:scale-105 transition-all duration-200 border border-gray-600"
            >
              <Link href="/request">資料請求</Link>
            </Button>
          </div>
        </nav>

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
        <div className="md:hidden bg-beige-50 border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="w-full rounded-full bg-white text-gray-900 hover:bg-blue-100 hover:scale-105 transition-all duration-200"
            >
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                相談する
              </Link>
            </Button>
            <Button
              asChild
              className="w-full rounded-full bg-white text-gray-900 hover:bg-blue-100 hover:scale-105 transition-all duration-200"
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
