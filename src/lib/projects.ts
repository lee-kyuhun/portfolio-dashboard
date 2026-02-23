import projectsData from "@/data/projects.json";
import profileData from "@/data/profile.json";
import { Project, Profile } from "@/types/project";

export function getProjects(): Project[] {
  return projectsData as Project[];
}

export function getProjectById(id: string): Project | undefined {
  return (projectsData as Project[]).find((p) => p.id === id);
}

export function getCategories(): string[] {
  const categories = new Set(projectsData.map((p) => p.category));
  return Array.from(categories);
}

export function getProfile(): Profile {
  return profileData as Profile;
}
