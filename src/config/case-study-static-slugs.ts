/**
 * All case study URL slugs from Convex seed (`seed.ts` + `caseStudiesMissingSeed.ts`).
 * Used so `generateStaticParams` never returns [] when `output: "export"` is set — Next
 * requires a static path set for dynamic `[slug]` routes at dev/build time.
 */
export const CASE_STUDY_STATIC_SLUGS: readonly string[] = [
  "ticketrev-marketplace-startup-bubble",
  "navigreat",
  "playground",
  "cerebro",
  "dividend",
  "cadence",
  "bubble",
  "tfa",
  "002-sponsorships",
  "camphire",
  "consenna-hp-for-education-marketplace-no-code",
  "greener-corporation-no-code-erp",
  "inspo-airdev-no-code-app",
  "kidsbook-marketplace-app",
  "lawclick-marketplace-startup",
  "my-nft-alerts-web-platform-no-code",
  "resolis",
  "teach-for-america-no-code-crm",
  "thehair-app",
  "tributi-latin-american-turbo-tax-no-code",
] as const;
