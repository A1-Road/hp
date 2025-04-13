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
    title: "The Future of Decentralized AI",
    excerpt: "Exploring the synergy between AI and blockchain technology.",
    image: "/placeholder.svg?height=200&width=200",
    category: "AI & Blockchain",
    slug: "decentralized-ai",
    content: `<p>Detailed content about the future of decentralized AI...</p><p>More details exploring the synergy...</p>`,
  },
  {
    id: "2",
    title: "Web3 Integration Strategies for Enterprises",
    excerpt: "How businesses can leverage Web3 for growth and innovation.",
    image: "/placeholder.svg?height=200&width=200",
    category: "Web3 Adoption",
    slug: "web3-enterprise",
    content: `<p>Detailed content about Web3 integration strategies...</p><p>Exploring how businesses can leverage Web3...</p>`,
  },
  {
    id: "3",
    title: "Ethical Considerations in AI Development",
    excerpt:
      "Navigating the complex ethical landscape of artificial intelligence.",
    image: "/placeholder.svg?height=200&width=200",
    category: "AI Ethics",
    slug: "ai-ethics",
    content: `<p>Detailed content about ethical considerations in AI...</p><p>Navigating the complex landscape...</p>`,
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
): Promise<Achievement[]> {
  return allAchievements
    .filter((achievement) => achievement.slug !== currentSlug)
    .slice(0, 3);
}
