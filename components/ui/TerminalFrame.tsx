import type { ReactNode } from "react";
import StatusLED from "./StatusLED";

type LEDStatus = "online" | "processing" | "error" | "idle";

export default function TerminalFrame({
  title,
  status = "online",
  statusLabel = "ONLINE",
  children,
  className = "",
}: {
  title: string;
  status?: LEDStatus;
  statusLabel?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`crt-hover border border-[var(--color-forge-border)] bg-[var(--color-forge-dark)] rounded-sm overflow-hidden ${className}`}>
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-[var(--color-forge-border)] bg-[var(--color-forge-black)]">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2 h-2 bg-[var(--color-forge-border)] shrink-0" aria-hidden="true" />
          <span className="w-2 h-2 bg-[var(--color-forge-border)] shrink-0" aria-hidden="true" />
          <span className="w-2 h-2 bg-[var(--color-copper)] shrink-0" aria-hidden="true" />
          <span className="mono-label ml-2 truncate">{title}</span>
        </div>
        <StatusLED status={status} label={statusLabel} />
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
