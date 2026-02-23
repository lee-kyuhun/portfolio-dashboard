import Link from "next/link";
import { Project } from "@/types/project";
import { getGradient, statusColor } from "@/lib/utils";
import Footer from "@/components/Footer";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="mx-auto max-w-3xl px-4">
      {/* S-02-A: 뒤로가기 내비게이션 */}
      <div className="py-6">
        <Link
          href="/"
          className="text-sm text-nm-muted transition-colors duration-200 hover:text-nm-accent"
        >
          &larr; 모든 프로젝트
        </Link>
      </div>

      {/* S-02-B: 프로젝트 헤더 카드 */}
      <div className="overflow-hidden rounded-2xl bg-nm-bg shadow-nm-card">
        {/* 그래디언트 썸네일 */}
        <div
          className={`flex aspect-video w-full items-center justify-center bg-gradient-to-br ${getGradient(project.id)} text-5xl font-bold text-white/60`}
        >
          {project.title.charAt(0)}
        </div>

        {/* 헤더 정보 */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-2xl font-bold text-nm-text">{project.title}</h1>
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${statusColor[project.status] ?? "bg-gray-100 text-gray-500"}`}
            >
              {project.status}
            </span>
          </div>

          <p className="mt-2 text-base text-nm-muted">{project.description}</p>

          {/* 기간 — period가 있을 때만 표시 */}
          {project.period && (
            <p className="mt-1 text-sm text-nm-muted">{project.period}</p>
          )}

          {/* 카테고리 + 기술 스택 태그 행 — 전체 표시 (4개 제한 없음) */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            <span className="rounded-lg bg-nm-bg px-2 py-0.5 text-xs text-nm-muted shadow-nm-pressed">
              {project.category}
            </span>
            {project.techStack?.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-nm-bg px-2 py-0.5 text-xs text-nm-muted shadow-nm-pressed"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* S-02-C: 프로젝트 상세 카드 */}
      <div className="mt-6 rounded-2xl bg-nm-bg p-6 shadow-nm-flat">
        {/* 핵심 기능 — highlights가 있을 때만 표시 */}
        {project.highlights && project.highlights.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-nm-text">핵심 기능</h2>
            <ul className="mt-3 space-y-2">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-nm-text">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nm-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 링크 섹션 */}
        {(project.url || project.githubUrl) && (
          <div className={project.highlights && project.highlights.length > 0 ? "mt-6" : ""}>
            <h2 className="text-lg font-semibold text-nm-text">링크</h2>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-nm-bg px-4 py-2.5 text-sm text-nm-text shadow-nm-flat transition-all duration-200 hover:text-nm-accent hover:shadow-nm-card"
                >
                  서비스 바로가기
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-nm-bg px-4 py-2.5 text-sm text-nm-text shadow-nm-flat transition-all duration-200 hover:text-nm-accent hover:shadow-nm-card"
                >
                  GitHub 저장소
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      {/* S-02-D: Footer */}
      <Footer />
    </div>
  );
}
