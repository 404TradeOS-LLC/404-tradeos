"use client";
import { useId, useState } from "react";
import { LayoutDashboard, Globe, Search, PhoneCall, Star, Megaphone, ShieldCheck } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import ControlCenterDemo, { type ModuleKey } from "@/components/demos/ControlCenterDemo";
import WebsiteDesignDemo from "@/components/demos/WebsiteDesignDemo";
import LocalSEODemo from "@/components/demos/LocalSEODemo";
import LeadGenerationDemo from "@/components/demos/LeadGenerationDemo";
import ReviewManagementDemo from "@/components/demos/ReviewManagementDemo";
import GoogleAdsDemo from "@/components/demos/GoogleAdsDemo";
import MaintenanceDemo from "@/components/demos/MaintenanceDemo";

type TabKey = "control" | ModuleKey;

const tabs: { key: TabKey; label: string; icon: typeof Globe }[] = [
  { key: "control", label: "Control Center", icon: LayoutDashboard },
  { key: "website", label: "Website design", icon: Globe },
  { key: "seo", label: "Local SEO", icon: Search },
  { key: "leads", label: "Lead generation", icon: PhoneCall },
  { key: "reviews", label: "Reviews", icon: Star },
  { key: "ads", label: "Google Ads", icon: Megaphone },
  { key: "maintenance", label: "Maintenance", icon: ShieldCheck },
];

export default function SeeWhatWeBuild() {
  const [active, setActive] = useState<TabKey>("control");
  const panelId = useId();

  return (
    <section className="section-pad bg-[var(--color-forge-black)] border-t border-[var(--color-forge-border)]" id="see-what-we-build">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-10">
          <span className="sec-label block text-center">Live product demos</span>
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--color-bone)] tracking-tight mb-3">
            See what we build.
          </h2>
          <p className="text-[var(--color-forge-muted)] max-w-xl mx-auto leading-relaxed">
            Every dashboard below is real software — the same systems running behind every TradeOS client site. Click around.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            role="tablist"
            aria-label="Product demos"
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {tabs.map((t) => {
              const selected = active === t.key;
              return (
                <button
                  key={t.key}
                  id={`tab-${t.key}`}
                  role="tab"
                  aria-selected={selected}
                  aria-controls={selected ? panelId : undefined}
                  onClick={() => setActive(t.key)}
                  className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wide px-3.5 py-2 rounded-sm border transition-colors ${
                    selected
                      ? "border-[var(--color-copper)] text-[var(--color-copper-light)] bg-[var(--color-copper)]/10"
                      : "border-[var(--color-forge-border)] text-[var(--color-forge-rust)] hover:text-[var(--color-forge-muted)] hover:border-[var(--color-forge-rust)]"
                  }`}
                >
                  <t.icon size={13} /> {t.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div id={panelId} role="tabpanel" aria-labelledby={`tab-${active}`} className="max-w-4xl mx-auto">
            {active === "control" && <ControlCenterDemo onSelectModule={(k) => setActive(k)} />}
            {active === "website" && <WebsiteDesignDemo />}
            {active === "seo" && <LocalSEODemo />}
            {active === "leads" && <LeadGenerationDemo />}
            {active === "reviews" && <ReviewManagementDemo />}
            {active === "ads" && <GoogleAdsDemo />}
            {active === "maintenance" && <MaintenanceDemo />}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
