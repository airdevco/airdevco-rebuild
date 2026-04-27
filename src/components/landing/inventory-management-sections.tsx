"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowsRightLeftIcon,
  ArrowPathIcon,
  BellIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon,
  DocumentTextIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  QueueListIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Squares2X2Icon,
  TagIcon,
  TruckIcon,
  UserCircleIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { SampleProducts, type Product } from "@/components/landing/sample-products";

const INV_PRIMARY_BTN =
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

const SCREENSHOT_IMAGES = [
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774012809251x147338823367860960/im1.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774014261414x585232247677638700/im4.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774013192856x358933448342948300/im3.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774014900864x486154652325436300/im6.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774014947270x490348419706368300/im7.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774014292763x501102941799014900/im5.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774015462924x460611164416104800/im8.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774013213617x749379144239112100/im2.webp",
];

export function InventoryManagementLandingHero() {
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
            The smarter way to launch your inventory management product
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            We help teams ship inventory and warehouse software with real-time stock visibility, accurate movements,
            and workflows that match how you actually operate.
          </p>
          <div className="mt-8">
            <Button type="button" className={INV_PRIMARY_BTN} onClick={openLandingPricingPopup}>
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
                alt={`Inventory management screenshot ${i + 1}`}
                onLoad={i === REF_SCREEN_INDEX ? recalcShotHeight : undefined}
                className={
                  unifiedShotHeight
                    ? "w-full h-full min-h-0 object-contain object-top"
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

export function InventoryManagementWhyAirdev() {
  const lastIdx = COMPARISON_ROWS.length - 1;
  return (
    <section id="why-airdev" className="scroll-mt-[88px] py-20 md:py-28" style={{ backgroundColor: SECTION_BG }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[#1e3a8a] font-semibold tracking-wide uppercase text-[15px] mb-3 text-center">Why Airdev</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A2540] tracking-tight mb-4 text-center">
          Fast and flexible
        </h2>
        <p className="text-lg text-[#425466] text-center max-w-2xl mx-auto mb-12 md:mb-14 leading-relaxed">
          Spreadsheets and generic tools break at scale. Traditional builds take forever. We ship inventory software
          you can own, tailored to your operations.
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
                  Off-the-Shelf WMS
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

const INVENTORY_FEATURES: Product[] = [
  {
    id: "stock",
    name: "Stock",
    cardHeading: "Stock and SKU management",
    description: "Maintain a single source of truth for items, variants, and quantities across your network.",
    icon: QueueListIcon,
    color: "#1265EF",
    features: [
      { name: "On-hand, available, and reserved quantities", icon: Squares2X2Icon },
      { name: "SKU master data and units of measure", icon: TagIcon },
      { name: "Serial, lot, and expiration tracking", icon: ShieldCheckIcon },
      { name: "Safety stock and reorder thresholds", icon: BellIcon },
    ],
  },
  {
    id: "sites",
    name: "Sites",
    cardHeading: "Warehouses and locations",
    description: "Model warehouses, zones, and bins so every movement has a clear from and to.",
    icon: BuildingOffice2Icon,
    color: "#06b6d4",
    features: [
      { name: "Multi-site and multi-warehouse hierarchy", icon: BuildingOffice2Icon },
      { name: "Bin, aisle, and zone definitions", icon: ClipboardDocumentListIcon },
      { name: "Location capacity and pick-face rules", icon: QueueListIcon },
      { name: "User permissions by site or role", icon: UserCircleIcon },
    ],
  },
  {
    id: "inbound",
    name: "Inbound",
    cardHeading: "Receiving and putaway",
    description: "Digitize inbound workflows from dock to shelf with fewer errors and faster turnaround.",
    icon: TruckIcon,
    color: "#10b981",
    features: [
      { name: "Purchase order and ASN-driven receiving", icon: DocumentTextIcon },
      { name: "Blind receipts and exception handling", icon: ClipboardDocumentListIcon },
      { name: "Putaway tasks and directed locations", icon: ArrowPathIcon },
      { name: "Receiving audit trail and attachments", icon: ShieldCheckIcon },
    ],
  },
  {
    id: "outbound",
    name: "Outbound",
    cardHeading: "Picking, packing, and shipping",
    description: "Orchestrate outbound orders with clear pick paths, packing validation, and carrier handoff.",
    icon: ClipboardDocumentListIcon,
    color: "#a855f7",
    features: [
      { name: "Wave, batch, and cluster picking", icon: QueueListIcon },
      { name: "Pick lists and scan-to-confirm", icon: MagnifyingGlassIcon },
      { name: "Pack verification and cartonization", icon: Squares2X2Icon },
      { name: "Shipment labels and tracking updates", icon: TruckIcon },
    ],
  },
  {
    id: "moves",
    name: "Moves",
    cardHeading: "Transfers and adjustments",
    description: "Track stock movements between locations and keep inventory accurate through change.",
    icon: ArrowsRightLeftIcon,
    color: "#f59e0b",
    features: [
      { name: "Inter-site and inter-bin transfers", icon: ArrowsRightLeftIcon },
      { name: "In-transit visibility and receipts", icon: TruckIcon },
      { name: "Inventory adjustments with approvals", icon: DocumentTextIcon },
      { name: "Reason codes and approval workflows", icon: LockClosedIcon },
    ],
  },
  {
    id: "counts",
    name: "Counts",
    cardHeading: "Cycle counts and audits",
    description: "Run structured counts to catch discrepancies early and keep books aligned with the floor.",
    icon: MagnifyingGlassIcon,
    color: "#ec4899",
    features: [
      { name: "Cycle count plans and ABC stratification", icon: CalendarIcon },
      { name: "Blind counts and recount workflows", icon: MagnifyingGlassIcon },
      { name: "Variance reporting and root-cause notes", icon: ClipboardDocumentListIcon },
      { name: "Post-count adjustments with controls", icon: ShieldCheckIcon },
    ],
  },
  {
    id: "sync",
    name: "Sync",
    cardHeading: "Integrations and automation",
    description: "Connect scanners, ecommerce, ERP, and accounting so inventory stays consistent everywhere.",
    icon: SparklesIcon,
    color: "#0ea5e9",
    features: [
      { name: "Barcode and mobile scanner workflows", icon: TagIcon },
      { name: "REST APIs and webhooks for order and stock sync", icon: ArrowsRightLeftIcon },
      { name: "Ecommerce and marketplace channel feeds", icon: ChatBubbleLeftRightIcon },
      { name: "ERP and accounting integrations", icon: CreditCardIcon },
    ],
  },
];

export function InventoryManagementTypesSection() {
  return (
    <div id="marketplace-types" className="scroll-mt-[88px]">
      <SampleProducts
        bgColor="bg-white"
        products={INVENTORY_FEATURES}
        label="COMMON FEATURES"
        title="Inventory management features we specialize in"
        description="From stock accuracy to warehouse operations and integrations-we build the workflows operators expect and finance can trust."
        leftColumnClassName="lg:col-span-3"
        rightColumnClassName="lg:col-span-9"
      />
    </div>
  );
}

const LAUNCHPAD_BULLETS = [
  "You own it, no license fees",
  "A lean team to get you started",
  "AI-powered scoping to define your inventory product and get a quote",
  "Core flows for stock, locations, moves, and reporting",
  "Standard UX/UI with your colors, logo, and branding applied",
  "Customizations for your industry and fulfillment model",
];

const AGENCY_BULLETS = [
  "You own it, no license fees",
  "A full team of product, design, and development experts",
  "Custom discovery across warehouses, channels, and systems",
  "Architecture for scale, compliance, and integrations",
  "Custom UX/UI for operators and admins",
  "Complex rules, automation, and edge cases",
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

export function InventoryManagementPricingSection() {
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

const INVENTORY_CASE_SLIDES_RAW = [
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
    id: "resolis",
    company: "Resolis",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1767136295917x196197816364843680/resolis.png",
    logoText: "",
    heading:
      "How Airdev helped Resolis build an internal tool to streamline their public infrastructure asset management services",
    description: "",
    image:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/6698333e120200f6df1df8ad_Resolis%20no-code%20internal%20tool.jpg",
    imageTitle:
      "How Airdev helped Resolis build an internal tool to streamline their public infrastructure asset management services",
    customFields: [
      { label: "Business type", value: "Enterprise", color: "#635bff" },
      { label: "Product type", value: "Internal tool", color: "#00d4ff" },
      { label: "Timeline", value: "5 months", color: "#a960ee" },
      {
        label: "Key results",
        value: "Standardization of niche, manual processes for teams operating across the UK",
        color: "#ff6b6b",
      },
    ],
  },
];

export const INVENTORY_CASE_SLIDES = INVENTORY_CASE_SLIDES_RAW.map((slide) => ({
  ...slide,
  customFields: slide.customFields.filter((field) => field.label !== "Key results"),
}));
