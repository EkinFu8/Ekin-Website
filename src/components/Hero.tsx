import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { TYPING_PHRASES } from "../data";

export default function Hero() {
  const typed = useTypingEffect(TYPING_PHRASES);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-mono text-xs text-white/30 tracking-[0.3em] uppercase mb-8"
      >
        Available for internships · Summer 2027
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-6xl md:text-8xl font-light text-white tracking-tight leading-none mb-6"
        style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
      >
        Ekin Chau
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="flex items-center gap-2 mb-10"
      >
        <span className="font-mono text-lg md:text-2xl text-white/40">I'm a </span>
        <span className="font-mono text-lg md:text-2xl text-white">
          {typed}
          <span className="animate-pulse">|</span>
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="text-white/40 text-base md:text-lg max-w-xl leading-relaxed mb-12 font-light"
      >
        Junior CS student at WPI building full-stack applications, backend systems, and developer tooling.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="flex flex-wrap gap-3"
      >
        {[
          { label: "GitHub", icon: <GithubIcon size={15} />, href: "https://github.com/EkinFu8", external: true },
          { label: "LinkedIn", icon: <LinkedinIcon size={15} />, href: "#", external: true },
          { label: "Resume", icon: <FileText size={15} />, href: "/resume.pdf", external: true },
        ].map(({ label, icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white/10 text-white/60 hover:text-white hover:border-white/30 text-sm font-mono tracking-wide transition-all duration-200 rounded-sm"
          >
            {icon}
            {label}
          </a>
        ))}

        <button
          onClick={scrollToContact}
          className="flex items-center gap-2 px-4 py-2 border border-white/10 text-white/60 hover:text-white hover:border-white/30 text-sm font-mono tracking-wide transition-all duration-200 rounded-sm"
        >
          <Mail size={15} />
          Contact
        </button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}