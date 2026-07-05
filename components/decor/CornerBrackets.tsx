/**
 * CNC/targeting-reticle corner brackets. Drop into any `relative` parent.
 */
export default function CornerBrackets({ className = "", size = 16 }: { className?: string; size?: number }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <svg className="absolute top-0 left-0" width={size} height={size} viewBox="0 0 16 16" fill="none">
        <path d="M1 8V1H8" stroke="var(--color-copper)" strokeWidth="1.5" />
      </svg>
      <svg className="absolute top-0 right-0" width={size} height={size} viewBox="0 0 16 16" fill="none">
        <path d="M15 8V1H8" stroke="var(--color-copper)" strokeWidth="1.5" />
      </svg>
      <svg className="absolute bottom-0 left-0" width={size} height={size} viewBox="0 0 16 16" fill="none">
        <path d="M1 8V15H8" stroke="var(--color-copper)" strokeWidth="1.5" />
      </svg>
      <svg className="absolute bottom-0 right-0" width={size} height={size} viewBox="0 0 16 16" fill="none">
        <path d="M15 8V15H8" stroke="var(--color-copper)" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
