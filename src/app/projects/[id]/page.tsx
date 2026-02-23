import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectDetail from "@/components/ProjectDetail";
import { getProjects, getProjectById } from "@/lib/projects";

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return getProjects().map((project) => ({ id: project.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectById(params.id);
  if (!project) {
    return { title: "프로젝트를 찾을 수 없습니다." };
  }
  return {
    title: `${project.title} — Portfolio Dashboard`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
