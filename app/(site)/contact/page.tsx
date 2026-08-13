import ContactClient from "./ContactClient";

export const metadata = {
  title: "Get a Free Quote",
  description: "Tell us about your trade business and get a custom website quote within 24 hours. No pressure, no long-term contracts.",
  openGraph: {
    title: "Get a Free Quote | 404 TradeOS",
    description: "Tell us about your trade business and get a custom website quote within 24 hours. No pressure, no long-term contracts.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
