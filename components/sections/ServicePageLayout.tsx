"use client";
import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, ChevronDown, Check, X, Clock } from "lucide-react";

export type ScopeItem = { title: string; desc: string };
export type ProcessStep = { step: string; title: string; desc: string; timeline: string };
export type Faq = { q: string; a: string };

export type ServicePageData = {
  slug: string;
  name: string;
  eyebrow: string;
  heroTitle: ReactNode;
  heroDesc: string;
  fromPrice: string;
  timeline: string;
  overviewLabel: string;
  overviewTitle: string;
  overviewBody: string[];
  scopeTitle: string;
  scope: ScopeItem[];
  process: ProcessStep[];
  included: string[];
  excluded: string[];
  faqs: Faq[];
  finePrint: string[];
  planName: string;
  planPrice: string;
};

const allServices = [
  { name: "Website design", href: "/services/website-design" },
  { name: "Local SEO", href: "/services/local-seo" },
  { name: "Lead generation", href: "/services/lead-generation" },
  { name: "Review management", href: "/services/review-management" },
  { name: "Google Ads", href: "/services/google-ads" },
  { name: "Ongoing support", href: "/services/maintenance" },
];

function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col gap-3">
      {faqs.map((f, i) => (
        <div key={f.q} className="card-panel !p-0 overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 p-5 text-left"
          >
            <span className="text-sm font-semibold text-[var(--color-bone)]">{f.q}</span>
            <ChevronDown
              size={16}
              className={`flex-shrink-0 text-[var(--color-copper)] transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-sm text-[var(--color-forge-muted)] leading-relaxed">{f.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  const otherServices = allServices.filter((s) => s.href !== `/services/${data.slug}`);

  return (
    <>
      {/* Breadcrumb + hero */}
      <section className="section-pad bg-[var(--color-forge-black)] pb-10">
        <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--color-forge-rust)] mb-6">
          <Link href="/services" className="hover:text-[var(--color-copper)] transition-colors">Services</Link>
          <ChevronRight size={12} />
          <span className="text-[var(--color-forge-muted)]">{data.name}</span>
        </div>
        <span className="sec-label">{data.eyebrow}</span>
        <h1 className="text-4xl md:text-5xl font-medium text-[var(--color-bone)] tracking-tight mb-4 max-w-2xl text-balance">
          {data.heroTitle}
        </h1>
        <p className="text-[var(--color-forge-muted)] max-w-lg leading-relaxed mb-6">{data.heroDesc}</p>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 bg-[var(--color-forge-dark)] border border-[var(--color-forge-border)] rounded-sm px-3 py-2">
            <span className="text-xs text-[var(--color-forge-rust)] font-mono">from</span>
            <span className="text-sm font-semibold text-[var(--color-copper)]">{data.fromPrice}</span>
          </div>
          <div className="flex items-center gap-2 bg-[var(--color-forge-dark)] border border-[var(--color-forge-border)] rounded-sm px-3 py-2">
            <Clock size={13} className="text-[var(--color-system-green)]" />
            <span className="text-sm text-[var(--color-forge-muted)]">{data.timeline}</span>
          </div>
          <Link href="/contact" className="btn-primary">Get started <ArrowRight size={15} /></Link>
        </div>
      </section>

      <div className="px-6 md:px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 pb-20">
        {/* Main column */}
        <div className="flex flex-col gap-16 min-w-0">
          {/* Overview */}
          <section>
            <span className="sec-label">{data.overviewLabel}</span>
            <h2 className="text-2xl font-medium text-[var(--color-bone)] tracking-tight mb-4">{data.overviewTitle}</h2>
            <div className="flex flex-col gap-4">
              {data.overviewBody.map((p, i) => (
                <p key={i} className="text-sm text-[var(--color-forge-muted)] leading-relaxed">{p}</p>
              ))}
            </div>
          </section>

          {/* Scope of work */}
          <section>
            <span className="sec-label">Scope of work</span>
            <h2 className="text-2xl font-medium text-[var(--color-bone)] tracking-tight mb-6">{data.scopeTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.scope.map((s) => (
                <div key={s.title} className="card">
                  <div className="text-sm font-semibold text-[var(--color-bone)] mb-2">{s.title}</div>
                  <p className="text-sm text-[var(--color-forge-muted)] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section>
            <span className="sec-label">Process</span>
            <h2 className="text-2xl font-medium text-[var(--color-bone)] tracking-tight mb-6">How it works</h2>
            <div className="flex flex-col gap-5">
              {data.process.map((p) => (
                <div key={p.step} className="flex gap-5">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-9 h-9 rounded-full bg-[var(--color-copper)] text-[var(--color-forge-black)] font-mono font-bold text-sm flex items-center justify-center">
                      {p.step}
                    </div>
                    <div className="w-px flex-1 bg-[var(--color-forge-border)] mt-2 last:hidden" />
                  </div>
                  <div className="pb-2">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="text-sm font-semibold text-[var(--color-bone)]">{p.title}</span>
                      <span className="text-xs font-mono text-[var(--color-system-green)] bg-[var(--color-system-green)]/10 border border-[var(--color-system-green)]/30 rounded-full px-2 py-0.5">
                        {p.timeline}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-forge-muted)] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Included vs not included */}
          <section>
            <span className="sec-label">What&apos;s included</span>
            <h2 className="text-2xl font-medium text-[var(--color-bone)] tracking-tight mb-6">Clear scope, no surprises</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card-panel">
                <div className="text-sm font-semibold text-[var(--color-system-green)] mb-4">Included</div>
                <ul className="flex flex-col gap-3">
                  {data.included.map((i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-forge-muted)]">
                      <Check size={15} className="text-[var(--color-system-green)] flex-shrink-0 mt-0.5" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-panel">
                <div className="text-sm font-semibold text-[var(--color-error-red)] mb-4">Not included</div>
                <ul className="flex flex-col gap-3">
                  {data.excluded.map((i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-forge-muted)]">
                      <X size={15} className="text-[var(--color-error-red)] flex-shrink-0 mt-0.5" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <span className="sec-label">FAQ</span>
            <h2 className="text-2xl font-medium text-[var(--color-bone)] tracking-tight mb-6">Common questions</h2>
            <FaqAccordion faqs={data.faqs} />
          </section>

          {/* Fine print */}
          <section>
            <span className="sec-label">Fine print</span>
            <h2 className="text-lg font-medium text-[var(--color-bone)] tracking-tight mb-4">The details that matter</h2>
            <ul className="flex flex-col gap-2">
              {data.finePrint.map((f, i) => (
                <li key={i} className="text-xs text-[var(--color-forge-rust)] leading-relaxed">{f}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 self-start flex flex-col gap-5">
          <div className="card-panel">
            <span className="mono-label block mb-1">Best fit plan</span>
            <div className="text-lg font-semibold text-[var(--color-bone)] mb-2">{data.planName}</div>
            <div className="text-2xl font-bold text-[var(--color-bone)] mb-4">
              <span className="text-[var(--color-copper)] text-base">$</span>{data.planPrice}<span className="text-xs text-[var(--color-forge-muted)] font-mono font-normal">/mo</span>
            </div>
            <Link href="/contact" className="btn-primary w-full justify-center mb-2">Get started <ArrowRight size={15} /></Link>
            <Link href="/pricing" className="btn-ghost w-full justify-center">View all plans</Link>
          </div>
          <div className="card-panel">
            <div className="text-sm font-semibold text-[var(--color-bone)] mb-3">Other services</div>
            <ul className="flex flex-col gap-2.5">
              {otherServices.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="flex items-center justify-between text-sm text-[var(--color-forge-muted)] hover:text-[var(--color-copper)] transition-colors group">
                    {s.name}
                    <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* CTA */}
      <section className="section-pad bg-[var(--color-forge-dark)] text-center">
        <div className="max-w-xl mx-auto">
          <div className="badge-404 w-fit mx-auto mb-5">
            <span className="b-404">404</span><span className="b-sep" /><span className="b-trade">TRADE</span><span className="b-sep" /><span className="b-os">OS</span>
          </div>
          <h2 className="text-2xl font-medium text-[var(--color-bone)] mb-3">Ready to stop being a <span className="text-[var(--color-copper)]">404</span>?</h2>
          <p className="text-[var(--color-forge-muted)] text-sm mb-6 leading-relaxed">30-minute call. No pressure. We&apos;ll tell you exactly what your trade business needs.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">Book a free call <ArrowRight size={15} /></Link>
            <Link href="/work" className="btn-ghost">See our work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
