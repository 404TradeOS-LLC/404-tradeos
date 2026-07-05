import Link from "next/link";
import { ArrowRight, Phone, Star, Search, BarChart3, RefreshCw, Smartphone, Target, Zap, MapPin } from "lucide-react";
import CircuitGlow from "@/components/decor/CircuitGlow";
import TrustBar from "@/components/sections/TrustBar";
import Reveal from "@/components/motion/Reveal";
import BusinessScanner from "@/components/sections/BusinessScanner";
import SystemMetrics from "@/components/sections/SystemMetrics";
import OSModuleCard from "@/components/sections/OSModuleCard";
import SeeWhatWeBuild from "@/components/sections/SeeWhatWeBuild";
import BeforeAfterShowcase from "@/components/sections/BeforeAfterShowcase";
import TradeImage from "@/components/ui/TradeImage";

const heroFeatures = [
  { icon: <Target size={16} />, title: "Built for trades", body: "We understand your business." },
  { icon: <Zap size={16} />, title: "Results that matter", body: "More calls. More leads. More booked jobs." },
  { icon: <MapPin size={16} />, title: "Local. Reliable. Real.", body: "Based in Terre Haute, IN. Serving the Midwest." },
];

function Sparkline({ points }: { points: string }) {
  return (
    <svg width="56" height="20" viewBox="0 0 56 20" className="opacity-90" aria-hidden="true">
      <polyline points={points} fill="none" stroke="var(--color-system-green)" strokeWidth="1.5" />
    </svg>
  );
}

const services = [
  { id: "MOD-01", icon: <Smartphone size={18} />, title: "Website design", body: "Custom sites built for trade businesses. Fast, mobile-first, designed to convert visitors into booked jobs.", href: "/services/website-design" },
  { id: "MOD-02", icon: <Search size={18} />, title: "Local SEO", body: "Get found on Google Maps and organic search when customers search for your trade in your area.", href: "/services/local-seo" },
  { id: "MOD-03", icon: <Phone size={18} />, title: "Lead capture", body: "Smart forms, click-to-call buttons, and booking widgets that turn visitors into paying customers.", href: "/services/lead-generation" },
  { id: "MOD-04", icon: <BarChart3 size={18} />, title: "Google Ads", body: "Paid search campaigns that put you at the top of Google the same day we launch.", href: "/services/google-ads" },
  { id: "MOD-05", icon: <Star size={18} />, title: "Review management", body: "Automated review request flows that grow your Google rating on autopilot after every job.", href: "/services/review-management" },
  { id: "MOD-06", icon: <RefreshCw size={18} />, title: "Ongoing support", body: "Monthly hosting, security, updates, and reports so you never worry about your site again.", href: "/services/maintenance" },
];

const process = [
  { step: "step_01", title: "Discovery call", body: "We learn your trade, service area, and competitors in 30 minutes — we do the homework before you pick up the phone.", time: "Day 1" },
  { step: "step_02", title: "Design & build", body: "Custom design, trade-specific copy, and full SEO setup. You review and approve before anything goes live.", time: "Week 1–2" },
  { step: "step_03", title: "Review & revise", body: "Two rounds of revisions included. We don't launch until you're completely satisfied with every detail.", time: "Week 2–3" },
  { step: "step_04", title: "Launch & rank", body: "Domain, hosting, SSL, Google Business — all handled. Your site goes live and starts ranking within 30 days.", time: "Week 2–4" },
];

const featuredReview = {
  text: "Within 3 weeks of launching I was ranking #1 for plumber in my city. Phones haven't stopped ringing since.",
  name: "Jake S.",
  trade: "Plumber — Indianapolis, IN",
  initials: "JS",
};

