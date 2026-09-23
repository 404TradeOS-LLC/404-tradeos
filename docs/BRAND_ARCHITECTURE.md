# 404 TradeOS / TradeOS Brand Architecture

**Status:** Proposed strategic standard  
**Last reviewed:** 2026-07-14

## Purpose

This document defines how the parent company and product relate so marketing, sales, product design, documentation, and engineering do not drift into two unrelated identities.

## Brand model

Use an **endorsed product-brand architecture**:

- **404 TradeOS** is the parent company and commercial brand.
- **TradeOS** is the flagship software product, endorsed by 404 TradeOS.

Recommended public relationship:

> TradeOS — built by 404 TradeOS

Do not rename TradeOS to “404 TradeOS Software.” The product should be able to stand independently while clearly borrowing trust and expertise from the parent company.

## Core positioning

### 404 TradeOS

**Role:** Growth, implementation, and contractor-technology partner.

**Promise:** Help trade businesses get found, convert more work, and install the systems needed to scale.

**Personality:** Bold, direct, industrial, technically capable, energetic.

**Primary audiences:** Prospects, owners, marketing decision-makers, partners, and future customers.

### TradeOS

**Role:** Contractor operating platform.

**Promise:** Turn customer demand into priced, scheduled, documented, and profitable work.

**Personality:** Dependable, calm, precise, capable, contractor-native.

**Primary audiences:** Owners, office managers, estimators, project managers, dispatchers, technicians, and customers using portal views.

## Shared brand DNA

Both brands should share:

- Space Grotesk for display headings
- a restrained copper accent family
- plain-spoken contractor language
- hairline borders and technical precision
- high accessibility standards
- square or modest-radius controls rather than overly soft generic SaaS styling
- strong information hierarchy
- honest labeling of simulated or sample data
- imagery rooted in real trades and field work

## Intentional differences

| Dimension | 404 TradeOS | TradeOS |
|---|---|---|
| Primary job | attract, persuade, demonstrate | operate, decide, complete work |
| Visual energy | expressive, cinematic, memorable | calm, dense, efficient |
| Background | dark-first marketing system | neutral/light operational surfaces with dark navigation where useful |
| Motion | stronger, demonstrative, below-fold wow factor | minimal, purposeful state feedback |
| Decorative effects | grids, scanlines, diagnostic frames, selective CRT/CNC language | restrained borders, status cues, charts, workflow feedback |
| Copy | outcome-led and sales-oriented | task-led and action-oriented |
| CTA | audit, book, explore, calculate | create, send, schedule, approve, collect |

## Color governance

### Parent palette

The existing 404 TradeOS forge and copper palette remains authoritative for the marketing site.

### Product palette

TradeOS should use the same copper family as an identifying accent, not as a dominant fill. Product surfaces should prioritize:

- readable neutrals
- white or near-white work surfaces
- high-contrast text
- copper for selected actions, focus, identity, and highlights
- semantic green, amber, red, and blue only for actual states

Never use semantic colors decoratively.

## Typography

- Space Grotesk: headlines, product titles, major metrics, select navigation identity.
- System sans: body, tables, forms, operational instructions.
- Monospace: identifiers, codes, technical labels, logs, and deliberately diagnostic marketing details.

Do not use monospace for ordinary contractor-facing body copy.

## Logo and endorsement

### 404 TradeOS

Use the existing 404 badge and TradeOS wordmark lockup according to `BRAND.md`.

### TradeOS

Develop a product-specific wordmark that can stand alone in application navigation. Approved endorsement forms:

- “TradeOS” with a small “by 404 TradeOS” line on public product pages
- 404 TradeOS parent mark in footer, legal, and account/about surfaces
- no forced parent badge in every operational screen

## Voice system

### Shared rules

- speak to tradespeople, not software buyers
- avoid agency jargon and inflated AI claims
- prefer outcomes and concrete actions
- use short labels
- state limits honestly
- do not fabricate metrics or testimonials

### Parent voice examples

- “Stop losing leads you already paid for.”
- “See where your digital system is leaking work.”
- “Built for contractors who are done piecing together five apps.”

### Product voice examples

- “Create estimate”
- “3 items need pricing”
- “Schedule conflict: Jordan is assigned to another job.”
- “Proposal viewed 18 minutes ago.”

## Experience relationship

The marketing site should preview real TradeOS patterns, but it must not pretend every demo is live customer data. Product previews should use labeled seed or demo organizations.

TradeOS should carry recognizable brand cues from the site without inheriting marketing-only effects such as custom cursors, persistent scanlines, aggressive distortion, or animated decorative backgrounds.

## Cross-repo shared tokens

Create a small, versioned token contract in both repositories containing:

- copper scale
- display font
- type scale names
- border radii
- border color philosophy
- spacing scale names
- semantic status meanings
- logo asset references

Do not immediately create a shared npm package unless both repos demonstrate repeated drift. Start with documented token parity and an automated comparison script later.

## Design review checklist

Before approving a major change, verify:

1. Is this a parent-company or product experience?
2. Does the page have one clear primary action?
3. Are colors used according to their meaning?
4. Does the component already exist?
5. Is motion useful and reduced-motion safe?
6. Does the copy sound like a contractor would say it?
7. Is sample data labeled?
8. Is mobile usable with 44px targets?
9. Does the change strengthen the shared identity without copying the wrong visual layer?
10. Have corresponding design docs been updated?

## Ownership

- `404-tradeos/BRAND.md`: parent brand identity and public voice.
- `404-tradeos/DESIGN-SYSTEM.md`: parent marketing implementation rules.
- `404-tradeos/docs/BRAND_ARCHITECTURE.md`: relationship between company and product.
- TradeOS product documentation: product interaction and component rules.
- Major changes affecting both brands require a cross-repo review before merge.

## Recommended next actions

1. Approve the endorsed-brand model.
2. Inventory exact token values in both repos.
3. Create a TradeOS product-brand guide focused on operational UI.
4. Add a “Built by 404 TradeOS” product proof section to the marketing roadmap.
5. Create a quarterly cross-repo design-drift review.
