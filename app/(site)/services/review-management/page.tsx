import ServicePageLayout, { type ServicePageData } from "@/components/sections/ServicePageLayout";

export const metadata = {
  title: "Review Management",
  description: "Automated SMS + email review requests after every job, with responses handled for you.",
  openGraph: {
    title: "Review Management | 404 TradeOS",
    description: "Automated SMS + email review requests after every job, with responses handled for you.",
  },
};

const data: ServicePageData = {
  slug: "review-management",
  name: "Review management",
  eyebrow: "Review management",
  heroTitle: <>More 5-star reviews,<br /><span className="text-[var(--color-copper)]">zero extra work.</span></>,
  heroDesc: "Automated SMS and email review requests sent the moment a job wraps, with every response — good or bad — handled for you in a tone that protects your reputation.",
  fromPrice: "+$79/mo add-on",
  timeline: "Live in 7 days",
  overviewLabel: "Overview",
  overviewTitle: "88% of homeowners won't call a trade business with fewer than 10 reviews",
  overviewBody: [
    "Happy customers rarely leave reviews on their own — they get busy and forget. Unhappy customers, on the other hand, almost always do. Without a system, your review profile skews toward the complaints, not the satisfied majority.",
    "We fix that with automated SMS and email requests sent right after a job is marked complete, while the experience is still fresh. Every request links directly to your Google Business Profile, removing friction between \"happy customer\" and \"posted review.\"",
    "When a review comes in — positive or negative — we draft the response for your approval, matched to your voice and TCPA-compliant messaging standards. You stay in control without spending your evenings managing your reputation.",
  ],
  scopeTitle: "What's included in review management",
  scope: [
    { title: "Automated SMS requests", desc: "TCPA-compliant text sent to the customer after job completion, with a direct link to leave a Google review." },
    { title: "Automated email follow-up", desc: "Branded email sent in parallel, for customers who prefer email over text." },
    { title: "Response drafting", desc: "Every new review gets a drafted response in your voice, ready for your one-click approval." },
    { title: "Negative review handling", desc: "Fast, professional responses to negative reviews designed to de-escalate and show prospective customers you take feedback seriously." },
    { title: "Review widget", desc: "Your best reviews displayed live on your website, pulled directly from Google." },
    { title: "Monthly reputation report", desc: "Review count, average rating trend, and response time tracked month over month." },
  ],
  process: [
    { step: "1", title: "Compliance setup", desc: "TCPA-compliant opt-in language configured for SMS, and your Google Business Profile connected.", timeline: "Days 1–2" },
    { step: "2", title: "Template + voice match", desc: "SMS and email templates written and matched to your business's tone.", timeline: "Days 3–4" },
    { step: "3", title: "Automation live", desc: "Review requests start firing automatically after each completed job is marked done.", timeline: "Days 5–7" },
    { step: "4", title: "Ongoing response handling", desc: "Every incoming review gets a drafted response for your approval, plus monthly reporting.", timeline: "Ongoing" },
  ],
  included: [
    "TCPA-compliant SMS review requests",
    "Branded email review requests",
    "Drafted responses to every review",
    "Negative review de-escalation handling",
    "Live review widget on your website",
    "Monthly reputation reporting",
  ],
  excluded: [
    "Removal of reviews that violate Google's policies (we'll flag them for you to report)",
    "Incentivized reviews or review-gating (against Google's terms — we won't do this)",
    "Review management on platforms outside Google (Yelp, Facebook available on request)",
    "Guaranteed star rating outcomes",
  ],
  faqs: [
    { q: "Is SMS review automation legal?", a: "Yes, when done correctly. We collect proper opt-in consent and follow TCPA guidelines on every message we send." },
    { q: "Can you delete a bad review?", a: "We can't remove reviews ourselves, but we'll help you report ones that violate Google's policies, and we'll draft a professional response in the meantime." },
    { q: "Will you ever offer customers a discount for a 5-star review?", a: "No — review-gating and incentivizing reviews violates Google's terms of service and can get your profile penalized. We don't do it, and we'd advise against it." },
    { q: "How do you know when to send the request?", a: "You mark the job as complete in your dashboard (or we set up a trigger from your existing workflow), and the request fires automatically." },
    { q: "Do I approve every response before it's posted?", a: "Yes — nothing goes out under your name without your sign-off, unless you tell us otherwise." },
    { q: "What if a customer doesn't want texts?", a: "Opt-out is built into every message, and we honor it immediately — required by law and just good practice." },
    { q: "How quickly do you respond to new reviews?", a: "Drafted responses are typically ready within 24 hours of a new review posting." },
    { q: "Is this available as a standalone service?", a: "Yes — it's a $79/mo add-on to any plan, or bundled into Dominate." },
  ],
  finePrint: [
    "TCPA compliance requires proper customer opt-in before SMS requests are sent — we configure this during setup.",
    "We do not engage in review-gating or incentivized reviews, and recommend against it due to Google policy risk.",
    "Response drafts require your approval before posting unless you've authorized auto-approval in writing.",
    "Review removal is governed by Google's policies, not by us — we can assist with reporting violations only.",
  ],
  planName: "Rank + Review add-on",
  planPrice: "476",
};

export default function ReviewManagementPage() {
  return <ServicePageLayout data={data} />;
}
