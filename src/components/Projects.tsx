import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../data";
import FadeIn from "./FadeIn";
import { GithubIcon } from "./icons/BrandIcons";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <FadeIn>
        <div className="flex items-baseline gap-6 mb-16">
          <h2 className="text-xs font-mono text-white/20 tracking-[0.3em] uppercase">
            01 / Projects
          </h2>
          <div className="h-px flex-1 bg-white/5" />
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
        {PROJECTS.map((project, i) => {
          const Wrapper = project.detail ? "button" : "div";
          return (
            <FadeIn key={project.slug} delay={i * 0.1}>
              <Wrapper
                type={project.detail ? "button" : undefined}
                className={`bg-[#0a0a0a] p-8 h-full flex flex-col group hover:bg-white/[0.02] transition-colors duration-300 w-full text-left ${project.detail ? "cursor-pointer" : ""}`}
                onClick={project.detail ? () => navigate(`/projects/${project.slug}`) : undefined}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-xs text-white/20">
                    {String(i + 1).padStart(2, "0")}
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
                <div className="w-full aspect-video bg-white/[0.03] border border-white/5 rounded-sm mb-6 flex items-center justify-center">
                  <span className="font-mono text-xs text-white/10">preview</span>
                </div>

                <h3
                  className="text-white text-lg font-light mb-3 group-hover:text-white/90"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] text-white/25 border border-white/8 px-2 py-0.5 rounded-sm tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.detail && (
                  <p className="font-mono text-[10px] text-white/20 mt-6 group-hover:text-white/40 transition-colors">
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
