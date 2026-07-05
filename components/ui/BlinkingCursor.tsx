export default function BlinkingCursor({ className = "" }: { className?: string }) {
  return (
    <span className={`blink-cursor inline-block font-mono ${className}`} aria-hidden="true">
      █
    </span>
  );
}
