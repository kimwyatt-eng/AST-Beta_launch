import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import TrustFooter from "@/components/TrustFooter";
import Footer from "@/components/Footer";
import { getPostBySlug, getRelatedPosts, getAdjacentPosts } from "@/data/blogPosts";
import { renderPostContent } from "@/lib/renderPostContent";
import { panelClass, titleClass } from "@/lib/cardAccent";


export default function BlogPost() {
  const { slug = "" } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen w-full bg-background text-foreground">
        <Navigation />
        <section className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h1 className="text-3xl font-bold">Article not found</h1>
          <p className="mt-3 text-foreground/80">
            The article you're looking for may have moved.
          </p>
          <Link to="/blog" className="mt-6 inline-block text-secondary underline">
            Back to all articles
          </Link>
        </section>
        <TrustFooter />
        <Footer />
      </main>
    );
  }

  const canonical = `https://artsupplytracker.com/blog/${post.slug}`;
  const seoTitle = post.seoTitle ?? post.title;
  const seoDescription = post.seoDescription ?? post.description;
  const ogImage = post.ogImage ?? "https://artsupplytracker.com/og-image.jpg";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: seoDescription,
    image: ogImage,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: "ArtSupplyTracker" },
    publisher: { "@type": "Organization", name: "ArtSupplyTracker" },
    mainEntityOfPage: canonical,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://artsupplytracker.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://artsupplytracker.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: canonical },
    ],
  };


  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>


      <Navigation />

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <nav aria-label="Breadcrumb" className="text-sm">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-foreground/80">
            <li>
              <Link to="/" className="hover:text-secondary hover:underline">Home</Link>
            </li>
            <li aria-hidden="true" className="text-foreground/50">/</li>
            <li>
              <Link to="/blog" className="hover:text-secondary hover:underline">Blog</Link>
            </li>
            <li aria-hidden="true" className="text-foreground/50">/</li>
            <li aria-current="page" className="text-foreground/90 line-clamp-1 max-w-[60ch]">
              {post.title}
            </li>
          </ol>
        </nav>

        <header className="mt-6 mb-8">
          <p className="text-xs uppercase tracking-wider text-[#B7AFD8]">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
            · {post.readingMinutes} min read
          </p>
          <h1 className="hero-title mt-3 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
            {post.title}
          </h1>
          <p className="hero-body mt-4 text-lg text-foreground/85">{post.description}</p>
        </header>

        <div className="ast-panel p-6 md:p-8">{renderPostContent(post.content)}</div>

        <div className="mt-10 ast-panel card-violet p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold title-violet">
            Build the studio system that finally sticks
          </h2>
          <p className="mt-3 text-foreground/85">
            ArtSupplyTracker keeps your supplies, projects, and artwork records in one private place. Your art is yours — we never train AI on it.
          </p>
          <a
            href="https://studiobeta.artsupplytracker.com/dashboard"
            className="ast-btn-primary mt-5 inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Enter Studio Beta
          </a>
          <p className="mt-5 text-sm text-foreground/85">
            Keep reading: <Link to="/about" className="text-secondary underline underline-offset-4 hover:opacity-80">About ArtSupplyTracker</Link>{" · "}
            <Link to="/privacy" className="text-secondary underline underline-offset-4 hover:opacity-80">Privacy</Link>{" · "}
            <Link to="/blog" className="text-secondary underline underline-offset-4 hover:opacity-80">More studio guides</Link>
          </p>
        </div>
        {(() => {
          const related = getRelatedPosts(post, 3);
          if (related.length === 0) return null;
          return (
            <section aria-labelledby="related-posts" className="mt-12">
              <h2 id="related-posts" className="text-2xl md:text-3xl font-bold tracking-tight title-violet mb-6">
                Related reading
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {related.map((r, i) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className={`${panelClass(i)} p-5 block transition-transform hover:-translate-y-0.5`}
                  >
                    {r.category && (
                      <p className="text-xs uppercase tracking-wider text-[#B7AFD8]">
                        {r.category}
                      </p>
                    )}
                    <h3 className={`mt-2 text-lg font-semibold ${titleClass(i)}`}>
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/80 line-clamp-3">
                      {r.description}
                    </p>
                    <span className="mt-3 inline-block text-secondary text-sm font-medium">
                      Read article →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })()}
        {(() => {
          const { previous, next } = getAdjacentPosts(post);
          if (!previous && !next) return null;
          return (
            <nav
              aria-label="Blog post navigation"
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {previous ? (
                <Link
                  to={`/blog/${previous.slug}`}
                  rel="prev"
                  className="ast-panel p-5 block transition-transform hover:-translate-y-0.5 sm:text-left"
                >
                  <p className="text-xs uppercase tracking-wider text-[#B7AFD8]">
                    ← Previous post
                  </p>
                  <h3 className="mt-2 text-base md:text-lg font-semibold title-violet">
                    {previous.title}
                  </h3>
                </Link>
              ) : (
                <span aria-hidden="true" className="hidden sm:block" />
              )}
              {next ? (
                <Link
                  to={`/blog/${next.slug}`}
                  rel="next"
                  className="ast-panel p-5 block transition-transform hover:-translate-y-0.5 sm:text-right"
                >
                  <p className="text-xs uppercase tracking-wider text-[#B7AFD8]">
                    Next post →
                  </p>
                  <h3 className="mt-2 text-base md:text-lg font-semibold title-violet">
                    {next.title}
                  </h3>
                </Link>
              ) : (
                <span aria-hidden="true" className="hidden sm:block" />
              )}
            </nav>
          );
        })()}
      </article>
      <TrustFooter />
      <Footer />

    </main>
  );
}
