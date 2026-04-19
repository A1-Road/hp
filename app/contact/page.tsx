import { AnimatedSection } from "@/components/ui/animated-section";
import HubspotForm from "@/components/hubspot-form";
import { getContentItem, getContentItems } from "@/lib/site-content";

export const runtime = "edge";

export default async function ContactPage() {
  const hero = await getContentItem("contact", "hero");
  const formHeader = await getContentItem("contact", "formHeader");
  const infoHeader = await getContentItem("contact", "infoHeader");
  const info = await getContentItems("contact", "info");
  const reassurance = await getContentItem("contact", "reassurance");

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

      <section className="bg-black py-16 text-white md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[880px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-xl">
              <p className="section-label text-white/56">{formHeader.eyebrow}</p>
              <h2 className="section-title mt-4">{formHeader.title}</h2>
              <p className="section-copy mt-5 text-white/72">{formHeader.copy}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="mt-10 border border-white/18 p-6 md:p-8">
              <HubspotForm portalId="48340751" formId="0e8b7633-a75c-4661-9647-3e05b982aff4" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-16 md:py-[88px] lg:py-[120px]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 md:grid-cols-2 md:px-10">
          <AnimatedSection>
            <div className="max-w-sm">
              <p className="section-label">{infoHeader.eyebrow}</p>
              <h2 className="section-title mt-4">{infoHeader.title}</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="space-y-3 text-sm text-black/72">
              {info.map((item) => (
                <p key={item.label}>
                  {item.label}: {item.value}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-black py-16 text-white md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <p className="text-sm text-white/72">{reassurance.text}</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
