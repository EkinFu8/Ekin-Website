import FadeIn from "./FadeIn";
import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-6xl mx-auto">
      <FadeIn>
        <div className="flex items-baseline gap-6 mb-16">
          <h2 className="text-xs font-mono text-white/20 tracking-[0.3em] uppercase">02 / Skills</h2>
          <div className="h-px flex-1 bg-white/5" />
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
        {SKILLS.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.08}>
            <div className="bg-[#0a0a0a] p-8 hover:bg-white/[0.02] transition-colors duration-300">
              <h3 className="font-mono text-[10px] text-white/25 tracking-[0.25em] uppercase mb-5">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-white/60 text-sm font-light flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                    {item}
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
