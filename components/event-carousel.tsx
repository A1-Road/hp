"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";

// イベント画像のファイル名を直接指定
const eventImages = [
  "3cfebc78-69c8-4e15-b964-f5d0806a6c78.jpg",
  "5bdfdf65-7f46-4b52-ab41-aa5e61ec1f4b.avif",
  "6d59ce95-022d-4437-9e5a-cd6ab8f02fa7.avif",
  "35bfc7dc-0a9b-4bd5-8092-df1ced5faaee.avif",
  "83ffe507-2c74-44d0-8a3e-4c7e8828132a.avif",
  "171e0794-3f09-40f2-a4d1-72eb76299921.avif",
  "226fc7c8-e56a-46f9-bb36-386c27c1eec6.avif",
  "420b2691-eac3-4681-856a-cc4a79298890.avif",
  "835d1cd8-e6b7-4430-974e-28c036b57406.avif",
  "9032fbf0-eb79-4657-8fb7-29aa09129622.avif",
  "49510137-36a7-46bd-803c-d20093482d28.avif",
  "a3d5bad7-086f-4884-b5ea-4b5be6576dda.jpg",
  "a6109d23-3783-4ed6-a4c1-23e2e9a6644c.avif",
  "d70a666c-ef44-486f-88ff-48ec77507622.avif",
  "FA1RNESS-today.png",
  "DAONIGHT2024.png",
  "Fairness202416_9.png",
  "fc12882e-c0a2-4f3f-a943-80e900bcf91d.avif",
  "RoadtoDAOATHON4.png",
];

export default function EventCarousel() {
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
                      src={`/${image}`}
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
                      src={`/${image}`}
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
