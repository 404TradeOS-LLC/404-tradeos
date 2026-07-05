"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Counts up to `value` once in view. With `live`, keeps nudging upward by
 * small random increments afterward — used for "leads today" style metrics
 * that should feel like a system actively running, not a static number.
 */
export default function AnimatedMetricCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.2,
  live = false,
  liveIntervalMs = 4000,
  liveStep = 1,
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  live?: boolean;
  liveIntervalMs?: number;
  liveStep?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);
  const settledRef = useRef(false);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        settledRef.current = true;
      }
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  useEffect(() => {
    if (!live || !inView) return;
    const id = setInterval(() => {
      if (!settledRef.current) return;
      setDisplay((d) => d + liveStep);
    }, liveIntervalMs);
    return () => clearInterval(id);
  }, [live, inView, liveIntervalMs, liveStep]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
