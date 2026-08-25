import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { getContentItem, getContentItems } from "@/lib/site-content";
import { getSiteLocale } from "@/lib/locale";

function Panel({
  href,
  image,
  tag,
  label,
  sub,
  cta,
}: {
  href: string;
  image: string;
  tag: string;
  label: string;
  sub: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block h-full overflow-hidden rounded-2xl border border-white/12 transition-colors hover:border-amber-500/50"
    >
      <div className="relative min-h-[52vh] w-full md:min-h-[68vh]">
        <Image
          src={image}
          alt={label}
          fill
          priority
          className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-8">
          <div>
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-amber-400 md:text-[2rem]">
              {tag}
            </h2>
            <p className="mt-3 text-xs uppercase tracking-[0.35em] text-white/55">{label}</p>
          </div>
          <div>
            <p className="max-w-sm text-sm leading-relaxed text-white/78">{sub}</p>
            <span className="mt-7 inline-flex items-center gap-3 text-sm text-white/85">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-500/70 text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-black">
                →
              </span>
              {cta}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default async function ServiceHubPage() {
  const locale = await getSiteLocale();
  const hub = await getContentItem("serviceHub", "hero");
  const left = await getContentItem("serviceHub", "left");
  const third = await getContentItem("serviceHub", "third");
  const panels = [left, third];

  const cmaasHeader = locale === "en" ? await getContentItem("serviceHub", "cmaasHeader") : null;
  const cmaasSteps = locale === "en" ? await getContentItems("serviceHub", "cmaasStep") : [];
  const focusHeader = locale === "en" ? await getContentItem("serviceHub", "focusHeader") : null;

  return (
    <section className="relative min-h-screen bg-[#08080a] pt-24 pb-14 md:pt-28">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
        {cmaasHeader ? (
          <div className="mb-16 md:mb-24">
            <AnimatedSection>
              <p className="text-center text-[11px] uppercase tracking-[0.4em] text-white/40">
                {cmaasHeader.eyebrow}
              </p>
              <h1 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-bold tracking-tight md:text-5xl">
                {cmaasHeader.title}
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-white/60 md:text-base">
                {cmaasHeader.copy}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="mt-10 grid grid-cols-1 gap-px border border-white/12 bg-white/12 sm:grid-cols-3">
                {cmaasSteps.map((step) => (
                  <div key={step.number} className="bg-[#08080a] p-6 md:p-8">
                    <p className="text-3xl font-bold text-amber-400/70 md:text-4xl">{step.number}</p>
                    <p className="mt-3 text-lg font-medium leading-snug text-white/85 md:text-xl">{step.title}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            {focusHeader && (
              <AnimatedSection delay={150} className="mt-16 text-center md:mt-20">
                <p className="text-[11px] uppercase tracking-[0.4em] text-white/40">{focusHeader.eyebrow}</p>
                <p className="mx-auto mt-3 max-w-2xl text-lg font-medium text-white/86">{focusHeader.title}</p>
              </AnimatedSection>
            )}
          </div>
        ) : (
          <AnimatedSection>
            <p className="text-center text-[11px] uppercase tracking-[0.4em] text-white/40">{hub.eyebrow}</p>
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-white/60 md:text-base">
              {hub.message}
            </p>
          </AnimatedSection>
        )}

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-6">
          {panels.map((panel, index) => (
            <AnimatedSection key={panel.href} delay={index * 120} className="h-full">
              <Panel
                href={panel.href}
                image={panel.image}
                tag={panel.tag}
                label={panel.label}
                sub={panel.sub}
                cta={panel.cta}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
