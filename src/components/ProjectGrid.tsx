"use client";

import { useState } from "react";
import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";
import SearchFilter from "./SearchFilter";

export default function ProjectGrid({
  projects,
  categories,
}: {
  projects: Project[];
  categories: string[];
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const filtered = projects.filter((p) => {
    const matchesQuery =
      query === "" ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = activeCategory === "" || p.category === activeCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <section>
      <SearchFilter
        query={query}
        onQueryChange={setQuery}
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-12 text-center text-foreground/40">
          검색 결과가 없습니다.
        </p>
      )}
    </section>
  );
}
