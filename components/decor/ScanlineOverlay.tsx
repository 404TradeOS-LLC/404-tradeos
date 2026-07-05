export default function ScanlineOverlay({ className = "" }: { className?: string }) {
  return <div className={`scanline-overlay pointer-events-none absolute inset-0 ${className}`} aria-hidden="true" />;
}
