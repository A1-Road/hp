import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { getContentItem, getContentItems } from "@/lib/site-content";

export { metadata } from "./metadata";

export const runtime = "edge";

export default async function GlobalVendorsPage() {
  const hero = await getContentItem("globalVendors", "hero");
  const intro = await getContentItem("globalVendors", "intro");
  const servicesHeader = await getContentItem("globalVendors", "servicesHeader");
  const services = await getContentItems("globalVendors", "services");
  const pilotHeader = await getContentItem("globalVendors", "pilotHeader");
  const pilotFacts = await getContentItems("globalVendors", "pilotFacts");
  const deliverablesHeader = await getContentItem("globalVendors", "deliverablesHeader");
  const deliverables = await getContentItems("globalVendors", "deliverables");
  const termsHeader = await getContentItem("globalVendors", "termsHeader");
  const terms = await getContentItems("globalVendors", "terms");
  const companyHeader = await getContentItem("globalVendors", "companyHeader");
  const company = await getContentItems("globalVendors", "company");
  const contactCta = await getContentItem("globalVendors", "contactCta");

  return (
    <div className="pt-20">
      <section className="bg-black py-20 text-white md:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <p className="section-label text-white/56">{hero.eyebrow}</p>
            <h1 className="section-title mt-4 max-w-4xl">{hero.title}</h1>
            <p className="section-copy mt-5 max-w-2xl text-white/72">{hero.copy}</p>
            <Button
              asChild
              className="mt-8 h-11 rounded-none bg-white px-6 text-sm font-medium text-black hover:bg-white/86"
            >
              <Link href={hero.primaryHref}>{hero.primaryLabel}</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-16 md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-4xl">
              <p className="section-label">{intro.eyebrow}</p>
              <h2 className="section-title mt-4">{intro.title}</h2>
              <p className="section-copy mt-5 text-black/72">{intro.copy}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-black py-16 text-white md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-xl">
              <p className="section-label text-white/56">{servicesHeader.eyebrow}</p>
              <h2 className="section-title mt-4">{servicesHeader.title}</h2>
              <p className="section-copy mt-5 text-white/72">{servicesHeader.copy}</p>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 60} className="h-full">
                <div className="h-full border border-white/18 px-5 py-8">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm text-white/72">{service.copy}</p>
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
              <p className="section-label">{pilotHeader.eyebrow}</p>
              <h2 className="section-title mt-4">{pilotHeader.title}</h2>
              <p className="section-copy mt-5 text-black/72">{pilotHeader.copy}</p>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pilotFacts.map((fact, index) => (
              <AnimatedSection key={fact.label} delay={index * 70} className="h-full">
                <div className="h-full border border-black/12 px-5 py-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-black/42">{fact.label}</p>
                  <p className="mt-4 text-xl font-semibold">{fact.value}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 text-white md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-xl">
              <p className="section-label text-white/56">{deliverablesHeader.eyebrow}</p>
              <h2 className="section-title mt-4">{deliverablesHeader.title}</h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {deliverables.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 70} className="h-full">
                <div className="h-full border border-white/18 px-5 py-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/46">{item.number}</p>
                  <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
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
            <div className="max-w-xl">
              <p className="section-label">{termsHeader.eyebrow}</p>
              <h2 className="section-title mt-4">{termsHeader.title}</h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {terms.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 70} className="h-full">
                <div className="h-full border border-black/12 px-5 py-8">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-black/72">{item.copy}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 text-white md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-xl">
              <p className="section-label text-white/56">{companyHeader.eyebrow}</p>
              <h2 className="section-title mt-4">{companyHeader.title}</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={80}>
            <dl className="mt-10 max-w-2xl divide-y divide-white/12 border-y border-white/12">
              {company.map((row) => (
                <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:gap-6">
                  <dt className="text-sm text-white/56">{row.label}</dt>
                  <dd className="text-sm text-white">{row.value}</dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>

          <AnimatedSection delay={140}>
            <div className="mt-16 max-w-3xl">
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
