import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  getNewsDetailsBySlug,
  getRelatedNewsItems,
  type NewsItem,
  type NewsItemDetail,
} from "@/data/news";

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const newsData = await getNewsDetailsBySlug(params.slug);
  const relatedNewsItems = await getRelatedNewsItems(params.slug);

  if (!newsData) {
    return (
      <div className="relative min-h-screen text-white">
        <div className="relative z-10">
          <main className="container mx-auto px-4">
            <div className="pb-20 pt-32 text-center">
              <h1 className="mb-10 text-5xl font-bold">記事が見つかりません</h1>
              <p className="mb-8 text-xl text-zinc-400">
                お探しのニュース記事は存在しないか、削除された可能性があります。
              </p>
              <Button asChild>
                <Link href="/news">ニュース一覧に戻る</Link>
              </Button>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-white">
      <div className="relative z-10">
        <main className="container mx-auto px-4">
          <div className="pb-20 pt-32">
            <div className="mb-8">
              <Button
                asChild
                variant="ghost"
                className="mb-6 hover:bg-zinc-900/50"
              >
                <Link href="/news">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  ニュース一覧に戻る
                </Link>
              </Button>
            </div>

            <div className="mb-8">
              <div className="mb-4 flex items-center gap-4">
                <span className="rounded-full bg-purple-600 px-3 py-1 text-sm text-white">
                  {newsData.category}
                </span>
                <div className="flex items-center text-zinc-400">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className="text-sm">{newsData.date}</span>
                </div>
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                {newsData.title}
              </h1>
            </div>

            <div className="relative mb-10 h-[40vh] overflow-hidden rounded-xl md:h-[50vh]">
              <Image
                src={newsData.image || "/placeholder.svg"}
                alt={newsData.title}
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="prose prose-lg prose-invert mx-auto max-w-3xl">
              <div dangerouslySetInnerHTML={{ __html: newsData.content }} />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>

            {relatedNewsItems.length > 0 && (
              <div className="mt-16 border-t border-zinc-800 pt-8">
                <h3 className="mb-4 text-2xl font-bold">関連ニュース</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {relatedNewsItems.map((item: NewsItem) => (
                    <Link
                      href={`/news/${item.slug}`}
                      key={item.id}
                      className="group block"
                    >
                      <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 transition-colors hover:border-purple-500">
                        <div className="relative h-40 overflow-hidden bg-zinc-800">
                          <Image
                            src={
                              item.image ||
                              "/placeholder.svg?height=200&width=400"
                            }
                            alt={item.title}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold transition-colors group-hover:text-purple-400">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
