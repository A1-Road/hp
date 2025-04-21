"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsBuilding } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useEffect, useState } from "react";
import type { Member } from "@/types/database";

interface MemberCardProps {
  member: Member;
  index: number;
}

function MemberCard({ member, index }: MemberCardProps) {
  return (
    <AnimatedSection delay={index * 100}>
      <div className="card-3d h-full overflow-hidden rounded-2xl">
        <div className="relative h-64">
          <Image
            src={member.image_url || "/placeholder-user.jpg"}
            alt={member.name}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="font-bold text-xl">{member.name}</h3>
            <p className="text-sm">{member.title}</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-muted-foreground">{member.bio}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function AboutUs() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMembers() {
      try {
        const response = await fetch("/api/members");
        if (response.ok) {
          const data = await response.json();
          setMembers(data);
        }
      } catch (error) {
        console.error("Failed to fetch members:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMembers();
  }, []);

  return (
    <div className="pt-24">
      {/* メインセクション */}
      <section className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AIとWeb3で社会の屋台骨をアップデートする、エーワンロード株式会社の理念とビジョンをご紹介します
          </p>
        </div>
      </section>

      {/* 創業理念セクション */}
      <section id="philosophy" className="py-16 bg-beige-50/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">創業理念</h2>
              <div className="glass-card p-8 rounded-xl">
                <p className="text-xl text-center mb-6 font-medium">
                  「テクノロジーの力で、日本の産業基盤を強くする」
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  私たちエーワンロード株式会社は、AIとWeb3技術を融合させることで、日本の製造業、建設業、観光業の課題を解決し、グローバル競争力を高めることを使命としています。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  長年の経験と蓄積された知見を持つ日本の基幹産業に、最先端のテクノロジーを導入することで、効率性と透明性を高め、新たな価値創造を実現します。
                  私たちは技術の民主化を通じて、誰もがイノベーションを起こせる環境を創出し、持続可能な社会の実現に貢献します。
                </p>
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
                <p className="text-center text-lg mb-6">AIとWeb3で、日本の産業を革新する</p>
                <p className="text-muted-foreground">
                  製造業、建設業、観光業といった日本の基幹産業に最先端技術を導入し、
                  グローバル市場での競争力を強化します。技術の力で業務効率を向上させ、
                  新たな価値創造を実現することで、持続可能な産業基盤の構築に貢献します。
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="card-3d h-full p-8 bg-white">
                <h3 className="text-2xl font-bold mb-4 text-center">Vision</h3>
                <p className="text-center text-lg mb-6">
                  テクノロジーと産業の融合による、持続可能な社会の実現
                </p>
                <p className="text-muted-foreground">
                  AIやWeb3といった先端技術を、各業界の特性に合わせて最適化し、
                  実践的なソリューションとして提供します。技術の民主化を通じて、
                  誰もがイノベーションを起こせる環境を創出し、日本の産業全体の
                  デジタル変革を推進します。
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="card-3d h-full p-8 bg-white">
                <h3 className="text-2xl font-bold mb-4 text-center">Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">実践性：</span>
                    <p className="text-muted-foreground">
                      理論だけでなく、現場で使える実践的なソリューションを提供します。
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">透明性：</span>
                    <p className="text-muted-foreground">
                      Web3の思想に基づき、すべてのプロセスとデータの透明性を大切にします。
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">共創：</span>
                    <p className="text-muted-foreground">
                      クライアントとの対話と協力を通じて、最適な解決策を共に創り出します。
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">持続可能性：</span>
                    <p className="text-muted-foreground">
                      短期的な成果だけでなく、長期的に持続可能なソリューションを提供します。
                    </p>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* メンバーセクション */}
      <section id="members" className="py-16 bg-beige-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">メンバー</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AIとWeb3の専門知識を持つプロフェッショナルチーム
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              // ローディング状態
              Array(3)
                .fill(0)
                .map((_, index) => (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="h-96 animate-pulse bg-white/50 backdrop-blur-sm rounded-2xl"></div>
                  </AnimatedSection>
                ))
            ) : members && members.length > 0 ? (
              // データ取得成功
              members.map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} />
              ))
            ) : (
              // フォールバックデータ
              <>
                <MemberCard
                  member={{
                    id: 1,
                    name: "Kaz Tamura",
                    title: "Co-Founder & CEO",
                    bio: "AIとWeb3の専門家。複数のスタートアップを立ち上げた経験を持ち、テクノロジーを活用した社会課題解決に取り組む。",
                    image_url: "/placeholder-user.jpg",
                    twitter: "https://twitter.com/",
                    linkedin: "https://linkedin.com/",
                  }}
                  index={0}
                />
                <MemberCard
                  member={{
                    id: 2,
                    name: "山田 太郎",
                    title: "Co-Founder & CTO",
                    bio: "大手IT企業でAIエンジニアとして10年以上の経験を持つ。複数のAIプロジェクトをリードし、Web3領域にも精通。",
                    image_url: "/placeholder-user.jpg",
                    twitter: "https://twitter.com/",
                    linkedin: "https://linkedin.com/",
                  }}
                  index={1}
                />
                <MemberCard
                  member={{
                    id: 3,
                    name: "佐藤 花子",
                    title: "Web3 Developer",
                    bio: "ブロックチェーン技術のスペシャリスト。複数のDAOプロジェクトに参加し、分散型アプリケーション開発に強みを持つ。",
                    image_url: "/placeholder-user.jpg",
                    twitter: "https://twitter.com/",
                    linkedin: "https://linkedin.com/",
                  }}
                  index={2}
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section id="company" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">会社概要</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              <Image src="/a1road-logo.png" width={300} height={300} alt="エーワンロード株式会社" />
            </div>

            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <BsBuilding className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">会社名</h3>
                    <p>エーワンロード株式会社（設立準備中）</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">代表者</h3>
                    <p>Kaz Tamura（田村一馬）</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">設立日</h3>
                    <p>2023年</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">事業内容</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>AIを活用した製造業向け予測分析システムの開発・導入支援</li>
                      <li>Web3技術を活用した建設業向け工程管理・品質保証プラットフォームの構築</li>
                      <li>観光業向けデジタル体験プラットフォームの開発・運営</li>
                      <li>ウォレットレス認証技術の研究開発と実装支援</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MdEmail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">メールアドレス</h3>
                    <p>admin@a1-road.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MdLocationOn className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">所在地</h3>
                    <p>
                      〒225-0013
                      <br />
                      神奈川県横浜市青葉区荏田町1150-34
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
