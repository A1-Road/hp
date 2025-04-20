"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useEffect, useState } from "react"
import Image from "next/image"

interface CaseStudyCardProps {
  title: string
  problem: string
  solution: string
  result: string
  imageSrc: string
}

export default function CaseStudyCard({ title, problem, solution, result, imageSrc }: CaseStudyCardProps) {
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
      transition={{ duration: 0.5 }}
      className="card-3d overflow-hidden rounded-2xl bg-white shadow-lg border border-beige-200/50"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-0 left-0 right-0 p-4 text-white font-bold text-xl">{title}</h3>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-1">課題</h4>
          <p className="text-sm">{problem}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary uppercase mb-1">ソリューション</h4>
          <p className="text-sm">{solution}</p>
        </div>
        <div className="bg-beige-50 p-3 rounded-lg">
          <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-1">成果</h4>
          <p className="text-sm font-medium">{result}</p>
        </div>
      </div>
    </motion.div>
  )
}
