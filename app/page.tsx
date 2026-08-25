import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { getContentItem, getContentItems } from "@/lib/site-content";
import { getSiteLocale } from "@/lib/locale";

export default async function HomePage() {
  const locale = await getSiteLocale();
  const hero = await getContentItem("top", "hero");
  const valueHeader = await getContentItem("top", "valueHeader");
  const values = await getContentItems("top", "value");
  const whatWeDoHeader = await getContentItem("top", "whatWeDoHeader");
  const businesses = await getContentItems("top", "whatWeDo");
  const aboutPreview = await getContentItem("top", "aboutPreview");
  const contactCta = await getContentItem("top", "contactCta");

  return (
    <div>
      <section className="relative overflow-hidden bg-black text-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 pb-14 pt-32 md:px-10 md:pb-20 md:pt-44">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">{hero.eyebrow}</p>
            <h1 className="mt-6 text-[56px] font-bold leading-[0.95] tracking-tight md:text-[110px] lg:text-[140px]">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70 md:text-xl">{hero.titleSub}</p>
          </AnimatedSection>
        </div>

        <div className="relative aspect-[21/9] w-full md:aspect-[2.4/1]">
          <Image src={hero.image} alt={hero.visionEn} fill className="object-cover" priority />
        </div>

        <div className="mx-auto w-full max-w-[1280px] px-5 py-14 md:px-10 md:py-20">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">{hero.visionLabel}</p>
            <p className="mt-4 max-w-3xl text-2xl font-medium leading-tight md:text-4xl">{hero.visionEn}</p>
            <p className="mt-4 max-w-2xl text-sm text-white/70 md:text-base">{hero.visionJa}</p>
          </AnimatedSection>
          <AnimatedSection delay={100} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-11 rounded-none bg-white px-6 text-sm font-medium text-black hover:bg-white/86"
            >
              <Link href={hero.primaryHref}>{hero.primaryLabel}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-none border-white/40 bg-transparent px-6 text-sm font-medium text-white hover:bg-white hover:text-black"
            >
              <Link href={hero.secondaryHref}>{hero.secondaryLabel}</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-white/12 bg-black py-16 text-white md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-xl">
              <p className="section-label text-white/56">{valueHeader.eyebrow}</p>
              <h2 className="section-title mt-4">{valueHeader.title}</h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 divide-y divide-white/12 border-t border-white/12">
            {values.map((v, index) => (
              <AnimatedSection key={v.number} delay={index * 70}>
                <div className="flex flex-col gap-3 py-10 md:flex-row md:items-baseline md:gap-10 md:py-12">
                  <p className="text-3xl font-bold text-white/25 md:w-28 md:shrink-0 md:text-5xl">{v.number}</p>
                  <div>
                    <h3 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                      {locale === "en" ? v.title : v.copy}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base text-white/70 md:text-lg">
                      {locale === "en" ? v.copy : v.title}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="what-we-do" className="scroll-mt-20 border-t border-white/12 bg-black py-16 text-white md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-xl">
              <p className="section-label text-white/56">{whatWeDoHeader.eyebrow}</p>
              <h2 className="section-title mt-4">{whatWeDoHeader.title}</h2>
              <p className="section-copy mt-5 text-white/72">{whatWeDoHeader.copy}</p>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {businesses.map((business, index) => {
              const card = (
                <div className="flex h-full flex-col border border-white/18">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={business.image}
                      alt={business.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/28 transition-opacity duration-300 group-hover:bg-black/40" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/46">{business.title}</p>
                    <h3 className="mt-3 text-2xl font-semibold">{business.tag}</h3>
                    <p className="mt-2 flex-1 text-base leading-relaxed text-white/72">{business.copy}</p>
                    <p className={business.href ? "mt-5 text-sm text-white" : "mt-5 text-xs uppercase tracking-[0.3em] text-white/46"}>
                      {business.linkLabel}
                    </p>
                  </div>
                </div>
              );

              return (
                <AnimatedSection key={business.title} delay={index * 80} className="h-full">
                  {business.href ? (
                    <Link href={business.href} className="group block h-full">
                      {card}
                    </Link>
                  ) : (
                    <div className="h-full">{card}</div>
                  )}
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 text-white md:py-[88px] lg:py-[120px]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 md:grid-cols-2 md:px-10">
          <AnimatedSection>
            <div className="max-w-lg">
              <p className="section-label text-white/56">{aboutPreview.eyebrow}</p>
              <h2 className="section-title mt-4">{aboutPreview.title}</h2>
              <p className="section-copy mt-5 text-white/72">{aboutPreview.copy}</p>
              <Link href={aboutPreview.linkHref} className="mt-8 inline-block text-sm text-white hover:opacity-60">
                {aboutPreview.linkLabel}
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="relative aspect-[4/5] overflow-hidden border border-white/18">
              <Image src={aboutPreview.image} alt={aboutPreview.title} fill className="object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-16 md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="section-label">{contactCta.eyebrow}</p>
              <h2 className="section-title mt-4">{contactCta.title}</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-black/72 md:text-lg">{contactCta.copy}</p>
              <Button
                asChild
                className="mt-8 h-11 rounded-none bg-black px-6 text-sm font-medium text-white hover:bg-black/86"
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
