"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import Image from "next/image";

const CIRCLES = [
  { text: "AI", color: "bg-gray-600" },
  { text: "Web3", color: "bg-beige-500" },
  { text: "産業", color: "bg-beige-400" },
] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const circleAnimation = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function HeroSection() {
  return (
    <div>
      {/* 上部セクション：ロゴとメインメッセージ */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center justify-center blob-bg">
        <div className="absolute inset-0 grid-pattern opacity-30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <Image
                src="/a1road-logo.png"
                width={400}
                height={400}
                alt="エーワンロード株式会社"
                className="w-auto h-48 md:h-64"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left flex-shrink-0"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight whitespace-nowrap">
                <span className="text-gradient">AIとWeb3で</span>
                <br />
                日本の産業基盤を
                <br />
                変革する
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 下部セクション：説明文と円形デザイン */}
      <section className="relative bg-beige-50/50 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row items-center justify-center gap-0 max-w-5xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center md:text-left md:flex-1 max-w-xl md:pl-8"
            >
              <motion.p
                variants={fadeInUp}
                className="text-2xl text-muted-foreground leading-relaxed"
              >
                製造業・建設業・観光業の
                <br className="hidden md:block" />
                デジタル変革を支援し、
                <br className="hidden md:block" />
                グローバル競争力のある産業へと
                <br className="hidden md:block" />
                進化させます
                <br className="hidden md:block" />
                <br className="hidden md:block" />
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Button asChild size="lg" className="rounded-full text-lg px-8">
                  <Link href="/contact" className="inline-flex items-center">
                    相談してみる
                    <HiArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-8">
                  <Link href="/works">実績を見る</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* 円形デザイン */}
            <motion.div
              variants={fadeInUp}
              className="relative w-[280px] aspect-square md:-ml-24 md:-mt-8"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-full h-full">
                  <div className="relative w-full h-full">
                    {CIRCLES.map((circle, index) => (
                      <motion.div
                        key={index}
                        variants={circleAnimation}
                        custom={index}
                        className={`absolute w-[130px] h-[130px] rounded-full flex items-center justify-center ${circle.color} hover:scale-105 transition-transform`}
                        style={{
                          top: index === 0 ? "15%" : "60%",
                          left: index === 1 ? "25%" : index === 2 ? "75%" : "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <span className="text-2xl font-bold text-white">{circle.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
