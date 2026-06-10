export type Category = 
  | 'ABOUT ME' 
  | 'DESIGN' 
  | 'VIDEO' 
  | 'PHOTOGRAPHY' 
  | 'SEO' 
  | 'PAID MEDIA' 
  | 'AUTOMATION' 
  | 'CONTACT';

export interface Project {
  id: string;
  title: string;
  category: Category;
  subCategory?: string;
  imageUrl: string;
  videoUrl?: string;
  externalUrl?: string;
  webUrl?: string;
  subtitle?: string;
  description?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Language {
  name: string;
  level: string;
}
