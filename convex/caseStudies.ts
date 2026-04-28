import { v } from "convex/values";
import { query, internalMutation } from "./_generated/server";

const caseStudyFields = {
  name: v.string(),
  slug: v.string(),
  draft: v.boolean(),
  archived: v.boolean(),
  companyUrl: v.optional(v.string()),
  thumbnailSummary: v.optional(v.string()),
  thumbnailImage: v.optional(v.string()),
  customerLogo: v.optional(v.string()),
  videoLink: v.optional(v.string()),
  filteringCategory: v.optional(v.string()),
  sortOrder: v.optional(v.number()),
  businessType: v.optional(v.string()),
  productType: v.optional(v.string()),
  timeline: v.optional(v.string()),
  keyResults: v.optional(v.string()),
  heroSummary: v.optional(v.string()),
  quoteImage: v.optional(v.string()),
  quote: v.optional(v.string()),
  quoteName: v.optional(v.string()),
  quoteRole: v.optional(v.string()),
  objective: v.optional(v.string()),
  solution: v.optional(v.string()),
  result: v.optional(v.string()),
  galleryImages: v.optional(v.array(v.string())),
  marketplace: v.optional(v.boolean()),
  saas: v.optional(v.boolean()),
  metaTitle: v.optional(v.string()),
  publishedOn: v.optional(v.string()),
  updatedOn: v.optional(v.string()),
};

export const listByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    const all = await ctx.db
      .query("caseStudies")
      .withIndex("by_filteringCategory_and_sortOrder", (q) =>
        q.eq("filteringCategory", args.category)
      )
      .take(200);
    return all
      .filter((r) => !r.draft && !r.archived)
      .sort((a, b) => (a.sortOrder ?? 9999) - (b.sortOrder ?? 9999));
  },
});

export const listAll = query({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("caseStudies").take(500);
    return all
      .filter((r) => !r.draft && !r.archived)
      .sort((a, b) => (a.sortOrder ?? 9999) - (b.sortOrder ?? 9999));
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("caseStudies")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();
  },
});

export const listSlugs = query({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("caseStudies").take(500);
    return all
      .filter((r) => !r.draft && !r.archived)
      .map((r) => r.slug);
  },
});

export const upsertMany = internalMutation({
  args: { items: v.array(v.object(caseStudyFields)) },
  handler: async (ctx, args) => {
    for (const item of args.items) {
      const existing = await ctx.db
        .query("caseStudies")
        .withIndex("by_slug", (q) => q.eq("slug", item.slug))
        .unique();
      if (existing) {
        await ctx.db.replace(existing._id, item);
      } else {
        await ctx.db.insert("caseStudies", item);
      }
    }
    return { count: args.items.length };
  },
});
