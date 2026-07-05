import Image from "next/image";
import { ImageOff } from "lucide-react";

/**
 * Wraps next/image with the site's industrial photo treatment (dark overlay +
 * copper grade + grain) and a styled fallback slot when `src` is unset — so
 * sections can ship now and swap in real client photography later without a
 * redesign. Pass a real `src` the moment one exists.
 */
export default function TradeImage({
  src,
  alt,
  fill,
  sizes,
  priority,
  className = "",
  overlay = true,
  placeholderLabel,
}: {
  src?: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  overlay?: boolean;
  placeholderLabel?: string;
}) {
  if (!src) {
    const hasPositionPh = /\b(absolute|fixed|sticky|relative)\b/.test(className);
    return (
      <div
        className={`${hasPositionPh ? "" : "relative"} flex items-center justify-center bg-[var(--color-forge-dark)] border border-[var(--color-forge-border)] ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-2 text-[var(--color-forge-rust)] px-6 text-center">
          <ImageOff size={22} strokeWidth={1.5} />
          <span className="mono-label">{placeholderLabel ?? "image slot — awaiting asset"}</span>
        </div>
      </div>
    );
  }

  const hasPosition = /\b(absolute|fixed|sticky|relative)\b/.test(className);

  return (
    <div className={`${hasPosition ? "" : "relative"} overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill={fill ?? true}
        sizes={sizes ?? "100vw"}
        priority={priority}
        className="object-cover"
      />
      {overlay && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,10,7,0.15) 0%, rgba(13,10,7,0.55) 70%, rgba(13,10,7,0.85) 100%), linear-gradient(100deg, rgba(184,115,51,0.12) 0%, transparent 50%)",
          }}
        />
      )}
    </div>
  );
}
