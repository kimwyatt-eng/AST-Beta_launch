import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();

    const signupId = crypto.randomUUID();

    const { error: dbError } = await supabase
      .from("signups")
      .insert({ id: signupId, name: trimmedName, email: trimmedEmail });

    if (dbError) {
      if (dbError.code === "23505") {
        return new Response(
          JSON.stringify({ error: "This email is already signed up!" }),
          { status: 409, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw dbError;
    }

    // Send welcome email and owner notification (non-blocking)
    try {
      await Promise.all([
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "beta-welcome",
            recipientEmail: trimmedEmail,
            idempotencyKey: `beta-welcome-${signupId}`,
            templateData: { name: trimmedName },
          },
        }),
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "signup-owner-notification",
            recipientEmail: "Kim.wyatt@artsupplytracker.com",
            idempotencyKey: `signup-notify-${signupId}`,
            templateData: { name: trimmedName, email: trimmedEmail },
          },
        }),
      ]);
    } catch (emailErr) {
      console.error("Signup emails failed (non-fatal):", emailErr);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Signup error:", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
