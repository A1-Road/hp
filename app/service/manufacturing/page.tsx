import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { getContentItem, getContentItems } from "@/lib/site-content";

export { metadata } from "./metadata";

export default async function ManufacturingPage() {
  const hero = await getContentItem("manufacturing", "hero");
  const technology = await getContentItem("manufacturing", "technology");
  const applicationsHeader = await getContentItem("manufacturing", "applicationsHeader");
  const applications = await getContentItems("manufacturing", "applications");
  const applicationsFooter = await getContentItem("manufacturing", "applicationsFooter");
  const realityCheck = await getContentItem("manufacturing", "realityCheck");
  const screening = await getContentItem("manufacturing", "screening");
  const position = await getContentItem("manufacturing", "position");
  const contactCta = await getContentItem("manufacturing", "contactCta");

  return (
    <div className="pt-20">
      <section className="bg-black py-20 text-white md:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <p className="section-label text-white/56">{hero.eyebrow}</p>
            <h1 className="section-title mt-4 max-w-4xl">{hero.title}</h1>
            <p className="section-copy mt-5 max-w-2xl text-white/72">{hero.copy}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-16 md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="section-label">{technology.eyebrow}</p>
              <h2 className="section-title mt-4">{technology.title}</h2>
              <p className="section-copy mt-5 text-black/72">{technology.copy}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-black py-16 text-white md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-xl">
              <p className="section-label text-white/56">{applicationsHeader.eyebrow}</p>
              <h2 className="section-title mt-4">{applicationsHeader.title}</h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {applications.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 70} className="h-full">
                <div className="h-full border border-white/18 px-5 py-8">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-white/72">{item.copy}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={220}>
            <p className="mt-8 max-w-2xl text-sm text-white/56">{applicationsFooter.copy}</p>
            <p className="mt-3 max-w-2xl text-xs text-white/40">{applicationsHeader.note}</p>
          </AnimatedSection>

          <AnimatedSection delay={280}>
            <Link
              href="/mold-storage"
              className="group mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-amber-500/30 bg-amber-500/[0.04] px-6 py-6 transition-colors hover:border-amber-500/60 sm:flex-row sm:items-center"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-500/80">
                  Mold &amp; Die Storage
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  金型・治具の保管でお困りですか？
                </p>
                <p className="mt-1 text-sm text-white/56">
                  大型金型・治具の長納期と高コスト、廃番部品の再生産という課題に、正面から取り組んでいます。
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-amber-500/90 group-hover:text-amber-400">
                金型保管の課題ページを見る →
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-16 md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="section-label">{realityCheck.eyebrow}</p>
              <h2 className="section-title mt-4">{realityCheck.title}</h2>
              <p className="section-copy mt-5 text-black/72">{realityCheck.copy}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-black py-16 text-white md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="section-label text-white/56">{screening.eyebrow}</p>
              <h2 className="section-title mt-4">{screening.title}</h2>
              <p className="section-copy mt-5 text-white/72">{screening.copy}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-16 md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="section-label">{position.eyebrow}</p>
              <h2 className="section-title mt-4">{position.title}</h2>
              <p className="section-copy mt-5 text-black/72">{position.copy}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-black py-16 text-white md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="section-label text-white/56">{contactCta.eyebrow}</p>
              <h2 className="section-title mt-4">{contactCta.title}</h2>
              <p className="mt-5 max-w-xl text-sm text-white/72 md:text-base">{contactCta.copy}</p>
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
