# Contributing

This is a private, proprietary codebase for 404 TradeOS. It isn't open to public contributions, but if you're a collaborator working on it:

## Workflow

1. Branch off `main` — use `feature/<short-name>` or `fix/<short-name>`.
2. Keep commits scoped and descriptive.
3. Before opening a PR, run:
   ```bash
   npm run lint
   npx tsc --noEmit
   npm run build
   ```
4. Open a PR into `main`. Vercel will generate a preview deployment automatically.

## Project docs

Check these before making changes — they document decisions already made:

- **PROJECT.md** — architecture, tech stack, env vars, business context
- **BRAND.md** — naming, color tokens, voice
- **DESIGN-SYSTEM.md** — Tailwind rules, component library, animation rules
- **SESSION-HANDOFF.md** — what's done, what's pending

## Conventions

- No new UI components without checking the existing library in `components/` first.
- No images/stock photos unless explicitly scoped — SVG/CSS/React only by default.
- Public pages live in `app/(site)/` (shared Nav/Footer). `app/admin/` intentionally has no public chrome — don't move it into the route group.
