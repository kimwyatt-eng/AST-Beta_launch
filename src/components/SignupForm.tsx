import React, { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export default function SignupForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();

    if (!name || !email) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      setLoading(false);
      return;
    }

    try {
      const { data: res, error } = await supabase.functions.invoke("signup", {
        body: { name, email },
      });

      if (error) {
        throw new Error(error.message || "Something went wrong");
      }

      if (res?.error) {
        toast({ title: res.error, variant: "destructive" });
        setLoading(false);
        return;
      }

      setSuccess(true);
      form.reset();
      toast({ title: "You're in the beta! Check your inbox for a welcome email." });
    } catch (err: any) {
      toast({
        title: err?.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-teal-400/50 bg-teal-400/10 p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <h3 className="text-2xl font-bold text-teal-300 mb-2">Welcome to the Beta! 🎨</h3>
        <p className="text-white/80">You're on the list! We'll send you early access details and tips on how to use ArtSupplyTracker before launch.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Join the Beta</h2>
      <p className="mt-3 text-center text-white/80">
        Be among the first artists to try ArtSupplyTracker. Sign up for early access and updates.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          aria-label="Your name"
          maxLength={100}
          className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          aria-label="Your email"
          maxLength={255}
          className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
          required
        />
        <div className="md:col-span-2 flex items-center justify-center md:justify-end">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-xl bg-teal-400 text-[#2B0F22] px-6 py-3 text-lg font-semibold shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-teal-300 disabled:opacity-60"
          >
            {loading ? "Signing up…" : "Sign Up"}
          </button>
        </div>
        <p className="md:col-span-2 text-center md:text-right text-xs text-white/60">
          No spam. We respect your privacy.
        </p>
      </form>

      <p className="mt-4 text-center text-sm text-white/70">
        Prefer email? Contact us at{" "}
        <a className="text-teal-300 font-semibold hover:underline" href="mailto:info@artsupplytracker.com">
          info@artsupplytracker.com
        </a>
      </p>
    </div>
  );
}
