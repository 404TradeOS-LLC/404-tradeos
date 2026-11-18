import ServicePageLayout, { type ServicePageData } from "@/components/sections/ServicePageLayout";

export const metadata = {
  title: "Ongoing Support & Maintenance",
  description: "Hosting, SSL, security scans, content updates, and monthly performance reports.",
  openGraph: {
    title: "Ongoing Support & Maintenance | 404 TradeOS",
    description: "Hosting, SSL, security scans, content updates, and monthly performance reports.",
  },
};

const data: ServicePageData = {
  slug: "maintenance",
  name: "Ongoing support",
  eyebrow: "Ongoing support & maintenance",
  heroTitle: <>Your site, watched<br /><span className="text-[var(--color-copper)]">every single day.</span></>,
  heroDesc: "Hosting, SSL, security scans, and content updates handled for you — so your website stays fast, secure, and current without you ever having to think about it.",
  fromPrice: "$97/mo",
  timeline: "Continuous coverage",
  overviewLabel: "Overview",
  overviewTitle: "A website is infrastructure, not a one-time purchase",
  overviewBody: [
    "An unmaintained website degrades quietly. SSL certificates lapse, plugins (if you're not on our stack) go unpatched, content goes stale, and nobody notices until a customer mentions the site looked broken — or worse, until it actually is.",
    "Every plan includes hosting on Vercel's global edge network, automatic SSL renewal, uptime monitoring, and recurring security scans. Higher tiers add monthly content updates — new photos, updated service area pages, pricing changes — and performance reporting so you always know your site is doing its job.",
    "This is the same infrastructure layer that keeps the rest of your stack — lead pipeline, SEO, review automation — running without interruption.",
  ],
  scopeTitle: "What's covered at every tier",
  scope: [
    { title: "Hosting + SSL", desc: "Deployed on Vercel's edge network with automatic SSL renewal — no expired-certificate warnings, ever." },
    { title: "Uptime monitoring", desc: "Continuous monitoring with alerts if your site ever goes down, so issues get caught before customers notice." },
    { title: "Security scans", desc: "Recurring scans for vulnerabilities, with patches applied as needed." },
    { title: "Content updates", desc: "Text, photo, and pricing updates handled for you — included monthly on Rank and Dominate tiers." },
    { title: "Performance reporting", desc: "Monthly Lighthouse score and load-time tracking, so you know your site is staying fast." },
    { title: "Backup + recovery", desc: "Regular backups of your site and database, so nothing is ever permanently lost." },
  ],
  process: [
    { step: "1", title: "Coverage begins at launch", desc: "Maintenance starts automatically the day your site goes live — no separate onboarding needed.", timeline: "Day 1" },
    { step: "2", title: "Monthly check-in", desc: "Security scan, uptime review, and performance check run every month.", timeline: "Monthly" },
    { step: "3", title: "Content update requests", desc: "Submit update requests anytime — turned around per your tier's SLA.", timeline: "1–2 business days" },
    { step: "4", title: "Quarterly performance report", desc: "A deeper look at site speed, uptime history, and recommendations for the quarter ahead.", timeline: "Quarterly" },
  ],
  included: [
    "Hosting + automatic SSL renewal",
    "Uptime monitoring with alerts",
    "Recurring security scans",
    "Regular backups",
    "Content updates (Rank + Dominate)",
    "Monthly performance reporting (Rank + Dominate)",
  ],
  excluded: [
    "New page builds or major redesigns (quoted separately)",
    "Third-party app/plugin subscriptions outside our stack",
    "Content written in languages other than English",
    "Emergency same-day fixes outside the SLA window (available, billed at $125/hr)",
  ],
  faqs: [
    { q: "What counts as a 'content update'?", a: "Text edits, photo swaps, pricing changes, adding a new service-area page, or small layout tweaks. Major redesigns are quoted separately." },
    { q: "How fast do update requests get done?", a: "1–2 business days on Rank, same-day priority on Dominate. Launch tier doesn't include content updates — just infrastructure." },
    { q: "What happens if my site goes down?", a: "Uptime monitoring alerts us immediately, and we treat downtime as a priority fix regardless of your tier." },
    { q: "Do I need maintenance if I'm comfortable updating the site myself?", a: "The hosting, SSL, and security layer still matters even if you handle content yourself — that's why it's included at every tier, not just the content-update tiers." },
    { q: "Can I add a blog to my maintenance plan?", a: "Yes — blog content is a separate add-on at $249/mo for 2 posts, on top of any maintenance tier." },
    { q: "What's the difference between Launch, Rank, and Dominate maintenance?", a: "Launch covers infrastructure only. Rank adds monthly content updates and reporting. Dominate adds priority 24hr turnaround and unlimited monthly updates." },
    { q: "Is there a limit to how many update requests I can submit?", a: "Rank includes a reasonable monthly allotment (most clients use 2–4 requests); Dominate is unlimited." },
    { q: "Can I cancel maintenance and keep the site live elsewhere?", a: "Yes — you can export your site and move hosting elsewhere anytime. We'll help with the handoff." },
  ],
  finePrint: [
    "Content update turnaround times are business-day estimates, not contractual SLAs, except where stated for Dominate priority support.",
    "Major redesigns, new feature builds, and third-party integrations are quoted and billed separately from the monthly maintenance fee.",
    "Emergency fixes outside your tier's included scope are billed at $125/hr unless otherwise agreed in writing.",
    "Maintenance fees are billed monthly in advance and are non-refundable for partial months.",
  ],
  planName: "Dominate",
  planPrice: "347",
};

export default function MaintenancePage() {
  return <ServicePageLayout data={data} />;
}
