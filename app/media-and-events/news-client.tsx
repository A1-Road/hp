"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { FaCalendarAlt } from "react-icons/fa";
import { formatDate } from "@/lib/utils";

interface NewsItem {
  id: string;
  type: string;
  title: string;
  date: Date;
  image: string;
  url: string;
  excerpt: string;
}

interface Tab {
  id: string;
  label: string;
}

interface NewsClientProps {
  newsItems: NewsItem[];
  tabs: Tab[];
}

export function NewsClient({ newsItems, tabs }: NewsClientProps) {
  const [activeTab, setActiveTab] = useState("all");

  const displayedNewsItems =
    activeTab === "all" ? newsItems : newsItems.filter((item) => item.type === activeTab);

  return (
    <>
      {/* フィルターセクション */}
      <div className="bg-beige-50/80 p-6 rounded-xl shadow-sm mb-8">
        <div className="flex overflow-x-auto pb-2 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeTab === tab.id ? "bg-primary text-white" : "bg-white hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* コンテンツセクション */}
      {displayedNewsItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedNewsItems.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 100}>
              <Link href={item.url}>
                <div className="card-3d h-full overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {item.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <FaCalendarAlt className="mr-2 h-3 w-3" />
                      {formatDate(item.date.toISOString(), true)}
                    </div>

                    <h3 className="font-bold mb-3 line-clamp-2">{item.title}</h3>

                    {item.excerpt && (
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {item.excerpt}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground">選択した条件に一致するコンテンツがありません。</p>
        </div>
      )}
    </>
  );
}
