import ServicePageLayout, { type ServicePageData } from "@/components/sections/ServicePageLayout";

export const metadata = {
  title: "Lead Generation & Management",
  description: "Supabase-powered lead capture with a private admin dashboard and real-time notifications.",
  openGraph: {
    title: "Lead Generation & Management | 404 TradeOS",
    description: "Supabase-powered lead capture with a private admin dashboard and real-time notifications.",
  },
};

const data: ServicePageData = {
  slug: "lead-generation",
  name: "Lead generation",
  eyebrow: "Lead generation & management",
  heroTitle: <>Every lead, tracked.<br /><span className="text-[var(--color-copper)]">Nothing falls through.</span></>,
  heroDesc: "A real lead pipeline — not a Gmail inbox you forget to check. Every form submission lands in a private dashboard instantly, with email alerts and status tracking from first contact to closed job.",
  fromPrice: "Included in Rank",
  timeline: "Live in 7 days",
  overviewLabel: "Overview",
  overviewTitle: "A missed lead is a job that went to your competitor",
  overviewBody: [
    "Most trade businesses lose leads not because the website doesn't generate them, but because there's no system tracking what happens after the form gets submitted. It sits in an inbox, gets forgotten, and the homeowner calls someone who answers.",
    "We build your lead pipeline on Supabase — a production-grade database, not a spreadsheet — with row-level security so your data is locked down by default. Every quote request triggers an instant email via Resend, gets logged with a status (new, contacted, quoted, closed won, closed lost), and shows up in real time in your private admin dashboard.",
    "You always know exactly how many leads came in this week, what stage each one is at, and where the next follow-up needs to happen.",
  ],
  scopeTitle: "What we build into your pipeline",
  scope: [
    { title: "Supabase lead database", desc: "Secure PostgreSQL database with row-level security — your data, locked down, accessible only to you." },
    { title: "Instant email notifications", desc: "Resend-powered alerts the moment a form is submitted, so you never miss a live lead." },
    { title: "Private admin dashboard", desc: "Real-time lead table with filtering by status, source, and date — accessible only with your login." },
    { title: "Status pipeline", desc: "Track every lead from new → contacted → quoted → closed won/lost, so nothing sits unworked." },
    { title: "Source tracking", desc: "Know exactly which channel — Google, referral, Facebook — generated each lead, with UTM capture." },
    { title: "CSV export", desc: "Pull your lead data anytime for reporting, accounting, or import into other tools." },
  ],
  process: [
    { step: "1", title: "Database setup", desc: "Lead schema, RLS policies, and status pipeline configured in Supabase.", timeline: "Days 1–2" },
    { step: "2", title: "Form + notification wiring", desc: "Quote forms connected to the database, with instant Resend email alerts to you.", timeline: "Days 3–4" },
    { step: "3", title: "Dashboard build", desc: "Private admin login and real-time lead table delivered and tested.", timeline: "Days 5–6" },
    { step: "4", title: "Go live", desc: "Pipeline goes live alongside your website launch — every lead captured from day one.", timeline: "Day 7" },
  ],
  included: [
    "Supabase database with RLS security",
    "Real-time admin dashboard access",
    "Instant email lead notifications",
    "Full lead status pipeline",
    "Source + UTM tracking",
    "CSV export of all lead data",
  ],
  excluded: [
    "CRM integrations outside our stack (Salesforce, HubSpot, etc.)",
    "SMS lead notifications (available as part of Review Management add-on)",
    "Automated lead scoring or AI qualification",
    "Phone call tracking / recording",
    "Data migration from a previous CRM or spreadsheet",
  ],
  faqs: [
    { q: "Where does my lead data actually live?", a: "In a Supabase PostgreSQL database with row-level security — anon submissions can only insert, only your authenticated login can read or edit." },
    { q: "How fast do I get notified of a new lead?", a: "Instantly. The moment a form is submitted, a Resend email fires to your inbox with the lead details." },
    { q: "Can I export my leads?", a: "Yes — CSV export is built into the dashboard, available anytime." },
    { q: "What if I want to track leads from phone calls too, not just the website?", a: "You can manually add leads to the dashboard from any source, including phone calls walked in by hand." },
    { q: "Is my lead data ever sold or shared?", a: "No. Your lead data is yours — see our Privacy Policy. We never sell or share customer data with third parties." },
    { q: "Can more than one person on my team access the dashboard?", a: "Yes, additional authenticated logins can be added on request." },
    { q: "What happens to my leads if I cancel?", a: "You get a full CSV export of all your lead data before offboarding — it's your data, not ours." },
    { q: "Is this included in my plan?", a: "Lead generation and the admin dashboard are included in Rank and Dominate. Launch includes the contact form without the dashboard." },
  ],
  finePrint: [
    "Lead pipeline and dashboard access are included in Rank and Dominate plans only.",
    "Dashboard login credentials are issued to one primary admin account per business by default.",
    "We are not liable for leads lost due to incorrect contact information submitted by the customer.",
    "Data export requests are fulfilled within 5 business days of a cancellation request.",
  ],
  planName: "Rank",
  planPrice: "397",
};

export default function LeadGenerationPage() {
  return <ServicePageLayout data={data} />;
}
