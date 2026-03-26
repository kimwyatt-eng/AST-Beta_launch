import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type Status = "loading" | "valid" | "already" | "invalid" | "success" | "error";

export default function Unsubscribe() {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [status, setStatus] = useState<Status>("loading");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    fetch(`${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${token}`, {
      headers: { apikey: anonKey },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.valid === false && data.reason === "already_unsubscribed") {
          setStatus("already");
        } else if (data.valid) {
          setStatus("valid");
        } else {
          setStatus("invalid");
        }
      })
      .catch(() => setStatus("invalid"));
  }, [token]);

  async function handleUnsubscribe() {
    if (!token) return;
    setSubmitting(true);
    try {
      const { data } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (data?.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full rounded-2xl border border-border bg-card p-8 text-center shadow-lg">
        {status === "loading" && <p className="text-muted-foreground">Loading…</p>}
        {status === "invalid" && (
          <>
            <h1 className="text-2xl font-bold text-foreground mb-2">Invalid Link</h1>
            <p className="text-muted-foreground">This unsubscribe link is invalid or has expired.</p>
          </>
        )}
        {status === "already" && (
          <>
            <h1 className="text-2xl font-bold text-foreground mb-2">Already Unsubscribed</h1>
            <p className="text-muted-foreground">You've already been unsubscribed from these emails.</p>
          </>
        )}
        {status === "valid" && (
          <>
            <h1 className="text-2xl font-bold text-foreground mb-2">Unsubscribe</h1>
            <p className="text-muted-foreground mb-6">
              Are you sure you want to unsubscribe from ArtSupplyTracker emails?
            </p>
            <button
              onClick={handleUnsubscribe}
              disabled={submitting}
              className="inline-flex items-center justify-center rounded-xl bg-destructive text-destructive-foreground px-6 py-3 font-semibold hover:opacity-90 disabled:opacity-60"
            >
              {submitting ? "Processing…" : "Confirm Unsubscribe"}
            </button>
          </>
        )}
        {status === "success" && (
          <>
            <h1 className="text-2xl font-bold text-foreground mb-2">Unsubscribed</h1>
            <p className="text-muted-foreground">You've been successfully unsubscribed. You won't receive any more emails from us.</p>
          </>
        )}
        {status === "error" && (
          <>
            <h1 className="text-2xl font-bold text-foreground mb-2">Something Went Wrong</h1>
            <p className="text-muted-foreground">We couldn't process your request. Please try again later.</p>
          </>
        )}
      </div>
    </div>
  );
}
