export const metadata = {
  title: "Privacy Policy",
  description: "How 404 TradeOS LLC collects, stores, and uses your information.",
  openGraph: {
    title: "Privacy Policy | 404 TradeOS",
    description: "How 404 TradeOS LLC collects, stores, and uses your information.",
  },
};

const sections = [
  {
    title: "1. Information we collect",
    body: [
      "When you submit a quote request or contact form on this site, we collect the information you provide: your name, email address, phone number, business name, trade type, city, and any message you include. We also log your IP address and the marketing source (UTM data) that brought you to the form, for spam prevention and reporting purposes.",
      "We do not collect payment information through this website. Billing is handled directly through invoicing tools outside this site.",
    ],
  },
  {
    title: "2. How we store your data",
    body: [
      "Form submissions are stored in a Supabase-hosted PostgreSQL database with row-level security enabled. Public form submissions can only insert new records — they cannot read, edit, or delete existing data. Only our authenticated admin account can view, update, or export lead records through the private dashboard at /admin.",
    ],
  },
  {
    title: "3. How we use your data",
    body: [
      "We use the information you submit to respond to your quote request, follow up about our services, and — if you become a client — to deliver the services you've signed up for. We send transactional emails (confirmations and notifications) through Resend, our email delivery provider.",
      "We do not use your information for purposes beyond responding to your inquiry and, if applicable, providing services to you.",
    ],
  },
  {
    title: "4. Third parties",
    body: [
      "We do not sell, rent, or share your personal information with third parties for marketing purposes. The only third parties with access to your data are the infrastructure providers that power this site: Supabase (database hosting), Resend (email delivery), and Vercel (web hosting). Each operates under its own privacy and security practices.",
    ],
  },
  {
    title: "5. Cookies",
    body: [
      "This site uses essential cookies required for authentication on the admin dashboard. We do not use third-party advertising or tracking cookies.",
    ],
  },
  {
    title: "6. Data retention",
    body: [
      "Lead records are retained for as long as needed to respond to your inquiry or, if you become a client, for the duration of our working relationship plus standard recordkeeping. You can request deletion of your information at any time by emailing hello@404tradeos.com.",
    ],
  },
  {
    title: "7. Your rights",
    body: [
      "You can request a copy of the information we hold about you, ask us to correct it, or ask us to delete it, by contacting hello@404tradeos.com. We'll respond within a reasonable timeframe.",
    ],
  },
  {
    title: "8. Changes to this policy",
    body: [
      "We may update this policy from time to time as our services or legal obligations change. The \"last updated\" date below reflects the most recent revision.",
    ],
  },
  {
    title: "9. Contact",
    body: [
      "Questions about this policy can be sent to hello@404tradeos.com.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="section-pad bg-[var(--color-forge-black)]">
      <div className="max-w-3xl mx-auto">
        <span className="sec-label">Legal</span>
        <h1 className="text-4xl font-medium text-[var(--color-bone)] tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-xs text-[var(--color-forge-rust)] font-mono mb-6">Last updated: June 20, 2026</p>

        <p className="text-sm text-[var(--color-forge-muted)] leading-relaxed mb-10">
          This policy is issued by 404 TradeOS LLC (&ldquo;404 TradeOS,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo;). References to &ldquo;404 TradeOS&rdquo; throughout this policy refer to 404 TradeOS LLC.
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
