export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  githubUrl?: string;
  category: string;
  status: "운영중" | "개발중" | "계획중" | "중단";
  techStack?: string[];
  period?: string;
  highlights?: string[];
}

export interface Profile {
  name: string;
  tagline: string;
  links: {
    github?: string;
    email?: string;
    linkedin?: string;
  };
}
