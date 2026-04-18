"use client";

import Link from "next/link";
import { useLayout } from "../app/contexts/header-context";

type LinkItem = {
  label: string;
  href: string;
};

type InfoItem = {
  label: string;
  value: string;
};

type FooterProps = {
  navigation: LinkItem[];
  socials: LinkItem[];
  contactInfo: InfoItem[];
  tagline: string;
  privacyLabel: string;
  copyright: string;
};

export default function Footer({
  navigation,
  socials,
  contactInfo,
  tagline,
  privacyLabel,
  copyright,
}: FooterProps) {
  const { isFooterVisible } = useLayout();

  if (!isFooterVisible) return null;

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em]">A-One Road</p>
          <p className="mt-6 max-w-md text-sm text-white/72">{tagline}</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="section-label text-white/56">Nav</p>
            <ul className="mt-4 space-y-3 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-opacity hover:opacity-60">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label text-white/56">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-white/72">
              {contactInfo.map((item) => (
                <p key={item.label}>{item.value}</p>
              ))}
            </div>
          </div>

          <div>
            <p className="section-label text-white/56">Social</p>
            <ul className="mt-4 space-y-3 text-sm">
              {socials.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-60"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/12">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-5 text-xs text-white/56 md:px-10">
          <Link href="/privacy-policy" className="transition-opacity hover:opacity-60">
            {privacyLabel}
          </Link>
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
