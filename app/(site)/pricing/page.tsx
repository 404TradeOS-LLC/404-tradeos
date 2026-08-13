import PricingClient from "./PricingClient";

export const metadata = {
  title: "Pricing",
  description: "Flat monthly pricing for trade business websites. Launch, Rank, and Dominate plans starting at $197/mo — no contracts, no hidden fees.",
  openGraph: {
    title: "Pricing | 404 TradeOS",
    description: "Flat monthly pricing for trade business websites. Launch, Rank, and Dominate plans starting at $197/mo — no contracts, no hidden fees.",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
