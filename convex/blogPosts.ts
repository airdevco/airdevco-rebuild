import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

function publishedSortKey(doc: {
  publishedOn?: string;
  _creationTime: number;
}): number {
  if (doc.publishedOn) {
    const t = Date.parse(doc.publishedOn);
    if (!Number.isNaN(t)) return t;
  }
  return doc._creationTime;
}

type BlogFeedDoc = {
  featured?: boolean;
  publishedOn?: string;
  _creationTime: number;
};

/** Featured (`featured === true`) first, then newest `publishedOn` / `_creationTime` first. */
function compareBlogFeedOrder(a: BlogFeedDoc, b: BlogFeedDoc): number {
  const aFeat = a.featured === true ? 1 : 0;
  const bFeat = b.featured === true ? 1 : 0;
  if (aFeat !== bFeat) return bFeat - aFeat;
  return publishedSortKey(b) - publishedSortKey(a);
}

export const list = query({
  args: {},
  handler: async (ctx) => {
    const posts = await ctx.db
      .query("blogPosts")
      .filter((q) =>
        q.and(
          q.eq(q.field("draft"), false),
          q.eq(q.field("hidden"), false),
          q.eq(q.field("archived"), false)
        )
      )
      .collect();
    return [...posts].sort(compareBlogFeedOrder);
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    return await ctx.db
      .query("blogPosts")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .unique();
  },
});

export const listFeatured = query({
  args: {},
  handler: async (ctx) => {
    const posts = await ctx.db
      .query("blogPosts")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .filter((q) =>
        q.and(
          q.eq(q.field("draft"), false),
          q.eq(q.field("hidden"), false),
          q.eq(q.field("archived"), false)
        )
      )
      .collect();
    return [...posts].sort(
      (a, b) => publishedSortKey(b) - publishedSortKey(a)
    );
  },
});

export const insert = mutation({
  args: { slug: v.string(), data: v.any() },
  handler: async (ctx, { slug, data }) => {
    const existing = await ctx.db
      .query("blogPosts")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .unique();
    if (existing) return existing._id;
    return await ctx.db.insert("blogPosts", data);
  },
});
