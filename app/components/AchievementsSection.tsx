"use client";

import { useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";
import { allAchievements, type Achievement } from "@/data/achievements";
import { motion, useInView } from "framer-motion";

interface AchievementsSectionProps {
  limit?: number;
}

export default function AchievementsSection({
  limit,
}: AchievementsSectionProps) {
  const achievementsToDisplay = limit
    ? allAchievements.slice(0, limit)
    : allAchievements;

  return (
    <section id="achievements" className="py-10">
      <h2 className="mb-10 text-center text-5xl font-bold">主な実績</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {achievementsToDisplay.map(
          (achievement: Achievement, index: number) => {
            const cardRef = useRef(null);
            const isInView = useInView(cardRef, { once: true, amount: 0.2 });

            return (
              <motion.div
                key={achievement.id}
                ref={cardRef}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <Card className="group flex h-full flex-col overflow-hidden border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:scale-105 hover:border-purple-500">
                  <CardContent className="flex-grow p-6">
                    <div className="relative mb-4 h-40 overflow-hidden rounded-md">
                      <img
                        src={achievement.image || "/placeholder.svg"}
                        alt={achievement.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute left-3 top-3 z-20">
                        <span className="rounded-full bg-purple-600 px-3 py-1 text-xs text-white">
                          {achievement.category}
                        </span>
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-purple-400">
                      {achievement.title}
                    </h3>
                    <p className="mb-4 line-clamp-3 text-zinc-400">
                      {achievement.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button
                      asChild
                      variant="ghost"
                      className="group w-full justify-between bg-transparent text-zinc-400 hover:bg-purple-900/20 hover:text-white"
                    >
                      <a
                        href={`/achievements/${achievement.slug}`}
                        className="flex w-full items-center justify-between"
                      >
                        <span>詳しく見る</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          },
        )}
      </div>
    </section>
  );
}
