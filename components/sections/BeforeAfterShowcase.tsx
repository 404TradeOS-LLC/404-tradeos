import { Check } from "lucide-react";
import DashboardWindow from "@/components/demos/shared/DashboardWindow";

const checklist = ["Fast loading", "Mobile optimized", "SEO ready", "Conversion focused"];

export default function BeforeAfterShowcase() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_auto] gap-5 items-stretch">
      {/* BEFORE */}
      <div className="relative">
        <span className="absolute -top-3 left-3 z-10 text-[10px] font-mono uppercase tracking-wide bg-[var(--color-forge-dark)] border border-[var(--color-forge-border)] text-[var(--color-forge-rust)] rounded-full px-3 py-1">
          Before
        </span>
        <div className="border border-[var(--color-forge-border)] bg-[var(--color-forge-dark)] rounded-sm overflow-hidden h-full">
          <div className="flex items-center gap-3 px-4 py-2.5 border-b border-[var(--color-forge-border)] bg-[var(--color-forge-black)]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--color-forge-border)]" />
              <span className="w-2 h-2 rounded-full bg-[var(--color-forge-border)]" />
              <span className="w-2 h-2 rounded-full bg-[var(--color-forge-border)]" />
            </div>
          </div>
          <div className="bg-[#e9e4dc] p-6 min-h-[220px] grayscale">
            <div className="text-[#1a1a1a] text-lg font-serif font-bold mb-1">Quality Plumbing</div>
            <div className="text-[#1a1a1a] text-lg font-serif font-bold mb-4">You Can Trust.</div>
            <div className="flex gap-3 text-[10px] text-[#555] font-mono uppercase">
              <span>Home</span><span>About</span><span>Services</span><span>Contact</span>
            </div>
            <div className="mt-6 h-2 w-2/3 bg-[#cfc8ba]" />
            <div className="mt-2 h-2 w-1/2 bg-[#cfc8ba]" />
          </div>
        </div>
      </div>

      {/* AFTER */}
      <div className="relative">
        <span className="absolute -top-3 left-3 z-10 text-[10px] font-mono uppercase tracking-wide bg-[var(--color-copper)] text-[var(--color-forge-black)] rounded-full px-3 py-1 font-semibold">
          After
        </span>
        <DashboardWindow url="eliteplumbing.com" className="h-full">
          <div className="relative p-6 min-h-[220px] bg-gradient-to-br from-[var(--color-forge-dark)] to-[var(--color-forge-black)]">
            <div className="text-[var(--color-bone)] text-xl font-semibold mb-1">Fast. Reliable.</div>
            <div className="text-[var(--color-copper)] text-xl font-semibold mb-4">Professional.</div>
            <p className="text-xs text-[var(--color-forge-muted)] max-w-[200px] mb-5">Plumbing services done right. When you need it.</p>
            <span className="inline-block text-xs font-mono bg-[var(--color-copper)] text-[var(--color-forge-black)] rounded-full px-3 py-1.5 font-semibold">
              Schedule service
            </span>

            {/* Phone mockup overlapping bottom-right */}
            <div className="hidden sm:block absolute bottom-4 right-4 w-20 border-2 border-[var(--color-forge-border)] rounded-md bg-[var(--color-forge-dark)] shadow-xl overflow-hidden">
              <div className="aspect-[9/16] bg-[var(--color-forge-black)] p-1.5">
                <div className="h-2 w-2/3 bg-[var(--color-copper)] rounded-full mb-1" />
                <div className="h-1 w-full bg-[var(--color-forge-border)] rounded-full mb-1" />
                <div className="h-1 w-4/5 bg-[var(--color-forge-border)] rounded-full" />
              </div>
            </div>
          </div>
        </DashboardWindow>
      </div>

      {/* PERFORMANCE */}
      <div className="border border-[var(--color-forge-border)] bg-[var(--color-forge-dark)] rounded-sm p-5 flex flex-col justify-between lg:w-[220px]">
        <div>
          <div className="mono-label mb-3">Built to perform</div>
          <ul className="space-y-2 mb-5">
            {checklist.map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm text-[var(--color-forge-muted)]">
                <Check size={14} className="text-[var(--color-system-green)] shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <svg width="88" height="88" viewBox="0 0 88 88" aria-hidden="true">
            <circle cx="44" cy="44" r="38" fill="none" stroke="var(--color-forge-border)" strokeWidth="6" />
            <circle
              cx="44"
              cy="44"
              r="38"
              fill="none"
              stroke="var(--color-system-green)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 38 * 0.98} ${2 * Math.PI * 38}`}
              transform="rotate(-90 44 44)"
            />
            <text x="44" y="50" textAnchor="middle" className="text-2xl font-bold" fill="var(--color-bone)">98</text>
          </svg>
          <div className="mono-label mt-1">Performance</div>
        </div>
      </div>
    </div>
  );
}
