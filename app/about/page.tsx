import InteractiveBackground from "@/app/components/InteractiveBackground";
import AboutSection from "@/app/components/AboutSection";
import ServicesSection from "@/app/components/ServicesSection";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen text-white">
      <InteractiveBackground />
      <div className="relative z-10">
        <main className="container mx-auto px-4">
          <div className="pb-20 pt-32">
            <h1 className="mb-10 text-center text-5xl font-bold">
              プロフィール
            </h1>
            <AboutSection />
            <ServicesSection />
          </div>
        </main>
      </div>
    </div>
  );
}
