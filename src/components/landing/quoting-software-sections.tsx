"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowsRightLeftIcon,
  ArrowPathIcon,
  BuildingLibraryIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  CpuChipIcon,
  CreditCardIcon,
  DocumentCurrencyDollarIcon,
  DocumentTextIcon,
  LockClosedIcon,
  QueueListIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Squares2X2Icon,
  TagIcon,
  UserCircleIcon,
  UserGroupIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { SampleProducts, type Product } from "@/components/landing/sample-products";

const QUOTING_SOFTWARE_PRIMARY_BTN =
  "bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none";

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const openLandingPricingPopup = () => {
  window.dispatchEvent(new CustomEvent("open-landing-pricing-popup"));
};

const MARKETPLACE_HERO_BLUR_BG =
  "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d482ff67a3aac218170979_blurbg3.svg";

const REF_SCREEN_INDEX = 2;

function viewportScreenshotMaxHeightPx(): number {
  if (typeof window === "undefined") return 560;
  return Math.min(560, window.innerHeight * 0.52);
}

const SCREENSHOT_IMAGES = [
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774050422476x557133732974576700/q8.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774050433511x814832470807188700/q5.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774050445483x259722489043093600/q7.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774050483517x719614821827469400/q4.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774050459781x422097661627461200/q1.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774050494776x473908601739836860/q3.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774050470690x359861208296819600/q6.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774050508453x845116759419775100/q2.webp",
];

