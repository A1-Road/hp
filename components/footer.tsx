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
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-4">サイトマップ</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    ホーム
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-flow"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    サービスフロー
                  </Link>
                </li>
                <li>
                  <Link
                    href="/works"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    実績紹介
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link
                    href="/members"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    メンバー
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    ニュース
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    ブログ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/glossary"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    用語集
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    <HiArrowRight className="mr-2 h-3 w-3" />
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg mb-4">サービス</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/digital-transformation"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  デジタル変革支援
                </Link>
              </li>
              <li>
                <Link
                  href="/services/dao-platform"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  DAOプラットフォーム構築
                </Link>
              </li>
              <li>
                <Link
                  href="/services/walletless-auth"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  ウォレットレス認証技術開発
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg mb-4">その他</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 h-3 w-3" />
                  利用規約
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
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg mb-4">エーワンロード株式会社</h4>
            <p className="text-muted-foreground leading-relaxed">
              AIおよびブロックチェーン（Web3）を活用したデジタル変革支援、DAOプラットフォーム構築、ウォレットレス認証技術の研究開発を行っています。
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex items-center justify-between">
          <Image
            src="/a1road-logo.png"
            alt="エーワンロード株式会社"
            width={200}
            height={67}
            className="w-auto h-12"
          />
          <p className="text-muted-foreground text-sm whitespace-nowrap">
            © {new Date().getFullYear()} エーワンロード株式会社. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
