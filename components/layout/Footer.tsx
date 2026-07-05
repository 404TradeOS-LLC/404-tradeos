import Link from "next/link";
import StatusLED from "@/components/ui/StatusLED";

const services = [
  { href: "/services/website-design", label: "Website design" },
  { href: "/services/local-seo", label: "Local SEO" },
  { href: "/services/lead-generation", label: "Lead generation" },
  { href: "/services/review-management", label: "Review management" },
  { href: "/services/google-ads", label: "Google Ads" },
  { href: "/services/maintenance", label: "Ongoing support" },
];

const company = [
  { href: "/work", label: "Our work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-forge-black)] border-t border-[var(--color-forge-border)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-1">
          <div className="badge-404 mb-3 w-fit">
            <span className="b-404">404</span>
            <span className="b-sep" />
            <span className="b-trade">TRADE</span>
            <span className="b-sep" />
            <span className="b-os">OS</span>
          </div>
          <div className="wordmark text-2xl mb-4">
            Trade<span className="os">OS</span>
          </div>
          <p className="text-sm text-[var(--color-forge-rust)] leading-relaxed max-w-xs">
            Professional websites for plumbers, electricians, roofers, HVAC techs, and contractors.
          </p>
          <div className="mt-6 flex flex-col gap-1.5">
            <a href="mailto:hello@404tradeos.com" className="text-sm text-[var(--color-forge-muted)] hover:text-[var(--color-copper)] transition-colors">hello@404tradeos.com</a>
            <a href="tel:8125628504" className="text-sm text-[var(--color-forge-muted)] hover:text-[var(--color-copper)] transition-colors">(812) 562-8504</a>
            <span className="text-sm text-[var(--color-forge-rust)]">7175 Robertson Rd.</span>
            <span className="text-sm text-[var(--color-forge-rust)]">Terre Haute, IN 47802</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="mono-label mb-4">Services</div>
          <ul className="flex flex-col gap-2.5">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-sm text-[var(--color-forge-muted)] hover:text-[var(--color-bone)] transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="mono-label mb-4">Company</div>
          <ul className="flex flex-col gap-2.5">
            {company.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="text-sm text-[var(--color-forge-muted)] hover:text-[var(--color-bone)] transition-colors">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div>
          <div className="mono-label mb-4">Ready to rank?</div>
          <p className="text-sm text-[var(--color-forge-muted)] leading-relaxed mb-4">
            Free 30-min discovery call. No contracts, no pressure.
          </p>
          <Link href="/contact" className="btn-primary text-sm">
            Get a free quote
          </Link>
        </div>
      </div>

      {/* System status strip */}
      <div className="border-t border-[var(--color-forge-border)] bg-[var(--color-forge-black)] px-6 md:px-10 py-2 max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-1">
        <StatusLED status="online" label="SYSTEM ONLINE" />
        <span className="mono-label">UPTIME 99.9%</span>
        <span className="mono-label">BUILD v2.4</span>
        <span className="mono-label hidden sm:inline">REGION: MIDWEST-US</span>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-forge-border)] px-6 md:px-10 py-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-xs text-[var(--color-forge-rust)] font-mono">
          © {new Date().getFullYear()} 404 TradeOS — 404tradeos.com
        </p>
        <div className="flex gap-4">
          <Link href="/privacy" className="text-xs text-[var(--color-forge-rust)] hover:text-[var(--color-forge-muted)] transition-colors">Privacy</Link>
          <Link href="/terms" className="text-xs text-[var(--color-forge-rust)] hover:text-[var(--color-forge-muted)] transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
