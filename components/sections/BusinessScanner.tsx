"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import TerminalFrame from "@/components/ui/TerminalFrame";
import BlinkingCursor from "@/components/ui/BlinkingCursor";

function buildLines(name: string) {
  const trimmed = name.trim() || "your business";
  return [
    `> initializing scan...`,
    `> querying search results for "${trimmed}"...`,
    `> checking website status...`,
    `> ERROR 404: BUSINESS NOT FOUND`,
    `> customers can't call a number they can't find`,
    `> recommend: deploy TradeOS`,
    `> STATUS: READY TO LAUNCH`,
  ];
}

export default function BusinessScanner() {
  const [name, setName] = useState("");
  const [lines, setLines] = useState<string[]>([]);
  const [scanning, setScanning] = useState(false);
  const [done, setDone] = useState(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  function runScan(e: React.FormEvent) {
    e.preventDefault();
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setLines([]);
    setDone(false);
    setScanning(true);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sequence = buildLines(name);

    if (reduceMotion) {
      setLines(sequence);
      setScanning(false);
      setDone(true);
      return;
    }

    sequence.forEach((line, i) => {
      const t = setTimeout(() => {
        setLines((prev) => [...prev, line]);
        if (i === sequence.length - 1) {
          setScanning(false);
          setDone(true);
        }
      }, (i + 1) * 550);
      timeoutsRef.current.push(t);
    });
  }

  return (
    <TerminalFrame
      title="tradeos://scanner"
      status={done ? "error" : scanning ? "processing" : "idle"}
      statusLabel={done ? "404 DETECTED" : scanning ? "SCANNING" : "STANDBY"}
    >
      <form onSubmit={runScan} className="flex flex-col sm:flex-row gap-2 mb-4">
        <div className="flex-1 flex items-center gap-2 bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-sm px-3 py-2.5">
          <span className="text-[var(--color-copper)] font-mono text-sm" aria-hidden="true">$</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter a business name..."
            aria-label="Business name to scan"
            className="flex-1 bg-transparent outline-none text-sm font-mono text-[var(--color-bone)] placeholder:text-[var(--color-forge-rust)]"
            maxLength={40}
          />
        </div>
        <button type="submit" disabled={scanning} className="btn-primary justify-center disabled:opacity-50">
          <Search size={14} /> {scanning ? "Scanning…" : "Run scan"}
        </button>
      </form>

      <div className="bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-sm p-4 min-h-[180px] font-mono text-xs leading-relaxed" role="log" aria-live="polite">
        {lines.length === 0 && !scanning && (
          <span className="text-[var(--color-forge-rust)]">Type a business name and run the scan to see what customers see today.</span>
        )}
        {lines.map((line, i) => (
          <div
            key={i}
            className={
              line.includes("404")
                ? "text-[var(--color-error-red)] font-semibold"
                : line.includes("STATUS: READY")
                  ? "text-[var(--color-system-green)] font-semibold"
                  : "text-[var(--color-forge-muted)]"
            }
          >
            {line}
          </div>
        ))}
        {scanning && <BlinkingCursor className="text-[var(--color-copper)]" />}
      </div>

      {done && (
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[var(--color-copper)]/10 border border-[var(--color-copper)]/30 rounded-sm p-4">
          <p className="text-sm text-[var(--color-bone)]">Don&apos;t let your business be a 404. Let&apos;s get you found.</p>
          <Link href="/contact" className="btn-primary shrink-0 text-sm">
            Get your free quote <ArrowRight size={14} />
          </Link>
        </div>
      )}

      <p className="mt-3 text-[10px] font-mono text-[var(--color-forge-rust)]">Illustrative demo — not a live lookup of your business.</p>
    </TerminalFrame>
  );
}
