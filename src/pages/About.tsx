import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import TrustFooter from "@/components/TrustFooter";
import whyItMatters from "@/assets/why-it-matters.png";
import partnersInsight from "@/assets/partners-investors-insight.png";
import { panelClass, titleClass } from "@/lib/cardAccent";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const linkCls =
  "text-secondary underline underline-offset-4 hover:opacity-80";

const stats = [
  { value: "$1.2T", label: "U.S. arts & cultural industries added to the economy in 2023" },
  { value: "4.2%", label: "Share of U.S. GDP from arts & cultural industries in 2023" },
  { value: "$57.5B", label: "Estimated global art market sales in 2024" },
  { value: "$10B+", label: "Estimated global art & craft materials market" },
];

const sources = [
  "National Endowment for the Arts / Bureau of Economic Analysis: U.S. arts and cultural industries, 2023",
  "UNCTAD Creative Economy Outlook 2024",
  "Art Basel and UBS Global Art Market Report 2025",
  "Fortune Business Insights: art and craft materials market research",
  "SSG / ABF Journal: MacPherson's sale of select assets to Blick, 2025",
  "Blick press announcement: Plaza Artist Materials acquisition, 2026",
  "Plaid Enterprises / PR Newswire: Arteza assets acquisition, 2025",
  "Axios / NPR / WGBH: Joann bankruptcy and liquidation, 2025",
];

