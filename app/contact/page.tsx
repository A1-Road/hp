"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MdEmail, MdPhone, MdLocationOn, MdSend } from "react-icons/md";
import { submitContactForm } from "@/actions/contact";
import type { Contact } from "@/types/database";

interface FormState extends Omit<Contact, "id" | "created_at" | "status"> {
  company: string | null;
}

export default function Contact() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    company: null,
    email: "",
    phone: null,
    inquiry_type: "",
    message: "",
    privacy_agreed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormState((prev) => ({ ...prev, privacy_agreed: checked }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(formState);

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setError(result.error || "エラーが発生しました");
      }
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
                      〒225-0013
                      <br />
                      神奈川県横浜市青葉区荏田町1150-34
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            {isSubmitted ? (
              <div className="floating-card p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MdSend className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">お問い合わせありがとうございます</h2>
                <p className="text-muted-foreground mb-6">
                  メッセージを受け付けました。担当者より2営業日以内にご連絡いたします。
                </p>
                <Button onClick={() => setIsSubmitted(false)}>フォームに戻る</Button>
              </div>
            ) : (
              <div className="floating-card p-8">
                <h2 className="text-xl font-bold mb-6">お問い合わせフォーム</h2>

                {error && (
                  <div className="bg-destructive/10 text-destructive p-4 rounded-lg mb-6">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        お名前 <span className="text-destructive">*</span>
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
                      <label htmlFor="company" className="text-sm font-medium">
                        会社名
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formState.company || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        電話番号
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiry_type" className="text-sm font-medium">
                      お問い合わせ内容 <span className="text-destructive">*</span>
                    </label>
                    <Select
                      onValueChange={(value) => handleSelectChange("inquiry_type", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="お問い合わせ内容を選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="service">サービスについて</SelectItem>
                        <SelectItem value="project">プロジェクトの相談</SelectItem>
                        <SelectItem value="partnership">業務提携について</SelectItem>
                        <SelectItem value="recruitment">採用について</SelectItem>
                        <SelectItem value="other">その他</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      メッセージ <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="privacy_agreed"
                      checked={formState.privacy_agreed}
                      onCheckedChange={handleCheckboxChange}
                      required
                    />
                    <label
                      htmlFor="privacy_agreed"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      プライバシーポリシーに同意します <span className="text-destructive">*</span>
                    </label>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "送信中..." : "送信する"}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">よくあるご質問</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="floating-card p-6">
            <h3 className="text-lg font-bold mb-2">初回相談は無料ですか？</h3>
            <p className="text-muted-foreground">
              はい、初回のご相談は無料で承っております。お客様の課題やニーズをヒアリングし、
              最適なソリューションをご提案いたします。
            </p>
          </div>

          <div className="floating-card p-6">
            <h3 className="text-lg font-bold mb-2">開発期間はどのくらいかかりますか？</h3>
            <p className="text-muted-foreground">
              プロジェクトの規模や複雑さによって異なりますが、一般的なAI導入プロジェクトは
              2〜3ヶ月、Web3連携を含む大規模なプロジェクトは4〜6ヶ月程度を目安としています。
            </p>
          </div>

          <div className="floating-card p-6">
            <h3 className="text-lg font-bold mb-2">どのような業界に対応していますか？</h3>
            <p className="text-muted-foreground">
              主に製造業、建設業、観光業を中心に、幅広い業界のお客様にサービスを提供しています。
              業界特有の課題に対して、AIとWeb3技術を活用した最適なソリューションをご提案します。
            </p>
          </div>

          <div className="floating-card p-6">
            <h3 className="text-lg font-bold mb-2">導入後のサポートはありますか？</h3>
            <p className="text-muted-foreground">
              はい、導入後の運用サポートや保守メンテナンス、機能拡張など、継続的なサポートプランをご用意しています。
              お客様のニーズに合わせた最適なサポート体制をご提案いたします。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
