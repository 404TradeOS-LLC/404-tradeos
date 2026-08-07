# 404 TradeOS — 404tradeos.com

Professional websites for trade businesses. Built with Next.js 16 App Router, TypeScript, Tailwind CSS, Supabase, and Resend.

## Stack

- **Framework:** Next.js 16 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS (custom 404 TradeOS brand tokens)
- **Animation:** Framer Motion
- **Database:** Supabase (PostgreSQL, RLS enabled)
- **Email:** Resend
- **Deployment:** Vercel + Cloudflare DNS
- **Icons:** Lucide React

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Set environment variables
Copy `.env.example` and fill in your values:
```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SUPABASE_URL` — your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase service role key (server only)
- `RESEND_API_KEY` — Resend API key
- `RESEND_FROM` — sending email (hello@404tradeos.com)
- `CONTACT_NOTIFICATION_EMAIL` — your notification email

### 3. Set up Supabase database
Run `supabase-schema.sql` in your Supabase SQL editor.

### 4. Set up the admin dashboard
The `/admin` dashboard (`app/admin/`) is protected by Supabase Auth. Before you can sign in:

1. In your Supabase project, go to **Authentication → Users → Add user** and create an account (email + password) for yourself. Disable "auto confirm" only if you also set up email confirmation — otherwise leave auto-confirm on so the account is usable immediately.
2. Go to **Database → Replication** (or **Database → Publications**) and enable the `leads` table on the `supabase_realtime` publication. This is required for the dashboard's live updates — without it, the table still works, you just won't see new leads appear without a manual refresh.
3. Sign in at `/admin/login` with the user you created.

Routing protection is handled by `proxy.ts` (Next.js 16's renamed `middleware.ts`), which refreshes the Supabase session cookie on every `/admin/*` request, and by the server-side check in `app/admin/(dashboard)/layout.tsx`, which redirects unauthenticated visitors to `/admin/login`.

### 5. Run locally
```bash
npm run dev
```

### 6. Deploy to Vercel
```bash
vercel --prod
```
Add all env vars in Vercel dashboard → Settings → Environment Variables. See `PROJECT.md` → "Environment variables" for which environments (Production/Preview/Development) each variable belongs in, and for rotation and contact-pipeline testing instructions.

## Project structure

```
app/
├── layout.tsx           # Root layout — bare HTML/body shell + metadata only
├── (site)/              # Route group — public pages, wrapped in Nav + Footer
│   ├── layout.tsx       # Renders Nav + {children} + Footer
│   ├── page.tsx         # Homepage
│   ├── pricing/page.tsx # Pricing page
│   ├── work/page.tsx    # Portfolio / case studies
│   ├── services/        # Services index + 6 service pages
│   └── contact/page.tsx # Quote form
├── admin/               # Outside (site) — no public Nav/Footer, own chrome
│   ├── login/page.tsx          # Email/password sign-in (public)
│   └── (dashboard)/
│       ├── layout.tsx          # Auth guard + header shell
│       └── page.tsx            # Lead table, KPIs, filters, CSV export
└── api/contact/         # Form → Supabase + Resend

components/
├── layout/Nav.tsx
├── layout/Footer.tsx
├── admin/LogoutButton.tsx
└── (ui components)

lib/
├── supabase.ts         # Lazily-constructed service-role client (contact API route only)
├── supabase-server.ts  # Cookie-aware Supabase client for Server Components
├── supabase-browser.ts # Supabase client for Client Components
└── resend.ts           # Email templates + send functions

proxy.ts                # Next.js 16 middleware — refreshes the admin session cookie
```

## Brand tokens (Tailwind)

| Token | Hex | Use |
|-------|-----|-----|
| `copper` | #B87333 | Primary accent |
| `copper-light` | #E8C99A | Headlines on dark |
| `forge-black` | #0D0A07 | Primary background |
| `forge-dark` | #1E1610 | Secondary background |
| `forge-border` | #3d2a10 | All borders |
| `forge-muted` | #C8C0B0 | Body text |
| `bone` | #F7F2EC | Light background / print |
| `system-green` | #00C896 | Success / live states |

## Pages status

- [x] Homepage
- [x] Pricing
- [x] Our work (portfolio)
- [x] Services index
- [x] Contact / quote form
- [x] Contact API route (Supabase + Resend)
- [x] 6 individual service pages (full SOW content)
- [x] Admin lead dashboard
- [x] Privacy policy
- [x] Terms of service

## License

Proprietary — see [LICENSE](LICENSE). All rights reserved.
