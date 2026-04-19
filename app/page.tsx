import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { getContentItem, getContentItems } from "@/lib/site-content";

export const runtime = "edge";

export default async function HomePage() {
  const hero = await getContentItem("top", "hero");
  const identity = await getContentItem("top", "identity");
  const servicePreviewHeader = await getContentItem("top", "servicePreviewHeader");
  const services = await getContentItems("top", "servicePreview");
  const visualHeader = await getContentItem("top", "visualHeader");
  const visualGrid = await getContentItems("top", "visualProof");
  const aboutPreview = await getContentItem("top", "aboutPreview");
  const signalHeader = await getContentItem("top", "signalHeader");
  const signalSteps = await getContentItems("top", "signalSteps");
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

      <section className="bg-black py-16 text-white md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="flex items-end justify-between gap-8">
              <div className="max-w-xl">
                <p className="section-label text-white/56">{servicePreviewHeader.eyebrow}</p>
                <h2 className="section-title mt-4">{servicePreviewHeader.title}</h2>
              </div>
              <Link href={servicePreviewHeader.linkHref} className="hidden text-sm text-white/72 hover:opacity-60 md:block">
                {servicePreviewHeader.linkLabel}
              </Link>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 80}>
                <Link href={service.href} className="group block">
                  <div className="border border-white/18">
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
                      <p className="mt-2 text-sm text-white/72">{service.copy}</p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-xl">
              <p className="section-label">{visualHeader.eyebrow}</p>
              <h2 className="section-title mt-4">{visualHeader.title}</h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {visualGrid.map((image, index) => (
              <AnimatedSection key={`${image.image}-${index}`} delay={index * 70}>
                <div className="relative aspect-[4/3] overflow-hidden border border-black/12">
                  <Image
                    src={image.image}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
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
            <div className="max-w-xl">
              <p className="section-label">{signalHeader.eyebrow}</p>
              <h2 className="section-title mt-4">{signalHeader.title}</h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {signalSteps.map((step, index) => (
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
