type LEDStatus = "online" | "processing" | "error" | "idle";

const COLORS: Record<LEDStatus, string> = {
  online: "var(--color-system-green)",
  processing: "var(--color-copper)",
  error: "var(--color-error-red)",
  idle: "var(--color-forge-rust)",
};

export default function StatusLED({ status = "online", label }: { status?: LEDStatus; label?: string }) {
  const color = COLORS[status];
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide" style={{ color }}>
      <span
        className={`w-1.5 h-1.5 rounded-full shrink-0 ${status !== "idle" ? "led-pulse" : ""}`}
        style={{ background: color, boxShadow: `0 0 6px ${color}` }}
      />
      {label}
    </span>
  );
}
