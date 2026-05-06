"use client";

import { useLayoutEffect } from "react";
import { useQuery } from "convex/react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Navbar, Footer } from "@/components/landing";
import { ROUTES } from "@/config/routes";
import { api } from "../../convex/_generated/api";
import type { Doc } from "../../convex/_generated/dataModel";

const COLFAX_STYLES = `
  @font-face {
    font-family: 'Colfax';
    src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238405098x558032232358736100/Colfax-Regular.woff') format('woff');
    font-weight: 400; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: 'Colfax';
    src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238390337x266305410589744440/Colfax-Medium.woff') format('woff');
    font-weight: 500; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: 'Colfax';
    src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238365698x537474310193827300/Colfax-Bold.woff') format('woff');
    font-weight: 700; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: 'Colfax';
    src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238333088x971494408092793500/Colfax-Black.woff') format('woff');
    font-weight: 900; font-style: normal; font-display: swap;
  }
  .blog-prose h1, .blog-prose h2, .blog-prose h3, .blog-prose h4 {
    font-family: 'Colfax', sans-serif;
    font-weight: 700;
    color: #0A0A0A;
    margin-top: 2em;
    margin-bottom: 0.5em;
    line-height: 1.2;
  }
  .blog-prose h2 { font-size: 1.6rem; }
  .blog-prose h3 { font-size: 1.3rem; }
  .blog-prose p {
    font-size: 1.125rem;
    line-height: 1.8;
    color: #425466;
    margin-bottom: 1.5em;
  }
  .blog-prose ul, .blog-prose ol {
    margin-left: 1.5rem;
    margin-bottom: 1.5em;
    color: #425466;
    font-size: 1.125rem;
    line-height: 1.8;
  }
  .blog-prose li { margin-bottom: 0.4em; }
  .blog-prose ul { list-style-type: disc; }
  .blog-prose ol { list-style-type: decimal; }
  .blog-prose a { color: #1265EF; text-decoration: underline; }
  .blog-prose a:hover { color: #0A0A0A; }
  .blog-prose blockquote {
    border-left: 3px solid #1265EF;
    padding-left: 1.25rem;
    color: #425466;
    font-style: italic;
    margin: 2em 0;
  }
  .blog-prose hr { border-color: #E5E7EB; margin: 2.5em 0; }
  .blog-prose strong { color: #0A0A0A; font-weight: 700; }
  .blog-prose img { max-width: 100%; border-radius: 12px; margin: 2em 0; }
  .blog-prose code {
    background: #F3F4F6;
    padding: 0.15em 0.4em;
    border-radius: 4px;
    font-size: 0.9em;
    color: #1265EF;
  }
  .blog-prose pre {
    background: #0A0A0A;
    color: #E5E7EB;
    padding: 1.25rem;
    border-radius: 12px;
    overflow-x: auto;
    margin-bottom: 1.5em;
  }
  .blog-prose pre code { background: none; color: inherit; padding: 0; }
`;

