import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/faq";
import { getContentItem, getContentItems } from "@/lib/site-content";

export default async function ServicePage() {
  const hero = await getContentItem("service", "hero");
  const indexHeader = await getContentItem("service", "indexHeader");
  const services = await getContentItems("service", "index");
  const detailItems = await getContentItems("service", "detail");
  const processHeader = await getContentItem("service", "processHeader");
  const steps = await getContentItems("service", "process");
  const faqHeader = await getContentItem("service", "faqHeader");
  const faqItems = (await getContentItems("service", "faq")).map((item) => ({
    question: item.question,
    answer: item.answer,
  }));
  const contactCta = await getContentItem("service", "contactCta");

  return (
    <div className="pt-20">
      <section className="bg-black py-20 text-white md:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <p className="section-label text-white/56">{hero.eyebrow}</p>
            <h1 className="section-title mt-4">{hero.title}</h1>
            <p className="section-copy mt-5 text-white/72">{hero.copy}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-16 md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-xl">
              <p className="section-label">{indexHeader.eyebrow}</p>
              <h2 className="section-title mt-4">{indexHeader.title}</h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 70}>
                <Link href={`#${service.id}`} className="group block">
                  <div className="border border-black/12">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-2xl font-semibold">{service.title}</h3>
                      <p className="mt-2 text-sm text-black/72">{service.line}</p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {detailItems.map((service, serviceIndex) => (
        <section
          key={service.id}
          id={service.id}
          className={serviceIndex % 2 === 0 ? "bg-black py-16 text-white md:py-[88px] lg:py-[120px]" : "bg-white py-16 md:py-[88px] lg:py-[120px]"}
        >
          <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
            <AnimatedSection>
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className={serviceIndex % 2 === 0 ? "section-label text-white/56" : "section-label"}>
                    Detail
                  </p>
                  <h2 className="section-title mt-4">{service.title}</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { title: "What", copy: service.what },
                    { title: "Value", copy: service.value },
                    { title: "Flow", copy: service.flow },
                    { title: "Output", copy: service.output },
                  ].map((group) => (
                    <div
                      key={`${service.id}-${group.title}`}
                      className={serviceIndex % 2 === 0 ? "border border-white/18 px-5 py-8" : "border border-black/12 px-5 py-8"}
                    >
                      <h3 className="text-2xl font-semibold">{group.title}</h3>
                      <p className={serviceIndex % 2 === 0 ? "mt-3 text-sm text-white/72" : "mt-3 text-sm text-black/72"}>
                        {group.copy}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      <section className="bg-white py-16 md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-xl">
              <p className="section-label">{processHeader.eyebrow}</p>
              <h2 className="section-title mt-4">{processHeader.title}</h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 70}>
                <div className="border border-black/12 px-5 py-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-black/42">{step.number}</p>
                  <h3 className="mt-4 text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm text-black/72">{step.copy}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <FAQ eyebrow={faqHeader.eyebrow} title={faqHeader.title} items={faqItems} />

      <section className="bg-black py-16 text-white md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="section-label text-white/56">{contactCta.eyebrow}</p>
              <h2 className="section-title mt-4">{contactCta.title}</h2>
              <Button
                asChild
                className="mt-8 h-11 rounded-none bg-white px-6 text-sm font-medium text-black hover:bg-white/86"
              >
                <Link href={contactCta.buttonHref}>{contactCta.buttonLabel}</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
