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
  id: string | number;
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

// CEO information is now defined directly in the component
// and not fetched from Supabase anymore
export interface Member {
  id: number | string;
  name: string;
  title: string;
  bio: string;
  image_url: string;
  twitter?: string;
  linkedin?: string;
}

export interface Contact {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string | null;
  inquiry_type: string;
  message: string;
  privacy_agreed: boolean;
  status: "pending" | "in_progress" | "completed";
  created_at: string;
}
