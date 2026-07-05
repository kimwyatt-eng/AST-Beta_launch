import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import Navigation from "@/components/Navigation";
import TrustFooter from "@/components/TrustFooter";
import Footer from "@/components/Footer";
import { blogPosts, publishedPosts } from "@/data/blogPosts";
import { panelClass, titleClass } from "@/lib/cardAccent";

const PREVIEW_STORAGE_KEY = "ast-blog-preview-mode";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Preview mode is enabled via ?preview=1 and persisted to localStorage so
  // review sessions survive navigation. ?preview=0 clears it.
  const previewParam = searchParams.get("preview");
  const previewMode = useMemo(() => {
    if (previewParam === "1") return true;
    if (previewParam === "0") return false;
    if (typeof window === "undefined") return true;
    const stored = window.localStorage.getItem(PREVIEW_STORAGE_KEY);
    // Default to review mode ON so drafts are visible while editing.
    return stored === null ? true : stored === "1";
  }, [previewParam]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(PREVIEW_STORAGE_KEY, previewMode ? "1" : "0");
  }, [previewMode]);

  const togglePreview = () => {
    const next = !previewMode;
    const params = new URLSearchParams(searchParams);
    params.set("preview", next ? "1" : "0");
    setSearchParams(params, { replace: true });
  };

  const visiblePosts = previewMode
    ? [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    : publishedPosts;
  const draftCount = blogPosts.length - publishedPosts.length;

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <Helmet>
        <title>Artist Studio Guides & Resources | ArtSupplyTracker Blog</title>
        <meta
          name="description"
          content="Practical guides for working artists: organizing art supplies, setting up your studio, cataloging artwork, and protecting your creative practice."
        />
        <link rel="canonical" href="https://artsupplytracker.com/blog" />
        <meta property="og:title" content="Artist Studio Guides | ArtSupplyTracker" />
        <meta
          property="og:description"
          content="Practical guides for working artists: organize supplies, set up your studio, catalog artwork."
        />
        <meta property="og:url" content="https://artsupplytracker.com/blog" />
        <meta property="og:type" content="website" />
        {previewMode && <meta name="robots" content="noindex, nofollow" />}
      </Helmet>

      <Navigation />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="hero-kicker text-sm font-semibold uppercase tracking-[0.18em] mb-3">
              Studio Notes
            </p>
            <h1 className="hero-title text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Guides for <span className="accent">working artists</span>
            </h1>
            <p className="hero-body mt-4 text-lg max-w-2xl">
              Practical, no-fluff guides on organizing supplies, setting up a studio, and protecting your art. New here? Read <Link to="/about" className="text-secondary underline underline-offset-4 hover:opacity-80">about ArtSupplyTracker</Link>.
            </p>
          </div>
          <a
            href="https://studiobeta.artsupplytracker.com/dashboard/"
            className="partner-cta inline-flex items-center justify-center rounded-full px-7 py-3.5 font-semibold text-white whitespace-nowrap shadow-lg transition-transform hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #7C3CFF 0%, #E91E8C 100%)",
              boxShadow: "0 10px 30px -10px rgba(233, 30, 140, 0.5)",
            }}
          >
            Join Early Access →
          </a>
        </header>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border/60 bg-foreground/[0.03] px-4 py-3">
          <div className="text-sm text-foreground/80">
            <span className="font-semibold text-foreground">Review mode</span>{" "}
            {previewMode ? (
              <>
                on — showing {visiblePosts.length} posts including {draftCount} draft
                {draftCount === 1 ? "" : "s"}.
              </>
            ) : (
              <>
                off — showing {publishedPosts.length} published post
                {publishedPosts.length === 1 ? "" : "s"}
                {draftCount > 0 && <> ({draftCount} draft{draftCount === 1 ? "" : "s"} hidden)</>}.
              </>
            )}
          </div>
          <button
            type="button"
            onClick={togglePreview}
            aria-pressed={previewMode}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
              previewMode
                ? "border-secondary bg-secondary/15 text-secondary"
                : "border-border/60 text-foreground/80 hover:text-foreground"
            }`}
          >
            <span
              aria-hidden="true"
              className={`inline-block h-2 w-2 rounded-full ${
                previewMode ? "bg-secondary" : "bg-foreground/40"
              }`}
            />
            {previewMode ? "Reviewing drafts" : "Show drafts"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {visiblePosts.map((post, i) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className={`${panelClass(i)} p-6 block transition-transform hover:-translate-y-0.5 relative`}
            >
              {post.draft && (
                <span className="absolute top-3 right-3 rounded-full border border-secondary/60 bg-secondary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-secondary">
                  Draft
                </span>
              )}
              <p className="text-xs uppercase tracking-wider text-[#B7AFD8]">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                · {post.readingMinutes} min read
              </p>
              <h2 className={`mt-3 text-xl md:text-2xl font-semibold ${titleClass(i)}`}>
                {post.title}
              </h2>
              <p className="mt-3 text-foreground/80">{post.description}</p>
              <span className="mt-4 inline-block text-secondary font-medium">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <TrustFooter />
      <Footer />
    </main>
  );
}
