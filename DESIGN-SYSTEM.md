# DESIGN-SYSTEM.md — 404 TradeOS

## Tailwind v4 — syntax differs from v3

✅ `@import "tailwindcss";` + `@theme { --color-x: ...; }` in globals.css
✅ `className="bg-[var(--color-copper)]"`
❌ `@apply bg-copper` — breaks in v4
❌ `className="bg-copper"` as a bare utility — not registered

## Reusable CSS classes (`app/globals.css`)

`.badge-404` `.wordmark` `.sec-label` `.btn-primary` `.btn-outline` `.btn-ghost` `.card` `.card-panel` `.section-pad` `.rule` `.status-online` `.mono-label`

Use as plain className strings, not `@apply`.

## Visual direction: industrial / diagnostic software

**Not generic SaaS** — no soft blurred gradients, no floating sparkle particles, no rounded-corner-everything. Think industrial control panels, terminal/diagnostic software, CNC dashboards. Colors unchanged (see BRAND.md) — this is visual language, not palette.

**Migration status: complete** across homepage, `/work`, `/services`, `/pricing`, `/contact`. Admin intentionally keeps its own separate chrome. Extend any new page reusing the components below — don't duplicate their markup.

### Component library

| Component | Path | Purpose |
|---|---|---|
| `TerminalFrame` | `components/ui/` | Window-chrome shell: 3 square lights + title + `StatusLED` |
| `StatusLED` | `components/ui/` | Pulsing dot+label. `online`(green) `processing`(copper) `error`(red) `idle`(rust) |
| `BlinkingCursor` | `components/ui/` | Terminal cursor, `steps(1)` blink, off under reduced-motion |
| `CornerBrackets` | `components/decor/` | SVG CNC-reticle corners for any `relative` parent |
| `GridOverlay` | `components/decor/` | Faint copper grid texture |
| `ScanlineOverlay` | `components/decor/` | Faint horizontal scanline texture |
| `HeroBackground` | `components/decor/` | Grid+scanline+toned-down mesh blobs + CNC crosshair/scan-ring/coord-readout that tracks mouse. **No longer used on the homepage hero** (replaced by a full-bleed photo, see below) — currently unused anywhere; candidate for removal or reuse on another page |
| `BusinessScanner` | `components/sections/` | "404 scanner" demo — types name → simulated terminal sequence → `ERROR 404` → CTA. **Illustrative only, must keep disclaimer** — not a real lookup |
| `SystemMetrics` | `components/sections/` | Stats as system-status panel: SVG sparklines + `AnimatedCounter` in `TerminalFrame` |
| `OSModuleCard` | `components/sections/` | Service card as OS module: LED, `MOD-0X` id, version tag, corner brackets on hover |
| `CaseStudyToggle` | `components/sections/` | Before(404)/After(live stats) interactive toggle. Still used on `/work`; **no longer used on the homepage** (replaced by `BeforeAfterShowcase`) |
| `BeforeAfterShowcase` | `components/sections/` | Homepage case-study section as of 2026-06-23: static 3-column before/after — plain "old site" card, `DashboardWindow`-framed "new site" with an overlapping phone mockup, and a "Built to perform" checklist + SVG circular score gauge |
| `TrustBar` | `components/sections/` | Redesigned 2026-06-23: riveted plate card, "Trusted by trade businesses across the Midwest" + 5 trade-category icons (plumber/electrician/HVAC/roofer/contractor — generic categories, never fabricated client logos) |
| `TradeImage` | `components/ui/` | Real-photo wrapper, see photography principle below |
| `CustomCursor` | `components/decor/` | Global CNC reticle cursor (fine-pointer desktop only): dot + ring with corner ticks, ring expands over `a/button/input/select/textarea/[role=button]`, shrinks on press |
| `PageTransition` | `components/decor/` | Sub-300ms scanline `.boot-wipe` flash on route change (Next `usePathname`), skipped under reduced-motion |

## Interactive demo suite (`components/demos/`)

Seven sales-tool dashboards rendered as real React/Framer Motion components — no screenshots, no static mockups. Wired into the homepage via `components/sections/SeeWhatWeBuild.tsx` (tabbed, `id="see-what-we-build"`), inserted between the case-study section and reviews.

