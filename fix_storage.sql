-- FIX STORAGE PERMISSIONS
-- Run this in Supabase SQL Editor

-- 1. Allow Anyone (Anon + Authenticated) to Upload to the 'safelab-evidence' bucket
-- This removes the "only admin" restriction which might be causing issues if the login state is flaky.

create policy "Universal Upload" on storage.objects
for insert with check ( bucket_id = 'safelab-evidence' );

create policy "Universal Update" on storage.objects
for update using ( bucket_id = 'safelab-evidence' );

create policy "Universal Select" on storage.objects
for select using ( bucket_id = 'safelab-evidence' );

-- If it says "Policy already exists", run these lines to delete old ones first:
-- drop policy if exists "Public Storage Access" on storage.objects;
-- drop policy if exists "Admin Storage Upload" on storage.objects;
-- drop policy if exists "Universal Upload" on storage.objects;
