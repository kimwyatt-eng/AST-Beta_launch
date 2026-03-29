import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-admin-password",
};

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

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  const url = new URL(req.url);
  const resource = url.searchParams.get("resource") || "stats";
  const start = url.searchParams.get("start");
  const end = url.searchParams.get("end");
  const templateFilter = url.searchParams.get("template");
  const statusFilter = url.searchParams.get("status");
  const page = parseInt(url.searchParams.get("page") || "0");
  const pageSize = 50;

  try {
    if (resource === "stats") {
      // Get deduplicated stats
      const { data, error } = await supabase.rpc("read_email_batch", {
        queue_name: "stats_noop",
        batch_size: 0,
        vt: 0,
      });
      // Can't use RPC for stats, use direct query via email_send_log
      let query = supabase
        .from("email_send_log")
        .select("message_id, status, created_at, template_name")
        .not("message_id", "is", null)
        .order("created_at", { ascending: false });

      if (start) query = query.gte("created_at", start);
      if (end) query = query.lte("created_at", end);

      const { data: logs, error: logsError } = await query;
      if (logsError) throw logsError;

      // Deduplicate by message_id (latest status)
      const byMessageId = new Map<string, any>();
      for (const row of logs || []) {
        if (!byMessageId.has(row.message_id)) {
          byMessageId.set(row.message_id, row);
        }
      }
      const deduped = Array.from(byMessageId.values());

      const stats = { total: 0, sent: 0, failed: 0, suppressed: 0, bounced: 0 };
      const templates = new Set<string>();
      for (const row of deduped) {
        stats.total++;
        templates.add(row.template_name);
        if (row.status === "sent") stats.sent++;
        else if (row.status === "dlq" || row.status === "failed") stats.failed++;
        else if (row.status === "suppressed") stats.suppressed++;
        else if (row.status === "bounced" || row.status === "complained") stats.bounced++;
      }

      return new Response(
        JSON.stringify({ stats, templates: Array.from(templates).sort() }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (resource === "logs") {
      let query = supabase
        .from("email_send_log")
        .select("*")
        .not("message_id", "is", null)
        .order("created_at", { ascending: false });

      if (start) query = query.gte("created_at", start);
      if (end) query = query.lte("created_at", end);
      if (templateFilter) query = query.eq("template_name", templateFilter);

      const { data: logs, error } = await query;
      if (error) throw error;

      // Deduplicate
      const byMessageId = new Map<string, any>();
      for (const row of logs || []) {
        if (!byMessageId.has(row.message_id)) {
          byMessageId.set(row.message_id, row);
        }
      }
      let deduped = Array.from(byMessageId.values());

      if (statusFilter) {
        deduped = deduped.filter((r) => {
          if (statusFilter === "failed") return r.status === "dlq" || r.status === "failed";
          if (statusFilter === "bounced") return r.status === "bounced" || r.status === "complained";
          return r.status === statusFilter;
        });
      }

      const total = deduped.length;
      const paged = deduped.slice(page * pageSize, (page + 1) * pageSize);

      return new Response(
        JSON.stringify({ logs: paged, total, page, pageSize }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (resource === "submissions") {
      let query = supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (start) query = query.gte("created_at", start);
      if (end) query = query.lte("created_at", end);

      const { data, error } = await query.range(page * pageSize, (page + 1) * pageSize - 1);
      if (error) throw error;

      return new Response(
        JSON.stringify({ submissions: data, page, pageSize }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (resource === "signups") {
      let query = supabase
        .from("signups")
        .select("*", { count: "exact" })
        .order("created_at", { ascending: false });

      if (start) query = query.gte("created_at", start);
      if (end) query = query.lte("created_at", end);

      const { data, error, count } = await query.range(page * pageSize, (page + 1) * pageSize - 1);
      if (error) throw error;

      return new Response(
        JSON.stringify({ signups: data, total: count || 0, page, pageSize }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ error: "Unknown resource" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Dashboard error:", err);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
