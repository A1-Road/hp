export interface Work {
  id: number;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface News {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  url: string;
  created_at: string;
  updated_at: string;
}

export interface LumaEvent {
  id: string;
  title: string;
  description: string;
  start_time: string;
  end_time: string;
  location: string;
  url: string;
  status: string;
  cover_image_url: string;
}
