export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  techStack: string[];
  featured: boolean;
  imageUrl: string;
};