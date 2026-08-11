# Product and AI Strategy — TradeOS

## Product thesis

TradeOS should become the operational system for growing contractors who have outgrown spreadsheets and disconnected point tools but are not ready for the cost, complexity, and implementation burden of enterprise platforms.

The initial competitive advantage is not the number of modules. It is a faster, more coherent lead-to-paid workflow built around contractor reality.

## Initial customer profile

TradeOS should optimize first for contractors with:

- 5–30 field employees;
- an owner, estimator, or operations manager coordinating work;
- meaningful estimating volume;
- multiple disconnected tools;
- inconsistent follow-up or lifecycle visibility;
- enough operational complexity to need structure;
- no dedicated internal IT team.

Likely initial verticals include remodeling, general contracting, roofing, concrete, excavation, landscaping, fencing, plumbing, HVAC, and electrical. Product messaging should not imply equal depth in every trade until validated.

## Core product promise

> Turn customer information and scope into a professional estimate, proposal, scheduled job, contract, invoice, and customer record without rebuilding the same information across disconnected systems.

## Product pillars

### 1. Customer and project memory

TradeOS should preserve the complete relationship:

- customer;
- addresses and sites;
- equipment and service context;
- project history;
- documents;
- conversations and activity;
- financial and lifecycle status.

### 2. Estimating intelligence

The estimating system should combine:

- organization-specific cost book;
- assemblies;
- labor, material, and equipment inputs;
- scope extraction;
- reusable templates;
- margin and completeness warnings;
- human review.

### 3. Document lifecycle

Proposal, contract, change order, invoice, and payment workflows should share consistent states, audit history, customer-facing views, and clear next actions.

### 4. Operational execution

Projects, jobs, assignments, tasks, visits, scheduling, and closeout should connect to the commercial documents rather than exist as a second disconnected system.

### 5. Action-oriented intelligence

TradeOS should identify what needs attention, not merely display data.

Examples:

- estimates awaiting completion;
- proposals not viewed;
- contracts unsigned;
- jobs with conflicts;
- invoices overdue;
- missing closeout items;
- unusual margin changes;
- customers needing follow-up.

## Product sequencing

### Stage 1 — Complete the reliable core

- lifecycle normalization;
- authenticated end-to-end verification;
- customer portal hardening;
- production deployment verification;
- document delivery and history consistency;
- robust error and empty states;
- mobile usability for critical workflows;
- measurable onboarding path.

### Stage 2 — Private beta differentiation

- faster scope-to-estimate workflow;
- estimate completeness warnings;
- reusable trade templates;
- job scheduling visibility;
- customer follow-up automation;
- morning action briefing;
- beta analytics and feedback capture.

### Stage 3 — Operational expansion

- technician-focused mobile view;
- richer dispatch and route context;
- field notes, photos, and closeout;
- material and supplier workflows;
- improved payment integration;
- management dashboards.

### Stage 4 — Platform leverage

- public API and integrations;
- partner ecosystem;
- benchmark intelligence;
- advanced forecasting;
- enterprise controls where justified.

## What not to build yet

- general-purpose accounting replacement;
- payroll;
- full inventory ERP;
- fleet telematics platform;
- unrestricted custom workflow builder;
- marketplace;
- broad enterprise procurement;
- autonomous customer commitments;
- advanced dispatch optimization before basic scheduling is proven.

## AI strategy

### Principle

TradeOS should not market a generic chatbot as its AI strategy.

AI should appear as narrow operational capability embedded into real workflows.

### AI operating roles

#### AI Estimator

Responsibilities:

- extract scope from text, voice, photos, and site notes;
- retrieve relevant assemblies and cost items;
- draft line items;
- identify omissions;
- explain confidence and evidence;
- preserve human approval.

#### AI Office Manager

Responsibilities:

- summarize incoming leads;
- prepare follow-ups;
- identify stale opportunities;
- surface unsigned and unpaid documents;
- draft customer communications;
- prepare daily priorities.

#### AI Scheduler

Responsibilities:

- identify assignment conflicts;
- suggest available windows;
- account for duration, skills, equipment, and dependencies;
- explain tradeoffs;
- require confirmation before changes.

#### AI Project Coordinator

Responsibilities:

- summarize project status;
- identify missing decisions and documents;
- warn of schedule or scope risk;
- prepare change-order drafts;
- track closeout completeness.

#### AI Margin Analyst

Responsibilities:

- compare estimated and actual values when actuals exist;
- flag unusual markup, labor, or material assumptions;
- identify low-margin work;
- explain the drivers of variance.

### AI safety and trust requirements

Every material AI workflow should support:

- explicit source or evidence display;
- confidence indication;
- editable output;
- acceptance, rejection, or correction;
- audit record where business-critical;
- organization-scoped retrieval;
- no silent cross-tenant learning;
- deterministic fallback when AI is unavailable;
- clear distinction between recommendation and authoritative record.

## Knowledge advantage

The Knowledge Engine can become a meaningful differentiator only when it is curated, structured, versioned, and connected to verified contractor workflows.

The moat is not raw text. It is the combination of:

- structured trade knowledge;
- organization cost books;
- assemblies and relationships;
- customer and project history;
- user corrections;
- workflow outcomes;
- explainable retrieval.

## Data strategy

TradeOS should collect the minimum data needed to improve customer outcomes while preserving trust.

Useful product signals include:

- time to first estimate;
- estimate editing patterns;
- frequently added missing items;
- proposal view and acceptance timing;
- scheduling conflicts;
- invoice aging;
- repeated customer questions;
- workflow abandonment;
- support requests.

Customer data must not be used for broad model training or benchmarking without clear contractual and privacy treatment.

## Product metrics

### Activation

- organization setup completed;
- first customer created;
- first estimate created;
- first proposal sent or viewed;
- first scheduled job;
- first invoice issued.

### Engagement

- weekly active organizations;
- workflows completed per organization;
- estimates created;
- proposals progressed;
- jobs scheduled;
- portal interactions.

### Value

- estimate time reduction;
- lead response improvement;
- close-rate improvement;
- days-to-invoice reduction;
- administrative time saved;
- reduced scheduling conflicts;
- reduced document errors.

### Retention

- organization retention;
- active-seat retention;
- workflow depth;
- expansion to additional modules;
- support burden per account.

## Definition of product-market evidence

TradeOS should not claim product-market fit based on code completeness or verbal enthusiasm.

Evidence should include:

- customers using the core workflow repeatedly;
- measurable operational improvement;
- willingness to pay;
- retention beyond initial onboarding;
- organic referrals or expansion;
- a repeatable sales and onboarding process.

## Product decision rule

A proposed feature should rank highly only when it:

1. solves a verified customer problem;
2. strengthens the core lead-to-paid workflow;
3. improves activation, value, retention, or risk;
4. can be supported operationally;
5. does not create disproportionate complexity;
6. aligns with the current engineering milestone.