"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import CircuitGlow from "@/components/decor/CircuitGlow";
import TerminalFrame from "@/components/ui/TerminalFrame";

const plans = [
  {
    tier: "Starter",
    name: "Launch",
    desc: "For solo tradespeople who need a professional online presence without the agency price tag.",
    monthlyPrice: 197,
    annualPrice: 158,
    setupMonthly: 299,
    setupAnnual: 299,
    timeline: "2 weeks",
    timelineNote: "We handle everything",
    featured: false,
    cta: "Get started",
    features: [
      { text: "5-page custom website", included: true },
      { text: "Mobile-first design", included: true },
      { text: "Contact + quote form", included: true },
      { text: "Google Business setup", included: true },
      { text: "Basic local SEO", included: true },
      { text: "SSL + hosting included", included: true },
      { text: "Review automation", included: false },
      { text: "Monthly SEO reporting", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    tier: "Pro",
    name: "Rank",
    desc: "For growing trade businesses ready to dominate local search and keep their calendar full.",
    monthlyPrice: 397,
    annualPrice: 318,
    setupMonthly: 699,
    setupAnnual: 699,
    timeline: "3 weeks",
    timelineNote: "Custom SEO + design",
    featured: true,
    cta: "Get started",
    features: [
      { text: "10-page custom website", included: true },
      { text: "Mobile-first design", included: true },
      { text: "Contact + quote form", included: true },
      { text: "Google Business setup", included: true },
      { text: "Full local SEO suite", included: true },
      { text: "SSL + hosting included", included: true },
      { text: "Review automation", included: true, badge: "New" },
      { text: "Monthly SEO reporting", included: true },
      { text: "Priority support", included: false },
    ],
  },
  {
    tier: "Enterprise",
    name: "Dominate",
    desc: "For multi-location or high-volume trade businesses that need to own their entire market.",
    monthlyPrice: 897,
    annualPrice: 718,
    setupMonthly: 1299,
    setupAnnual: 1299,
    timeline: "4 weeks",
    timelineNote: "Built to own your market",
    featured: false,
    cta: "Talk to us",
    features: [
      { text: "Unlimited pages", included: true },
      { text: "Multi-location support", included: true },
      { text: "Custom lead funnels", included: true },
      { text: "Google Business setup", included: true },
      { text: "Aggressive SEO campaign", included: true },
      { text: "SSL + hosting included", included: true },
      { text: "Review automation", included: true },
      { text: "Weekly SEO reporting", included: true },
      { text: "Priority support", included: true, badge: "24hr" },
    ],
  },
];

const addons = [
  { name: "Google Ads management", desc: "Managed PPC campaigns targeting high-intent local search terms.", price: "+$299/mo" },
  { name: "Blog content", desc: "2 SEO-optimized blog posts per month written for your trade and service area.", price: "+$249/mo" },
  { name: "Booking widget", desc: "Online scheduling integrated into your site so customers book jobs directly.", price: "+$79/mo" },
  { name: "Social profile setup", desc: "Facebook and Instagram setup optimized for local trade businesses.", price: "$249 one-time" },
];

const faqs = [
  { q: "Do I own my website?", a: "Yes — 100%. Your domain, your content, your site. If you ever leave, you take everything with you. No lock-in, ever." },
  { q: "How fast will I actually be live?", a: "Launch clients go live in 2 weeks, Rank in 3, Dominate in 4. We build exclusively for trades so there's no learning curve on our end." },
  { q: "What if I already have a website?", a: "We'll audit it for free. If it's fixable, we'll tell you. If it needs a rebuild, we'll show you exactly why and what it'll take." },
  { q: "Is there a contract?", a: "Month-to-month on all plans. Annual billing saves you 20% but is never required. Cancel anytime with 30 days notice." },
  { q: "What trades do you work with?", a: "Plumbers, electricians, HVAC, roofers, landscapers, painters, general contractors — if you're a trade, we've built for it." },
  { q: "What's included in the setup fee?", a: "Domain setup, design, copywriting, photography sourcing, Google Business optimization, and full SEO configuration. Done for you." },
];

export default function PricingClient() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="section-pad bg-[var(--color-forge-black)] text-center pb-10 relative overflow-hidden">
        <CircuitGlow />
        <div className="relative z-10">
        <span className="sec-label block text-center">Pricing</span>
        <h1 className="text-4xl md:text-5xl font-medium text-[var(--color-bone)] tracking-tight mb-4">
          Simple pricing.<br />
          No <span className="text-[var(--color-copper)]">404</span> surprises.
        </h1>
        <p className="text-[var(--color-forge-muted)] max-w-lg mx-auto leading-relaxed mb-8">
          Flat monthly rates. No hidden fees. No long-term contracts. Pick your plan and we handle everything else.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3">
          <span className={`text-sm font-mono ${!annual ? "text-[var(--color-bone)] font-semibold" : "text-[var(--color-forge-rust)]"}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-11 h-6 rounded-full transition-colors border ${annual ? "bg-[var(--color-copper)] border-[var(--color-copper)]" : "bg-[var(--color-forge-dark)] border-[var(--color-forge-border)]"}`}
          >
            <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-bone transition-all ${annual ? "left-5" : "left-0.5"}`} />
          </button>
          <span className={`text-sm font-mono ${annual ? "text-[var(--color-bone)] font-semibold" : "text-[var(--color-forge-rust)]"}`}>Annual</span>
          <span className="text-xs font-mono text-[var(--color-system-green)] bg-[var(--color-system-green)]/10 border border-system-green/30 rounded-full px-2.5 py-0.5">
            Save 20%
          </span>
        </div>
        </div>
      </section>

      {/* Plans */}
      <section className="px-6 md:px-10 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan) => (
            <div key={plan.name} className={plan.featured ? "rounded-sm ring-1 ring-[var(--color-copper)]" : ""}>
              <TerminalFrame
                title={`tradeos://${plan.name.toLowerCase()}`}
                status={plan.featured ? "processing" : "online"}
                statusLabel={plan.featured ? "MOST POPULAR" : "AVAILABLE"}
              >
                <span className="mono-label block mb-1">{plan.tier}</span>
                <div className="text-xl font-semibold text-[var(--color-bone)] mb-2">{plan.name}</div>
                <p className="text-sm text-[var(--color-forge-muted)] leading-relaxed mb-4">{plan.desc}</p>

                {/* Timeline */}
                <div className="flex items-center gap-2 bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-sm px-3 py-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-system-green)] flex-shrink-0" />
                  <span className="text-xs text-[var(--color-forge-muted)] font-mono">
                    Live in <span className="text-[var(--color-system-green)] font-semibold">{plan.timeline}</span> — {plan.timelineNote}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold text-[var(--color-bone)] tracking-tight">
                    <span className="text-[var(--color-copper)] text-2xl">$</span>
                    {annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-sm text-[var(--color-forge-muted)] font-mono">/mo</span>
                </div>
                <div className="text-xs text-[var(--color-forge-muted)] mb-5">
                  + <span className="text-[var(--color-copper-light)] font-semibold">
                    ${(annual ? plan.setupAnnual : plan.setupMonthly).toLocaleString()}
                  </span>{" "}
                  one-time setup fee
                </div>

                <Link
                  href="/contact"
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-sm font-semibold text-sm transition-colors mb-5 ${
                    plan.featured
                      ? "bg-[var(--color-copper)] text-forge-black hover:bg-[var(--color-copper-light)]"
                      : "border border-[var(--color-copper)] text-[var(--color-copper)] hover:bg-[var(--color-copper)]/10"
                  }`}
                >
                  {plan.cta}
                </Link>

                <hr className="rule mb-4" />

                <ul className="flex flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2.5">
                      {f.included ? (
                        <div className="w-4 h-4 rounded-full bg-[var(--color-copper)] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-forge-black)]" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-[var(--color-forge-border)] flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${f.included ? "text-[var(--color-forge-muted)]" : "text-[var(--color-forge-rust)]"}`}>
                        {f.text}
                        {"badge" in f && f.badge && (
                          <span className="ml-1.5 text-[10px] font-mono text-[var(--color-copper)] border border-[var(--color-forge-border)] rounded px-1 py-0.5">{f.badge}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </TerminalFrame>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-pad bg-[var(--color-forge-dark)]">
        <div className="max-w-7xl mx-auto">
          <span className="sec-label">Add-ons</span>
          <h2 className="text-2xl font-medium text-[var(--color-bone)] tracking-tight mb-8">Power up any plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {addons.map((a) => (
              <div key={a.name} className="bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-sm p-5">
                <div className="text-sm font-semibold text-[var(--color-bone)] mb-2">{a.name}</div>
                <p className="text-xs text-[var(--color-forge-muted)] leading-relaxed mb-4">{a.desc}</p>
                <div className="text-sm font-mono font-semibold text-[var(--color-copper)]">{a.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-[var(--color-forge-black)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-medium text-[var(--color-bone)] tracking-tight mb-8 text-center">Common questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((f) => (
              <div key={f.q} className="card">
                <div className="text-sm font-semibold text-[var(--color-bone)] mb-2">{f.q}</div>
                <div className="text-sm text-[var(--color-forge-muted)] leading-relaxed">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-[var(--color-forge-dark)] text-center relative overflow-hidden">
        <CircuitGlow />
        <div className="max-w-xl mx-auto relative z-10">
          <div className="badge-404 w-fit mx-auto mb-5">
            <span className="b-404">404</span><span className="b-sep" /><span className="b-trade">TRADE</span><span className="b-sep" /><span className="b-os">OS</span>
          </div>
          <h2 className="text-2xl font-medium text-[var(--color-bone)] mb-3">Not sure which plan?<br /><span className="text-[var(--color-copper)]">Let&rsquo;s figure it out together.</span></h2>
          <p className="text-[var(--color-forge-muted)] text-sm mb-6 leading-relaxed">30-minute call. No pressure. We&rsquo;ll tell you exactly what your trade business needs — even if that&rsquo;s not us.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">Book a free call <ArrowRight size={15} /></Link>
            <Link href="/work" className="btn-ghost">See our work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
