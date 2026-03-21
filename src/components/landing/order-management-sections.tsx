"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowPathIcon,
  ArrowsRightLeftIcon,
  BuildingStorefrontIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  CpuChipIcon,
  CubeIcon,
  DocumentTextIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
  TruckIcon,
  UserCircleIcon,
  UserGroupIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { SampleProducts, type Product } from "@/components/landing/sample-products";

const ORDER_MANAGEMENT_PRIMARY_BTN =
  "bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none";

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const MARKETPLACE_HERO_BLUR_BG =
  "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d482ff67a3aac218170979_blurbg3.svg";

const REF_SCREEN_INDEX = 2;

function viewportScreenshotMaxHeightPx(): number {
  if (typeof window === "undefined") return 560;
  return Math.min(560, window.innerHeight * 0.52);
}

/** Hero shots — swap URLs in this file only; defaults match CRM-style product UI */
const SCREENSHOT_IMAGES = [
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774048171205x288590737543661400/oms8.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774048204877x616522221670567900/oms1.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774048216981x376013536733139200/oms2.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774048250107x959370001371412900/oms7.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774048232211x356709076682324860/oms4.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774048271705x602637840023207600/oms5.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774048296032x639809873097158900/omg6.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774048319484x989408076084845800/oms3.webp",
];

