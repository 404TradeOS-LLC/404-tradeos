import Link from "next/link";
import { ArrowRight, ShieldCheck, Wrench, MapPin, Award } from "lucide-react";
import CircuitGlow from "@/components/decor/CircuitGlow";
import TradeImage from "@/components/ui/TradeImage";

export const metadata = {
  title: "About",
  description: "404 TradeOS is built by a licensed tradesperson, for trade businesses — not a generic marketing agency.",
  openGraph: {
    title: "About | 404 TradeOS",
    description: "404 TradeOS is built by a licensed tradesperson, for trade businesses — not a generic marketing agency.",
  },
};

const facts = [
  { icon: <ShieldCheck size={18} />, k: "Licensed", v: "IN/IL plumbing license" },
  { icon: <Award size={18} />, k: "Certified", v: "OSHA-30" },
  { icon: <MapPin size={18} />, k: "Based in", v: "Terre Haute, IN" },
  { icon: <Wrench size={18} />, k: "Stack", v: "Next.js + Vercel" },
];

const reasons = [
  {
    title: "We've done the work",
    body: "Licensed plumber, OSHA-30 certified. We know what a slow Monday or a phone that won't ring actually costs a trade business.",
  },
  {
    title: "No generic templates",
    body: "Every site is custom-built for one trade at a time — copy, layout, and SEO written for how customers actually search for plumbers, electricians, and contractors.",
  },
  {
    title: "Built to convert, not just look nice",
    body: "Click-to-call, quote forms, and review requests are wired in from day one — not bolted on after launch.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-pad bg-[var(--color-forge-black)] pb-10 relative overflow-hidden">
        <CircuitGlow />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="sec-label">About 404 TradeOS</span>
            <h1 className="text-4xl md:text-5xl font-medium text-[var(--color-bone)] tracking-tight mb-4">
              Built by a tradesperson.<br />
              <span className="text-[var(--color-copper)]">Not a marketing agency.</span>
            </h1>
            <p className="text-[var(--color-forge-muted)] max-w-lg leading-relaxed mb-6">
              404 TradeOS is run by Billy Showalter — a licensed plumber and OSHA-30 certified tradesperson based in Terre Haute, IN. After years on jobsites, he started building websites for trade businesses that were losing work to competitors with better online visibility, not better service.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {facts.map((f) => (
                <div key={f.k} className="flex items-start gap-2.5">
                  <span className="text-[var(--color-copper)] mt-0.5">{f.icon}</span>
                  <div>
                    <div className="text-xs text-[var(--color-forge-rust)] font-mono">{f.k}</div>
                    <div className="text-sm font-medium text-[var(--color-bone)]">{f.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <TradeImage
            src="/images/team/billy-showalter.jpg"
            alt="Billy Showalter, founder of 404 TradeOS"
            placeholderLabel="awaiting real headshot of Billy Showalter"
            className="aspect-[4/5] rounded-sm border border-[var(--color-forge-border)]"
          />
        </div>
      </section>

      <section className="section-pad bg-[var(--color-forge-dark)]">
        <div className="max-w-7xl mx-auto">
          <span className="sec-label">Why trades only</span>
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--color-bone)] tracking-tight mb-10">
            We only build for one kind<br />of business — yours.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reasons.map((r) => (
              <div key={r.title} className="border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm p-5">
                <h3 className="text-base font-semibold text-[var(--color-bone)] mb-2">{r.title}</h3>
                <p className="text-sm text-[var(--color-forge-muted)] leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-forge-black)] text-center relative overflow-hidden">
        <CircuitGlow />
        <div className="max-w-xl mx-auto relative z-10">
          <div className="badge-404 w-fit mx-auto mb-5"><span className="b-404">404</span><span className="b-sep" /><span className="b-trade">TRADE</span><span className="b-sep" /><span className="b-os">OS</span></div>
          <h2 className="text-2xl font-medium text-[var(--color-bone)] mb-3">
            Let&apos;s get your business <span className="text-[var(--color-copper)]">found</span>.
          </h2>
          <p className="text-[var(--color-forge-muted)] text-sm mb-6 leading-relaxed">Free 30-minute call. No contracts, no pressure.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">Get a free quote <ArrowRight size={15} /></Link>
            <Link href="/work" className="btn-ghost">See our work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
