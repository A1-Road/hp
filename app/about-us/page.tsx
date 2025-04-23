"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsBuilding } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function AboutUs() {
  return (
    <div className="pt-24">
      {/* メインセクション */}
      <section className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            エーワンロード株式会社の理念とビジョン、概要をご紹介します
          </p>
        </div>
      </section>

      {/* 創業理念セクション */}
      <section id="philosophy" className="py-16 bg-beige-50/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">創業理念</h2>
              <div className="glass-card p-8 rounded-xl space-y-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-center">
                    あらゆる隠された価値を発掘し、世に伝える語り部となる
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    私たちは、これまで語られなかった価値を次世代に残す使命を担っています。多くの素晴らしい技術や知識が埋もれ、正当に評価されずに過ぎ去っています。私たちはこれらの価値をデジタル技術（AI・ブロックチェーン）を活用して、効率的に可視化し、伝えることを目指します。これにより、業界全体のデジタルトランスフォーメーション（DX）を推進し、日本の強みが未来の社会で、そして世界で強力な競争力を発揮する基盤を作ります。技術の力で、これまでの障壁を突破し、過去の遺産を今の時代に活かす仕組みを作り上げます。
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-center">
                    すべての人が自由に挑戦し成長できる世界を創造する
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    私たちは、最先端のAIとブロックチェーン技術を駆使し、すべての人々が平等に挑戦できる環境を提供します。技術の力で、これまでアクセスできなかったリソースや情報を誰もが活用できるようにし、挑戦することが当たり前の社会を実現します。技術と知識の革新を継続的に生み出し、次世代の製造業を支えるためのプラットフォームを築きます。革新性と持続可能な成長を実現するため、常に最前線を走り続けます。
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* MVVセクション */}
      <section id="mvv" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">MVV</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mission・Vision・Valueを通じて、私たちの目指す方向性をご紹介します
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="card-3d h-full p-8 bg-white">
                <h3 className="text-2xl font-bold mb-4 text-center">Mission</h3>
                <p className="text-center text-lg mb-6">
                  Create a world where everyone can grow freely, overcoming barriers with accessible
                  technology.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="card-3d h-full p-8 bg-white">
                <h3 className="text-2xl font-bold mb-4 text-center">Vision</h3>
                <p className="text-center text-lg mb-6">
                  To create technology that is used by people as naturally as air.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="card-3d h-full p-8 bg-white">
                <h3 className="text-2xl font-bold mb-4 text-center">Value</h3>
                <p className="text-center text-lg mb-6">
                  Implement the latest technologies into society faster than anyone else. Be a
                  global citizen. Immerse yourself in the user experience. Ship fast, fail fast, and
                  learn fast.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 役員・CEOセクション */}
      <section id="ceo" className="py-16 bg-beige-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">CEOメッセージ</h2>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <AnimatedSection>
              <div className="glass-card p-8 rounded-xl">
                <div className="space-y-6 text-center text-muted-foreground">
                  <p>私の家系は、製造業の発展と共に歩んできました。</p>

                  <p>
                    曽祖父は戦後の混乱期で無電解ニッケルめっき技術を発明し、
                    <br />
                    世界中の製造業に革新をもたらしました。
                    <br />
                    そして私の祖父はハードウェアの開発を通じ富士通で特許を取得しました。
                  </p>

                  <p>
                    彼らの技術は彼らが亡くなっても尚、今日まで多くの技術現場に業界標準として息づいており、
                    <br />
                    その影響は今も広がり続けています。
                  </p>

                  <p>
                    しかし、残念ながら日本には、彼らが築いたような素晴らしい技術や文化が、
                    <br />
                    後継者不足や産業の課題により失われつつある現実があります。
                  </p>

                  <p>
                    私たちの使命は、この貴重な文化や技術、そして知識を、次の世代に確実に継承し、発展させることです。
                  </p>

                  <p>
                    すべての人々のポテンシャルを「解放」し、先人が守り継いできた技術や文化を発展させ、次世代の革新を生み出し続けるために。
                  </p>

                  <p>
                    私たちが進めるデジタル変革とは、単なる効率化を超えて競争力を強化し、グローバルで勝てる技術を次世代に受け継いでいくことです。
                    <br />
                    これにより「Japan as
                    No.1」を取り戻し、世界中で競争力のある製品やサービスが生まれる土台を作ります。
                  </p>

                  <p>
                    日本が誇る産業をさらに強化し、世界中の人々をより豊かにするために。
                    <br />
                    そしてまだ語られていない価値の語り部として、人々の生きた証を次世代に継承するために。
                    <br />
                    私たちは全力を尽くしていきます。
                  </p>

                  <div className="mt-12">
                    <p className="mb-4">エーワンロード株式会社 代表取締役</p>
                    <p className="text-2xl font-bold">田村 一馬</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="card-3d overflow-hidden rounded-2xl bg-white">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 flex items-center justify-center p-4">
                    <div className="relative w-48 h-48 md:w-56 md:h-56">
                      <Image
                        src="/kaz.png"
                        alt="田村 一馬"
                        fill
                        className="object-cover object-center rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold mb-2">田村 一馬</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Web3、DAO、マーケティング領域において多面的な経験と成果を蓄積。大学在学中の起業により国内外アクセラレーター、ピッチコンテストで実績を重ねる。日本・アジア・世界のWeb3普及に向けてコミュニティ活動を展開し、アジア初のDAOハッカソン「THE
                      DAO-A-THON」を主催し、Bankless
                      Japanでのリサーチやコンテンツ制作を展開。Pacific
                      Meta時代について、スクウェア・エニックス、Chainlinkなどに対するGo-to-market戦略やトークノミクス設計によりインド・ベトナム地域でユーザー獲得数95%増を達成。
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section id="company" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">企業概要</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <dl className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2">
                  <dt className="font-semibold text-gray-700">会社名</dt>
                  <dd>エーワンロード株式会社（設立準備中）</dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2">
                  <dt className="font-semibold text-gray-700">設立日</dt>
                  <dd>2025年5月10日（予定）</dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2">
                  <dt className="font-semibold text-gray-700">代表取締役</dt>
                  <dd>田村 一馬</dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2">
                  <dt className="font-semibold text-gray-700">従業員数</dt>
                  <dd>5名（業務委託含）</dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2">
                  <dt className="font-semibold text-gray-700">連絡先</dt>
                  <dd>
                    <div>Email: admin@a1-road.com</div>
                    <div>TEL: 080-4870-5690</div>
                  </dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2">
                  <dt className="font-semibold text-gray-700">主要取引銀行</dt>
                  <dd>住信SBIネット銀行</dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2">
                  <dt className="font-semibold text-gray-700">事業内容</dt>
                  <dd>
                    事業者向けソフトウェア開発・保守・運用ならびに
                    <br />
                    AI/Web3等の研修・導入支援・コンサルティング
                  </dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2">
                  <dt className="font-semibold text-gray-700">東京本社</dt>
                  <dd>〒150-0002 東京都渋谷区渋谷3-27-1 100BANCH</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
