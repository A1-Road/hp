"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EventCarousel from "@/components/event-carousel";

// ケース
const caseStudies = [
  {
    id: "kei-truck-export",
    title: "日本の軽トラック輸出支援",
    industry: "商用車輸出",
    challenge: [
      "海外で使える商用車を探したいが、日本国内の選択肢が見えづらい",
      "車両の状態や用途適合を判断するための情報が不足しやすい",
      "調達から輸出までの流れが分断され、意思決定に時間がかかる",
    ],
    solution: [
      "用途と仕向地に応じた軽トラック候補の選定",
      "車両状態や仕様の整理による判断材料の可視化",
      "輸出までを見据えた一貫した進行管理",
    ],
    description: `個人・法人向けに、日本国内で流通する軽トラックやユーティリティ車両の中から、用途に合う車両を選定し、輸出までを一貫して支援しています。

車両を単に並べるのではなく、用途、現場条件、必要仕様の観点で情報を再整理することで、導入判断しやすい形に変換。調達と輸出の間にある不透明さを減らしています。

日本国内では当たり前に使われてきた商用車を、海外では新しい選択肢として提示し、日本と世界の現場を接続することを目指しています。`,
    results: [
      "用途に応じた候補車両の比較がしやすくなった",
      "調達から輸出までの意思決定が一気通貫になった",
      "軽トラックの価値を海外市場向けに再定義できた",
    ],
    image: "/hptop.png",
    imagePosition: "left",
  },
  {
    id: "fleet-support",
    title: "法人向け複数台導入支援",
    industry: "法人調達",
    challenge: [
      "複数拠点や複数用途で必要な車両条件が異なる",
      "継続仕入れでは台数、時期、仕様の調整が複雑になる",
      "単発調達ではなく、中長期の導入計画を見据える必要がある",
    ],
    solution: [
      "台数計画と用途に応じた候補整理",
      "導入優先順位に沿った段階的な調達支援",
      "継続運用を前提にした輸出進行の設計",
    ],
    description: `法人向け案件では、車両単体の良し悪しだけでなく、複数台導入時の整合性や仕向地での運用条件まで含めて判断する必要があります。

そのため、車種、台数、納期感、用途を揃えながら、現場ごとに必要な条件を切り分け、調達と輸出の両面から全体設計を行います。

一台ごとの判断ではなく、事業全体の運用に耐える導入を前提に、継続的な仕入れや拡張にもつながる支援を行っています。`,
    results: [
      "複数台導入時の比較観点が明確になった",
      "調達計画と輸出進行を同じ線で管理できるようになった",
      "継続仕入れに向けた体制を整理できた",
    ],
    image: "/workflow.png",
    imagePosition: "right",
  },
  {
    id: "vehicle-sourcing",
    title: "用途別の車両調達と選定支援",
    industry: "車両調達",
    challenge: [
      "同じ軽トラックでも用途によって求める条件が異なる",
      "現場で本当に使える車両かどうかの見極めが難しい",
      "価格だけで選ぶと運用時のミスマッチが起こりやすい",
    ],
    solution: [
      "利用目的に応じた選定条件の言語化",
      "候補車両の仕様と状態の比較整理",
      "導入後の運用を見据えた提案",
    ],
    description: `軽トラックや小型商用車は、サイズの近さだけでは適切に比較できません。荷台の使い方、走行環境、必要装備など、現場ごとの条件を先に整理することが重要です。

エーワンロードでは、候補車両を用途ベースで再整理し、比較の軸を揃えることで、選定時の迷いを減らします。

車両そのものの紹介に留まらず、現場でどう使うかまで含めて判断材料を設計することで、導入後の納得感を高めています。`,
    results: [
      "用途に合わない候補を早い段階で除外できた",
      "必要な仕様の優先順位を共有しやすくなった",
      "価格だけに寄らない調達判断が可能になった",
    ],
    image: "/tool.png",
    imagePosition: "left",
  },
  {
    id: "export-prep",
    title: "輸出前の情報整理と進行管理",
    industry: "輸出オペレーション",
    challenge: [
      "車両選定後に必要情報や確認項目が散らばりやすい",
      "関係者ごとに見ている情報が異なると手戻りが起こる",
      "輸出までの進行が属人的になりやすい",
    ],
    solution: [
      "確認項目を一覧化した輸出前の情報整理",
      "車両ごとの差分が分かる形でのドキュメント化",
      "調達から出荷までを見通せる進行管理",
    ],
    description: `輸出案件では、車両の魅力そのものに加えて、状態、仕様、用途、必要情報が整理されていることが重要です。

そこで、候補車両ごとに判断材料を整理し、関係者の認識を揃えながら、出荷までの流れを可視化します。

情報の粒度を揃えることで、選定後の手戻りを減らし、輸出案件全体の進行を安定させます。`,
    results: [
      "関係者間の認識差分を減らせた",
      "出荷前に必要な確認項目を揃えやすくなった",
      "輸出案件の全体進行を見通しやすくなった",
    ],
    image: "/workflow.png",
    imagePosition: "right",
  },
];

export default function CasePage() {
  return (
    <div className="pt-24">
      {/* ヘッダーセクション */}
      <section className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            弊社が過去に実施した具体的な課題解決の事例をご紹介します
          </p>
        </div>
      </section>

      {/* ケース */}
      {caseStudies.map((caseStudy, index) => (
        <section
          key={caseStudy.id}
          id={caseStudy.id}
          className={`py-16 ${index % 2 === 0 ? "bg-beige-50/50" : ""}`}
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <AnimatedSection>
              <div
                className={`grid md:grid-cols-5 gap-12 items-center ${
                  caseStudy.imagePosition === "right"
                    ? "md:grid-flow-row"
                    : "md:grid-flow-row-dense"
                }`}
              >
                {/* コンテンツ部分 */}
                <div
                  className={`${caseStudy.imagePosition === "right" ? "md:order-1 md:col-span-3" : "md:order-2 md:col-span-3"}`}
                >
                  <div className="space-y-6">
                    <div>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {caseStudy.industry}
                      </span>
                      <h2 className="text-3xl font-bold mt-4 mb-2">{caseStudy.title}</h2>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">課題</h3>
                      <div className="text-muted-foreground space-y-4">
                        {caseStudy.challenge.map((challenge, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-primary font-bold">{idx + 1}.</span>
                            <p>{challenge}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">ソリューション</h3>
                      <div className="text-muted-foreground space-y-4">
                        {caseStudy.solution.map((solution, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-primary font-bold">{idx + 1}.</span>
                            <p>{solution}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">成果</h3>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            {result.startsWith("http") ? (
                              <p>
                                <Link
                                  href={result}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline"
                                >
                                  イベントサイトはこちら
                                </Link>
                              </p>
                            ) : (
                              <p>{result}</p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="rounded-full bg-white text-gray-900 hover:bg-blue-100 hover:scale-105 transition-all duration-200 border border-gray-600"
                        >
                          詳細を見る
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl text-white border-white">
                        <DialogHeader>
                          <DialogTitle className="text-white">{caseStudy.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 text-white">
                          {caseStudy.description.split("\n\n").map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                {/* 画像部分 */}
                <div
                  className={`${caseStudy.imagePosition === "right" ? "md:order-2 md:col-span-2" : "md:order-1 md:col-span-2"}`}
                >
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      width={800}
                      height={500}
                      className="object-contain rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* セミナー・イベント実績セクション */}
      <EventCarousel />
    </div>
  );
}
