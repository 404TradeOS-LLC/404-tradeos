# Cross-Repository Design Governance

**Repositories:**

- `404TradeOS-LLC/404-tradeos`
- `404TradeOS-LLC/TradeOScostbook`

**Status:** Proposed operating standard  
**Last reviewed:** 2026-07-14

## Objective

Keep 404 TradeOS and TradeOS recognizably related without forcing the marketing site and operational product into the same visual system.

The system must support multiple contributors and AI agents without relying on memory.

## Source-of-truth model

### 404 TradeOS repository

Authoritative for:

- parent-company brand
- public voice and marketing claims
- parent logo
- marketing colors
- marketing motion and imagery
- public conversion patterns

Primary files:

- `BRAND.md`
- `DESIGN-SYSTEM.md`
- `CLAUDE.md`
- `SESSION-HANDOFF.md`
- `docs/BRAND_ARCHITECTURE.md`

### TradeOS repository

Authoritative for:

- product UX
- operational navigation
- product components
- workflow states and status language
- accessibility in application workflows
- data-dense interaction patterns

Primary files currently include the repository's source-of-truth documentation, Blueprint implementation, shared domain contracts, and module docs.

## Shared contract

The following require alignment across both repositories:

- display typeface
- copper identity family
- product and parent naming
- logo endorsement rules
- contractor-first voice
- accessibility minimums
- semantic status meanings
- honesty around sample, simulated, or unavailable features

The following should not be copied across both repositories by default:

- page layouts
- navigation structure
- dark/light surface balance
- decorative motion
- marketing demos
- operational tables and forms
- custom cursor or CRT effects

## Change classes

### Class A — local design change

Examples:

- spacing fix on one page
- component bug
- copy correction
- responsive adjustment

Required review:

- repository-local docs only
- no cross-repo update unless a shared rule changes

### Class B — shared token change

Examples:

- copper value
- display font
- radius philosophy
- semantic state color

Required review:

- inspect both repos
- update shared token record
- document migration impact
- avoid silent drift

### Class C — brand architecture change

Examples:

- new product name
- logo relationship
- endorsement wording
- parent/product positioning

Required review:

- owner approval
- both repos
- sales and product copy
- public assets
- documentation and legal surfaces

### Class D — major product or marketing redesign

Required review:

- screenshots or rendered review
- accessibility review
- mobile review
- component reuse inventory
- performance impact
- cross-repo identity check

## AI agent startup protocol for design work

Before modifying design, an agent should state:

1. repository and branch
2. page or component scope
3. whether the change is marketing or product UX
4. authoritative design docs read
5. shared tokens affected
6. components to reuse
7. expected mobile and accessibility checks
8. whether another repo needs review

Agents must not infer that “make it match” means copying all styling from the other repository.

## Design completion protocol

At the end of a design task, report:

- exact files changed
- components reused or added
- token changes
- mobile checks
- accessibility checks
- reduced-motion impact
- screenshots or visual-QA status
- cross-repo documentation impact
- remaining inconsistencies

Update the appropriate session handoff.

## Token registry recommendation

Add a simple documented registry before creating shared infrastructure:

| Token | Parent value | Product value | Relationship |
|---|---|---|---|
| display font | Space Grotesk | Space Grotesk | identical |
| identity copper | current parent copper | restrained matching scale | shared family |
| body font | system sans | system sans | identical principle |
| primary background | forge-black | operational neutral | intentionally different |
| border language | industrial copper/dark | neutral hairline | related principle |
| radius | modest | modest | shared principle |
| success | green, states only | green, states only | same semantics |

After the registry is stable, add a CI script that compares only tokens marked `identical`. Do not fail CI for intentional differences.

## Component strategy

Do not share React components between repos merely for visual similarity. The marketing and product contexts have different performance and interaction requirements.

Share components only when all are true:

- behavior is genuinely identical
- release coupling is acceptable
- accessibility behavior matches
- ownership is clear
- the shared package creates less complexity than duplication

Prefer shared specifications and tokens before shared runtime packages.

## Visual QA cadence

### Per PR

- review affected viewport sizes
- confirm color and typography rules
- verify sample-data labels
- confirm no accidental cross-brand effect leakage

### Monthly during active development

- compare navigation, logos, typography, copper values, and voice
- review newly introduced components
- identify token drift

### Quarterly

- full cross-repo design audit
- conversion review on 404 TradeOS
- workflow usability review on TradeOS
- accessibility and performance review
- archive superseded design decisions

## Design debt register

Track design debt explicitly with:

- repository
- route/component
- issue
- customer or conversion impact
- proposed fix
- priority
- screenshots if useful

Do not bury design debt only in session logs.

## Current audit findings

1. The parent design system is well documented and expressive.
2. TradeOS has moved toward a calmer Blueprint product theme, which is the correct directional separation.
3. The relationship between the parent company and flagship product has not previously been explicit enough.
4. The parent site already has rich demos, but design proof must connect more directly to real business outcomes.
5. Shared token governance is currently documentation-driven rather than automated.
6. The 404 TradeOS repo has only an initial commit and no PR history, indicating that future work should adopt branch/PR discipline similar to TradeOS.

## Immediate actions

1. Review and approve `BRAND_ARCHITECTURE.md`.
2. Create a product-specific TradeOS design guide in the product repo after Codex's governance work lands.
3. Inventory exact shared token values.
4. Add PR and branch workflow to `404-tradeos`.
5. Add design-review sections to both repositories' contributor instructions.
6. Schedule the first cross-repo visual audit after the next major product UI milestone.

## Guardrail

Consistency does not mean sameness.

The desired result is:

> 404 TradeOS feels like the bold company capable of building serious contractor technology. TradeOS feels like the dependable system a contractor can operate every day.
