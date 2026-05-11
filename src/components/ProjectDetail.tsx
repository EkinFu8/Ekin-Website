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
          <strong key={part} className="text-white/80 font-normal">
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

  // Always scroll to top when this page mounts — prevents inheriting home page scroll position
  useScrollToTopOnMount();

  if (!project?.detail) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="font-mono text-white/30 text-sm mb-4">Project not found</p>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="cursor-pointer font-mono text-xs text-white/50 hover:text-white transition-colors"
          >
            ← Back home
          </button>
        </div>
      </main>
    );
  }

  const { detail } = project;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Nav */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="cursor-pointer flex items-center gap-2 font-mono text-sm text-white/40 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            Back
          </button>
          <div className="flex items-center gap-4">
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-white/30 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <GithubIcon size={13} />
                Repo
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-white/30 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <ExternalLink size={13} />
                Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 pt-36 pb-32">
        {/* Header */}
        <FadeIn>
          <p className="font-mono text-xs text-white/25 tracking-[0.3em] uppercase mb-6">
            {detail.subtitle}
          </p>
          <h1
            className="text-5xl md:text-7xl font-light text-white tracking-tight leading-none mb-8"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-16">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-20">
            {/* Overview */}
            <FadeIn delay={0.1}>
              <div>
                <h2 className="font-mono text-[10px] text-white/20 tracking-[0.3em] uppercase mb-6">
                  Overview
                </h2>
                <BoldText
                  text={detail.overview}
                  className="text-white/50 text-base leading-loose font-light"
                />
              </div>
            </FadeIn>

            {/* Screenshots placeholder */}
            {detail.screenshots.length === 0 && (
              <FadeIn delay={0.15}>
                <div className="w-full aspect-video bg-white/[0.02] border border-white/5 rounded-sm flex items-center justify-center">
                  <span className="font-mono text-xs text-white/10">screenshots coming soon</span>
                </div>
              </FadeIn>
            )}

            {/* Contributions */}
            <FadeIn delay={0.2}>
              <div>
                <h2 className="font-mono text-[10px] text-white/20 tracking-[0.3em] uppercase mb-10">
                  Contributions
                </h2>
                <div className="space-y-px bg-white/5 border border-white/5">
                  {detail.contributions.map((item, i) => (
                    <FadeIn key={item.title} delay={0.2 + i * 0.07}>
                      <div className="bg-[#0a0a0a] p-8 hover:bg-white/[0.02] transition-colors duration-300">
                        <div className="flex items-start gap-4">
                          <span className="font-mono text-[10px] text-white/15 mt-1 flex-shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <h3
                              className="text-white text-base font-light mb-3"
                              style={{ fontFamily: "'Georgia', serif" }}
                            >
                              {item.title}
                            </h3>
                            <BoldText
                              text={item.description}
                              className="text-white/40 text-sm leading-relaxed"
                            />
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <FadeIn delay={0.25}>
              <div className="border border-white/5 p-8 space-y-6 sticky top-28">
                {[
                  { label: "Role", value: detail.role },
                  { label: "Team", value: detail.team },
                  { label: "Client", value: detail.client },
                  { label: "Year", value: detail.year },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-white/20 tracking-[0.25em] uppercase">
                      {label}
                    </span>
                    <span className="text-white/60 text-sm font-light">{value}</span>
                  </div>
                ))}

                <div className="h-px bg-white/5" />

                {detail.stack.map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-white/20 tracking-[0.25em] uppercase">
                      {label}
                    </span>
                    <span className="text-white/60 text-sm font-light">{value}</span>
                  </div>
                ))}

                {(project.github !== "#" || project.demo) && (
                  <>
                    <div className="h-px bg-white/5" />
                    <div className="space-y-3">
                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white/40 hover:text-white text-sm font-mono transition-colors"
                        >
                          <GithubIcon size={13} />
                          View Repository
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white/40 hover:text-white text-sm font-mono transition-colors"
                        >
                          <ExternalLink size={13} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  );
}