export function QuotingSoftwareLandingHero() {
  const [unifiedShotHeight, setUnifiedShotHeight] = useState<number | null>(null);
  const referenceImgRef = useRef<HTMLImageElement>(null);

  const recalcShotHeight = useCallback(() => {
    const img = referenceImgRef.current;
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
    const img = referenceImgRef.current;
    if (!img) return;
    const figure = img.parentElement;
    if (!figure) return;

    const ro = new ResizeObserver(() => recalcShotHeight());
    ro.observe(figure);
    window.addEventListener("resize", recalcShotHeight);
    if (img.complete) recalcShotHeight();

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recalcShotHeight);
    };
  }, [recalcShotHeight]);

  return (
    <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-16 overflow-hidden bg-white scroll-mt-[88px]">
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
            The smarter way to launch your quoting software
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            We use a new approach to help entrepreneurs launch quoting software, for a fraction of cost and time of
            traditional development.
          </p>

          <div className="mt-8">
            <Button type="button" className={QUOTING_SOFTWARE_PRIMARY_BTN} onClick={openLandingPricingPopup}>
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
                ref={i === REF_SCREEN_INDEX ? referenceImgRef : undefined}
                src={src}
                alt={`Quoting software screenshot ${i + 1}`}
                onLoad={i === REF_SCREEN_INDEX ? recalcShotHeight : undefined}
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

type ComparisonRow = {
  label: string;
  airdev: string;
  saas: string;
  traditional: string;
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

const SECTION_BG = "#F6F9FC";
const AIRDEV_COL_BG = "#ECF2FB";
const ROW_DIVIDER = "border-b border-[#E2E8F0]";
const thHeaderBase = "text-[20px] leading-[28px] font-semibold py-5 md:py-6 px-5 md:px-6 align-middle";
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

export function QuotingSoftwareWhyAirdev() {
  const lastIdx = COMPARISON_ROWS.length - 1;
  return (
    <section id="why-airdev" className="scroll-mt-[88px] py-20 md:py-28" style={{ backgroundColor: SECTION_BG }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[#1e3a8a] font-semibold tracking-wide uppercase text-[15px] mb-3 text-center">Why Airdev</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A2540] tracking-tight mb-4 text-center">
          Fast and flexible
        </h2>
        <p className="text-lg text-[#425466] text-center max-w-2xl mx-auto mb-12 md:mb-14 leading-relaxed">
          Generic quoting tools are fast but rigid. Custom builds take forever. We help you ship quoting software you
          own, with the flexibility your sales motion needs.
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
                    <td className={`${divCls} ${tdBodyCls} text-center`} style={{ backgroundColor: SECTION_BG }}>
                      <CellContent value={row.saas} statusIcons={!!row.statusIcons} isAirdev={false} />
                    </td>
                    <td className={`${divCls} ${tdBodyCls} text-center`} style={{ backgroundColor: SECTION_BG }}>
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

const QUOTING_SOFTWARE_FEATURES: Product[] = [
  {
    id: "quote-builder",
    name: "Quotes",
    cardHeading: "Quote builder & document flow",
    description:
      "Create structured quotes with line items, optional sections, and revision history so reps and buyers stay aligned.",
    icon: DocumentTextIcon,
    color: "#1265EF",
    features: [
      { name: "Line items, bundles, and optional add-ons", icon: ClipboardDocumentListIcon },
      { name: "Templates, merge fields, and branded proposals", icon: DocumentTextIcon },
      { name: "Versioning, comments, and internal notes", icon: ArrowPathIcon },
      { name: "Multi-currency and tax display hooks", icon: DocumentCurrencyDollarIcon },
    ],
  },
  {
    id: "catalog-pricing",
    name: "Catalog",
    cardHeading: "Products, SKUs & price books",
    description:
      "Maintain catalogs and commercial terms so quotes pull accurate SKUs, units, and list prices every time.",
    icon: TagIcon,
    color: "#06b6d4",
    features: [
      { name: "Product families, SKUs, and attributes", icon: TagIcon },
      { name: "Price books by segment, region, or channel", icon: Squares2X2Icon },
      { name: "Tiered and volume-based pricing", icon: DocumentCurrencyDollarIcon },
      { name: "Effective-dated price changes", icon: ArrowPathIcon },
    ],
  },
  {
    id: "discounts-rules",
    name: "Rules",
    cardHeading: "Discounts, margin & guardrails",
    description:
      "Apply discounts and commercial rules with visibility into margin so deals stay profitable and compliant.",
    icon: ShieldCheckIcon,
    color: "#a855f7",
    features: [
      { name: "Discount caps and approval thresholds", icon: ShieldCheckIcon },
      { name: "Coupon codes and promotional windows", icon: TagIcon },
      { name: "Floor price and margin alerts", icon: DocumentCurrencyDollarIcon },
      { name: "Role-based edit permissions", icon: UserGroupIcon },
    ],
  },
  {
    id: "cpq",
    name: "CPQ",
    cardHeading: "Configure, price, quote (CPQ)",
    description:
      "Guide reps through valid configurations with rules that enforce compatibility, dependencies, and upsell logic.",
    icon: CpuChipIcon,
    color: "#10b981",
    features: [
      { name: "Product configuration and constraints", icon: CpuChipIcon },
      { name: "BOM or bill-of-materials rollups", icon: ClipboardDocumentListIcon },
      { name: "Guided selling and recommendations", icon: SparklesIcon },
      { name: "What-if scenarios before sending", icon: Squares2X2Icon },
    ],
  },
  {
    id: "approvals",
    name: "Approvals",
    cardHeading: "Workflows & approvals",
    description:
      "Route quotes for legal, finance, or leadership review with clear SLAs and audit trails.",
    icon: QueueListIcon,
    color: "#f59e0b",
    features: [
      { name: "Multi-step approval chains", icon: QueueListIcon },
      { name: "Conditional routing by amount or territory", icon: ArrowsRightLeftIcon },
      { name: "Delegation and out-of-office coverage", icon: UserGroupIcon },
      { name: "Activity timeline on each quote", icon: ClipboardDocumentListIcon },
    ],
  },
  {
    id: "delivery-signing",
    name: "Delivery",
    cardHeading: "Delivery, PDF & e-sign",
    description:
      "Send polished PDFs and collect signatures or acceptance so closed-won is clear and searchable.",
    icon: LockClosedIcon,
    color: "#ec4899",
    features: [
      { name: "Branded PDF and web-based quote views", icon: DocumentTextIcon },
      { name: "E-signature and counter-sign flows", icon: LockClosedIcon },
      { name: "Customer portal for review and acceptance", icon: UserCircleIcon },
      { name: "Email delivery and open tracking hooks", icon: ArrowPathIcon },
    ],
  },
  {
    id: "integrations-analytics",
    name: "Stack",
    cardHeading: "Integrations & analytics",
    description:
      "Sync quotes with CRM, ERP, and billing so pipeline, revenue, and fulfillment stay aligned.",
    icon: ArrowsRightLeftIcon,
    color: "#0ea5e9",
    features: [
      { name: "CRM opportunity and account sync", icon: ArrowsRightLeftIcon },
      { name: "ERP or billing handoff for won deals", icon: CreditCardIcon },
      { name: "REST APIs, webhooks, and events", icon: CpuChipIcon },
      { name: "Quote conversion, win rate, and cycle-time reports", icon: ChartBarIcon },
      { name: "Exports and BI connectors", icon: BuildingLibraryIcon },
    ],
  },
];

export function QuotingSoftwareTypesSection() {
  return (
    <div id="marketplace-types" className="scroll-mt-[88px]">
      <SampleProducts
        bgColor="bg-white"
        products={QUOTING_SOFTWARE_FEATURES}
        label="COMMON FEATURES"
        title="Quoting software features we specialize in"
        titleMaxWidth="34rem"
        description="From catalogs and CPQ to approvals, PDFs, and CRM integrations—we build the capabilities modern quoting products need. Choose what you need and we'll implement it."
        descriptionMaxWidth="40rem"
        leftColumnClassName="lg:col-span-3"
        rightColumnClassName="lg:col-span-9"
      />
    </div>
  );
}

const LAUNCHPAD_BULLETS = [
  "You own it, no license fees",
  "A lean team to get you started",
  "AI-powered scoping to define your quoting flows and get a quote",
  "Base features include quotes, catalogs, approvals, and PDFs",
  "Standard UX/UI with your colors, logo, and branding applied",
  "Customizations and add-ons based on what your sales motion needs",
];

const AGENCY_BULLETS = [
  "You own it, no license fees",
  "A full team of product, design, and development experts",
  "Custom discovery and scoping process",
  "Strategic input on CPQ rules, pricing, and integrations",
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

export function QuotingSoftwarePricingSection() {
  return (
    <section id="pricing" className="scroll-mt-[88px] py-20 md:py-28 bg-[#F6F9FC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[#1e3a8a] font-semibold tracking-wide uppercase text-[15px] mb-3 text-center">Pricing</p>
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
              <p className="text-[48px] leading-[48px] font-bold text-[#0A2540] mb-3">{plan.price}</p>
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

const QUOTING_SOFTWARE_CASE_SLIDES_RAW = [
  {
    id: "greener",
    company: "Greener Corporation",
    logo: "https://greenercorp.com/wp-content/uploads/2022/07/Greener-Logo.svg",
    logoText: "",
    heading: "How Airdev helped Greener Corp build a custom manufacturing ERP on Bubble",
    description: "",
    image:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/6431f7a55544d733b3614a00_Manufacturing%20case%20study%20no-code.png",
    imageTitle: "How Airdev helped Greener Corp build a custom manufacturing ERP on Bubble",
    customFields: [
      { label: "Business type", value: "SMB", color: "#635bff" },
      { label: "Product type", value: "Enterprise resource planning (ERP) app", color: "#00d4ff" },
      { label: "Timeline", value: "6 months", color: "#a960ee" },
      {
        label: "Key results",
        value:
          "Custom ERP around Greener’s processes—estimated ~75% lower lifetime cost than off-the-shelf",
        color: "#ff6b6b",
      },
    ],
  },
  {
    id: "bolster",
    company: "Bolster",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1767069657325x211103928710127970/bolster.png",
    logoText: "",
    heading: "How Bolster developed 3 custom no-code web apps on Bubble in just 6 weeks per app",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635076547ab429d14db22f83_bolster.jpeg",
    imageTitle: "How Bolster developed 3 custom no-code web apps on Bubble in just 6 weeks per app",
    customFields: [
      { label: "Business type", value: "SMB", color: "#635bff" },
      { label: "Product type", value: "Custom web portals", color: "#00d4ff" },
      { label: "Timeline", value: "6 weeks per app", color: "#a960ee" },
      { label: "Key results", value: "Raised $2.8M in funding", color: "#ff6b6b" },
    ],
  },
];

export const QUOTING_SOFTWARE_CASE_SLIDES = QUOTING_SOFTWARE_CASE_SLIDES_RAW.map((slide) => ({
  ...slide,
  customFields: slide.customFields.filter((field) => field.label !== "Key results"),
}));
