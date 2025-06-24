"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";

interface Member {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const members: Member[] = [
  {
    id: "masuda",
    name: "増田 健",
    role: "事業顧問",
    description:
      "証券業界での10年以上のキャリアを経て、アマゾンジャパンで金融データ分析を担当。慶應義塾大学MBA、フランスESSECビジネススクールでスタートアップビジネスモデルを研究後、フィンテック協会や多くの企業で経営戦略や事業開発に携わり、デジタルアセット事業やRWA（現物償還型NFT）などの革新的プロジェクトを推進。",
    imageUrl: "/mas.png",
  },
  {
    id: "mizuki",
    name: "楠本 水樹",
    role: "エンジニア",
    description:
      "物理シミュレーション、フルスタックエンジニアリングの分野において幅広なスキルと経験を持つ。東京大学工学部に在学中で、Webアプリ開発や高性能計算（有限要素法、GPU、Fortran、C++）に精通。研究活動を通じて、計算コストに対するパフォーマンスの最大化を追求。",
    imageUrl: "/miz.jpg",
  },
];

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

      {/*  topセクション */}
      <section id="vision" className="py-16 bg-beige-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-center max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center">
                <div className="relative aspect-[3/4] w-full max-w-[300px] mx-auto">
                  <Image
                    src="/HP2copy.png"
                    alt="Kazma"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">あらゆる隠された価値を発掘し</h2>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">世に伝える語り部となる</h2>
              <div className="space-y-6 text-lg">
                <p>
                多くの素晴らしい技術や知識が埋もれ、正当に評価されずに過ぎ去っています。
            
                </p>
                <p>私たちのミッションは、これらを次の世代そして世界へとつなげることです。</p>
                <p>
                だからこそAIなどの最先端技術を通じ、基幹産業のすべてが世界で強力な競争力を取り戻す基盤を作るべく、みなさまと二人三脚で歩んでまいります。
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>



      {/* MVVセクション */}
      <section id="mvv" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">MVV</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="card-3d h-full p-8 bg-white shadow-lg rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-center">Mission</h3>
                <p className="text-center text-lg mb-6">
                  テクノロジーで壁を取り払い、すべての人が自由に挑戦し成長できる世界を創造する。
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="card-3d h-full p-8 bg-white shadow-lg rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-center">Vision</h3>
                <p className="text-center text-lg mb-6">
                  あらゆる隠された価値を発掘し、世に伝える語り部となる
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="card-3d h-full p-8 bg-white shadow-lg rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-center">Value</h3>
                <p className="text-center text-lg mb-6">
                  誰よりも先んじて最新技術を社会実装する
                  <br />
                  地球市民たれ
                  <br />
                  ユーザーに憑依せよ
                  <br />
                  Ship Fast, Fail Fast, Learn fast
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
                    私たちが進めるDXとは、単なる効率化を超えて競争力を強化し、グローバルで勝てる技術を次世代に受け継いでいくことです。
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
              <div className="card-3d overflow-hidden rounded-2xl bg-white shadow-lg">
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
                      Meta時代について、スクウェア・エニックス、Chainlinkなどに対するGo-to-market戦略やトークノミクス設計によりインド・ベトナム地域でユーザー獲得数85%増を達成。
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* メンバーセクション */}
      <section id="members" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">メンバー</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {members.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 100} className="h-full">
                <div className="card-3d bg-white shadow-lg rounded-xl p-6 h-full">
                  <div className="flex flex-col items-center h-full">
                    <div className="relative w-32 h-32 shrink-0 mb-4">
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover object-center rounded-full"
                      />
                    </div>
                    <div className="flex flex-col items-center flex-grow">
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-lg text-muted-foreground mb-2">{member.role}</p>
                      <p className="text-center text-muted-foreground">{member.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
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
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <dl className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2">
                  <dt className="font-semibold text-gray-700">会社名</dt>
                  <dd>エーワンロード株式会社</dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2">
                  <dt className="font-semibold text-gray-700">設立日</dt>
                  <dd>2025年6月</dd>
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
                  <dt className="font-semibold text-gray-700">所在地</dt>
                  <dd>東京都渋谷区渋谷3-27-1 100BANCH</dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2">
                  <dt className="font-semibold text-gray-700">主要取引銀行</dt>
                  <dd>Paypay銀行</dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2">
                  <dt className="font-semibold text-gray-700">法人番号</dt>
                  <dd>9020001140520</dd>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2">
                  <dt className="font-semibold text-gray-700">事業内容</dt>
                  <dd>
                    事業者向けソフトウェア開発・保守・運用ならびに
                    <br />
                    AI/Web3等の研修・導入支援・コンサルティング
                  </dd>
                </div>
          {/* 旧法人情報 */}
          <div className="border-t pt-6 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2">
            <dt className="font-semibold text-gray-700">旧法人名</dt>
            <dd>株式会社Cuniform（キュニフォーム）</dd>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2">
            <dt className="font-semibold text-gray-700">旧所在地</dt>
            <dd>神奈川県横浜市青葉区荏田町1150-34</dd>
          </div>
          {/* 旧法人情報ここまで */}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
