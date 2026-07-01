// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { blogPosts } from "../src/data/blogPosts";

const BASE_URL = "https://artsupplytracker.com";

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
function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const feedUpdated = blogPosts
  .map((p) => p.publishedAt)
  .sort()
  .reverse()[0] ?? new Date().toISOString().slice(0, 10);

const rssItems = [...blogPosts]
  .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
  .map((post) => {
    const url = `${BASE_URL}/blog/${post.slug}`;
    return [
      `    <item>`,
      `      <title>${escapeXml(post.title)}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      `      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>`,
      `      <description>${escapeXml(post.description)}</description>`,
      post.category ? `      <category>${escapeXml(post.category)}</category>` : null,
      `    </item>`,
    ]
      .filter(Boolean)
      .join("\n");
  })
  .join("\n");

const rss = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">`,
  `  <channel>`,
  `    <title>Art Supply Tracker Blog</title>`,
  `    <link>${BASE_URL}/blog</link>`,
  `    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />`,
  `    <description>Studio management, art history, and creative practice guides from Art Supply Tracker.</description>`,
  `    <language>en-us</language>`,
  `    <lastBuildDate>${new Date(feedUpdated).toUTCString()}</lastBuildDate>`,
  rssItems,
  `  </channel>`,
  `</rss>`,
].join("\n");

writeFileSync(resolve("public/rss.xml"), rss);
console.log(`rss.xml written (${blogPosts.length} items)`);
