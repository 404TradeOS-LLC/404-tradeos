"use client";
import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase-browser";
import type { Lead } from "@/lib/supabase";
import { Search, Download, X, Loader2 } from "lucide-react";

type StatusFilter = "all" | Lead["status"];

const statuses: Lead["status"][] = ["new", "contacted", "quoted", "closed_won", "closed_lost"];

const statusStyles: Record<Lead["status"], string> = {
  new: "text-[var(--color-copper)] bg-[var(--color-copper)]/10 border-[var(--color-copper)]/30",
  contacted: "text-[var(--color-bone)] bg-[var(--color-forge-border)]/40 border-[var(--color-forge-border)]",
  quoted: "text-[var(--color-copper-light)] bg-[var(--color-copper-light)]/10 border-[var(--color-copper-light)]/30",
  closed_won: "text-[var(--color-system-green)] bg-[var(--color-system-green)]/10 border-[var(--color-system-green)]/30",
  closed_lost: "text-[var(--color-error-red)] bg-[var(--color-error-red)]/10 border-[var(--color-error-red)]/30",
};

function StatusBadge({ status }: { status: Lead["status"] }) {
  return (
    <span className={`text-xs font-mono capitalize rounded-full px-2.5 py-1 border ${statusStyles[status]}`}>
      {status.replace("_", " ")}
    </span>
  );
}

function toCsv(leads: Lead[]): string {
  const headers = ["created_at", "first_name", "last_name", "email", "phone", "business_name", "trade_type", "city", "plan_interest", "status", "source", "message"];
  const rows = leads.map((l) =>
    headers.map((h) => {
      const val = (l as unknown as Record<string, string | undefined>)[h] ?? "";
      return `"${String(val).replace(/"/g, '""')}"`;
    }).join(",")
  );
  return [headers.join(","), ...rows].join("\n");
}