function formatDate(dateStr?: string): string | null {
  if (!dateStr?.trim()) return null;
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function postImage(post: Doc<"blogPosts">): string | undefined {
  return post.featuredImage?.trim() || post.ogImage?.trim() || undefined;
}

function hashToSeed(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0 || 1;
}

/** Fisher–Yates shuffle with a seeded PRNG so filler order is stable per post but varies between posts. */
function shuffleDeterministic<T>(items: T[], seedStr: string): T[] {
  const arr = [...items];
  let state = hashToSeed(seedStr);
  const next = () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0xffffffff;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Up to 3 related posts: Convex `suggestedPosts` slugs first (order preserved),
 * then filler from other posts (deterministic “random” shuffle per post).
 */
function pickRelatedPosts(
  current: Doc<"blogPosts">,
  all: Doc<"blogPosts">[]
): Doc<"blogPosts">[] {
  const suggestedSlugs = current.suggestedPosts ?? [];
  const bySlug = new Map(all.map((p) => [p.slug, p]));
  const out: Doc<"blogPosts">[] = [];
  const seen = new Set<string>();

  for (const s of suggestedSlugs) {
    if (out.length >= 3) break;
    const p = bySlug.get(s);
    if (p && p._id !== current._id && !seen.has(p._id)) {
      out.push(p);
      seen.add(p._id);
    }
  }

  if (out.length >= 3) return out;

  const pool = all.filter((p) => p._id !== current._id && !seen.has(p._id));
  const shuffled = shuffleDeterministic(
    pool,
    `related:${current.slug}:${current._id}`
  );
  for (const p of shuffled) {
    if (out.length >= 3) break;
    out.push(p);
    seen.add(p._id);
  }
  return out;
}

/* ── Skeleton ── */
function BlogPostDetailSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Header skeleton */}
      <section className="pt-32 pb-8 lg:pt-48 lg:pb-12 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex gap-2 mb-8">
            <div className="h-4 w-14 bg-gray-200 rounded" />
            <div className="h-4 w-4 bg-gray-200 rounded shrink-0" />
            <div className="h-4 w-12 bg-gray-200 rounded" />
          </div>
          <div className="h-10 w-5/6 bg-gray-200 rounded mb-3" />
          <div className="h-10 w-3/5 bg-gray-200 rounded mb-6" />
          <div className="h-4 w-36 bg-gray-200 rounded" />
        </div>
      </section>
      {/* Featured image skeleton */}
      <section className="pb-10 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="rounded-2xl aspect-[16/9] bg-gray-200 w-full" />
        </div>
      </section>
      {/* Content skeleton */}
      <section className="pb-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6 space-y-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-4 bg-gray-200 rounded"
              style={{ width: i % 3 === 2 ? "72%" : "100%" }}
            />
          ))}
          <div className="pt-4" />
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`b${i}`}
              className="h-4 bg-gray-200 rounded"
              style={{ width: i % 4 === 3 ? "55%" : "100%" }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

/* ── Related card ── */
function RelatedCard({ post }: { post: Doc<"blogPosts"> }) {
  const img = postImage(post);
  return (
    <Link to={`/post/${post.slug}`} className="group flex flex-col h-full">
      <div className="relative mb-5 overflow-hidden rounded-2xl aspect-[16/10] bg-gray-100">
        {img && (
          <img
            src={img}
            alt={post.imageAltText?.trim() || post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <h3 className="text-xl font-bold text-[#1a1a1a] leading-tight group-hover:text-[#1265EF] transition-colors">
        {post.title}
      </h3>
    </Link>
  );
}

/* ── Main view ── */
export default function BlogPostDetail() {
  const { slug = "" } = useParams<{ slug: string }>();
  const post = useQuery(api.blogPosts.getBySlug, { slug });
  const allPosts = useQuery(api.blogPosts.list);

  /** Convex can briefly return the previous document after `slug` changes — avoid showing the wrong post. */
  const loading =
    post === undefined || (post !== null && post.slug !== slug);
  const notFound = post === null && !loading;

  const postReady = post !== null && post !== undefined && post.slug === slug;

  const relatedPosts =
    postReady && allPosts ? pickRelatedPosts(post, allPosts) : [];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const img = postReady ? postImage(post) : undefined;
  const date = postReady ? formatDate(post.publishedOn) : null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: COLFAX_STYLES }} />
      <div
        className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900"
        style={{ fontFamily: "'Colfax', sans-serif" }}
      >
        <Navbar />

        <main>
          {loading && <BlogPostDetailSkeleton />}

          {notFound && (
            <section className="pt-40 pb-24 bg-white text-center">
              <div className="max-w-[800px] mx-auto px-6">
                <p className="text-2xl font-bold text-[#0A0A0A] mb-4">Post not found</p>
                <p className="text-gray-500 mb-8">
                  This post may have been removed or the URL is incorrect.
                </p>
                <Link
                  to={ROUTES.BLOG}
                  className="inline-flex items-center gap-2 text-[#1265EF] font-medium hover:text-[#0A0A0A] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to blog
                </Link>
              </div>
            </section>
          )}

          {postReady && (
            <>
              {/* Hero header */}
              <section className="relative pt-32 pb-8 lg:pt-48 lg:pb-10 overflow-hidden bg-white">
                <div className="relative z-10 max-w-[800px] mx-auto px-6">
                  <nav
                    className="flex flex-wrap items-center gap-2 text-[15px] text-gray-400 mb-8"
                    aria-label="Breadcrumb"
                  >
                    <Link
                      to={ROUTES.BLOG}
                      className="hover:text-[#1265EF] transition-colors"
                    >
                      Blog
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
                    <span className="text-[#1a1a1a]">Post</span>
                  </nav>

                  <h1 className="text-[36px] lg:text-[52px] leading-[1.1] font-bold tracking-tight text-[#0A0A0A] mb-6">
                    {post.title}
                  </h1>

                  <div className="flex items-center gap-3 text-sm text-gray-500 flex-wrap">
                    {date && <span>{date}</span>}
                    {date && post.readTime && (
                      <span className="text-gray-300" aria-hidden>·</span>
                    )}
                    {post.readTime && (
                      <span>{post.readTime} min read</span>
                    )}
                  </div>
                </div>
              </section>

              {/* Featured image */}
              {img && (
                <section className="pb-10 bg-white">
                  <div className="max-w-[800px] mx-auto px-6">
                    <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-gray-100">
                      <img
                        src={img}
                        alt={post.imageAltText?.trim() || post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </section>
              )}

              {/* Article content */}
              <article className="pb-16 bg-white">
                <div className="max-w-[800px] mx-auto px-6">
                  {post.content?.trim() ? (
                    <div
                      className="blog-prose"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  ) : post.summary?.trim() ? (
                    <p className="text-[18px] lg:text-[20px] leading-relaxed text-[#425466]">
                      {post.summary}
                    </p>
                  ) : (
                    <p className="text-gray-400 italic">No content available.</p>
                  )}
                </div>
              </article>

              {/* You may also like — suggestedPosts first, then fillers to 3 when possible */}
              {relatedPosts.length > 0 && (
                <section className="pb-20 bg-white border-t border-gray-100">
                  <div className="max-w-[1200px] mx-auto px-6 pt-12">
                    <div className="text-[13px] font-bold text-[#4B5563] uppercase tracking-wider mb-8">
                      YOU MAY ALSO LIKE
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {relatedPosts.map((p) => (
                        <RelatedCard key={p._id} post={p} />
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}
