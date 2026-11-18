import ServicePageLayout, { type ServicePageData } from "@/components/sections/ServicePageLayout";

export const metadata = {
  title: "Local SEO",
  description: "Get found in the Google Map Pack and organic results for your trade and service area.",
  openGraph: {
    title: "Local SEO | 404 TradeOS",
    description: "Get found in the Google Map Pack and organic results for your trade and service area.",
  },
};

const data: ServicePageData = {
  slug: "local-seo",
  name: "Local SEO",
  eyebrow: "Local SEO",
  heroTitle: <>Show up when they<br />search for <span className="text-[var(--color-copper)]">&ldquo;near me.&rdquo;</span></>,
  heroDesc: "Google Business Profile optimization, citation building, and keyword-targeted content built around your trade and your actual service area — not generic SEO advice that doesn't apply to local service businesses.",
  fromPrice: "Included in Rank",
  timeline: "Results in 30–90 days",
  overviewLabel: "Overview",
  overviewTitle: "93% of homeowners search Google before calling a trade business",
  overviewBody: [
    "Most of them never scroll past the Map Pack — the three businesses Google shows at the top with a map. If you're not in it, you don't exist to the homeowner with an emergency.",
    "Local SEO for trade businesses isn't the same as SEO for an e-commerce store or a blog. It's built on three things: a fully optimized Google Business Profile, consistent business citations across the directories Google trusts, and content that targets the exact searches your customers actually type — \"emergency plumber Terre Haute\" not \"plumbing services.\"",
    "We rank trade businesses specifically. That means we know which keywords convert into calls versus which just generate traffic, and we build your strategy around the former.",
  ],
  scopeTitle: "What's included in the SEO build-out",
  scope: [
    { title: "Google Business Profile optimization", desc: "Full setup or audit — categories, service areas, photos, Q&A, posts, and booking links optimized for trade searches." },
    { title: "Keyword strategy", desc: "Research into the exact terms customers in your service area use, prioritized by call-conversion potential." },
    { title: "Citation building", desc: "Consistent business listings across 40+ directories (Yelp, Angi, BBB, HomeAdvisor, and trade-specific sites) so Google trusts your NAP data." },
    { title: "On-page optimization", desc: "Title tags, meta descriptions, heading structure, and schema markup tuned for local service searches." },
    { title: "Service-area pages", desc: "Dedicated landing pages for each city or county you serve, each targeting its own local search intent." },
    { title: "Monthly ranking reports", desc: "Plain-English reports showing keyword position changes, Map Pack visibility, and what we're doing next." },
  ],
  process: [
    { step: "1", title: "SEO audit", desc: "Full audit of your current Google Business Profile, citations, and on-site SEO health.", timeline: "Week 1" },
    { step: "2", title: "Foundation build", desc: "Google Business optimization, citation cleanup, and on-page SEO fixes go live.", timeline: "Weeks 1–2" },
    { step: "3", title: "Content + service pages", desc: "Service-area pages and keyword-targeted content published and indexed.", timeline: "Weeks 2–4" },
    { step: "4", title: "Monitor + report", desc: "Monthly tracking of rankings, Map Pack position, and call volume, with adjustments each cycle.", timeline: "Ongoing" },
  ],
  included: [
    "Full Google Business Profile management",
    "40+ directory citation building",
    "Service-area landing pages",
    "Monthly ranking + visibility reports",
    "On-page SEO for every site page",
    "Schema markup for local business + services",
  ],
  excluded: [
    "Guaranteed #1 ranking (no agency can ethically promise this)",
    "Paid ad spend (see Google Ads service)",
    "Link-building outreach campaigns",
    "SEO for markets outside your stated service area",
    "Multi-location SEO beyond what's quoted",
  ],
  faqs: [
    { q: "How fast will I rank?", a: "Most trade businesses see initial Map Pack movement in 30–60 days, with meaningful ranking gains by 90 days. SEO compounds — month 6 is stronger than month 2." },
    { q: "Can you guarantee a #1 ranking?", a: "No — and any agency that promises this is being dishonest with you. We can guarantee the work gets done correctly and consistently." },
    { q: "What's a citation and why does it matter?", a: "A citation is your business name, address, and phone number listed on directories like Yelp or BBB. Inconsistent citations confuse Google and hurt your ranking." },
    { q: "Do I need a Google Business Profile already?", a: "No — if you don't have one, we'll create and verify it as part of the setup." },
    { q: "How many service areas can you target?", a: "Included plans cover your primary service area plus up to 4 surrounding cities/counties. Additional areas can be added." },
    { q: "Is this included in my plan or an add-on?", a: "Full local SEO is included in the Rank and Dominate plans. Launch plan includes basic on-page SEO only." },
    { q: "What does the monthly report actually show me?", a: "Keyword position changes, Map Pack visibility, citation status, and a plain-English summary of what we did and what's next." },
    { q: "Do you handle review responses too?", a: "Review generation and response is its own service — see Review Management — but reviews directly impact your local ranking, so we coordinate the two." },
  ],
  finePrint: [
    "Local SEO is included in Rank and Dominate plans; not available as a standalone service below those tiers.",
    "Ranking timelines are estimates based on typical trade-business results, not guarantees — search algorithms change.",
    "Citation building targets directories relevant to your trade and country; international directories are out of scope.",
    "Results depend in part on review volume and response time, which are partially outside our control.",
  ],
  planName: "Rank",
  planPrice: "397",
};

export default function LocalSeoPage() {
  return <ServicePageLayout data={data} />;
}
