"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import SystemStatusBadge from "./SystemStatusBadge";

export interface ActivityItem {
  id: string;
  primary: string;
  secondary?: string;
  time: string;
  status?: "online" | "processing" | "warning" | "error" | "idle";
  statusLabel?: string;
}

/**
 * Auto-scrolling activity log. Feed a static `items` array, or pass `pool` +
 * `live` to have it inject one new item from the pool on an interval —
 * simulates leads/reviews/etc. arriving in real time without a backend.
 */
export default function ActivityFeed({
  items,
  pool,
  live = false,
  intervalMs = 4500,
  maxVisible = 6,
  className = "",
}: {
  items?: ActivityItem[];
  pool?: Omit<ActivityItem, "id" | "time">[];
  live?: boolean;
  intervalMs?: number;
  maxVisible?: number;
  className?: string;
}) {
  const [feed, setFeed] = useState<ActivityItem[]>(items ?? []);
  const idBase = useId();
  const counterRef = useRef(0);

  useEffect(() => {
    if (!live || !pool || pool.length === 0) return;
    const id = setInterval(() => {
      const next = pool[counterRef.current % pool.length];
      counterRef.current += 1;
      setFeed((f) => [
        { ...next, id: `${idBase}-${counterRef.current}`, time: "Just now" },
        ...f.map((item) => (item.time === "Just now" ? { ...item, time: "Moments ago" } : item)),
      ].slice(0, maxVisible));
    }, intervalMs);
    return () => clearInterval(id);
  }, [live, pool, intervalMs, maxVisible, idBase]);

  return (
    <div className={`flex flex-col gap-2 ${className}`} role="log" aria-live={live ? "polite" : "off"}>
      <AnimatePresence initial={false}>
        {feed.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex items-center justify-between gap-3 border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm px-3 py-2.5"
          >
            <div className="min-w-0">
              <div className="text-sm text-[var(--color-bone)] truncate">{item.primary}</div>
              {item.secondary && <div className="text-xs text-[var(--color-forge-muted)] truncate">{item.secondary}</div>}
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              {item.status && <SystemStatusBadge status={item.status} label={item.statusLabel ?? item.status} />}
              <span className="text-[10px] font-mono text-[var(--color-forge-rust)]">{item.time}</span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
