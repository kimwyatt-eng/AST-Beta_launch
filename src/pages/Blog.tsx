import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import TrustFooter from "@/components/TrustFooter";
import Footer from "@/components/Footer";
import { publishedPosts } from "@/data/blogPosts";
import { panelClass, titleClass } from "@/lib/cardAccent";

export default function Blog() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {blogPosts.map((post, i) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className={`${panelClass(i)} p-6 block transition-transform hover:-translate-y-0.5`}
            >
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
