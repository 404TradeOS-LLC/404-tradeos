import { createClient } from "@supabase/supabase-js";

// Server-only client — service role key, bypasses RLS. Constructed lazily so
// importing this module (e.g. for the Lead type) doesn't require Supabase
// env vars to be present at build time — only when actually called at runtime.
export function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export type Lead = {
  id: string;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  business_name?: string;
  trade_type?: string;
  service_type?: string;
  plan_interest?: string;
  city?: string;
  message?: string;
  source?: string;
  status: "new" | "contacted" | "quoted" | "closed_won" | "closed_lost";
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  ip_address?: string;
};
