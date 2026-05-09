import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data";

export function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = NAV_LINKS.map((n) => document.getElementById(n.toLowerCase())).filter(
      Boolean
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const s of sections) {
      observer.observe(s);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}
