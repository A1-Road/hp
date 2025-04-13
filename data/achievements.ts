export interface Achievement {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  slug: string;
}

export interface AchievementDetail extends Achievement {
  content: string;
}

export const allAchievements: AchievementDetail[] = [
  {
    id: "1",
    title: "地域活性化のための分散型投票システム開発",
    excerpt:
      "ブロックチェーン技術を活用し、透明性の高い地域意思決定プラットフォームを構築。",
    image: "/placeholder.svg?height=400&width=600",
    category: "Web3導入",
    slug: "decentralized-voting-system",
    content: `<h2>プロジェクト概要</h2><p>地方自治体と協力し、ブロックチェーンベースの安全かつ透明な電子投票システムを開発・導入しました。これにより、住民参加の促進と効率的なガバナンスを目指しました。</p><h2>技術的特徴</h2><ul><li>耐改竄性の高い投票記録</li><li>匿名性を確保した投票プロセス</li><li>スマートフォンアプリからの容易なアクセス</li></ul><p>このプロジェクトは、デジタル技術を活用した新しい地方自治の形を示すモデルケースとして評価されています。</p>`,
  },
  {
    id: "2",
    title: "AIによるサプライチェーン最適化ソリューション",
    excerpt:
      "機械学習モデルを用いて、物流コストの削減とリードタイム短縮を実現。",
    image: "/placeholder.svg?height=400&width=600",
    category: "AI開発",
    slug: "ai-supply-chain-optimization",
    content: `<h2>課題</h2><p>クライアント企業は、複雑化するサプライチェーンにおける非効率な在庫管理と配送遅延に悩まされていました。</p><h2>ソリューション</h2><p>過去の販売データ、輸送記録、天候情報などを分析するAIモデルを開発。需要予測精度を向上させ、最適な在庫レベルと配送ルートを提案することで、コストを15%削減、リードタイムを20%短縮しました。</p>`,
  },
  {
    id: "3",
    title: "DAO組成・運営支援コンサルティング",
    excerpt:
      "Web3スタートアップ企業に対し、トークン設計からコミュニティ運営までの包括的支援を提供。",
    image: "/placeholder.svg?height=400&width=600",
    category: "コンサルティング",
    slug: "dao-consulting-support",
    content: `<h2>支援内容</h2><p>トークノミクス設計、ガバナンスモデル構築、法的枠組みのアドバイス、コミュニティエンゲージメント戦略の立案など、DAO設立と持続可能な運営に必要な要素を全面的にサポートしました。</p><h2>成果</h2><p>支援したスタートアップは、活発なコミュニティを形成し、プロジェクト目標を達成するための分散型ガバナンスを確立しました。</p>`,
  },
  {
    id: "4",
    title: "スマートコントラクト自動監査ツールの開発",
    excerpt:
      "AIを活用し、スマートコントラクトの脆弱性を早期に検知するツールを開発。",
    image: "/placeholder.svg?height=400&width=600",
    category: "セキュリティ",
    slug: "smart-contract-audit-tool",
    content: `<h2>背景</h2><p>スマートコントラクトのセキュリティ不備は甚大な被害をもたらす可能性があります。開発プロセスの初期段階で脆弱性を発見することが重要です。</p><h2>開発ツール</h2><p>既知の脆弱性パターンを学習したAIモデルを組み込み、コードの静的解析と動的解析を組み合わせることで、高精度な自動監査を実現。開発者の負担を軽減し、セキュリティレベルの向上に貢献します。</p>`,
  },
  {
    id: "5",
    title: "教育機関向けWeb3リテラシー向上プログラム提供",
    excerpt:
      "大学生を対象に、ブロックチェーン技術の基礎から応用までを学ぶワークショップを実施。",
    image: "/placeholder.svg?height=400&width=600",
    category: "教育",
    slug: "web3-literacy-program",
    content: `<h2>プログラム内容</h2><p>ブロックチェーンの仕組み、暗号資産、NFT、DAO、スマートコントラクト開発の基礎などをハンズオン形式で提供。次世代を担う人材の育成に貢献しました。</p><p>参加者からは「Web3への理解が深まった」「将来のキャリア選択の参考になった」といった声が寄せられました。</p>`,
  },
];

export async function getAchievementDetailsBySlug(
  slug: string,
): Promise<AchievementDetail | null> {
  return (
    allAchievements.find((achievement) => achievement.slug === slug) || null
  );
}

export async function getRelatedAchievements(
  currentSlug: string,
  limit: number = 3,
): Promise<Achievement[]> {
  return allAchievements
    .filter((achievement) => achievement.slug !== currentSlug)
    .slice(0, limit);
}

export async function getAllAchievements(
  limit?: number,
): Promise<Achievement[]> {
  const items = allAchievements.sort((a, b) => parseInt(a.id) - parseInt(b.id));
  return limit ? items.slice(0, limit) : items;
}

export async function getAllAchievementSlugs(): Promise<string[]> {
  return allAchievements.map((achievement) => achievement.slug);
}
