import InteractiveBackground from "@/app/components/InteractiveBackground";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import {
  getAchievementDetailsBySlug,
  getRelatedAchievements,
  type Achievement,
  type AchievementDetail,
} from "@/data/achievements"; // Use alias path

export default async function AchievementDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const achievement = await getAchievementDetailsBySlug(params.slug);
  const relatedAchievements = await getRelatedAchievements(params.slug);

  if (!achievement) {
    return (
      <div className="relative min-h-screen text-white">
        <InteractiveBackground />
        <div className="relative z-10">
          <main className="container mx-auto px-4">
            <div className="pb-20 pt-32 text-center">
              <h1 className="mb-10 text-5xl font-bold">
                Achievement Not Found
              </h1>
              <p className="mb-8 text-xl text-zinc-400">
                The requested achievement could not be found.
              </p>
              <Button asChild>
                <Link href="/achievements">Back to Achievements</Link>
              </Button>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-white">
      <InteractiveBackground />
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-32">
          <div className="mb-8">
            <Button
              asChild
              variant="ghost"
              className="mb-6 hover:bg-zinc-900/50"
            >
              <Link href="/achievements">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Achievements
              </Link>
            </Button>
          </div>

          <div className="mb-8">
            <div className="mb-4 flex items-center space-x-2 text-sm text-purple-400">
              <span>{achievement.category}</span>
            </div>
            <h1 className="mb-8 text-4xl font-bold md:text-5xl">
              {achievement.title}
            </h1>
          </div>

          <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={achievement.image || "/placeholder.svg"}
              alt={achievement.title}
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          <article className="prose prose-invert mx-auto max-w-3xl lg:prose-xl">
            <div dangerouslySetInnerHTML={{ __html: achievement.content }} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </article>

          {relatedAchievements.length > 0 && (
            <div className="mt-16 border-t border-zinc-800 pt-8">
              <h3 className="mb-4 text-2xl font-bold">Related Achievements</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {relatedAchievements.map((item: Achievement) => (
                  <Link
                    href={`/achievements/${item.slug}`}
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
        </main>
      </div>
    </div>
  );
}
