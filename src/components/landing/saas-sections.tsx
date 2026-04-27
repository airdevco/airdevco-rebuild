"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowsRightLeftIcon,
  ArrowPathIcon,
  BanknotesIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  CpuChipIcon,
  CreditCardIcon,
  DocumentCurrencyDollarIcon,
  DocumentTextIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PhotoIcon,
  QueueListIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SparklesIcon,
  Squares2X2Icon,
  SquaresPlusIcon,
  StarIcon,
  TagIcon,
  TruckIcon,
  UserCircleIcon,
  UserGroupIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { SampleProducts, type Product } from "@/components/landing/sample-products";

/** Matches index `Navbar` CTA + SaaS `Hero` primary button sizing */
const MARKETPLACE_PRIMARY_BTN =
  "bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none";

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const openLandingPricingPopup = () => {
  window.dispatchEvent(new CustomEvent("open-landing-pricing-popup"));
};

/** Hero + screenshot strip background (Webflow asset) */
const MARKETPLACE_HERO_BLUR_BG =
  "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d482ff67a3aac218170979_blurbg3.svg";

/** Top row, left-to-right: 3rd tile is Kidsbook — row height matches its intrinsic height at column width. */
const KIDSBOOK_HERO_SCREEN_INDEX = 2;

function viewportScreenshotMaxHeightPx(): number {
  if (typeof window === "undefined") return 560;
  return Math.min(560, window.innerHeight * 0.52);
}

const SCREENSHOT_IMAGES = [
  // Top-left to top-right, then bottom-left to bottom-right
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772585113659x667314515892083800/checkout.webp",
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772586305349x201337330678877920/iep.webp",
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772586741300x556158904197277900/postly.webp",
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772587304672x296188048024184100/onboarding.webp",
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772587812851x876454729909677400/flowline.webp",
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772588669920x914551009077430300/taxes.webp",
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772588533645x277504609261276960/clearpay.webp",
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772588816102x953832905394021100/forma.webp",
];

