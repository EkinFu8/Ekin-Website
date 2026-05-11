import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

const TYPING_PHRASES = [
  "systems engineer.",
  "full-stack developer.",
  "backend builder.",
  "CS student @ WPI.",
];

interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
}

function IconButton({ icon, label, href, external, onClick }: IconButtonProps) {
  const baseClass = `
  relative group inline-flex items-center justify-center
  text-white/35 hover:text-white
  transition-all duration-200
  hover:scale-110
`;

  const tooltip = (
    <span
      className="
        pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2
        font-mono text-[10px] text-white/60
        bg-[#0d1117] border border-white/10 px-2 py-1 rounded-sm whitespace-nowrap
        opacity-0 translate-y-1
        group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-200 ease-out
        z-50
      "
    >
      {label}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={baseClass}
        aria-label={label}
      >
        {icon}
        {tooltip}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClass} aria-label={label}>
      {icon}
      {tooltip}
    </button>
  );
}

export default function Hero() {
  const typed = useTypingEffect(TYPING_PHRASES);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto relative z-10">
      {/* ── Ambient glow near the hero text ────────────────────────── */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, #818cf8 0%, transparent 70%)",
          filter: "blur(60px)",
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
        Junior CS student at WPI building full-stack applications, backend systems, and developer
        tooling.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="flex items-center gap-2"
      >
        <IconButton
          icon={<GithubIcon size={35} />}
          label="GitHub"
          href="https://github.com/EkinFu8"
          external
        />
        <IconButton icon={<LinkedinIcon size={35} />} label="LinkedIn" href="#" external />
        <IconButton icon={<FileText size={35} />} label="Resume" href="/resume.pdf" external />
        <IconButton icon={<Mail size={35} />} label="Contact" onClick={scrollToContact} />
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
