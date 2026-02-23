export const gradients = [
  "from-indigo-200 to-purple-200",
  "from-sky-200 to-cyan-200",
  "from-amber-200 to-orange-200",
  "from-emerald-200 to-teal-200",
  "from-rose-200 to-pink-200",
  "from-violet-200 to-fuchsia-200",
];

export const statusColor: Record<string, string> = {
  운영중: "bg-green-100 text-green-700",
  개발중: "bg-yellow-100 text-yellow-700",
  계획중: "bg-blue-100 text-blue-700",
  중단: "bg-gray-100 text-gray-500",
};

export function getGradient(id: string): string {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradients[Math.abs(hash) % gradients.length];
}
