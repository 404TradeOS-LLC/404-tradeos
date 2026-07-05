-- 404 TradeOS leads table
-- Run this in your Supabase SQL editor

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  business_name text,
  trade_type text,
  service_type text,
  plan_interest text,
  city text,
  message text,
  source text,
  status text not null default 'new' check (status in ('new','contacted','quoted','closed_won','closed_lost')),
  utm_source text,
  utm_medium text,
  utm_campaign text,
  ip_address text
);

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin new.updated_at = now(); return new; end;
$$ language plpgsql;

create trigger leads_updated_at
  before update on leads
  for each row execute function update_updated_at();

-- Enable Row Level Security
alter table leads enable row level security;

-- Public: insert only (form submissions, anon key)
create policy "public_insert" on leads
  for insert to anon with check (true);

-- Authenticated (admin dashboard): full access
create policy "auth_all" on leads
  for all to authenticated using (true);

-- Index for dashboard queries
create index if not exists leads_status_idx on leads (status);
create index if not exists leads_created_idx on leads (created_at desc);
