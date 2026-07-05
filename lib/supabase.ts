import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Public client — for browser use (anon key, RLS enforced)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server client — for API routes only (service key, bypasses RLS)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

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
