import React from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen w-full bg-[#2B0F22] text-white">
      <Navigation />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-lg text-white/80 max-w-3xl">
          ArtSupplyTracker is built by artists, for artists. We respect your creative work and your privacy. This
          page summarizes our current practices and serves as temporary copy until our full legal policy is published.
        </p>
        <p className="mt-2 text-sm text-white/60">Last updated: {new Date().toLocaleDateString()}</p>
      </section>

      {/* Trusty App Promise */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">The Trusty App Promise</h2>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-white/85 list-disc list-inside">
            <li><strong>Your art is yours.</strong> We never train AI on your creative work or IP.</li>
            <li><strong>Your privacy is safe.</strong> We never sell personally identifiable information.</li>
            <li><strong>Only anonymized insights.</strong> Shared externally = supply and region trends, never your creations.</li>
            <li><strong>Ethical AI.</strong> Regular third-party audits for safety and fairness.</li>
          </ul>
        </div>
      </section>

      {/* Emotional Safety Shield */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Emotional Safety Shield</h2>
          <p className="mt-4 text-white/85">
            We understand that artists are vulnerable when sharing their creative process and supplies. Our Emotional Safety Shield ensures:
          </p>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-white/85 list-disc list-inside">
            <li><strong>No judgment.</strong> Your creative choices and supply levels are never criticized or compared.</li>
            <li><strong>Safe space.</strong> Your art journey is protected from external pressures and social comparison.</li>
            <li><strong>Confidential support.</strong> Struggling with supplies or creative blocks? We provide resources, not shame.</li>
            <li><strong>Community respect.</strong> Any future community features will be moderated for positivity and support.</li>
          </ul>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <PolicyBlock title="Data We Collect (Limited & Transparent)">
          <ul className="list-disc list-inside space-y-2 text-white/85">
            <li>Basic account info (e.g., email, password). Optional: voiceprint ID for security.</li>
            <li>Supply inventory and project data you voluntarily add.</li>
            <li>Optional anonymized analytics (app performance, crash logs, feature usage) to improve the product.</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock title="How We Use Your Data">
          <ul className="list-disc list-inside space-y-2 text-white/85">
            <li>To provide core features like inventory tracking, price alerts, and project management.</li>
            <li>To generate insurance-ready reports at your request.</li>
            <li>To improve the app and communicate important updates or beta information (if you opt in).</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock title="Data We Don't Collect">
          <ul className="list-disc list-inside space-y-2 text-white/85">
            <li>We don't scrape or use your creative works for AI training.</li>
            <li>We don't sell or rent personally identifiable information.</li>
            <li>We don't track you across third‑party websites.</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock title="Your Controls">
          <ul className="list-disc list-inside space-y-2 text-white/85">
            <li>Export or delete your data at any time (email us to request while we finalize in‑app controls).</li>
            <li>Opt in or out of anonymized analytics.</li>
            <li>Use voiceprint and/or 2FA for extra security on supported devices.</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock title="Data Retention">
          <p className="text-white/85">
            We keep your data only as long as needed to provide the service or as required by law. If you close your account, we'll delete your personal data within 30 days (some anonymized usage data may be retained for product improvement).
          </p>
        </PolicyBlock>

        <PolicyBlock title="Security Measures">
          <ul className="list-disc list-inside space-y-2 text-white/85">
            <li>Industry-standard encryption for data in transit and at rest.</li>
            <li>Regular security audits and penetration testing.</li>
            <li>Optional voiceprint authentication for enhanced account security.</li>
            <li>Two-factor authentication available on all accounts.</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock title="Contact & Updates">
          <p className="text-white/85">
            Questions about this policy? Email us at{" "}
            <a href="mailto:privacy@artsupplytracker.com" className="text-teal-300 underline underline-offset-4">
              privacy@artsupplytracker.com
            </a>
            . We'll notify users of material policy changes via email and app notifications.
          </p>
        </PolicyBlock>
      </section>

      {/* Footer Navigation */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-xl font-semibold mb-4">Explore More</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              to="/" 
              className="block p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <h4 className="font-semibold text-teal-300">Home</h4>
              <p className="text-sm text-white/70 mt-1">Learn about ArtSupplyTracker</p>
            </Link>
            <Link 
              to="/partners" 
              className="block p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <h4 className="font-semibold text-teal-300">Partners</h4>
              <p className="text-sm text-white/70 mt-1">Integration opportunities</p>
            </Link>
            <Link 
              to="/investors" 
              className="block p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <h4 className="font-semibold text-teal-300">Investors</h4>
              <p className="text-sm text-white/70 mt-1">Investment information</p>
            </Link>
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

function PolicyBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}