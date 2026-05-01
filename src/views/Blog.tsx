"use client";

import { useEffect, useMemo, useState } from "react";
import { useQuery } from "convex/react";
import { Navbar, Footer } from "@/components/landing";
import Link from "next/link";
import { api } from "../../convex/_generated/api";
import type { Doc } from "../../convex/_generated/dataModel";

const PAGE_SIZE = 9;

function excerpt(post: Doc<"blogPosts">): string {
  if (post.summary?.trim()) return post.summary.trim();
  const raw = post.content?.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim() ?? "";
  if (raw.length <= 220) return raw;
  return `${raw.slice(0, 217)}…`;
}

function postImage(post: Doc<"blogPosts">): string | undefined {
  return post.featuredImage?.trim() || post.ogImage?.trim() || undefined;
}

function BlogPostSkeletonGrid() {
  return (
    <div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 animate-pulse"
      aria-busy
      aria-label="Loading blog posts"
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="flex flex-col h-full">
          <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[16/10] bg-gray-200" />
          <div className="flex flex-col flex-1 gap-3">
            <div className="h-7 w-[92%] rounded-md bg-gray-200" />
            <div className="h-7 w-[64%] rounded-md bg-gray-200" />
            <div className="mt-1 space-y-2.5">
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-4/5 rounded bg-gray-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const Blog = () => {
  const allPosts = useQuery(api.blogPosts.list);
  const [page, setPage] = useState(0);

  const maxPage = useMemo(() => {
    const n = allPosts?.length ?? 0;
    return n === 0 ? 0 : Math.max(0, Math.ceil(n / PAGE_SIZE) - 1);
  }, [allPosts?.length]);

  useEffect(() => {
    if (allPosts === undefined) return;
    setPage((p) => Math.min(p, maxPage));
  }, [allPosts, maxPage]);

  const visiblePosts = useMemo(() => {
    if (!allPosts?.length) return [];
    const start = page * PAGE_SIZE;
    return allPosts.slice(start, start + PAGE_SIZE);
  }, [allPosts, page]);

  const loading = allPosts === undefined;
  const empty = allPosts !== undefined && allPosts.length === 0;

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238405098x558032232358736100/Colfax-Regular.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238390337x266305410589744440/Colfax-Medium.woff') format('woff');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238365698x537474310193827300/Colfax-Bold.woff') format('woff');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238333088x971494408092793500/Colfax-Black.woff') format('woff');
            font-weight: 900;
            font-style: normal;
            font-display: swap;
          }
        `
      }} />
      <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900" style={{ fontFamily: "'Colfax', sans-serif" }}>
        <Navbar />

        <main>
          <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#F6F9FC]">
            <div className="relative z-10 max-w-[1200px] mx-auto px-6">
              <div className="text-left max-w-5xl">
                <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-4">
                  BLOG
                </div>
                <h1 className="text-[48px] lg:text-[64px] leading-[1.05] font-semibold tracking-[-0.03em] text-black">
                  Our thoughts about how no-code and AI are changing tech.
                </h1>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
              {loading && <BlogPostSkeletonGrid />}
              {empty && (
                <p className="text-center text-gray-500 text-lg">No published posts yet.</p>
              )}
              {!loading && !empty && (
                <>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {visiblePosts.map((post) => {
                      const img = postImage(post);
                      const href = `/post/${post.slug}`;
                      return (
                        <Link href={href} key={post._id} className="group flex flex-col h-full">
                          <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[16/10] bg-gray-100">
                            {img ? (
                              <img
                                src={img}
                                alt={post.imageAltText?.trim() || post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            ) : null}
                          </div>

                          <div className="flex flex-col flex-1">
                            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 leading-tight group-hover:text-[#1265EF] transition-colors">
                              {post.title}
                            </h3>

                            <p className="text-[16px] text-gray-600 leading-relaxed mb-6 flex-1 line-clamp-3">
                              {excerpt(post)}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {maxPage > 0 && (
                    <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
                      <button
                        type="button"
                        disabled={page <= 0}
                        onClick={() => {
                          setPage((p) => Math.max(0, p - 1));
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="text-[18px] font-medium text-[#1265EF] hover:text-[#1a1a1a] transition-colors disabled:opacity-40 disabled:pointer-events-none disabled:text-gray-400"
                      >
                        Previous
                      </button>
                      <span className="text-gray-300 select-none" aria-hidden>
                        |
                      </span>
                      <button
                        type="button"
                        disabled={page >= maxPage}
                        onClick={() => {
                          setPage((p) => Math.min(maxPage, p + 1));
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="text-[18px] font-medium text-[#1265EF] hover:text-[#1a1a1a] transition-colors disabled:opacity-40 disabled:pointer-events-none disabled:text-gray-400"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
