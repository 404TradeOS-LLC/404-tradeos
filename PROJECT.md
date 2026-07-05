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

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=        # server/API only
RESEND_API_KEY=
RESEND_FROM=hello@404tradeos.com
CONTACT_NOTIFICATION_EMAIL=billy@404tradeos.com
```
All filled with live values. Resend domain `404tradeos.com` verified.

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
