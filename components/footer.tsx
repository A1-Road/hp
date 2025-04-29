"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HiArrowRight } from "react-icons/hi";
import { useLayout } from "../app/contexts/header-context";
import Image from "next/image";

export default function Footer() {
  const { isFooterVisible } = useLayout();

  if (!isFooterVisible) return null;

  const navigation = {
    main: [
      { name: "ホーム", href: "/" },
      { name: "サービス", href: "/services" },
      { name: "導入事例", href: "/cases" },
      { name: "会社概要", href: "/about" },
      { name: "資料請求", href: "/request" },
      { name: "お問い合わせ", href: "/contact" },
    ],
  };

  return (
    <footer className="text-gray-100 border-t">
      {/* CTA Section with split background */}
      <div className="relative">
        {/* Background colors */}
        <div className="flex flex-col md:flex-row">
          <div className="bg-primary w-full md:w-1/2 h-[260px]"></div>
          <div className="bg-[#111827] w-full md:w-1/2 h-[260px]"></div>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col">
          {/* Heading centered over both backgrounds */}
          <div className="w-full text-center py-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white inline-block px-8">
              あなたもAIやDAOを導入してみませんか？
            </h2>
          </div>

          {/* Buttons with correct positioning */}
          <div className="flex flex-col md:flex-row flex-grow">
            {/* Left button */}
            <div className="w-full md:w-1/2 px-8 pt-4 pb-12 flex items-center justify-center">
              <div className="max-w-md w-full">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-200 text-2xl font-bold w-full h-20"
                >
                  <Link href="/contact">まずはご相談</Link>
                </Button>
              </div>
            </div>

            {/* Right button */}
            <div className="w-full md:w-1/2 px-8 pt-4 pb-12 flex items-center justify-center">
              <div className="max-w-md w-full">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-transparent text-white hover:bg-white/10 hover:scale-105 transition-all duration-200 border-2 border-white text-2xl font-bold w-full h-20"
                >
                  <Link href="/request">資料請求</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#111827] container mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">サイトマップ</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about-us"
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case"
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    Case
                  </Link>
                </li>
                <li>
                  <Link
                    href="/media-and-events"
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    Media and Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/request"
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    資料請求
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg mb-4 text-white">About Us</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about-us#philosophy"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  創業理念
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us#mvv"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  MVV
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us#ceo"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  CEOメッセージ
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us#members"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  メンバー
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us#company"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  会社概要
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg mb-4 text-white">Case</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/case#rag"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  RAG実装
                </Link>
              </li>
              <li>
                <Link
                  href="/case#walletless"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  ウォレットレス
                </Link>
              </li>
              <li>
                <Link
                  href="/case#fa1rness"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  FA1RNESS
                </Link>
              </li>
              <li>
                <Link
                  href="/case#daoathon"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  DAOATHON
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg mb-4 text-white">エーワンロード株式会社</h4>
            <p className="text-gray-300 leading-relaxed">
              AIおよびブロックチェーン（Web3）を活用したDX支援、DAOプラットフォーム構築、ウォレットレス認証技術の研究開発を行っています。
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Image
            src="/a-one-road-logo.png"
            alt="エーワンロード株式会社"
            width={200}
            height={67}
            className="w-auto h-12"
          />
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} エーワンロード株式会社. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
