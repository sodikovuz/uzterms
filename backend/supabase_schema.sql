create table users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  password text not null,
  created_at timestamptz default now()
);

create table monitors (
  id uuid primary key default gen_random_uuid(),
  url text not null,
  title text,
  last_hash text,
  last_content text,
  active boolean default true,
  created_at timestamptz default now()
);

create table events (
  id uuid primary key default gen_random_uuid(),
  monitor_id uuid references monitors(id) on delete cascade,
  type text,
  old_hash text,
  new_hash text,
  changes text,
  created_at timestamptz default now()
);