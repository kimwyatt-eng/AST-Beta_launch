import React from "react";
import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import heroImageAsset from "@/assets/ast-homescreen.png.asset.json";
import TrustFooter from "@/components/TrustFooter";
import { panelClass, titleClass } from "@/lib/cardAccent";
import Footer from "@/components/Footer";

export default function ArtistsHome() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <Seo
        title="ArtSupplyTracker — Your Studio Assistant for Artists"
        description="description="A studio assistant built for artists. Track supplies, manage projects, capture notes, organize materials, and keep your artwork and ideas private."
        path="/"
      />
      <Navigation />

      {/* Hero */}
      <section className="mx-auto max-w-7xl 2xl:max-w-[110rem] px-4 sm:px-6 lg:px-8 pt-4 pb-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="text-center lg:text-left lg:col-span-2">
            <p className="hero-kicker text-sm font-semibold uppercase tracking-[0.18em] mb-3">
              Art Supply Tracker
            </p>
            <h1 className="hero-title text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Your Studio Time<br />
              <span className="accent">Is For Making Art</span>
            </h1>
            <p className="hero-body mt-5 text-lg max-w-xl lg:mx-0 mx-auto">
              Track supplies, projects, notes, and materials without breaking your creative flow.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="https://studiobeta.artsupplytracker.com/dashboard"
                className="ast-btn-primary inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-ring"
              >
                Join Early Access
              </a>
            </div>

          </div>

          {/* Hero Image */}
          <div className="lg:col-span-3">
            <a
              href="https://studiobeta.artsupplytracker.com/dashboard"
              className="block"
            >
              <img
                src={heroImageAsset.url}
                alt="ArtSupplyTracker — Organized to Create. The fantasy studio vs. the real studio, with the ArtSupplyTracker app on a phone in between."
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Where's My Thingamajig */}
      <section className="w-full bg-card/40 border-y border-border/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight accent">
            Where's My Thingamajig?
          </h2>
          <div className="mt-6 space-y-5 text-lg text-foreground/85 leading-relaxed">
            <p>
              It never fails: you're ready to paint, you know exactly what you want to work on, and then one crucial tube of paint, bullnose clip, brush, pen, or mystery doohickey has vanished.
            </p>
            <p>
              When you only have an afternoon to make art, a scavenger hunt can ruin your day — and your creative flow.
            </p>
            <p className="font-semibold text-foreground">
              So I made the app I wished already existed.
            </p>
            <p>
              Art Supply Tracker is a hands-free, voice-controlled studio assistant that helps artists log supplies, track where things are stored, and connect materials to the projects they belong to. Whether your studio is a full room, a garage, the corner of the dining table, or a tub of supplies in the closet, this app is built for real artists in real spaces.
            </p>
            <p>
              Art Supply Tracker is currently accepting early access beta testers. Your feedback can directly shape how the app grows into a better studio tool for artists.
            </p>
            <p>
              Everything you enter into your beta inventory is your data. You can upload, update, and download your own information.
            </p>
            <p>
              Save time, save money, and spend less of your precious studio time wondering, "Where did I put that thing?"
            </p>
            <p className="font-semibold text-foreground">
              Sign up to be one of the first artists to try Art Supply Tracker.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="https://studiobeta.artsupplytracker.com/dashboard"
              className="ast-btn-primary inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-ring"
            >
              Join Early Access
            </a>
          </div>
        </div>
      </section>


     <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What it does now — and what’s coming</h2>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How it works</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Scan & add",
              body:
                "title: "Scan & add",
body:
  "title: "Planned: Scan & add",
body:
  "Planned features include receipt import, supply photos, and smart tags to make adding materials faster.",
              num: 1,
            },
            {
              title: "Create & track",
              body:
                "title: "Planned: Scan & add",
body:
  "Planned features include receipt import, supply photos, and smart tags to make adding materials faster.",
              num: 2,
            },
            {
              title: "Relax",
              body:
                "title: "Planned: Snap & add",
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

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 text-center">
        <a
          href="https://studiobeta.artsupplytracker.com/dashboard"
          className="ast-btn-primary inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Join Early Access
        </a>
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

      <Footer />
    </main>
  );
}

function Card({ title, body, index = 0 }) {
  return (
    <div className={`${panelClass(index)} p-6`}>
      <h3 className={`text-xl font-semibold ${titleClass(index)}`}>{title}</h3>
      <p className="mt-2 text-foreground/80">{body}</p>
    </div>
  );
}
