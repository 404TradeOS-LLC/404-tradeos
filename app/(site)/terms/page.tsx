export const metadata = {
  title: "Terms of Service",
  description: "The agreement governing services provided by 404 TradeOS LLC.",
  openGraph: {
    title: "Terms of Service | 404 TradeOS",
    description: "The agreement governing services provided by 404 TradeOS LLC.",
  },
};

const sections = [
  {
    title: "1. Services",
    body: [
      "404 TradeOS provides website design, hosting, local SEO, lead generation, review management, Google Ads management, and ongoing support services to trade businesses, as described on our Pricing and Services pages. The specific scope of work for your engagement is the one quoted to you at signup, regardless of later changes to our public pricing or service descriptions.",
    ],
  },
  {
    title: "2. Payment terms",
    body: [
      "Monthly plans are billed in advance on a recurring basis starting the day your site goes live (or the day services begin, for add-on services). One-time setup fees are due before work begins. Add-on services (Google Ads management, review automation, blog content, etc.) are billed separately and in addition to your base plan.",
      "Late payments may result in suspension of services, including taking your website offline, until the account is brought current.",
    ],
  },
  {
    title: "3. Cancellation policy",
    body: [
      "All plans are month-to-month. You may cancel at any time by providing 30 days' written notice to hello@404tradeos.com. Setup fees and any work already performed are non-refundable. Annual billing discounts are forfeited on early cancellation, and the remaining balance for the discount period may be due.",
      "Upon cancellation, you will receive a full export of your website source files and any lead data stored in our system, within 5 business days of your cancellation taking effect.",
    ],
  },
  {
    title: "4. Intellectual property",
    body: [
      "Once your setup fee and any outstanding invoices are paid in full, you own the website we build for you — the design, copy, and code are yours. We retain no ownership claim over completed, paid-for work.",
      "We retain the right to display completed work in our portfolio and marketing materials, including on our Work page, unless you request otherwise in writing.",
      "Stock photography, fonts, or third-party assets used in your site remain subject to their original licensing terms.",
    ],
  },
  {
    title: "5. Revisions",
    body: [
      "Each service includes a defined number of revision rounds during the build process, as outlined on the relevant service page. Revisions requested beyond the included rounds, or after launch, are billed separately at our standard hourly rate unless covered by your maintenance plan.",
    ],
  },
  {
    title: "6. Service level expectations",
    body: [
      "We target the timelines and turnaround windows described on each service page, but these are estimates, not guarantees, since some steps depend on you supplying content, approvals, or access in a timely manner.",
      "We do not guarantee specific search rankings, ad performance, or lead volume — see the individual service pages for what is and isn't covered.",
    ],
  },
  {
    title: "7. Limitation of liability",
    body: [
      "404 TradeOS is not liable for indirect, incidental, or consequential damages arising from the use of our services, including lost revenue or lost leads due to third-party platform outages (Google, hosting providers, etc.) outside our control.",
    ],
  },
  {
    title: "8. Changes to these terms",
    body: [
      "We may update these terms from time to time. Continued use of our services after an update constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "9. Governing law",
    body: [
      "These terms are governed by the laws of the State of Indiana, without regard to conflict-of-law principles.",
    ],
  },
  {
    title: "10. Contact",
    body: [
      "Questions about these terms can be sent to hello@404tradeos.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="section-pad bg-[var(--color-forge-black)]">
      <div className="max-w-3xl mx-auto">
        <span className="sec-label">Legal</span>
        <h1 className="text-4xl font-medium text-[var(--color-bone)] tracking-tight mb-2">Terms of Service</h1>
        <p className="text-xs text-[var(--color-forge-rust)] font-mono mb-6">Last updated: June 20, 2026</p>

        <p className="text-sm text-[var(--color-forge-muted)] leading-relaxed mb-10">
          These terms are between you and 404 TradeOS LLC (&ldquo;404 TradeOS,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo;). References to &ldquo;404 TradeOS&rdquo; throughout these terms refer to 404 TradeOS LLC.
        </p>

        <div className="card-panel flex flex-col gap-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-semibold text-[var(--color-bone)] mb-3">{s.title}</h2>
              <div className="flex flex-col gap-3">
                {s.body.map((p, i) => (
                  <p key={i} className="text-sm text-[var(--color-forge-muted)] leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
