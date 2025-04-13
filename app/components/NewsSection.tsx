"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Skeleton } from "@/components/ui/skeleton";
import { getNewsItems, type NewsItem } from "@/data/news";

function NewsCard({ item }: { item: NewsItem }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link href={`/news/${item.slug}`} className="block h-full">
        <Card className="group flex h-full flex-col overflow-hidden border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-purple-500">
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/50"></div>
            <div className="absolute left-3 top-3 z-20">
              <span className="rounded-full bg-purple-600 px-3 py-1 text-xs text-white">
                {item.category}
              </span>
            </div>
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <CardContent className="flex-grow p-6">
            <div className="mb-2 flex items-center text-zinc-400">
              <Calendar className="mr-2 h-4 w-4" />
              <span className="text-sm">{item.date}</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-purple-400">
              {item.title}
            </h3>
            <p className="mb-4 line-clamp-2 text-zinc-400">{item.excerpt}</p>
          </CardContent>
          <CardFooter className="px-6 pb-6 pt-0">
            <Button
              variant="ghost"
              className="group w-full justify-between hover:bg-purple-900/20"
            >
              <span>続きを読む</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}

interface NewsSectionProps extends React.HTMLAttributes<HTMLElement> {
  limit?: number;
}

export default function NewsSection({ limit, ...props }: NewsSectionProps) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      // Use the helper function from data/news.ts
      const fetchedNews = await getNewsItems(limit);
      setNews(fetchedNews);
      setLoading(false);
    };
    const timer = setTimeout(() => {
      loadNews();
    }, 100);
    return () => clearTimeout(timer);
  }, [limit]);

  const displayNews = news.filter(
    (item) =>
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section className="py-10" {...props}>
      <div className="mb-10">
        <div className="relative mx-auto max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-zinc-400" />
          <Input
            type="text"
            placeholder="ニュースを検索..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-zinc-700 bg-zinc-900/50 pl-10 transition-colors focus:border-purple-500"
          />
        </div>

        {loading ? (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array(limit || 6)
              .fill(0)
              .map((_, index) => (
                <div key={index}>
                  <Card className="h-full border-zinc-800 bg-zinc-900/50">
                    <CardContent className="space-y-4 p-6">
                      <Skeleton className="h-40 animate-pulse rounded-md bg-zinc-800"></Skeleton>
                      <Skeleton className="h-6 w-3/4 animate-pulse rounded-md bg-zinc-800"></Skeleton>
                      <Skeleton className="h-4 w-1/4 animate-pulse rounded-md bg-zinc-800"></Skeleton>
                      <Skeleton className="h-16 animate-pulse rounded-md bg-zinc-800"></Skeleton>
                    </CardContent>
                  </Card>
                </div>
              ))}
          </div>
        ) : displayNews.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="mt-10 py-10 text-center">
            <p className="text-xl text-zinc-400">検索結果がありません</p>
            <Button
              variant="link"
              onClick={() => setSearchTerm("")}
              className="mt-2 text-purple-400 hover:text-purple-300"
            >
              すべてのニュースを表示
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
