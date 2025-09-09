import PhotoBox from "@/components/PhotoBox";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-wine-plum">
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
            Vintage <span className="text-accent">Collections</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Discover the elegance of curated vintage aesthetics, where every piece tells a story of timeless beauty and sophisticated design.
          </p>
          
          <Button 
            size="lg" 
            className="bg-magenta-gradient hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Explore Collection
          </Button>
        </div>
      </header>

      {/* Featured Content */}
      <main className="px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-16">
            Featured Pieces
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <PhotoBox 
              title="Vintage Jewelry" 
              label="LUXURY"
              variant="default"
            >
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  Crystalline Elegance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Exquisite gems that capture light and mystery, each piece a testament to nature's artistry and human craftsmanship.
                </p>
              </div>
            </PhotoBox>

            <PhotoBox 
              title="Art Collection" 
              label="GALLERY"
              variant="accent"
            >
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  Chromatic Symphony
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Vibrant compositions that dance between warm and cool, creating harmonies that speak to the soul.
                </p>
              </div>
            </PhotoBox>

            <PhotoBox 
              title="Archives" 
              label="MEMORY"
              variant="default"
            >
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  Timeless Moments
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Carefully preserved memories in beautiful storage, where the past meets the present with grace.
                </p>
              </div>
            </PhotoBox>

            <PhotoBox 
              title="Curated Selection" 
              label="PREMIUM"
              variant="large"
              className="md:col-span-2 lg:col-span-1"
            >
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  Signature Series
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our most treasured pieces, selected for their exceptional beauty and historical significance.
                </p>
                <Button 
                  variant="outline" 
                  className="border-accent/50 text-accent hover:bg-accent/10 transition-all duration-300"
                >
                  View Details
                </Button>
              </div>
            </PhotoBox>

            <PhotoBox 
              title="Limited Edition" 
              label="RARE"
              variant="accent"
            >
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  Exclusive Finds
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  One-of-a-kind pieces that represent the pinnacle of artistic achievement and rarity.
                </p>
              </div>
            </PhotoBox>

            <PhotoBox 
              title="New Arrivals" 
              label="FRESH"
              variant="default"
            >
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  Latest Discoveries
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Recently acquired treasures waiting to find their perfect home with discerning collectors.
                </p>
              </div>
            </PhotoBox>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 py-12 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            &copy; 2024 Vintage Collections. Crafted with passion for timeless beauty.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;