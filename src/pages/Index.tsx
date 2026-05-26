import React from "react";
import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import HeroSlideshow from "@/components/HeroSlideshow";
import trustBadges from "@/assets/trust-badges.png";
import SignupForm from "@/components/SignupForm";
import mockupDashboard from "@/assets/mockup-dashboard-dark.png";
import mockupInventory from "@/assets/mockup-inventory.jpg";
import mockupProject from "@/assets/mockup-project.jpg";
import mockupPaletteCreator from "@/assets/mockup-palette-creator.png";
import mockupMercurialHarvest from "@/assets/mockup-mercurial-harvest.png";
import { panelClass, titleClass } from "@/lib/cardAccent";

export default function ArtistsHome() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <Seo
        title="ArtSupplyTracker — Track supplies, projects & protect your art"
        description="Private studio software for artists. Track supplies, manage projects, and protect your art. No AI training on your work. Join the Beta."
        path="/"
      />
      <Navigation />

      {/* Hero */}
      <section className="mx-auto max-w-7xl 2xl:max-w-[110rem] px-4 sm:px-6 lg:px-8 pt-4 pb-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="text-center lg:text-left lg:col-span-2">
            <p className="hero-kicker text-sm font-semibold uppercase tracking-[0.18em] mb-3">
              ArtSupplyTracker
            </p>
            <h1 className="hero-title text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Know what you have.<br />
              <span className="accent">Create more.</span><br />
              Waste less.
            </h1>
            <p className="hero-body mt-5 text-lg max-w-xl lg:mx-0 mx-auto">
              A private studio hub for tracking supplies, managing projects, and protecting your art.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                type="button"
                data-tally-open="A7j5a0"
                data-tally-auto-close="5000"
                data-tally-layout="modal"
                data-tally-emoji-text="🎨"
                data-tally-emoji-animation="bounce"
                className="ast-btn-primary inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-ring"
              >
                Join the Waitlist
              </button>
              <a
                href="https://artsupplytrackerstudio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg font-medium text-white focus:outline-none focus:ring-2 focus:ring-ring transition-transform hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #7C3CFF 0%, #00E6FF 100%)",
                  boxShadow: "0 0 0 1px rgba(124,60,255,0.35), 0 8px 24px -10px rgba(0,230,255,0.5)",
                }}
              >
                See how it works
              </a>
            </div>

            <div className="mt-4 space-y-1 text-[#B7AFD8] text-sm">
              <p>"Hands-free because artists' hands are full."</p>
              <p>"Secure because your art deserves protection."</p>
            </div>
          </div>

          {/* Hero Slideshow */}
          <div className="lg:col-span-3">
            <HeroSlideshow />
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
          ].map((s, i) => (
            <div
              key={s.title}
              className={`${panelClass(i)} p-6`}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {s.num}
                </span>
                <h3 className={`text-xl font-semibold ${titleClass(i)}`}>{s.title}</h3>
              </div>
              <p className="mt-3 text-foreground/80">{s.body}</p>
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
          ].map((f, i) => (
            <Card key={f.title} title={f.title} body={f.body} index={i} />
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Integrations</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Manage Art Work", body: "Link supplies, add photos, notes & locations" },
            { title: "Add Supplies", body: "Email import · Photo/scan · Manual" },
            { title: "Export", body: "CSV · PDF insurance report · Project pack lists" },
          ].map((it, i) => (
            <div key={it.title} className={`${panelClass(i)} p-6`}>
              <h3 className={`text-xl font-semibold ${titleClass(i)}`}>{it.title}</h3>
              <p className="mt-2 text-foreground/80">{it.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Artist-safe AI assistant */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="ast-panel card-violet p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold title-violet">
            Artist-safe AI assistant
          </h3>
          <p className="mt-3 text-foreground/80">
            The assistant helps artists organize supplies, projects, reminders, and studio notes without training on their artwork or creative IP. Artists get useful AI support without trading away their work.
          </p>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 text-center">
        <button
          type="button"
          data-tally-open="A7j5a0"
          data-tally-auto-close="5000"
          data-tally-layout="modal"
          data-tally-emoji-text="🎨"
          data-tally-emoji-animation="bounce"
          className="ast-btn-primary inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Join the Waitlist
        </button>
      </section>

      {/* Trusty App Promise */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="ast-panel p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">The Trusty App Promise</h2>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-foreground/85 list-disc list-inside">
            <li><strong>Your art is yours.</strong> We never train AI on your creative work or IP.</li>
            <li><strong>Your privacy is safe.</strong> We never sell personally identifiable information.</li>
            <li><strong>Only anonymized insights.</strong> Shared externally = supply and region trends, never your creations.</li>
            <li><strong>Ethical AI.</strong> Regular third-party audits for safety and fairness.</li>
          </ul>
          <div className="mt-4">
            <a href="/privacy" className="text-secondary underline underline-offset-4">Read the full policy</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <TrustFooter />

      <footer className="border-t border-border bg-card">
        
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© 2025 ArtSupplyTracker. Software for artists, made by an artist.</p>
          <p>
            Contact: <a href="mailto:Hello@artsupplytracker.com" className="text-secondary font-semibold hover:underline">Hello@artsupplytracker.com</a>
          </p>
        </div>
      </footer>
    </main>
  );
}

function Card({ title, body, index = 0 }: { title: string; body: string; index?: number }) {
  return (
    <div className={`${panelClass(index)} p-6`}>
      <h3 className={`text-xl font-semibold ${titleClass(index)}`}>{title}</h3>
      <p className="mt-2 text-foreground/80">{body}</p>
    </div>
  );
}
