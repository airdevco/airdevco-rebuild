import { action } from "./_generated/server";
import { internal } from "./_generated/api";

const SEED_DATA = [
  // Startups
  {
    slug: "ticketrev",
    name: "How a buyer-first ticket marketplace startup quickly secured $1.1M in funding with Bubble.io",
    draft: false,
    archived: false,
    filteringCategory: "startups",
    sortOrder: 1,
    customerLogo:
      "https://cdn.prod.website-files.com/64e8a789efa42eaf8fe4d068/64e8b49e181622332d021cee_Logo.svg",
    thumbnailImage:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/64cc2c786d693702395f21b1_TicketRev-built-with-no-code-Airdev.jpg",
    thumbnailSummary:
      "Modernizing the ticket-buying experience with a buyer-first marketplace.",
    businessType: "Startup",
    productType: "Ticket marketplace",
    timeline: "2 months",
    keyResults: "$1.1M in pre-seed funding raised in 2 years",
    heroSummary:
      "TicketRev set out to flip the ticket marketplace model by letting buyers name their price. Airdev built their full platform on Bubble in just 2 months, helping them close a pre-seed round within 2 years of launch.",
  },
  {
    slug: "navigreat",
    name: "How NaviGreat built a digital hub for nonprofit organizations with Airdev's freelance Bubble developer in just 2 weeks",
    draft: false,
    archived: false,
    filteringCategory: "startups",
    sortOrder: 2,
    customerLogo:
      "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765319327038x377695290107660200/navigreat.png",
    thumbnailImage:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/6644f29802eba3647e2d8030_NaviGreat_Airdev_no_code.jpg",
    thumbnailSummary:
      "A social network and resource hub for nonprofits, built in 2 weeks.",
    businessType: "Nonprofit organization",
    productType: "Social network platform",
    timeline: "2 weeks",
    keyResults: "A fully functional app developed in just 2 weeks",
    heroSummary:
      "NaviGreat needed to connect nonprofit organizations with resources and each other. Airdev delivered a fully functional social network hub in just 2 weeks using Bubble.",
  },
  {
    slug: "playground",
    name: "How Airdev helped Playground IEP create a special education caseload management tool for schools",
    draft: false,
    archived: false,
    filteringCategory: "startups",
    sortOrder: 3,
    customerLogo:
      "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447131162x922542988700125000/playground.png",
    thumbnailImage:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/63b8851d340bdc19030b55b3_adam-winger-7fF0iei80AQ-unsplash%205-p-3200.jpg",
    thumbnailSummary:
      "Simplifying IEP caseload management for special education teachers.",
    businessType: "Startup",
    productType: "Internal management portal",
    timeline: "3 months",
    keyResults: "5 pilot schools signed up in less than 1 year",
    heroSummary:
      "Special education teachers spend hours managing IEP paperwork. Playground IEP partnered with Airdev to build a caseload management tool that drastically reduces administrative burden.",
  },
  {
    slug: "cerebro",
    name: "How a Mark Cuban-funded startup upgraded spreadsheets to a scaling product with no-code",
    draft: false,
    archived: false,
    filteringCategory: "startups",
    sortOrder: 4,
    customerLogo:
      "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447113960x777797950241704700/cerebro.png",
    thumbnailImage:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/64eced7d1af330bc878905e9_Cerebro_Airdev_no_code-app-build.jpg",
    thumbnailSummary:
      "Replacing spreadsheets with a scalable analytics platform backed by Mark Cuban.",
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
    name: "How we built a FinTech platform for Dividend Finance that scaled to process billions of dollars of loans",
    draft: false,
    archived: false,
    filteringCategory: "enterprises",
    sortOrder: 5,
    customerLogo:
      "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447523324x536489976697318800/dividend.png",
    thumbnailImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop",
    thumbnailSummary:
      "A FinTech platform that scaled to process billions in solar energy loans.",
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
    name: "How Airdev helped Cadence Translate connect Salesforce data to a custom no-code gig portal in just weeks",
    draft: false,
    archived: false,
    filteringCategory: "enterprises",
    sortOrder: 6,
    customerLogo:
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9ff1b72d8c1ec14d79f4_cadence.webp",
    thumbnailImage:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2940&auto=format&fit=crop",
    thumbnailSummary:
      "A Salesforce-integrated gig management platform built in weeks.",
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
    name: "How no-code leader Bubble turned to Airdev for a custom rebuild of their Developer Certification Platform... built on Bubble",
    draft: false,
    archived: false,
    filteringCategory: "enterprises",
    sortOrder: 7,
    customerLogo:
      "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766446287440x908698787583342700/bubble.io.png",
    thumbnailImage:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/665f5ab8b085585d4543d3ea_Certification---In-line-5.png",
    thumbnailSummary:
      "Bubble's own developer certification platform, rebuilt on Bubble by Airdev.",
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
    name: "How Airdev helped Teach for America build a custom no-code internal hub with Bubble to support corps members across their journey",
    draft: false,
    archived: false,
    filteringCategory: "enterprises",
    sortOrder: 8,
    customerLogo:
      "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447145612x608821623632928600/tfa.png",
    thumbnailImage:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635075d6712da824635efa1d_tfa%20(1).jpeg",
    thumbnailSummary:
      "An internal hub that supports thousands of corps members at scale.",
    businessType: "National nonprofit",
    productType: "Internal hub",
    timeline: "4 weeks",
    keyResults: "Ability to manage the organization at scale",
    heroSummary:
      "Teach for America supports thousands of corps members nationwide. Airdev built a custom internal hub on Bubble in 4 weeks that gives TFA the flexibility to manage their complex organization at scale.",
  },
];

export const run = action({
  args: {},
  handler: async (ctx) => {
    await ctx.runMutation(internal.caseStudies.upsertMany, {
      items: SEED_DATA,
    });
    return { seeded: SEED_DATA.length };
  },
});
