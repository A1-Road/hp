"use client";

import FAQ from "@/components/faq";
import React, { useEffect } from "react";
import Image from "next/image";
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">お気軽にご相談ください！</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            課題抽出から実装・運用支援までワンストップで対応します。
            <br />
            お客様と並走しながら、現場に寄り添った迅速かつ的確なDX推進を実現します。
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          <div className="md:col-span-2 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-6 text-center">ご支援の流れ</h2>
            <div className="flex flex-row gap-4 mb-8 w-full max-w-4xl">
              <div className="text-center w-1/4">
                <div
                  style={{ border: "2px solid #FF0000" }}
                  className="rounded-lg p-3 flex flex-col items-center justify-center h-full"
                >
                  <Image src="/hat.png" alt="ヒアリング" width={48} height={48} className="mb-2" />
                  <p style={{ color: "#FF0000" }} className="font-bold text-sm">
                    ヒアリング
                    <br />
                    現場訪問
                  </p>
                </div>
              </div>
              <div className="text-center w-1/4">
                <div
                  style={{ border: "2px solid #FF0000" }}
                  className="rounded-lg p-3 flex flex-col items-center justify-center h-full"
                >
                  <Image src="/light.png" alt="解決策" width={48} height={48} className="mb-2" />
                  <p style={{ color: "#FF0000" }} className="font-bold text-sm">
                    解決策の
                    <br />
                    ご提案
                  </p>
                </div>
              </div>
              <div className="text-center w-1/4">
                <div
                  style={{ border: "2px solid #FF0000" }}
                  className="rounded-lg p-3 flex flex-col items-center justify-center h-full"
                >
                  <Image src="/tool.png" alt="試作" width={48} height={48} className="mb-2" />
                  <p style={{ color: "#FF0000" }} className="font-bold text-sm">
                    試作・導入
                  </p>
                </div>
              </div>
              <div className="text-center w-1/4">
                <div
                  style={{ border: "2px solid #FF0000" }}
                  className="rounded-lg p-3 flex flex-col items-center justify-center h-full"
                >
                  <Image src="/man.png" alt="本格実装" width={48} height={48} className="mb-2" />
                  <p style={{ color: "#FF0000" }} className="font-bold text-sm">
                    本格実装
                    <br />
                    運用支援
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold my-6 text-center">過去支援実績</h2>
            <div className="flex justify-center">
              <Image
                src="/jisseki.png"
                alt="過去支援実績"
                width={600}
                height={400}
                className="w-full rounded-lg"
              />
            </div>
          </div>

          <div className="md:col-span-3">
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
