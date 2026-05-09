import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
      <FadeIn>
        <div className="flex items-baseline gap-6 mb-16">
          <h2 className="text-xs font-mono text-white/20 tracking-[0.3em] uppercase">03 / About</h2>
          <div className="h-px flex-1 bg-white/5" />
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <FadeIn delay={0.1}>
          <p className="text-white/50 text-base leading-loose font-light mb-6">
            I'm a junior computer science student at WPI with a focus on systems, backend
            architecture, and full-stack engineering. I enjoy building things that are actually
            useful — whether that's a production-quality CMS, a developer tool, or a well-optimized
            algorithm.
          </p>
          <p className="text-white/35 text-base leading-loose font-light">
            Currently looking for software engineering internships where I can work on hard
            problems, ship real features, and learn from strong engineers. I care about clean code,
            thoughtful design, and systems that scale.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="border border-white/5 p-8 space-y-6">
            {[
              { label: "University", value: "WPI — Worcester Polytechnic Institute" },
              { label: "Year", value: "Junior · Class of 2028" },
              { label: "Focus", value: "Systems · Full-Stack · Backend" },
              { label: "Status", value: "Seeking Summer 2027 Internship" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-white/20 tracking-[0.25em] uppercase">
                  {label}
                </span>
                <span className="text-white/60 text-sm">{value}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
