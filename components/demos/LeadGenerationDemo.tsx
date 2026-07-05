"use client";
import { PhoneCall, FileText, Play, ArrowRight } from "lucide-react";
import TerminalPanel from "./shared/TerminalPanel";
import ActivityFeed, { type ActivityItem } from "./shared/ActivityFeed";
import AnimatedMetricCounter from "./shared/AnimatedMetricCounter";
import DataChart from "./shared/DataChart";

const initialLeads: ActivityItem[] = [
  { id: "l1", primary: "New quote request — water heater install", secondary: "Jennifer M. · Terre Haute, IN", time: "2 min ago", status: "online", statusLabel: "NEW" },
  { id: "l2", primary: "Click-to-call from homepage", secondary: "Unknown caller · 47 sec", time: "14 min ago", status: "processing", statusLabel: "FOLLOW UP" },
  { id: "l3", primary: "Contact form — drain cleaning", secondary: "Marcus T. · Brazil, IN", time: "1 hr ago", status: "online", statusLabel: "QUOTED" },
];

const leadPool: Omit<ActivityItem, "id" | "time">[] = [
  { primary: "New quote request — emergency leak repair", secondary: "Form submission · West Terre Haute, IN", status: "online", statusLabel: "NEW" },
  { primary: "Click-to-call from mobile site", secondary: "Incoming call · 0:00", status: "processing", statusLabel: "RINGING" },
  { primary: "New quote request — bathroom remodel", secondary: "Form submission · Clinton, IN", status: "online", statusLabel: "NEW" },
  { primary: "Booking widget — drain inspection", secondary: "Scheduled for tomorrow, 9 AM", status: "online", statusLabel: "BOOKED" },
];

const sources = [
  { label: "Google Business Profile", value: 42, color: "var(--color-copper)" },
  { label: "Organic search", value: 31, color: "var(--color-copper-light)" },
  { label: "Direct / referral", value: 18, color: "var(--color-system-green)" },
  { label: "Google Ads", value: 9, color: "var(--color-forge-rust)" },
];

const pipeline = [
  { stage: "New", count: 8 },
  { stage: "Contacted", count: 5 },
  { stage: "Quoted", count: 4 },
  { stage: "Won", count: 3 },
];

const recordings = [
  { caller: "(812) 555-0118", duration: "3:42", outcome: "Booked job" },
  { caller: "(812) 555-0193", duration: "1:08", outcome: "Quote requested" },
  { caller: "(812) 555-0207", duration: "0:51", outcome: "Missed — callback sent" },
];

export default function LeadGenerationDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Leads this month", value: 47, suffix: "" },
          { label: "Conversion rate", value: 38, suffix: "%" },
          { label: "Avg. response time", value: 4, suffix: "m" },
        ].map((m) => (
          <div key={m.label} className="border border-[var(--color-forge-border)] bg-[var(--color-forge-dark)] rounded-sm p-4">
            <div className="text-2xl font-bold text-[var(--color-copper-light)]">
              <AnimatedMetricCounter value={m.value} suffix={m.suffix} live={m.label.startsWith("Leads")} liveStep={1} liveIntervalMs={6000} />
            </div>
            <div className="mono-label">{m.label}</div>
          </div>
        ))}
      </div>

      <TerminalPanel title="tradeos://incoming-leads" status="online" statusLabel="LIVE FEED" bodyClassName="p-5">
        <ActivityFeed items={initialLeads} pool={leadPool} live intervalMs={5000} maxVisible={6} />
      </TerminalPanel>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TerminalPanel title="tradeos://lead-sources" status="online" statusLabel="ATTRIBUTED" bodyClassName="p-5">
          <div className="flex flex-col gap-3">
            {sources.map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[var(--color-forge-muted)]">{s.label}</span>
                  <span className="font-mono text-[var(--color-bone)]">{s.value}%</span>
                </div>
                <div className="h-1.5 bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-full overflow-hidden">
                  <div className="h-full rounded-full grow-bar" style={{ width: `${s.value}%`, background: s.color, "--bar-pct": `${s.value}%` } as React.CSSProperties} />
                </div>
              </div>
            ))}
          </div>
        </TerminalPanel>

        <TerminalPanel title="tradeos://call-recordings" status="online" statusLabel="RECORDING" bodyClassName="p-5">
          <div className="flex flex-col gap-2">
            {recordings.map((r) => (
              <div key={r.caller} className="flex items-center gap-3 border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm px-3 py-2.5">
                <button type="button" aria-label={`Play call from ${r.caller}`} className="w-7 h-7 rounded-full bg-[var(--color-copper)] text-forge-black flex items-center justify-center shrink-0 hover:bg-[var(--color-copper-light)] transition-colors">
                  <Play size={12} fill="currentColor" />
                </button>
                <div className="flex-1 flex items-end gap-0.5 h-5" aria-hidden="true">
                  {[4, 9, 6, 12, 7, 14, 5, 10, 8, 13, 6, 9].map((h, i) => (
                    <span key={i} className="w-0.5 bg-[var(--color-forge-border)] rounded-full" style={{ height: `${h}px` }} />
                  ))}
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-mono text-[var(--color-bone)]">{r.duration}</div>
                  <div className="text-[10px] text-[var(--color-forge-rust)]">{r.outcome}</div>
                </div>
              </div>
            ))}
          </div>
        </TerminalPanel>
      </div>

      <TerminalPanel title="tradeos://sales-pipeline" status="online" statusLabel="4 STAGES" bodyClassName="p-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {pipeline.map((p, i) => (
            <div key={p.stage} className="border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm p-3 text-center">
              <div className="text-2xl font-bold text-[var(--color-copper-light)] mb-1">
                <AnimatedMetricCounter value={p.count} />
              </div>
              <div className="mono-label flex items-center justify-center gap-1">
                {p.stage}
                {i < pipeline.length - 1 && <ArrowRight size={10} className="text-[var(--color-forge-border)]" />}
              </div>
            </div>
          ))}
        </div>
      </TerminalPanel>

      <TerminalPanel title="tradeos://quote-requests-trend" status="online" statusLabel="+62% QOQ" bodyClassName="p-5">
        <div className="flex items-center gap-2 mb-3 text-xs text-[var(--color-forge-muted)]">
          <FileText size={14} className="text-[var(--color-copper)]" /> Quote requests — last 6 weeks
        </div>
        <DataChart data={[6, 9, 8, 13, 17, 22]} labels={["W1", "W2", "W3", "W4", "W5", "W6"]} />
        <a href="/contact" className="btn-primary text-sm w-full justify-center mt-5">
          <PhoneCall size={15} /> Start capturing leads like this
        </a>
      </TerminalPanel>
    </div>
  );
}
