"use client";
import { DollarSign, Target, PhoneCall, TrendingUp, ArrowRight } from "lucide-react";
import TerminalPanel from "./shared/TerminalPanel";
import AnimatedMetricCounter from "./shared/AnimatedMetricCounter";
import DataChart from "./shared/DataChart";
import SystemStatusBadge from "./shared/SystemStatusBadge";

const metrics = [
  { icon: DollarSign, label: "Ad spend (MTD)", value: 1240, prefix: "$" },
  { icon: Target, label: "Cost per lead", value: 18.5, prefix: "$", decimals: 2 },
  { icon: PhoneCall, label: "Calls generated", value: 67 },
  { icon: TrendingUp, label: "Return on ad spend", value: 4.6, suffix: "x", decimals: 1 },
];

const campaigns = [
  { name: "Emergency Plumbing — Terre Haute", status: "online" as const, spend: 480, leads: 26, cpl: 18.46 },
  { name: "Water Heater Install — Vigo County", status: "online" as const, spend: 360, leads: 19, cpl: 18.95 },
  { name: "Drain Cleaning — Brazil, IN", status: "processing" as const, spend: 290, leads: 14, cpl: 20.71 },
  { name: "Bathroom Remodel — Service Area", status: "idle" as const, spend: 110, leads: 8, cpl: 13.75 },
];

export default function GoogleAdsDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="border border-[var(--color-forge-border)] bg-[var(--color-forge-dark)] rounded-sm p-4">
            <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-copper)] to-[var(--color-copper-dark)] rounded-sm flex items-center justify-center text-forge-black mb-3">
              <m.icon size={15} />
            </div>
            <div className="text-xl font-bold text-[var(--color-copper-light)]">
              <AnimatedMetricCounter value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals ?? 0} />
            </div>
            <div className="mono-label">{m.label}</div>
          </div>
        ))}
      </div>

      <TerminalPanel title="tradeos://campaign-performance" status="online" statusLabel="4 ACTIVE" bodyClassName="p-5">
        <div className="flex flex-col gap-2">
          {campaigns.map((c) => (
            <div key={c.name} className="border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm px-4 py-3">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-sm text-[var(--color-bone)] truncate">{c.name}</span>
                <SystemStatusBadge
                  status={c.status}
                  label={c.status === "online" ? "RUNNING" : c.status === "processing" ? "OPTIMIZING" : "PAUSED"}
                />
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div><span className="text-[var(--color-forge-rust)]">Spend </span><span className="font-mono text-[var(--color-bone)]">${c.spend}</span></div>
                <div><span className="text-[var(--color-forge-rust)]">Leads </span><span className="font-mono text-[var(--color-bone)]">{c.leads}</span></div>
                <div><span className="text-[var(--color-forge-rust)]">CPL </span><span className="font-mono text-[var(--color-bone)]">${c.cpl}</span></div>
              </div>
            </div>
          ))}
        </div>
      </TerminalPanel>

      <TerminalPanel title="tradeos://spend-vs-leads" status="online" statusLabel="TRENDING UP" bodyClassName="p-5">
        <div className="mono-label mb-3">Leads generated — last 6 weeks</div>
        <DataChart data={[8, 11, 14, 19, 24, 31]} labels={["W1", "W2", "W3", "W4", "W5", "W6"]} />
        <a href="/contact" className="btn-primary text-sm w-full justify-center mt-5">
          Get calls like this <ArrowRight size={15} />
        </a>
      </TerminalPanel>
    </div>
  );
}
