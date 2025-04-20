export interface Work {
  id: number;
  title: string;
  description: string;
  image_url: string;
  technologies: string[];
  features: string[];
  results?: string;
  created_at: string;
  updated_at: string;
}
