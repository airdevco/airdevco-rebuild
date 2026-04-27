"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AdjustmentsVerticalIcon,
  ArrowPathIcon,
  ArrowsRightLeftIcon,
  BoltIcon,
  BuildingLibraryIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  CpuChipIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Squares2X2Icon,
  UserCircleIcon,
  UserGroupIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { SampleProducts, type Product } from "@/components/landing/sample-products";

const AI_CHATBOT_PRIMARY_BTN =
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
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774037116958x904768129962142800/ai44.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774037162750x163292356974240160/ai6.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774037144772x592934117755434800/ai3.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774037180520x267178129678550700/ai8.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774037197270x306278458765900200/ai1.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774037218039x205216978970479420/ai7.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774037232706x301427239531723900/ai5.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774037246798x563581381292359600/ai2.webp",
];

export function AiChatbotLandingHero() {
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
            The smarter way to launch your AI chatbot product
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto">
            We use a new approach to help entrepreneurs launch AI chatbot products you fully own, for a fraction of
            the cost and time of traditional development.
          </p>

          <div className="mt-8">
            <Button type="button" className={AI_CHATBOT_PRIMARY_BTN} onClick={openLandingPricingPopup}>
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
                alt={`AI chatbot screenshot ${i + 1}`}
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

export function AiChatbotWhyAirdev() {
  const lastIdx = COMPARISON_ROWS.length - 1;
  return (
    <section id="why-airdev" className="scroll-mt-[88px] py-20 md:py-28" style={{ backgroundColor: SECTION_BG }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[#1e3a8a] font-semibold tracking-wide uppercase text-[15px] mb-3 text-center">Why Airdev</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A2540] tracking-tight mb-4 text-center">
          Fast and flexible
        </h2>
        <p className="text-lg text-[#425466] text-center max-w-2xl mx-auto mb-12 md:mb-14 leading-relaxed">
          Off-the-shelf chat widgets are fast but rigid. Traditional AI builds drag on. We help you ship a custom
          assistant you control, without the usual timeline.
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

const AI_CHATBOT_FEATURES: Product[] = [
  {
    id: "conversational-ui",
    name: "Chat UI",
    cardHeading: "Conversational interface",
    description:
      "Threaded chats, streaming replies, and thoughtful UX so users get fast, clear answers from your assistant.",
    icon: ChatBubbleLeftRightIcon,
    color: "#1265EF",
    features: [
      { name: "Multi-turn conversation history", icon: ChatBubbleLeftRightIcon },
      { name: "Markdown, links, and rich message layouts", icon: DocumentTextIcon },
      { name: "Streaming responses and typing indicators", icon: BoltIcon },
      { name: "Suggested prompts and quick replies", icon: SparklesIcon },
    ],
  },
  {
    id: "models-prompts",
    name: "Models",
    cardHeading: "Models & system behavior",
    description:
      "Control prompts, model routing, and parameters so tone, safety, and quality match your product.",
    icon: CpuChipIcon,
    color: "#06b6d4",
    features: [
      { name: "System prompts & instruction templates", icon: ClipboardDocumentListIcon },
      { name: "Model selection, routing, and fallbacks", icon: CpuChipIcon },
      { name: "Temperature, tokens, and output shaping", icon: AdjustmentsVerticalIcon },
      { name: "Eval suites and regression checks", icon: ShieldCheckIcon },
    ],
  },
  {
    id: "knowledge-grounding",
    name: "Knowledge",
    cardHeading: "Knowledge & grounding",
    description:
      "Connect docs, help centers, and internal wikis so answers stay accurate with citations users can verify.",
    icon: BuildingLibraryIcon,
    color: "#a855f7",
    features: [
      { name: "RAG over uploaded docs & knowledge bases", icon: BuildingLibraryIcon },
      { name: "Chunking, embedding, and re-indexing", icon: Squares2X2Icon },
      { name: "Inline citations and source previews", icon: MagnifyingGlassIcon },
      { name: "Sync from URLs, CMS, or file stores", icon: ArrowPathIcon },
    ],
  },
  {
    id: "tools-integrations",
    name: "Tools",
    cardHeading: "Tools, APIs & handoff",
    description:
      "Let the bot look up live data, trigger workflows, or escalate seamlessly to humans when needed.",
    icon: ArrowsRightLeftIcon,
    color: "#10b981",
    features: [
      { name: "Function calling & structured tool use", icon: CpuChipIcon },
      { name: "REST APIs, webhooks, and OAuth connections", icon: ArrowsRightLeftIcon },
      { name: "Human-in-the-loop and ticket handoff", icon: UserGroupIcon },
      { name: "Multi-channel deployment (web, Slack, embed)", icon: GlobeAltIcon },
    ],
  },
  {
    id: "users-security",
    name: "Access",
    cardHeading: "Users, roles & privacy",
    description:
      "Authentication, roles, and careful handling of conversation data for teams and enterprise buyers.",
    icon: LockClosedIcon,
    color: "#f59e0b",
    features: [
      { name: "Auth, SSO, and workspace tenancy", icon: UserCircleIcon },
      { name: "Role-based permissions for admins vs. end users", icon: ShieldCheckIcon },
      { name: "Retention, export, and deletion policies", icon: LockClosedIcon },
      { name: "Audit logs for admin and compliance review", icon: ClipboardDocumentListIcon },
    ],
  },
  {
    id: "analytics-quality",
    name: "Analytics",
    cardHeading: "Analytics & continuous improvement",
    description:
      "Track usage, review transcripts, and close the loop with feedback so the assistant gets better over time.",
    icon: ChartBarIcon,
    color: "#ec4899",
    features: [
      { name: "Usage, latency, and cost dashboards", icon: ChartBarIcon },
      { name: "Conversation search, labels, and review queues", icon: MagnifyingGlassIcon },
      { name: "Thumbs up/down and custom feedback capture", icon: ChatBubbleLeftRightIcon },
      { name: "A/B prompts and staged rollouts", icon: ArrowPathIcon },
    ],
  },
  {
    id: "safety-compliance",
    name: "Safety",
    cardHeading: "Safety, moderation & compliance",
    description:
      "Guardrails, filters, and policies aligned with your brand and regulatory expectations.",
    icon: ShieldCheckIcon,
    color: "#0ea5e9",
    features: [
      { name: "Content moderation & blocklists", icon: ShieldCheckIcon },
      { name: "PII detection and redaction workflows", icon: LockClosedIcon },
      { name: "Disclaimers, compliance copy, and jurisdiction rules", icon: DocumentTextIcon },
      { name: "Rate limits, abuse detection, and circuit breakers", icon: CpuChipIcon },
    ],
  },
];

export function AiChatbotTypesSection() {
  return (
    <div id="marketplace-types" className="scroll-mt-[88px]">
      <SampleProducts
        bgColor="bg-white"
        products={AI_CHATBOT_FEATURES}
        label="COMMON FEATURES"
        title="AI chatbot features we specialize in"
        description="From chat UX to RAG, tools, and safety—we build the capabilities modern assistant products need. Pick your scope and we implement it end to end."
        leftColumnClassName="lg:col-span-3"
        rightColumnClassName="lg:col-span-9"
      />
    </div>
  );
}

const LAUNCHPAD_BULLETS = [
  "You own it, no license fees",
  "A lean team to get you started",
  "AI-powered scoping to define your chatbot and get a quote",
  "Base features include chat UI, knowledge grounding, and integrations",
  "Standard UX/UI with your colors, logo, and branding applied",
  "Customizations and add-ons based on what your assistant needs",
];

const AGENCY_BULLETS = [
  "You own it, no license fees",
  "A full team of product, design, and development experts",
  "Custom discovery and scoping process",
  "Strategic input on conversation flows, tools, and integrations",
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

export function AiChatbotPricingSection() {
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

const AI_CHATBOT_CASE_SLIDES_RAW = [
  {
    id: "thehair",
    company: "TheHair.App",
    logo: "https://thehair.app/icon-512.png",
    logoText: "",
    heading:
      "How TheHair.App used Airdev's freelance Bubble talent to maintain and integrate AI features on a budget",
    description: "",
    image:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/6629510c964641f9de1e196d_The%20Hair%20App-No-Code-AI-Airdev%20(1).jpg",
    imageTitle:
      "How TheHair.App used Airdev's freelance Bubble talent to maintain and integrate AI features on a budget",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "AI App", color: "#00d4ff" },
      { label: "Timeline", value: "Ongoing (Flex)", color: "#a960ee" },
      {
        label: "Key results",
        value:
          "141% increase in salon-facing treatments; 70% boost in hair care sales among salons using the app",
        color: "#ff6b6b",
      },
    ],
  },
];

export const AI_CHATBOT_CASE_SLIDES = AI_CHATBOT_CASE_SLIDES_RAW.map((slide) => ({
  ...slide,
  customFields: slide.customFields.filter((field) => field.label !== "Key results"),
}));
