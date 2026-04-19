import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mockupDashboard from "@/assets/mockup-dashboard-dark.png";
import mockupInventory from "@/assets/mockup-inventory.jpg";
import mockupProject from "@/assets/mockup-project.jpg";
import mockupPaletteCreator from "@/assets/mockup-palette-creator.png";
import mockupMercurialHarvest from "@/assets/mockup-mercurial-harvest.png";

const slides = [
  { src: mockupDashboard, alt: "Concept mockup of the ArtSupplyTracker studio dashboard with palettes and supply jars" },
  { src: mockupInventory, alt: "Concept mockup of the ArtSupplyTracker inventory overview with stock levels and storage map" },
  { src: mockupProject, alt: "Concept mockup of the ArtSupplyTracker project view showing a Mountain Sunset painting with task list" },
  { src: mockupPaletteCreator, alt: "Concept mockup of the ArtSupplyTracker digital palette creator with paint tubes, brushes, and pencils" },
  { src: mockupMercurialHarvest, alt: "Concept mockup of the ArtSupplyTracker project view for Mercurial Harvest showing supplies used and a timeline" },
];

const HeroSlideshow = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative rounded-2xl border-4 border-primary/50 bg-primary/5 p-2 sm:p-4 w-full mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.35)] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="ArtSupplyTracker concept mockup slideshow"
    >
      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-background/40">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          />
        ))}

        <button
          type="button"
          onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-sm border border-border hover:bg-secondary hover:text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => (i + 1) % slides.length)}
          aria-label="Next slide"
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-sm border border-border hover:bg-secondary hover:text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-6 bg-secondary" : "w-2.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlideshow;