const Section = ({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
    <div className={`${panelClass(index)} p-6 sm:p-8 md:p-10`}>
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight ${titleClass(index)}`}>
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-foreground/85 leading-relaxed text-base sm:text-lg">
        {children}
      </div>
    </div>
  </section>
);

export default function About() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <Seo
        title="About — Studio software built for artists | ArtSupplyTracker"
        description="Why ArtSupplyTracker exists: a studio management app that respects creative privacy and treats artists as serious users."
        path="/about"
      />
      <Navigation />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-10 pb-6 sm:pt-16 sm:pb-10 text-center">
        <p className="hero-kicker text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
          About ArtSupplyTracker
        </p>
        <h1 className="mt-3 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Art was never the impractical choice
        </h1>
        <p className="mt-5 text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Artists have been asked some version of the same tired question forever:{" "}
          <span className="italic">"What are you going to do with art?"</span>
          {" "}A better question is: what does the world do without it?
        </p>
        <div className="mt-7">
          <a
            href="https://studiobeta.artsupplytracker.com/dashboard"
            className="ast-btn-primary inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Join Early Access
          </a>
        </div>
      </section>

      {/* Stat cards */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {stats.map((s, i) => (
            <div key={s.value} className={`${panelClass(i)} p-4 sm:p-6 text-center`}>
              <div className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${titleClass(i)}`}>
                {s.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm text-foreground/85 leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-foreground/80 text-center">
          Sources listed at the bottom of this page.
        </p>
      </section>

      <Section index={0} title="Art is real work">
        <p>
          Arts and cultural industries added <strong>$1.2 trillion</strong> to the U.S. economy in 2023,
          representing <strong>4.2% of U.S. GDP</strong>. The sector grew faster than the overall U.S.
          economy that year. Globally, creative services and creative goods make up a major share of
          international trade, and the global art market and art materials market are each measured in
          billions.
        </p>
        <p>So artists can rejoice a little.</p>
        <p>
          Whether you make art for the joy of the process, for gifts, for school, for therapy, for
          dreams of showing your work, for art fairs, online shops, commissions, classrooms, community
          projects, or major galleries — you are part of something real. Not cute. Not extra. Not
          "just a hobby" unless you personally want it to be.
        </p>
        <p>
          Art is culture, business, labor, research, retail, design, education, technology, and human
          record keeping. Artists are not a tiny side audience. We are buyers, makers, testers,
          organizers, teachers, problem-solvers, collectors, storytellers, and material researchers.
        </p>
      </Section>

      <Section index={1} title="Why now">
        <p>
          For a long time, building this kind of software meant waiting for someone with funding, a
          dev team, and a business reason to care about artists' daily studio problems.
        </p>
        <p>
          Then vibe coding started getting good enough for real people to build usable software. I
          realized I did not have to wait for someone else to notice that the market for artist
          software is already here.
        </p>
        <p>
          There are apps for the commercial end of an artist's business — selling, listing, managing
          collectors, tracking finished inventory. But I did not see a tool built around the full
          creative practice. Not one that connects supplies, projects, storage, costs, planning,
          inspiration, and everyday studio life. Not one that scales from a kid who colors, to a
          hobby artist, to a student, to a professional working artist.
        </p>
        <p>
          So I started building <strong>ArtSupplyTracker</strong> — because artists need practical
          tools before the sale, before the show, before the polished post. We need tools for the
          studio itself: the messy, practical, beautiful part where ideas become objects and supplies
          become finished work.
        </p>
      </Section>

      <Section index={2} title="What ArtSupplyTracker is">
        <p>
          ArtSupplyTracker is a studio management app for artists. It helps artists track supplies,
          organize projects, understand costs, manage storage, plan creative work, and keep studio
          information in one place.
        </p>
        <p className="text-lg sm:text-xl font-semibold text-foreground">
          Know what you have. Use more of it. Waste less. Create with less friction.
        </p>
        <p>
          It is built for the actual middle of art-making — where supplies get opened, tools get
          borrowed, receipts get lost, colors run out, projects evolve, and the studio becomes half
          workspace, half archaeology dig. It is not just for selling finished work. It is for the
          whole studio life around making it.
        </p>
        <p>
          You can <Link to="/" className={linkCls}>try the live demo on the home page</Link> or
          read <Link to="/blog" className={linkCls}>practical studio guides on the blog</Link>.
        </p>
      </Section>

      {/* Why it matters to artists graphic */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <img
          src={whyItMatters}
          alt="Why it matters to artists — Spend more time making art and less time searching for supplies. Built for the studio, not just the sale."
          className="w-full h-auto rounded-2xl border border-border/40 shadow-2xl"
        />
      </section>

      <Section index={3} title="Who it is for">
        <p>
          ArtSupplyTracker is designed to grow with different kinds of artists and creative spaces:
          kids who color, hobby artists, students, working artists, teachers, classrooms, studios,
          art fair sellers, online shop owners, commission artists, artists preparing for shows, and
          artists who make for joy and never want to sell a thing.
        </p>
        <p>
          The point is not to force every artist into the same workflow. The point is to give artists
          a flexible system that can grow with them.
        </p>
      </Section>

      <Section index={4} title="What makes it different">
        <p>
          ArtSupplyTracker is built around the studio, not just the sale. Inventory connects to
          projects. Projects connect to supplies. Supplies connect to costs, storage, shopping lists,
          and future planning. It is designed to be useful before art becomes a listing, a post, a
          product, or a polished portfolio image.
        </p>
        <p>
          Artists need software that respects private research, unfinished ideas, reference
          gathering, experiments, and the odd little notes that make sense only to the person who
          wrote them at 1:12 a.m.
        </p>
        <p>
          ArtSupplyTracker is being built with a trust-first privacy model because your artwork is
          yours. Your research is yours. Your creative process is yours.{" "}
          <strong>Your private studio data is not the product.</strong>{" "}
          Read the full <Link to="/privacy" className={linkCls}>privacy policy</Link>.
        </p>
      </Section>

      <Section index={5} title="Why this matters beyond the studio">
        <p>
          The art supply world is changing. Major retail, craft, and materials companies are
          consolidating, closing, acquiring, and shifting direction. MacPherson's Art Supply sold
          remaining inventory and select IP to Blick in 2025. Blick later announced its acquisition
          of Plaza Artist Materials. Plaid Enterprises acquired select assets of Arteza. Joann moved
          through bankruptcy and liquidation.
        </p>
        <p>
          When the supply chain changes, artists notice. We change where we shop, stock up, buy less,
          experiment more, switch brands, stretch materials longer, look for substitutes, try
          independent makers, panic-buy the discontinued thing we love, and ask each other what still
          works.
        </p>
        <p>
          Retailers know what sold. Manufacturers know what shipped. Social platforms know what got
          posted. But very few tools understand what happens inside the working studio after the
          purchase — what artists actually use, rebuy, hoard, waste, substitute, or pair together.
        </p>
        <p>
          By helping artists track supplies, projects, storage, usage, and replacement needs,
          ArtSupplyTracker can also reveal respectful, anonymized patterns about the real materials
          economy. Not surveillance. Not individual profiling. Not selling private studio behavior.
          Useful insight, stripped of personal identity, built from consent and trust.
        </p>
      </Section>

      <Section index={6} title="For partners and supporters">
        <p>
          ArtSupplyTracker creates a new bridge between artists and the companies, educators,
          retailers, and organizations that support creative work. For art supply brands, retailers,
          schools, studios, and future partners, the opportunity is simple: support artists where the
          work actually happens — inside the studio.
        </p>
        <p>
          The platform is designed around trust, affordability, accessibility, and artist ownership.
          Artists will not keep using a tool that makes them feel watched, exploited, or priced out.
        </p>
        <p>
          The goal is not to extract from artists. The goal is to build something artists need first,
          then use ethical, anonymized insight to help the industry support creative work with better
          products, smarter stocking decisions, useful tutorials, and partnerships that match how
          artists actually work.
        </p>
        <p>
          Learn more on the <Link to="/partners" className={linkCls}>Partners page</Link> or the{" "}
          <Link to="/investors" className={linkCls}>Investors page</Link>.
        </p>
      </Section>

      {/* Partners & investors insight graphic */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <img
          src={partnersInsight}
          alt="Why it matters to partners and investors — Understanding how creative work actually happens. Art Supply Tracker reveals how artists use, replace, combine, and search for materials."
          className="w-full h-auto rounded-2xl border border-border/40 shadow-2xl"
        />
      </section>



      <Section index={7} title="Founder note">
        <p>I started ArtSupplyTracker because I needed it.</p>
        <p>
          I am an artist, and I know what it feels like to own the supplies, lose track of the
          supplies, rebuy the supplies, forget which project used the supplies, and then discover
          the original supplies months later in a box labeled something deeply unhelpful.
        </p>
        <p>
          Artists deserve better tools than memory, scattered notes, screenshots, receipts, and good
          intentions. This is my answer to every person who ever treated art like it was not
          practical.
        </p>
        <p className="text-lg sm:text-xl font-semibold text-foreground">
          Art was always practical. We just needed better systems for the people making it.
        </p>
        <p>
          Read more on the <Link to="/founders" className={linkCls}>Founders page</Link>.
        </p>
      </Section>

      {/* Join the beta CTA */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="ast-panel card-violet p-6 sm:p-8 text-center">
          <h2 className="title-violet text-2xl sm:text-3xl font-bold tracking-tight">
            Join Early Access
          </h2>
          <p className="mt-3 text-foreground/85 max-w-2xl mx-auto">
            Get early access and help shape a studio tool built around artists — not around your data.
          </p>
          <a
            href="https://studiobeta.artsupplytracker.com/dashboard"
            className="ast-btn-primary mt-5 inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Join Early Access
          </a>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="ast-panel p-6 sm:p-8">
          <h2 className="ast-heading-solid text-xl sm:text-2xl font-bold tracking-tight">Sources</h2>
          <ul className="mt-4 space-y-2 text-sm text-foreground/85 list-disc list-inside">
            {sources.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <TrustFooter />
      <Footer />
    </main>
  );
}
