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
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black"></div>
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
                Innovate with AI & Web3
              </span>
              <motion.span
                className="absolute -inset-1 rounded-full bg-white blur-3xl"
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
              We partner with forward-thinking businesses to build
              groundbreaking solutions leveraging Artificial Intelligence and
              Decentralized Technologies.
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
                  <Link href="/services">
                    <span className="relative z-10">Explore Our Services</span>
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

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-lg transition-colors hover:border-white/20"
                >
                  <div className="mb-2 flex justify-center text-white/70">
                    {stat.icon}
                  </div>
                  <motion.div
                    className="mb-1 text-3xl font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
