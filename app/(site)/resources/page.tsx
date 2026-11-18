import Link from "next/link";
import { ArrowRight, Search, Phone, Star, Smartphone } from "lucide-react";
import CircuitGlow from "@/components/decor/CircuitGlow";

export const metadata = {
  title: "Resources",
  description: "Free, practical guides for trade businesses — local SEO, lead capture, reviews, and website conversion basics.",
};

const guides = [
  {
    icon: <Search size={20} />,
    title: "Get found on Google Maps",
    tips: [
      "Claim and fully fill out your Google Business Profile — hours, photos, service area.",
      "Use your city + trade in your business name field only if it's your real name.",
      "Ask every happy customer for a review the same day the job's done.",
    ],
  },
  {
    icon: <Smartphone size={20} />,
    title: "Make your site convert",
    tips: [
      "Put your phone number in the header, tappable, on every page.",
      "Add a quote form above the fold on mobile — most trade traffic is mobile.",
      "Show your service area and license/certifications near the fold, not buried in the footer.",
    ],
  },
  {
    icon: <Phone size={20} />,
    title: "Turn calls into booked jobs",
    tips: [
      "Track which page/ad a call came from so you know what's actually working.",
      "Answer or call back within 5 minutes — response time is the #1 predictor of winning the job.",
      "Text a confirmation after every booked call. It cuts no-shows significantly.",
    ],
  },
  {
    icon: <Star size={20} />,
    title: "Build a review engine",
    tips: [
      "Automate a review request text/email within an hour of job completion.",
      "Respond to every review, good or bad, within 48 hours.",
      "Funnel unhappy customers to a private form first — keep the public ask for happy ones.",
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="section-pad bg-[var(--color-forge-black)] pb-10 relative overflow-hidden">
        <CircuitGlow />
        <div className="relative z-10">
          <span className="sec-label">Resources</span>
          <h1 className="text-4xl md:text-5xl font-medium text-[var(--color-bone)] tracking-tight mb-4">
            Free guides for<br /><span className="text-[var(--color-copper)]">trade businesses.</span>
          </h1>
          <p className="text-[var(--color-forge-muted)] max-w-lg leading-relaxed">
            No fluff, no gated downloads — practical tips you can act on today, pulled from what actually moves the needle for plumbers, electricians, roofers, and contractors.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {guides.map((g) => (
          <div key={g.title} className="border border-[var(--color-forge-border)] bg-[var(--color-forge-dark)] rounded-sm p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-[var(--color-copper)] to-[var(--color-copper-dark)] rounded-sm flex items-center justify-center text-[var(--color-forge-black)]">
                {g.icon}
              </div>
              <h2 className="text-base font-semibold text-[var(--color-bone)]">{g.title}</h2>
            </div>
            <ul className="space-y-2.5">
              {g.tips.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-sm text-[var(--color-forge-muted)] leading-relaxed">
                  <span className="text-[var(--color-copper)] mt-1.5 shrink-0">&bull;</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="section-pad bg-[var(--color-forge-dark)] text-center relative overflow-hidden border-t border-[var(--color-forge-border)]">
        <CircuitGlow />
        <div className="max-w-xl mx-auto relative z-10">
          <h2 className="text-2xl font-medium text-[var(--color-bone)] mb-3">
            Want us to handle all of this <span className="text-[var(--color-copper)]">for you?</span>
          </h2>
          <p className="text-[var(--color-forge-muted)] text-sm mb-6 leading-relaxed">That&apos;s literally the job. Free 30-minute call, no pressure.</p>
          <Link href="/contact" className="btn-primary">Get a free quote <ArrowRight size={15} /></Link>
        </div>
      </section>
    </>
  );
}