| Component | What it shows |
|---|---|
| `ControlCenterDemo` | Master grid of all 6 modules with live metrics; tiles call `onSelectModule` to jump tabs in the parent |
| `WebsiteDesignDemo` | `DashboardWindow` with desktop/mobile + before/after toggles, Lighthouse score rings, call-tracking metrics |
| `LocalSEODemo` | GBP status, animated Map Pack rank climb (#11→#1), keyword table, traffic/review `DataChart`s, service-area chips |
| `LeadGenerationDemo` | Live `ActivityFeed` of incoming leads, source breakdown bars, call-recording waveforms, pipeline stages |
| `ReviewManagementDemo` | Rating/review-count counters, live review-collection feed, growth chart, feedback queue |
| `GoogleAdsDemo` | Spend/CPL/ROAS counters, per-campaign cards, leads-over-time chart |
| `MaintenanceDemo` | Circular health gauge, uptime/load-time stats, security/backup checklist, activity log |

Shared primitives live in `components/demos/shared/` and are reused across all seven — don't duplicate their markup when adding an 8th demo:

| Primitive | Purpose |
|---|---|
| `CopperGlowCard` | Base hoverable panel (copper border-glow on hover) |
| `SystemStatusBadge` | Pulsing status pill — `online` is the *only* state allowed to use green |
| `AnimatedMetricCounter` | Count-up-on-scroll number, optional `live` mode that nudges upward on an interval |
| `TerminalPanel` | `TerminalFrame`'s sibling with an `actions` slot in the header (view toggles, filters) |
| `DashboardWindow` | Browser-chrome shell (URL bar, not terminal title) for live-site mockups, `device="desktop"|"mobile"` |
| `ActivityFeed` | `AnimatePresence` log; pass `pool` + `live` to auto-inject new items on an interval |
| `DataChart` | Hand-rolled SVG line/bar chart, animates in once on scroll — no chart library dependency |
| `ScanLineOverlay` | Thin re-export of `decor/ScanlineOverlay` (+ optional grid) scoped for demo dashboards |

All counters/feeds/charts trigger once on scroll-into-view (`useInView`, `once: true`) — nothing animates on every render. `live` modes (lead feed, review feed, lead counter) use `setInterval`, cleaned up on unmount.

## Interaction layer ("wow factor" pass)

- **Custom cursor**: `CustomCursor` mounted once in `app/(site)/layout.tsx`. Sets `html.custom-cursor-active` (hides native cursor) only when `pointer: fine` and not `prefers-reduced-motion`. CSS lives under "Custom cursor — CNC reticle" in `globals.css`. Always hidden via `(pointer: coarse)` media query regardless of JS state — don't gate visibility by viewport width, narrow desktop windows are still fine-pointer.
- **Page transitions**: `PageTransition` mounted alongside it, renders a `.boot-wipe` div keyed by pathname change — CSS-only animation, never blocks navigation or hydration.
- **System status strip**: footer (`components/layout/Footer.tsx`) has a `StatusLED` + `mono-label` row above the copyright bar (`SYSTEM ONLINE · UPTIME · BUILD`). Reuses existing primitives, no new component.
- **CRT hover distortion**: `.crt-hover` utility class (red/cyan edge-blend pseudo-elements + flicker keyframe) applied to `TerminalFrame` and `OSModuleCard`. Parent needs `overflow-hidden` (already set) so the effect doesn't bleed past rounded corners. Respects reduced-motion.
- **Button press micro-interaction**: `.btn-primary/.btn-outline/.btn-ghost` get a `scale(0.96)` + brightness pulse on `:active`, extending the same pulse language as `StatusLED`.

## Animation rules

- **Hero/LCP-critical content: pure CSS only** (`.fade-up`, `.fade-in-right`, `.grow-bar` in globals.css). Never wrap hero content in `Reveal`/`motion.*` — Framer Motion SSRs `initial` as inline `opacity:0`, gating visibility behind JS hydration and delaying LCP.
- `framer-motion` is installed, but **only** via `components/motion/` (`Reveal`, `AnimatedCounter`, `TiltCard`) for below-the-fold or interaction-only content.
- Cost: below-fold framer-motion costs ~2 Lighthouse Performance points (99→97) since the bundle ships regardless. A11y/Best Practices/SEO stay 100, CLS stays 0. Next lever if needed: `next/dynamic` deferred import — not done yet.
- All decorative animation respects `prefers-reduced-motion`.

## Other design principles

1. Dark bg first — forge-black primary, forge-dark secondary
2. Body text min 14px, forge-muted on dark
3. Monospace for system/technical labels only
4. Section eyebrow: `<span className="sec-label">` before every h2
5. Mobile-first grids, 44px min touch targets
6. **Photography (added 2026-06-23, supersedes prior "no photography" rule):** real trade-business imagery is now used deliberately, ~70% software/dashboard visuals to ~30% real-world photos, via `TradeImage` (`components/ui/TradeImage.tsx`). Sourcing priority: (1) real 404 TradeOS / Lucas Construction client photos when they exist, (2) `TradeImage`'s built-in placeholder slot (renders a styled empty-state, not a broken image) when no real photo exists yet, (3) licensed stock (currently Unsplash, downloaded into `public/images/`, never hotlinked) as a temporary stand-in — swap for real client photos as soon as they exist. Stock direction: authentic trade jobsites/tools/trucks, no suits, no office/call-center/handshake stock. `TradeImage` applies the dark+copper gradient overlay automatically; pass `overlay={false}` to opt out. Folder layout: `public/images/{hero,services,case-studies,team}/`.
