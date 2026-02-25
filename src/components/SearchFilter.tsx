"use client";

interface SearchFilterProps {
  query: string;
  onQueryChange: (q: string) => void;
  categories: string[];
  activeCategory: string;
  onCategoryChange: (c: string) => void;
}

export default function SearchFilter({
  query,
  onQueryChange,
  categories,
  activeCategory,
  onCategoryChange,
}: SearchFilterProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <input
        type="text"
        placeholder="프로젝트 검색..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        className="w-full rounded border border-navy-lighter bg-navy-light px-4 py-2.5 text-sm text-slate-lightest placeholder:text-slate/50 focus:border-accent/50 focus:outline-none sm:max-w-xs"
      />
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange("")}
          className={`rounded px-3 py-1.5 font-mono text-xs transition-all duration-200 ${
            activeCategory === ""
              ? "bg-accent-muted text-accent border border-accent/30"
              : "text-slate border border-navy-lighter hover:text-accent hover:border-accent/30"
          }`}
        >
          전체
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`rounded px-3 py-1.5 font-mono text-xs transition-all duration-200 ${
              activeCategory === cat
                ? "bg-accent-muted text-accent border border-accent/30"
                : "text-slate border border-navy-lighter hover:text-accent hover:border-accent/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
