import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-6xl mx-auto">
      <FadeIn>
        <div className="flex items-baseline gap-6 mb-16">
          <h2 className="text-xs font-mono text-white/20 tracking-[0.3em] uppercase">04 / Contact</h2>
          <div className="h-px flex-1 bg-white/5" />
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="max-w-xl">
          <h3
            className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Let's work together.
          </h3>
          <p className="text-white/35 text-base leading-relaxed mb-12">
            I'm actively looking for internship opportunities. Feel free to reach out — whether it's about a
            role, a project, or just to chat.
          </p>

          <div className="space-y-4">
            {[
              { icon: <Mail size={15} />, label: "ekinchau@gmail.com", href: "mailto:ekinchau@gmail.com" },
              { icon: <LinkedinIcon size={15} />, label: "linkedin.com/in/ekinchau", href: "#" },
              { icon: <GithubIcon size={15} />, label: "github.com/EkinFu8", href: "https://github.com/EkinFu8" },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group border border-white/5 px-6 py-4 hover:border-white/15 hover:bg-white/[0.02] transition-all duration-200"
              >
                <div className="flex items-center gap-3 text-white/40 group-hover:text-white/70 transition-colors">
                  {icon}
                  <span className="font-mono text-sm">{label}</span>
                </div>
                <ArrowUpRight size={14} className="text-white/15 group-hover:text-white/40 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}