"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";
import { ArrowRight, Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (authError) {
      setError("Invalid email or password.");
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--color-forge-black)] px-6">
      <div className="w-full max-w-sm">
        <div className="badge-404 w-fit mx-auto mb-6">
          <span className="b-404">404</span><span className="b-sep" /><span className="b-trade">TRADE</span><span className="b-sep" /><span className="b-os">OS</span>
        </div>
        <div className="card-panel">
          <div className="flex items-center gap-2 mb-1">
            <Lock size={15} className="text-[var(--color-copper)]" />
            <span className="mono-label">Admin access</span>
          </div>
          <h1 className="text-xl font-semibold text-[var(--color-bone)] mb-6">Sign in to your dashboard</h1>

          <form onSubmit={submit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-[var(--color-forge-rust)] uppercase tracking-wide mb-1.5">Email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-lg px-3 py-2.5 text-sm text-[var(--color-bone)] focus:border-[var(--color-copper)] outline-none transition-colors"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs font-mono text-[var(--color-forge-rust)] uppercase tracking-wide mb-1.5">Password</label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-lg px-3 py-2.5 text-sm text-[var(--color-bone)] focus:border-[var(--color-copper)] outline-none transition-colors"
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div className="text-sm text-[var(--color-error-red)] bg-[var(--color-error-red)]/10 border border-[var(--color-error-red)]/30 rounded-lg px-3 py-2">
                {error}
              </div>
            )}

            <button type="submit" disabled={loading} className="btn-primary justify-center mt-2 disabled:opacity-60">
              {loading ? "Signing in…" : "Sign in"} <ArrowRight size={15} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
