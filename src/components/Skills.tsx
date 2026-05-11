import { Database, Globe, Layers, Server, Terminal } from "lucide-react";
import { SKILLS } from "../data";
import FadeIn from "./FadeIn";

const SIZE = 18;

const iconClass = "w-[18px] h-[18px] object-contain";

function Logo({ file, alt }: { file: string; alt: string }) {
  return <img src={`/logos/${file}`} alt={alt} className={iconClass} draggable={false} />;
}

const SKILL_ICONS: Record<string, React.ReactNode> = {
  // Frontend
  React: <Logo file="react-original.svg" alt="React" />,

  TypeScript: <Logo file="typescript-original.svg" alt="TypeScript" />,

  Tailwind: <Logo file="tailwindcss-original.svg" alt="Tailwind CSS" />,

  Vite: <Logo file="vitejs-original.svg" alt="Vite" />,

  HTML: <Logo file="html5-original.svg" alt="HTML5" />,

  // Backend
  "Node.js": <Logo file="nodejs-original.svg" alt="Node.js" />,

  Express: <Logo file="express-original.svg" alt="Express" />,

  tRPC: <Logo file="trpc-original.svg" alt="tRPC" />,

  Prisma: <Logo file="prisma-original.svg" alt="Prisma" />,

  // Database / Cloud
  PostgreSQL: <Logo file="postgresql-original.svg" alt="PostgreSQL" />,

  MongoDB: <Logo file="mongodb-original.svg" alt="MongoDB" />,

  Docker: <Logo file="docker-plain.svg" alt="Docker" />,

  AWS: <Logo file="amazonwebservices-plain-wordmark.svg" alt="AWS" />,

  // Languages
  Java: <Logo file="java-original.svg" alt="Java" />,

  Python: <Logo file="python-original.svg" alt="Python" />,

  C: <Logo file="c-original.svg" alt="C" />,

  "C++": <Logo file="cplusplus-original.svg" alt="C++" />,

  Git: <Logo file="git-original.svg" alt="Git" />,

  GitHub: <Logo file="github-original.svg" alt="GitHub" />,
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Frontend: <Layers size={14} />,
  Backend: <Server size={14} />,
  "Database / Cloud": <Database size={14} />,
  Languages: <Terminal size={14} />,
  "Tools & DevOps": <Globe size={14} />,
};

const CATEGORY_STYLES: Record<string, string> = {
  Frontend: "border-cyan-400/10 bg-cyan-400/[0.025] hover:bg-cyan-400/[0.04]",

  Backend: "border-emerald-400/10 bg-emerald-400/[0.025] hover:bg-emerald-400/[0.04]",

  "Database / Cloud": "border-violet-400/10 bg-violet-400/[0.025] hover:bg-violet-400/[0.04]",

  Languages: "border-orange-400/10 bg-orange-400/[0.025] hover:bg-orange-400/[0.04]",

  "Tools & DevOps": "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]",
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-6xl mx-auto">
      <FadeIn>
        <div className="flex items-baseline gap-6 mb-16">
          <h2 className="text-xs font-mono text-white/20 tracking-[0.3em] uppercase">
            02 / Skills
          </h2>

          <div className="h-px flex-1 bg-white/5" />
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/[0.04] border border-white/[0.06]">
        {SKILLS.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.08}>
            <div
              className={`
    p-10
    h-full
    flex
    flex-col
    border
    transition-colors
    duration-300
    ${CATEGORY_STYLES[group.category]}
  `}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 mb-10">
                <span className="text-white/25">{CATEGORY_ICONS[group.category]}</span>

                <h3 className="font-mono text-[10px] text-white/25 tracking-[0.25em] uppercase">
                  {group.category}
                </h3>
              </div>

              {/* Skill List */}
              <ul className="space-y-5 flex-1">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3.5 group/item">
                    <span className="flex-shrink-0 opacity-90 group-hover/item:opacity-100 transition-opacity duration-200">
                      {SKILL_ICONS[item] ?? <Server size={SIZE} className="text-white/30" />}
                    </span>

                    <span className="text-white/50 group-hover/item:text-white/80 text-sm font-light tracking-wide transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
