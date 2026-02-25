"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { getGradient, statusColor } from "@/lib/utils";
import Footer from "@/components/Footer";

export default function ProjectDetail({ project }: { project: Project }) {
  const hasThumbnail = project.thumbnail && project.thumbnail.length > 0;

  return (
    <div className="mx-auto max-w-3xl px-6">
      {/* Back navigation */}
      <div className="py-6">
        <Link
          href="/"
          className="font-mono text-sm text-accent hover:underline transition-colors"
        >
          &larr; 모든 프로젝트
        </Link>
      </div>

      {/* Project header card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden rounded-lg border border-navy-lighter bg-navy-light"
      >
        {/* Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden">
          {hasThumbnail ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              sizes="768px"
              priority
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${getGradient(project.id)}`}
            >
              <span className="text-6xl font-bold text-white/20">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Header info */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-2xl font-bold text-slate-lightest">
              {project.title}
            </h1>
            <span
              className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColor[project.status] ?? "border-gray-400/50 text-gray-400"}`}
            >
              {project.status}
            </span>
          </div>

          <p className="mt-3 text-base text-slate leading-relaxed">
            {project.description}
          </p>

          {project.period && (
            <p className="mt-2 font-mono text-sm text-slate/60">
              {project.period}
            </p>
          )}

          {/* Category + Tech stack tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded bg-accent-muted px-2.5 py-0.5 font-mono text-xs text-accent">
              {project.category}
            </span>
            {project.techStack?.map((tech) => (
              <span
                key={tech}
                className="rounded bg-navy px-2.5 py-0.5 font-mono text-xs text-slate-light"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Detail card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mt-6 rounded-lg border border-navy-lighter bg-navy-light p-6"
      >
        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-slate-lightest">
              핵심 기능
            </h2>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-slate leading-relaxed"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        {(project.url || project.githubUrl) && (
          <div
            className={
              project.highlights && project.highlights.length > 0
                ? "mt-8 border-t border-navy-lighter pt-6"
                : ""
            }
          >
            <h2 className="text-lg font-semibold text-slate-lightest">링크</h2>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded border border-accent px-4 py-2.5 font-mono text-sm text-accent transition-all hover:bg-accent-muted"
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
                  className="flex items-center gap-2 rounded border border-navy-lighter px-4 py-2.5 font-mono text-sm text-slate-light transition-all hover:border-accent hover:text-accent"
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
      </motion.div>

      <Footer />
    </div>
  );
}
