"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getEventImages } from "@/actions/event-images";

export const runtime = "edge";

export default function EventCarousel() {
  const [eventImages, setEventImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      try {
        const images = await getEventImages();
        setEventImages(images);
      } catch (error) {
        console.error("Failed to load event images:", error);
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, []);

  // 画像を取得する関数
  const getEventImage = (index: number): string => {
    // インデックスを画像配列の長さで割った余りを使う（無限スクロール用）
    return eventImages[index % eventImages.length] || "";
  };

  if (loading || eventImages.length === 0) {
    return (
      <section className="py-20 bg-beige-50/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                他多数のセミナー・イベント実績
              </h2>
            </div>
          </AnimatedSection>
          <div className="flex justify-center">
            <div className="w-30 h-16 bg-gray-200 animate-pulse rounded-lg"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-beige-50/50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">他多数のセミナー・イベント実績</h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="relative w-full overflow-hidden">
            <div className="marquee-container">
              <div className="marquee-content flex items-center gap-4 min-w-[200%]">
                {eventImages.map((image, index) => (
                  <div
                    key={`img-1-${image}-${index}`}
                    className="marquee-item relative flex-shrink-0 w-[120px] h-[120px]"
                  >
                    <Image
                      src={`/event-sumbnails/${image}`}
                      alt={`イベント実績 ${index + 1}`}
                      width={120}
                      height={120}
                      className="object-cover rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                ))}

                {/* Duplicate set for seamless scrolling */}
                {eventImages.map((image, index) => (
                  <div
                    key={`img-2-${image}-${index}`}
                    className="marquee-item relative flex-shrink-0 w-[120px] h-[120px]"
                  >
                    <Image
                      src={`/event-sumbnails/${image}`}
                      alt={`イベント実績 ${index + 1}`}
                      width={120}
                      height={120}
                      className="object-cover rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
