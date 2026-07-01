// Fetches an RSS feed and validates it against the W3C Feed Validation Service.
// Usage: tsx scripts/validate-rss.ts [feedUrl]
// Defaults to $RSS_URL, then $SITE_URL/rss.xml, then https://artsupplytracker.com/rss.xml.
// Exits non-zero on network failure, HTTP error, or validator-reported errors.
// Warnings/recommendations are logged but do not fail the run.

const feedUrl =
  process.argv[2]?.trim() ||
  process.env.RSS_URL?.trim() ||
  (process.env.SITE_URL ? `${process.env.SITE_URL.replace(/\/+$/, "")}/rss.xml` : "") ||
  "https://artsupplytracker.com/rss.xml";

function fail(msg: string): never {
  console.error(`✗ ${msg}`);
  process.exit(1);
}

async function main() {
  console.log(`Fetching feed: ${feedUrl}`);
  const feedRes = await fetch(feedUrl, { headers: { Accept: "application/rss+xml, application/xml, text/xml" } });
  if (!feedRes.ok) fail(`HTTP ${feedRes.status} ${feedRes.statusText} for ${feedUrl}`);
  const ct = feedRes.headers.get("content-type") ?? "";
  const body = await feedRes.text();
  if (!body.trim().startsWith("<?xml")) fail(`Response does not look like XML (content-type: ${ct}).`);
  console.log(`✓ Fetched ${body.length} bytes (${ct || "no content-type"})`);

  console.log("Submitting to W3C Feed Validation Service…");
  const form = new URLSearchParams({ rawdata: body, manual: "1", output: "soap12" });
  const vres = await fetch("https://validator.w3.org/feed/check.cgi", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form.toString(),
  });
  if (!vres.ok) fail(`Validator HTTP ${vres.status} ${vres.statusText}`);
  const soap = await vres.text();

  const errorCount = Number(soap.match(/<m:errorcount[^>]*>(\d+)</)?.[1] ?? "0");
  const warningCount = Number(soap.match(/<m:warningcount[^>]*>(\d+)</)?.[1] ?? "0");
  const validity = soap.match(/<m:validity[^>]*>(true|false)</)?.[1];

  const errors = [...soap.matchAll(/<m:error>[\s\S]*?<m:line>(\d+)<\/m:line>[\s\S]*?<m:text>([^<]*)<\/m:text>[\s\S]*?<\/m:error>/g)];
  const warnings = [...soap.matchAll(/<m:warning>[\s\S]*?<m:line>(\d+)<\/m:line>[\s\S]*?<m:text>([^<]*)<\/m:text>[\s\S]*?<\/m:warning>/g)];

  for (const [, line, text] of errors) console.error(`  error  (line ${line}): ${text}`);
  for (const [, line, text] of warnings) console.warn(`  warn   (line ${line}): ${text}`);

  console.log(`validity=${validity} errors=${errorCount} warnings=${warningCount}`);

  if (validity !== "true" || errorCount > 0) fail("Feed failed W3C validation.");
  console.log("✓ RSS feed is valid.");
}

main().catch((err) => fail(err instanceof Error ? err.message : String(err)));
