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
            Ethical AI platform serving the global creative community with modular expansion potential.
          </p>
        </div>
      </header>

      {/* Market Opportunity */}
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-accent" />
                Market Opportunity
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The global art supply market in 2025 is worth billions. Artists worldwide struggle with managing supplies, costs, and sales — ArtSupplyTracker solves this with an ethical AI assistant.
              </p>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Market Pain Points</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Supply inventory chaos and waste</li>
                    <li>• Lack of project cost tracking</li>
                    <li>• Insurance claim difficulties</li>
                    <li>• Inefficient purchasing decisions</li>
                    <li>• Poor market trend visibility</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Target className="w-8 h-8 text-accent" />
                Why Invest
              </h2>
              
              <div className="space-y-4">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Mass Market Reach</h4>
                    <p className="text-muted-foreground text-sm">Millions of artists worldwide need supply management solutions</p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Ethical AI Advantage</h4>
                    <p className="text-muted-foreground text-sm">Never trained on user data - competitive moat in privacy-conscious market</p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Multiple Revenue Streams</h4>
                    <p className="text-muted-foreground text-sm">Affiliate, ads, premium features, ethical data partnerships</p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Modular Platform</h4>
                    <p className="text-muted-foreground text-sm">Core technology enables rapid expansion to adjacent markets</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Product */}
      <section className="px-8 py-20 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Next Modular <span className="text-accent">Application</span>
          </h2>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                <Wrench className="w-8 h-8 text-accent" />
                Garage Helper
              </CardTitle>
              <CardDescription className="text-lg">
                Primary Revenue Driver - Larger market, higher spending users
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Target Market</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Home mechanics</li>
                    <li>• Small auto shops</li>
                    <li>• Handymen & contractors</li>
                    <li>• Landscapers & gardeners</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Core Features</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Hands-free AI assistant</li>
                    <li>• Tool inventory management</li>
                    <li>• Project cost tracking</li>
                    <li>• Insurance documentation</li>
                    <li>• Event support (car shows)</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  Relief Fund for Tool Replacement
                </Badge>
              </div>
            </CardContent>
          </Card>
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
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Home Holiday Decorators</h3>
                <p className="text-muted-foreground">Seasonal decoration inventory and project management for enthusiasts and professionals.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Musicians</h3>
                <p className="text-muted-foreground">Equipment tracking, maintenance schedules, and gig management for performers and studios.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Makeup Artists</h3>
                <p className="text-muted-foreground">Product inventory, client management, and hygiene compliance for beauty professionals.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trusty App Promise */}
      <section className="px-8 py-20 bg-card/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center justify-center gap-3">
            <Shield className="w-8 h-8 text-accent" />
            🔒 The <span className="text-accent">Trusty App</span> Promise
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our ethical framework applies to all current and future applications
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Never train AI on creative work or IP</h3>
                <p className="text-muted-foreground">Protecting user intellectual property builds trust and reduces legal risk</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Never sell personally identifiable info</h3>
                <p className="text-muted-foreground">Privacy-first approach differentiates us in data-hungry market</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Only anonymized, regional insights shared</h3>
                <p className="text-muted-foreground">Valuable market data without compromising individual privacy</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Regular software audits for ethical assurance</h3>
                <p className="text-muted-foreground">Proactive compliance reduces regulatory risk and builds credibility</p>
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
          
          <Button 
            size="lg"
            onClick={() => window.location.href = 'mailto:investor@artsupplytracker.com'}
            className="bg-magenta-gradient hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            📩 Investor Contact
          </Button>
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