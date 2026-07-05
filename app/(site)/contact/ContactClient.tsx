"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle, Clock, Phone, Mail, MapPin } from "lucide-react";
import CircuitGlow from "@/components/decor/CircuitGlow";
import TerminalFrame from "@/components/ui/TerminalFrame";

const trades = ["Plumber","Electrician","HVAC technician","Roofer","General contractor","Landscaper","Painter","Concrete / masonry","Fencing","Other trade"];
const plans = ["Launch ($197/mo)","Rank ($397/mo) — most popular","Dominate ($897/mo)","Not sure yet"];
const sources = ["Google search","Facebook / Instagram","Referral","Word of mouth","LinkedIn","Other"];

export default function ContactClient() {
  const [form, setForm] = useState({
    first_name: "", last_name: "", email: "", phone: "",
    business_name: "", trade_type: "", city: "",
    plan_interest: "", message: "", source: "",
    website_url: "", // honeypot
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.first_name || !form.email) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        const d = await res.json();
        setError(d.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="section-pad bg-[var(--color-forge-black)] pb-10 relative overflow-hidden">
        <CircuitGlow />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="sec-label">Get a free quote</span>
          <h1 className="text-4xl md:text-5xl font-medium text-[var(--color-bone)] tracking-tight mb-4">
            Let&rsquo;s get you off<br />the <span className="text-[var(--color-copper)]">404</span> list.
          </h1>
          <p className="text-[var(--color-forge-muted)] max-w-lg leading-relaxed">
            Fill out the form and we&rsquo;ll put together a custom quote within 24 hours. No pressure, no obligation.
          </p>

          {/* Trust bar */}
          <div className="flex flex-wrap gap-6 mt-6">
            {[["Free","30-min discovery call"],["No","long-term contracts"],["Response","within 24 hours"]].map(([strong, rest]) => (
              <div key={strong} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-system-green)]" />
                <span className="text-sm text-[var(--color-forge-muted)]"><strong className="text-[var(--color-bone)]">{strong}</strong> {rest}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="px-6 md:px-10 pb-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

        {/* Form */}
        <div className="lg:col-span-3">
          {success ? (
            <TerminalFrame title="quote_request.log" status="online" statusLabel="SENT">
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-14 h-14 rounded-full bg-[var(--color-copper)] flex items-center justify-center mb-5">
                  <CheckCircle size={26} className="text-forge-black" />
                </div>
                <h2 className="text-xl font-semibold text-[var(--color-bone)] mb-3">Quote request sent!</h2>
                <p className="text-[var(--color-forge-muted)] text-sm leading-relaxed max-w-xs">
                  We&rsquo;ll review your details and get back to you within 24 hours with a custom quote. Check your email for a confirmation.
                </p>
              </div>
            </TerminalFrame>
          ) : (
            <TerminalFrame
              title="new_quote_request.form"
              status={loading ? "processing" : "idle"}
              statusLabel={loading ? "SENDING" : "AWAITING INPUT"}
            >
            <form onSubmit={submit} className="space-y-5">
              <div>
                <h2 className="text-lg font-semibold text-[var(--color-bone)] mb-1">Tell us about your business</h2>
                <p className="text-sm text-[var(--color-forge-muted)]">Takes about 3 minutes. The more detail the better your quote will be.</p>
              </div>

              <span className="mono-label block">Your info</span>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[var(--color-copper-light)] mb-1.5">First name *</label>
                  <input className="w-full bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-sm px-3 py-2.5 text-sm text-[var(--color-bone)] placeholder-forge-rust focus:border-[var(--color-copper)] outline-none" placeholder="Billy" value={form.first_name} onChange={set("first_name")} required />
                </div>
                <div>
                  <label className="block text-xs text-[var(--color-copper-light)] mb-1.5">Last name *</label>
                  <input className="w-full bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-sm px-3 py-2.5 text-sm text-[var(--color-bone)] placeholder-forge-rust focus:border-[var(--color-copper)] outline-none" placeholder="Showalter" value={form.last_name} onChange={set("last_name")} required />
                </div>
              </div>
              <div>
                <label className="block text-xs text-[var(--color-copper-light)] mb-1.5">Email address *</label>
                <input type="email" className="w-full bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-sm px-3 py-2.5 text-sm text-[var(--color-bone)] placeholder-forge-rust focus:border-[var(--color-copper)] outline-none" placeholder="you@yourbusiness.com" value={form.email} onChange={set("email")} required />
              </div>
              <div>
                <label className="block text-xs text-[var(--color-copper-light)] mb-1.5">Phone number *</label>
                <input type="tel" className="w-full bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-sm px-3 py-2.5 text-sm text-[var(--color-bone)] placeholder-forge-rust focus:border-[var(--color-copper)] outline-none" placeholder="(812) 562-8504" value={form.phone} onChange={set("phone")} required />
              </div>

              <hr className="rule" />
              <span className="mono-label block">Your business</span>

              <div>
                <label className="block text-xs text-[var(--color-copper-light)] mb-1.5">Business name</label>
                <input className="w-full bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-sm px-3 py-2.5 text-sm text-[var(--color-bone)] placeholder-forge-rust focus:border-[var(--color-copper)] outline-none" placeholder="Smith Plumbing Co." value={form.business_name} onChange={set("business_name")} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[var(--color-copper-light)] mb-1.5">Trade type</label>
                  <select className="w-full bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-sm px-3 py-2.5 text-sm text-[var(--color-bone)] focus:border-[var(--color-copper)] outline-none" value={form.trade_type} onChange={set("trade_type")}>
                    <option value="">Select your trade</option>
                    {trades.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-[var(--color-copper-light)] mb-1.5">Service area / city</label>
                  <input className="w-full bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-sm px-3 py-2.5 text-sm text-[var(--color-bone)] placeholder-forge-rust focus:border-[var(--color-copper)] outline-none" placeholder="Terre Haute, IN" value={form.city} onChange={set("city")} />
                </div>
              </div>

              <hr className="rule" />
              <span className="mono-label block">Choose your plan</span>

              <div className="flex flex-col gap-2.5">
                {plans.map(p => (
                  <label key={p} className={`flex items-center gap-3 p-3 rounded-sm border cursor-pointer transition-colors ${form.plan_interest === p ? "border-[var(--color-copper)] bg-[var(--color-copper)]/5" : "border-[var(--color-forge-border)] hover:border-[var(--color-copper)]/40"}`}>
                    <input type="radio" name="plan" value={p} checked={form.plan_interest === p} onChange={set("plan_interest")} className="accent-[var(--color-copper)]" />
                    <span className="text-sm text-[var(--color-forge-muted)]">{p}</span>
                  </label>
                ))}
              </div>

              <hr className="rule" />
              <span className="mono-label block">Anything else?</span>

              <div>
                <label className="block text-xs text-[var(--color-copper-light)] mb-1.5">Tell us more about your goals</label>
                <textarea className="w-full bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-sm px-3 py-2.5 text-sm text-[var(--color-bone)] placeholder-forge-rust focus:border-[var(--color-copper)] outline-none resize-none h-24" placeholder="e.g. I'm a plumber in Terre Haute, no website yet, want to start getting leads from Google..." value={form.message} onChange={set("message")} />
              </div>
              <div>
                <label className="block text-xs text-[var(--color-copper-light)] mb-1.5">How did you hear about us?</label>
                <select className="w-full bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-sm px-3 py-2.5 text-sm text-[var(--color-bone)] focus:border-[var(--color-copper)] outline-none" value={form.source} onChange={set("source")}>
                  <option value="">Select one</option>
                  {sources.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              {/* Honeypot */}
              <input type="text" name="website_url" value={form.website_url} onChange={set("website_url")} className="hidden" tabIndex={-1} autoComplete="off" />

              {error && <p className="text-sm text-[var(--color-error-red)] bg-error-red/10 border border-error-red/30 rounded-sm px-3 py-2">{error}</p>}

              <button type="submit" disabled={loading} className="w-full btn-primary justify-center text-sm py-3">
                {loading ? "Sending..." : "Send my quote request"} {!loading && <ArrowRight size={15} />}
              </button>
              <p className="text-xs text-[var(--color-forge-rust)] text-center">We&rsquo;ll respond within 24 hours — usually much faster. No spam, ever.</p>
            </form>
            </TerminalFrame>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-2 flex flex-col gap-4">

          {/* What happens next */}
          <div className="card-panel">
            <h3 className="text-sm font-semibold text-[var(--color-bone)] mb-4">What happens next</h3>
            <div className="flex flex-col gap-4">
              {[
                { time: "Within 24 hrs", desc: "We review your request and send a custom quote to your email." },
                { time: "Discovery call", desc: "30 minutes on the phone. We learn your business, you ask us anything." },
                { time: "We build it", desc: "Custom design, trade-specific copy, full SEO setup. You approve before launch." },
                { time: "Go live & rank", desc: "Your site launches and starts showing up in local search within 30 days." },
              ].map((step, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-copper)] mt-1 flex-shrink-0" />
                    {i < 3 && <div className="w-px flex-1 bg-forge-border mt-1" />}
                  </div>
                  <div className="pb-4">
                    <div className="text-xs font-semibold text-[var(--color-bone)] mb-1">{step.time}</div>
                    <div className="text-xs text-[var(--color-forge-muted)] leading-relaxed">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why 404 TradeOS */}
          <div className="card-panel">
            <h3 className="text-sm font-semibold text-[var(--color-bone)] mb-4">Why 404 TradeOS</h3>
            {[
              { icon: <MapPin size={15} />, title: "Midwest roots", body: "Based in Terre Haute, IN. We understand the local market." },
              { icon: <Clock size={15} />, title: "No contracts, ever", body: "Month-to-month on every plan. You own your site. Cancel anytime." },
              { icon: <CheckCircle size={15} />, title: "Trades only", body: "We don't build sites for restaurants. Only trades — faster builds, better results." },
            ].map(w => (
              <div key={w.title} className="flex gap-3 mb-4 last:mb-0">
                <div className="w-8 h-8 bg-[var(--color-copper)] rounded-sm flex items-center justify-center text-forge-black flex-shrink-0">{w.icon}</div>
                <div>
                  <div className="text-xs font-semibold text-[var(--color-bone)] mb-0.5">{w.title}</div>
                  <div className="text-xs text-[var(--color-forge-muted)] leading-relaxed">{w.body}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact methods */}
          <div className="card-panel">
            <h3 className="text-sm font-semibold text-[var(--color-bone)] mb-4">Other ways to reach us</h3>
            {[
              { icon: <Mail size={15} />, label: "Email", val: "hello@404tradeos.com" },
              { icon: <Phone size={15} />, label: "Call or text", val: "(812) 562-8504" },
              { icon: <MapPin size={15} />, label: "Office", val: "7175 Robertson Rd., Terre Haute, IN 47802" },
            ].map(c => (
              <div key={c.label} className="flex items-center gap-3 bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-sm px-3 py-2.5 mb-2 last:mb-0">
                <div className="w-8 h-8 bg-[var(--color-copper)] rounded-sm flex items-center justify-center text-forge-black flex-shrink-0">{c.icon}</div>
                <div>
                  <div className="text-xs text-[var(--color-forge-rust)]">{c.label}</div>
                  <div className="text-sm font-medium text-[var(--color-bone)]">{c.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
