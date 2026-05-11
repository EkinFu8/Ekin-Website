import { Database, Globe, Layers, Server, Terminal } from "lucide-react";

import { SKILLS } from "../data";
import FadeIn from "./FadeIn";

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

function Logo({ file, alt }: { file: string; alt: string }) {
  return (
    <img
      src={`/logos/${file}`}
      alt={alt}
      className="h-[18px] w-[18px] object-contain"
      draggable={false}
    />
  );
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-32">
      <FadeIn>
        <div className="mb-16 flex items-baseline gap-6">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-white/20">
            02 / Skills
          </h2>

          <div className="h-px flex-1 bg-white/5" />
        </div>
      </FadeIn>

      <div className="grid gap-px border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-5">
        {SKILLS.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.08}>
            <div
              className={`
                flex h-full flex-col border p-10 transition-colors duration-300
                ${CATEGORY_STYLES[group.category]}
              `}
            >
              {/* Header */}
              <div className="mb-5 flex items-start gap-2.5 min-h-[32px]">
                <span className="mt-[1px] text-white/25">{CATEGORY_ICONS[group.category]}</span>

                <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/25">
                  {group.category}
                </h3>
              </div>

              {/* Skills */}
              <ul className="flex-1 space-y-5">
                {group.items.map((item) => (
                  <li key={item.name} className="grid grid-cols-[18px_1fr] items-center gap-3.5">
                    <div className="flex h-[18px] w-[18px] items-center justify-center">
                      <Logo file={item.logo} alt={item.name} />
                    </div>

                    <span className="text-sm font-light leading-none tracking-wide text-white/50 transition-colors duration-200 hover:text-white/80">
                      {item.name}
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
