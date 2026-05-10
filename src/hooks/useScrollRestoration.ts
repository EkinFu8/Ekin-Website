import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SCROLL_KEY = "home-scroll-y";

/** Save the current home page scroll position to sessionStorage. */
export function useSaveScrollPosition() {
  useEffect(() => {
    const save = () => {
      sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
    };

    window.addEventListener("scroll", save, { passive: true });
    return () => window.removeEventListener("scroll", save);
  }, []);
}

/** On mount, restore the home page scroll position from sessionStorage and clear it. */
export function useRestoreScrollPosition() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/") return;

    const saved = sessionStorage.getItem(SCROLL_KEY);
    if (saved !== null) {
      const y = Number(saved);
      // Use requestAnimationFrame to wait for the DOM to paint before scrolling
      requestAnimationFrame(() => {
        window.scrollTo({ top: y, behavior: "instant" });
      });
      sessionStorage.removeItem(SCROLL_KEY);
    }
  }, [pathname]);
}

/** Scroll to top immediately when entering a new route (e.g. project detail page). */
export function useScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
}
