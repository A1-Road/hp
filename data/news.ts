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
    title: "世界的分散型メディア「Bankless Japan」の運営を拝任",
    date: "2024年10月13日",
    excerpt:
      "2024年10月14日この度、A1Roadは、グローバル分散型メディアである「Bankless」の日本支部であるBankless Japanの運営を正式に拝命いたしました。Banklessは、Web3や分散型金融（DeFi）をはじめとする最...",
    content: `<p>2024年10月14日この度、A1Roadは、グローバル分散型メディアである「Bankless」の日本支部であるBankless Japanの運営を正式に拝命いたしました。Banklessは、Web3や分散型金融（DeFi）をはじめとする最新技術やカルチャーに関する情報を発信するメディアです。今後、A1RoadはBankless Japanとして、日本のWeb3コミュニティに価値ある情報と洞察を提供してまいります。</p>`,
    image: "/placeholder.svg?height=600&width=1200",
    category: "運営",
    slug: "bankless-japan-operation",
  },
  {
    id: "2",
    title:
      "ビジネスとしてのDAO活用法を探るワークショップイベント「FA1RNESS 2024」を開催",
    date: "2024年09月21日",
    excerpt:
      "DAO（自律分散型組織）の事業活用可能性をさぐり、一般社会へWeb3のオンボーディングを目指したミニイベントを開催いたしました。2024年8月20日、Google for Startups Campus Tokyoにて「FA1RNESS 2...",
    content: `<p>DAO（自律分散型組織）の事業活用可能性をさぐり、一般社会へWeb3のオンボーディングを目指したミニイベントを開催いたしました。2024年8月20日、Google for Startups Campus Tokyoにて「FA1RNESS 2024」と題し、様々な分野の専門家や参加者が集い、DAOの具体的なビジネスモデルや法的課題、技術的側面について活発な議論が交わされました。イベントは大盛況のうちに終了し、参加者からは多くの肯定的なフィードバックが寄せられました。</p>`,
    image: "/placeholder.svg?height=600&width=1200",
    category: "イベント",
    slug: "fairness-2024-workshop",
  },
  {
    id: "3",
    title: "A1 Labs.、AI倫理に関するガイドラインを発表",
    date: "2024年08月15日",
    excerpt:
      "責任あるAI開発と社会実装を目指し、独自の倫理ガイドラインを策定・公開しました。透明性と公平性を重視...",
    content: `<h2>AI倫理ガイドライン策定の背景</h2><p>AI技術の急速な発展に伴い、その利用における倫理的な課題が顕在化しています。A1 Labs.では、技術の恩恵を最大化しつつ、潜在的なリスクを最小限に抑えるため、独自のAI倫理ガイドラインを策定しました。</p><h2>ガイドラインの主要原則</h2><ul><li>人間中心の設計</li><li>公平性と無差別</li><li>透明性と説明責任</li><li>プライバシーとセキュリティ</li><li>社会への貢献</li></ul><p>当社は、このガイドラインに基づき、倫理的な観点からの妥当性を継続的に評価しながらAI開発を進めてまいります。</p>`,
    image: "/placeholder.svg?height=600&width=1200",
    category: "発表",
    slug: "ai-ethics-guideline",
  },
  {
    id: "4",
    title: "Web3技術を活用した新たな研究者支援プラットフォームの構想を発表",
    date: "2024年07月01日",
    excerpt:
      "研究資金調達の透明化と、研究成果のオープンな共有を促進するプラットフォーム「SciChain」の構想を発表...",
    content: `<p>現在の研究資金配分システムや成果発表の仕組みには、依然として中央集権的な課題が存在します。A1 Labs.は、ブロックチェーンとスマートコントラクトを活用し、研究者自身が主体的に資金を調達し、成果をトークン化して共有・評価できる分散型プラットフォーム「SciChain」の構想を発表しました。これにより、研究活動の活性化とイノベーションの加速を目指します。</p>`,
    image: "/placeholder.svg?height=600&width=1200",
    category: "構想",
    slug: "scichain-concept",
  },
  {
    id: "5",
    title: "地方創生DAOプロジェクトが経済産業省の支援プログラムに採択",
    date: "2024年06月10日",
    excerpt:
      "当社が技術支援を行う地方創生DAOプロジェクトが、経済産業省の推進する「地域DX促進活動支援事業」に採択...",
    content: `<p>A1 Labs.が技術アドバイザリーとして参画している、地域資源を活用した持続可能な観光モデルを目指すDAOプロジェクトが、経済産業省の「地域DX促進活動支援事業」に採択されました。ブロックチェーン技術を活用した資金調達（地域トークン発行）や、関係人口の創出に向けた取り組みが評価されました。当社は引き続き、技術面でのサポートを通じてプロジェクトの成功に貢献してまいります。</p>`,
    image: "/placeholder.svg?height=600&width=1200",
    category: "採択",
    slug: "regional-dao-support",
  },
  {
    id: "6",
    title: "AIによるコード生成アシスタント「CodeGenius」ベータ版公開",
    date: "2024年05月20日",
    excerpt:
      "開発者の生産性向上を目的としたAIコード生成アシスタント「CodeGenius」のベータ版を社内開発者向けに公開...",
    content: `<p>自然言語による指示から、高品質なコードスニペットを生成するAIアシスタント「CodeGenius」のベータ版を公開しました。特定のフレームワークやライブラリに特化した学習を行い、より実践的なコード生成を目指しています。今後、フィードバックを元に改良を進め、外部公開も視野に入れています。</p>`,
    image: "/placeholder.svg?height=600&width=1200",
    category: "開発",
    slug: "codegenius-beta",
  },
];

export async function getNewsDetailsBySlug(
  slug: string,
): Promise<NewsItemDetail | null> {
  return allNewsItems.find((item) => item.slug === slug) || null;
}

export async function getRelatedNewsItems(
  currentSlug: string,
  limit: number = 3,
): Promise<NewsItem[]> {
  return allNewsItems
    .filter((item) => item.slug !== currentSlug)
    .slice(0, limit);
}

export async function getNewsItems(limit?: number): Promise<NewsItem[]> {
  const items = allNewsItems.sort(
    (a, b) =>
      new Date(b.date.replace(/\./g, "-")).getTime() -
      new Date(a.date.replace(/\./g, "-")).getTime(),
  );
  return limit ? items.slice(0, limit) : items;
}

export async function getAllNewsSlugs(): Promise<string[]> {
  return allNewsItems.map((item) => item.slug);
}
