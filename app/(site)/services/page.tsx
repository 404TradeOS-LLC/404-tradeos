import Link from "next/link";
import { Smartphone, Search, Phone, BarChart3, Star, RefreshCw, ArrowRight } from "lucide-react";
import CircuitGlow from "@/components/decor/CircuitGlow";
import OSModuleCard from "@/components/sections/OSModuleCard";

export const metadata = {
  title: "Services",
  description: "Website design, local SEO, lead generation, review management, Google Ads, and ongoing support for trade businesses.",
  openGraph: {
    title: "Services | 404 TradeOS",
    description: "Website design, local SEO, lead generation, review management, Google Ads, and ongoing support for trade businesses.",
  },
};

const services = [
  { id: "MOD-01", icon: <Smartphone size={20} />, name: "Website design", desc: "Custom Next.js sites built for trade businesses. Fast, mobile-first, 95+ Lighthouse score.", href: "/services/website-design", from: "$197/mo", time: "2 weeks" },
  { id: "MOD-02", icon: <Search size={20} />, name: "Local SEO", desc: "Get found in the Google Map Pack and organic results for your trade and service area.", href: "/services/local-seo", from: "Included in Rank", time: "30–90 days" },
  { id: "MOD-03", icon: <Phone size={20} />, name: "Lead generation", desc: "Supabase-powered lead capture with a private admin dashboard and real-time notifications.", href: "/services/lead-generation", from: "Included in Rank", time: "7 days setup" },
  { id: "MOD-05", icon: <Star size={20} />, name: "Review management", desc: "Automated SMS + email review requests after every job. Responses handled for you.", href: "/services/review-management", from: "+$79/mo add-on", time: "7 days setup" },
  { id: "MOD-04", icon: <BarChart3 size={20} />, name: "Google Ads", desc: "Managed PPC campaigns targeting emergency and scheduled trade searches in your area.", href: "/services/google-ads", from: "+$299/mo", time: "Live in 48hrs" },
  { id: "MOD-06", icon: <RefreshCw size={20} />, name: "Ongoing support", desc: "Hosting, SSL, security scans, content updates, and monthly performance reports.", href: "/services/maintenance", from: "$97/mo", time: "Continuous" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section-pad bg-[var(--color-forge-black)] pb-10 relative overflow-hidden">
        <CircuitGlow />
        <div className="relative z-10">
        <span className="sec-label">Installed modules</span>
        <h1 className="text-4xl md:text-5xl font-medium text-[var(--color-bone)] tracking-tight mb-4">
          Everything your trade<br />business needs <span className="text-[var(--color-copper)]">online</span>.
        </h1>
        <p className="text-[var(--color-forge-muted)] max-w-lg leading-relaxed">
          We don&apos;t build sites for restaurants or salons. Every service we offer is designed specifically for trade businesses — plumbers, electricians, roofers, HVAC techs, and contractors.
        </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(s => (
          <OSModuleCard key={s.name} id={s.id} icon={s.icon} title={s.name} body={s.desc} href={s.href} from={s.from} time={s.time} />
        ))}
      </section>

      {/* CTA */}
      <section className="section-pad bg-[var(--color-forge-dark)] text-center relative overflow-hidden border-t border-[var(--color-forge-border)]">
        <CircuitGlow />
        <div className="max-w-xl mx-auto relative z-10">
          <div className="badge-404 w-fit mx-auto mb-5"><span className="b-404">404</span><span className="b-sep" /><span className="b-trade">TRADE</span><span className="b-sep" /><span className="b-os">OS</span></div>
          <h2 className="text-2xl font-medium text-[var(--color-bone)] mb-3">Not sure which modules<br />you need?</h2>
          <p className="text-[var(--color-forge-muted)] text-sm mb-6 leading-relaxed">Free 30-minute call. We&rsquo;ll tell you exactly what your trade business needs to start ranking.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">Get a free quote <ArrowRight size={15} /></Link>
            <Link href="/pricing" className="btn-ghost">See pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
