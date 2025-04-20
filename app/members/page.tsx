import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { Metadata } from "next";
import { getMembers } from "@/actions/members";
import type { Member } from "@/lib/supabase";

function MemberCard({ name, role, bio, expertise, image_url, social }: Member) {
  return (
    <div className="floating-card overflow-hidden">
      <div className="aspect-square relative">
        <Image src={image_url || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-primary font-medium mb-4">{role}</p>
        <p className="text-muted-foreground mb-4">{bio}</p>

        <h4 className="font-bold text-sm mb-2">専門領域</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {expertise.map((skill) => (
            <span
              key={skill}
              className="bg-beige-200 text-foreground px-2 py-1 rounded-full text-xs"
            >
              {skill}
            </span>
          ))}
        </div>

        {social && (
          <div className="flex gap-3">
            {social.twitter && (
              <Link
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            )}
            {social.linkedin && (
              <Link
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            )}
            {social.github && (
              <Link
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "メンバー紹介 | エーワンロード株式会社",
  description:
    "エーワンロード株式会社のメンバー紹介。AI、ブロックチェーン、Web3の専門家が集結しています。",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "メンバー紹介",
      description: "エーワンロード株式会社のメンバー紹介",
      publisher: {
        "@type": "Organization",
        name: "エーワンロード株式会社",
        url: "https://a1road.com",
        logo: {
          "@type": "ImageObject",
          url: "https://a1road.com/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://a1road.com/members",
      },
    }),
  },
};

export default async function Members() {
  const members = await getMembers();

  return (
    <div className="pt-24">
      <section className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">メンバー紹介</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AIとWeb3の専門知識を持つ多様なメンバーが、お客様のデジタル変革を支援します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <MemberCard key={member.id} {...member} />
          ))}
        </div>
      </section>

      {/* チームカルチャーセクション */}
      <section className="bg-beige-100 py-16 md:py-24 my-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">チームカルチャー</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="floating-card p-6 bg-white">
              <h3 className="text-xl font-bold mb-4">技術と人間性の融合</h3>
              <p className="text-muted-foreground">
                最先端技術の追求と同時に、人間中心の価値観を大切にします。
                テクノロジーは人々の生活をより豊かにするための手段であり、
                常に利用者の視点に立ったソリューション開発を心がけています。
              </p>
            </div>

            <div className="floating-card p-6 bg-white">
              <h3 className="text-xl font-bold mb-4">継続的な学習と成長</h3>
              <p className="text-muted-foreground">
                急速に進化するAIとWeb3の分野で最前線に立ち続けるため、
                チーム全体で学習と知識共有を重視しています。
                週次の技術勉強会や外部カンファレンスへの積極的な参加を推奨しています。
              </p>
            </div>

            <div className="floating-card p-6 bg-white">
              <h3 className="text-xl font-bold mb-4">多様性と協働</h3>
              <p className="text-muted-foreground">
                異なるバックグラウンドや専門知識を持つメンバーが集まり、
                多角的な視点からの問題解決を実現しています。
                技術者だけでなく、業界専門家や研究者との協働を通じて、
                革新的なソリューションを生み出しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 採用情報セクション */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">採用情報</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            私たちと一緒に、AIとWeb3の力で社会をアップデートしていきませんか？
          </p>
        </div>

        <div className="floating-card p-8">
          <h3 className="text-2xl font-bold mb-6">募集ポジション</h3>

          <div className="space-y-6">
            <div className="border-b pb-6">
              <h4 className="text-xl font-bold mb-2">AIエンジニア</h4>
              <p className="text-muted-foreground mb-4">
                LLMの活用や機械学習モデルの開発・運用経験を持ち、
                産業向けAIソリューションの開発に携わっていただきます。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-beige-200 text-foreground px-2 py-1 rounded-full text-xs">
                  Python
                </span>
                <span className="bg-beige-200 text-foreground px-2 py-1 rounded-full text-xs">
                  機械学習
                </span>
                <span className="bg-beige-200 text-foreground px-2 py-1 rounded-full text-xs">
                  LLM
                </span>
                <span className="bg-beige-200 text-foreground px-2 py-1 rounded-full text-xs">
                  TensorFlow/PyTorch
                </span>
              </div>
            </div>

            <div className="border-b pb-6">
              <h4 className="text-xl font-bold mb-2">ブロックチェーンエンジニア</h4>
              <p className="text-muted-foreground mb-4">
                スマートコントラクト開発やWeb3アプリケーション構築の経験を持ち、
                DAOプラットフォームやウォレットレス認証技術の開発に取り組んでいただきます。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-beige-200 text-foreground px-2 py-1 rounded-full text-xs">
                  Solidity
                </span>
                <span className="bg-beige-200 text-foreground px-2 py-1 rounded-full text-xs">
                  Web3.js/ethers.js
                </span>
                <span className="bg-beige-200 text-foreground px-2 py-1 rounded-full text-xs">
                  スマートコントラクト
                </span>
                <span className="bg-beige-200 text-foreground px-2 py-1 rounded-full text-xs">
                  DApps開発
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-2">プロダクトマネージャー</h4>
              <p className="text-muted-foreground mb-4">
                AIとWeb3技術を活用した製品開発の経験を持ち、
                顧客ニーズの理解からプロダクト設計、開発チームのマネジメントまで担当していただきます。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-beige-200 text-foreground px-2 py-1 rounded-full text-xs">
                  プロダクト戦略
                </span>
                <span className="bg-beige-200 text-foreground px-2 py-1 rounded-full text-xs">
                  アジャイル開発
                </span>
                <span className="bg-beige-200 text-foreground px-2 py-1 rounded-full text-xs">
                  UX設計
                </span>
                <span className="bg-beige-200 text-foreground px-2 py-1 rounded-full text-xs">
                  DX推進
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              詳細な募集要項や応募方法については、お問い合わせください。
            </p>
            <Link href="/contact" className="text-primary hover:underline font-medium">
              採用に関するお問い合わせはこちら
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
