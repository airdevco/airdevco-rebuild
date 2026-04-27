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
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1768942292841x753883318458439700/docseek.webp",
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769431327914x326072329645070460/craftly2.webp",
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769446581327x991888232717732400/kidsbook2.webp",
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769444704254x747992525882827000/learnmate.webp",
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769446640637x420605172794157100/ch.webp",
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769645813496x468485436757218600/hire2.webp",
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769645304714x406176510810474200/listing1.webp",
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769647224654x585966976925444100/events2.webp",
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
            The smarter way to launch your marketplace
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            We use a new approach to help startups and enterprises launch two-sided marketplaces that are 100%
            flexible, for a small fraction of the cost of building from scratch.
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
const SECTION_BG = "#F6F9FC";
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
    <section id="why-airdev" className="scroll-mt-[88px] py-20 md:py-28" style={{ backgroundColor: SECTION_BG }}>
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
                  style={{ backgroundColor: SECTION_BG }}
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
                  style={{ backgroundColor: SECTION_BG }}
                  scope="col"
                >
                  SaaS Platforms
                </th>
                <th
                  className={`${ROW_DIVIDER} ${thHeaderBase} text-center text-[#0A2540]`}
                  style={{ backgroundColor: SECTION_BG }}
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
                      style={{ backgroundColor: SECTION_BG }}
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
                      style={{ backgroundColor: SECTION_BG }}
                    >
                      <CellContent value={row.saas} statusIcons={!!row.statusIcons} isAirdev={false} />
                    </td>
                    <td
                      className={`${divCls} ${tdBodyCls} text-center`}
                      style={{ backgroundColor: SECTION_BG }}
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
    id: "rental",
    name: "Rental",
    cardHeading: "Rental Marketplaces",
    description:
      "Connect owners of assets (properties, vehicles, equipment, spaces) with people who want to rent them. Think Airbnb, Turo, Fat Llama, Peerspace.",
    icon: BuildingStorefrontIcon,
    color: "#1265EF",
    features: [
      { name: "Listing creation with photos, pricing, and availability calendars", icon: PhotoIcon },
      { name: "Search and filtering by location, dates, price, amenities", icon: MagnifyingGlassIcon },
      { name: "Booking flows with deposits, payments, and cancellation policies", icon: CreditCardIcon },
      { name: "Host and guest profiles with verification", icon: UserCircleIcon },
      { name: "Reviews and ratings (two-sided)", icon: StarIcon },
      { name: "Host payouts and platform fee management", icon: BanknotesIcon },
    ],
  },
  {
    id: "gig",
    name: "Gig & Service",
    cardHeading: "Gig & Service Marketplaces",
    description:
      "Match service providers with customers who need help. Think Fiverr, Thumbtack, Upwork, TaskRabbit.",
    icon: UserGroupIcon,
    color: "#06b6d4",
    features: [
      { name: "Provider profiles with skills, portfolios, and availability", icon: UserCircleIcon },
      { name: "Service listings or job posting and bidding flows", icon: ClipboardDocumentListIcon },
      { name: "Search and matching by skill, location, price, rating", icon: MagnifyingGlassIcon },
      { name: "Booking, scheduling, and messaging", icon: ChatBubbleLeftRightIcon },
      { name: "Escrow payments and milestone tracking", icon: LockClosedIcon },
      { name: "Reviews, ratings, and provider verification", icon: StarIcon },
    ],
  },
  {
    id: "product",
    name: "Product",
    cardHeading: "Product Marketplaces",
    description:
      "Enable sellers to list and sell physical or digital goods to buyers. Think Etsy, StockX, Reverb, Depop.",
    icon: ShoppingBagIcon,
    color: "#a855f7",
    features: [
      { name: "Multi-vendor storefronts with product listings", icon: BuildingStorefrontIcon },
      { name: "Inventory management and variants (size, color, condition)", icon: Squares2X2Icon },
      { name: "Shopping cart, checkout, and order tracking", icon: ShoppingCartIcon },
      { name: "Shipping integrations and fulfillment", icon: TruckIcon },
      { name: "Seller payouts and commission management", icon: BanknotesIcon },
      { name: "Reviews and seller ratings", icon: StarIcon },
    ],
  },
  {
    id: "booking",
    name: "Booking & Appointment",
    cardHeading: "Booking Marketplaces",
    description:
      "Let users discover and book time with providers—classes, appointments, sessions, experiences. Think ClassPass, Zocdoc, Mindbody, Airbnb Experiences.",
    icon: CalendarIcon,
    color: "#10b981",
    features: [
      { name: "Provider profiles with services and availability", icon: UserCircleIcon },
      { name: "Real-time calendar and scheduling", icon: CalendarIcon },
      { name: "Class or session capacity and waitlists", icon: QueueListIcon },
      { name: "Recurring bookings, memberships, and packages", icon: ArrowPathIcon },
      { name: "Payments, credits, and cancellation policies", icon: CreditCardIcon },
      { name: "Reviews and ratings", icon: StarIcon },
    ],
  },
  {
    id: "b2b",
    name: "Business-to-Business",
    cardHeading: "B2B Marketplaces",
    description:
      "Connect businesses with suppliers, vendors, or service providers. Think Faire, Alibaba, Thomasnet.",
    icon: BriefcaseIcon,
    color: "#f59e0b",
    features: [
      { name: "Company profiles and verification", icon: BuildingOffice2Icon },
      { name: "Product/service catalogs with bulk and tiered pricing", icon: TagIcon },
      { name: "RFQ (Request for Quote) and negotiation workflows", icon: DocumentTextIcon },
      { name: "Invoicing and payment terms (net 30, etc.)", icon: DocumentCurrencyDollarIcon },
      { name: "Order management and reordering", icon: ArrowPathIcon },
      { name: "Integration with procurement/ERP systems", icon: CpuChipIcon },
    ],
  },
  {
    id: "hybrid",
    name: "Other / Hybrid",
    cardHeading: "Other Marketplaces",
    description:
      "Not every marketplace fits a standard mold. We've built platforms that combine multiple models, serve niche industries, or invent entirely new ways of connecting buyers and sellers.",
    icon: SquaresPlusIcon,
    color: "#ec4899",
    features: [
      { name: "Reverse marketplaces (buyers post, sellers respond)", icon: ArrowsRightLeftIcon },
      { name: "Multi-sided platforms with 3+ user types", icon: UserGroupIcon },
      { name: "Regulated industries with compliance workflows", icon: ShieldCheckIcon },
      { name: "Niche verticals with unique matching logic", icon: SparklesIcon },
    ],
  },
];

