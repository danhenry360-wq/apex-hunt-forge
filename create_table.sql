-- RUN THIS TO CREATE THE TABLE
-- You are missing the "projects" table, which is why it fails.

create table public.projects (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  client text,
  description text,
  video_url text,
  images text[] default array[]::text[],
  category text default 'OTHER',
  stack text default 'Manual',
  color text default 'primary',
  kill_shot text default '$ deployed via god-mode',
  metrics jsonb,
  challenge text,
  approach text,
  testimonial_quote text,
  testimonial_author text
);

-- Turn off security so you can write to it immediately
alter table public.projects enable row level security;
create policy "Allow All" on public.projects for all using (true) with check (true);
