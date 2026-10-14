import type { Metadata } from "next";
import { getSiteLocale } from "@/lib/locale";
import { localeHref } from "@/lib/site-locale";
const copy: Record<string, [string,string,string,string]> = {
 "/": ["世界の製造技術を、日本の「作れる力」へ。","Global Manufacturing Technology. Delivered to Japan.","海外の装置・材料・製造技術の日本展開と調達をつなぐValue-Added Distributor。日本語化、販路整備、一次対応、販売を担います。","A Japan-based Value-Added Distributor for manufacturing technology: localization, product visibility, inquiry handling and distribution."],
 "/global-vendors": ["海外OEMの日本展開・VAD","Your Technology. A Route to Japan.","海外メーカー向けVADサービス。日本語化、製品掲載、一次対応、販売協力の範囲とMNDA・MSA・SOWの契約手順。","Bring equipment, materials and technology to Japan. Explore A-one road’s VAD scope, distribution model, engagement process and OEM FAQ."],
 "/service/manufacturing": ["海外設備・材料の調達","Manufacturing Technology for Japanese Buyers","用途・材料・工程から海外の装置・製造技術を検討。要件整理、仕様確認、見積、輸入・据付の責任を案件ごとに整理します。","Source manufacturing technology for Japanese applications. Discuss specifications, quotations, supply terms and delivery responsibilities."],
 "/technologies": ["3つの重点技術領域","Strategic Technology Areas","General Purpose、Scarce Advanced、Feedstock & Materials。汎用装置、高度・希少な製法、継続消費材料を重点に製造知識を蓄積。","Explore General Purpose, Scarce Advanced, and Feedstock & Materials, plus complementary manufacturing technologies."],
 "/strategy": ["VADから製造能力を蓄積する長期戦略","From Distribution to Manufacturing Capability","VAD、製造技術知識、将来のFactory・受託開発、自社製品へ。A-one roadの長期構想。","A-one road’s long-term direction: VAD, technical knowledge, future factory and contract development, and our own products."],
 "/about-us": ["会社情報・理念・創業背景","About A-one road","エーワンロード株式会社の会社概要、田村一馬の創業背景、Mission・Vision・Value。横浜を拠点に製造技術の日本展開を支援。","Company information, founder story and values. A-one road is a Yokohama-based Value-Added Distributor for manufacturing technology."],
 "/contact": ["お問い合わせ","Contact A-one road","海外OEMの日本展開、日本企業の設備・材料調達、技術提携のご相談。","Contact A-one road about Japan-market distribution, manufacturing procurement or strategic technology collaboration."],
};
export async function pageMetadata(path:string):Promise<Metadata>{
 const locale = await getSiteLocale(); const row=copy[path] || copy["/"]; const title=`${row[locale==="en"?1:0]} | A-one road`;
 const description=row[locale==="en"?3:2];const canonical=localeHref(locale,path);
 return {title,description,alternates:{canonical,languages:{"ja":path,"en":localeHref("en",path),"x-default":path}},openGraph:{title,description,url:`https://a-oneroad.com${canonical}`,locale:locale==="en"?"en_US":"ja_JP",siteName:"A-one road",type:"website"},twitter:{card:"summary_large_image",title,description}};
}
