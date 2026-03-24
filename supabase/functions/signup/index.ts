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

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Store in database
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error: dbError } = await supabase
      .from("signups")
      .insert({ name: name.trim(), email: email.trim().toLowerCase() });

    if (dbError) {
      if (dbError.code === "23505") {
        return new Response(
          JSON.stringify({ error: "This email is already signed up!" }),
          { status: 409, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw dbError;
    }

    // Send welcome email via Resend
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (resendKey) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "ArtSupplyTracker <info@artsupplytracker.com>",
          to: [email.trim().toLowerCase()],
          subject: "Welcome to the ArtSupplyTracker Beta!",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; padding: 40px;">
              <h1 style="color: #2B0F22; font-size: 28px;">Welcome to the Beta, ${name.trim()}!</h1>
              <p style="color: #444; font-size: 16px; line-height: 1.6;">
                You're officially on the list for early access to ArtSupplyTracker — the studio hub that tracks supplies, manages projects, and protects your art.
              </p>
              <p style="color: #444; font-size: 16px; line-height: 1.6;">
                We'll send you updates on how to use the app as we get closer to launch, so you'll be ready to hit the ground running.
              </p>
              <div style="margin-top: 30px; padding: 20px; background: #f0fdfa; border-radius: 12px; border-left: 4px solid #2dd4bf;">
                <p style="color: #2B0F22; font-weight: bold; margin: 0;">Made for artists, by artists.</p>
                <p style="color: #666; margin: 8px 0 0;">Know what you have. Create more. Waste less.</p>
              </div>
              <p style="color: #999; font-size: 13px; margin-top: 30px;">
                — The ArtSupplyTracker Team<br/>
                <a href="https://artsupplytracker.com" style="color: #2dd4bf;">artsupplytracker.com</a>
              </p>
            </div>
          `,
        }),
      });
      const emailBody = await emailRes.text();
      if (!emailRes.ok) {
        console.error("Resend error:", emailBody);
      }
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
