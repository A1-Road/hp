import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { getContentItem, getContentItems } from "@/lib/site-content";

export const runtime = "edge";

export default async function AboutPage() {
  const hero = await getContentItem("about", "hero");
  const statement = await getContentItem("about", "statement");
  const philosophyHeader = await getContentItem("about", "philosophyHeader");
  const philosophy = await getContentItems("about", "philosophy");
  const story = await getContentItem("about", "story");
  const differentiatorHeader = await getContentItem("about", "differentiatorHeader");
  const differentiators = await getContentItems("about", "differentiator");
  const closing = await getContentItem("about", "closing");

  return (
    <div className="pt-20">
      <section className="relative min-h-[68vh] overflow-hidden bg-black text-white">
        <Image src={hero.image} alt={hero.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/56" />
        <div className="relative mx-auto flex min-h-[68vh] w-full max-w-[1280px] items-end px-5 pb-12 pt-28 md:px-10 md:pb-16">
          <AnimatedSection className="max-w-3xl">
            <p className="section-label text-white/56">{hero.eyebrow}</p>
            <h1 className="mt-4 text-5xl font-bold leading-none md:text-7xl">{hero.title}</h1>
            <p className="mt-5 max-w-lg text-sm text-white/72 md:text-base">{hero.copy}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-16 md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-4xl">
              <p className="section-label">{statement.eyebrow}</p>
              <h2 className="section-title mt-4">{statement.title}</h2>
              <p className="section-copy mt-5 text-black/72">{statement.copy}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-black py-16 text-white md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-xl">
              <p className="section-label text-white/56">{philosophyHeader.eyebrow}</p>
              <h2 className="section-title mt-4">{philosophyHeader.title}</h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {philosophy.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 70}>
                <div className="border border-white/18 px-5 py-8">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-white/72">{item.copy}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-[88px] lg:py-[120px]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 md:grid-cols-2 md:px-10">
          <AnimatedSection>
            <div className="max-w-lg">
              <p className="section-label">{story.eyebrow}</p>
              <h2 className="section-title mt-4">{story.title}</h2>
              <p className="mt-5 text-sm text-black/72 md:text-base">{story.copy}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="relative aspect-[4/5] overflow-hidden border border-black/12">
              <Image src={story.image} alt={story.title} fill className="object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-black py-16 text-white md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-xl">
              <p className="section-label text-white/56">{differentiatorHeader.eyebrow}</p>
              <h2 className="section-title mt-4">{differentiatorHeader.title}</h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {differentiators.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 70}>
                <div className="border border-white/18 px-5 py-8">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-white/72">{item.copy}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="section-label">{closing.eyebrow}</p>
              <h2 className="section-title mt-4">{closing.title}</h2>
              <Button
                asChild
                variant="outline"
                className="mt-8 h-11 rounded-none border-black bg-transparent px-6 text-sm font-medium text-black hover:bg-black hover:text-white"
              >
                <Link href={closing.buttonHref}>{closing.buttonLabel}</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
