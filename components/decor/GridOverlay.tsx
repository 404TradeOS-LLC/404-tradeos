export default function GridOverlay({ className = "" }: { className?: string }) {
  return <div className={`grid-overlay pointer-events-none absolute inset-0 ${className}`} aria-hidden="true" />;
}
