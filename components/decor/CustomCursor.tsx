"use client";
import { useEffect, useRef } from "react";

/**
 * Replaces the OS cursor with a CNC-style reticle on fine-pointer desktops.
 * Snaps/expands over interactive elements (links, buttons, inputs) to read as a
 * targeting reticle rather than a generic dot. Disabled on touch and reduced-motion.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const posRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (reduceMotion || !isFinePointer) return;

    document.documentElement.classList.add("custom-cursor-active");

    function apply() {
      frameRef.current = null;
      const { x, y } = posRef.current;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }

    function queueApply() {
      if (frameRef.current === null) frameRef.current = requestAnimationFrame(apply);
    }

    function handleMove(e: MouseEvent) {
      posRef.current = { x: e.clientX, y: e.clientY };
      queueApply();
    }

    function handleOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, input, select, textarea, [role='button']");
      ringRef.current?.classList.toggle("cursor-ring-active", !!interactive);
    }

    function handleDown() {
      ringRef.current?.classList.add("cursor-ring-pressed");
    }
    function handleUp() {
      ringRef.current?.classList.remove("cursor-ring-pressed");
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    window.addEventListener("mousedown", handleDown, { passive: true });
    window.addEventListener("mouseup", handleUp, { passive: true });

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div aria-hidden="true">
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring">
        <span className="custom-cursor-tick custom-cursor-tick-t" />
        <span className="custom-cursor-tick custom-cursor-tick-r" />
        <span className="custom-cursor-tick custom-cursor-tick-b" />
        <span className="custom-cursor-tick custom-cursor-tick-l" />
      </div>
    </div>
  );
}
