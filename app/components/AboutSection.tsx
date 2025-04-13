"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Users, Globe, Lightbulb, Calendar } from "lucide-react";

const achievements = [
  { icon: <Users className="h-6 w-6" />, label: "Team Members", value: "50+" },
  {
    icon: <Globe className="h-6 w-6" />,
    label: "Global Clients",
    value: "20+",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    label: "Patents Filed",
    value: "5+",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    label: "Years Founded",
    value: "2022",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="about" className="relative overflow-hidden py-10">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid items-center gap-12 md:grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute inset-0 -rotate-6 transform rounded-3xl bg-gradient-to-br from-white/10 to-white/0"></div>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="A1Labs Team or Office" // Updated alt text
              width={600}
              height={600}
              className="relative z-10 rounded-3xl"
            />
          </div>
          <div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              すべての人々をつなぐ架け橋へ
            </h2>
            <p className="mb-6 text-lg text-zinc-300">
              世界にある見えない資産をつなげ、その力を引き出します。ブロックチェーン技術をはじめとする最新テクノロジーの力で、我々の生きる社会のあらゆる問題を解決します。
            </p>
            <p className="mb-8 text-lg text-zinc-300">
              私たちのミッションは、すべての人々をつなげることです。
              <br />
              近代日本資本主義の礎を築いた渋沢栄一の精神を繋ぎ、社会に広めることで、皆様と未来をつくりあげてゆきます。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
