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
    const { name, email, message, inquiryType } = await req.json();

    if (!name || !email || !message || !inquiryType) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (inquiryType !== "partner" && inquiryType !== "investor") {
      return new Response(
        JSON.stringify({ error: "Invalid inquiry type" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const trimmedName = String(name).trim();
    const trimmedEmail = String(email).trim().toLowerCase();
    const trimmedMessage = String(message).trim();

    if (
      trimmedName.length === 0 || trimmedName.length > 100 ||
      trimmedEmail.length === 0 || trimmedEmail.length > 255 ||
      trimmedMessage.length === 0 || trimmedMessage.length > 2000
    ) {
      return new Response(
        JSON.stringify({ error: "One or more fields are invalid or too long" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const id = crypto.randomUUID();

    const { error: insertError } = await supabase
      .from("contact_submissions")
      .insert({
        id,
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
        inquiry_type: inquiryType,
      });

    if (insertError) throw insertError;

    const templateName = inquiryType === "partner"
      ? "partner-inquiry-confirmation"
      : "investor-inquiry-confirmation";

    try {
      await Promise.all([
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName,
            recipientEmail: trimmedEmail,
            idempotencyKey: `${templateName}-${id}`,
            templateData: { name: trimmedName },
          },
        }),
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "inquiry-owner-notification",
            recipientEmail: "Kim.wyatt@artsupplytracker.com",
            idempotencyKey: `inquiry-owner-notification-${id}`,
            templateData: {
              inquiryType,
              senderName: trimmedName,
              senderEmail: trimmedEmail,
              senderMessage: trimmedMessage,
            },
          },
        }),
      ]);
    } catch (emailErr) {
      console.error("Contact emails failed (non-fatal):", emailErr);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("submit-contact error:", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
