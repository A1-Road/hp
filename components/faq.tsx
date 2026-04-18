"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/ui/animated-section";

type FAQProps = {
  eyebrow?: string;
  title: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
};

export default function FAQ({ eyebrow = "FAQ", title, items }: FAQProps) {
  return (
    <section className="bg-white py-16 md:py-[88px] lg:py-[120px]">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
        <AnimatedSection>
          <div className="max-w-xl">
            <p className="section-label">{eyebrow}</p>
            <h2 className="section-title mt-4">{title}</h2>
          </div>
        </AnimatedSection>

        <div className="mt-10 border-t border-black/12">
          <Accordion type="single" collapsible>
            {items.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 70}>
                <AccordionItem value={`item-${index}`} className="border-b border-black/12">
                  <AccordionTrigger className="py-6 text-left text-lg font-semibold text-black">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-sm text-black/72">
                    {faq.answer}
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
