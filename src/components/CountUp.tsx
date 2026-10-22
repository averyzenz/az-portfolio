"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 1400;

/**
 * Counts a stat like "10+" up from zero the first time it scrolls into view.
 * Non-numeric values ("CFA") render as-is. The server renders the final value,
 * so it is correct without JavaScript, and screen readers always get it.
 */
export function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : "";
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState<number | null>(target);

  useEffect(() => {
    const el = ref.current;
    if (target === null || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    let frame = 0;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset before the count runs
    setShown(0);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / DURATION);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(Math.round(eased * target));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  if (target === null) return <>{value}</>;
  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="tabular-nums">
        {shown}
        {suffix}
      </span>
    </span>
  );
}
