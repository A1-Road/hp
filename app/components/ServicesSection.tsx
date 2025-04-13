"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  BookOpen,
  Radio,
  Layers,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const serviceOptions = [
  {
    name: "カンファレンス",
    description: "DAO特化型のハッカソン「DAOATHON」運営",
    icon: <Calendar className="h-6 w-6" />,
  },
  {
    name: "教育",
    description: "機会シェアを通じたWeb3リテラシーの向上支援",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    name: "メディア",
    description: "各種メディアへの貢献を通じ、独自のインサイトと視点を提供",
    icon: <Radio className="h-6 w-6" />,
  },
  {
    name: "技術導入支援",
    description: "ブロックチェーン/AIの導入からアドバイザリー",
    icon: <Layers className="h-6 w-6" />,
  },
];

interface ServicesSectionProps {
  limit?: number;
}

export default function ServicesSection({ limit }: ServicesSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const displayedServices = limit
    ? serviceOptions.slice(0, limit)
    : serviceOptions;

  return (
    <section id="services" className="relative overflow-hidden py-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black"></div>

      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-5xl font-bold md:text-6xl">事業内容</h2>
        </div>

        <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4`}>
          {displayedServices.map((option, index) => {
            const ref = useRef(null);
            const inView = useInView(ref, { amount: 0.3 });

            return (
              <motion.div
                key={option.name}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Card
                  className={`relative h-full ${
                    hoveredCard === index ? "scale-105" : "scale-100"
                  } transition-all duration-300`}
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-white/0 p-[1px]">
                    <div className="absolute inset-0 rounded-lg bg-black"></div>
                  </div>

                  <CardContent className="relative flex h-full flex-col rounded-lg p-6">
                    <div className="mb-6 text-center">
                      <div className="mb-4 inline-flex rounded-full border border-white/10 bg-zinc-900 p-3">
                        {option.icon}
                      </div>
                      <h3 className="mb-2 text-xl font-bold">{option.name}</h3>
                      <p className="text-sm text-zinc-400">
                        {option.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
