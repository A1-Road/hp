"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HiArrowRight } from "react-icons/hi";
import { useLayout } from "../app/contexts/header-context";
import Image from "next/image";

export default function Footer() {
  const { isFooterVisible } = useLayout();

  if (!isFooterVisible) return null;

  return (
    <footer className="bg-beige-50 border-t">
      <div className="container mx-auto px-8 py-8">
        {/* Consultation and Documentation Request Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">まずは一度相談してみませんか？</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">まずはご相談</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/request-documentation">資料請求</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-4">サイトマップ</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about-us"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    Case
                  </Link>
                </li>
                <li>
                  <Link
                    href="/media-and-events"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    Media and Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/request-documentation"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    資料請求
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg mb-4">About Us</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about-us#philosophy"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  創業理念
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us#mvv"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  MVV
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us#members"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  メンバー
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us#company"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  会社概要
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg mb-4">Case</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/case#rag"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  RAG実装
                </Link>
              </li>
              <li>
                <Link
                  href="/case#walletless"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  ウォレットレス
                </Link>
              </li>
              <li>
                <Link
                  href="/case#daoathon"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  DAOATHON
                </Link>
              </li>
              <li>
                <Link
                  href="/case#fa1rness"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  FA1RNESS
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg mb-4">エーワンロード株式会社</h4>
            <p className="text-muted-foreground leading-relaxed">
              AIおよびブロックチェーン（Web3）を活用したデジタル変革支援、DAOプラットフォーム構築、ウォレットレス認証技術の研究開発を行っています。
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Image
            src="/a1road-logo.png"
            alt="エーワンロード株式会社"
            width={200}
            height={67}
            className="w-auto h-12"
          />
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} エーワンロード株式会社. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
