import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import TrustFooter from "@/components/TrustFooter";
import Footer from "@/components/Footer";
import { getPostBySlug } from "@/data/blogPosts";
import { renderPostContent } from "@/lib/renderPostContent";

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
      </main>
    );
  }

  const canonical = `https://artsupplytracker.com/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: "ArtSupplyTracker" },
    publisher: { "@type": "Organization", name: "ArtSupplyTracker" },
    mainEntityOfPage: canonical,
  };

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <Navigation />

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/blog" className="text-sm text-secondary hover:underline">
          ← All articles
        </Link>

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
            href="/#signup"
            className="ast-btn-primary mt-5 inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Join the Beta
          </a>
          <p className="mt-5 text-sm text-foreground/70">
            Keep reading: <Link to="/about" className="text-secondary underline underline-offset-4 hover:opacity-80">About ArtSupplyTracker</Link>{" · "}
            <Link to="/privacy" className="text-secondary underline underline-offset-4 hover:opacity-80">Privacy</Link>{" · "}
            <Link to="/blog" className="text-secondary underline underline-offset-4 hover:opacity-80">More studio guides</Link>
          </p>
        </div>
      </article>
      <TrustFooter />
    </main>
  );
}
