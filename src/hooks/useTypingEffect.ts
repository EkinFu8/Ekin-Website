import { useEffect, useRef, useState } from "react";

export function useTypingEffect(phrases: string[], speed = 60, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const stateRef = useRef({ phraseIdx: 0, charIdx: 0, deleting: false });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const run = () => {
      const s = stateRef.current;
      const current = phrases[s.phraseIdx];
      let delay: number;

      if (!s.deleting && s.charIdx < current.length) {
        s.charIdx++;
        setDisplayed(current.slice(0, s.charIdx));
        delay = speed;
      } else if (!s.deleting && s.charIdx === current.length) {
        s.deleting = true;
        delay = pause;
      } else if (s.deleting && s.charIdx > 0) {
        s.charIdx--;
        setDisplayed(current.slice(0, s.charIdx));
        delay = speed / 2;
      } else {
        s.deleting = false;
        s.phraseIdx = (s.phraseIdx + 1) % phrases.length;
        delay = speed;
      }

      timeout = setTimeout(run, delay);
    };

    timeout = setTimeout(run, speed);
    return () => clearTimeout(timeout);
  }, [phrases, speed, pause]);

  return displayed;
}
