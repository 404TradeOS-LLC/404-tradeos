import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Wrench } from "lucide-react";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import CircuitGlow from "@/components/decor/CircuitGlow";
import TerminalFrame from "@/components/ui/TerminalFrame";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="section-pad bg-[var(--color-forge-black)] text-center relative overflow-hidden min-h-[70vh] flex items-center">
          <CircuitGlow />
          <div className="max-w-xl mx-auto relative z-10">
            <span className="sec-label block text-center">Error</span>
            <h1 className="text-6xl md:text-7xl font-medium text-[var(--color-bone)] tracking-tight mb-4">
              <span className="text-[var(--color-copper)]">404</span>
            </h1>
            <p className="text-[var(--color-forge-muted)] max-w-md mx-auto leading-relaxed mb-8">
              This page doesn&rsquo;t exist. Unlike your business, it&rsquo;s staying a 404.
            </p>

            <TerminalFrame title="system.log" status="error" statusLabel="404 NOT FOUND" className="text-left mb-8">
              <p className="mono-label mb-1">GET * → 404</p>
              <p className="text-sm text-[var(--color-forge-muted)]">
                No route matched this request. Check the URL, or head back to a page that exists.
              </p>
            </TerminalFrame>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/" className="btn-primary">
                <Home size={16} /> Back to homepage
              </Link>
              <Link href="/contact" className="btn-outline">
                Get a free quote <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm">
              <Link href="/services" className="text-[var(--color-forge-muted)] hover:text-[var(--color-copper)] transition-colors inline-flex items-center gap-1.5">
                <Wrench size={13} /> Services
              </Link>
              <Link href="/pricing" className="text-[var(--color-forge-muted)] hover:text-[var(--color-copper)] transition-colors">
                Pricing
              </Link>
              <Link href="/work" className="text-[var(--color-forge-muted)] hover:text-[var(--color-copper)] transition-colors">
                Our work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
