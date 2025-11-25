import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import trustBadges from "@/assets/trust-badges.png";

const Partners = () => {
  return (
    <div className="min-h-screen bg-wine-plum">
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-6 tracking-tight">
                Partner <span className="text-accent">Opportunities</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Join our ecosystem and grow your business alongside passionate artists who trust our platform.
              </p>
              <p className="text-lg text-muted-foreground">
                Contact us at <a href="mailto:partner@artsupplytracker.com" className="text-accent font-semibold hover:underline">partner@artsupplytracker.com</a>
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl border-4 border-pink-400/40 bg-pink-400/5 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <img 
                  src={trustBadges} 
                  alt="A Trusty App & Emotional Safety Shield – Modular trust and protection featuring shield emblems protected by a stylized owl symbolizing wisdom and vigilance" 
                  className="h-80 opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Partner Types */}
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Advertising</h3>
                <p className="text-muted-foreground mb-6">Promote your products directly to artists actively seeking supplies.</p>
                <ul className="text-sm text-muted-foreground text-left space-y-2">
                  <li>• Targeted demographics</li>
                  <li>• Native ad placements</li>
                  <li>• Performance analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Featured Content</h3>
                <p className="text-muted-foreground mb-6">Showcase your brand on our Inspiration Page with video demos and tutorials.</p>
                <ul className="text-sm text-muted-foreground text-left space-y-2">
                  <li>• Video demonstrations</li>
                  <li>• Supply list integration</li>
                  <li>• Artist collaborations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Data Partnerships</h3>
                <p className="text-muted-foreground mb-6">Access ethical, anonymized insights into art supply trends and market demand.</p>
                <ul className="text-sm text-muted-foreground text-left space-y-2">
                  <li>• Market trend reports</li>
                  <li>• Regional insights</li>
                  <li>• Demand forecasting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Early Product Testing & Feedback</h3>
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
            <Card className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Engaged Community</h3>
                <p className="text-muted-foreground">Our users are passionate artists who actively purchase supplies and trust our recommendations.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Ethical Standards</h3>
                <p className="text-muted-foreground">We maintain strict ethical guidelines and transparency in all our partnerships and data sharing.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Growing Platform</h3>
                <p className="text-muted-foreground">Join us early as we expand to new markets and develop additional creative industry solutions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can grow together in the creative community.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us at <a href="mailto:partner@artsupplytracker.com" className="text-accent font-semibold hover:underline">partner@artsupplytracker.com</a>
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="flex justify-center py-8">
        <div className="rounded-2xl border-4 border-pink-400/40 bg-pink-400/5 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
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