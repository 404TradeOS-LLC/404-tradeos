"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Brief scanline wipe on route change, like a terminal redrawing the screen.
 * Mounts only the wipe overlay — never blocks or delays the new route's content.
 */
export default function PageTransition() {
  const pathname = usePathname();
  const previousPath = useRef(pathname);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      previousPath.current = pathname;
      setKey((k) => k + 1);
    }
  }, [pathname]);

  if (key === 0) return null;

  return <div key={key} className="boot-wipe" aria-hidden="true" />;
}
