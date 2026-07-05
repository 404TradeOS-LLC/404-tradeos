# 404 TradeOS — CLAUDE.md

Project docs are split by concern — check the relevant one before asking or re-deriving:

- **PROJECT.md** — what this is, tech stack, file structure, env vars, Supabase, build status, business facts
- **BRAND.md** — name, tagline, color tokens + contrast ratios, logo system, voice
- **DESIGN-SYSTEM.md** — Tailwind v4 rules, CSS component classes, visual direction, animation rules, component library
- **SESSION-HANDOFF.md** — what's done, what's pending, decisions already made — update at end of each session

## Operating rules

- Don't scan the whole repo. Read only files needed for the current task.
- Check PROJECT.md / BRAND.md / DESIGN-SYSTEM.md / SESSION-HANDOFF.md first — don't ask for info already documented there.
- Reuse existing components (see DESIGN-SYSTEM.md library) over writing new ones.
- New UI work: inspect only the page/components directly involved, not unrelated routes or backend code.
- New assets: SVG/CSS/React only, no images/stock photos/placeholder illustrations unless explicitly requested.
- Keep responses concise — files changed, summary, follow-ups. Skip explaining obvious code.
- End of task: update SESSION-HANDOFF.md with files changed, pending work, design decisions.
