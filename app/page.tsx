"use client";

import HeroSection from "@/app/components/HeroSection";
import ServicesSection from "@/app/components/ServicesSection";
import AboutSection from "@/app/components/AboutSection";
import ContactSection from "@/app/components/ContactSection";
import NewsSection from "@/app/components/NewsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      <div className="relative z-10">
        <main className="container mx-auto px-4">
          <HeroSection />
          <NewsSection limit={3} />
          <ServicesSection limit={3} showViewAllLink={true} />
          <AboutSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
