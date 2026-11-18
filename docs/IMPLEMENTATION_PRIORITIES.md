# TradeOS Strategic Implementation Priorities

## Purpose

Translate the strategic audit into a disciplined sequence. This document does not authorize feature expansion. It identifies what should be proven, corrected, or operationalized first.

## Prioritization Rules

Work is ranked by:

1. customer and revenue impact
2. risk reduction
3. dependency value
4. implementation effort
5. evidence strength
6. ongoing maintenance cost

TradeOS may become more sophisticated internally, but each release should become simpler externally.

## Immediate: Next 30 Days

### 1. Finish Engineering Governance

Outcome:

- command center and handoff protocol merged
- protected-branch rules configured
- source-of-truth documentation enforced
- stale PRs reviewed and dispositioned

Why first:

Execution speed is wasted when agents and branches carry conflicting context.

### 2. Complete Lifecycle Normalization

Outcome:

- project, estimate, proposal, contract, invoice, and job statuses align across storage, APIs, shared contracts, UI, and portal
- compatibility mappings are documented and tested
- no ambiguous user-facing lifecycle language

Why first:

Lifecycle inconsistency creates product confusion, hidden bugs, and unreliable automation.

### 3. Verify Production Readiness

Outcome:

- deployment environments identified and verified
- migrations and rollback process tested
- required secrets/configuration documented
- authentication and tenant isolation validated
- current security findings triaged

Why first:

A polished product without deployment confidence is not ready for customer trust.

### 4. Define the First Sellable TradeOS Offer

Outcome:

- exact target customer
- included workflows
- onboarding scope
- price hypothesis
- support expectations
- beta acceptance criteria

Why first:

The product needs a concrete commercial boundary, not only a broad platform vision.

### 5. Establish 404 TradeOS Conversion Baseline

Outcome:

- analytics confirmed
- lead-source tracking confirmed
- current CTA and form conversion measured
- sales pipeline stages defined
- one primary conversion goal selected

Why first:

Improvement cannot be measured without a baseline.

## Near Term: 31–90 Days

### 6. Launch One Real Diagnostic Lead Magnet

Recommended first option:

Contractor Digital Health Check.

Requirements:

- useful result
- structured lead data
- transparent methodology
- strong next step
- no fabricated scores or claims

### 7. Produce One High-Credibility Case Study

Requirements:

- real customer or internal demonstrator
- before state
- intervention
- measured result
- screenshots/workflow proof
- customer permission where applicable

### 8. Validate the Daily Operations Brief Concept

This is not authorization for a large AI feature build.

Validate through prototypes and interviews:

- what contractors need to know first each morning
- which decisions require approval
- which information is noise
- what can safely be prepared in advance
- what language builds trust

Success criterion:

Users can understand the day and identify required decisions within minutes without navigating multiple modules.

### 9. Run a Private Beta

Use a very small number of representative contractors.

Measure:

- onboarding time
- estimate turnaround
- task completion
- errors/confusion
- support requests
- weekly active usage
- value recognized
- willingness to pay

### 10. Build Repeatable Sales and Onboarding

Outcome:

- qualification checklist
- discovery script
- proposal template
- onboarding milestones
- implementation checklist
- customer-success review template

## Medium Term: 3–12 Months

### 11. Convert Proven Workflows Into Invisible Assistance

Examples only after evidence:

- prepared follow-ups
- draft estimates/proposals
- risk flags
- schedule suggestions
- overdue-invoice prioritization
- morning operational brief

Each capability must:

- remove work
- explain its reasoning where relevant
- preserve approval and control
- be reversible
- avoid adding another permanent screen unless necessary

### 12. Strengthen Customer Portal and Communication

Focus:

- clear proposal/contract/invoice lifecycle
- trustworthy delivery history
- simple approvals/signatures
- consistent branding
- responsive mobile experience

### 13. Establish Customer Success Metrics

Track:

- time to first value
- onboarding completion
- feature/workflow adoption
- estimate/proposal cycle time
- renewal risk
- support burden
- expansion opportunity

### 14. Create Shared Brand/Product Governance

Operationalize:

- shared tokens
- parent/product brand relationship
- design review checklist
- cross-repo change notification
- intentional differences between marketing and product

### 15. Prove Unit Economics

Know:

- acquisition cost
- implementation cost
- support cost
- gross margin
- payback period
- retention
- expansion revenue

## Later: Only After Proof

Potential expansion areas:

- technician-focused mobile experience
- partner/channel program
- marketplace
- broader supplier connectivity
- advanced dispatch optimization
- embedded payments
- enterprise reporting
- public API ecosystem
- academy/training products

These are not current commitments.

## Explicitly Avoid Now

- broad architecture rewrite
- simultaneous expansion into every trade
- fully autonomous financial/customer actions
- building a chatbot as the primary AI experience
- adding navigation items for every internal capability
- copying ServiceTitan feature-for-feature
- large sales hiring before onboarding and retention proof
- custom client work that forks the core platform

## Decision Gates

Before moving from one stage to the next, require evidence.

### Beta Gate

- critical workflows function reliably
- tenant/security checks pass
- onboarding can be completed
- known limitations are documented
- customer support path exists

### Paid Launch Gate

- users receive measurable value
- pricing and support model are defined
- product can be deployed and monitored
- lifecycle behavior is coherent
- backups/rollback and incident ownership are understood

### Scale Gate

- repeatable acquisition
- repeatable onboarding
- acceptable gross margin
- strong retention signal
- support load is manageable
- founder is not required for routine customer operation

## Highest-Level Product Constraint

> TradeOS should do more work before the contractor opens it, while showing the contractor fewer things that demand attention.

All roadmap decisions should be tested against that constraint.
