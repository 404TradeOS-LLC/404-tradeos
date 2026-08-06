import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { sendOwnerNotification, sendCustomerConfirmation } from "@/lib/resend";

// Simple in-memory rate limit (per-IP, resets on cold start)
const rateMap = new Map<string, { count: number; reset: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + 60 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 3) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  // Rate limit
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot check
  if (body.website_url) {
    return NextResponse.json({ ok: true }); // Silent reject
  }

  // Validate required fields
  const required = ["first_name", "last_name", "email", "phone"];
  for (const field of required) {
    if (!body[field]?.trim()) {
      return NextResponse.json({ error: `${field} is required.` }, { status: 400 });
    }
  }

  // Validate email format
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(body.email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // Sanitize inputs
  const sanitize = (s: string) => s.replace(/<[^>]*>/g, "").trim().slice(0, 1000);

  const lead = {
    first_name: sanitize(body.first_name),
    last_name: sanitize(body.last_name),
    email: sanitize(body.email).toLowerCase(),
    phone: sanitize(body.phone),
    business_name: sanitize(body.business_name ?? ""),
    trade_type: sanitize(body.trade_type ?? ""),
    service_type: sanitize(body.service_type ?? ""),
    plan_interest: sanitize(body.plan_interest ?? ""),
    city: sanitize(body.city ?? ""),
    message: sanitize(body.message ?? ""),
    source: sanitize(body.source ?? ""),
    status: "new" as const,
    utm_source: req.nextUrl.searchParams.get("utm_source") ?? body.utm_source ?? "",
    utm_medium: req.nextUrl.searchParams.get("utm_medium") ?? body.utm_medium ?? "",
    utm_campaign: req.nextUrl.searchParams.get("utm_campaign") ?? body.utm_campaign ?? "",
    ip_address: ip,
  };

  // Insert to Supabase
  try {
    const { error: dbError } = await getSupabaseAdmin().from("leads").insert(lead);
    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json({ error: "Failed to save your request. Please try again." }, { status: 500 });
    }
  } catch (err) {
    console.error("Supabase client error:", err);
    return NextResponse.json({ error: "Failed to save your request. Please try again." }, { status: 500 });
  }

  // Send emails (parallel, non-blocking on failure)
  await Promise.allSettled([
    sendOwnerNotification(lead),
    sendCustomerConfirmation({ first_name: lead.first_name, email: lead.email }),
  ]);

  return NextResponse.json({ ok: true });
}
