"use client";
import { Globe, Search, PhoneCall, Star, Megaphone, ShieldCheck, ChevronRight } from "lucide-react";
import TerminalPanel from "./shared/TerminalPanel";
import SystemStatusBadge from "./shared/SystemStatusBadge";
import AnimatedMetricCounter from "./shared/AnimatedMetricCounter";

export type ModuleKey = "website" | "seo" | "leads" | "reviews" | "ads" | "maintenance";

const modules: {
  key: ModuleKey;
  icon: typeof Globe;
  name: string;
  metric: { value: number; suffix?: string; prefix?: string; decimals?: number };
  metricLabel: string;
  status: "online" | "processing";
  statusLabel: string;
}[] = [
  { key: "website", icon: Globe, name: "Website", metric: { value: 99 }, metricLabel: "Lighthouse performance", status: "online", statusLabel: "LIVE" },
  { key: "seo", icon: Search, name: "Local SEO", metric: { value: 1, prefix: "#" }, metricLabel: "Map pack rank", status: "online", statusLabel: "RANKING" },
  { key: "leads", icon: PhoneCall, name: "Lead generation", metric: { value: 47 }, metricLabel: "Leads this month", status: "online", statusLabel: "LIVE FEED" },
  { key: "reviews", icon: Star, name: "Reviews", metric: { value: 4.9, decimals: 1 }, metricLabel: "Average rating", status: "online", statusLabel: "COLLECTING" },
  { key: "ads", icon: Megaphone, name: "Google Ads", metric: { value: 4.6, suffix: "x", decimals: 1 }, metricLabel: "Return on ad spend", status: "processing", statusLabel: "OPTIMIZING" },
  { key: "maintenance", icon: ShieldCheck, name: "Support & uptime", metric: { value: 99.98, decimals: 2, suffix: "%" }, metricLabel: "Uptime (90d)", status: "online", statusLabel: "PROTECTED" },
];

export default function ControlCenterDemo({ onSelectModule }: { onSelectModule?: (key: ModuleKey) => void }) {
  return (
    <TerminalPanel title="tradeos://control-center" status="online" statusLabel="ALL MODULES ONLINE" bodyClassName="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((m) => (
          <button
            key={m.key}
            type="button"
            onClick={() => onSelectModule?.(m.key)}
            className="group relative text-left border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm p-4 hover:border-[var(--color-copper)]/50 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 bg-gradient-to-br from-[var(--color-copper)] to-[var(--color-copper-dark)] rounded-sm flex items-center justify-center text-forge-black">
                <m.icon size={16} />
              </div>
              <SystemStatusBadge status={m.status} label={m.statusLabel} />
            </div>
            <div className="text-sm font-semibold text-[var(--color-bone)] mb-1 group-hover:text-[var(--color-copper-light)] transition-colors">{m.name}</div>
            <div className="text-xl font-bold text-[var(--color-copper-light)]">
              <AnimatedMetricCounter value={m.metric.value} prefix={m.metric.prefix} suffix={m.metric.suffix} decimals={m.metric.decimals ?? 0} />
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="mono-label">{m.metricLabel}</span>
              {onSelectModule && <ChevronRight size={14} className="text-[var(--color-forge-rust)] group-hover:text-[var(--color-copper)] transition-colors" />}
            </div>
          </button>
        ))}
      </div>
    </TerminalPanel>
  );
}