const reviews = [
  { text: "I had a website before but nobody could find me. These guys had me on page one in less than a month.", name: "Mike R.", trade: "Electrician — Chicago, IL", initials: "MR" },
  { text: "Site was live in 2 weeks and I got my first lead that same week. Best money I've spent on my business.", name: "Tom D.", trade: "Roofer — St. Louis, MO", initials: "TD" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — full-bleed jobsite photo with floating control-center overlay */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[var(--color-forge-black)]">
        <TradeImage
          src="/images/hero/contractor-truck-jobsite.jpg"
          alt="404 TradeOS contractor checking leads on his phone beside his branded truck at a jobsite"
          priority
          sizes="100vw"
          overlay={false}
          className="absolute inset-0"
        />
        {/* Left-to-right + bottom dark fade so text and the floating panel stay legible over the photo */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(13,10,7,0.97) 0%, rgba(13,10,7,0.88) 28%, rgba(13,10,7,0.45) 52%, rgba(13,10,7,0.15) 70%, transparent 85%), linear-gradient(180deg, transparent 55%, rgba(13,10,7,0.9) 100%)",
          }}
        />

        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 relative z-10 pt-28 pb-10 lg:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,560px)] gap-10 items-end">

            {/* Left — copy */}
            <div>
              <div className="fade-up mono-label mb-4">Websites. SEO. Leads. Growth.</div>

              <h1 className="fade-up fade-up-delay-1 text-5xl md:text-6xl font-medium text-[var(--color-bone)] leading-[1.05] tracking-tight text-balance mb-5 uppercase">
                Stop being a 404.<br />
                <span className="text-[var(--color-copper)]">Start getting found.</span>
              </h1>

              <p className="fade-up fade-up-delay-2 text-base md:text-lg text-[var(--color-forge-muted)] leading-relaxed mb-8 max-w-lg">
                High-performance websites and digital marketing systems that get trade businesses more calls, more leads, and more jobs.
              </p>

              <div className="fade-up fade-up-delay-3 flex flex-wrap gap-3 mb-10">
                <Link href="/contact" className="btn-primary">
                  Get a quote <Target size={16} />
                </Link>
                <Link href="/work" className="btn-outline">
                  See our work <ArrowRight size={16} />
                </Link>
              </div>

              <div className="fade-up fade-up-delay-3 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl">
                {heroFeatures.map((f) => (
                  <div key={f.title} className="flex items-start gap-2.5">
                    <span className="text-[var(--color-copper)] mt-0.5 shrink-0">{f.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-[var(--color-bone)]">{f.title}</div>
                      <div className="text-xs text-[var(--color-forge-muted)] leading-snug">{f.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — floating TradeOS control center, anchored over the photo */}
            <div className="hidden lg:block fade-in-right border border-[var(--color-forge-border)] bg-[var(--color-forge-dark)]/95 backdrop-blur-sm rounded-sm overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-[var(--color-forge-border)] bg-[var(--color-forge-black)]/90">
                <span className="mono-label">TradeOS <span className="text-[var(--color-copper)]">Control Center</span></span>
                <div className="status-online">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-system-green)]" />
                  Status: Online
                </div>
              </div>

              <div className="grid grid-cols-4 border-b border-[var(--color-forge-border)]">
                {[
                  { k: "Leads this month", v: "47", delta: "↑ 18%", points: "0,16 8,15 16,12 24,13 32,9 40,7 48,3" },
                  { k: "Calls tracked", v: "22", delta: "↑ 27%", points: "0,17 8,14 16,15 24,11 32,10 40,6 48,4" },
                  { k: "Quote requests", v: "13", delta: "↑ 8%", points: "0,12 8,13 16,10 24,11 32,8 40,9 48,5" },
                  { k: "Reviews gained", v: "+8", delta: "↑ 33%", points: "0,18 8,16 16,13 24,10 32,8 40,5 48,2" },
                ].map((m, i) => (
                  <div key={m.k} className={`p-3 ${i < 3 ? "border-r border-[var(--color-forge-border)]" : ""}`}>
                    <div className="mono-label mb-1.5">{m.k}</div>
                    <div className="flex items-end justify-between gap-1">
                      <span className="text-xl font-semibold text-[var(--color-bone)] leading-none">{m.v}</span>
                      <Sparkline points={m.points} />
                    </div>
                    <div className="text-[10px] text-[var(--color-system-green)] mt-1">{m.delta}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-[1fr_1fr_1.2fr]">
                <div className="p-3 border-r border-[var(--color-forge-border)]">
                  <div className="mono-label mb-1.5">Website sessions</div>
                  <div className="flex items-end justify-between gap-1">
                    <span className="text-xl font-semibold text-[var(--color-bone)] leading-none">1,215</span>
                    <Sparkline points="0,17 8,15 16,14 24,11 32,12 40,7 48,4" />
                  </div>
                  <div className="text-[10px] text-[var(--color-system-green)] mt-1">↑ 21%</div>
                </div>
                <div className="p-3 border-r border-[var(--color-forge-border)]">
                  <div className="mono-label mb-1.5">Google ranking</div>
                  <div className="flex items-end justify-between gap-1">
                    <span className="text-xl font-semibold text-[var(--color-system-green)] leading-none">Top 3</span>
                    <Sparkline points="0,18 8,17 16,14 24,15 32,10 40,6 48,2" />
                  </div>
                  <div className="text-[10px] text-[var(--color-system-green)] mt-1">↑ 12 positions</div>
                </div>
                <div className="p-3">
                  <div className="mono-label mb-1.5">Recent activity</div>
                  <ul className="space-y-1">
                    {[
                      ["New lead from website", "2m ago"],
                      ["Quote request submitted", "15m ago"],
                      ["Google review received", "32m ago"],
                      ["Phone call tracked", "42m ago"],
                    ].map(([label, time]) => (
                      <li key={label} className="flex items-center justify-between gap-2 text-[10px]">
                        <span className="text-[var(--color-forge-muted)] truncate">{label}</span>
                        <span className="text-[var(--color-forge-rust)] shrink-0">{time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR — riveted plate, trade icons */}
      <section className="py-10 bg-[var(--color-forge-black)] border-b border-[var(--color-forge-border)]">
        <Reveal className="max-w-5xl mx-auto px-6">
          <TrustBar />
        </Reveal>
      </section>

      {/* 404 BUSINESS SCANNER */}
      <section className="section-pad bg-[var(--color-forge-dark)]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-10">
            <span className="sec-label block text-center">Diagnostic tool</span>
            <h2 className="text-3xl md:text-4xl font-medium text-[var(--color-bone)] tracking-tight mb-3">
              Run the 404 scanner.
            </h2>
            <p className="text-[var(--color-forge-muted)] max-w-xl mx-auto">
              This is what happens to a trade business with no website. See it, then fix it.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <BusinessScanner />
          </Reveal>
        </div>
      </section>

      {/* SYSTEM METRICS */}
      <section className="section-pad bg-[var(--color-forge-black)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SystemMetrics />
          </Reveal>
        </div>
      </section>

      {/* SERVICES — OS modules */}
      <section className="section-pad bg-[var(--color-forge-dark)]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex items-end justify-between mb-10">
            <div>
              <span className="sec-label">Installed modules</span>
              <h2 className="text-3xl md:text-4xl font-medium text-[var(--color-bone)] tracking-tight">
                Everything your trade<br />business needs online
              </h2>
            </div>
            <Link href="/services" className="hidden md:flex items-center gap-1 text-sm text-[var(--color-copper)] hover:text-[var(--color-copper-light)] transition-colors font-mono">
              View all <ArrowRight size={14} />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <OSModuleCard icon={s.icon} id={s.id} title={s.title} body={s.body} href={s.href} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad bg-[var(--color-forge-black)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="sec-label">How it works</span>
            <h2 className="text-3xl md:text-4xl font-medium text-[var(--color-bone)] tracking-tight mb-10">
              Done for you. Built right.<br />No shortcuts.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="border border-[var(--color-forge-border)] bg-[var(--color-forge-dark)] rounded-sm p-5 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-[var(--color-copper)]/30">{String(i + 1).padStart(2, "0")}</span>
                    {i < process.length - 1 && <span className="hidden lg:block flex-1 h-px bg-[var(--color-forge-border)]" />}
                  </div>
                  <h3 className="text-base font-semibold text-[var(--color-bone)] mb-2">{p.title}</h3>
                  <p className="text-sm text-[var(--color-forge-muted)] leading-relaxed mb-4">{p.body}</p>
                  <span className="inline-block text-xs font-mono text-[var(--color-system-green)] bg-[var(--color-system-green)]/10 border border-system-green/30 rounded-full px-3 py-1">
                    {p.time}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECONDARY CTA — mid-page conversion point */}
      <section className="py-10 bg-[var(--color-forge-dark)] border-y border-[var(--color-forge-border)]">
        <Reveal className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <div className="text-lg font-semibold text-[var(--color-bone)]">Most sites go live in 2 weeks.</div>
            <div className="text-sm text-[var(--color-forge-muted)]">Free 30-minute call — no pressure, no obligation.</div>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Get your free quote <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      {/* BEFORE / AFTER */}
      <section className="section-pad bg-[var(--color-forge-black)]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-10">
            <span className="sec-label block text-center">Case study</span>
            <h2 className="text-3xl md:text-4xl font-medium text-[var(--color-bone)] tracking-tight">
              From 404 to found
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <BeforeAfterShowcase />
          </Reveal>
        </div>
      </section>

      <SeeWhatWeBuild />

      {/* REVIEWS */}
      <section className="section-pad bg-[var(--color-forge-dark)] border-t border-[var(--color-forge-border)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="sec-label">Client results</span>
            <h2 className="text-3xl font-medium text-[var(--color-bone)] tracking-tight mb-10">
              Trades that went from<br />404 to found
            </h2>
          </Reveal>

          {/* Featured pull-quote */}
          <Reveal>
            <blockquote className="border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm p-8 text-center max-w-2xl mx-auto mb-6">
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[var(--color-copper)] text-[var(--color-copper)]" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-[var(--color-bone)] leading-relaxed font-medium mb-4">
                &ldquo;{featuredReview.text}&rdquo;
              </p>
              <footer className="text-sm text-[var(--color-forge-rust)] font-mono">
                {featuredReview.name} — {featuredReview.trade}
              </footer>
            </blockquote>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.1}>
                <div className="border border-[var(--color-forge-border)] bg-[var(--color-forge-black)] rounded-sm p-5 h-full">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i2) => (
                      <Star key={i2} size={12} className="fill-[var(--color-copper)] text-[var(--color-copper)]" />
                    ))}
                  </div>
                  <p className="text-sm text-[var(--color-forge-muted)] leading-relaxed mb-5 italic">&ldquo;{r.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-copper)] flex items-center justify-center text-xs font-semibold text-forge-black">
                      {r.initials}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[var(--color-bone)]">{r.name}</div>
                      <div className="text-xs text-[var(--color-forge-rust)] font-mono">{r.trade}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-[var(--color-forge-dark)] text-center relative overflow-hidden">
        <CircuitGlow />
        <Reveal className="max-w-2xl mx-auto relative z-10">
          <div className="badge-404 w-fit mx-auto mb-6">
            <span className="b-404">404</span>
            <span className="b-sep" />
            <span className="b-trade">TRADE</span>
            <span className="b-sep" />
            <span className="b-os">OS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--color-bone)] tracking-tight mb-4">
            Stop being a <span className="text-[var(--color-copper)]">404</span>.<br />
            Start getting found.
          </h2>
          <p className="text-[var(--color-forge-muted)] leading-relaxed mb-8">
            Free 30-minute discovery call. No contracts, no pressure. Just a website that works as hard as you do.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-primary">
              Book a free call <ArrowRight size={16} />
            </Link>
            <Link href="/pricing" className="btn-ghost">
              See pricing
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
