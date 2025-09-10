import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import trustAppBadge from "@/assets/trust-app-badge.png";
import emotionalSafetyShield from "@/assets/emotional-safety-shield.png";
import { Palette, Shield, Mic, Camera, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-wine-plum">
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <img 
              src="/lovable-uploads/5072e676-89f2-44ad-8012-8f68f7e6730e.png" 
              alt="Original penguin painting with vibrant purple and magenta tones, surrounded by art supplies on a desk" 
              className="w-full max-w-3xl mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h1 className="text-6xl font-bold text-foreground mb-6 tracking-tight">
            Art<span className="text-accent">Supply</span>Tracker
          </h1>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light italic">
            "Software for artists, made by an artist."
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-magenta-gradient hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={() => window.location.href = 'mailto:info@artsupplytracker.com'}
            >
              Sign up for Beta
            </Button>
          </div>
        </div>
      </header>

      {/* Artist Features Section */}
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Features for <span className="text-accent">Artists</span>
            </h2>
            <Badge variant="secondary" className="text-lg px-4 py-2">Beta Launch</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
              <CardHeader>
                <Palette className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Inventory Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Keep track of all your art supplies with smart categorization and low-stock alerts.</CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
              <CardHeader>
                <Camera className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Project Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Organize your artwork projects with supply lists, progress tracking, and completion timelines.</CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
              <CardHeader>
                <Mic className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Hands-free Control</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Voice control with Alexa, Nest, and more. Perfect when your hands are covered in paint!</CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Price Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Monitor supply costs and get alerts on deals from your favorite art stores.</CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
              <CardHeader>
                <Shield className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Insurance Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Generate detailed reports for insurance claims with photos and purchase history.</CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
              <CardHeader>
                <Shield className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Advanced Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Voiceprint ID and 2FA protect your valuable art inventory and personal data.</CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={() => window.location.href = 'mailto:info@artsupplytracker.com'}
              className="bg-magenta-gradient hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              📩 Beta Signup
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Promise Section */}
      <section className="px-8 py-20 bg-card/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-8">
            <div className="w-20 h-20 bg-accent/20 rounded-lg flex items-center justify-center">
              <Shield className="w-10 h-10 text-accent" />
            </div>
            <div className="w-20 h-20 bg-accent/20 rounded-lg flex items-center justify-center">
              <Shield className="w-10 h-10 text-accent" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-foreground mb-8">
            🔒 The <span className="text-accent">Trusty App</span> Promise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Your art is yours.</h3>
                <p className="text-muted-foreground">We never train AI on your artwork or intellectual property.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Your privacy is safe.</h3>
                <p className="text-muted-foreground">We never sell personally identifiable information.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Only anonymized insights.</h3>
                <p className="text-muted-foreground">Shared data is supply and region trends, never your creations.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Ethical AI.</h3>
                <p className="text-muted-foreground">Regular software audits to ensure no harm.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Features */}
      <section className="px-8 py-20 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Planned & <span className="text-accent">Future Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-4">
                  <p className="text-muted-foreground">Paid featured artists on Inspiration Page (videos/blog demos with supply lists)</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-4">
                  <p className="text-muted-foreground">Artist Relief Fund (help replace lost supplies)</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-4">
                  <p className="text-muted-foreground">CRM for art sales (online, gallery, in-person)</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-4">
                  <p className="text-muted-foreground">Music app integration</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-4">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-4">
                  <p className="text-muted-foreground">Smart home compatibility</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-4">
                  <p className="text-muted-foreground">Accessibility + wellness features (ASL, stress detection)</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-4">
                  <p className="text-muted-foreground">Portfolio management (if demand grows)</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-4">
                  <p className="text-muted-foreground">New artist community platform (modern forum replacement)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="px-8 py-20 bg-card/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 mb-12">
            <p className="text-2xl text-foreground font-light italic">
              "Hands-free because artists' hands are full."
            </p>
            <p className="text-2xl text-foreground font-light italic">
              "Secure because your art deserves protection."
            </p>
            <p className="text-2xl text-foreground font-light italic">
              "Community-driven because artists thrive together."
            </p>
          </div>
          
          <div className="flex justify-center gap-8 mb-8">
            <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center">
              <Shield className="w-8 h-8 text-accent" />
            </div>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">🔒 Trusty App Promise</CardTitle>
              <CardDescription>(applies to all apps)</CardDescription>
            </CardHeader>
            <CardContent className="text-left space-y-2">
              <p className="text-muted-foreground">• Never train AI on creative work or IP</p>
              <p className="text-muted-foreground">• Never sell personally identifiable info</p>
              <p className="text-muted-foreground">• Only anonymized, regional insights shared</p>
              <p className="text-muted-foreground">• Regular software audits for ethical assurance</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-12 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            &copy; 2024 ArtSupplyTracker. Software for artists, made by an artist.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;