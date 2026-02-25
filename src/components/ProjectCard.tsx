"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { getGradient, statusColor } from "@/lib/utils";

const TECH_STACK_LIMIT = 4;

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const visibleStack = project.techStack?.slice(0, TECH_STACK_LIMIT) ?? [];
  const overflowCount = (project.techStack?.length ?? 0) - TECH_STACK_LIMIT;
  const hasThumbnail = project.thumbnail && project.thumbnail.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="group block overflow-hidden rounded-lg border border-navy-lighter bg-navy-light transition-all duration-300 hover:border-accent/30 hover:shadow-glow hover:-translate-y-1"
      >
        {/* Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden">
          {hasThumbnail ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${getGradient(project.id)}`}
            >
              <span className="text-4xl font-bold text-white/20">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-slate-lightest group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <span
              className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${statusColor[project.status] ?? "border-gray-400/50 text-gray-400"}`}
            >
              {project.status}
            </span>
          </div>

          <p className="mt-2 text-sm text-slate line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack tags */}
          {visibleStack.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {visibleStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-navy px-2 py-0.5 font-mono text-xs text-slate-light"
                >
                  {tech}
                </span>
              ))}
              {overflowCount > 0 && (
                <span className="rounded bg-navy px-2 py-0.5 font-mono text-xs text-slate">
                  +{overflowCount}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
