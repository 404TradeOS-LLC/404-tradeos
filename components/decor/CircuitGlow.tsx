/**
 * Decorative animated background — pure SVG + CSS, no images, no JS.
 * Drop into any `relative overflow-hidden` section as the first child.
 */
export default function CircuitGlow({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none select-none ${className}`} aria-hidden="true">
      <div className="glow-blob glow-blob-1" />
      <div className="glow-blob glow-blob-2" />
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.18]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g stroke="var(--color-copper)" strokeWidth="1">
          <path d="M0 120 H280 L340 180 H620" />
          <path d="M1200 220 H880 L820 280 H560" />
          <path d="M0 620 H220 L280 560 H520 L580 620 H900" />
          <path d="M1200 560 H980 L920 500 H700" />
        </g>
        <g fill="var(--color-copper-light)">
          <circle className="circuit-node" cx="340" cy="180" r="5" />
          <circle className="circuit-node circuit-node-delay-1" cx="620" cy="180" r="4" />
          <circle className="circuit-node circuit-node-delay-2" cx="820" cy="280" r="5" />
          <circle className="circuit-node circuit-node-delay-1" cx="560" cy="280" r="4" />
          <circle className="circuit-node circuit-node-delay-2" cx="280" cy="560" r="4" />
          <circle className="circuit-node" cx="580" cy="620" r="5" />
          <circle className="circuit-node circuit-node-delay-1" cx="900" cy="620" r="4" />
          <circle className="circuit-node circuit-node-delay-2" cx="920" cy="500" r="5" />
        </g>
      </svg>
    </div>
  );
}
