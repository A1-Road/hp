export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  slug: string;
}

export interface NewsItemDetail extends NewsItem {
  content: string;
}

export const allNewsItems: NewsItemDetail[] = [
  {
    id: "1",
    title: "A1Labs、次世代AIモデル「QuantumMind」を発表",
    date: "2024年3月15日",
    excerpt: "量子コンピューティングに着想を得た新しいAIアーキテクチャを発表。",
    content: `<p>A1Labsは本日、量子コンピューティングの原理に着想を得た画期的なAIモデル「QuantumMind」を発表しました。...</p><p>QuantumMindは、複雑な問題解決や大規模データ分析において、これまでにない速度と精度を提供します...</p>`,
    image: "/placeholder.svg?height=600&width=1200",
    category: "AI開発",
    slug: "quantummind-release",
  },
  {
    id: "2",
    title: "Web3セキュリティカンファレンス「SecureChain 2024」に登壇",
    date: "2024年2月28日",
    excerpt:
      "当社CEOがスマートコントラクト監査の最新動向について講演しました。",
    content: `<p>先週開催された主要なWeb3セキュリティカンファレンス「SecureChain 2024」にて、当社CEOの [CEO名] が基調講演を行いました。...</p>`,
    image: "/placeholder.svg?height=600&width=1200",
    category: "イベント",
    slug: "securechain-2024",
  },
  {
    id: "3",
    title: "DeFiプラットフォーム「AetherSwap」との提携を発表",
    date: "2024年1月10日",
    excerpt:
      "AetherSwapの流動性プールにAIベースのリスク管理ソリューションを提供します。",
    content: `<p>A1Labsは、大手DeFiプラットフォームであるAetherSwapとの戦略的パートナーシップを発表しました。...</p>`,
    image: "/placeholder.svg?height=600&width=1200",
    category: "パートナーシップ",
    slug: "aetherswap-partnership",
  },
  {
    id: "4",
    title: "AI倫理に関するホワイトペーパー公開",
    date: "2023年12月1日",
    excerpt: "責任あるAI開発のためのガイドラインとベストプラクティスを公開。",
    content: `<p>A1Labsは、AI技術の責任ある開発と利用に関する当社のコミットメントを示すホワイトペーパーを公開しました。...</p>`,
    image: "/placeholder.svg?height=600&width=1200",
    category: "研究",
    slug: "ai-ethics-whitepaper",
  },
  {
    id: "5",
    title: "分散型ストレージソリューション「DataSphere」ベータ版",
    date: "2023年11月5日",
    excerpt: "高セキュリティ・高可用性の分散型ストレージのベータテストを開始。",
    content: "<p>DataSphereベータ版に関する詳細なコンテンツ。</p>",
    image: "/placeholder.svg?height=600&width=1200",
    category: "製品リリース",
    slug: "datasphere-beta",
  },
  {
    id: "6",
    title: "AI市場予測ツールの精度向上",
    date: "2023年10月18日",
    excerpt: "機械学習モデル改良により、市場予測精度が15%向上。",
    content: "<p>AI市場予測ツールのアップデートに関する詳細なコンテンツ。</p>",
    image: "/placeholder.svg?height=600&width=1200",
    category: "アップデート",
    slug: "market-predictor-update",
  },
  {
    id: "7",
    title: "Web3ゲーム開発者向け助成金プログラム",
    date: "2023年9月22日",
    excerpt: "革新的なWeb3ゲーム開発支援のため、総額100万ドルの助成金を開始。",
    content:
      "<p>Web3ゲーム開発者向け助成金プログラムに関する詳細なコンテンツ。</p>",
    image: "/placeholder.svg?height=600&width=1200",
    category: "コミュニティ",
    slug: "web3-gaming-grant",
  },
  {
    id: "8",
    title: "TechCrunch Disrupt 最優秀AIスタートアップ選出",
    date: "2023年8月30日",
    excerpt: "世界最大級テックカンファレンスで当社の技術力が評価。",
    content: "<p>TechCrunch Disruptでの受賞に関する詳細なコンテンツ。</p>",
    image: "/placeholder.svg?height=600&width=1200",
    category: "受賞",
    slug: "techcrunch-disrupt-award",
  },
  {
    id: "9",
    title: "NFTマーケットプレイス「Artify」との技術提携",
    date: "2023年7月12日",
    excerpt:
      "ArtifyにAI不正検出システムを提供し、プラットフォーム安全性を強化。",
    content: "<p>Artifyとの技術提携に関する詳細なコンテンツ。</p>",
    image: "/placeholder.svg?height=600&width=1200",
    category: "パートナーシップ",
    slug: "artify-partnership",
  },
  {
    id: "10",
    title: "ゼロ知識証明に関する研究論文発表",
    date: "2023年6月25日",
    excerpt: "プライバシー保護技術 ZKP の新たな応用に関する研究論文を発表。",
    content: "<p>ゼロ知識証明の研究論文に関する詳細なコンテンツ。</p>",
    image: "/placeholder.svg?height=600&width=1200",
    category: "研究",
    slug: "zkp-research-paper",
  },
  {
    id: "11",
    title: "開発者向けドキュメントサイトリニューアル",
    date: "2023年5月9日",
    excerpt: "APIやSDKドキュメントを刷新し、より使いやすく分かりやすく。",
    content:
      "<p>開発者向けドキュメントサイトのリニューアルに関する詳細なコンテンツ。</p>",
    image: "/placeholder.svg?height=600&width=1200",
    category: "お知らせ",
    slug: "dev-docs-renewal",
  },
  {
    id: "12",
    title: "A1Labs、シリーズAで2,000万ドル資金調達完了",
    date: "2023年4月1日",
    excerpt: "AIとWeb3技術の研究開発・事業拡大を加速。",
    content: "<p>シリーズA資金調達に関する詳細なコンテンツ。</p>",
    image: "/placeholder.svg?height=600&width=1200",
    category: "資金調達",
    slug: "series-a-funding",
  },
];

export async function getNewsDetailsBySlug(
  slug: string,
): Promise<NewsItemDetail | null> {
  return allNewsItems.find((item) => item.slug === slug) || null;
}

export async function getRelatedNewsItems(
  currentSlug: string,
): Promise<NewsItem[]> {
  return allNewsItems.filter((item) => item.slug !== currentSlug).slice(0, 3);
}

export async function getNewsItems(limit?: number): Promise<NewsItem[]> {
  const items = allNewsItems;
  return limit ? items.slice(0, limit) : items;
}
