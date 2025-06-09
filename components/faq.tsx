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
        "日本の基幹産業であるこれらの分野には、受け継がれる素晴らしい技術や知見が多く存在します。これらの「隠された語られない価値」の語り部として、我々はデジタル化の遅れや人手不足といった課題に対し、AIや暗号技術で競争力強化と次世代への継承を目指しているためです。",
    },
    {
      question: "開発の知識がなくても大丈夫ですか？",
      answer:
        "はい、ご安心ください。お客様に専門知識は不要です。現場の課題を「現場の言葉」で深く理解し、これらの技術を最適な形で導入・活用できるよう、分かりやすい説明と伴走支援、必要に応じた研修を提供します。",
    },
    {
      question: "どのような課題に、具体的にどのようなソリューションを提供できますか？",
      answer:
        "部門間のサイロ化、データ活用、サプライチェーン、ペーパーレス化、組織透明性など、幅広い課題に対応します。基幹産業に特化し、営業属人化・法規認証業務の非効率・原価見積の曖昧さ・工程設計の属人化などに対応。営業AI・認証AI・生成AIなどで業務最適化を支援します。",
    },
    {
      question: "他のDX支援会社との違いは何ですか？",
      answer:
        "自社プロダクト開発経験と製造業現場知見を併せ持ち、効率化だけでなく事業成長・レース活動と連動。東京大学出身者含む実働チームで実装支援します。",
    },
    {
      question: "導入プロセスと、期間・費用について教えてください。",
      answer:
        "無料ヒアリングで課題を深掘りし、最短1週間で解決策をご提案、1〜2週間で試作品提供が可能です。その後、本格実装・運用支援へ移行します。期間・費用は課題内容や規模により個別にお見積もりしますので、まずはお気軽にご相談ください。",
    },
    {
      question: "費用感はどのようなものでしょうか？",
      answer:
        "御社の経営構造、経営計画そして売り上げ構造を分解させていただき、経営インパクトの観点でもっともインパクトとして最適かつ妥当だと思われる金額をご提示させていただきます。",
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
