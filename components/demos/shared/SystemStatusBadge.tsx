type Status = "online" | "processing" | "warning" | "error" | "idle";

const COLORS: Record<Status, string> = {
  online: "var(--color-system-green)",
  processing: "var(--color-copper)",
  warning: "var(--color-copper-light)",
  error: "var(--color-error-red)",
  idle: "var(--color-forge-rust)",
};

/**
 * Pulsing status pill for demo dashboards. Green is reserved for online/success
 * per brand rule — every other state uses copper/red/rust, never green.
 */
export default function SystemStatusBadge({
  status = "online",
  label,
  className = "",
}: {
  status?: Status;
  label: string;
  className?: string;
}) {
  const color = COLORS[status];
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide whitespace-nowrap ${className}`}
      style={{ color }}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full shrink-0 ${status !== "idle" ? "led-pulse" : ""}`}
        style={{ background: color, boxShadow: `0 0 6px ${color}` }}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}
