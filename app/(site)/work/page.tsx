import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CircuitGlow from "@/components/decor/CircuitGlow";
import CaseStudyToggle from "@/components/sections/CaseStudyToggle";

export const metadata = {
  title: "Our Work",
  description: "Real trade businesses, real results. See the websites we've built for plumbers, contractors, and electricians.",
  openGraph: {
    title: "Our Work | 404 TradeOS",
    description: "Real trade businesses, real results. See the websites we've built for plumbers, contractors, and electricians.",
  },
};

export default function WorkPage() {
  return (
    <>
      <section className="section-pad bg-[var(--color-forge-black)] pb-10 relative overflow-hidden">
        <CircuitGlow />
        <div className="relative z-10">
        <span className="sec-label">Our work</span>
        <h1 className="text-4xl md:text-5xl font-medium text-[var(--color-bone)] tracking-tight mb-4">
          Real trades.<br /><span className="text-[var(--color-copper)]">Real results.</span>
        </h1>
        <p className="text-[var(--color-forge-muted)] max-w-lg leading-relaxed">
          Every site we build is custom — no templates, no shortcuts. Here&rsquo;s what we&rsquo;ve built and what it did for the businesses behind it.
        </p>
        </div>
      </section>

      {/* Featured — Lucas Construction */}
      <section className="px-6 md:px-10 pb-16 max-w-2xl mx-auto">
        <CaseStudyToggle />

        {/* Coming soon cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          {[
            { icon: "🔧", title: "Plumber — coming soon", desc: "Currently building a site for a local plumbing company. Check back soon.", badge: "In progress" },
            { icon: "⚡", title: "Electrician — spot available", desc: "Want your electrical business to be our next case study?", badge: "Get a quote →", href: "/contact" },
          ].map(c => (
            <div key={c.title} className="border border-[var(--color-forge-border)] bg-[var(--color-forge-dark)] rounded-sm flex flex-col items-center text-center py-10 gap-3 px-4">
              <div className="w-12 h-12 bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-sm flex items-center justify-center text-2xl">{c.icon}</div>
              <div className="text-sm font-semibold text-[var(--color-bone)]">{c.title}</div>
              <p className="text-xs text-[var(--color-forge-muted)] max-w-xs leading-relaxed">{c.desc}</p>
              {c.href ? (
                <Link href={c.href} className="text-xs font-mono text-[var(--color-copper)] border border-[var(--color-copper)] rounded-full px-3 py-1 hover:bg-[var(--color-copper)]/10 transition-colors">{c.badge}</Link>
              ) : (
                <span className="text-xs font-mono text-[var(--color-copper-light)] bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-full px-3 py-1">{c.badge}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-[var(--color-forge-dark)] text-center relative overflow-hidden">
        <CircuitGlow />
        <div className="max-w-xl mx-auto relative z-10">
          <div className="badge-404 w-fit mx-auto mb-5"><span className="b-404">404</span><span className="b-sep" /><span className="b-trade">TRADE</span><span className="b-sep" /><span className="b-os">OS</span></div>
          <h2 className="text-2xl font-medium text-[var(--color-bone)] mb-3">Want results like<br /><span className="text-[var(--color-copper)]">Lucas Construction?</span></h2>
          <p className="text-[var(--color-forge-muted)] text-sm mb-6 leading-relaxed">Your trade business could be our next case study. Free quote, no pressure, live in 2–4 weeks.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">Get a free quote <ArrowRight size={15} /></Link>
            <Link href="/pricing" className="btn-ghost">See pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
