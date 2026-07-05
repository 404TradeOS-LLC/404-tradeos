import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[var(--color-forge-black)]">
      <header className="border-b border-[var(--color-forge-border)] px-6 md:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="badge-404">
            <span className="b-404">404</span><span className="b-sep" /><span className="b-trade">TRADE</span><span className="b-sep" /><span className="b-os">OS</span>
          </div>
          <span className="text-sm font-mono text-[var(--color-forge-rust)] hidden sm:inline">Admin</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-[var(--color-forge-muted)] hidden sm:inline">{user.email}</span>
          <LogoutButton />
        </div>
      </header>
      <main className="px-6 md:px-10 py-8 max-w-7xl mx-auto">{children}</main>
    </div>
  );
}
