"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { MdEmail, MdSend, MdDescription } from "react-icons/md";
import { AnimatedSection } from "@/components/ui/animated-section";
import Link from "next/link";

// 目的のリスト
const purposeOptions = [
  { id: "dao-web3", label: "DAO/Web3に興味がある" },
  { id: "ai-dx", label: "AIのDXに興味がある" },
  { id: "media", label: "メディアに興味がある" },
  { id: "other", label: "その他" },
];

export default function RequestDocumentation() {
  const [formState, setFormState] = useState({
    company: "",
    department: "",
    name: "",
    email: "",
    phone: "",
    purposes: [] as string[],
    otherPurpose: "",
    privacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setFormState((prev) => {
      const newPurposes = checked
        ? [...prev.purposes, id]
        : prev.purposes.filter((purpose) => purpose !== id);

      return { ...prev, purposes: newPurposes };
    });
  };

  const handlePrivacyChange = (checked: boolean) => {
    setFormState((prev) => ({ ...prev, privacy: checked }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ここでバックエンドにデータを送信する
      // 例: const response = await fetch('/api/request-documentation', {
      //  method: 'POST',
      //  headers: { 'Content-Type': 'application/json' },
      //  body: JSON.stringify(formState)
      // });

      // 仮の成功レスポンス
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
    } catch (error) {
      setError("予期せぬエラーが発生しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24">
      <section className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">資料請求</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AIとWeb3のサービス・事例についての資料をご提供いたします
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-1">
            <div className="floating-card p-6">
              <h2 className="text-xl font-bold mb-6">資料について</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MdDescription className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-sm mb-1">ご提供資料</h3>
                    <p className="text-muted-foreground">
                      会社案内、サービス概要、導入事例などをまとめた資料をPDFでお送りいたします。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MdEmail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-sm mb-1">送付方法</h3>
                    <p className="text-muted-foreground">
                      ご入力いただいたメールアドレス宛に、PDF資料を送付いたします。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            {isSubmitted ? (
              <AnimatedSection>
                <div className="floating-card p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MdSend className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">資料請求を受け付けました</h2>
                  <p className="text-muted-foreground mb-6">
                    リクエストいただきありがとうございます。入力いただいたメールアドレス宛に、資料を送付いたします。
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild>
                      <Link href="/">ホームに戻る</Link>
                    </Button>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      フォームに戻る
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ) : (
              <AnimatedSection>
                <div className="floating-card p-8">
                  <h2 className="text-xl font-bold mb-6">資料請求フォーム</h2>

                  {error && (
                    <div className="bg-destructive/10 text-destructive p-4 rounded-lg mb-6">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">
                          会社名 <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="department" className="text-sm font-medium">
                          部署名
                        </label>
                        <Input
                          id="department"
                          name="department"
                          value={formState.department}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          姓名 <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          メールアドレス <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        日中繋がりやすい電話番号 <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-medium">
                        資料請求の目的 <span className="text-destructive">*</span>
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {purposeOptions.map((option) => (
                          <div key={option.id} className="flex items-start space-x-2">
                            <Checkbox
                              id={`purpose-${option.id}`}
                              checked={formState.purposes.includes(option.id)}
                              onCheckedChange={(checked) =>
                                handleCheckboxChange(option.id, !!checked)
                              }
                            />
                            <label
                              htmlFor={`purpose-${option.id}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                      {formState.purposes.includes("other") && (
                        <div className="pt-2">
                          <label htmlFor="otherPurpose" className="text-sm font-medium">
                            その他の目的をご記入ください
                          </label>
                          <Textarea
                            id="otherPurpose"
                            name="otherPurpose"
                            value={formState.otherPurpose}
                            onChange={handleChange}
                            rows={2}
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={formState.privacy}
                        onCheckedChange={(checked) => handlePrivacyChange(!!checked)}
                        required
                      />
                      <label
                        htmlFor="privacy"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        <span>
                          <a href="/privacy-policy" className="text-primary hover:underline">
                            プライバシーポリシー
                          </a>
                          に同意します
                        </span>
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-full"
                      disabled={isSubmitting || formState.purposes.length === 0}
                    >
                      {isSubmitting ? "送信中..." : "資料を受け取る"}
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="container-custom mt-16">
        <AnimatedSection>
          <div className="bg-primary/10 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">もっと詳しく相談したいですか？</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              AIとWeb3の力で、あなたのビジネスを次のステージへ。 お気軽にお問い合わせください。
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
