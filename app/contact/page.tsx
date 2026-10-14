import Link from "next/link";
import HubspotForm from "@/components/hubspot-form";
import { Hero, Section } from "@/components/vad-sections";
import { getContentItem } from "@/lib/site-content";
import { getSiteLocale } from "@/lib/locale";
import { localeHref } from "@/lib/site-locale";
import { pageMetadata } from "@/lib/site-metadata";
export const generateMetadata = () => pageMetadata("/contact");
const topics = {oem:["海外OEM：日本展開・販売提携","Global OEM: Japan-market distribution"],buyer:["日本企業：設備・材料調達","Japanese buyer: manufacturing procurement"],partnership:["戦略的技術提携","Strategic technology partnership"]};
type ContactPageProps={searchParams:Promise<Record<string,string|string[]|undefined>>};
export default async function ContactPage({searchParams}:ContactPageProps){
 const [params,locale,hero,form] = await Promise.all([searchParams,getSiteLocale(),getContentItem("contact","hero"),getContentItem("contact","formHeader")]);
 const value=Array.isArray(params.topic)?params.topic[0]:params.topic;
 const key=value && value in topics?value as keyof typeof topics:undefined;
 const label=key?topics[key][locale==="en"?1:0]:locale==="en"?"General inquiry":"一般のお問い合わせ";
 const subject=`[${label}] A-one road`;
 return <><Hero content={{...hero,primaryLabel:locale==="en"?"Open inquiry form":"フォームへ進む",primaryHref:'#inquiry'}}/>
 <Section id="inquiry" label={form.eyebrow} title={form.title} copy={form.copy}>
 <nav className="vad-contact-options" aria-label={locale==="en"?"Inquiry type":"お問い合わせ種別"}>{Object.entries(topics).map(([k,v])=><Link key={k} href={localeHref(locale,`/contact?topic=${k}#inquiry`)} aria-current={key===k?"true":undefined} data-analytics={`contact_type_${k}`}>{v[locale==="en"?1:0]}</Link>)}</nav>
 <div className="vad-form"><p className="mb-6 text-base"><strong>{locale==="en"?"Inquiry type: ":"ご相談内容："}</strong>{label}</p>
 <HubspotForm portalId="246807977" formId="adc556cb-cfc8-4a4f-8350-fdadc91c052a" region="na2" topic={key || "general"}/></div>
 <p className="vad-note">{locale==="en"?"Please include the inquiry type in your message. If the form does not load, use the email link below.":"本文にご相談の種別をご記入ください。フォームが表示されない場合は、下記メール窓口をご利用ください。"}</p>
 <Link className="vad-text-link vad-email" href={`mailto:admin@a1-road.com?subject=${encodeURIComponent(subject)}`} data-analytics="email_inquiry">admin@a1-road.com ↗</Link>
 </Section><Section label="COMPANY" title={locale==="en"?"A-one road Co., Ltd.":"エーワンロード株式会社"}>
 <p className="vad-copy">{locale==="en"?"Based in Yokohama, Japan. Japanese and English inquiries welcome.":"横浜を拠点に、日本語・英語でお問い合わせを受け付けています。"}</p><Link className="vad-text-link" href={localeHref(locale,"/about-us")}>{locale==="en"?"Company information":"会社概要・所在地"} ↗</Link>
 </Section></>;
}
