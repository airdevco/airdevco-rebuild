"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowsRightLeftIcon,
  ArrowPathIcon,
  BookOpenIcon,
  CalendarIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  CpuChipIcon,
  DocumentTextIcon,
  FolderOpenIcon,
  FunnelIcon,
  KeyIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  QueueListIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Squares2X2Icon,
  TagIcon,
  UserGroupIcon,
  BellIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { SampleProducts, type Product } from "@/components/landing/sample-products";

const MARKETPLACE_PRIMARY_BTN =
  "bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none";

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const MARKETPLACE_HERO_BLUR_BG =
  "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d482ff67a3aac218170979_blurbg3.svg";

const KIDSBOOK_HERO_SCREEN_INDEX = 2;

function viewportScreenshotMaxHeightPx(): number {
  if (typeof window === "undefined") return 560;
  return Math.min(560, window.innerHeight * 0.52);
}

const SCREENSHOT_IMAGES = [
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774317016566x176168751553594100/kp1.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774317049622x631467535460109600/kp6.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774317058670x328424266168430660/kp7.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774317071301x405494079399526500/kp5.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774317081950x562747991967401200/kp4.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774317095132x266901785896859870/kp3.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774317106098x586222230311308500/kp2.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774317116186x807361713788360200/kp8.webp",
];

