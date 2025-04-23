"use client";

import { useEffect } from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function Request() {
  useEffect(() => {
    // HubSpotフォームのスクリプトを動的に読み込む
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/48340751.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="pt-24">
      <section className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">資料請求</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AIやWeb3技術の活用についての詳細資料をお送りいたします
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
              <h2 className="text-xl font-bold mb-6">資料請求フォーム</h2>
              <div
                className="hs-form-frame"
                data-region="na1"
                data-form-id="3af46497-6570-4cbd-8be0-87765d51ef36"
                data-portal-id="48340751"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">よくあるご質問</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <div className="floating-card p-6">
            <h3 className="text-lg font-bold mb-2">資料はどのくらいで届きますか？</h3>
            <p className="text-muted-foreground">
              資料請求後、2営業日以内にメールでお送りいたします。
              ご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
          </div>

          <div className="floating-card p-6">
            <h3 className="text-lg font-bold mb-2">資料請求後の営業連絡はありますか？</h3>
            <p className="text-muted-foreground">
              資料請求後、必要に応じて担当者よりご連絡させていただく場合がございます。
              ご希望でない場合は、その旨をお知らせください。
            </p>
          </div>

          <div className="floating-card p-6">
            <h3 className="text-lg font-bold mb-2">資料の内容はどのようなものですか？</h3>
            <p className="text-muted-foreground">
              当社のサービス概要、導入事例、料金プランなどの詳細情報を掲載しております。
              具体的な内容については、資料をご確認ください。
            </p>
          </div>

          <div className="floating-card p-6">
            <h3 className="text-lg font-bold mb-2">資料の再送は可能ですか？</h3>
            <p className="text-muted-foreground">
              はい、可能です。資料が届かない場合や、再送をご希望の場合は、
              お気軽にお問い合わせください。
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
}
