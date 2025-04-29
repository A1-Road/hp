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
      question: "なぜ製造業・観光業・建設業に特化しているのですか？",
      answer:
        "日本の基幹産業であるこれらの分野には、受け継がれる素晴らしい技術や知見が多く存在します。デジタル化の遅れや人手不足といった課題に対し、AI/Web3技術で隠れた価値を掘り起こし、競争力強化と次世代への継承を目指しているためです。",
    },
    {
      question: "AIやWeb3の知識がなくても大丈夫ですか？",
      answer:
        "はい、ご安心ください。お客様に専門知識は不要です。現場の課題を「現場の言葉」で深く理解し、AI/Web3技術を最適な形で導入・活用できるよう、分かりやすい説明と伴走支援、必要に応じた研修を提供します。",
    },
    {
      question: "どのような課題に、具体的にどのようなソリューションを提供できますか？",
      answer:
        "部門間のサイロ化、データ活用、サプライチェーン、ペーパーレス化、組織透明性など、幅広い課題に対応します。AIとブロックチェーン技術を組み合わせたワンストップソリューションで、課題特定からシステム開発、運用までを一貫支援します。地域DAOにおける対話型LLMやウォレットレスアプリ開発などの実績もあります。",
    },
    {
      question: "他のDX支援会社との違いは何ですか？",
      answer:
        "特定基幹産業への特化、AI/Web3技術の組み合わせ、東京大学出身者を含む専門家チームによる技術力、スタートアップならではの圧倒的なスピード（最短1週間の提案、1-2週間の試作品）、現場に寄り添うUI/UXデザイン力が強みです。ワンストップかつ伴走型のDX推進を行います。",
    },
    {
      question: "導入プロセスと、期間・費用について教えてください。",
      answer:
        "無料ヒアリングで課題を深掘りし、最短1週間で解決策をご提案、1〜2週間で試作品提供が可能です。その後、本格実装・運用支援へ移行します。期間・費用は課題内容や規模により個別にお見積もりしますので、まずはお気軽にご相談ください。",
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
