"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-forge-black)]/95 backdrop-blur border-b border-[var(--color-forge-border)]">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center gap-8">

        {/* Logo */}
        <Link href="/" className="flex flex-col gap-0.5 shrink-0">
          <div className="badge-404">
            <span className="b-404">404</span>
            <span className="b-sep" />
            <span className="b-trade">TRADE</span>
            <span className="b-sep" />
            <span className="b-os">OS</span>
          </div>
          <span className="wordmark text-lg leading-none">
            Trade<span className="os">OS</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors duration-150 ${
                pathname.startsWith(l.href)
                  ? "text-[var(--color-bone)]"
                  : "text-[var(--color-forge-muted)] hover:text-[var(--color-bone)]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm py-2 px-4">
            Get a site
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto text-[var(--color-forge-muted)] hover:text-[var(--color-bone)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[var(--color-forge-dark)] border-t border-[var(--color-forge-border)] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--color-forge-muted)] hover:text-[var(--color-bone)]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm justify-center" onClick={() => setOpen(false)}>
            Get a site
          </Link>
        </div>
      )}
    </header>
  );
}
