"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function FAQ() {
  // FAQ アイテム
  const faqItems: { question: string; answer: string }[] = [
    {
      question: "なぜ軽トラックやユーティリティ車両を扱っているのですか？",
      answer:
        "軽トラックやユーティリティ車両は、コンパクトで耐久性があり、用途の自由度が高いという特性を持ちます。日本では当たり前に使われてきたこれらの車両を、海外の現場にとって新しい選択肢として届けたいと考えています。",
    },
    {
      question: "誰向けのサービスですか？",
      answer:
        "日本からの調達を求めるディーラー、フリート、法人バイヤー、個人のお客様まで対応しています。用途や台数、仕向地に応じて進め方をご提案します。",
    },
    {
      question: "どの車種に対応していますか？",
      answer:
        "軽トラック、軽バン、小型商用車、ユーティリティ車両などを扱っています。使用目的や現場条件に合わせて候補を整理します。",
    },
    {
      question: "どのような支援を受けられますか？",
      answer:
        "用途の整理、車両選定、状態確認、必要情報の整理、輸出までを一気通貫で支援します。単に在庫を紹介するのではなく、導入判断しやすい形に情報を再編集します。",
    },
    {
      question: "導入プロセスと、期間・費用について教えてください。",
      answer:
        "ご希望の用途、車種、台数、仕向地を確認したうえで候補車両をご提案します。期間と費用は車両条件や輸出先によって変動するため、個別にお見積もりします。",
    },
    {
      question: "他社との違いは何ですか？",
      answer:
        "日本国内で流通している商用中古車の価値を、用途と市場の観点から再編集して届ける点です。車両そのものだけでなく、判断材料の整理と輸出まで含めて支援します。",
    },
  ];
  return (
    <section className="py-20 bg-beige-50/50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">よくあるご質問</h2>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white mb-4 rounded-lg shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-4">{faq.question}</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
