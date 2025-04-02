export interface IBlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    title: string;
  };
  coverImage: string;
  category: string;
  tags: string[];
  readingTime: string;
  createdAt: string;
  updatedAt: string;
  featured: boolean;
}
