// src/components/Tag.tsx

type TagProps = {
  children: string;
};

const TAG_STYLES: Record<string, string> = {
  React: "border-cyan-400/25 bg-cyan-400/10 text-cyan-200",
  TypeScript: "border-blue-400/25 bg-blue-400/10 text-blue-200",
  PostgreSQL: "border-sky-400/25 bg-sky-400/10 text-sky-200",
  Prisma: "border-indigo-400/25 bg-indigo-400/10 text-indigo-200",
  "Node.js": "border-green-400/25 bg-green-400/10 text-green-200",
  tRPC: "border-purple-400/25 bg-purple-400/10 text-purple-200",
  Tailwind: "border-teal-400/25 bg-teal-400/10 text-teal-200",
  Railway: "border-white/20 bg-white/10 text-white/70",
  Express: "border-zinc-400/25 bg-zinc-400/10 text-zinc-200",
  Java: "border-orange-400/25 bg-orange-400/10 text-orange-200",
  Python: "border-yellow-400/25 bg-yellow-400/10 text-yellow-200",
  SQL: "border-blue-300/25 bg-blue-300/10 text-blue-100",
};

export default function Tag({ children }: TagProps) {
  return (
    <span
      className={`
        rounded-full border px-2.5 py-1
        font-mono text-[10px] tracking-wide
        ${TAG_STYLES[children] ?? "border-white/10 bg-white/[0.04] text-white/50"}
      `}
    >
      {children}
    </span>
  );
}
