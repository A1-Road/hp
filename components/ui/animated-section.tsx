"use client";

import type React from "react";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isIntersecting, delay]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={cn("fade-in-up", isVisible && "visible", className)}
    >
      {children}
    </section>
  );
}
