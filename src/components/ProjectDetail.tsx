import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { PROJECTS } from "../data";
import { useScrollToTopOnMount } from "../hooks/useScrollRestoration";
import FadeIn from "./FadeIn";
import { GithubIcon } from "./icons/BrandIcons";
import Tag from "./Tag";

function BoldText({ text, className }: { text: string; className: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);

  return (
    <p className={className}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={part} className="font-normal text-white/80">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </p>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.slug === slug);

  useScrollToTopOnMount();

  if (!project?.detail) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--bg)] text-white">
        <div className="text-center">
          <p className="mb-4 font-mono text-sm text-white/30">Project not found</p>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="cursor-pointer font-mono text-xs text-white/50 transition-colors hover:text-white"
          >
            ← Back home
          </button>
        </div>
      </main>
    );
  }

  const { detail } = project;

  return (
    <main className="relative min-h-screen bg-[var(--bg)] text-white">
      {/* navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] backdrop-blur-xl"
        style={{ backgroundColor: "rgba(13,13,13,0.85)" }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex cursor-pointer items-center gap-2 font-mono text-sm text-white/40 transition-colors hover:text-white"
          >
            <ArrowLeft size={15} />
            Back
          </button>

          <div className="flex items-center gap-5">
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-white/30 transition-colors hover:text-white"
              >
                <GithubIcon size={14} />
                Repo
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-white/30 transition-colors hover:text-white"
              >
                <ExternalLink size={14} />
                Demo
              </a>
            )}
          </div>
        </div>
      </motion.nav>

      <div className="mx-auto max-w-6xl px-6 pb-28 pt-32">
        {/* page header */}
        <FadeIn>
          <div className="mb-14 max-w-4xl">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-white/25">
              {detail.subtitle}
            </p>

            <h1
              className="mb-8 text-5xl font-light leading-none tracking-tight text-white md:text-7xl"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* main content */}
          <section className="space-y-6">
            {/* overview */}
            <FadeIn delay={0.1}>
              <div className="border border-white/[0.06] bg-white/[0.025] p-8">
                <h2 className="mb-6 font-mono text-[10px] uppercase tracking-[0.35em] text-white/25">
                  Overview
                </h2>
                <BoldText
                  text={detail.overview}
                  className="text-sm font-light leading-8 text-white/50 md:text-base"
                />
              </div>
            </FadeIn>

            {/* screenshots / gif */}
            <FadeIn delay={0.15}>
              <div className="border border-white/[0.06] bg-white/[0.025]">
                {detail.screenshots.length > 0 ? (
                  detail.screenshots.map((shot) => (
                    <div key={shot.src}>
                      <img
                        src={shot.src}
                        alt={shot.caption}
                        loading="lazy"
                        className="w-full object-cover transition-transform duration-700 hover:scale-[1.015]"
                      />
                      <p className="border-t border-white/[0.06] px-6 py-4 font-mono text-xs text-white/30">
                        {shot.caption}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="flex aspect-video items-center justify-center">
                    <div className="flex flex-col items-center gap-3 text-center">
                      <div className="w-8 h-px bg-white/10" />
                      <span className="font-mono text-[10px] text-white/15 tracking-widest uppercase">
                        Screenshots coming soon
                      </span>
                      <div className="w-8 h-px bg-white/10" />
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>

            {/* contributions */}
            <FadeIn delay={0.2}>
              <div className="border border-white/[0.06] bg-white/[0.025] p-8">
                <h2 className="mb-8 font-mono text-[10px] uppercase tracking-[0.35em] text-white/25">
                  Contributions
                </h2>

                <div className="space-y-4">
                  {detail.contributions.map((item, i) => (
                    <div
                      key={item.title}
                      className="group border border-white/[0.06] bg-black/15 p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.03]"
                    >
                      <div className="mb-4 flex items-center gap-4">
                        <span className="font-mono text-xs text-white/20">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-base font-light text-white/80">{item.title}</h3>
                      </div>

                      <BoldText
                        text={item.description}
                        className="text-sm leading-relaxed text-white/40"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </section>

          {/* sidebar */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <FadeIn delay={0.25}>
              <div className="border border-white/[0.06] bg-white/[0.025] p-8">
                <div className="space-y-5">
                  {[
                    { label: "Role", value: detail.role },
                    { label: "Team", value: detail.team },
                    { label: "Client", value: detail.client },
                    { label: "Year", value: detail.year },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
                        {label}
                      </p>
                      <p className="text-sm font-light text-white/60">{value}</p>
                    </div>
                  ))}

                  <div className="h-px bg-white/[0.06]" />

                  {detail.stack.map(({ label, value }) => (
                    <div key={label}>
                      <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
                        {label}
                      </p>
                      <p className="text-sm font-light text-white/60">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </aside>
        </div>
      </div>
    </main>
  );
}
