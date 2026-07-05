"use client";
import type { ReactNode } from "react";

/**
 * Bordered panel with a soft copper glow that intensifies on hover/focus —
 * the base "card" surface for demo dashboards. Pure CSS, no JS cost.
 */
export default function CopperGlowCard({
  children,
  className = "",
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={`relative rounded-sm border border-[var(--color-forge-border)] bg-[var(--color-forge-dark)] transition-[border-color,box-shadow] duration-200 ${
        interactive ? "hover:border-[var(--color-copper)]/50 hover:shadow-[0_0_28px_-8px_var(--color-copper)]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
