import TerminalFrame from "@/components/ui/TerminalFrame";
import AnimatedCounter from "@/components/motion/AnimatedCounter";

const metrics = [
  { label: "trade sites deployed", value: 200, decimals: 0, unit: "+", points: "0,18 6,14 12,15 18,10 24,11 30,6 36,4 42,2" },
  { label: "page 1 ranking rate", value: 94, decimals: 0, unit: "%", points: "0,16 6,15 12,12 18,13 24,9 30,7 36,5 42,3" },
  { label: "avg. client rating", value: 4.9, decimals: 1, unit: "/5", points: "0,10 6,9 12,9 18,8 24,7 30,6 36,5 42,4" },
  { label: "avg. launch time", value: 14, decimals: 0, unit: "d", points: "0,4 6,6 12,8 18,9 24,11 30,13 36,15 42,17" },
];

export default function SystemMetrics() {
  return (
    <TerminalFrame title="tradeos://system-status" status="online" statusLabel="ALL SYSTEMS OPERATIONAL">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm p-4">
            <div className="flex items-end justify-between mb-2">
              <span className="text-2xl font-bold text-[var(--color-copper-light)] tracking-tight">
                <AnimatedCounter value={m.value} decimals={m.decimals} />
                <span className="text-[var(--color-copper)] text-sm">{m.unit}</span>
              </span>
              <svg width="44" height="20" viewBox="0 0 44 20" className="opacity-70" aria-hidden="true">
                <polyline points={m.points} fill="none" stroke="var(--color-system-green)" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="mono-label">{m.label}</div>
          </div>
        ))}
      </div>
    </TerminalFrame>
  );
}
