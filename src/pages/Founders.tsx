import Navigation from "@/components/Navigation";

export default function FoundersPage() {
  return (
    <main className="min-h-screen w-full bg-[#2B0F22] text-white">
      <Navigation />
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Built by artists. For artists.</h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              ArtSupplyTracker began in a real studio. I was tired of lost supplies, messy spreadsheets, and tools that
              did not respect creative privacy. I built the app I needed. Then I realized thousands of artists need it too.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#story" className="inline-flex items-center justify-center rounded-xl bg-teal-400 text-[#2B0F22] px-6 py-3 text-lg font-semibold shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-teal-300">Read the story</a>
              <a href="mailto:info@artsupplytracker.app" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-lg font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">Contact the founder</a>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 aspect-video md:aspect-[4/3] shadow-[0_10px_30px_rgba(0,0,0,0.35)] overflow-hidden">
            <img
              src="/lovable-uploads/39a249e5-4c02-4229-a32c-70f17d3c7904.png"
              alt="Snapshot of founder's colored pencil drawing in progress - landscape scene with figures and mountains"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why I am building this</h2>
          <div className="mt-4 space-y-4 text-white/85 leading-relaxed">
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
          <ValueCard
            title="Privacy by design"
            body="Your art and data stay yours. We never train AI on creative work or IP."
          />
          <ValueCard
            title="Hands free creativity"
            body="Voice control for busy hands. Alexa. Google Nest. Siri."
          />
          <ValueCard
            title="Community driven"
            body="Built with artist feedback from day one. Beta users shape the roadmap."
          />
          <ValueCard
            title="Ethical AI"
            body="Clear rules. Third party audits. Anonymized insights only."
          />
          <ValueCard
            title="Emotional Safety Shield"
            body="Supportive interactions. Sensible pacing. Opt outs when you need a break."
          />
          <ValueCard
            title="Security first"
            body="Voiceprint ID and 2FA options to protect your studio and records."
          />
        </div>
      </section>

      {/* Timeline / Vision */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Vision and road map</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Milestone title="Now" body="ArtSupplyTracker for artists. Inventory. Projects. Price alerts. Insurance reports." />
          <Milestone title="Next" body="Garage Helper for makers and shops. Larger market. More data to improve recommendations." />
          <Milestone title="Future" body="A family of trustworthy tools for creative and hands on communities. One modular platform." />
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Meet the team</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <TeamCard
            name="Kim"
            role="Founder"
            blurb="Artist. Builder. Focused on privacy friendly AI for real studios."
            img="/lovable-uploads/1be9744e-772f-4fe7-8a6c-7a56c2b901f0.png"
          />
          <TeamCard
            name="Adrian"
            role="Design and outreach"
            blurb="Helping with community, design, and early partner conversations."
            img="/lovable-uploads/f602c152-6995-4745-a992-dc2dcc23debb.png"
          />
          <TeamCard
            name="Randolph"
            role="Marketing & Reach"
            blurb="Leading partner conversions and expanding our community worldwide."
            img="/lovable-uploads/25808746-eef4-4c29-8d03-3700454cf455.png"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Join us in shaping better tools for creators</h3>
          <p className="mt-2 text-white/80">Questions or press. Email the founder.</p>
          <a
            href="mailto:info@artsupplytracker.app"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-teal-400 text-[#2B0F22] px-6 py-3 text-lg font-semibold shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            info@artsupplytracker.app
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#230C1C]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© 2025 ArtSupplyTracker. Software for artists. Made by an artist.</p>
          <p>
            Contact: <a href="mailto:info@artsupplytracker.app" className="text-teal-300 underline underline-offset-4">info@artsupplytracker.app</a>
          </p>
        </div>
      </footer>
    </main>
  );
}

function ValueCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-white/80">{body}</p>
    </div>
  );
}

function Milestone({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-white/80">{body}</p>
    </div>
  );
}

function TeamCard({ name, role, blurb, img }: { name: string; role: string; blurb: string; img: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center gap-5">
      <img src={img} alt={`${name} headshot`} className="h-16 w-16 rounded-full object-cover border border-white/20" />
      <div>
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-white/70 text-sm">{role}</p>
        <p className="mt-2 text-white/80">{blurb}</p>
      </div>
    </div>
  );
}