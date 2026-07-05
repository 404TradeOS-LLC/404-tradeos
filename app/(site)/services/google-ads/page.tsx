import ServicePageLayout, { type ServicePageData } from "@/components/sections/ServicePageLayout";

export const metadata = {
  title: "Google Ads Management",
  description: "Managed PPC campaigns targeting emergency and scheduled trade searches in your area.",
};

const data: ServicePageData = {
  slug: "google-ads",
  name: "Google Ads",
  eyebrow: "Google Ads management",
  heroTitle: <>Show up first,<br /><span className="text-[var(--color-copper)]">before you rank.</span></>,
  heroDesc: "Managed PPC campaigns built around the way trade customers actually search — emergency intent, scheduled service, and brand-defense terms — with budgets and negative keywords tuned every week, not set-and-forgotten.",
  fromPrice: "+$299/mo",
  timeline: "Live in 48 hours",
  overviewLabel: "Overview",
  overviewTitle: "SEO takes months. A burst pipe doesn't wait that long",
  overviewBody: [
    "Local SEO is the long game — Google Ads is how you show up at the top of the page while that game plays out. For trade businesses, the highest-converting searches are almost always urgent: \"emergency plumber near me,\" \"AC not cooling same day,\" \"roof leak repair.\" Those are exactly the searches we target first.",
    "We build campaigns around call-tracked, high-intent keywords, with aggressive negative-keyword lists to stop your budget from getting wasted on DIY searches, job-seekers, or competitors window-shopping your pricing.",
    "Every dollar spent is tied to a campaign type chosen for trade businesses specifically — Search campaigns for emergency intent, Local Services Ads where eligible, and Call-Only campaigns for mobile users who just want to dial.",
  ],
  scopeTitle: "What we manage in your campaigns",
  scope: [
    { title: "Campaign structure", desc: "Search, Call-Only, and Local Services Ad campaigns built around your trade and service radius." },
    { title: "Keyword research", desc: "High-intent, emergency, and scheduled-service keywords prioritized by conversion likelihood, not just search volume." },
    { title: "Negative keyword management", desc: "Ongoing exclusion lists to stop spend leaking to DIY searches, job applicants, or irrelevant clicks." },
    { title: "Ad copy + extensions", desc: "Call extensions, location extensions, and copy written to match urgent and scheduled search intent." },
    { title: "Conversion + call tracking", desc: "Every call and form fill tracked back to the exact ad and keyword that generated it." },
    { title: "Weekly optimization", desc: "Bid adjustments, budget reallocation, and underperforming keyword pruning, reviewed weekly." },
  ],
  process: [
    { step: "1", title: "Strategy + budget setup", desc: "Define service area, budget, and which campaign types fit your trade and goals.", timeline: "Day 1" },
    { step: "2", title: "Campaign build", desc: "Keywords, negative lists, ad copy, and call tracking configured in your Google Ads account.", timeline: "Day 2" },
    { step: "3", title: "Launch", desc: "Campaigns go live with conservative initial budgets while we gather early performance data.", timeline: "48 hours" },
    { step: "4", title: "Weekly optimization", desc: "Ongoing bid, budget, and keyword adjustments based on real call and conversion data.", timeline: "Ongoing" },
  ],
  included: [
    "Full campaign setup and management",
    "Call + form conversion tracking",
    "Weekly bid and budget optimization",
    "Ongoing negative keyword management",
    "Monthly ROAS performance report",
    "Ad copy testing and refinement",
  ],
  excluded: [
    "Google Ads ad spend itself (billed directly by Google to your card, separate from our management fee)",
    "Display, YouTube, or Shopping campaigns (Search-focused by default; available on request)",
    "Landing page redesigns beyond minor conversion tweaks",
    "Guaranteed cost-per-lead or ROAS outcomes",
  ],
  faqs: [
    { q: "Is the $299/mo fee on top of my ad spend?", a: "Yes — the $299/mo is our management fee. Your actual ad spend budget is separate and billed directly by Google." },
    { q: "What's a reasonable starting ad budget?", a: "Most trade businesses start seeing meaningful call volume at $1,000–$2,000/mo in ad spend, but we'll recommend a number based on your service area and trade." },
    { q: "How fast can I get leads?", a: "Campaigns typically go live within 48 hours of setup, with the first calls coming in within days — much faster than organic SEO." },
    { q: "Do you guarantee a certain cost per lead?", a: "No agency can ethically guarantee this — it depends on your trade, competition, and market. We optimize aggressively toward your target, with full transparency on the numbers." },
    { q: "Can I see exactly what my money is being spent on?", a: "Yes — your monthly report breaks down spend by campaign and keyword, with call tracking tied to every conversion." },
    { q: "What happens if I pause my ad spend?", a: "Calls stop almost immediately since Ads is pay-to-play, unlike SEO which compounds over time. We recommend running both together for the best of both." },
    { q: "Do you use Local Services Ads (the ones with the green checkmark)?", a: "Where you're eligible, yes — LSAs often convert better for trades since Google pre-vets the business." },
    { q: "Is there a contract for ad management?", a: "No — it's month-to-month like all our services. Ad spend itself can be paused or adjusted anytime through your Google Ads account." },
  ],
  finePrint: [
    "Ad spend is billed directly to your payment method by Google and is separate from our $299/mo management fee.",
    "We require admin or standard access to your Google Ads account (or will create one) to manage campaigns.",
    "Performance reports are delivered monthly; significant budget changes require your written approval first.",
    "Cancelling management does not cancel your live ad spend — you must pause or remove billing in your Google Ads account separately.",
  ],
  planName: "Dominate + Ads add-on",
  planPrice: "1196",
};

export default function GoogleAdsPage() {
  return <ServicePageLayout data={data} />;
}
