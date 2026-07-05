"use client";
import { useEffect, useRef } from "react";
import GridOverlay from "./GridOverlay";
import ScanlineOverlay from "./ScanlineOverlay";

interface HeroBackgroundProps {
  className?: string;
  particleCount?: number;
}

/**
 * Deterministic pseudo-random layout (golden-angle distribution) so server and
 * client render identical markup — avoids hydration mismatches from Math.random().
 */
function buildParticles(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const seed = (i * 137.508) % 100;
    return {
      left: seed,
      top: (i * 53) % 100,
      size: 2 + (i % 4),
      duration: 8 + (i % 6) * 2,
      delay: -((i % 8) * 0.9),
    };
  });
}

export default function HeroBackground({ className = "", particleCount = 24 }: HeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const coordRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0, nx: 0, ny: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (reduceMotion || !isFinePointer) return;

    function applyPosition() {
      frameRef.current = null;
      const { x, y, nx, ny } = targetRef.current;
      container!.style.setProperty("--mx", `${x}px`);
      container!.style.setProperty("--my", `${y}px`);
      if (coordRef.current) {
        coordRef.current.textContent = `X:${nx.toFixed(3)} Y:${ny.toFixed(3)}`;
      }
    }

    function handleMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      targetRef.current = { x, y, nx: x / rect.width, ny: y / rect.height };
      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(applyPosition);
      }
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const particles = buildParticles(particleCount);

  return (
    <div ref={containerRef} className={`hero-bg pointer-events-none select-none ${className}`} aria-hidden="true">
      <GridOverlay />
      <ScanlineOverlay />

      {/* Ambient ember glow — secondary layer, not the main visual */}
      <div className="hero-mesh hero-mesh-1" />
      <div className="hero-mesh hero-mesh-2" />
      <div className="hero-mesh hero-mesh-3" />

      {/* CNC-style crosshair + scan ring + coordinate readout, follows cursor */}
      <div className="hero-crosshair-h" />
      <div className="hero-crosshair-v" />
      <div className="hero-scan-ring" />
      <span ref={coordRef} className="hero-coord-readout" />

      {/* Small square data-ticks */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="hero-particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
