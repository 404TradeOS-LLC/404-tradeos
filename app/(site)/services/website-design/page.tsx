import ServicePageLayout, { type ServicePageData } from "@/components/sections/ServicePageLayout";

export const metadata = {
  title: "Website Design",
  description: "Custom Next.js websites built for trade businesses. Fast, mobile-first, and built to convert visitors into booked jobs.",
};

const data: ServicePageData = {
  slug: "website-design",
  name: "Website design",
  eyebrow: "Website design",
  heroTitle: <>A website that actually<br /><span className="text-[var(--color-copper)]">books jobs.</span></>,
  heroDesc: "Custom-built on Next.js — not a drag-and-drop template. Fast load times, mobile-first design, and a layout engineered to turn visitors into phone calls and quote requests.",
  fromPrice: "$197/mo",
  timeline: "Live in 2 weeks",
  overviewLabel: "Overview",
  overviewTitle: "Most trade websites lose the job before the call ever happens",
  overviewBody: [
    "Generic templates load slow, look the same as every competitor, and bury the phone number three clicks deep. By the time a homeowner with a leaking pipe finds your contact form, they've already called someone else.",
    "We build every site from scratch on Next.js — the same framework used by companies like Nike and DoorDash — tuned specifically for trade businesses. That means sub-second load times even on a job-site 4G connection, a phone number and \"Request a quote\" button visible above the fold on every page, and a design that signals \"licensed professional\" instead of \"built it myself on a free trial.\"",
    "Every site we ship targets a 95+ Lighthouse performance score. We've seen what happens when a site is fast versus when it isn't — fast wins the call.",
  ],
  scopeTitle: "What we build for every plan",
  scope: [
    { title: "Custom page design", desc: "5–10+ pages depending on plan, including homepage, services, about, service-area pages, and contact." },
    { title: "Mobile-first build", desc: "Designed for the phone first — most of your traffic searches you from a job site or their driveway." },
    { title: "Quote + contact forms", desc: "Connected directly to your lead pipeline (Supabase + Resend), so every submission reaches you instantly." },
    { title: "Google Business integration", desc: "Map embed, business hours, and review widget synced to your Google Business Profile." },
    { title: "On-page SEO foundation", desc: "Proper heading structure, meta tags, schema markup, and service-area targeting baked into every page." },
    { title: "SSL + hosting", desc: "Deployed on Vercel's global edge network — fast everywhere, secured by default, zero downtime deploys." },
  ],
  process: [
    { step: "1", title: "Discovery call", desc: "30 minutes — your trade, your service area, your current site (if any), and what's actually been failing to convert.", timeline: "Day 1" },
    { step: "2", title: "Content + design draft", desc: "We write the copy, source or request photography, and build the first design pass for your review.", timeline: "Days 2–6" },
    { step: "3", title: "Build + revisions", desc: "Site goes live on a staging URL. You get up to 2 rounds of revisions before launch.", timeline: "Days 7–11" },
    { step: "4", title: "Launch", desc: "Domain connected, SSL issued, Google Business linked, and the site goes live to the public.", timeline: "Days 12–14" },
  ],
  included: [
    "Custom design — no templates",
    "Unlimited stock or sourced photography",
    "Mobile + tablet + desktop testing",
    "Quote form wired to your dashboard",
    "Basic on-page SEO setup",
    "2 rounds of revisions before launch",
  ],
  excluded: [
    "Logo design (we'll recommend a designer)",
    "Paid stock photo licensing fees",
    "Custom photography / videography shoots",
    "E-commerce / online payment processing",
    "Content written in languages other than English",
  ],
  faqs: [
    { q: "Do I own the website?", a: "Yes, 100%. Your domain, your content, your code. If you ever leave, you take everything with you." },
    { q: "What if I already have a site?", a: "We'll audit it for free first. If small fixes will get it performing, we'll tell you instead of pushing a rebuild." },
    { q: "How many pages do I get?", a: "5 pages on Launch, 10 on Rank, unlimited on Dominate. Most trade businesses need fewer pages than they think — we'll help you scope it." },
    { q: "Can I update the site myself later?", a: "Minor text and photo updates are included in every maintenance tier. For bigger changes, just ask — most turn around in 1–2 business days." },
    { q: "What if I need more than 2 rounds of revisions?", a: "Additional revision rounds are billed at $150/round, but most clients land it within the included two." },
    { q: "Will it work on mobile?", a: "It's built mobile-first, not mobile-adapted. We design for the phone screen first, then scale up to tablet and desktop." },
    { q: "How fast will it load?", a: "We target a 95+ Lighthouse performance score on every build — most pages load in under one second." },
    { q: "Do you write the copy?", a: "Yes — copywriting for every page is included. We'll interview you about your business to get the voice right." },
  ],
  finePrint: [
    "Setup fee is due before work begins. Monthly fee starts the day the site goes live.",
    "Revisions beyond the included rounds are billed at $150/round.",
    "Domain registration is billed separately if you don't already own one (~$15/yr).",
    "Content and assets you don't supply within 10 business days may delay your launch date.",
    "Cancelling after launch does not refund the setup fee — you keep the completed site and all source files.",
  ],
  planName: "Rank",
  planPrice: "397",
};

export default function WebsiteDesignPage() {
  return <ServicePageLayout data={data} />;
}
