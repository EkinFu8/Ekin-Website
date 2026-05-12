import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../data";
import FadeIn from "./FadeIn";
import { GithubIcon } from "./icons/BrandIcons";
import Tag from "./Tag";

// Swap this path once you have the GIF ready
const HANOVER_GIF = ""; // e.g. "/previews/hanover.gif"

// Pull the accent color from the first tag for the hover border
const TAG_ACCENT: Record<string, string> = {
  React: "rgba(34,211,238,0.35)",
  TypeScript: "rgba(96,165,250,0.35)",
  "Node.js": "rgba(74,222,128,0.35)",
  PostgreSQL: "rgba(56,189,248,0.35)",
  Prisma: "rgba(129,140,248,0.35)",
  tRPC: "rgba(192,132,252,0.35)",
  Tailwind: "rgba(45,212,191,0.35)",
  Express: "rgba(161,161,170,0.35)",
  Java: "rgba(251,146,60,0.35)",
  Python: "rgba(250,204,21,0.35)",
};

function getAccent(tags: string[]) {
  for (const tag of tags) {
    if (TAG_ACCENT[tag]) return TAG_ACCENT[tag];
  }
  return "rgba(255,255,255,0.15)";
}

export default function Projects() {
  const navigate = useNavigate();

  const [featured, ...rest] = PROJECTS;

  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto relative z-10">
      <FadeIn>
        <div className="flex items-baseline gap-6 mb-16">
          <h2 className="text-xs font-mono text-white/20 tracking-[0.3em] uppercase">
            01 / Projects
          </h2>
          <div className="h-px flex-1 bg-white/5" />
        </div>
      </FadeIn>

      {/* ── Featured card ── */}
      <FadeIn delay={0.05}>
        <button
          type="button"
          onClick={() => navigate(`/projects/${featured.slug}`)}
          className="group w-full text-left mb-px border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 cursor-pointer"
          style={
            {
              backgroundColor: "var(--bg-card)",
              "--hover-accent": getAccent(featured.tags),
            } as React.CSSProperties
          }
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = "var(--bg-hover)";
            el.style.boxShadow = `inset 0 1px 0 0 ${getAccent(featured.tags)}`;
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = "var(--bg-card)";
            el.style.boxShadow = "none";
          }}
        >
          <div className="grid lg:grid-cols-[1fr_420px]">
            {/* Left: info */}
            <div className="p-10 flex flex-col justify-between gap-8">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-white/20">01</span>
                  <div className="flex gap-3">
                    {featured.github !== "#" && (
                      <a
                        href={featured.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-white/20 hover:text-white transition-colors"
                      >
                        <GithubIcon size={15} />
                      </a>
                    )}
                    {featured.demo && (
                      <a
                        href={featured.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-white/20 hover:text-white transition-colors"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/25 mb-3">
                  Featured
                </p>
                <h3
                  className="text-3xl font-light text-white mb-4 leading-snug group-hover:text-white/90 transition-colors"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {featured.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-md">
                  {featured.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <p className="font-mono text-[10px] text-white/20 group-hover:text-white/50 transition-colors">
                View case study →
              </p>
            </div>

            {/* Right: preview */}
            <div className="border-l border-white/[0.06] bg-white/[0.02] flex items-center justify-center min-h-[280px] lg:min-h-0 overflow-hidden">
              {HANOVER_GIF ? (
                <img
                  src={HANOVER_GIF}
                  alt="Hanover Insurance demo"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 p-10 text-center">
                  <div className="w-10 h-px bg-white/10" />
                  <span className="font-mono text-[10px] text-white/15 tracking-widest uppercase">
                    Demo coming soon
                  </span>
                  <div className="w-10 h-px bg-white/10" />
                </div>
              )}
            </div>
          </div>
        </button>
      </FadeIn>

      {/* ── Rest of projects ── */}
      <div className="grid md:grid-cols-2 divide-x divide-y divide-white/[0.06] border border-white/[0.06] border-t-0">
        {rest.map((project, i) => {
          const Wrapper = project.detail ? "button" : "div";
          const accent = getAccent(project.tags);
          return (
            <FadeIn key={project.slug} delay={0.1 + i * 0.08}>
              <Wrapper
                type={project.detail ? "button" : undefined}
                className={`h-full flex flex-col group w-full text-left p-8 transition-all duration-300 ${project.detail ? "cursor-pointer" : ""}`}
                style={{ backgroundColor: "var(--bg-card)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = "var(--bg-hover)";
                  el.style.boxShadow = `inset 0 1px 0 0 ${accent}`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = "var(--bg-card)";
                  el.style.boxShadow = "none";
                }}
                onClick={project.detail ? () => navigate(`/projects/${project.slug}`) : undefined}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-xs text-white/20">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <div className="flex gap-3">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-white/20 hover:text-white transition-colors"
                      >
                        <GithubIcon size={15} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-white/20 hover:text-white transition-colors"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Placeholder visual */}
                <div className="w-full aspect-video bg-white/[0.02] border border-white/[0.05] mb-6 flex items-center justify-center">
                  <span className="font-mono text-xs text-white/10">preview</span>
                </div>

                <h3
                  className="text-white text-xl font-light mb-3 group-hover:text-white/90 transition-colors"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                {project.detail && (
                  <p className="font-mono text-[10px] text-white/20 mt-6 group-hover:text-white/50 transition-colors">
                    View details →
                  </p>
                )}
              </Wrapper>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
