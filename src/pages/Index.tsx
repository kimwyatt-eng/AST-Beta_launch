import React from "react";
import Navigation from "@/components/Navigation";

export default function ArtistsHome() {
  return (
    <main className="min-h-screen w-full bg-[#2B0F22] text-white">
      <Navigation />
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            ArtSupplyTracker
            <span className="block text-teal-300">Know what you have. Create more. Waste less.</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            A studio hub that tracks supplies, manages projects, and protects your art—private by design.
          </p>

          {/* Beta Coming Soon Sign */}
          <div className="mt-8 mb-8 mx-auto max-w-md">
            <div className="rounded-2xl border border-teal-400/50 bg-teal-400/10 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h2 className="text-3xl font-bold text-teal-300 mb-2">Beta Coming Soon!</h2>
              <p className="text-white/80">Be among the first to experience the future of art supply management.</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="#beta"
              className="inline-flex items-center justify-center rounded-xl bg-teal-400 text-[#2B0F22] px-6 py-3 text-lg font-semibold shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              Join the Beta
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-lg font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              See how it works
            </a>
          </div>

          <div className="mt-4 space-y-1 text-white/70 text-sm">
            <p>"Hands-free because artists' hands are full."</p>
            <p>"Secure because your art deserves protection."</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How it works</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Scan & add",
              body:
                "Import receipts or snap a photo; smart tags organize everything automatically.",
              num: 1,
            },
            {
              title: "Create & track",
              body:
                "Attach supplies to projects; see costs and progress in one place.",
              num: 2,
            },
            {
              title: "Relax",
              body:
                "Low-stock alerts, price drops, and insurance-ready records—handled.",
              num: 3,
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-400 text-[#2B0F22] font-bold">
                  {s.num}
                </span>
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-white/80">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Features for Artists</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: "Inventory Tracking",
              body:
                "Smart categories, usage history, and low-stock alerts so you never run out mid-project.",
            },
            {
              title: "Project Management",
              body:
                "Supply lists, progress tracking, and timelines per artwork.",
            },
            {
              title: "Hands-free Control",
              body:
                "Voice with Alexa, Google Nest, and Siri—no messy taps.",
            },
            {
              title: "Price Tracking",
              body:
                "Monitor costs and get deal alerts from your favorite art stores.",
            },
            {
              title: "Insurance Reports",
              body:
                "Photos + purchase history exported in minutes for claims.",
            },
            {
              title: "Advanced Security",
              body:
                "Voiceprint ID and 2FA protect your studio and personal data.",
            },
          ].map((f) => (
            <Card key={f.title} title={f.title} body={f.body} />
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Integrations</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Voice Assistants</h3>
            <p className="mt-2 text-white/80">Alexa · Google Nest · Siri</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Add Supplies</h3>
            <p className="mt-2 text-white/80">Email import · Photo/scan · Manual</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Export</h3>
            <p className="mt-2 text-white/80">CSV · PDF insurance report · Project pack lists</p>
          </div>
        </div>
      </section>

      {/* Beta Signup */}
      <section id="beta" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Join the Beta</h2>
          <p className="mt-3 text-center text-white/80">
            Spots are limited while we finish core features. Sign up and we'll send setup steps and early access perks.
          </p>

          {/* Beta form */}
          <BetaForm />

          <p className="mt-4 text-center text-sm text-white/70">
            Prefer email? Contact us at <a className="underline decoration-teal-300 underline-offset-4" href="mailto:info@artsupplytracker.com">info@artsupplytracker.com</a>
          </p>
        </div>
      </section>

      {/* Trusty App Promise */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">The Trusty App Promise</h2>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-white/85 list-disc list-inside">
            <li><strong>Your art is yours.</strong> We never train AI on your creative work or IP.</li>
            <li><strong>Your privacy is safe.</strong> We never sell personally identifiable information.</li>
            <li><strong>Only anonymized insights.</strong> Shared externally = supply and region trends, never your creations.</li>
            <li><strong>Ethical AI.</strong> Regular third-party audits for safety and fairness.</li>
          </ul>
          <div className="mt-4">
            <a href="/privacy" className="text-teal-300 underline underline-offset-4">Read the full policy</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#230C1C]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© 2025 ArtSupplyTracker. Software for artists, made by an artist.</p>
          <p>
            Contact: <a href="mailto:info@artsupplytracker.com" className="text-teal-300 underline underline-offset-4">info@artsupplytracker.com</a>
          </p>
        </div>
      </footer>
    </main>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-white/80">{body}</p>
    </div>
  );
}

function BetaForm() {
  // Pure client-side: craft a mailto on submit. Replace later with API.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const name = encodeURIComponent(String(data.get("name") || ""));
    const email = encodeURIComponent(String(data.get("email") || ""));
    const medium = encodeURIComponent(String(data.get("medium") || ""));
    const body = `Hi ArtSupplyTracker,%0A%0AI'd like to join the beta.%0AName: ${name}%0AEmail: ${email}%0AMy art/medium: ${medium}%0A%0AThanks!`;
    window.location.href = `mailto:info@artsupplytracker.com?subject=Beta%20Signup&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        aria-label="Your name"
        className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        aria-label="Your email"
        className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
        required
      />
      <input
        type="text"
        name="medium"
        placeholder="Your art/medium"
        aria-label="Your art or medium"
        className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
      />
      <div className="md:col-span-3 flex items-center justify-center md:justify-end">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-teal-400 text-[#2B0F22] px-6 py-3 text-lg font-semibold shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-teal-300"
        >
          Email my beta request
        </button>
      </div>
      <p className="md:col-span-3 text-center md:text-right text-xs text-white/60">
        We'll only email about the beta. No spam.
      </p>
    </form>
  );
}