import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import ContactForm from "@/components/ContactForm";
import trustBadges from "@/assets/trust-badges.png";
import investorsHeroAd from "@/assets/investors-hero-ad.png";
import { TrendingUp, Target, Wrench, Shield } from "lucide-react";

const scrollToContactForm = (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById("investor-contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Investors = () => {
  return (
    <div className="min-h-screen bg-wine-plum">
      <Seo
        title="Investors — Private studio software for artists | ArtSupplyTracker"
        description="ArtSupplyTracker is building privacy-first studio software for the global artist market. Learn about our vision, traction, and how to get in touch."
        path="/investors"
      />
      <Navigation />

      
      {/* Hero Section */}
      <header className="relative py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-foreground mb-6 tracking-tight">
                <span className="text-accent">Investment</span> Opportunity
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Art Supply Tracker starts with artists: inventory, projects, studio organization, and hands-free creative workflow tools. The same modular system can expand into adjacent maker, workshop, and seasonal decor markets.
              </p>
              <a
                href="#investor-contact-form"
                onClick={scrollToContactForm}
                className="inline-flex items-center justify-center rounded-md px-8 h-12 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #7C3CFF 0%, #00E6FF 100%)",
                  boxShadow: "0 0 0 1px rgba(124,60,255,0.35), 0 8px 24px -10px rgba(0,230,255,0.5)",
                }}
              >
                Contact Our Investor Team →
              </a>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <a
                href={investorsHeroAd}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-media p-4 block transition-transform hover:-translate-y-0.5"
                aria-label="Open full investor overview image in a new tab"
              >
                <img
                  src={investorsHeroAd}
                  alt="Empowering Artists – Investor overview highlighting ArtSupplyTracker's scalable creative platform, market size, defensibility, and revenue streams"
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Market Opportunity */}
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-accent" />
            Market opportunity
          </h2>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Artists, studios, classrooms, and creative businesses manage supplies, projects, costs, storage, and documentation across scattered tools, spreadsheets, receipts, photos, and memory.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            They need better ways to:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <Card className="ast-panel card-violet p-6">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">Track and replace supplies</p>
              </CardContent>
            </Card>
            <Card className="ast-panel card-cyan p-6">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">Manage project costs</p>
              </CardContent>
            </Card>
            <Card className="ast-panel card-violet p-6">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">Document inventory for insurance</p>
              </CardContent>
            </Card>
            <Card className="ast-panel card-magenta p-6">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">Make smarter purchasing decisions</p>
              </CardContent>
            </Card>
          </div>

          <p className="text-lg text-muted-foreground text-center">
            Art Supply Tracker brings supply tracking, project management, cost awareness, and hands-free studio organization into one artist-centered platform.
          </p>
        </div>
      </section>

      {/* Why Invest */}
      <section className="px-8 py-20 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 flex items-center justify-center gap-3">
            <Target className="w-8 h-8 text-accent" />
            Why invest
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="ast-panel card-violet p-6">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold title-violet mb-4">Large creative user base</h3>
                <p className="text-muted-foreground">Artists, students, educators, studios, hobbyists, and creative businesses all face the same daily organization problem: knowing what they have, where it is, how it is used, and when it needs to be replaced.</p>
              </CardContent>
            </Card>

            <Card className="ast-panel card-cyan p-6">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold title-cyan mb-4">Trust-first AI and data model</h3>
                <p className="text-muted-foreground">Art Supply Tracker is built around a clear promise: we do not train AI on user artwork or creative IP, and we do not sell personally identifiable information. Any future insight products must be anonymized and privacy-protective.</p>
              </CardContent>
            </Card>

            <Card className="ast-panel card-magenta p-6">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold title-violet mb-4">Multiple revenue paths</h3>
                <p className="text-muted-foreground">Potential revenue includes affiliate sales, artist-friendly advertising, partner showcases, premium features, education partnerships, and anonymized market insights.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Modular Application */}
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            Next modular application: <span className="text-accent">Art Supply Tracker — Garage &amp; Artisan Workshop</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            The same inventory, project, cost, and documentation system can expand beyond art studios into garages, workshops, small shops, and maker spaces.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="ast-panel card-violet p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Target className="w-6 h-6 text-accent" />
                  Target segments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-3">
                  <li>• Home mechanics</li>
                  <li>• DIYers and makers</li>
                  <li>• Small auto shops</li>
                  <li>• Contractors and handymen</li>
                  <li>• Gardeners and outdoor tool users</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="ast-panel card-magenta p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Wrench className="w-6 h-6 text-accent" />
                  Core features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-3">
                  <li>• Tool and supply inventory</li>
                  <li>• Project cost tracking</li>
                  <li>• Maintenance and replacement reminders</li>
                  <li>• Storage location tracking</li>
                  <li>• Insurance-ready documentation</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
              This expansion gives Art Supply Tracker a path into broader, higher-spending maker and workshop markets while reusing the same core platform architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Planned Features */}
      <section className="px-8 py-20 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Planned and <span className="text-accent">future features</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="ast-panel card-violet p-6">
              <CardContent className="p-6">
                <p className="text-muted-foreground">Partner and product education showcases</p>
              </CardContent>
            </Card>

            <Card className="ast-panel card-cyan p-6">
              <CardContent className="p-6">
                <p className="text-muted-foreground">Supply replacement relief fund</p>
              </CardContent>
            </Card>

            <Card className="ast-panel card-magenta p-6">
              <CardContent className="p-6">
                <p className="text-muted-foreground">Client and commission workflow tools</p>
              </CardContent>
            </Card>

            <Card className="ast-panel card-violet p-6">
              <CardContent className="p-6">
                <p className="text-muted-foreground">Voice assistant and smart home integrations</p>
              </CardContent>
            </Card>

            <Card className="ast-panel card-cyan p-6">
              <CardContent className="p-6">
                <p className="text-muted-foreground">Accessibility features including ASL support</p>
              </CardContent>
            </Card>

            <Card className="ast-panel card-violet p-6">
              <CardContent className="p-6">
                <p className="text-muted-foreground">Creative community and studio collaboration tools</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Expansions */}
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Future <span className="text-accent">expansion opportunities</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="ast-panel card-magenta p-6 transition-all duration-300 hover:-translate-y-0.5">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold title-cyan mb-4">Art Supply Tracker — Home, Holiday &amp; Seasonal Decor</h3>
                <p className="text-muted-foreground">Seasonal decor inventory, storage tracking, room planning, and setup support.</p>
              </CardContent>
            </Card>

            <Card className="ast-panel card-violet p-6 transition-all duration-300 hover:-translate-y-0.5">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold title-magenta mb-4">Musicians and performers</h3>
                <p className="text-muted-foreground">Gear tracking, maintenance reminders, gig supplies, and setup checklists.</p>
              </CardContent>
            </Card>

            <Card className="ast-panel card-cyan p-6 transition-all duration-300 hover:-translate-y-0.5">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold title-violet mb-4">Makeup artists and beauty professionals</h3>
                <p className="text-muted-foreground">Product inventory, kit organization, client notes, hygiene tracking, and replacement reminders.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trusty App Promise */}
      <section className="px-8 py-20 bg-card/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8 flex items-center justify-center gap-3">
            <Shield className="w-8 h-8 text-accent" />
            The <span className="text-accent">Trusty App</span> promise
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Art Supply Tracker is built around a privacy-first, artist-friendly trust model.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="ast-panel card-magenta p-6">
              <CardContent className="p-6">
                <p className="text-muted-foreground">We do not train AI on user artwork or creative IP.</p>
              </CardContent>
            </Card>

            <Card className="ast-panel card-violet p-6">
              <CardContent className="p-6">
                <p className="text-muted-foreground">We do not sell personally identifiable information.</p>
              </CardContent>
            </Card>

            <Card className="ast-panel card-cyan p-6">
              <CardContent className="p-6">
                <p className="text-muted-foreground">User research, notes, references, prompts, and creative direction belong to the user.</p>
              </CardContent>
            </Card>

            <Card className="ast-panel card-violet p-6">
              <CardContent className="p-6">
                <p className="text-muted-foreground">Future market insights must be anonymized, aggregated, and privacy-protective.</p>
              </CardContent>
            </Card>

            <Card className="ast-panel card-magenta p-6 md:col-span-2">
              <CardContent className="p-6">
                <p className="text-muted-foreground">Third-party audits and public transparency reporting are planned as the platform scales.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="investor-contact-form" className="px-8 py-20 scroll-mt-24">

        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Join Our Growth Story
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-center">
            Be part of building ethical AI solutions for creative communities worldwide.
          </p>
          <ContactForm inquiryType="investor" />
        </div>
      </section>

      {/* Trust Badges */}
      <div className="flex justify-center py-8">
        <div className="ast-panel card-magenta p-8">
          <img 
            src={trustBadges} 
            alt="A Trusty App & Emotional Safety Shield – Modular trust and protection featuring shield emblems protected by a stylized owl symbolizing wisdom and vigilance" 
            className="h-48 opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Investors;