export function OrderManagementLandingHero() {
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
            The smarter way to launch your order management software
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto">
            We use a new approach to help entrepreneurs launch order management products you fully own, for a fraction
            of the cost and time of traditional development.
          </p>

          <div className="mt-8">
            <Button type="button" className={ORDER_MANAGEMENT_PRIMARY_BTN} onClick={scrollToContact}>
              Talk to Us
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
                alt={`Order management screenshot ${i + 1}`}
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

export function OrderManagementWhyAirdev() {
  const lastIdx = COMPARISON_ROWS.length - 1;
  return (
    <section id="why-airdev" className="scroll-mt-[88px] py-20 md:py-28" style={{ backgroundColor: SECTION_BG }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[#1e3a8a] font-semibold tracking-wide uppercase text-sm mb-3 text-center">Why Airdev</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A2540] tracking-tight mb-4 text-center">
          Fast and flexible
        </h2>
        <p className="text-lg text-[#425466] text-center max-w-2xl mx-auto mb-12 md:mb-14 leading-relaxed">
          Packaged OMS tools are fast but inflexible. Custom builds from scratch take forever. We help you ship order
          management software you control, without the usual timeline.
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

const ORDER_MANAGEMENT_COMMON_FEATURES: Product[] = [
  {
    id: "order-capture",
    name: "Orders",
    cardHeading: "Order capture & processing",
    description:
      "Take orders from every channel with consistent validation, pricing, and status from draft to confirmed.",
    icon: ShoppingCartIcon,
    color: "#1265EF",
    features: [
      { name: "Cart, checkout, and quote-to-order flows", icon: ShoppingCartIcon },
      { name: "Line items, bundles, and custom fields", icon: ClipboardDocumentListIcon },
      { name: "Order states, holds, and approvals", icon: Squares2X2Icon },
      { name: "Customer & account linkage", icon: UserCircleIcon },
    ],
  },
  {
    id: "inventory",
    name: "Inventory",
    cardHeading: "Inventory & availability",
    description:
      "Know what you can promise with stock levels, reservations, and locations across warehouses or stores.",
    icon: CubeIcon,
    color: "#06b6d4",
    features: [
      { name: "SKU, lot, and bin-level tracking", icon: CubeIcon },
      { name: "ATP/allocations and safety stock rules", icon: ShieldCheckIcon },
      { name: "Transfers and cycle counts", icon: ArrowsRightLeftIcon },
      { name: "Low-stock alerts and reorder signals", icon: ChartBarIcon },
    ],
  },
  {
    id: "fulfillment",
    name: "Fulfillment",
    cardHeading: "Fulfillment & shipping",
    description:
      "Move orders from pick to pack to carrier handoff with tracking, exceptions, and SLA visibility.",
    icon: TruckIcon,
    color: "#a855f7",
    features: [
      { name: "Pick lists, waves, and pack verification", icon: ClipboardDocumentListIcon },
      { name: "Carrier rates, labels, and manifests", icon: TruckIcon },
      { name: "Shipment tracking and delivery events", icon: ArrowPathIcon },
      { name: "Partial shipments and backorders", icon: Squares2X2Icon },
    ],
  },
  {
    id: "returns",
    name: "Returns",
    cardHeading: "Returns & exchanges",
    description:
      "Handle RMAs, refunds, and replacements with clear rules and tie-back to inventory and finance.",
    icon: ArrowPathIcon,
    color: "#10b981",
    features: [
      { name: "Return authorizations and reason codes", icon: DocumentTextIcon },
      { name: "Restocking, fees, and credit workflows", icon: ArrowsRightLeftIcon },
      { name: "Exchange and store-credit options", icon: ShoppingCartIcon },
      { name: "Return-to-vendor coordination", icon: TruckIcon },
    ],
  },
  {
    id: "purchasing",
    name: "Purchasing",
    cardHeading: "Purchasing & suppliers",
    description:
      "Replenish stock and manage vendor relationships with POs, receipts, and three-way matching.",
    icon: BuildingStorefrontIcon,
    color: "#f59e0b",
    features: [
      { name: "Purchase orders and requisitions", icon: ClipboardDocumentListIcon },
      { name: "Supplier catalogs and lead times", icon: BuildingStorefrontIcon },
      { name: "Goods receipt and invoice matching", icon: DocumentTextIcon },
      { name: "Vendor performance and scorecards", icon: ChartBarIcon },
    ],
  },
  {
    id: "reporting",
    name: "Reporting",
    cardHeading: "Reporting & operations",
    description:
      "Dashboards and exports for ops, finance, and leadership—orders, fill rates, and exceptions in one place.",
    icon: ChartBarIcon,
    color: "#ec4899",
    features: [
      { name: "Order, backlog, and fill-rate views", icon: ChartBarIcon },
      { name: "Inventory valuation and aging", icon: CubeIcon },
      { name: "Exception queues and SLA dashboards", icon: Squares2X2Icon },
      { name: "Scheduled reports and CSV/API export", icon: DocumentTextIcon },
    ],
  },
  {
    id: "integrations",
    name: "Integrations",
    cardHeading: "Integrations & automation",
    description:
      "Connect OMS to ERP, payments, shipping, and marketplaces so data stays consistent without manual re-entry.",
    icon: ArrowsRightLeftIcon,
    color: "#0ea5e9",
    features: [
      { name: "REST APIs, webhooks, and event streams", icon: ArrowsRightLeftIcon },
      { name: "Payment and tax provider hooks", icon: CpuChipIcon },
      { name: "EDI or marketplace order sync", icon: ArrowsRightLeftIcon },
      { name: "Role-based access and audit logs", icon: LockClosedIcon },
      { name: "Workflow rules and notifications", icon: UserGroupIcon },
    ],
  },
];

export function OrderManagementTypesSection() {
  return (
    <div id="marketplace-types" className="scroll-mt-[88px]">
      <SampleProducts
        bgColor="bg-white"
        products={ORDER_MANAGEMENT_COMMON_FEATURES}
        label="COMMON FEATURES"
        title="Order management features we specialize in"
        description="From order capture to inventory, fulfillment, and integrations—we build the core capabilities modern OMS products need. Pick your scope and we implement it end to end."
        leftColumnClassName="lg:col-span-3"
        rightColumnClassName="lg:col-span-9"
      />
    </div>
  );
}

const LAUNCHPAD_BULLETS = [
  "You own it, no license fees",
  "A lean team to get you started",
  "AI-powered scoping to define your order flows and get a quote",
  "Base features include orders, workflows, and integrations",
  "Standard UX/UI with your colors, logo, and branding applied",
  "Customizations and add-ons based on what your operations need",
];

const AGENCY_BULLETS = [
  "You own it, no license fees",
  "A full team of product, design, and development experts",
  "Custom discovery and scoping process",
  "Strategic input on fulfillment, inventory, and integrations",
  "Custom UX/UI design",
  "Complex or unique workflows",
];

const PRICING_PLANS = [
  {
    name: "Launchpad",
    price: "$5k+",
    subtitle: "Start from a template and make it your own",
    bullets: LAUNCHPAD_BULLETS,
  },
  {
    name: "Agency",
    price: "$20k+",
    subtitle: "Build anything that fits your needs",
    bullets: AGENCY_BULLETS,
  },
];

export function OrderManagementPricingSection() {
  return (
    <section id="pricing" className="scroll-mt-[88px] py-20 md:py-28 bg-[#F6F9FC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[#1e3a8a] font-semibold tracking-wide uppercase text-sm mb-3 text-center">Pricing</p>
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
              <p className="text-[#425466] text-[16px] leading-[24px] font-normal mb-6">{plan.subtitle}</p>
              <hr className="border-slate-200 mb-6" />
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
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const ORDER_MANAGEMENT_CASE_SLIDES = [
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
];
