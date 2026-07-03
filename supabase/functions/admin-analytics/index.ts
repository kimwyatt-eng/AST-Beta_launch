const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-admin-password",
};

const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";
const SITE_URL = "https://artsupplytracker.com/";
const SITE_PATH = encodeURIComponent(SITE_URL);

async function gscQuery(body: Record<string, unknown>) {
  const lovableKey = Deno.env.get("LOVABLE_API_KEY");
  const gscKey = Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY");
  if (!lovableKey || !gscKey) throw new Error("Missing gateway credentials");

  const res = await fetch(
    `${GATEWAY}/webmasters/v3/sites/${SITE_PATH}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": gscKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GSC ${res.status}: ${text.slice(0, 300)}`);
  }
  return res.json();
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const password = req.headers.get("x-admin-password");
  const expected = Deno.env.get("ADMIN_DASHBOARD_PASSWORD");
  if (!expected || password !== expected) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const url = new URL(req.url);
    const startDate =
      url.searchParams.get("start") ||
      new Date(Date.now() - 28 * 86400000).toISOString().slice(0, 10);
    const endDate =
      url.searchParams.get("end") || new Date().toISOString().slice(0, 10);

    const base = { startDate, endDate };

    const [byDate, byPage, byQuery, byDevice, byCountry] = await Promise.all([
      gscQuery({ ...base, dimensions: ["date"], rowLimit: 500 }),
      gscQuery({ ...base, dimensions: ["page"], rowLimit: 20 }),
      gscQuery({ ...base, dimensions: ["query"], rowLimit: 20 }),
      gscQuery({ ...base, dimensions: ["device"], rowLimit: 10 }),
      gscQuery({ ...base, dimensions: ["country"], rowLimit: 15 }),
    ]);

    const totals = (byDate.rows || []).reduce(
      (acc: { clicks: number; impressions: number }, r: any) => {
        acc.clicks += r.clicks || 0;
        acc.impressions += r.impressions || 0;
        return acc;
      },
      { clicks: 0, impressions: 0 }
    );
    const avgCtr = totals.impressions
      ? totals.clicks / totals.impressions
      : 0;

    // Position averaged from date rows weighted by impressions.
    let posNum = 0;
    let posDen = 0;
    for (const r of byDate.rows || []) {
      posNum += (r.position || 0) * (r.impressions || 0);
      posDen += r.impressions || 0;
    }
    const avgPosition = posDen ? posNum / posDen : 0;

    return new Response(
      JSON.stringify({
        range: { startDate, endDate },
        totals: { ...totals, ctr: avgCtr, position: avgPosition },
        timeseries: byDate.rows || [],
        topPages: byPage.rows || [],
        topQueries: byQuery.rows || [],
        devices: byDevice.rows || [],
        countries: byCountry.rows || [],
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("admin-analytics error:", err);
    return new Response(
      JSON.stringify({ error: (err as Error).message || "Internal error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
