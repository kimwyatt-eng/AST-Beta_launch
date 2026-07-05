// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { publishedPosts as blogPosts } from "../src/data/blogPosts";

// Production base URL — override with SITE_URL env var if needed.
// Must be an absolute https:// origin with no trailing slash so the RSS
// self-link matches the canonical document location and passes W3C validation.
const RAW_BASE_URL = process.env.SITE_URL?.trim() || "https://artsupplytracker.com";
const BASE_URL = RAW_BASE_URL.replace(/\/+$/, "");
if (!/^https:\/\/[^/]+$/.test(BASE_URL)) {
  throw new Error(
    `Invalid SITE_URL "${RAW_BASE_URL}". Expected an absolute https:// origin (e.g. https://artsupplytracker.com).`,
  );
}

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/partners", changefreq: "monthly", priority: "0.7" },
  { path: "/investors", changefreq: "monthly", priority: "0.7" },
  { path: "/founders", changefreq: "monthly", priority: "0.6" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/blog", changefreq: "weekly", priority: "0.9" },
  ...blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    lastmod: post.publishedAt,
    changefreq: "monthly" as const,
    priority: "0.8",
  })),
];

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);

// -------- RSS feed --------
// Emits RSS 2.0 with the Dublin Core and Atom namespaces so we can carry:
//   - <pubDate>       (RFC 822, GMT via toUTCString)
//   - <atom:updated>  (RFC 3339 / ISO 8601 with timezone offset)
//   - <dc:date>       (RFC 3339, machine-readable publish date)
//   - <dc:creator>    (author name — RSS <author> requires an email)
//   - multiple <category> tags per item
function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Parse either "YYYY-MM-DD" (treated as UTC midnight) or a full ISO string.
// Returns { rfc822, rfc3339 } — the two formats RSS/Atom actually want.
function formatDates(input: string) {
  const iso = /^\d{4}-\d{2}-\d{2}$/.test(input) ? `${input}T00:00:00Z` : input;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) {
    throw new Error(`Invalid date "${input}" in blogPosts.ts (expected YYYY-MM-DD or ISO 8601).`);
  }
  return { rfc822: d.toUTCString(), rfc3339: d.toISOString() };
}

const SITE_AUTHOR = "Art Supply Tracker";
const EDITOR_EMAIL = "hello@artsupplytracker.com";

const sortedPosts = [...blogPosts].sort((a, b) =>
  (b.updatedAt ?? b.publishedAt).localeCompare(a.updatedAt ?? a.publishedAt),
);

const feedUpdatedSource = sortedPosts[0]?.updatedAt ?? sortedPosts[0]?.publishedAt ?? new Date().toISOString();
const feedDates = formatDates(feedUpdatedSource);

const rssItems = sortedPosts
  .map((post) => {
    const url = `${BASE_URL}/blog/${post.slug}`;
    const pub = formatDates(post.publishedAt);
    const upd = formatDates(post.updatedAt ?? post.publishedAt);
    const author = post.author ?? SITE_AUTHOR;
    const categories: string[] = [];
    if (post.category) categories.push(post.category);
    for (const t of post.tags ?? []) if (!categories.includes(t)) categories.push(t);

    return [
      `    <item>`,
      `      <title>${escapeXml(post.title)}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      `      <pubDate>${pub.rfc822}</pubDate>`,
      `      <atom:updated>${upd.rfc3339}</atom:updated>`,
      `      <dc:date>${pub.rfc3339}</dc:date>`,
      `      <dc:creator>${escapeXml(author)}</dc:creator>`,
      `      <description>${escapeXml(post.description)}</description>`,
      ...categories.map((c) => `      <category>${escapeXml(c)}</category>`),
      `    </item>`,
    ].join("\n");
  })
  .join("\n");

const rss = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">`,
  `  <channel>`,
  `    <title>Art Supply Tracker Blog</title>`,
  `    <link>${BASE_URL}/blog</link>`,
  `    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />`,
  `    <description>Studio management, art history, and creative practice guides from Art Supply Tracker.</description>`,
  `    <language>en-us</language>`,
  `    <copyright>© ${new Date().getUTCFullYear()} ${SITE_AUTHOR}. All rights reserved.</copyright>`,
  `    <managingEditor>${EDITOR_EMAIL} (${SITE_AUTHOR})</managingEditor>`,
  `    <webMaster>${EDITOR_EMAIL} (${SITE_AUTHOR})</webMaster>`,
  `    <lastBuildDate>${feedDates.rfc822}</lastBuildDate>`,
  `    <atom:updated>${feedDates.rfc3339}</atom:updated>`,
  rssItems,
  `  </channel>`,
  `</rss>`,
].join("\n");

writeFileSync(resolve("public/rss.xml"), rss);
console.log(`rss.xml written (${blogPosts.length} items)`);
