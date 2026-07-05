import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "404 TradeOS — Web design for the trades",
    template: "%s | 404 TradeOS",
  },
  description:
    "Professional websites, local SEO, and lead generation for plumbers, electricians, roofers, HVAC techs, and contractors. Based in Terre Haute, IN.",
  metadataBase: new URL("https://www.404tradeos.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.404tradeos.com",
    siteName: "404 TradeOS",
    title: "404 TradeOS — Web design for the trades",
    description:
      "Professional websites, local SEO, and lead generation for trade businesses. Stop being a 404.",
  },
  twitter: {
    card: "summary_large_image",
    title: "404 TradeOS — Web design for the trades",
    description: "Professional websites built for plumbers, electricians, roofers, and contractors.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "404 TradeOS",
  description:
    "Professional websites, local SEO, and lead generation for trade businesses — plumbers, electricians, roofers, HVAC techs, and contractors.",
  url: "https://www.404tradeos.com",
  telephone: "+18125628504",
  email: "hello@404tradeos.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7175 Robertson Rd.",
    addressLocality: "Terre Haute",
    addressRegion: "IN",
    postalCode: "47802",
    addressCountry: "US",
  },
  areaServed: ["Indiana", "Illinois", "Midwest"],
  priceRange: "$197-$897",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
