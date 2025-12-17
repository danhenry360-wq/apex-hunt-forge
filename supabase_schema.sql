-- 1. Create Projects Table
create table public.projects (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  category text default 'OTHER',
  size text default 'medium',
  hunt_time text default 'TBD',
  stack text default '',
  client text default 'Classified',
  kill_shot text default '$ echo "mission complete"',
  color text default 'primary',
  description text,
  video_url text,
  images text[] default array[]::text[],
  metrics jsonb,
  challenge text,
  approach text,
  testimonial_quote text,
  testimonial_author text
);

-- 2. Create Storage Bucket for Images
insert into storage.buckets (id, name, public)
values ('safelab-evidence', 'safelab-evidence', true);

-- 3. Set Up Security Policies (RLS)
-- Enable RLS
alter table public.projects enable row level security;

-- Policy: Everyone can READ projects
create policy "Public Viewing" on public.projects
  for select using (true);

-- Policy: Only Authenticated Users (Admins) can INSERT/UPDATE/DELETE
create policy "Admin Control" on public.projects
  for all using (auth.role() = 'authenticated');

-- Storage Policies
-- Everyone can view images
create policy "Public Storage Access" on storage.objects
  for select using ( bucket_id = 'safelab-evidence' );

-- Only Admin can upload images
create policy "Admin Storage Upload" on storage.objects
  for insert with check ( bucket_id = 'safelab-evidence' and auth.role() = 'authenticated' );
