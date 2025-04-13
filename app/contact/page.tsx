import InteractiveBackground from "@/app/components/InteractiveBackground";
import ContactSection from "@/app/components/ContactSection";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen text-white">
      <InteractiveBackground />
      <div className="relative z-10">
        <main className="container mx-auto px-4">
          <div className="pb-20 pt-32">
            <h1 className="mb-10 text-center text-5xl font-bold">
              お問い合わせ
            </h1>
            <ContactSection />
          </div>
        </main>
      </div>
    </div>
  );
}
