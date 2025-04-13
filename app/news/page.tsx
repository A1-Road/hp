import NewsSection from "@/app/components/NewsSection";

export default function NewsPage() {
  return (
    <div className="relative min-h-screen text-white">
      <div className="relative z-10">
        <main className="container mx-auto px-4">
          <div className="pb-20 pt-32">
            <h1 className="mb-10 text-center text-5xl font-bold">ニュース</h1>
            <NewsSection showSearch={true} />
          </div>
        </main>
      </div>
    </div>
  );
}