export default function AdminDashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Lead | null>(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    async function load() {
      const { data } = await supabase.from("leads").select("*").order("created_at", { ascending: false });
      setLeads((data as Lead[]) ?? []);
      setLoading(false);
    }
    load();

    const channel = supabase
      .channel("leads-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "leads" }, () => {
        load();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const filtered = useMemo(() => {
    return leads.filter((l) => {
      if (statusFilter !== "all" && l.status !== statusFilter) return false;
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return [l.first_name, l.last_name, l.business_name, l.email, l.phone, l.city]
        .filter(Boolean)
        .some((v) => v!.toLowerCase().includes(q));
    });
  }, [leads, statusFilter, search]);

  const kpis = useMemo(() => {
    const counts: Record<string, number> = { total: leads.length };
    for (const s of statuses) counts[s] = leads.filter((l) => l.status === s).length;
    return counts;
  }, [leads]);

  async function updateStatus(id: string, status: Lead["status"]) {
    setUpdating(true);
    const supabase = createClient();
    await supabase.from("leads").update({ status }).eq("id", id);
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    setSelected((prev) => (prev && prev.id === id ? { ...prev, status } : prev));
    setUpdating(false);
  }

  function exportCsv() {
    const csv = toCsv(filtered);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-[var(--color-forge-muted)] text-sm py-20 justify-center">
        <Loader2 size={16} className="animate-spin" /> Loading leads…
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {/* KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="card-panel">
          <div className="mono-label mb-1">Total</div>
          <div className="text-2xl font-bold text-[var(--color-bone)]">{kpis.total}</div>
        </div>
        {statuses.map((s) => (
          <div key={s} className="card-panel">
            <div className="mono-label mb-1 capitalize">{s.replace("_", " ")}</div>
            <div className="text-2xl font-bold text-[var(--color-bone)]">{kpis[s]}</div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3 flex-wrap justify-between">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-forge-rust)]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, business, email, phone…"
              className="bg-[var(--color-forge-dark)] border border-[var(--color-forge-border)] rounded-lg pl-9 pr-3 py-2 text-sm text-[var(--color-bone)] w-64 focus:border-[var(--color-copper)] outline-none transition-colors"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
            className="bg-[var(--color-forge-dark)] border border-[var(--color-forge-border)] rounded-lg px-3 py-2 text-sm text-[var(--color-bone)] outline-none"
          >
            <option value="all">All statuses</option>
            {statuses.map((s) => (
              <option key={s} value={s} className="capitalize">{s.replace("_", " ")}</option>
            ))}
          </select>
        </div>
        <button onClick={exportCsv} className="btn-ghost text-xs !py-2">
          <Download size={13} /> Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="card-panel !p-0 overflow-x-auto">
        <table className="w-full text-sm min-w-[800px]">
          <thead>
            <tr className="border-b border-[var(--color-forge-border)] text-left">
              {["Name", "Business", "Trade", "City", "Plan", "Status", "Created", ""].map((h) => (
                <th key={h} className="px-4 py-3 mono-label whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((l) => (
              <tr
                key={l.id}
                onClick={() => setSelected(l)}
                className="border-b border-[var(--color-forge-border)]/50 last:border-0 cursor-pointer hover:bg-[var(--color-forge-dark)] transition-colors"
              >
                <td className="px-4 py-3 text-[var(--color-bone)] whitespace-nowrap">{l.first_name} {l.last_name}</td>
                <td className="px-4 py-3 text-[var(--color-forge-muted)] whitespace-nowrap">{l.business_name || "—"}</td>
                <td className="px-4 py-3 text-[var(--color-forge-muted)] whitespace-nowrap">{l.trade_type || "—"}</td>
                <td className="px-4 py-3 text-[var(--color-forge-muted)] whitespace-nowrap">{l.city || "—"}</td>
                <td className="px-4 py-3 text-[var(--color-forge-muted)] whitespace-nowrap">{l.plan_interest || "—"}</td>
                <td className="px-4 py-3"><StatusBadge status={l.status} /></td>
                <td className="px-4 py-3 text-[var(--color-forge-rust)] font-mono text-xs whitespace-nowrap">
                  {new Date(l.created_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-[var(--color-copper)] text-xs whitespace-nowrap">View →</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-10 text-center text-[var(--color-forge-muted)] text-sm">
                  No leads match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50" onClick={() => setSelected(null)}>
          <div className="card-panel max-w-lg w-full max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="text-lg font-semibold text-[var(--color-bone)]">{selected.first_name} {selected.last_name}</div>
                <div className="text-xs text-[var(--color-forge-rust)] font-mono">{new Date(selected.created_at).toLocaleString()}</div>
              </div>
              <button onClick={() => setSelected(null)} className="text-[var(--color-forge-muted)] hover:text-[var(--color-bone)]">
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5 text-sm">
              <Field label="Email" value={selected.email} />
              <Field label="Phone" value={selected.phone} />
              <Field label="Business" value={selected.business_name} />
              <Field label="Trade" value={selected.trade_type} />
              <Field label="City" value={selected.city} />
              <Field label="Plan interest" value={selected.plan_interest} />
              <Field label="Source" value={selected.source} />
              <Field label="Service type" value={selected.service_type} />
            </div>

            {selected.message && (
              <div className="mb-5">
                <div className="mono-label mb-1.5">Message</div>
                <p className="text-sm text-[var(--color-forge-muted)] leading-relaxed bg-[var(--color-forge-black)] border border-[var(--color-forge-border)] rounded-lg p-3">
                  {selected.message}
                </p>
              </div>
            )}

            <div>
              <div className="mono-label mb-2">Update status</div>
              <div className="flex gap-2 flex-wrap">
                {statuses.map((s) => (
                  <button
                    key={s}
                    disabled={updating}
                    onClick={() => updateStatus(selected.id, s)}
                    className={`text-xs font-mono capitalize rounded-full px-3 py-1.5 border transition-opacity disabled:opacity-50 ${
                      selected.status === s ? statusStyles[s] : "text-[var(--color-forge-muted)] border-[var(--color-forge-border)]"
                    }`}
                  >
                    {s.replace("_", " ")}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <div className="mono-label mb-1">{label}</div>
      <div className="text-[var(--color-bone)]">{value || "—"}</div>
    </div>
  );
}
