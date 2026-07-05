"use client";
import { ShieldCheck, DatabaseBackup, FileCheck2, RefreshCw, Activity } from "lucide-react";
import TerminalPanel from "./shared/TerminalPanel";
import AnimatedMetricCounter from "./shared/AnimatedMetricCounter";
import SystemStatusBadge from "./shared/SystemStatusBadge";

const checks = [
  { icon: ShieldCheck, label: "SSL certificate", detail: "Valid until Mar 2027" },
  { icon: ShieldCheck, label: "Malware scan", detail: "Last scan: 2 hours ago" },
  { icon: DatabaseBackup, label: "Daily backup", detail: "Completed at 2:00 AM" },
  { icon: RefreshCw, label: "Software updates", detail: "All packages current" },
];

const recentEvents = [
  { label: "Nightly backup completed", time: "2:00 AM" },
  { label: "Security scan — 0 threats found", time: "4:15 AM" },
  { label: "SSL renewal check passed", time: "6:00 AM" },
  { label: "Uptime check — 200 OK", time: "Just now" },
];

function HealthGauge({ score }: { score: number }) {
  const r = 54;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg width="128" height="128" viewBox="0 0 128 128" className="-rotate-90">
        <circle cx="64" cy="64" r={r} fill="none" stroke="var(--color-forge-border)" strokeWidth="8" />
        <circle
          cx="64"
          cy="64"
          r={r}
          fill="none"
          stroke="var(--color-system-green)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (score / 100) * c}
          className="transition-[stroke-dashoffset] duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-[var(--color-bone)]"><AnimatedMetricCounter value={score} /></span>
        <span className="mono-label">health</span>
      </div>
    </div>
  );
}

export default function MaintenanceDemo() {
  return (
    <div className="flex flex-col gap-6">
      <TerminalPanel title="tradeos://site-health" status="online" statusLabel="ALL SYSTEMS GO" bodyClassName="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <HealthGauge score={99} />
          <div className="grid grid-cols-2 gap-3">
            <div className="border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm p-3 text-center">
              <div className="text-xl font-bold text-[var(--color-copper-light)]"><AnimatedMetricCounter value={99.98} decimals={2} suffix="%" /></div>
              <div className="mono-label">Uptime (90d)</div>
            </div>
            <div className="border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm p-3 text-center">
              <div className="text-xl font-bold text-[var(--color-copper-light)]"><AnimatedMetricCounter value={0.8} decimals={1} suffix="s" /></div>
              <div className="mono-label">Avg. load time</div>
            </div>
            <div className="border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm p-3 text-center">
              <div className="text-xl font-bold text-[var(--color-copper-light)]"><AnimatedMetricCounter value={14} /></div>
              <div className="mono-label">Form submissions</div>
            </div>
            <div className="border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm p-3 text-center">
              <div className="text-xl font-bold text-[var(--color-copper-light)]"><AnimatedMetricCounter value={365} /></div>
              <div className="mono-label">Days since downtime</div>
            </div>
          </div>
        </div>
      </TerminalPanel>

      <TerminalPanel title="tradeos://security-and-backups" status="online" statusLabel="PROTECTED" bodyClassName="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {checks.map((c) => (
            <div key={c.label} className="flex items-center gap-3 border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm px-3 py-2.5">
              <div className="w-8 h-8 rounded-sm bg-[var(--color-system-green)]/10 flex items-center justify-center text-[var(--color-system-green)] shrink-0">
                <c.icon size={15} />
              </div>
              <div className="min-w-0">
                <div className="text-sm text-[var(--color-bone)]">{c.label}</div>
                <div className="text-xs text-[var(--color-forge-rust)] truncate">{c.detail}</div>
              </div>
              <SystemStatusBadge status="online" label="OK" className="ml-auto shrink-0" />
            </div>
          ))}
        </div>
      </TerminalPanel>

      <TerminalPanel title="tradeos://activity-log" status="online" statusLabel="MONITORING" bodyClassName="p-5">
        <div className="flex flex-col gap-2">
          {recentEvents.map((e) => (
            <div key={e.label} className="flex items-center gap-3 text-sm">
              <Activity size={13} className="text-[var(--color-system-green)] shrink-0" />
              <span className="text-[var(--color-forge-muted)] flex-1">{e.label}</span>
              <span className="text-xs font-mono text-[var(--color-forge-rust)] shrink-0">{e.time}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-5 text-xs text-[var(--color-forge-rust)] font-mono">
          <FileCheck2 size={13} /> Hosting, SSL, backups, and security — handled, so you don&rsquo;t have to think about it.
        </div>
        <a href="/contact" className="btn-outline text-sm w-full justify-center mt-4">
          Get worry-free hosting
        </a>
      </TerminalPanel>
    </div>
  );
}
