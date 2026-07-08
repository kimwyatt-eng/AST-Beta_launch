import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

export default function BlogStatus() {
  const rows = [...blogPosts].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  );
  const publishedCount = rows.filter((p) => !p.draft).length;
  const draftCount = rows.length - publishedCount;

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <Helmet>
        <title>Blog Post Status | ArtSupplyTracker</title>
        <meta name="description" content="Publish and indexable status for each ArtSupplyTracker blog post." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://artsupplytracker.com/blog/status" />
      </Helmet>

      <Navigation />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-8">
          <p className="hero-kicker text-sm font-semibold uppercase tracking-[0.18em] mb-3">
            Blog Diagnostics
          </p>
          <h1 className="hero-title text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Blog post status
          </h1>
          <p className="hero-body mt-4 text-lg text-foreground/85">
            {publishedCount} published · {draftCount} draft{draftCount === 1 ? "" : "s"} · {rows.length} total.
            Published posts are indexable by search engines; drafts are hidden from the blog index, sitemap, and RSS.
          </p>
        </header>

        <div className="ast-panel p-0 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-xs uppercase tracking-wider text-[#B7AFD8] border-b border-white/10">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Published</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Indexable</th>
                <th className="px-4 py-3">Link</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((post) => {
                const isPublished = !post.draft;
                return (
                  <tr key={post.slug} className="border-b border-white/5 last:border-0">
                    <td className="px-4 py-3 font-medium">{post.title}</td>
                    <td className="px-4 py-3 text-foreground/80 whitespace-nowrap">{post.publishedAt}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                          isPublished
                            ? "bg-emerald-500/15 text-emerald-300"
                            : "bg-amber-500/15 text-amber-300"
                        }`}
                      >
                        {isPublished ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                          isPublished
                            ? "bg-sky-500/15 text-sky-300"
                            : "bg-white/10 text-foreground/70"
                        }`}
                      >
                        {isPublished ? "Indexable" : "Noindex"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {isPublished ? (
                        <Link
                          to={`/blog/${post.slug}`}
                          className="text-secondary underline underline-offset-4 hover:opacity-80"
                        >
                          View →
                        </Link>
                      ) : (
                        <span className="text-foreground/50">Not live</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-foreground/70">
          Back to <Link to="/blog" className="text-secondary underline underline-offset-4">all articles</Link>.
        </p>
      </section>

      <Footer />
    </main>
  );
}
