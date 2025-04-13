"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion"; // Added useInView
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
  // Use useInView for fade-in animation instead of parallax
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Removed useScroll and useTransform related variables (y, opacity)

  return (
    // Apply ref to the section for useInView trigger
    <section ref={ref} id="about" className="relative overflow-hidden py-10">
      <div className="container mx-auto px-4">
        {/* Apply motion and variants to the grid container */}
        <motion.div
          className="grid items-center gap-12 md:grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Consider animating this div as well if desired */}
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
              About A1Labs
            </h2>
            <p className="mb-6 text-lg text-zinc-300">
              A1Labs is a pioneering technology firm specializing in Artificial
              Intelligence and Web3 solutions. Our mission is to empower
              businesses by harnessing the transformative potential of
              decentralized systems and intelligent automation.
            </p>
            <p className="mb-8 text-lg text-zinc-300">
              We are a team of passionate innovators, researchers, and engineers
              dedicated to building the next generation of digital
              infrastructure. From bespoke AI models to secure blockchain
              applications, we deliver cutting-edge solutions tailored to our
              clients' unique needs.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="rounded-lg border border-white/10 bg-zinc-900/50 p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-2 flex items-center">
                    <div className="mr-2 text-white">{achievement.icon}</div>
                    <div className="text-2xl font-bold">
                      {achievement.value}
                    </div>
                  </div>
                  <div className="text-sm text-zinc-400">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
