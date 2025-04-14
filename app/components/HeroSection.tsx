"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Bot, ShieldCheck, BookOpen } from "lucide-react";
import Link from "next/link";

const FloatingParticle = ({ delay }: { delay: number }) => {
  const y = useMotionValue(0);
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });
  const [x, setX] = useState<number | null>(null);

  useEffect(() => {
    setX(Math.random() * 100);

    const moveParticle = () => {
      y.set(Math.random() * -100);
      setTimeout(moveParticle, Math.random() * 5000 + 3000);
    };

    setTimeout(moveParticle, delay);
  }, [y, delay]);

  if (x === null) return null;

  return (
    <motion.div
      className="absolute h-1 w-1 rounded-full bg-white"
      style={{
        x: `${x}%`,
        y: ySpring,
        opacity: 0.5,
      }}
    />
  );
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [isHovered, setIsHovered] = useState(false);

  const stats = [
    {
      icon: <Rocket className="h-6 w-6" />,
      label: "Projects Launched",
      value: "50+",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      label: "AI Models Trained",
      value: "100+",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      label: "Contracts Audited",
      value: "200+",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      label: "Research Papers",
      value: "10+",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b"></div>
        {[...Array(50)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 100} />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative px-4 pb-16 pt-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h1 className="relative mb-6 text-7xl font-bold tracking-tight md:text-8xl">
              <span className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                実社会のオンチェーン化を
              </span>
              <span className="relative z-10 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                <br />
                実現する
              </span>
              <motion.span
                className="absolute -inset-1 rounded-full bg-white blur-xl" // Changed from blur-3xl
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-zinc-400 md:text-2xl">
              最新技術でプロジェクトをよりなめらかに。
              <br />
              世界、日本、そしてあなたを繋ぐ存在へ
            </p>
            <div className="relative inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10"
              >
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-full bg-white px-8 py-6 text-lg text-black transition-colors hover:bg-zinc-200"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  asChild
                >
                  <Link href="/about">
                    <span className="relative z-10">詳しくはこちら</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-white"
                      initial={{ x: "100%" }}
                      animate={{ x: isHovered ? "0%" : "-100%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      animate={{ x: isHovered ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="relative z-10 ml-2"
                    >
                      →
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
