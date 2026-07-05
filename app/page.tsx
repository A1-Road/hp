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
  const servicePreviewHeader = await getContentItem("top", "servicePreviewHeader");
  const services = await getContentItems("top", "servicePreview");
  const aboutPreview = await getContentItem("top", "aboutPreview");
  const contactCta = await getContentItem("top", "contactCta");

  return (
    <div>
      <section className="relative min-h-[88vh] overflow-hidden bg-black text-white">
        <Image src={hero.image} alt={hero.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto flex min-h-[88vh] w-full max-w-[1280px] items-end px-5 pb-12 pt-28 md:px-10 md:pb-16">
          <AnimatedSection className="max-w-3xl">
            <p className="section-label text-white/64">{hero.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-none md:text-7xl">{hero.title}</h1>
            <p className="mt-5 max-w-xl text-sm text-white/78 md:text-base">
              {hero.copy}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-11 rounded-none bg-white px-6 text-sm font-medium text-black hover:bg-white/86"
              >
                <Link href={hero.primaryHref}>{hero.primaryLabel}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-none border-white bg-transparent px-6 text-sm font-medium text-white hover:bg-white hover:text-black"
              >
                <Link href={hero.secondaryHref}>{hero.secondaryLabel}</Link>
              </Button>
            </div>
            <p className="mt-12 text-xs uppercase tracking-[0.3em] text-white/46">{hero.scroll}</p>
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

          <div className="mt-10 grid gap-4 md:grid-cols-3">
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

      <section className="bg-white py-16 md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="flex items-end justify-between gap-8">
              <div className="max-w-xl">
                <p className="section-label">{servicePreviewHeader.eyebrow}</p>
                <h2 className="section-title mt-4">{servicePreviewHeader.title}</h2>
              </div>
              <Link href={servicePreviewHeader.linkHref} className="hidden text-sm text-black/72 hover:opacity-60 md:block">
                {servicePreviewHeader.linkLabel}
              </Link>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 80}>
                <Link href={service.href} className="group block">
                  <div className="border border-black/12">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-black/28 transition-opacity duration-300 group-hover:bg-black/40" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-2xl font-semibold">{service.title}</h3>
                      <p className="mt-2 text-sm text-black/72">{service.copy}</p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
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
