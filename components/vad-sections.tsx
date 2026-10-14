import Image from "next/image";
import Link from "next/link";
import { getContentItem, getContentItems } from "@/lib/site-content";
import { getSiteLocale } from "@/lib/locale";
import { localeHref } from "@/lib/site-locale";
import type { ReactNode } from "react";

type Copy = Record<string, string>;
export function Section({ label, title, copy, children, dark = false, id }: { label?: string; title?: string; copy?: string; children?: ReactNode; dark?: boolean; id?: string }) {
  return <section id={id} className={`vad-section ${dark ? "vad-dark" : ""}`}><div className="vad-container">
    {label && <p className="vad-label">{label}</p>}{title && <h2 className="vad-title">{title}</h2>}{copy && <p className="vad-copy">{copy}</p>}{children}
  </div></section>;
}
export function Hero({ content, image = false }: { content: Copy; image?: boolean }) {
  return <section className="vad-hero"><div className={`vad-container ${image ? "vad-hero-grid" : ""}`}>
    <div><p className="vad-label">{content.eyebrow}</p><h1>{content.title}</h1><p className="vad-copy">{content.copy}</p>
      <div className="vad-actions"><Link href={content.primaryHref} className="vad-button" data-analytics="oem_or_primary_cta">{content.primaryLabel}<span aria-hidden="true">↗</span></Link>
      {content.secondaryHref && <Link href={content.secondaryHref} className="vad-button vad-button-outline" data-analytics="buyer_or_secondary_cta">{content.secondaryLabel}<span aria-hidden="true">↗</span></Link>}</div>
      {content.primaryCopy && <p className="vad-meta">{content.primaryCopy} · {content.secondaryCopy}</p>}
    </div>
    {image && <div className="vad-hero-image"><Image src={content.image} alt={content.imageAlt} fill priority sizes="(max-width: 767px) 100vw, 42vw" className="object-cover" /><span className="vad-image-caption">A-one road / Make Matter Matter.</span></div>}
  </div></section>;
}
export function Cards({ rows, columns = 3 }: { rows: Copy[]; columns?: 2 | 3 }) {
  return <div className={`vad-grid vad-cols-${columns}`}>{rows.map((r, i) => <article className="vad-card" key={r.title || i}>
    {(r.tag || r.number) && <p className="vad-label">{r.tag || r.number}</p>}<h3>{r.title}</h3>{r.subtitle && <p className="vad-card-subtitle">{r.subtitle}</p>}<p>{r.copy}</p>{r.examples && <p className="vad-meta">{r.examples}</p>}
  </article>)}</div>;
}
export async function Ribbon() {
  const [head, actors, flows, network] = await Promise.all([getContentItem("vad", "ribbonHeader"), getContentItems("vad", "actors"), getContentItem("vad", "flows"), getContentItems("vad", "network")]);
  return <Section label={head.eyebrow} title={head.title} copy={head.copy} id="model">
    <div className="vad-ribbon" aria-label={head.title}><p className="vad-flow-label">{flows.forward}</p><div className="vad-grid vad-cols-3">
      {actors.map((a, i) => <article key={a.title} className={`vad-card ${i === 1 ? "vad-core" : ""}`}><p className="vad-label">{a.role}</p><h3>{a.title}</h3><p>{a.copy}</p></article>)}
    </div><p className="vad-flow-label vad-flow-reverse">{flows.reverse}</p></div>
    <Cards rows={network} columns={2}/><p className="vad-note">{flows.note}</p>
  </Section>;
}
export async function Portfolio({ includeBroader = true }: { includeBroader?: boolean }) {
  const [head, rows, broader] = await Promise.all([getContentItem("vad", "portfolioHeader"), getContentItems("vad", "portfolio"), getContentItem("vad", "broader")]);
  return <Section label={head.eyebrow} title={head.title} copy={head.copy} dark id="portfolio"><Cards rows={rows}/>
    {includeBroader && <div className="vad-broader"><p className="vad-label">{broader.eyebrow}</p><h3>{broader.title}</h3><p>{broader.copy}</p><p className="vad-note">{broader.note}</p></div>}
  </Section>;
}
export async function ContractProcess() {
  const [head, rows] = await Promise.all([getContentItem("vad", "processHeader"), getContentItems("vad", "process")]);
  return <Section label={head.eyebrow} title={head.title} copy={head.copy}><Steps rows={rows}/></Section>;
}
export function Steps({ rows }: { rows: Copy[] }) {
  return <ol className="vad-grid vad-cols-3 vad-steps">{rows.map((r, i) => <li className="vad-card" key={r.title}><p className="vad-label">{String(i + 1).padStart(2,"0")}</p><h3>{r.title}</h3><p>{r.copy}</p></li>)}</ol>;
}
export function Faq({ rows }: { rows: Copy[] }) {
  return <div className="vad-faq">{rows.map(r => <details key={r.question}><summary>{r.question}</summary><p>{r.answer}</p></details>)}</div>;
}
export async function Credentials() {
  const locale = await getSiteLocale();
  return <Section label="SELECTED PROGRAMS" title={locale === "en" ? "Building with support from:" : "採択・参加プログラム"}>
    <div className="vad-credentials"><div><Image src="/tokyo-restarter.png" alt="東京都リスタート・アントレプレナー支援事業 Re:STARTER" width={990} height={387}/><p>Tokyo Re:STARTER 2026</p></div>
    <div><Image src="/makers-university-logo.png" alt="MAKERS UNIVERSITY" width={176} height={176}/><p>MAKERS UNIVERSITY / Cohort 11</p></div></div>
  </Section>;
}
export async function ContactCTA() {
  const [c, locale] = await Promise.all([getContentItem("vad", "cta"), getSiteLocale()]);
  return <Section label={c.eyebrow} title={c.title} copy={c.copy} dark><div className="vad-actions">
    <Link href={localeHref(locale,"/contact?topic=oem")} className="vad-button" data-analytics="oem_contact">{c.oemLabel}<span aria-hidden="true">↗</span></Link>
    <Link href={localeHref(locale,"/contact?topic=buyer")} className="vad-button vad-button-outline" data-analytics="buyer_contact">{c.buyerLabel}<span aria-hidden="true">↗</span></Link>
  </div></Section>;
}
