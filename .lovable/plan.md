## Shared Inspiration Feed — Architecture Plan

Status: **planning only**. Nothing gets built until you say go.

---

### 1. Does the table structure make sense in Lovable Cloud?

Yes — it's well-shaped for a small editorial feed and won't paint you into a corner. A few small refinements I'd make:

- **`id`** → `uuid` primary key, default `gen_random_uuid()`.
- **`slug`** → `text unique not null`. Lets you build `/inspiration/<slug>` later without a migration.
- **`kind`** → Postgres enum `inspiration_kind` (`tidbit`, `quote`, `artist`). Small, stable set — enum is the right call.
- **`source_type`** → see section 2 below.
- **`tags`** → `text[]` (Postgres array). Cheap to query with `&&` / `@>`, no join table needed at this scale.
- **`era`** → `text` for now (e.g. "Renaissance", "1920s", "Contemporary"). Promote to a lookup table only if it becomes a real filter.
- **`published_at`** → `timestamptz`, nullable. Lets you schedule.
- **`is_published`** → `boolean not null default false`. Belt-and-suspenders with `published_at`.
- **`copyright_status`** → enum is tempting but I'd start as `text` with a check constraint (`public_domain`, `cc_by`, `cc_by_sa`, `fair_use`, `licensed`, `original_ast`, `unknown`). Easier to extend than an enum.
- **`created_by`** → `text` (e.g. `"laptop-script"`, `"admin:lisa"`) rather than a FK to `auth.users`, since writes come from a script/edge function, not an authenticated user.
- **Indexes:** `(is_published, published_at desc)` for the public feed query, plus `(kind)` and a GIN index on `tags`.
- **RLS:** enabled. One public SELECT policy: `is_published = true AND published_at <= now()`. No INSERT/UPDATE/DELETE policies — only the service role (via edge function) can write.

### 2. Should `source_type` be an enum, a check constraint, or plain text?

**Check constraint on a `text` column** — best of both worlds for your case.

- Enum: rigid. Adding a value later requires `ALTER TYPE` and can be annoying to remove.
- Check constraint: same data-quality guarantee (no `Museum` vs `museum` vs `museums`), but you can edit the allowed list in a one-line migration whenever a new source category appears (which it will — "auction_house", "estate", "foundation"…).
- Plain text: rejected for exactly the reason you flagged.

Pair it with a normalization rule in the edge function (lowercase, snake_case) so callers can't sneak past it with whitespace.

### 3. Is the edge function the safest write path?

Yes. Concretely:

- **Edge function `POST /inspiration`** — accepts JSON, validates with Zod (kind, source_type, required fields, slug uniqueness, image URL shape, alt text length), normalizes strings, then inserts using the service role key that lives only in the function's env.
- **Auth on the function:** a long random `INSPIRATION_WRITE_KEY` secret sent as `Authorization: Bearer …`. Your laptop script holds it; nothing client-side ever sees it.
- **Never** ship the service role key to the marketing site or the core app frontend.
- Optional later: a second endpoint `POST /inspiration/upload` that returns a signed upload URL into the `inspiration` storage bucket, so the script can push images without holding storage credentials directly.

This keeps the public site read-only and removes the "frontend with god-mode key" failure mode entirely.

### 4. Storage

- Bucket: `inspiration`, **public** (so the CDN URL in `image_url` Just Works in `<img src>`).
- Storage RLS: public SELECT, write restricted to service role only.
- `image_alt` required at the DB level (`not null check (length(image_alt) between 4 and 300)`).
- Image URL stored as the full public CDN URL, not a bucket-relative path — simpler for the marketing site and for any future mirrored consumer.

### 5. Public page behavior (`/inspiration`)

- Magazine column layout, reverse-chronological by `published_at`.
- Top-of-page tabs: **All · Tidbits · Quotes · Artists** (mapped to `kind`).
- Each card renders differently per `kind`:
  - **tidbit** — title, body, era pill, credit line
  - **quote** — large pull-quote, attribution, source link
  - **artist** — image-led, name, short bio, era, link out
- Always render a credit line built from `attribution` / `source_name` / `source_url` / `copyright_status`. This is non-negotiable from day one — exactly the reason you flagged trust fields.
- `tags`, `era`, `source_type` stay in the DB but are not surfaced in UI yet. Easy to expose later as filters or facets without a migration.

### 6. What I'd scaffold when you're ready

In one build pass, in this order:

1. Migration: enum `inspiration_kind`, table `inspiration_feed` with check constraints, indexes, RLS, GRANTs.
2. Storage: `inspiration` bucket + policies.
3. Edge function `inspiration-write` (POST + auth + Zod + slug collision handling).
4. `INSPIRATION_WRITE_KEY` secret (generated, never echoed).
5. Marketing page `/inspiration` with kind tabs, magazine layout, credit lines, SEO + sitemap entry.
6. Nav link + footer link (cross-linking, like we did for the other pages).
7. A tiny `scripts/post-inspiration.ts` example showing how your laptop script calls the edge function — you adapt it for your real ingestion folder.

### Open questions before building

1. **Slug source** — auto-generated from `title`, or always supplied by your ingestion script? (Auto + override is my default.)
2. **Public bucket OK?** Required if you want plain `<img src>` with CDN caching. If you'd rather keep images private and sign on read, say so — slightly slower, more control.
3. **One feed or per-kind paths?** I'd do `/inspiration` (combined, with tabs) and skip `/inspiration/quotes` etc. until you actually want them indexed separately.
4. **Mirror direction confirmed?** Plan above assumes the core app *writes* and the marketing site *reads*. If the marketing site should ever be a writer too (e.g. an admin page), say so now so I bake an admin auth path in instead of bolting it on.

No code changes made. Reply with answers to the four questions (or "looks good, ship it later") and I'll hold here until you're ready.