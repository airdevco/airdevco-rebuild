/**
 * Canonical slugs for Convex + `/case-studies/:slug` (single source of truth).
 */
export const CASE_STUDY_SLUG = {
  ticketrev: "ticketrev-marketplace-startup-bubble",
  navigreat: "navigreat",
  playground: "playground-iep-special-ed-no-code-tool",
  cerebro: "cerebro-sports-analytics-platform-no-code",
  dividend: "dividend-finance-fintech-mvp-product",
  bolster: "bolster-custom-web-app-bubble",
  cadence: "cadence-translate-internal-tool-salesforce",
  bubble: "bubble-io-developer-certification-exam-rebuild",
  tfa: "teach-for-america-no-code-crm",
  consenna: "consenna-hp-for-education-marketplace-no-code",
} as const;

/**
 * All case study URL slugs from Convex seed (`seed.ts` + `caseStudiesMissingSeed.ts`).
 * Used so `generateStaticParams` never returns [] when `output: "export"` is set — Next
 * requires a static path set for dynamic `[slug]` routes at dev/build time.
 */
export const CASE_STUDY_STATIC_SLUGS: readonly string[] = [
  "ticketrev-marketplace-startup-bubble",
  "navigreat",
  "playground-iep-special-ed-no-code-tool",
  "cerebro-sports-analytics-platform-no-code",
  "dividend-finance-fintech-mvp-product",
  "bolster-custom-web-app-bubble",
  "cadence-translate-internal-tool-salesforce",
  "bubble-io-developer-certification-exam-rebuild",
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
