import type { ReactNode } from "react";

/**
 * Browser-chrome shell for live-site mockups (vs. TerminalPanel's terminal
 * chrome for dashboards). URL bar instead of a title — reads as "this is a
 * real website," not a system panel. Dots stay copper/border-toned, never
 * red/amber traffic lights, so nothing here reads as a status signal.
 */
export default function DashboardWindow({
  url,
  device = "desktop",
  children,
  className = "",
}: {
  url: string;
  device?: "desktop" | "mobile";
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-[var(--color-forge-border)] bg-[var(--color-forge-dark)] rounded-sm overflow-hidden mx-auto transition-[width] duration-300 ${
        device === "mobile" ? "max-w-[340px]" : "w-full"
      } ${className}`}
    >
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-[var(--color-forge-border)] bg-[var(--color-forge-black)]">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[var(--color-forge-border)]" aria-hidden="true" />
          <span className="w-2 h-2 rounded-full bg-[var(--color-forge-border)]" aria-hidden="true" />
          <span className="w-2 h-2 rounded-full bg-[var(--color-copper)]" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0 bg-[var(--color-forge-dark)] border border-[var(--color-forge-border)] rounded-full px-3 py-1 text-center">
          <span className="font-mono text-[11px] text-[var(--color-forge-rust)] truncate">{url}</span>
        </div>
      </div>
      <div className="bg-[var(--color-forge-black)]">{children}</div>
    </div>
  );
}
