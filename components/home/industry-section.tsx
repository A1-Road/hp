"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useEffect, useState } from "react"
import { FaIndustry, FaBuilding, FaUmbrellaBeach } from "react-icons/fa"

interface IndustryCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function IndustryCard({ icon, title, description, delay }: IndustryCardProps) {
  const { ref, isIntersecting } = useIntersectionObserver()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isIntersecting) {
      setIsVisible(true)
    }
  }, [isIntersecting])

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="relative overflow-hidden"
    >
      <div className="bg-gradient-soft rounded-2xl p-6 h-full border border-beige-200/50 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="absolute top-0 right-0 w-32 h-32 bg-beige-200/30 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        <div className="relative z-10">
          <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-md">{icon}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function IndustrySection() {
  return (
    <section className="bg-pattern py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 blob-bg"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title mx-auto"
          >
            対象業界
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            日本の産業基盤を支える主要業界のデジタル変革を支援します
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <IndustryCard
            icon={<FaIndustry className="h-8 w-8 text-primary" />}
            title="製造業"
            description="IoTとAIを活用した生産ライン最適化、サプライチェーン管理、品質管理の効率化を実現します。"
            delay={1}
          />
          <IndustryCard
            icon={<FaBuilding className="h-8 w-8 text-primary" />}
            title="建設業"
            description="現場の安全管理、工程管理、技術伝承をAIとブロックチェーンで革新し、生産性向上を支援します。"
            delay={2}
          />
          <IndustryCard
            icon={<FaUmbrellaBeach className="h-8 w-8 text-primary" />}
            title="観光業"
            description="地域資源のデジタル化、多言語対応、パーソナライズされた体験提供で、観光DXを推進します。"
            delay={3}
          />
        </div>
      </div>
    </section>
  )
}
