import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mvpOverview from "@/assets/mvp-01-overview.png";
import mvpProjects from "@/assets/mvp-02-projects.png";
import mvpWorkspace from "@/assets/mvp-03-workspace.png";
import mvpProjectsGrid from "@/assets/mvp-04-projects-grid.png";
import mvpProjectDetail from "@/assets/mvp-05-project-detail.png";
import mvpEditProject from "@/assets/mvp-06-edit-project.png";
import mvpStatus from "@/assets/mvp-07-status.png";
import mvpNewProject from "@/assets/mvp-08-new-project.png";
import mvpDemoNote from "@/assets/mvp-09-demo-note.png";

const slides = [
  { src: mvpOverview, alt: "ArtSupplyTracker Studio MVP — Today in the Studio overview with partner spotlight, art history, and community chat" },
  { src: mvpProjects, alt: "ArtSupplyTracker Studio MVP — Projects dashboard showing series, groups, and status counts" },
  { src: mvpWorkspace, alt: "ArtSupplyTracker Studio MVP — Creative workspace with project list and inspiration palettes" },
  { src: mvpProjectsGrid, alt: "ArtSupplyTracker Studio MVP — Projects grid with status badges and color palette inspiration" },
  { src: mvpProjectDetail, alt: "ArtSupplyTracker Studio MVP — Project detail view for Christmas In San Diego with notes and supplies" },
  { src: mvpEditProject, alt: "ArtSupplyTracker Studio MVP — Edit Project form with title, status, notes, and estimated budget" },
  { src: mvpStatus, alt: "ArtSupplyTracker Studio MVP — Project status selector showing Planned, In Progress, On Hold, Completed" },
  { src: mvpNewProject, alt: "ArtSupplyTracker Studio MVP — New Project creation form" },
  { src: mvpDemoNote, alt: "ArtSupplyTracker Studio MVP — Demo notes explaining that the demo saves locally until the beta launches" },
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

        <a
          href="https://artsupplytrackerstudio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Try the ArtSupplyTracker demo (opens in new tab)"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-secondary text-secondary-foreground px-3 py-1.5 text-xs sm:text-sm font-semibold shadow-lg hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
        >
          Try the DEMO →
        </a>

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
