import { action } from "./_generated/server";
import { internal } from "./_generated/api";
import { MISSING_CASE_STUDIES_SEED } from "./caseStudiesMissingSeed";

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
  {
    slug: "navigreat",
    name: "NaviGreat",
    draft: false,
    archived: false,
    filteringCategory: "startups",
    sortOrder: 2,
    customerLogo:
      "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765319327038x377695290107660200/navigreat.png",
    thumbnailImage:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/6644f29802eba3647e2d8030_NaviGreat_Airdev_no_code.jpg",
    thumbnailSummary:
      "How NaviGreat built a digital hub for nonprofit organizations with Airdev's freelance Bubble developer in just 2 weeks",
    businessType: "Nonprofit organization",
    productType: "Social network platform",
    timeline: "2 weeks",
    keyResults: "A fully functional app developed in just 2 weeks",
    heroSummary:
      "NaviGreat needed to connect nonprofit organizations with resources and each other. Airdev delivered a fully functional social network hub in just 2 weeks using Bubble.",
  },
  {
    slug: "playground",
    name: "Playground IEP",
    draft: false,
    archived: false,
    filteringCategory: "startups",
    sortOrder: 3,
    customerLogo:
      "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447131162x922542988700125000/playground.png",
    thumbnailImage:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/63b8851d340bdc19030b55b3_adam-winger-7fF0iei80AQ-unsplash%205-p-3200.jpg",
    thumbnailSummary:
      "How Airdev helped Playground IEP create a special education caseload management tool for schools",
    businessType: "Startup",
    productType: "Internal management portal",
    timeline: "3 months",
    keyResults: "5 pilot schools signed up in less than 1 year",
    heroSummary:
      "Special education teachers spend hours managing IEP paperwork. Playground IEP partnered with Airdev to build a caseload management tool that drastically reduces administrative burden.",
  },
  {
    slug: "cerebro",
    name: "Cerebro Sports",
    draft: false,
    archived: false,
    filteringCategory: "startups",
    sortOrder: 4,
    customerLogo:
      "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447113960x777797950241704700/cerebro.png",
    thumbnailImage:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/64eced7d1af330bc878905e9_Cerebro_Airdev_no_code-app-build.jpg",
    thumbnailSummary:
      "How a Mark Cuban-funded startup upgraded spreadsheets to a scaling product with no-code",
    businessType: "Startup",
    productType: "Analytics platform",
    timeline: "2 months",
    keyResults:
      "Pre-seed fundraising round led by Mark Cuban to help scale internal data operations",
    heroSummary:
      "Cerebro Sports was running their entire operation on spreadsheets. Airdev transformed their workflow into a scalable Bubble app, helping them land investment from Mark Cuban.",
  },
  // Enterprises
  {
    slug: "dividend",
    name: "Dividend Finance",
    draft: false,
    archived: false,
    filteringCategory: "enterprises",
    sortOrder: 5,
    customerLogo:
      "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447523324x536489976697318800/dividend.png",
    thumbnailImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop",
    thumbnailSummary:
      "How we built a FinTech platform for Dividend Finance that scaled to process billions of dollars of loans",
    businessType: "Enterprise",
    productType: "FinTech platform",
    timeline: "6 weeks",
    keyResults: "Billions of dollars of loans processed",
    heroSummary:
      "Dividend Finance needed a loan origination platform that could handle massive scale. Airdev built a robust FinTech solution in just 6 weeks that now processes billions of dollars in solar energy financing.",
    quote:
      "Airdev is a great solution for companies who are starting at the very earliest stage... But, they're not just for the brand new ideation and MVP types. Airdev has built a system that's enabled us to scale as well.",
    quoteName: "Phil Meachin",
    quoteRole: "SVP, Head of Product, Dividend Finance",
  },
  {
    slug: "cadence",
    name: "Cadence Translate",
    draft: false,
    archived: false,
    filteringCategory: "enterprises",
    sortOrder: 6,
    customerLogo:
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9ff1b72d8c1ec14d79f4_cadence.webp",
    thumbnailImage:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2940&auto=format&fit=crop",
    thumbnailSummary:
      "How Airdev helped Cadence Translate connect Salesforce data to a custom no-code gig portal in just weeks",
    businessType: "Enterprise",
    productType: "Salesforce-integrated gig management platform",
    timeline: "4 weeks",
    keyResults: "400% increase in jobs processed per month",
    heroSummary:
      "Cadence Translate needed to streamline their linguist network management. Airdev built a custom Bubble app connected to their Salesforce data in just 4 weeks, resulting in a 400% jump in jobs processed.",
    quote:
      "In just two weeks, AirDev created an elegantly streamlined version of our previous gig management platform, built on top of our Salesforce data. The result became an instant hit with our network of linguists.",
    quoteName: "Matt Conger",
    quoteRole: "CEO and Founder, Cadence Translate",
  },
  {
    slug: "bubble",
    name: "Bubble.io",
    draft: false,
    archived: false,
    filteringCategory: "enterprises",
    sortOrder: 7,
    customerLogo:
      "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766446287440x908698787583342700/bubble.io.png",
    thumbnailImage:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/665f5ab8b085585d4543d3ea_Certification---In-line-5.png",
    thumbnailSummary:
      "How no-code leader Bubble turned to Airdev for a custom rebuild of their Developer Certification Platform... built on Bubble",
    businessType: "SMB",
    productType: "Exam platform",
    timeline: "3 months",
    keyResults:
      "A more performant, reliable, and flexible exam for users and internal developers",
    heroSummary:
      "When Bubble needed to rebuild their developer certification platform, they turned to their top agency partner — Airdev. The result is a faster, more flexible exam experience built entirely on Bubble.",
  },
  {
    slug: "tfa",
    name: "Teach for America",
    draft: false,
    archived: false,
    filteringCategory: "enterprises",
    sortOrder: 8,
    customerLogo:
      "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447145612x608821623632928600/tfa.png",
    thumbnailImage:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635075d6712da824635efa1d_tfa%20(1).jpeg",
    thumbnailSummary:
      "How Airdev helped Teach for America build a custom no-code internal hub with Bubble to support corps members across their journey",
    businessType: "National nonprofit",
    productType: "Internal hub",
    timeline: "4 weeks",
    keyResults: "Ability to manage the organization at scale",
    heroSummary:
      "Teach for America supports thousands of corps members nationwide. Airdev built a custom internal hub on Bubble in 4 weeks that gives TFA the flexibility to manage their complex organization at scale.",
  },
  ...MISSING_CASE_STUDIES_SEED,
];

export const run = action({
  args: {},
  handler: async (ctx) => {
    await ctx.runMutation(internal.caseStudies.deleteBySlugs, {
      slugs: ["ticketrev"],
    });
    await ctx.runMutation(internal.caseStudies.upsertMany, {
      items: SEED_DATA,
    });
    return { seeded: SEED_DATA.length };
  },
});
