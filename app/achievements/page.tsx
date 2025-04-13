import AchievementsSection from "@/app/components/AchievementsSection";

export default function AchievementsPage() {
  return (
    <div className="relative min-h-screen text-white">
      <div className="relative z-10">
        <main className="container mx-auto px-4">
          <div className="pb-20 pt-32">
            <AchievementsSection />
          </div>
        </main>
      </div>
    </div>
  );
}
