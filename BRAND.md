# BRAND.md — 404 TradeOS

- **Name:** 404 TradeOS — the "404" is part of the name, always in the badge/lockup
- **Domain:** 404tradeos.com · **Email:** hello@404tradeos.com
- **Tagline:** "Stop being a 404. Start getting found."
- **Concept:** 404 = business not found. TradeOS = operating system for trade businesses.

## Color tokens (`app/globals.css` `@theme`)

```
--color-copper:        #B87333   primary accent, CTAs
--color-copper-light:  #E8C99A   headlines on dark
--color-copper-dark:   #8A5620   hover states
--color-forge-black:   #0D0A07   primary background
--color-forge-dark:    #1E1610   secondary background/cards
--color-forge-border:  #3d2a10   borders/dividers
--color-forge-rust:    #998066   muted text/labels (5.3:1 on black, 4.8:1 on dark — AA)
--color-forge-muted:   #C8C0B0   body text (7.8:1 on black — AAA)
--color-bone:          #F7F2EC   primary text on dark (18.1:1 — AAA)
--color-system-green:  #00C896   success/online states ONLY
--color-error-red:     #E24B4A   errors/warnings
```

**Never introduce a new color.** Copper is the only accent; green is reserved for success/online states. All tokens above are WCAG AA-verified against both backgrounds they appear on — if adding new text-on-background combos, check contrast before shipping (see PROJECT.md history: original `forge-rust` `#5a3d1e` was 1.99:1, failed AA, had to be relightened).

## Typography (added 2026-06-23)

- **Display/headlines** (`h1`/`h2`/`h3`, `.wordmark`): **Space Grotesk**, loaded via `next/font/google` in `app/layout.tsx` (`variable: "--font-display"`), applied in `app/globals.css`. Geometric/technical but still readable — used for the wordmark and big headline numbers.
- **Body text**: unchanged system-font stack — `--font-sans: system-ui, -apple-system, "Segoe UI", sans-serif`.
- **Mono/technical labels** (`.mono-label`, `.sec-label`, `.badge-404`, terminal chrome): unchanged — `--font-mono: "Courier New", Courier, monospace`.
- Don't add a third type family — Space Grotesk is for headlines only, never body copy.

## Logo system

Badge + wordmark always appear together:

```tsx
<div className="badge-404">
  <span className="b-404">404</span><span className="b-sep" />
  <span className="b-trade">TRADE</span><span className="b-sep" />
  <span className="b-os">OS</span>
</div>
<span className="wordmark text-2xl">Trade<span className="os">OS</span></span>
```

Badge stacks above wordmark in tight horizontal nav.

## Voice

Plain-spoken, confident, no agency jargon. Speaks to tradespeople, not tech people.
