"use client";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import TerminalFrame from "@/components/ui/TerminalFrame";
import TradeImage from "@/components/ui/TradeImage";

export default function CaseStudyToggle() {
  const [view, setView] = useState<"before" | "after">("after");

  return (
    <TerminalFrame
      title="tradeos://case-study"
      status={view === "after" ? "online" : "error"}
      statusLabel={view === "after" ? "ONLINE" : "404"}
    >
      <div className="flex gap-2 mb-5" role="tablist" aria-label="Before and after view">
        <button
          role="tab"
          aria-selected={view === "before"}
          onClick={() => setView("before")}
          className={`flex-1 text-xs font-mono uppercase tracking-wide py-2 rounded-sm border transition-colors ${
            view === "before"
              ? "border-[var(--color-error-red)] text-[var(--color-error-red)] bg-[var(--color-error-red)]/10"
              : "border-[var(--color-forge-border)] text-[var(--color-forge-rust)]"
          }`}
        >
          Before — no website
        </button>
        <button
          role="tab"
          aria-selected={view === "after"}
          onClick={() => setView("after")}
          className={`flex-1 text-xs font-mono uppercase tracking-wide py-2 rounded-sm border transition-colors ${
            view === "after"
              ? "border-[var(--color-system-green)] text-[var(--color-system-green)] bg-[var(--color-system-green)]/10"
              : "border-[var(--color-forge-border)] text-[var(--color-forge-rust)]"
          }`}
        >
          After — TradeOS deployed
        </button>
      </div>

      {view === "before" ? (
        <div className="bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-sm p-8 text-center min-h-[220px] flex flex-col items-center justify-center gap-3">
          <div className="text-4xl font-bold text-[var(--color-error-red)] font-mono">404</div>
          <p className="text-sm text-[var(--color-forge-muted)] max-w-xs">
            Lucas Construction had no website — word of mouth only, zero search visibility, no lead capture.
          </p>
        </div>
      ) : (
        <div className="bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-sm overflow-hidden">
          <TradeImage
            src="/images/case-studies/jobsite-framing.jpg"
            alt="General contractor jobsite"
            placeholderLabel="awaiting real Lucas Construction project photo"
            className="aspect-[16/9]"
          />
          <div className="p-6">
          <div className="text-xs font-mono text-[var(--color-copper)] mb-2">General contractor — Terre Haute, IN</div>
          <div className="text-lg font-medium text-[var(--color-bone)] mb-4">Lucas Construction</div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[["#1", "Local rank"], ["98", "Speed score"], ["3wk", "Launch time"]].map(([n, l]) => (
              <div key={l} className="text-center">
                <div className="text-lg font-bold text-[var(--color-copper-light)]">{n}</div>
                <div className="text-[10px] text-[var(--color-forge-rust)] font-mono">{l}</div>
              </div>
            ))}
          </div>
          <a href="https://www.hirelucasconstruction.com" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm w-full justify-center">
            Visit live site <ExternalLink size={14} />
          </a>
          </div>
        </div>
      )}
    </TerminalFrame>
  );
}
