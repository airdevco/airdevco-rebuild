"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowsRightLeftIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  CalendarIcon,
  ChartPieIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon,
  CpuChipIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  PresentationChartLineIcon,
  QueueListIcon,
  SparklesIcon,
  Squares2X2Icon,
  StarIcon,
  TagIcon,
  UserCircleIcon,
  UserGroupIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { SampleProducts, type Product } from "@/components/landing/sample-products";

const MVP_PRIMARY_BTN =
  "bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none";

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const openLandingPricingPopup = () => {
  window.dispatchEvent(new CustomEvent("open-landing-pricing-popup"));
};

const HERO_BG = "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d482ff67a3aac218170979_blurbg3.svg";
const REF_SCREEN_INDEX = 2;

function viewportScreenshotMaxHeightPx(): number {
  if (typeof window === "undefined") return 560;
  return Math.min(560, window.innerHeight * 0.52);
}

/** MVP hero shots — edit only in this file */
const SCREENSHOT_IMAGES = [
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769647224654x585966976925444100/events2.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774006421831x791000213883669600/crm5.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774031232294x920880876042708100/sn.webp",
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772588533645x277504609261276960/clearpay.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774003634701x879766162137330700/crm1.webp",
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769431327914x326072329645070460/craftly2.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774037162750x163292356974240160/ai6.webp",
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769645304714x406176510810474200/listing1.webp",
];