/** Hero — marketplace landing (airdev-marketplace.vercel.app) */
export function MarketplaceLandingHero() {
  const [unifiedShotHeight, setUnifiedShotHeight] = useState<number | null>(null);
  const kidsbookImgRef = useRef<HTMLImageElement>(null);

  const recalcShotHeightFromKidsbook = useCallback(() => {
    const img = kidsbookImgRef.current;
    if (!img?.naturalWidth) return;
    const figure = img.parentElement;
    if (!figure) return;
    const w = figure.getBoundingClientRect().width;
    if (w <= 0) return;
    const intrinsicH = (img.naturalHeight / img.naturalWidth) * w;
    const H = Math.min(intrinsicH, viewportScreenshotMaxHeightPx());
    setUnifiedShotHeight((prev) => {
      const next = Math.max(1, Math.round(H));
      return prev === next ? prev : next;
    });
  }, []);

  useEffect(() => {
    const img = kidsbookImgRef.current;
    if (!img) return;
    const figure = img.parentElement;
    if (!figure) return;

    const ro = new ResizeObserver(() => recalcShotHeightFromKidsbook());
    ro.observe(figure);
    window.addEventListener("resize", recalcShotHeightFromKidsbook);
    if (img.complete) recalcShotHeightFromKidsbook();

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recalcShotHeightFromKidsbook);
    };
  }, [recalcShotHeightFromKidsbook]);

  return (
    <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-16 overflow-hidden bg-white scroll-mt-[88px]">
      {/* Full-bleed blur mesh behind headline and screenshot grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-white"
        aria-hidden
        style={{
          backgroundImage: `url(${MARKETPLACE_HERO_BLUR_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Top + bottom fades to white: soft under header; blend into logo ticker below */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        aria-hidden
        style={{
          background: `
            linear-gradient(
              to top,
              #ffffff 0%,
              rgba(255, 255, 255, 0.97) 5%,
              rgba(255, 255, 255, 0.88) 12%,
              rgba(255, 255, 255, 0.58) 24%,
              rgba(255, 255, 255, 0.28) 38%,
              rgba(255, 255, 255, 0.08) 50%,
              transparent 64%
            ),
            linear-gradient(
              to bottom,
              #ffffff 0%,
              rgba(255, 255, 255, 0.98) 4%,
              rgba(255, 255, 255, 0.9) 10%,
              rgba(255, 255, 255, 0.72) 18%,
              rgba(255, 255, 255, 0.42) 30%,
              rgba(255, 255, 255, 0.15) 44%,
              transparent 62%
            )
          `,
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4.5rem] 2xl:text-[5rem] leading-[1.05] font-semibold tracking-[-0.03em] text-gray-900 mb-6 sm:mb-8">
            The smarter way to launch your SaaS startup
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            We use a new approach to help entrepreneurs launch SaaS products, for a fraction of cost and time of
            traditional development.
          </p>

          <div className="mt-8">
            <Button type="button" className={MARKETPLACE_PRIMARY_BTN} onClick={openLandingPricingPopup}>
              Get started
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-14 w-full max-w-[min(1920px,calc(100vw-1.25rem))] 2xl:max-w-[min(2000px,calc(100vw-2rem))] mx-auto px-3 sm:px-5 lg:px-8">
        <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {SCREENSHOT_IMAGES.map((src, i) => (
            <figure
              key={src}
              className="rounded-[8px] overflow-hidden border border-slate-200/80 bg-slate-50/70 shadow-sm min-w-0 block"
              style={unifiedShotHeight ? { height: unifiedShotHeight } : undefined}
            >
              <img
                ref={i === KIDSBOOK_HERO_SCREEN_INDEX ? kidsbookImgRef : undefined}
                src={src}
                alt={`Marketplace screenshot ${i + 1}`}
                onLoad={i === KIDSBOOK_HERO_SCREEN_INDEX ? recalcShotHeightFromKidsbook : undefined}
                className={
                  unifiedShotHeight
                    ? "w-full h-full min-h-0 object-cover object-top"
                    : "w-full h-auto max-h-[min(560px,52vh)] object-contain object-top"
                }
                loading={i < 2 ? "eager" : "lazy"}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MarketplaceScreensRow() {
  return (
    <section className="py-10 bg-[#f6f9fc] border-y border-gray-100 overflow-hidden">
      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-2 px-6 snap-x snap-mandatory scrollbar-thin max-w-[100vw]">
        {SCREENSHOT_IMAGES.map((src, i) => (
          <figure
            key={i}
            className="shrink-0 w-[min(85vw,420px)] snap-center rounded-xl overflow-hidden shadow-lg border border-gray-200/80 bg-white"
          >
            <img
              src={src}
              alt={`Marketplace product screenshot ${i + 1}`}
              className="w-full h-[240px] md:h-[280px] object-cover"
              loading={i < 2 ? "eager" : "lazy"}
            />
            <figcaption className="text-center text-sm text-gray-500 py-2 bg-white">
              Screenshot {i + 1}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

type ComparisonRow = {
  label: string;
  airdev: string;
  saas: string;
  traditional: string;
  /** Renders ✓/× prefix before the text */
  statusIcons?: boolean;
};

const COMPARISON_ROWS: ComparisonRow[] = [
  { label: "Timeline to launch", airdev: "Weeks to months", saas: "Days to weeks", traditional: "6-18+ months" },
  { label: "Upfront cost", airdev: "$$", saas: "$", traditional: "$$$$" },
  { label: "You own the Platform", airdev: "Yes", saas: "No", traditional: "Yes", statusIcons: true },
  { label: "Customization", airdev: "Unlimited", saas: "Limited to their features", traditional: "Unlimited" },
  { label: "Ongoing fees", airdev: "Maintenance only", saas: "License fees that go up with usage", traditional: "Maintenance only" },
  { label: "Vendor lock-in", airdev: "None", saas: "High", traditional: "None" },
  { label: "Scales with you", airdev: "Yes", saas: "Until you hit their limits", traditional: "Yes" },
];

/** Matches marketplace Pricing / Case Studies section surface */
const WHY_AIRDEV_BG = "#ffffff";
/** Airdev comparison column */
const AIRDEV_COL_BG = "#ECF2FB";
const ROW_DIVIDER = "border-b border-[#E2E8F0]";

/** Column header: 20px / 28px lh */
const thHeaderBase = "text-[20px] leading-[28px] font-semibold py-5 md:py-6 px-5 md:px-6 align-middle";

/** Body cells: 16px / 24px lh; extra vertical padding per row */
const tdBodyCls = "py-5 md:py-6 px-5 md:px-6 text-[16px] leading-[24px] align-middle";

function CellContent({
  value,
  statusIcons,
  isAirdev,
}: {
  value: string;
  statusIcons: boolean;
  isAirdev: boolean;
}) {
  const textCls = isAirdev
    ? "font-medium text-[#111827] text-[16px] leading-[24px]"
    : "font-normal text-[#425466] text-[16px] leading-[24px]";

  if (!statusIcons) return <span className={textCls}>{value}</span>;

  const positive = value === "Yes";
  return (
    <span className={`inline-flex items-center gap-2 justify-center ${textCls}`}>
      {positive ? (
        <CheckIcon className="h-4 w-4 shrink-0 text-inherit" aria-hidden />
      ) : (
        <XMarkIcon className="h-4 w-4 shrink-0 text-inherit" aria-hidden />
      )}
      <span className="relative top-px">{value}</span>
    </span>
  );
}

export function MarketplaceWhyAirdev() {
  const lastIdx = COMPARISON_ROWS.length - 1;
  return (
    <section id="why-airdev" className="scroll-mt-[88px] py-20 md:py-28 bg-white" style={{ backgroundColor: WHY_AIRDEV_BG }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Same label / title / description pattern as MarketplacePricingSection (centered) */}
        <p className="text-[#1e3a8a] font-semibold tracking-wide uppercase text-[15px] mb-3 text-center">Why Airdev</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A2540] tracking-tight mb-4 text-center">
          Fast and flexible
        </h2>
        <p className="text-lg text-[#425466] text-center max-w-2xl mx-auto mb-12 md:mb-14 leading-relaxed">
          SaaS platforms are fast but inflexible. Traditional dev gives you control but takes forever. We give you
          both.
        </p>

        <div className="overflow-x-auto w-full max-w-[1180px] mx-auto">
          <table className="w-full min-w-[720px] border-separate border-spacing-0">
            <thead>
              <tr>
                <th
                  className={`${ROW_DIVIDER} ${thHeaderBase} text-left w-[26%]`}
                  style={{ backgroundColor: WHY_AIRDEV_BG }}
                  scope="col"
                />
                <th
                  className={`${thHeaderBase} text-center text-[#1265EF] border-b border-[#E2E8F0] rounded-t-2xl`}
                  style={{ backgroundColor: AIRDEV_COL_BG }}
                  scope="col"
                >
                  Airdev
                </th>
                <th
                  className={`${ROW_DIVIDER} ${thHeaderBase} text-center text-[#0A2540]`}
                  style={{ backgroundColor: WHY_AIRDEV_BG }}
                  scope="col"
                >
                  SaaS Platforms
                </th>
                <th
                  className={`${ROW_DIVIDER} ${thHeaderBase} text-center text-[#0A2540]`}
                  style={{ backgroundColor: WHY_AIRDEV_BG }}
                  scope="col"
                >
                  Traditional Dev
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, idx) => {
                const isLast = idx === lastIdx;
                const divCls = isLast ? "" : ROW_DIVIDER;
                return (
                  <tr key={row.label}>
                    <td
                      className={`${divCls} ${tdBodyCls} text-left font-medium text-[#0A2540]`}
                      style={{ backgroundColor: WHY_AIRDEV_BG }}
                    >
                      {row.label}
                    </td>
                    <td
                      className={`${divCls} ${tdBodyCls} text-center ${isLast ? "rounded-b-2xl" : ""}`}
                      style={{ backgroundColor: AIRDEV_COL_BG }}
                    >
                      <CellContent value={row.airdev} statusIcons={!!row.statusIcons} isAirdev />
                    </td>
                    <td
                      className={`${divCls} ${tdBodyCls} text-center`}
                      style={{ backgroundColor: WHY_AIRDEV_BG }}
                    >
                      <CellContent value={row.saas} statusIcons={!!row.statusIcons} isAirdev={false} />
                    </td>
                    <td
                      className={`${divCls} ${tdBodyCls} text-center`}
                      style={{ backgroundColor: WHY_AIRDEV_BG }}
                    >
                      <CellContent value={row.traditional} statusIcons={!!row.statusIcons} isAirdev={false} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/**
 * Copy aligned with https://airdev-marketplace.vercel.app/ marketplace types section.
 * Tab labels omit "Marketplaces"; card headings match the reference (e.g. "Rental Marketplaces").
 */
const MARKETPLACE_TYPES_PRODUCTS: Product[] = [
  {
    id: "user-role-management",
    name: "User & Role Management",
    cardHeading: "User & Role Management",
    description: "Allow users to create accounts, manage profiles, and assign roles with various permission levels.",
    icon: UserCircleIcon,
    color: "#1265EF",
    features: [
      { name: "User registration and profile management", icon: UserCircleIcon },
      { name: "Role-based access control (RBAC)", icon: LockClosedIcon },
      { name: "Custom permission levels per role", icon: ShieldCheckIcon },
      { name: "Invite and onboard team members", icon: UserGroupIcon },
      { name: "Audit logs for user actions", icon: DocumentTextIcon },
    ],
  },
  {
    id: "subscriptions-billing",
    name: "Subscriptions & Billing",
    cardHeading: "Subscriptions & Billing",
    description:
      "Enable recurring or one-time payments for subscription plans, with automated billing and invoicing.",
    icon: CreditCardIcon,
    color: "#06b6d4",
    features: [
      { name: "Recurring and one-time payment flows", icon: CreditCardIcon },
      { name: "Subscription plan management", icon: ClipboardDocumentListIcon },
      { name: "Automated invoicing and receipts", icon: DocumentCurrencyDollarIcon },
      { name: "Upgrade, downgrade, and cancel flows", icon: ArrowsRightLeftIcon },
      { name: "Trial periods and proration", icon: CalendarIcon },
    ],
  },
  {
    id: "ai-automation",
    name: "AI & Automation",
    cardHeading: "AI & Automation",
    description:
      "Automate tasks and provide intelligent features, such as predictive analytics or AI-driven suggestions.",
    icon: CpuChipIcon,
    color: "#a855f7",
    features: [
      { name: "Predictive analytics and insights", icon: QueueListIcon },
      { name: "AI-driven suggestions and recommendations", icon: SparklesIcon },
      { name: "Workflow and task automation", icon: ArrowPathIcon },
      { name: "Smart defaults and personalization", icon: UserCircleIcon },
      { name: "Integration with LLMs and AI APIs", icon: CpuChipIcon },
    ],
  },
  {
    id: "notifications-alerts",
    name: "Notifications & Alerts",
    cardHeading: "Notifications & Alerts",
    description:
      "Send in-app, email, or SMS notifications and alerts for key events, updates, or deadlines.",
    icon: ChatBubbleLeftRightIcon,
    color: "#10b981",
    features: [
      { name: "In-app notification center", icon: ChatBubbleLeftRightIcon },
      { name: "Email and SMS delivery", icon: DocumentTextIcon },
      { name: "User preferences and digest settings", icon: QueueListIcon },
      { name: "Event-triggered and scheduled alerts", icon: CalendarIcon },
      { name: "Read/unread and action tracking", icon: ClipboardDocumentListIcon },
    ],
  },
  {
    id: "sso",
    name: "Single Sign-On (SSO)",
    cardHeading: "Single Sign-On (SSO)",
    description:
      "Streamline authentication by allowing users to log in with existing credentials from Google, Okta, or other identity providers.",
    icon: LockClosedIcon,
    color: "#f59e0b",
    features: [
      { name: "Google, Microsoft, and social login", icon: UserCircleIcon },
      { name: "Okta, Auth0, and enterprise IdPs", icon: BuildingOffice2Icon },
      { name: "Centralized identity and session management", icon: LockClosedIcon },
      { name: "Just-in-time (JIT) user provisioning", icon: SparklesIcon },
      { name: "Secure token handling and refresh", icon: ShieldCheckIcon },
    ],
  },
  {
    id: "collaboration-sharing",
    name: "Collaboration & Sharing",
    cardHeading: "Collaboration & Sharing",
    description:
      "Facilitate real-time collaboration, file sharing, and team-based workflows within the app.",
    icon: UserGroupIcon,
    color: "#ec4899",
    features: [
      { name: "Real-time co-editing and presence", icon: UserGroupIcon },
      { name: "File and document sharing", icon: DocumentTextIcon },
      { name: "Team workspaces and permissions", icon: BuildingOffice2Icon },
      { name: "Comments, mentions, and activity feed", icon: ChatBubbleLeftRightIcon },
      { name: "Shared links and access control", icon: LockClosedIcon },
    ],
  },
  {
    id: "dashboards-analytics",
    name: "Dashboards & Analytics",
    cardHeading: "Dashboards & Analytics",
    description:
      "Present real-time metrics and insights in customizable dashboards for data-driven decisions.",
    icon: Squares2X2Icon,
    color: "#0ea5e9",
    features: [
      { name: "Customizable dashboards and widgets", icon: Squares2X2Icon },
      { name: "Real-time metrics and KPIs", icon: QueueListIcon },
      { name: "Charts, tables, and visualizations", icon: ClipboardDocumentListIcon },
      { name: "Filters, date ranges, and drill-downs", icon: MagnifyingGlassIcon },
      { name: "Export and scheduled reports", icon: DocumentTextIcon },
    ],
  },
  {
    id: "integrations-apis",
    name: "Integrations & APIs",
    cardHeading: "Integrations & APIs",
    description:
      "Connect with third-party services (e.g., CRM, payment processors) via seamless API integrations.",
    icon: ArrowsRightLeftIcon,
    color: "#8b5cf6",
    features: [
      { name: "REST and webhook integrations", icon: ArrowsRightLeftIcon },
      { name: "CRM, payments, and email providers", icon: CreditCardIcon },
      { name: "Custom API keys and OAuth flows", icon: LockClosedIcon },
      { name: "Sync and mapping configuration", icon: ArrowPathIcon },
      { name: "Error handling and retry logic", icon: ShieldCheckIcon },
    ],
  },
];

export function MarketplaceTypesSection() {
  return (
    <div id="marketplace-types" className="scroll-mt-[88px]">
      <SampleProducts
        bgColor="#F6F9FC"
        products={MARKETPLACE_TYPES_PRODUCTS}
        label="COMMON FEATURES"
        title="SaaS features we specialize in"
        description="From user management to billing, AI, and integrations-we build the core capabilities that make modern SaaS products work. Choose what you need and we'll implement it."
        leftColumnClassName="lg:col-span-4"
        rightColumnClassName="lg:col-span-8"
      />
    </div>
  );
}

const LAUNCHPAD_BULLETS = [
  "You own it, no license fees",
  "A lean team to get you started",
  "AI-powered scoping to define your marketplace and get a quote",
  "Base features include search, payments, reviews, and more",
  "Standard UX/UI with your colors, logo, and branding applied",
  "Customizations and add-ons based on what your marketplace needs",
];

const AGENCY_BULLETS = [
  "You own it, no license fees",
  "A full team of product, design, and development experts",
  "Custom discovery and scoping process",
  "Strategic input on marketplace model and mechanics",
  "Custom UX/UI design",
  "Complex or unique workflows",
];

export const PRICING_PLANS = [
  {
    name: "Express",
    price: "$5k+",
    description:
      "The fastest path from idea to shipped product. AI drives the process end to end, with human experts in product, design, and engineering involved at every key stage to ensure quality.",
    bullets: LAUNCHPAD_BULLETS,
    buttonLabel: "Get an instant quote",
  },
  {
    name: "Agency",
    price: "$20k+",
    description:
      "The right fit for complex products or when you need experienced hands guiding the process. Dedicated experts work with you every step of the way to shape, manage, and build the right product.",
    bullets: AGENCY_BULLETS,
    buttonLabel: "Talk to us",
  },
];

export function MarketplacePricingSection() {
  return (
    <section id="pricing" className="scroll-mt-[88px] py-20 md:py-28 bg-[#F6F9FC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[#1e3a8a] font-semibold tracking-wide uppercase text-[15px] mb-3 text-center">
          Pricing
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A2540] tracking-tight mb-4 text-center">
          Choose your path
        </h2>
        <p className="text-lg text-[#425466] text-center max-w-2xl mx-auto mb-12 md:mb-14 leading-relaxed">
          Start lean or go all-in. Scale up anytime.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden p-8 md:p-10 flex flex-col"
            >
              <h3 className="text-[24px] leading-[32px] font-semibold text-[#0A2540] mb-3">{plan.name}</h3>
              <p className="text-[48px] leading-[48px] font-bold text-[#0A2540] mb-3">
                {plan.price}
              </p>
                            <p className="text-[#425466] text-[16px] leading-[24px]">{plan.description}</p>
              <hr className="border-slate-200 my-6" />
              <ul className="space-y-4 flex-1 mb-8">
                {plan.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[#425466] text-[15px] leading-[24px]">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#EEF2FF] flex items-center justify-center mt-[2px]">
                      <svg width="13" height="10" viewBox="0 0 13 10" fill="none" aria-hidden="true">
                        <path
                          d="M1.5 5L5 8.5L11.5 1.5"
                          stroke="#1265EF"
                          strokeWidth="1.15"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="pt-[3px] text-[#425466]">{b}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={scrollToContact}
                className="w-full rounded-xl bg-[#121826] text-white font-medium text-[16px] leading-[24px] py-4 hover:bg-[#1a2438] transition-colors"
              >
                {plan.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SAAS_MARKETPLACE_CASE_SLIDES_RAW = [
  {
    id: "bubble",
    company: "Tributi",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766777935802x342363134894177340/tributi.png",
    logoText: "VC funded",
    heading:
      "How Airdev helped Tributi build a tax management software for Latin America in just 5 weeks using the no-code tool Bubble",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/63507625712da8bcd35f011e_tributi.jpeg",
    imageTitle:
      "How Airdev helped Tributi build a tax management software for Latin America in just 5 weeks using the no-code tool Bubble",
    customFields: [
      { label: "Business type", value: "SMB", color: "#635bff" },
      { label: "Product type", value: "Tax management software", color: "#00d4ff" },
      { label: "Timeline", value: "5 weeks", color: "#a960ee" },
      {
        label: "Key results",
        value: "Supported 20k daily users and launched a successful YCombinator bid",
        color: "#ff6b6b",
      },
    ],
  },
  {
    id: "cerebro",
    company: "Cerebro Sports",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447113960x777797950241704700/cerebro.png",
    logoText: "Mark Cuban-funded",
    heading: "How a Mark Cuban-funded startup upgraded spreadsheets to a scaling product with no-code",
    description: "",
    image:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/64eced7d1af330bc878905e9_Cerebro_Airdev_no_code-app-build.jpg",
    imageTitle: "How a Mark Cuban-funded startup upgraded spreadsheets to a scaling product with no-code",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "Analytics Platform", color: "#00d4ff" },
      { label: "Timeline", value: "2 months", color: "#a960ee" },
      {
        label: "Key results",
        value: "A pre-seed fundraising round led by Mark Cuban to help scale internal data operations",
        color: "#ff6b6b",
      },
    ],
  },
  {
    id: "playground",
    company: "My NFT Alerts",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766777953165x204069526181363420/mynftalerts.png",
    logoText: "",
    heading:
      "How Airdev helped My NFT Alerts build a custom no-code platform on Bubble for NFT holders to track, trade and set personalized floor price alerts",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635079364569b5471f0fc12d_nft.jpeg",
    imageTitle:
      "How Airdev helped My NFT Alerts build a custom no-code platform on Bubble for NFT holders to track, trade and set personalized floor price alerts",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "Portfolio tracking app", color: "#00d4ff" },
      { label: "Timeline", value: "6 weeks", color: "#a960ee" },
      { label: "Key results", value: "Rapid user adoption", color: "#ff6b6b" },
    ],
  },
];

export const SAAS_MARKETPLACE_CASE_SLIDES = SAAS_MARKETPLACE_CASE_SLIDES_RAW.map((slide) => ({
  ...slide,
  customFields: slide.customFields.filter((field) => field.label !== "Key results"),
}));
