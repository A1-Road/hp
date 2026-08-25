import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";
import { getContentItem, getContentItems } from "@/lib/site-content";
import { getSiteLocale } from "@/lib/locale";

function PhotoCard({
  src,
  alt,
  caption,
  aspect = "aspect-[16/10]",
  accent = false,
}: {
  src: string;
  alt: string;
  caption: string;
  aspect?: string;
  accent?: boolean;
}) {
  return (
    <div className={`overflow-hidden border ${accent ? "border-[#EF9F27]" : "border-[#2C2C2A]"} bg-[#121210]`}>
      <div className={`relative w-full ${aspect}`}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      <p className={`border-t px-2.5 py-2 text-[11px] ${accent ? "border-[#EF9F27] text-[#EF9F27]" : "border-[#2C2C2A] text-[#888780]"}`}>
        {caption}
      </p>
    </div>
  );
}

export default async function AboutPage() {
  const locale = await getSiteLocale();
  const hero = await getContentItem("about", "hero");
  const [ch1, ch2, ch3, ch4, ch5] = await getContentItems("about", "chapter");
  const today = await getContentItem("about", "today");
  const philosophyHeader = await getContentItem("about", "philosophyHeader");
  const philosophy = await getContentItems("about", "philosophy");
  const credo = await getContentItems("about", "credo");
  const differentiatorHeader = await getContentItem("about", "differentiatorHeader");
  const differentiators = await getContentItems("about", "differentiator");
  const founderHeader = await getContentItem("about", "founderHeader");
  const founder = await getContentItem("about", "founder");
  const companyInfoHeader = await getContentItem("about", "companyInfoHeader");
  const companyInfo = await getContentItems("about", "companyInfo");

  return (
    <div className="pt-20">
      <div className="bg-[#0A0A09] text-[#F1EFE8]">
        <section className="relative overflow-hidden">
          <div className="grid h-[280px] grid-cols-2 grid-rows-2 gap-[2px] md:h-[440px]">
            <div className="relative h-full w-full">
              <Image src="/story/header-bkk.jpg" alt="バンコクChain Fusion Hubで作業する風景" fill className="object-cover" priority />
            </div>
            <div className="relative h-full w-full">
              <Image src="/story/header-bankless.png" alt="Bankless Japanのチームメンバー" fill className="object-cover" priority />
            </div>
            <div className="relative h-full w-full">
              <Image src="/story/header-students.png" alt="学生イベントの集合写真" fill className="object-cover" />
            </div>
            <div className="relative h-full w-full">
              <Image src="/story/2023-ethtokyo.jpg" alt="海外メンバーとのブランチの様子" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A09]/45">
            <AnimatedSection className="text-center">
              <p className="text-3xl tracking-[0.25em] md:text-5xl">
                <span className="text-[#EF9F27]">/</span>&nbsp;{hero.eyebrow}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Chapter 1 — 2021 */}
        <section className="border-t border-[#232322] py-14 md:py-[72px]">
          <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 md:grid-cols-2 md:items-center md:px-10">
            <AnimatedSection>
              <div className="border border-[#2C2C2A] bg-[#121210] px-6 py-6 md:px-7">
                <p className="mb-3 text-[10px] tracking-[0.2em] text-[#888780]">{ch1.quoteLabel}</p>
                <p className="font-mono text-[13px] leading-[1.9] text-[#D3D1C7]">
                  {ch1.quoteBefore}{" "}
                  <span className="bg-[#EF9F27] px-1 text-[#141412]">{ch1.quoteHighlight}</span>
                  {ch1.quoteAfter}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="max-w-lg">
                <p className="mb-2.5 text-[11px] tracking-[0.2em] text-[#EF9F27]">{ch1.eyebrow}</p>
                <h2 className="mb-3 text-xl font-medium leading-relaxed md:text-2xl">{ch1.title}</h2>
                <p className="text-sm leading-[1.9] text-[#B4B2A9]">{ch1.copy}</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Chapter 2 — 2022-23 GLOBAL */}
        <section className="border-t border-[#232322] py-14 md:py-[72px]">
          <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 md:grid-cols-2 md:items-center md:px-10">
            <AnimatedSection>
              <div className="max-w-lg">
                <p className="mb-2.5 text-[11px] tracking-[0.2em] text-[#EF9F27]">{ch2.eyebrow}</p>
                <h2 className="mb-3 text-xl font-medium leading-relaxed md:text-2xl">{ch2.title}</h2>
                <p className="text-sm leading-[1.9] text-[#B4B2A9]">{ch2.copy}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="grid gap-1.5">
                <PhotoCard src={ch2.imgLg} alt={ch2.imgLgAlt} caption={ch2.imgLgCaption} />
                <div className="grid grid-cols-2 gap-1.5">
                  <PhotoCard src={ch2.imgSm1} alt={ch2.imgSm1Alt} caption={ch2.imgSm1Caption} aspect="aspect-[16/11]" />
                  <PhotoCard src={ch2.imgSm2} alt={ch2.imgSm2Alt} caption={ch2.imgSm2Caption} aspect="aspect-[16/11]" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Chapter 3 — 2023-24 JAPAN */}
        <section className="border-t border-[#232322] py-14 md:py-[72px]">
          <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 md:grid-cols-2 md:items-center md:px-10">
            <AnimatedSection className="md:order-2">
              <div className="max-w-lg">
                <p className="mb-2.5 text-[11px] tracking-[0.2em] text-[#EF9F27]">{ch3.eyebrow}</p>
                <h2 className="mb-3 text-xl font-medium leading-relaxed md:text-2xl">{ch3.title}</h2>
                <p className="text-sm leading-[1.9] text-[#B4B2A9]">{ch3.copy}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100} className="md:order-1">
              <div className="grid gap-1.5">
                <PhotoCard src={ch3.imgLg} alt={ch3.imgLgAlt} caption={ch3.imgLgCaption} />
                <div className="grid grid-cols-2 gap-1.5">
                  <PhotoCard src={ch3.imgSm1} alt={ch3.imgSm1Alt} caption={ch3.imgSm1Caption} aspect="aspect-[16/11]" />
                  <PhotoCard src={ch3.imgSm2} alt={ch3.imgSm2Alt} caption={ch3.imgSm2Caption} aspect="aspect-[16/11]" accent />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Chapter 4 — 2024 FA1RNESS */}
        <section className="border-t border-[#232322] py-14 md:py-[72px]">
          <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 md:grid-cols-2 md:items-center md:px-10">
            <AnimatedSection>
              <div className="max-w-lg">
                <p className="mb-2.5 text-[11px] tracking-[0.2em] text-[#EF9F27]">{ch4.eyebrow}</p>
                <h2 className="mb-3 text-xl font-medium leading-relaxed md:text-2xl">{ch4.title}</h2>
                <p className="text-sm leading-[1.9] text-[#B4B2A9]">{ch4.copy}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <PhotoCard src={ch4.imgLg} alt={ch4.imgLgAlt} caption={ch4.imgLgCaption} aspect="aspect-[16/9]" />
            </AnimatedSection>
          </div>
        </section>

        {/* Chapter 5 — 2025 MANUFACTURING */}
        <section className="border-t border-[#232322] py-14 md:py-[72px]">
          <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 md:grid-cols-2 md:items-center md:px-10">
            <AnimatedSection>
              <div className="grid gap-1.5">
                <PhotoCard src={ch5.imgLg} alt={ch5.imgLgAlt} caption={ch5.imgLgCaption} />
                <PhotoCard src={ch5.imgSm} alt={ch5.imgSmAlt} caption={ch5.imgSmCaption} aspect="aspect-[16/11]" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="max-w-lg">
                <p className="mb-2.5 text-[11px] tracking-[0.2em] text-[#EF9F27]">{ch5.eyebrow}</p>
                <h2 className="mb-3 text-xl font-medium leading-relaxed md:text-2xl">{ch5.title}</h2>
                <p className="text-sm leading-[1.9] text-[#B4B2A9]">{ch5.copy}</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* TODAY */}
        <section className="border-t border-[#232322] bg-[#121210] py-20 text-center md:py-32">
          <div className="mx-auto w-full max-w-[960px] px-5 md:px-10">
            <AnimatedSection>
              <p className="text-xs tracking-[0.3em] text-[#EF9F27]">{today.eyebrow}</p>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                {today.title}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-[1.9] text-[#B4B2A9] md:text-base">
                {today.copy}
              </p>
              <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-[#F1EFE8]/90 md:text-xl">
                {today.vision}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={100} className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={today.buttonBusinessHref}
                className="flex h-14 min-w-[220px] items-center justify-center bg-[#F1EFE8] px-8 text-base font-medium text-[#0A0A09] transition-opacity hover:opacity-85"
              >
                {today.buttonBusinessLabel}
              </Link>
              <Link
                href={today.buttonContactHref}
                className="flex h-14 min-w-[220px] items-center justify-center border border-[#444441] px-8 text-base font-medium text-[#F1EFE8] transition-opacity hover:opacity-85"
              >
                {today.buttonContactLabel}
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </div>

      <section className="bg-white py-16 md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="section-title">{philosophyHeader.title}</h2>
              <ul className="mt-8 space-y-4 text-base leading-relaxed text-black/80 md:text-lg">
                <li>
                  <span className="font-semibold">{philosophy[0]?.title}：</span>
                  {philosophy[0]?.copy}
                </li>
                <li>
                  <span className="font-semibold">{philosophy[1]?.title}：</span>
                  {philosophy[1]?.copy}
                </li>
                <li>
                  <span className="font-semibold">{philosophy[2]?.title}：</span>
                  <ul className="mt-3 ml-6 list-disc space-y-2 text-sm text-black/72 md:text-base">
                    {credo.map((item) =>
                      locale === "en" ? (
                        <li key={item.title}>
                          <span className="font-semibold text-black">{item.title}</span>
                          <span className="ml-2 text-black/40">({item.copy})</span>
                        </li>
                      ) : (
                        <li key={item.title}>
                          {item.copy}
                          <span className="ml-2 text-black/40">({item.title})</span>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              </ul>
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
            <p className="section-label">{founderHeader.eyebrow}</p>
            <h2 className="section-title mt-4">{founderHeader.title}</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-[240px_1fr] md:items-start">
              <div className="relative aspect-[4/5] w-full max-w-[240px] overflow-hidden border border-black/12">
                <Image src={founder.image} alt={founder.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{founder.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-black/48">{founder.role}</p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/72 md:text-lg">{founder.bio}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-16 md:py-[88px] lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
          <AnimatedSection>
            <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
              <div className="border border-black/12 px-6 py-8 md:px-8 md:py-10">
                <p className="section-label">{companyInfoHeader.eyebrow}</p>
                <h2 className="section-title mt-4">{companyInfoHeader.title}</h2>
                <p className="mt-5 max-w-md text-sm text-black/72 md:text-base">{companyInfoHeader.copy}</p>
              </div>

              <div className="border border-black/12 px-6 py-8 md:px-8 md:py-10">
                <dl className="grid gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
                  {companyInfo.map((item) => (
                    <div key={item.label}>
                      <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-black/48">
                        {item.label}
                      </dt>
                      <dd className="mt-2 text-sm leading-7 text-black md:text-base">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
