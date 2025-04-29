"use client";

import FAQ from "@/components/faq";
import React, { useEffect } from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          region?: string;
          target?: string;
        }) => void;
      };
    };
  }
}

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "48340751",
          formId: "0e8b7633-a75c-4661-9647-3e05b982aff4",
          region: "na1",
          target: "#hubspot-form", // ←ここにフォームを埋め込む
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="pt-24">
      <section className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">お問い合わせ</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AIやWeb3技術の活用についてのご質問や課題のご相談をお待ちしています
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-1">
            <div className="floating-card p-6">
              <h2 className="text-xl font-bold mb-6">お問い合わせ先</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MdPhone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-sm mb-1">電話番号</h3>
                    <p className="text-muted-foreground">080-4870-5690</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MdEmail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-sm mb-1">メールアドレス</h3>
                    <p className="text-muted-foreground">admin@a1-road.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MdLocationOn className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-sm mb-1">所在地</h3>
                    <p className="text-muted-foreground">
                      〒150-0002
                      <br />
                      東京都渋谷区渋谷3-27-1 100BANCH
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="floating-card p-8">
              <h2 className="text-xl font-bold mb-6">お問い合わせフォーム</h2>
              <div id="hubspot-form" /> {/* ← ここにHubSpotフォームが挿入されます */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <FAQ />
    </div>
  );
}
