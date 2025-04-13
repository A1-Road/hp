"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, Network, Layers, ShieldCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const allServiceOptions = [
  {
    name: "AI Strategy Consulting",
    description: "Tailored AI roadmaps to drive business value.",
    icon: <Bot className="h-6 w-6" />,
    features: [
      "AI Readiness Assessment",
      "Use Case Identification",
      "Technology Stack Recommendation",
      "Implementation Planning",
      "ROI Analysis",
    ],
  },
  {
    name: "Web3 dApp Development",
    description: "Building decentralized applications on leading blockchains.",
    icon: <Network className="h-6 w-6" />,
    features: [
      "Smart Contract Development",
      "Frontend & UI/UX Design",
      "Blockchain Integration (Ethereum, Polygon, etc.)",
      "Wallet Integration",
      "Testing & Deployment",
    ],
  },
  {
    name: "Blockchain Solutions",
    description:
      "Custom blockchain solutions for enhanced security and transparency.",
    icon: <Layers className="h-6 w-6" />,
    features: [
      "Private Blockchain Networks",
      "Supply Chain Management",
      "Digital Identity Solutions",
      "Tokenization Platforms",
      "Cross-chain Interoperability",
    ],
  },
  {
    name: "Smart Contract Audit",
    description:
      "Ensuring the security and reliability of your smart contracts.",
    icon: <ShieldCheck className="h-6 w-6" />,
    features: [
      "Comprehensive Code Review",
      "Vulnerability Assessment",
      "Gas Optimization Analysis",
      "Security Best Practices Check",
      "Detailed Audit Report",
    ],
  },
];

interface ServicesSectionProps {
  limit?: number;
  showViewAllLink?: boolean;
}

export default function ServicesSection({
  limit,
  showViewAllLink = false,
}: ServicesSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const serviceOptions = limit
    ? allServiceOptions.slice(0, limit)
    : allServiceOptions;

  return (
    <section id="services" className="relative overflow-hidden py-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black"></div>

      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-5xl font-bold md:text-6xl">Our Services</h2>
          <p className="mx-auto max-w-2xl text-xl text-zinc-400">
            Leveraging cutting-edge AI and Web3 technologies to build the
            future.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 gap-8 md:grid-cols-2 ${limit === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}
        >
          {serviceOptions.map((option, index) => {
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

                    <div className="flex-grow">
                      <ul className="mb-6 space-y-3">
                        {option.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="mr-2 mt-1 h-4 w-4 shrink-0 text-purple-400" />
                            <span className="text-sm text-zinc-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      asChild
                      className={`w-full bg-white text-black transition-colors hover:bg-zinc-200`}
                    >
                      <a href="/contact">Contact Us</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {showViewAllLink && (
          <div className="mt-12 text-center">
            <Button
              asChild
              variant="link"
              className="text-purple-400 hover:text-purple-300"
            >
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
