import { action } from "./_generated/server";
import { internal } from "./_generated/api";
import { BOLSTER_CASE_STUDY } from "./bolsterCaseStudySeed";
import { MISSING_CASE_STUDIES_SEED } from "./caseStudiesMissingSeed";
import { CORE_CASE_STUDIES_DETAILED } from "./coreCaseStudiesDetailedSeed";

const SEED_DATA = [
  // Startups
  {
    slug: "ticketrev-marketplace-startup-bubble",
    name: "TicketRev",
    draft: false,
    archived: false,
    filteringCategory: "startups",
    sortOrder: 1,
    metaTitle: "TicketRev Funded $1.1M for App Launched with Airdev",
    companyUrl: "https://www.ticketrev.com/",
    customerLogo:
      "https://cdn.prod.website-files.com/64e8a789efa42eaf8fe4d068/64e8b49e181622332d021cee_Logo.svg",
    thumbnailImage:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/64cc2c786d693702395f21b1_TicketRev-built-with-no-code-Airdev.jpg",
    thumbnailSummary:
      "How a buyer-first ticket marketplace startup quickly secured $1.1M in funding with Airdev",
    businessType: "Startup",
    productType: "Marketplace app",
    timeline: "2 months",
    keyResults: "$1.1M in pre-seed funding raised in 2 years",
    heroSummary: `<p>When he was just a teenager running his first business buying and selling sneakers, Jason Shatsky realized there was a much better way to transact and exchange in-demand goods with a limited quantity. This gave him an idea.</p><p>What if there was an event ticketing platform that reversed the traditional seller-first marketplace experience, instead allowing fans to submit bids for tickets to an event at their preferred price and seating location and ticket sellers to accept these requests? That is the concept behind TicketRev, a live event ticketing marketplace platform that helps fans find cheaper tickets to live events and sellers to liquidate unsold inventory.</p><p>With the help of Airdev, TicketRev was able to:</p><ul><li>Develop a fully functional platform in just 2 months, allowing for fast product-market testing, iterations, customer acquisition and revenue generation</li><li>Within 2 years, raise $1.1M in pre-seed funding from 500 Startups, Soma Capital, Groove Capital, Techstars, the Minnesota Twins, and various angel investors</li><li>Hire new team members to continue growing the business</li></ul>`,
    quote:
      "Airdev was the perfect solution because they could help me build something fast, and more importantly, affordable.",
    quoteName: "Jason Shatsky",
    quoteRole: "Co-Founder and CEO of TicketRev",
    quoteImage:
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6500af0242257e314ee8b4c2_jason.png",
    objective: `<p>As a first-time entrepreneur still in college, Shatsky did not have a ton of upfront capital to hire a traditional development team or technical co-founder to launch his idea. He needed a faster, cheaper alternative to build his marketplace idea.</p><p><em>&ldquo;Being a college student, my known options were to learn it myself, find someone who knows how to do it, or pay someone a lot of money. That is the notorious challenge of trying to get a product out into markets. It is expensive and/or really time consuming.&rdquo; &mdash; Jason Shatsky, Co-Founder and CEO of TicketRev</em></p>`,
    solution: `<p>While exploring his options, someone referred him to Airdev to help build the initial version of his product.</p><p><em>&ldquo;What was most attractive about Airdev was the cost, the quality, and the trust and communication aspect. The company is based in the United States and I had positive reviews from someone else who had worked with them. All of those things helped alleviate any concerns around quality and whether they could actually build what I wanted. Airdev was the perfect solution because they could help me build something fast, and more importantly, affordable.&rdquo; &mdash; Shatsky</em></p><p>TicketRev began working with Airdev and was able to complete the first version of the product in just two months.</p><p><em>&ldquo;The initial process started with getting on a call with the product expert. He took all the time that he needed to understand what it was that I was trying to build.&rdquo; &mdash; Shatsky</em></p><p>Based on the summary, Airdev proceeded to create a detailed scoping document of the project, which included product specifications, wireframes, and a quote. Within a few weeks, Airdev&apos;s designers and developers started building: first the initial build where the team developed and internally tested all features of the marketplace, then the review period where TicketRev inspected every product aspect against the confirmed scope.</p><p><em>&ldquo;What was great about working with Airdev was that they were able to separate what was a priority to build first from what we could add on later. While there were a ton of things I wanted to add early on, our mission was to build something cheap and fast that we could begin testing the market with.&rdquo; &mdash; Shatsky</em></p>`,
    result: `<p>Although the platform was ready to launch on schedule, TicketRev had to delay things due to COVID-19. But once the world opened back up and demand for live events returned, the platform officially went live &mdash; and with great success.</p><p><em>&ldquo;Because we stayed as lean as possible to see if what we were doing even worked and provided value to people, we were able to get TicketRev into the market fast and actually start testing it with real customers. This allowed us to add more features to the platform to further enhance the customer experience. Thanks to the success of this plan, we&apos;ve raised $1.1M in pre-seed funding!&rdquo; &mdash; Shatsky</em></p><p>With this new funding, TicketRev plans to continue to further develop its platform to reach more people with its buyer-focused model, and to make new hires across engineering and marketing as they reach more fans across the United States.</p>`,
  },
  ...CORE_CASE_STUDIES_DETAILED,
  ...MISSING_CASE_STUDIES_SEED,
  BOLSTER_CASE_STUDY,
];

export const run = action({
  args: {},
  handler: async (ctx) => {
    await ctx.runMutation(internal.caseStudies.deleteBySlugs, {
      slugs: [
        "ticketrev",
        "tfa",
        "playground",
        "cerebro",
        "cadence",
        "bubble",
        "dividend",
      ],
    });
    await ctx.runMutation(internal.caseStudies.upsertMany, {
      items: SEED_DATA,
    });
    return { seeded: SEED_DATA.length };
  },
});
