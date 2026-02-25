export const gradients = [
  "from-accent/20 to-cyan-500/20",
  "from-blue-500/20 to-purple-500/20",
  "from-emerald-500/20 to-teal-500/20",
  "from-orange-500/20 to-amber-500/20",
  "from-rose-500/20 to-pink-500/20",
  "from-violet-500/20 to-indigo-500/20",
];

export const statusColor: Record<string, string> = {
  운영중: "border-emerald-400/50 text-emerald-400",
  개발중: "border-amber-400/50 text-amber-400",
  계획중: "border-blue-400/50 text-blue-400",
  중단: "border-gray-400/50 text-gray-400",
};

export function getGradient(id: string): string {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradients[Math.abs(hash) % gradients.length];
}
