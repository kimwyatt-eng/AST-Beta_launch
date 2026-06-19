import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© 2025 ArtSupplyTracker. Software for artists, made by an artist.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:Unsubscribe@artsupplytracker.com"
            className="text-secondary underline underline-offset-4 hover:opacity-80"
          >
            Unsubscribe
          </a>
          <a
            href="mailto:Beta@artsupplytracker.com"
            className="text-secondary underline underline-offset-4 hover:opacity-80"
          >
            Beta Support
          </a>
          <a
            href="mailto:kim.wyatt@artsupplytracker.com"
            className="inline-flex items-center justify-center rounded-md px-4 py-1.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #7C3CFF 0%, #00E6FF 100%)",
              boxShadow: "0 0 0 1px rgba(124,60,255,0.35), 0 4px 12px -6px rgba(0,230,255,0.5)",
            }}
          >
            Contact the founder
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
