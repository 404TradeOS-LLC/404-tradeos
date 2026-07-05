"use client";
import { useState } from "react";
import { Monitor, Smartphone, Phone, PhoneMissed, Clock, ArrowRight } from "lucide-react";
import TerminalPanel from "./shared/TerminalPanel";
import DashboardWindow from "./shared/DashboardWindow";
import AnimatedMetricCounter from "./shared/AnimatedMetricCounter";

const lighthouseScores = [
  { label: "Performance", value: 98 },
  { label: "Accessibility", value: 100 },
  { label: "Best practices", value: 100 },
  { label: "SEO", value: 100 },
];

const callMetrics = [
  { icon: Phone, label: "Calls this month", value: 47, suffix: "" },
  { icon: Clock, label: "Avg. response time", value: 1.8, decimals: 1, suffix: "m" },
  { icon: PhoneMissed, label: "Missed-call recovery", value: 92, suffix: "%" },
];

function ScoreRing({ value, label }: { value: number; label: string }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-90">
        <circle cx="32" cy="32" r={r} fill="none" stroke="var(--color-forge-border)" strokeWidth="5" />
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke="var(--color-system-green)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (value / 100) * c}
          className="transition-[stroke-dashoffset] duration-1000 ease-out"
        />
      </svg>
      <div className="-mt-11 text-sm font-bold text-[var(--color-bone)]">
        <AnimatedMetricCounter value={value} />
      </div>
      <div className="mono-label text-center mt-6">{label}</div>
    </div>
  );
}

function BeforeSite() {
  return (
    <div className="bg-[#e8e6e1] text-[#333] min-h-[280px] p-5 font-sans">
      <div className="flex items-center justify-between border-b border-[#bbb] pb-3 mb-4">
        <span className="font-serif text-base">Smith Plumbing &amp; Heating</span>
        <span className="text-[10px] text-[#777]">Est. 1998</span>
      </div>
      <div className="bg-[#d6d2c8] h-24 flex items-center justify-center text-[#888] text-xs mb-4">
        [ banner image — broken link ]
      </div>
      <p className="text-xs leading-relaxed text-[#555] mb-3">
        Welcome too our website. We are a plumbing company servicing the area for over 20 years.
        Call us today for all your plumbing needs!!
      </p>
      <div className="text-xs text-[#555]">
        Phone: (555) 555-5555<br />
        Hours: Mon-Fri 9-5
      </div>
      <div className="mt-4 text-[10px] text-[#999]">No mobile layout · No SSL · Not found on Google</div>
    </div>
  );
}

function AfterSite({ device }: { device: "desktop" | "mobile" }) {
  return (
    <div className="bg-[var(--color-forge-black)] p-0">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--color-forge-border)]">
        <span className="text-sm font-semibold text-[var(--color-bone)]">Smith Plumbing Co.</span>
        {device === "desktop" && (
          <div className="flex gap-4 text-[11px] text-[var(--color-forge-muted)]">
            <span>Services</span><span>Reviews</span><span>Contact</span>
          </div>
        )}
        <span className="btn-primary text-[11px] px-3 py-1.5">Call now</span>
      </div>
      <div className={`p-5 ${device === "desktop" ? "" : ""}`}>
        <div className="sec-label mb-2">24/7 emergency plumbing</div>
        <div className="text-xl font-medium text-[var(--color-bone)] tracking-tight mb-2">
          Terre Haute&rsquo;s top-rated<br /><span className="text-[var(--color-copper)]">plumbing company</span>
        </div>
        <p className="text-xs text-[var(--color-forge-muted)] mb-4 max-w-sm">
          Licensed, insured, and on call 24/7. Same-day service guaranteed.
        </p>
        <div className="flex gap-2 mb-5">
          <span className="btn-primary text-[11px] px-3 py-1.5">Get a free quote</span>
          <span className="btn-ghost text-[11px] px-3 py-1.5">(812) 555-0142</span>
        </div>
        <div className="flex items-center gap-4 text-[10px] text-[var(--color-forge-rust)] font-mono">
          <span>★★★★★ 4.9 (212 reviews)</span>
          <span>Licensed &amp; insured</span>
        </div>
      </div>
    </div>
  );
}

export default function WebsiteDesignDemo() {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [view, setView] = useState<"before" | "after">("after");

  return (
    <div className="flex flex-col gap-6">
      <TerminalPanel
        title="tradeos://website-preview"
        status={view === "after" ? "online" : "error"}
        statusLabel={view === "after" ? "LIVE" : "404"}
        actions={
          <div className="flex items-center gap-1 border border-[var(--color-forge-border)] rounded-sm p-0.5">
            <button
              type="button"
              onClick={() => setDevice("desktop")}
              aria-pressed={device === "desktop"}
              className={`p-1.5 rounded-sm transition-colors ${device === "desktop" ? "bg-[var(--color-copper)] text-forge-black" : "text-[var(--color-forge-rust)]"}`}
              aria-label="Desktop preview"
            >
              <Monitor size={14} />
            </button>
            <button
              type="button"
              onClick={() => setDevice("mobile")}
              aria-pressed={device === "mobile"}
              className={`p-1.5 rounded-sm transition-colors ${device === "mobile" ? "bg-[var(--color-copper)] text-forge-black" : "text-[var(--color-forge-rust)]"}`}
              aria-label="Mobile preview"
            >
              <Smartphone size={14} />
            </button>
          </div>
        }
        bodyClassName="p-5"
      >
        <div className="flex gap-2 mb-5" role="tablist" aria-label="Before and after website">
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
            Before
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
            After — TradeOS
          </button>
        </div>

        <DashboardWindow url={view === "after" ? "smithplumbingco.com" : "smithplumbing-old-site.net"} device={device}>
          {view === "after" ? <AfterSite device={device} /> : <BeforeSite />}
        </DashboardWindow>
      </TerminalPanel>

      <TerminalPanel title="tradeos://lighthouse-audit" status="online" statusLabel="AUDIT PASSED" bodyClassName="p-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {lighthouseScores.map((s) => (
            <ScoreRing key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </TerminalPanel>

      <TerminalPanel title="tradeos://call-tracking" status="online" statusLabel="TRACKING ACTIVE" bodyClassName="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {callMetrics.map((m) => (
            <div key={m.label} className="border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm p-4 flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-[var(--color-copper)] to-[var(--color-copper-dark)] rounded-sm flex items-center justify-center text-forge-black shrink-0">
                <m.icon size={16} />
              </div>
              <div>
                <div className="text-lg font-bold text-[var(--color-copper-light)]">
                  <AnimatedMetricCounter value={m.value} decimals={m.decimals ?? 0} suffix={m.suffix} />
                </div>
                <div className="mono-label">{m.label}</div>
              </div>
            </div>
          ))}
        </div>
        <a href="/contact" className="btn-outline text-sm w-full justify-center mt-5">
          Get a site like this <ArrowRight size={15} />
        </a>
      </TerminalPanel>
    </div>
  );
}
