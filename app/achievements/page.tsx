import InteractiveBackground from "@/app/components/InteractiveBackground";
import AchievementsSection from "@/app/components/AchievementsSection";

export default function AchievementsPage() {
  return (
    <div className="relative min-h-screen text-white">
      <InteractiveBackground />
      <div className="relative z-10">
        <main className="container mx-auto px-4">
          <div className="pb-20 pt-32">
            <h1 className="mb-10 text-center text-5xl font-bold">
              Achievements
            </h1>
            <AchievementsSection />
          </div>
        </main>
      </div>
    </div>
  );
}
