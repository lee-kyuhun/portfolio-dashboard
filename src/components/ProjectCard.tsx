import Link from "next/link";
import { Project } from "@/types/project";
import { getGradient, statusColor } from "@/lib/utils";

const TECH_STACK_LIMIT = 4;

export default function ProjectCard({ project }: { project: Project }) {
  const visibleStack = project.techStack?.slice(0, TECH_STACK_LIMIT) ?? [];
  const overflowCount = (project.techStack?.length ?? 0) - TECH_STACK_LIMIT;

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block overflow-hidden rounded-2xl bg-nm-bg shadow-nm-flat transition-shadow duration-300 hover:shadow-nm-card"
    >
      <div
        className={`flex aspect-video w-full items-center justify-center bg-gradient-to-br ${getGradient(project.id)} text-3xl font-bold text-white/60`}
      >
        {project.title.charAt(0)}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-nm-text">{project.title}</h3>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusColor[project.status] ?? "bg-gray-100 text-gray-500"}`}
          >
            {project.status}
          </span>
        </div>
        <p className="mt-1 text-sm text-nm-muted line-clamp-2">
          {project.description}
        </p>
        <span className="mt-2 inline-block rounded-lg bg-nm-bg px-2 py-0.5 text-xs text-nm-muted shadow-nm-pressed">
          {project.category}
        </span>

        {/* 기술 스택 태그 행 — techStack이 있을 때만 표시 */}
        {visibleStack.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {visibleStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-nm-bg px-2 py-0.5 text-xs text-nm-muted shadow-nm-pressed"
              >
                {tech}
              </span>
            ))}
            {overflowCount > 0 && (
              <span className="rounded-lg bg-nm-bg px-2 py-0.5 text-xs text-nm-muted shadow-nm-pressed">
                +{overflowCount}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
