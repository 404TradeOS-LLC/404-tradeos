"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import { MapPin, CheckCircle2, TrendingUp, ArrowRight } from "lucide-react";
import TerminalPanel from "./shared/TerminalPanel";
import DataChart from "./shared/DataChart";
import AnimatedMetricCounter from "./shared/AnimatedMetricCounter";
import SystemStatusBadge from "./shared/SystemStatusBadge";

const rankHistory = [11, 9, 7, 5, 3, 2, 1];

const keywords = [
  { term: "emergency plumber terre haute", rank: 1, change: 6 },
  { term: "plumbing repair near me", rank: 2, change: 4 },
  { term: "water heater installation in", rank: 1, change: 8 },
  { term: "drain cleaning service", rank: 3, change: 5 },
];

const serviceAreas = ["Terre Haute", "West Terre Haute", "Vigo County", "Brazil", "Clinton", "Marshall"];

function MapPackRank() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setStep((s) => (s < rankHistory.length - 1 ? s + 1 : s));
    }, 350);
    return () => clearInterval(id);
  }, [inView]);

  const rank = rankHistory[step];
  const settled = step === rankHistory.length - 1;

  return (
    <div ref={ref} className="flex items-center gap-4">
      <div className="text-4xl font-bold text-[var(--color-copper-light)] tabular-nums w-14 text-center">#{rank}</div>
      <div>
        <div className="mono-label mb-1">Google Map Pack rank</div>
        <div className="text-xs flex items-center gap-1.5" style={{ color: settled ? "var(--color-system-green)" : "var(--color-copper)" }}>
          <TrendingUp size={13} /> {settled ? "Climbed from #11 in 90 days" : "Climbing…"}
        </div>
      </div>
    </div>
  );
}

export default function LocalSEODemo() {
  return (
    <div className="flex flex-col gap-6">
      <TerminalPanel title="tradeos://google-business-profile" status="online" statusLabel="VERIFIED" bodyClassName="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm p-4">
            <div className="text-2xl font-bold text-[var(--color-copper-light)]"><AnimatedMetricCounter value={100} suffix="%" /></div>
            <div className="mono-label">Profile complete</div>
          </div>
          <div className="border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm p-4">
            <div className="text-2xl font-bold text-[var(--color-copper-light)]"><AnimatedMetricCounter value={38} /></div>
            <div className="mono-label">Photos uploaded</div>
          </div>
          <div className="border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm p-4 flex flex-col gap-1.5 justify-center">
            <SystemStatusBadge status="online" label="Verified business" />
            <SystemStatusBadge status="online" label="Posts active weekly" />
          </div>
        </div>
      </TerminalPanel>

      <TerminalPanel title="tradeos://rank-tracker" status="online" statusLabel="RANKING #1" bodyClassName="p-5">
        <MapPackRank />
        <hr className="rule my-5" />
        <div className="mono-label mb-3">Keyword rankings</div>
        <div className="flex flex-col gap-2">
          {keywords.map((k) => (
            <div key={k.term} className="flex items-center justify-between gap-3 border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm px-3 py-2.5">
              <span className="text-sm text-[var(--color-forge-muted)] truncate">{k.term}</span>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-mono text-[var(--color-system-green)]">▲{k.change}</span>
                <span className="text-sm font-bold text-[var(--color-bone)] w-7 text-right">#{k.rank}</span>
              </div>
            </div>
          ))}
        </div>
      </TerminalPanel>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TerminalPanel title="tradeos://organic-traffic" status="online" statusLabel="TRENDING UP" bodyClassName="p-5">
          <div className="mono-label mb-3">Website visits — last 6 months</div>
          <DataChart data={[120, 180, 240, 410, 650, 980]} labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]} type="line" />
        </TerminalPanel>

        <TerminalPanel title="tradeos://review-growth" status="online" statusLabel="+18 THIS MONTH" bodyClassName="p-5">
          <div className="mono-label mb-3">Google reviews — last 6 months</div>
          <DataChart data={[42, 58, 79, 110, 156, 212]} labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]} type="bar" color="var(--color-system-green)" />
        </TerminalPanel>
      </div>

      <TerminalPanel title="tradeos://service-area-coverage" status="online" statusLabel="6 AREAS COVERED" bodyClassName="p-5">
        <div className="flex flex-wrap gap-2 mb-5">
          {serviceAreas.map((area) => (
            <span key={area} className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--color-forge-muted)] border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-full px-3 py-1.5">
              <CheckCircle2 size={12} className="text-[var(--color-system-green)]" /> <MapPin size={12} className="text-[var(--color-copper)]" /> {area}
            </span>
          ))}
        </div>
        <Link href="/contact" className="btn-outline text-sm w-full justify-center">
          Rank #1 in your area <ArrowRight size={15} />
        </Link>
      </TerminalPanel>
    </div>
  );
}
