import Navigation from "@/components/Navigation";
import trustBadges from "@/assets/trust-badges.png";
import gossipHorses from "@/assets/gossip-horses.jpg";
import { panelClass, titleClass } from "@/lib/cardAccent";

export default function FoundersPage() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <Navigation />
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Built by artists. For artists.</h1>
            <p className="mt-4 text-lg text-foreground/80 max-w-xl">
              ArtSupplyTracker began in a real studio. I was tired of lost supplies, messy spreadsheets, and tools that
              did not respect creative privacy. I built the app I needed. Then I realized thousands of artists need it too.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#story" className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-6 py-3 text-lg font-semibold shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary">Read the story</a>
              <a href="mailto:info@notify.artsupplytracker.com" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-card px-6 py-3 text-lg font-medium hover:bg-muted focus:outline-none focus:ring-2 focus:ring-border">Contact the founder</a>
            </div>
          </div>

          {/* Hero Image - Gossip Painting */}
          <div className="hero-media relative p-4 overflow-hidden">
            <img
              src={gossipHorses}
              alt="Gossip – Acrylic painting of three stylized horse heads in bold red, blue, and pink tones on dark background by Kim Wyatt"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="ast-panel p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why I am building this</h2>
          <div className="mt-4 space-y-4 text-foreground/85 leading-relaxed">
            <p>
              I'm Kim — an artist and a builder. During a move, I lost a case of my paintings and several easels. It wasn't just a financial hit; it felt like losing part of myself. That moment made me realize how vulnerable artists are when our tools and artwork aren't tracked or protected.
            </p>
            <p>
              I created ArtSupplyTracker so artists could always know what they own, where it is, and what it's worth. Insurance paperwork should take minutes, not days. And creative privacy should be a given — no scraping, no training on your art.
            </p>
            <p>
              What began as a weekend project is now a studio hub that organizes supplies, connects them to projects, and keeps creators focused on making art. My mission is simple: help artists create more and waste less, while keeping ownership and privacy intact.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and values */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <ValueCard index={0} title="Privacy by design"        body="Your art and data stay yours. We never train AI on creative work or IP." />
          <ValueCard index={1} title="Hands free creativity"    body="Voice control for busy hands. Alexa. Google Nest. Siri." />
          <ValueCard index={2} title="Community driven"         body="Built with artist feedback from day one. Beta users shape the roadmap." />
          <ValueCard index={3} title="Ethical AI"               body="Clear rules. Third party audits. Anonymized insights only." />
          <ValueCard index={4} title="Emotional Safety Shield"  body="Supportive interactions. Sensible pacing. Opt outs when you need a break." />
          <ValueCard index={5} title="Security first"           body="Voiceprint ID and 2FA options to protect your studio and records." />
        </div>
      </section>

      {/* Timeline / Vision */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Vision and road map</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Milestone index={0} title="Now" body="ArtSupplyTracker for artists. Inventory. Projects. Price alerts. Insurance reports." />
          <Milestone index={1} title="Next" body="Garage Helper for makers and shops. Larger market. More data to improve recommendations." />
          <Milestone index={2} title="Future" body="A family of trustworthy tools for creative and hands on communities. One modular platform." />
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Meet the team</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <TeamCard index={0} name="Kim"      role="Founder"              blurb="Artist. Builder. Focused on privacy friendly AI for real studios." img="/lovable-uploads/1be9744e-772f-4fe7-8a6c-7a56c2b901f0.png" />
          <TeamCard index={1} name="Adrian"   role="Design and outreach"  blurb="Helping with community, design, and early partner conversations." img="/lovable-uploads/f602c152-6995-4745-a992-dc2dcc23debb.png" />
          <TeamCard index={2} name="Randolph" role="Marketing & Reach"    blurb="Leading partner conversions and expanding our community worldwide." img="/lovable-uploads/25808746-eef4-4c29-8d03-3700454cf455.png" />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="ast-panel p-8 md:p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Join us in shaping better tools for creators</h3>
          <p className="mt-2 text-foreground/80">Questions or press. Email the founder.</p>
          <a
            href="mailto:info@notify.artsupplytracker.com"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-6 py-3 text-lg font-semibold shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            info@notify.artsupplytracker.com
          </a>
        </div>
      </section>

      <footer className="border-t border-border bg-card">
        {/* Trust Badges */}
        <div className="flex justify-center py-8">
          <div className="ast-panel p-8">
            <img 
              src={trustBadges} 
              alt="A Trusty App & Emotional Safety Shield – Modular trust and protection featuring shield emblems protected by a stylized owl symbolizing wisdom and vigilance" 
              className="h-48 opacity-80"
            />
          </div>
        </div>
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© 2025 ArtSupplyTracker. Software for artists. Made by an artist.</p>
          <p>
            Contact: <a href="mailto:info@notify.artsupplytracker.com" className="text-secondary underline underline-offset-4">info@notify.artsupplytracker.com</a>
          </p>
        </div>
      </footer>
    </main>
  );
}

function ValueCard({ title, body, index = 0 }: { title: string; body: string; index?: number }) {
  return (
    <div className={`${panelClass(index)} p-6`}>
      <h3 className={`text-xl font-semibold ${titleClass(index)}`}>{title}</h3>
      <p className="mt-2 text-foreground/80">{body}</p>
    </div>
  );
}

function Milestone({ title, body, index = 0 }: { title: string; body: string; index?: number }) {
  return (
    <div className={`${panelClass(index)} p-6`}>
      <h3 className={`text-xl font-semibold ${titleClass(index)}`}>{title}</h3>
      <p className="mt-2 text-foreground/80">{body}</p>
    </div>
  );
}

function TeamCard({ name, role, blurb, img, index = 0 }: { name: string; role: string; blurb: string; img: string; index?: number }) {
  return (
    <div className={`${panelClass(index)} p-6 flex items-center gap-5`}>
      <img src={img} alt={`${name} headshot`} className="h-16 w-16 rounded-full object-cover border border-border" />
      <div>
        <h4 className={`text-lg font-semibold ${titleClass(index)}`}>{name}</h4>
        <p className="text-muted-foreground text-sm">{role}</p>
        <p className="mt-2 text-foreground/80">{blurb}</p>
      </div>
    </div>
  );
}