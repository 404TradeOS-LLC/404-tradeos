import type { ReactNode } from "react";
import SystemStatusBadge from "./SystemStatusBadge";

type Status = "online" | "processing" | "warning" | "error" | "idle";

/**
 * TerminalFrame's bigger sibling for dashboard demos — same window chrome,
 * plus an optional `actions` slot in the header (view toggles, filters) that
 * TerminalFrame doesn't need for static marketing content.
 */
export default function TerminalPanel({
  title,
  status = "online",
  statusLabel = "ONLINE",
  actions,
  children,
  className = "",
  bodyClassName = "p-5",
}: {
  title: string;
  status?: Status;
  statusLabel?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div className={`border border-[var(--color-forge-border)] bg-[var(--color-forge-dark)] rounded-sm overflow-hidden ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 border-b border-[var(--color-forge-border)] bg-[var(--color-forge-black)]">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2 h-2 bg-[var(--color-forge-border)] shrink-0" aria-hidden="true" />
          <span className="w-2 h-2 bg-[var(--color-forge-border)] shrink-0" aria-hidden="true" />
          <span className="w-2 h-2 bg-[var(--color-copper)] shrink-0" aria-hidden="true" />
          <span className="mono-label ml-2 truncate">{title}</span>
        </div>
        <div className="flex items-center gap-4">
          {actions}
          <SystemStatusBadge status={status} label={statusLabel} />
        </div>
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
