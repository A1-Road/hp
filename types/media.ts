export interface MediaArticle {
  id: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  imageUrl?: string;
  youtubeUrl?: string;
  category: "press" | "media";
  tags: string[];
}
