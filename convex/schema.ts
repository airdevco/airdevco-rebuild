import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  caseStudies: defineTable({
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
  })
    .index("by_slug", ["slug"])
    .index("by_category", ["filteringCategory"])
    .index("by_filteringCategory_and_sortOrder", ["filteringCategory", "sortOrder"]),
});
