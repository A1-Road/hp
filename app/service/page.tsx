import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { getContentItem } from "@/lib/site-content";

export const runtime = "edge";

function Panel({
  href,
  image,
  tag,
  label,
  sub,
  cta,
  align,
}: {
  href: string;
  image: string;
  tag: string;
  label: string;
  sub: string;
  cta: string;
  align: "left" | "right";
}) {
  return (
    <Link
      href={href}
      className="group relative block flex-1 overflow-hidden rounded-2xl border border-white/12 transition-colors hover:border-amber-500/50"
    >
      <div className="relative min-h-[62vh] w-full md:min-h-[78vh]">
        <Image
          src={image}
          alt={label}
          fill
          priority
          className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-10">
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-[2.6rem]">
              {label}
            </h2>
            <p className="mt-3 text-xs uppercase tracking-[0.35em] text-white/55">{tag}</p>
          </div>
          <div>
            <p className="max-w-sm text-sm leading-relaxed text-white/78 md:text-base">{sub}</p>
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
  const hub = await getContentItem("serviceHub", "hero");
  const left = await getContentItem("serviceHub", "left");
  const right = await getContentItem("serviceHub", "right");

  return (
    <section className="relative min-h-screen bg-[#08080a] pt-24 pb-14 md:pt-28">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
        <AnimatedSection>
          <p className="text-center text-[11px] uppercase tracking-[0.4em] text-white/40">{hub.eyebrow}</p>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-white/60 md:text-base">
            {hub.message}
          </p>
        </AnimatedSection>

        <div className="relative mt-8 flex flex-col gap-4 md:mt-10 md:flex-row md:gap-6">
          <AnimatedSection className="flex flex-1">
            <Panel
              href={left.href}
              image={left.image}
              tag={left.tag}
              label={left.label}
              sub={left.sub}
              cta={left.cta}
              align="left"
            />
          </AnimatedSection>

          {/* 中央ディバイダー */}
          <div className="pointer-events-none absolute inset-y-6 left-1/2 hidden -translate-x-1/2 flex-col items-center justify-center md:flex">
            <span className="[writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.5em] text-white/30">
              A-ONE ROAD
            </span>
            <span className="mt-4 h-2 w-2 rotate-45 bg-amber-500/80" />
          </div>

          <AnimatedSection delay={120} className="flex flex-1">
            <Panel
              href={right.href}
              image={right.image}
              tag={right.tag}
              label={right.label}
              sub={right.sub}
              cta={right.cta}
              align="right"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
