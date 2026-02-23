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
    <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
      <input
        type="text"
        placeholder="프로젝트 검색..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        className="w-full rounded-xl bg-nm-bg px-4 py-2.5 text-sm text-nm-text shadow-nm-input placeholder:text-nm-muted focus:outline-none focus:ring-2 focus:ring-nm-accent/30 sm:max-w-xs"
      />
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange("")}
          className={`rounded-xl px-4 py-1.5 text-sm transition-all duration-200 ${
            activeCategory === ""
              ? "bg-nm-bg text-nm-accent font-medium shadow-nm-pressed"
              : "bg-nm-bg text-nm-muted shadow-nm-flat hover:shadow-nm-card"
          }`}
        >
          전체
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`rounded-xl px-4 py-1.5 text-sm transition-all duration-200 ${
              activeCategory === cat
                ? "bg-nm-bg text-nm-accent font-medium shadow-nm-pressed"
                : "bg-nm-bg text-nm-muted shadow-nm-flat hover:shadow-nm-card"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
