import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import trustAppBadge from "@/assets/trust-app-badge.png";
import emotionalSafetyShield from "@/assets/emotional-safety-shield.png";
import { TrendingUp, Target, Wrench, Shield } from "lucide-react";

const Investors = () => {
  return (
    <div className="min-h-screen bg-wine-plum">
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 tracking-tight">
            <span className="text-accent">Investment</span> Opportunity
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            ArtSupplyTracker is the first ethical AI platform designed for creative communities, with a modular foundation that expands into multiple billion-dollar verticals.
          </p>
        </div>
      </header>

      {/* Market Opportunity */}
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-accent" />
            Market Opportunity
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            The global art supply market is worth billions annually and is highly fragmented. Artists and studios worldwide struggle with:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">Tracking and replacing supplies</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">Managing project costs</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">Navigating insurance claims</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">Making informed purchasing decisions</p>
              </CardContent>
            </Card>
          </div>

          <p className="text-lg text-muted-foreground text-center">
            ArtSupplyTracker solves these pain points with an AI-powered studio assistant built on trust, privacy, and usability.
          </p>
        </div>
      </section>

      {/* Why Invest */}
      <section className="px-8 py-20 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 flex items-center justify-center gap-3">
            <Target className="w-8 h-8 text-accent" />
            Why Invest
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Mass Market Reach</h3>
                <p className="text-muted-foreground">Millions of creators worldwide face the same challenges — our solution addresses a universal need.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Unique Ethical AI Advantage</h3>
                <p className="text-muted-foreground">We never train on user creative IP and only share anonymized insights. This trust-first model is a durable competitive moat in a privacy-conscious era.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Multiple Revenue Streams</h3>
                <p className="text-muted-foreground">Affiliate sales, advertising, premium features, and anonymized market insights — all diversified for resilience.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Defensible Modular Platform</h3>
                <p className="text-muted-foreground">Our core tech scales across adjacent industries (garage/workshops, holiday decorators, musicians, etc.), multiplying market size without rebuilding infrastructure.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Early Community Traction</h3>
                <p className="text-muted-foreground">Artists are already signing up as beta users and partners, positioning us for rapid adoption at launch.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Modular Application */}
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            Next Modular Application: <span className="text-accent">Garage Helper</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            The first expansion beyond artists targets a larger, higher-spending market.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Target className="w-6 h-6 text-accent" />
                  Target Segments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-3">
                  <li>• Home mechanics</li>
                  <li>• Small auto shops</li>
                  <li>• Contractors & handymen</li>
                  <li>• Landscapers & gardeners</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Wrench className="w-6 h-6 text-accent" />
                  Core Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-3">
                  <li>• Voice-controlled AI assistant</li>
                  <li>• Tool & supply inventory management</li>
                  <li>• Project cost tracking</li>
                  <li>• Insurance-ready documentation</li>
                  <li>• Event support (car shows, workshops)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
              Garage Helper becomes the primary revenue driver with a broader user base and more monetizable data.
            </p>
          </div>
        </div>
      </section>

      {/* Planned Features */}
      <section className="px-8 py-20 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Planned & <span className="text-accent">Future Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <p className="text-muted-foreground">Paid featured artist & partner showcases</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <p className="text-muted-foreground">Artist & tool relief funds (insurance-like support)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <p className="text-muted-foreground">CRM tools for art & project sales</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <p className="text-muted-foreground">Music & smart home integration</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <p className="text-muted-foreground">Accessibility & wellness features (stress detection, ASL support)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <p className="text-muted-foreground">Modern community platform for creatives</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Expansions */}
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Future <span className="text-accent">Expansions</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Home Holiday Decorators</h3>
                <p className="text-muted-foreground">Seasonal inventory & project management</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Musicians</h3>
                <p className="text-muted-foreground">Gear tracking, maintenance, gig scheduling</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Makeup Artists</h3>
                <p className="text-muted-foreground">Product inventory, client management, hygiene compliance</p>
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
            The <span className="text-accent">Trusty App</span> Promise
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            We operate on a privacy-first, artist-friendly ethical framework:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <p className="text-muted-foreground">Never train AI on creative work or IP</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <p className="text-muted-foreground">Never sell personally identifiable info</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <p className="text-muted-foreground">Share only anonymized, regional insights</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <p className="text-muted-foreground">Regular third-party audits for ethical compliance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Join Our Growth Story
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Be part of building ethical AI solutions for creative communities worldwide.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Investor contact is investor@artsupplytracker.app
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="flex justify-center gap-8 py-8">
        <img src={trustAppBadge} alt="Trust App Badge" className="h-16 opacity-70" />
        <img src={emotionalSafetyShield} alt="Emotional Safety Shield" className="h-16 opacity-70" />
      </div>
    </div>
  );
};

export default Investors;