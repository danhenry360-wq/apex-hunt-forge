-- FORCE FIX PERMISSIONS
-- Run this entire block in Supabase SQL Editor

-- 1. Disable the Security Check completely (The easiest fix)
alter table public.projects disable row level security;

-- 2. Drop any conflicting old rules (to stop errors)
drop policy if exists "Enable all access for authenticated users" on public.projects;
drop policy if exists "Enable read access for all users" on public.projects;
drop policy if exists "Public Viewing" on public.projects;
drop policy if exists "Admin Control" on public.projects;
drop policy if exists "Allow All" on public.projects;

-- 3. (Optional) Re-enable with a single "Allow All" rule
-- Uncomment the lines below ONLY if you want security back on
-- alter table public.projects enable row level security;
-- create policy "Allow All" on public.projects for all using (true) with check (true);