export function MvpLandingHero() {
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
          backgroundImage: `url(${HERO_BG})`,
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
            linear-gradient(to top,#ffffff 0%,rgba(255,255,255,0.97) 5%,rgba(255,255,255,0.88) 12%,rgba(255,255,255,0.58) 24%,rgba(255,255,255,0.28) 38%,rgba(255,255,255,0.08) 50%,transparent 64%),
            linear-gradient(to bottom,#ffffff 0%,rgba(255,255,255,0.98) 4%,rgba(255,255,255,0.9) 10%,rgba(255,255,255,0.72) 18%,rgba(255,255,255,0.42) 30%,rgba(255,255,255,0.15) 44%,transparent 62%)
          `,
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4.5rem] 2xl:text-[5rem] leading-[1.05] font-semibold tracking-[-0.03em] text-gray-900 mb-6 sm:mb-8">
            The smarter way to launch your MVP
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto">
            Ship a production-ready minimum viable product in weeks. Focused scope, real users, and a codebase you can
            extend when you&apos;re ready to scale.
          </p>
          <div className="mt-8">
            <Button type="button" className={MVP_PRIMARY_BTN} onClick={openLandingPricingPopup}>
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
                alt={`MVP product screenshot ${i + 1}`}
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

export function MvpWhyAirdev() {
  const lastIdx = COMPARISON_ROWS.length - 1;
  return (
    <section id="why-airdev" className="scroll-mt-[88px] py-20 md:py-28" style={{ backgroundColor: SECTION_BG }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[#1e3a8a] font-semibold tracking-wide uppercase text-[15px] mb-3 text-center">Why Airdev</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A2540] tracking-tight mb-4 text-center">
          Fast and flexible
        </h2>
        <p className="text-lg text-[#425466] text-center max-w-2xl mx-auto mb-12 md:mb-14 leading-relaxed">
          Templated tools get you live quickly but cap your differentiation. Custom agencies take forever. We help you
          ship an MVP you own—with room to grow.
        </p>

        <div className="overflow-x-auto w-full max-w-[1180px] mx-auto">
          <table className="w-full min-w-[720px] border-separate border-spacing-0">
            <thead>
              <tr>
                <th className={`${ROW_DIVIDER} ${thHeaderBase} text-left w-[26%]`} style={{ backgroundColor: SECTION_BG }} scope="col" />
                <th
                  className={`${thHeaderBase} text-center text-[#1265EF] border-b border-[#E2E8F0] rounded-t-2xl`}
                  style={{ backgroundColor: AIRDEV_COL_BG }}
                  scope="col"
                >
                  Airdev
                </th>
                <th className={`${ROW_DIVIDER} ${thHeaderBase} text-center text-[#0A2540]`} style={{ backgroundColor: SECTION_BG }} scope="col">
                  DIY / template MVPs
                </th>
                <th className={`${ROW_DIVIDER} ${thHeaderBase} text-center text-[#0A2540]`} style={{ backgroundColor: SECTION_BG }} scope="col">
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
                    <td className={`${divCls} ${tdBodyCls} text-left font-medium text-[#0A2540]`} style={{ backgroundColor: SECTION_BG }}>
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

const MVP_PRODUCT_TYPES: Product[] = [
  {
    id: "marketplaces",
    name: "Marketplaces",
    cardHeading: "Marketplaces",
    description:
      "Help connect vendors and customers together in one place to buy and sell anything.",
    icon: BuildingStorefrontIcon,
    color: "#1265EF",
    features: [
      { name: "Inventory & order management", icon: QueueListIcon },
      { name: "Peer-to-peer payments", icon: CreditCardIcon },
      { name: "Listings & profiles", icon: UserCircleIcon },
      { name: "Buyer-seller messaging", icon: ChatBubbleLeftRightIcon },
      { name: "Ratings & reviews", icon: StarIcon },
    ],
  },
  {
    id: "productivity",
    name: "Productivity Tools",
    cardHeading: "Productivity Tools",
    description:
      "Enable teams to collaborate and work more efficiently, manage or automate processes, and share resources.",
    icon: BriefcaseIcon,
    color: "#06b6d4",
    features: [
      { name: "Task management & assignment", icon: ClipboardDocumentListIcon },
      { name: "Team communication", icon: ChatBubbleLeftRightIcon },
      { name: "Document management", icon: DocumentTextIcon },
      { name: "Calendar & scheduling", icon: CalendarIcon },
      { name: "Workflow automations", icon: SparklesIcon },
    ],
  },
  {
    id: "social",
    name: "Social Networks",
    cardHeading: "Social Networks",
    description:
      "Enable individuals and groups to connect and communicate by posting information, comments, messages, images, etc.",
    icon: UserGroupIcon,
    color: "#10b981",
    features: [
      { name: "Users & roles", icon: UserCircleIcon },
      { name: "Profile management", icon: TagIcon },
      { name: "User connections & messaging", icon: ChatBubbleLeftRightIcon },
      { name: "Liking, upvoting, & commenting", icon: StarIcon },
      { name: "Content sharing", icon: Squares2X2Icon },
    ],
  },
  {
    id: "analytics",
    name: "Analytics Tools",
    cardHeading: "Analytics & Data Visualization",
    description:
      "Retrieve and store data from one or more systems and establish processes for review and analysis.",
    icon: ChartPieIcon,
    color: "#a855f7",
    features: [
      { name: "API integrations", icon: GlobeAltIcon },
      { name: "Complex calculations", icon: CpuChipIcon },
      { name: "Charts & tables", icon: PresentationChartLineIcon },
      { name: "Data warehousing", icon: Squares2X2Icon },
      { name: "Insights & reporting dashboard", icon: MagnifyingGlassIcon },
    ],
  },
  {
    id: "crms",
    name: "CRMs",
    cardHeading: "Customer Relation Management",
    description:
      "Help organizations manage customer relationships throughout the entire customer lifecycle.",
    icon: BuildingOffice2Icon,
    color: "#f59e0b",
    features: [
      { name: "Workflow automations", icon: SparklesIcon },
      { name: "Contact management", icon: UserCircleIcon },
      { name: "Sales analytics", icon: ChartPieIcon },
      { name: "Team & work management", icon: ClipboardDocumentListIcon },
      { name: "Reports and dashboards", icon: PresentationChartLineIcon },
    ],
  },
  {
    id: "other",
    name: "Other",
    cardHeading: "Any custom software",
    description:
      "There is no limit to what you can build. You just need a user and a use case and we can help bring it to life.",
    icon: SparklesIcon,
    color: "#0ea5e9",
    features: [
      { name: "Users & roles", icon: UserGroupIcon },
      { name: "Algorithms and logic", icon: CpuChipIcon },
      { name: "API integrations", icon: ArrowsRightLeftIcon },
      { name: "Payments & banking", icon: CreditCardIcon },
      { name: "Other features", icon: Squares2X2Icon },
    ],
  },
];

export function MvpTypesSection() {
  return (
    <div id="marketplace-types" className="scroll-mt-[88px]">
      <SampleProducts
        bgColor="bg-white"
        products={MVP_PRODUCT_TYPES}
        label="PRODUCT TYPES"
        title="What we typically ship in an MVP"
        description="Every build is different, but these are the building blocks we use to get you to real users, revenue, and learning fast."
        descriptionMaxWidth="32rem"
        featuresHeading="Common features"
        leftColumnClassName="lg:col-span-3"
        rightColumnClassName="lg:col-span-9"
      />
    </div>
  );
}

const LAUNCHPAD_BULLETS = [
  "You own it, no recurring platform license",
  "A lean team to get you started",
  "AI-powered scoping to define your MVP and get a quote",
  "Focused feature set: auth, core flows, admin basics, and analytics hooks",
  "Standard UX/UI with your colors, logo, and branding applied",
  "Clear path to v2 when you’re ready to expand",
];

const AGENCY_BULLETS = [
  "You own it, no recurring platform license",
  "A full team of product, design, and development experts",
  "Custom discovery and ruthless prioritization",
  "Strategic input on what belongs in MVP vs later",
  "Custom UX/UI design",
  "Complex workflows, integrations, or regulated domains",
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

export function MvpPricingSection() {
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

const MVP_CASE_SLIDES_RAW = [
  {
    id: "dividend",
    company: "Dividend Finance",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447523324x536489976697318800/dividend.png",
    logoText: "$300m+ raised",
    heading: "How we built a FinTech platform for Dividend Finance that scaled to process billions of dollars of loan",
    description: "",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop",
    imageTitle: "How we built a FinTech platform for Dividend Finance that scaled to process billions of dollars of loan",
    customFields: [
      { label: "Business type", value: "Enterprise", color: "#635bff" },
      { label: "Product type", value: "FinTech MVP", color: "#00d4ff" },
      { label: "Timeline", value: "6 weeks", color: "#a960ee" },
      { label: "Key results", value: "Billions of dollars of loans processed", color: "#ff6b6b" },
    ],
  },
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
      { label: "Product type", value: "Marketplace app", color: "#00d4ff" },
      { label: "Timeline", value: "2 months", color: "#a960ee" },
      { label: "Key results", value: "$1.1M in pre-seed funding raised in 2 years", color: "#ff6b6b" },
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
    imageTitle:
      "How Airdev helped Kidsbook build a custom no-code marketplace in just 6 weeks to connect parents with kids activity providers",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "2-sided marketplace", color: "#00d4ff" },
      { label: "Timeline", value: "6 weeks", color: "#a960ee" },
      { label: "Key results", value: "1000+ providers signed up", color: "#ff6b6b" },
    ],
  },
];

export const MVP_CASE_SLIDES = MVP_CASE_SLIDES_RAW.map((slide) => ({
  ...slide,
  customFields: slide.customFields.filter((field) => field.label !== "Key results"),
}));
