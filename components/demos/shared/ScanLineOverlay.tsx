import ScanlineOverlay from "@/components/decor/ScanlineOverlay";
import GridOverlay from "@/components/decor/GridOverlay";

/**
 * Demo-scoped wrapper around the site's scanline + grid texture so dashboards
 * read as the same "industrial control panel" surface as the rest of the site,
 * without re-implementing the CSS that already lives in globals.css.
 */
export default function ScanLineOverlay({ className = "", grid = false }: { className?: string; grid?: boolean }) {
  return (
    <>
      <ScanlineOverlay className={className} />
      {grid && <GridOverlay className={className} />}
    </>
  );
}