export function KnowledgeManagementLandingHero() {
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
            The smarter way to launch your knowledge management product
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            We use a new approach to help entrepreneurs launch knowledge management platforms, for a fraction of cost and
            time of traditional development.
          </p>

          <div className="mt-8">
            <Button type="button" className={MARKETPLACE_PRIMARY_BTN} onClick={scrollToContact}>
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
                ref={i === KIDSBOOK_HERO_SCREEN_INDEX ? kidsbookImgRef : undefined}
                src={src}
                alt={`Knowledge management product screenshot ${i + 1}`}
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

export function KnowledgeManagementWhyAirdev() {
  const lastIdx = COMPARISON_ROWS.length - 1;
  return (
    <section id="why-airdev" className="scroll-mt-[88px] py-20 md:py-28" style={{ backgroundColor: SECTION_BG }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[#1e3a8a] font-semibold tracking-wide uppercase text-sm mb-3 text-center">Why Airdev</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A2540] tracking-tight mb-4 text-center">
          Fast and flexible
        </h2>
        <p className="text-lg text-[#425466] text-center max-w-2xl mx-auto mb-12 md:mb-14 leading-relaxed">
          SaaS platforms are fast but inflexible. Traditional dev gives you control but takes forever. We give you both.
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

const KMS_TYPES_PRODUCTS: Product[] = [
  {
    id: "knowledge-organization",
    name: "Structure",
    cardHeading: "Knowledge organization & taxonomy",
    description:
      "Structure content so teams can browse with confidence—spaces, collections, and tags that match how your org thinks.",
    icon: BookOpenIcon,
    color: "#1265EF",
    features: [
      { name: "Hierarchical spaces, categories, and collections", icon: FolderOpenIcon },
      { name: "Flexible tagging, labels, and cross-linking between articles", icon: TagIcon },
      { name: "Internal vs. external or customer-facing knowledge bases", icon: Squares2X2Icon },
      { name: "Templates for SOPs, playbooks, and runbooks", icon: ClipboardDocumentListIcon },
    ],
  },
  {
    id: "search-discovery",
    name: "Search",
    cardHeading: "Search & discovery",
    description:
      "Help people find answers fast with search that understands your content—not just keyword matching on page titles.",
    icon: MagnifyingGlassIcon,
    color: "#06b6d4",
    features: [
      { name: "Full-text search with highlighting and snippets", icon: MagnifyingGlassIcon },
      { name: "Facets, filters, and scoped search by space or audience", icon: FunnelIcon },
      { name: "Synonyms, curated best bets, and query suggestions", icon: SparklesIcon },
      { name: "Saved searches and personalization for frequent users", icon: UserGroupIcon },
    ],
  },
  {
    id: "authoring-lifecycle",
    name: "Authoring",
    cardHeading: "Authoring & content lifecycle",
    description:
      "Ship accurate knowledge with drafts, reviews, and versioning—so updates are traceable and nothing goes live by accident.",
    icon: PencilSquareIcon,
    color: "#a855f7",
    features: [
      { name: "Rich text editor with embeds, code blocks, and media", icon: DocumentTextIcon },
      { name: "Drafts, approvals, and scheduled publishing", icon: CalendarIcon },
      { name: "Version history, compare, and rollback", icon: ArrowPathIcon },
      { name: "Editorial workflows and ownership by team or SME", icon: QueueListIcon },
    ],
  },
  {
    id: "access-governance",
    name: "Governance",
    cardHeading: "Access & governance",
    description:
      "Protect sensitive know-how with granular permissions, audit trails, and policies that stand up to compliance reviews.",
    icon: ShieldCheckIcon,
    color: "#10b981",
    features: [
      { name: "Role-based access at space, folder, and article level", icon: KeyIcon },
      { name: "Confidential collections and redaction-ready exports", icon: LockClosedIcon },
      { name: "Retention, archival, and legal-hold workflows", icon: ClipboardDocumentListIcon },
      { name: "Audit logs for views, edits, and permission changes", icon: ShieldCheckIcon },
    ],
  },
  {
    id: "collaboration-expertise",
    name: "Collaboration",
    cardHeading: "Collaboration & expertise",
    description:
      "Turn static docs into a living system—comments, expert routing, and feedback loops that keep content trustworthy.",
    icon: UserGroupIcon,
    color: "#f59e0b",
    features: [
      { name: "Inline comments, @mentions, and discussion threads", icon: ChatBubbleLeftRightIcon },
      { name: "Expert assignments and SME review queues", icon: UserGroupIcon },
      { name: "Request-an-article and knowledge gap intake", icon: QueueListIcon },
      { name: "Subscriptions and change notifications for owners", icon: BellIcon },
    ],
  },
  {
    id: "analytics-content-health",
    name: "Analytics",
    cardHeading: "Analytics & content health",
    description:
      "Measure what gets used, what goes stale, and where gaps exist—so you can prioritize updates that actually help people.",
    icon: ChartBarIcon,
    color: "#ec4899",
    features: [
      { name: "Usage dashboards for searches, articles, and authors", icon: ChartBarIcon },
      { name: "Stale-content detection and review reminders", icon: CalendarIcon },
      { name: "Helpful / not helpful signals and qualitative feedback", icon: ChatBubbleLeftRightIcon },
      { name: "Reports for compliance, training, and leadership reviews", icon: ClipboardDocumentListIcon },
    ],
  },
  {
    id: "integrations-ai",
    name: "Integrations",
    cardHeading: "Integrations & AI",
    description:
      "Connect knowledge to where work happens—ticketing, chat, LMS—and layer AI that summarizes and answers over your corpus.",
    icon: CpuChipIcon,
    color: "#0ea5e9",
    features: [
      { name: "REST APIs, webhooks, and embeddable widgets", icon: ArrowsRightLeftIcon },
      { name: "Slack, Teams, Jira, and ITSM / ticketing sync", icon: ArrowPathIcon },
      { name: "AI-generated summaries, tags, and related-article suggestions", icon: SparklesIcon },
      { name: "Semantic Q&A and copilots grounded in your approved content", icon: CpuChipIcon },
    ],
  },
];

export function KnowledgeManagementTypesSection() {
  return (
    <div id="knowledge-management-features" className="scroll-mt-[88px]">
      <SampleProducts
        bgColor="bg-white"
        products={KMS_TYPES_PRODUCTS}
        label="COMMON FEATURES"
        title="Knowledge management features we specialize in"
        description="From structured wikis to search, governance, and AI—we build the core capabilities modern knowledge products need. Choose what you need and we'll implement it."
        leftColumnClassName="lg:col-span-3"
        rightColumnClassName="lg:col-span-9"
      />
    </div>
  );
}

const KMS_LAUNCHPAD_BULLETS = [
  "You own it, no license fees",
  "A lean team to get you started",
  "AI-powered scoping to define your knowledge product and get a quote",
  "Base features include search, structured content, permissions, and workflows",
  "Standard UX/UI with your colors, logo, and branding applied",
  "Customizations and add-ons based on what your knowledge base needs",
];

const KMS_AGENCY_BULLETS = [
  "You own it, no license fees",
  "A full team of product, design, and development experts",
  "Custom discovery and scoping process",
  "Strategic input on taxonomy, governance, and rollout",
  "Custom UX/UI design",
  "Complex integrations, AI, and enterprise requirements",
];

const KMS_PRICING_PLANS = [
  {
    name: "Launchpad",
    price: "$5k+",
    subtitle: "Start from a template and make it your own",
    bullets: KMS_LAUNCHPAD_BULLETS,
  },
  {
    name: "Agency",
    price: "$20k+",
    subtitle: "Build anything that fits your needs",
    bullets: KMS_AGENCY_BULLETS,
  },
];

export function KnowledgeManagementPricingSection() {
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
          {KMS_PRICING_PLANS.map((plan) => (
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

export const KNOWLEDGE_MANAGEMENT_CASE_SLIDES = [
  {
    id: "tfa",
    company: "Teach for America",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447145612x608821623632928600/tfa.png",
    logoText: "",
    heading:
      "How Airdev helped Teach for America build a custom no-code internal hub with Bubble to support corps members across their journey",
    description: "",
    image:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635075d6712da824635efa1d_tfa%20(1).jpeg",
    imageTitle:
      "How Airdev helped Teach for America build a custom no-code internal hub with Bubble to support corps members across their journey",
    customFields: [
      { label: "Business type", value: "National nonprofit", color: "#635bff" },
      { label: "Product type", value: "Internal hub", color: "#00d4ff" },
      { label: "Timeline", value: "4 weeks", color: "#a960ee" },
      { label: "Key results", value: "Ability to manage the organization at scale", color: "#ff6b6b" },
    ],
  },
  {
    id: "navigreat",
    company: "NaviGreat",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765319327038x377695290107660200/navigreat.png",
    logoText: "",
    heading:
      "How NaviGreat built a digital hub for nonprofit organizations with Airdev's freelance Bubble developer in just 2 weeks",
    description: "",
    image:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/6644f29802eba3647e2d8030_NaviGreat_Airdev_no_code.jpg",
    imageTitle:
      "How NaviGreat built a digital hub for nonprofit organizations with Airdev's freelance Bubble developer in just 2 weeks",
    customFields: [
      { label: "Business type", value: "Nonprofit organization", color: "#635bff" },
      { label: "Product type", value: "Social network platform", color: "#00d4ff" },
      { label: "Timeline", value: "2 weeks", color: "#a960ee" },
      { label: "Key results", value: "A fully functional app developed in just 2 weeks", color: "#ff6b6b" },
    ],
  },
];
