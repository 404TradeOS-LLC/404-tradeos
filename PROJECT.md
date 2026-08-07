# PROJECT.md — 404 TradeOS

## What this is

Web dev agency site at **404tradeos.com** for trade service clients (plumbers, electricians, roofers, HVAC, GCs). Owner: **Billy Showalter**, Terre Haute, IN — active IN/IL plumbing licenses, OSHA 30 certified. Site doubles as a live demo of what the agency builds for clients.

## Tech stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 16 App Router | TypeScript, no `src/` dir |
| Styling | Tailwind CSS v4 | see DESIGN-SYSTEM.md |
| Animation | CSS `@keyframes` + scoped `framer-motion` | see DESIGN-SYSTEM.md |
| Database | Supabase (Postgres, RLS) | anon = insert-only, service key = admin only |
| Email | Resend | `lib/resend.ts` |
| Icons | Lucide React | |
| Deploy | Vercel | auto-deploy on push to `main` |

## Project structure

```
app/
├── layout.tsx              # bare HTML/body shell + metadata + JSON-LD
├── (site)/                 # route group — public pages, Nav+Footer via its own layout.tsx
│   ├── page.tsx pricing/ work/ services/ contact/ privacy/ terms/
├── admin/                  # outside (site) — no public chrome
│   ├── login/page.tsx
│   └── (dashboard)/        # auth-guarded via proxy.ts + layout.tsx
├── api/contact/route.ts    # → Supabase + Resend
├── sitemap.ts  robots.ts  opengraph-image.tsx
components/
├── decor/    # CircuitGlow, HeroBackground, CornerBrackets, GridOverlay, ScanlineOverlay
├── motion/   # Reveal, AnimatedCounter, TiltCard (framer-motion, below-fold only)
├── ui/       # TerminalFrame, StatusLED, BlinkingCursor
├── sections/ # ServicePageLayout, TrustBar, BusinessScanner, SystemMetrics, OSModuleCard, CaseStudyToggle
├── layout/   # Nav, Footer
├── admin/    # LogoutButton
lib/          # supabase.ts, supabase-server.ts, supabase-browser.ts, resend.ts
proxy.ts      # Next 16 middleware — refreshes admin session cookie
```

## Environment variables

Six variables total. **None are required for `npm run build` to succeed** — all Supabase/Resend clients are constructed lazily at request time (`lib/supabase.ts`, `lib/resend.ts`), not at module load, so `npm run build` and CI succeed with zero env vars configured anywhere. That's a distinct question from whether a variable's *value* ends up where it needs to be: the two `NEXT_PUBLIC_*` variables are inlined into the client bundle at build time when present, so they need to be set before a build/deploy (not just "at runtime") to actually reach the browser — changing one in Vercel requires a rebuild to take effect. The four server-only variables are read at request time and don't need a rebuild.

`proxy.ts` (at the repo root) is this project's Next.js 16 middleware — auto-detected by Next.js from its file name/location, not imported anywhere explicitly. This Next.js version renamed `middleware.ts` → `proxy.ts` and the exported function to `proxy` (see `AGENTS.md`); there's no separate `middleware.ts` in this repo. Confirmed wired up: its `config.matcher` scopes it to `/admin/:path*`, and unauthenticated requests to `/admin` correctly 307-redirect to `/admin/login` as a result.

| Variable | Classification | Used by | Required for |
|---|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Public (browser-visible) | `proxy.ts`, `lib/supabase-server.ts`, `lib/supabase-browser.ts` | Admin auth + dashboard |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public (browser-visible) | same as above | Admin auth + dashboard |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only — never prefix `NEXT_PUBLIC_` | `lib/supabase.ts` → `app/api/contact/route.ts` only | Writing leads (bypasses RLS) |
| `RESEND_API_KEY` | Server-only | `lib/resend.ts` → `app/api/contact/route.ts` only | Lead notification emails |
| `RESEND_FROM` | Server-only | `lib/resend.ts` | Must be an address on a domain **verified in Resend**, or sending fails |
| `CONTACT_NOTIFICATION_EMAIL` | Server-only | `lib/resend.ts` | Inbox that receives new-lead emails |

**Local setup:** `cp .env.example .env.local`, fill in real values, never commit it (`.env*` is gitignored except `.env.example`).

**Vercel Production:** configure all six under Settings → Environment Variables → Production. Redeploy after changing any of them (env vars are baked in at build/runtime start, not hot-reloaded).

**Vercel Preview:** do not default to copying Production's `SUPABASE_SERVICE_ROLE_KEY` or `RESEND_API_KEY` into Preview — a preview deployment is reachable by anyone with the URL. Use a separate preview/staging Supabase project and Resend sending config if one exists; otherwise leave Preview unconfigured (the contact form will fail closed with a clean error rather than write to production) until there's an owner-approved preview backend.

**GitHub Actions:** intentionally requires none of these six variables. `.github/workflows/ci.yml` runs `npm ci`, lint, typecheck, and build only — nothing in CI touches Supabase or Resend.

**Supabase project identity:** the correct project is named **"404 TradeOS"** (ref matches `.mcp.json` in this repo) — a separate, distinct Supabase project from `404TradeOScostbook` (the TradeOS SaaS product's own database). Don't cross-wire them.

**Rotating a secret:**
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase dashboard → Settings → API → regenerate service role key, then update Vercel Production immediately (the old key stops working the moment it's regenerated).
- `RESEND_API_KEY` — Resend dashboard → API Keys → revoke and create a new one, then update Vercel Production.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — regenerate in Supabase dashboard if ever suspected compromised; low urgency otherwise since it's already public by design and constrained by RLS.

**Testing the contact pipeline after configuring:** submit the `/contact` form with a clearly-labeled test lead (e.g. name "Test Lead", a real inbox you control), confirm it appears in `/admin`, confirm the notification email arrives, then delete the test row from the `leads` table in Supabase.

## Supabase (`leads` table)

Status enum: `new | contacted | quoted | closed_won | closed_lost`. RLS: anon insert-only, authenticated full access. Schema in `supabase-schema.sql`.

## Build status

All pages built: homepage, pricing, work, services index + 6 service pages, contact (form + API), admin dashboard (login + KPIs/filters/CSV export/Realtime), privacy/terms. Nothing blocking launch.

**Route group rule:** public `Nav`/`Footer` live only in `app/(site)/layout.tsx`. New public pages go inside `app/(site)/`. Never move Nav/Footer into root layout (`app/admin/*` deliberately has no public chrome).

## Business context

- Services: Website Design, Local SEO, Lead Generation & Management, Review Management, Google Ads, Ongoing Support
- Pricing: Launch $197/mo+$299 setup · Rank $397/mo+$699 setup · Dominate $897/mo+$1,299 setup
- Maintenance add-ons: $97 / $197 / $347 per mo (matching tier)
- Target market: Midwest trade businesses
- First client: Lucas Construction (hirelucasconstruction.com), GC in Terre Haute IN, featured case study on `/work`, (812) 264-6743

## Commands

```bash
npm run dev / build / lint
vercel --prod
```
