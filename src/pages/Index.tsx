import React from "react";
import Navigation from "@/components/Navigation";
import HeroSlideshow from "@/components/HeroSlideshow";
import trustBadges from "@/assets/trust-badges.png";
import SignupForm from "@/components/SignupForm";
import mockupDashboard from "@/assets/mockup-dashboard-dark.png";
import mockupInventory from "@/assets/mockup-inventory.jpg";
import mockupProject from "@/assets/mockup-project.jpg";
import mockupPaletteCreator from "@/assets/mockup-palette-creator.png";
import mockupMercurialHarvest from "@/assets/mockup-mercurial-harvest.png";

export default function ArtistsHome() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <Navigation />
      {/* Hero */}
      <section className="mx-auto max-w-7xl 2xl:max-w-[110rem] px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="text-center lg:text-left lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-periwinkle">
              ArtSupplyTracker
              <span className="block text-violet-light">Know what you have. Create more. Waste less.</span>
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl lg:mx-0 mx-auto">
              A studio hub that tracks supplies, manages projects, and protects your art—private by design.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#signup"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-6 py-3 text-lg font-semibold shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                Join the Beta
              </a>
              <a
                href="https://artsupplytrackerstudio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-lg font-medium hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
              >
                See how it works
              </a>
            </div>

            <div className="mt-4 space-y-1 text-muted-foreground text-sm">
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
          ].map((s) => (
            <div
              key={s.title}
              className="ast-panel p-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {s.num}
                </span>
                <h3 className="text-xl font-semibold">{s.title}</h3>
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
          ].map((f) => (
            <Card key={f.title} title={f.title} body={f.body} />
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Integrations</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="ast-panel p-6">
            <h3 className="text-xl font-semibold">Voice Assistants</h3>
            <p className="mt-2 text-foreground/80">Alexa · Google Nest · Siri</p>
          </div>
          <div className="ast-panel p-6">
            <h3 className="text-xl font-semibold">Add Supplies</h3>
            <p className="mt-2 text-foreground/80">Email import · Photo/scan · Manual</p>
          </div>
          <div className="ast-panel p-6">
            <h3 className="text-xl font-semibold">Export</h3>
            <p className="mt-2 text-foreground/80">CSV · PDF insurance report · Project pack lists</p>
          </div>
        </div>
      </section>

      {/* Sneak Peek */}
      <section id="sneak-peek" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary">
            Sneak Peek
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">A taste of the studio</h2>
          <p className="mt-3 text-muted-foreground">
            Early concept mockups — not final UI, but a glimpse of the experience we're building.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: mockupDashboard, title: "Studio Dashboard", caption: "Palettes, supplies, and community at a glance.", alt: "Concept mockup of the ArtSupplyTracker studio dashboard with palettes and supply jars" },
            { src: mockupInventory, title: "Inventory Overview", caption: "Search, low-stock alerts, and storage map.", alt: "Concept mockup of the ArtSupplyTracker inventory overview with stock levels and storage map" },
            { src: mockupProject, title: "Project View", caption: "Tasks, current supplies, and session notes per artwork.", alt: "Concept mockup of the ArtSupplyTracker project view showing a Mountain Sunset painting with task list" },
            { src: mockupPaletteCreator, title: "Digital Palette Creator", caption: "Build palettes, browse history, and track community favorites.", alt: "Concept mockup of the ArtSupplyTracker digital palette creator with paint tubes, brushes, and pencils" },
            { src: mockupMercurialHarvest, title: "Project: Mercurial Harvest", caption: "Per-project supply usage with timeline and working canvas preview.", alt: "Concept mockup of the ArtSupplyTracker project view for Mercurial Harvest showing supplies used and Gantt-style timeline" },
          ].map((m) => (
            <figure
              key={m.title}
              className="rounded-2xl border-4 border-primary/50 bg-primary/5 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)] overflow-hidden"
            >
              <img src={m.src} alt={m.alt} loading="lazy" className="w-full h-auto rounded-lg" />
              <figcaption className="px-2 py-3">
                <h3 className="text-lg font-semibold">{m.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
        <SignupForm />
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
      <footer className="border-t border-border bg-card">
        {/* Trust Badges */}
        <div className="flex justify-center py-8">
          <div className="ast-panel-magenta p-8">
            <img 
              src={trustBadges} 
              alt="A Trusty App & Emotional Safety Shield – Modular trust and protection featuring shield emblems protected by a stylized owl symbolizing wisdom and vigilance" 
              className="h-48 opacity-80"
            />
          </div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© 2025 ArtSupplyTracker. Software for artists, made by an artist.</p>
          <p>
            Contact: <a href="mailto:info@notify.artsupplytracker.com" className="text-secondary font-semibold hover:underline">info@notify.artsupplytracker.com</a>
          </p>
        </div>
      </footer>
    </main>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="ast-panel p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-foreground/80">{body}</p>
    </div>
  );
}
