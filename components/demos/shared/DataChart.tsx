"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface DataChartProps {
  data: number[];
  labels?: string[];
  type?: "line" | "bar";
  height?: number;
  color?: string;
  className?: string;
}

/**
 * Minimal hand-rolled SVG chart — no chart library dependency. Line draws in
 * via animated pathLength; bars grow from the baseline. Both trigger once,
 * on scroll into view, matching the rest of the site's reveal pattern.
 */
export default function DataChart({
  data,
  labels,
  type = "line",
  height = 120,
  color = "var(--color-copper)",
  className = "",
}: DataChartProps) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const width = 320;
  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const range = max - min || 1;
  const stepX = width / (data.length - 1 || 1);

  const points = data.map((v, i) => ({
    x: i * stepX,
    y: height - ((v - min) / range) * (height - 8) - 4,
  }));

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${width},${height} L0,${height} Z`;

  return (
    <div className={className}>
      <svg ref={ref} viewBox={`0 0 ${width} ${height}`} className="w-full" preserveAspectRatio="none" style={{ height }} aria-hidden="true">
        {type === "line" ? (
          <>
            <motion.path
              d={areaPath}
              fill={color}
              fillOpacity={0.08}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.path
              d={linePath}
              fill="none"
              stroke={color}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.1, ease: "easeOut" }}
            />
            {points.map((p, i) => (
              <motion.circle
                key={i}
                cx={p.x}
                cy={p.y}
                r={2.5}
                fill={color}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
              />
            ))}
          </>
        ) : (
          data.map((v, i) => {
            const barHeight = ((v - min) / range) * (height - 8) || 1;
            const barWidth = Math.min(stepX * 0.55, 28);
            return (
              <motion.rect
                key={i}
                x={i * stepX - barWidth / 2 + stepX / 2}
                width={barWidth}
                y={height}
                fill={color}
                rx={1.5}
                initial={{ height: 0, y: height }}
                animate={inView ? { height: barHeight, y: height - barHeight } : {}}
                transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              />
            );
          })
        )}
      </svg>
      {labels && (
        <div className="flex justify-between mt-1.5">
          {labels.map((l) => (
            <span key={l} className="text-[10px] font-mono text-[var(--color-forge-rust)]">{l}</span>
          ))}
        </div>
      )}
    </div>
  );
}
