import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";

import trustBadges from "@/assets/trust-badges.png";
import partnersHeroAd from "@/assets/partners-hero-ad.png";
import { panelClass, titleClass } from "@/lib/cardAccent";

const scrollToContactForm = (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById("partner-contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Partners = () => {
  return (
    <div className="min-h-screen bg-wine-plum">
      <Seo
        title="Partners — Reach working artists | ArtSupplyTracker"
        description="Partner with ArtSupplyTracker to reach engaged working artists. Brand collaborations, supplier integrations, and community programs."
        path="/partners"
      />
      <Navigation />

      
      {/* Hero Section */}
      <header className="relative py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <a
              href="#partner-contact-form"
              onClick={scrollToContactForm}
              className="hero-media relative p-4 overflow-hidden block transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-10px_rgba(124,60,255,0.5)] rounded-lg"
              aria-label="Contact us to learn more about partnership opportunities"
            >
              <img
                src={partnersHeroAd}
                alt="Advertise in our app — reach thousands of artists in their creative workflow with relevant, non-intrusive placements"
                className="w-full h-auto rounded-lg"
              />
            </a>
            
            {/* Right Content */}
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-6 tracking-tight">
                Partner <span className="text-accent">Opportunities</span>
              </h1>
              <p
                className="text-xl font-bold mb-8 leading-relaxed bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #2563eb 0%, #6366f1 50%, #a855f7 100%)" }}
              >
                Art Supply Tracker helps creative brands, retailers, educators, and makers connect with artists through practical tools, product education, and studio-centered resources.
              </p>

            </div>
          </div>
        </div>
      </header>

      {/* Partner form CTA */}
      <section className="px-8 -mt-8 mb-12">
        <div className="text-center">
          <button
            type="button"
            data-tally-open="1Ap5E4"
            data-tally-layout="modal"
            data-tally-emoji-text="🤝"
            data-tally-emoji-animation="head-shake"
            className="partner-cta inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-ring transition-transform hover:-translate-y-0.5"
            style={{
              background: "#2D2DB8",
              border: "2px solid #3B3BE0",
              boxShadow: "0 0 12px rgba(59,59,224,0.55), 0 0 30px rgba(59,59,224,0.35)",
            }}
          >
            Partner With Us
          </button>
        </div>
      </section>

      {/* Partner Types */}
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className={`${panelClass(0)} p-6 transition-all duration-300 hover:-translate-y-0.5`}>
              <CardContent className="p-8 text-center">
                <h3 className={`text-xl font-semibold ${titleClass(0)} mb-4`}>Advertising</h3>
                <p className="text-muted-foreground mb-6">Promote your products directly to artists actively seeking supplies.</p>
                <ul className="text-sm text-muted-foreground text-left space-y-2">
                  <li>• Targeted demographics</li>
                  <li>• Native ad placements</li>
                  <li>• Performance analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className={`${panelClass(1)} p-6 transition-all duration-300 hover:-translate-y-0.5`}>
              <CardContent className="p-8 text-center">
                <h3 className={`text-xl font-semibold ${titleClass(1)} mb-4`}>Featured Content</h3>
                <p className="text-muted-foreground mb-6">Showcase your brand on our Inspiration Page with video demos and tutorials.</p>
                <ul className="text-sm text-muted-foreground text-left space-y-2">
                  <li>• Video demonstrations</li>
                  <li>• Supply list integration</li>
                  <li>• Artist collaborations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className={`${panelClass(2)} p-6 transition-all duration-300 hover:-translate-y-0.5`}>
              <CardContent className="p-8 text-center">
                <h3 className={`text-xl font-semibold ${titleClass(2)} mb-4`}>Data Partnerships</h3>
                <p className="text-muted-foreground mb-6">Access ethical, anonymized insights into art supply trends and market demand.</p>
                <ul className="text-sm text-muted-foreground text-left space-y-2">
                  <li>• Market trend reports</li>
                  <li>• Regional insights</li>
                  <li>• Demand forecasting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className={`${panelClass(3)} p-6 transition-all duration-300 hover:-translate-y-0.5`}>
              <CardContent className="p-8 text-center">
                <h3 className={`text-xl font-semibold ${titleClass(3)} mb-4`}>Early Product Testing & Feedback</h3>
                <p className="text-muted-foreground mb-6">Connect directly with artists as early testers and get authentic insights to guide product decisions.</p>
                <ul className="text-sm text-muted-foreground text-left space-y-2">
                  <li>• Beta testing with engaged creators</li>
                  <li>• Direct product feedback loops</li>
                  <li>• Faster iteration and refinement</li>
                  <li>• Build loyalty by co-creating with artists</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="px-8 py-20 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Partner with <span className="text-accent">ArtSupplyTracker</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className={`${panelClass(4)} p-6`}>
              <CardContent className="p-6">
                <h3 className={`text-xl font-semibold ${titleClass(4)} mb-4`}>Engaged Community</h3>
                <p className="text-muted-foreground">Our users are passionate artists who actively purchase supplies and trust our recommendations.</p>
              </CardContent>
            </Card>

            <Card className={`${panelClass(5)} p-6`}>
              <CardContent className="p-6">
                <h3 className={`text-xl font-semibold ${titleClass(5)} mb-4`}>Ethical Standards</h3>
                <p className="text-muted-foreground">We maintain strict ethical guidelines and transparency in all our partnerships and data sharing.</p>
              </CardContent>
            </Card>

            <Card className={`${panelClass(6)} p-6`}>
              <CardContent className="p-6">
                <h3 className={`text-xl font-semibold ${titleClass(6)} mb-4`}>Growing Platform</h3>
                <p className="text-muted-foreground">Join us early as we expand to new markets and develop additional creative industry solutions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


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
    </div>
  );
};

export default Partners;