export function MarketplaceTypesSection() {
  return (
    <div id="marketplace-types" className="scroll-mt-[88px]">
      <SampleProducts
        bgColor="bg-white"
        products={MARKETPLACE_TYPES_PRODUCTS}
        label="MARKETPLACE TYPES"
        title="Marketplaces we specialize in"
        description="We've built hundreds of marketplaces across dozens of industries and know the patterns that work, the edge cases to plan for, and the features your users will expect."
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
    id: "ticketrev",
    company: "TicketRev",
    logo: "https://cdn.prod.website-files.com/64e8a789efa42eaf8fe4d068/64e8b49e181622332d021cee_Logo.svg",
    logoText: "",
    heading: "How a buyer-first ticket marketplace startup quickly secured $1.1M in funding with Bubble.io",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/64cc2c786d693702395f21b1_TicketRev-built-with-no-code-Airdev.jpg",
    imageTitle: "How a buyer-first ticket marketplace startup quickly secured $1.1M in funding with Bubble.io",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "Ticket marketplace", color: "#00d4ff" },
      { label: "Timeline", value: "2 months", color: "#a960ee" },
      { label: "Key results", value: "$1.1M in pre-seed funding raised in 2 years", color: "#ff6b6b" },
    ],
  },
  {
    id: "consenna",
    company: "HP",
    logo: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a98f0f9d898fd7a42ee37_hp.webp",
    logoText: "",
    heading: "How Airdev helped the consultancy Consenna build a custom no-code marketplace for HP for Education to serve 30k schools across the UK",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635076a5905dd76065955f2c_hp-s%20(1).png",
    imageTitle: "How Airdev helped the consultancy Consenna build a custom no-code marketplace for HP for Education to serve 30k schools across the UK",
    customFields: [
      { label: "Business type", value: "Enterprise", color: "#635bff" },
      { label: "Product type", value: "Custom marketplace", color: "#00d4ff" },
      { label: "Timeline", value: "3 months", color: "#a960ee" },
      { label: "Key results", value: "30k schools served", color: "#ff6b6b" },
    ],
  },
  {
    id: "kidsbook",
    company: "Kidsbook",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1768940559825x362227103494313200/kidsbook.png",
    logoText: "",
    heading: "How Airdev helped Kidsbook build a custom no-code marketplace in just 6 weeks to connect parents with kids activity providers",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635075037ab429484ab21afb_kidsbook%20(2).png",
    imageTitle: "How Airdev helped Kidsbook build a custom no-code marketplace in just 6 weeks to connect parents with kids activity providers",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "Kids' activities marketplace", color: "#00d4ff" },
      { label: "Timeline", value: "6 weeks", color: "#a960ee" },
      { label: "Key results", value: "1000+ providers signed up", color: "#ff6b6b" },
    ],
  },
];

export const SAAS_MARKETPLACE_CASE_SLIDES = SAAS_MARKETPLACE_CASE_SLIDES_RAW.map((slide) => ({
  ...slide,
  customFields: slide.customFields.filter((field) => field.label !== "Key results"),
}));
