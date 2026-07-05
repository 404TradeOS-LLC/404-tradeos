import Link from "next/link";
import type { ReactNode } from "react";
import StatusLED from "@/components/ui/StatusLED";
import CornerBrackets from "@/components/decor/CornerBrackets";

export default function OSModuleCard({
  icon,
  id,
  title,
  body,
  href,
  from,
  time,
}: {
  icon: ReactNode;
  id: string;
  title: string;
  body: string;
  href: string;
  /** Optional — shows a price/timeline row above the status footer (used on /services) */
  from?: string;
  time?: string;
}) {
  return (
    <Link
      href={href}
      className="crt-hover group relative block h-full border border-[var(--color-forge-border)] bg-[var(--color-forge-dark)] rounded-sm p-5 hover:border-[var(--color-copper)]/50 transition-colors duration-200 overflow-hidden"
    >
      <CornerBrackets className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" size={14} />
      <div className="flex items-center justify-between mb-4">
        <div className="w-9 h-9 bg-gradient-to-br from-[var(--color-copper)] to-[var(--color-copper-dark)] rounded-sm flex items-center justify-center text-forge-black">
          {icon}
        </div>
        <span className="mono-label">{id}</span>
      </div>
      <h3 className="text-base font-semibold text-[var(--color-bone)] mb-2 group-hover:text-[var(--color-copper-light)] transition-colors">{title}</h3>
      <p className="text-sm text-[var(--color-forge-muted)] leading-relaxed mb-4">{body}</p>

      {(from || time) && (
        <div className="flex items-center justify-between pt-3 border-t border-[var(--color-forge-border)] mb-3">
          {from && (
            <div>
              <div className="text-[10px] text-[var(--color-forge-rust)] font-mono">from</div>
              <div className="text-sm font-semibold text-[var(--color-copper)]">{from}</div>
            </div>
          )}
          {time && (
            <div className="text-right">
              <div className="text-[10px] text-[var(--color-forge-rust)] font-mono">timeline</div>
              <div className="text-sm text-[var(--color-copper-light)]">{time}</div>
            </div>
          )}
        </div>
      )}

      <div className={`flex items-center justify-between ${from || time ? "" : "pt-3 border-t border-[var(--color-forge-border)]"}`}>
        <StatusLED status="online" label="RUNNING" />
        <span className="text-[10px] font-mono text-[var(--color-forge-rust)]">v2.4</span>
      </div>
    </Link>
  );
}
