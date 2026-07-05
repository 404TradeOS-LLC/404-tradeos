import { Wrench, Zap, Wind, Home, HardHat } from "lucide-react";

const trades = [
  { icon: <Wrench size={20} />, label: "Plumbers" },
  { icon: <Zap size={20} />, label: "Electricians" },
  { icon: <Wind size={20} />, label: "HVAC techs" },
  { icon: <Home size={20} />, label: "Roofers" },
  { icon: <HardHat size={20} />, label: "Contractors" },
];

export default function TrustBar() {
  return (
    <div className="relative border border-[var(--color-forge-border)] bg-[var(--color-forge-dark)] rounded-sm px-6 py-7 md:px-10">
      {/* Rivets */}
      {["top-2.5 left-2.5", "top-2.5 right-2.5", "bottom-2.5 left-2.5", "bottom-2.5 right-2.5"].map((pos) => (
        <span key={pos} className={`absolute ${pos} w-1.5 h-1.5 rounded-full bg-[var(--color-forge-border)]`} />
      ))}

      <div className="mono-label text-center mb-6">Trusted by trade businesses across the Midwest</div>

      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
        {trades.map((t) => (
          <div key={t.label} className="flex items-center gap-2.5 text-[var(--color-forge-muted)]">
            <span className="text-[var(--color-copper)]">{t.icon}</span>
            <span className="text-sm font-medium">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
