import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { getContentItem, getContentItems } from "@/lib/site-content";

export const runtime = "edge";

export default async function HomePage() {
  const hero = await getContentItem("top", "hero");
  const identity = await getContentItem("top", "identity");
  const whatWeDoHeader = await getContentItem("top", "whatWeDoHeader");
  const businesses = await getContentItems("top", "whatWeDo");
  const aboutPreview = await getContentItem("top", "aboutPreview");
  const contactCta = await getContentItem("top", "contactCta");

  return (
    <div>
      <section className="relative min-h-[92vh] overflow-hidden bg-[#050507] text-white">
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute -top-48 left-1/2 h-[620px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.30),transparent)] blur-3xl" />
          <div className="absolute bottom-[-220px] right-[-180px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.18),transparent)] blur-3xl" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050507]" />
        </div>
        <div className="relative mx-auto flex min-h-[92vh] w-full max-w-[1280px] flex-col justify-end px-5 pb-10 pt-28 md:px-10 md:pb-14">
          <AnimatedSection className="max-w-4xl">
            <p className="section-label text-white/64">{hero.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-[44px] font-bold leading-[1.05] tracking-tight md:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/72 md:text-base">{hero.copy}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div className="mt-14 grid grid-cols-1 gap-px border border-white/12 bg-white/12 sm:grid-cols-2">
              {businesses.map((business) => (
                <div key={business.tag} className="bg-[#050507] px-5 py-4">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/44">{business.tag}</p>
                  <p className="mt-1.5 text-sm text-white/86">{business.title}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-16 md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-4xl">
              <p className="section-label">{identity.eyebrow}</p>
              <h2 className="section-title mt-4">{identity.title}</h2>
              <p className="section-copy mt-5 text-black/72">{identity.copy}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="what-we-do" className="scroll-mt-20 bg-black py-16 text-white md:py-[88px] lg:py-[120px]">
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
                    <p className="text-xs uppercase tracking-[0.3em] text-white/46">{business.tag}</p>
                    <h3 className="mt-3 text-2xl font-semibold">{business.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-white/72">{business.copy}</p>
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
              <p className="mt-5 max-w-xl text-sm text-black/72 md:text-base">{contactCta.copy}</p>
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
