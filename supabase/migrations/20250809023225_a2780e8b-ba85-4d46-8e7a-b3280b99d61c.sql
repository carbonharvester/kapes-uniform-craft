
-- Create a table to map school codes to Shopify collection URLs
create table if not exists public.school_codes (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  school_name text,
  redirect_url text not null,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Updated-at trigger
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists set_updated_at on public.school_codes;
create trigger set_updated_at
before update on public.school_codes
for each row
execute function public.set_updated_at();

-- Enable Row Level Security
alter table public.school_codes enable row level security;

-- Read-only public access to active codes
drop policy if exists "Allow public select active school codes" on public.school_codes;
create policy "Allow public select active school codes"
on public.school_codes
for select
using (active = true);

-- Note: No INSERT/UPDATE/DELETE policies are created for anon users.
-- Manage rows via Supabase Dashboard or with service role only.
