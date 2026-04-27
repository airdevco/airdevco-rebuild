"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AcademicCapIcon,
  ArrowsRightLeftIcon,
  ArrowPathIcon,
  BuildingLibraryIcon,
  CalendarIcon,
  CheckBadgeIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  DocumentTextIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  QueueListIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Squares2X2Icon,
  TagIcon,
  UserCircleIcon,
  UserGroupIcon,
  VideoCameraIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { SampleProducts, type Product } from "@/components/landing/sample-products";

const LMS_PRIMARY_BTN =
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

/** LMS hero shots — edit only this file for LMS */
const SCREENSHOT_IMAGES = [
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774027428617x992217413442989600/lms1.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774027448043x976579821918395200/lms2.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774027461960x445708139142747800/lms3.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774027505830x828868339002731800/lms4.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774027520019x931944869006915400/lms5.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774027563746x461894826979542200/lms7.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774027582484x516969815617974100/lms6.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774028438718x237469127535857570/lms8.webp",
];

export function LmsLandingHero() {
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
            The smarter way to launch your learning management system
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            We help teams ship LMS products with courses, assessments, and learner progress—custom to your audience,
            compliance needs, and go-to-market timeline.
          </p>
          <div className="mt-8">
            <Button type="button" className={LMS_PRIMARY_BTN} onClick={openLandingPricingPopup}>
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
              className="rounded-[8px] overflow-hidden border border-slate-200/80 bg-slate-50/70 shadow-sm min-w-0 block w-full"
              style={unifiedShotHeight ? { height: unifiedShotHeight } : undefined}
            >
              <img
                ref={i === REF_SCREEN_INDEX ? referenceImgRef : undefined}
                src={src}
                alt={`Learning platform screenshot ${i + 1}`}
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

const WHY_AIRDEV_BG = "#ffffff";
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

export function LmsWhyAirdev() {
  const lastIdx = COMPARISON_ROWS.length - 1;
  return (
    <section id="why-airdev" className="scroll-mt-[88px] py-20 md:py-28 bg-white" style={{ backgroundColor: WHY_AIRDEV_BG }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[#1e3a8a] font-semibold tracking-wide uppercase text-[15px] mb-3 text-center">Why Airdev</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A2540] tracking-tight mb-4 text-center">
          Fast and flexible
        </h2>
        <p className="text-lg text-[#425466] text-center max-w-2xl mx-auto mb-12 md:mb-14 leading-relaxed">
          Generic LMS tools are quick to turn on but hard to bend to your curriculum and brand. Traditional builds take
          forever. We help you launch a platform you own—with the learning workflows that matter to you.
        </p>

        <div className="overflow-x-auto w-full max-w-[1180px] mx-auto">
          <table className="w-full min-w-[720px] border-separate border-spacing-0">
            <thead>
              <tr>
                <th className={`${ROW_DIVIDER} ${thHeaderBase} text-left w-[26%]`} style={{ backgroundColor: WHY_AIRDEV_BG }} scope="col" />
                <th
                  className={`${thHeaderBase} text-center text-[#1265EF] border-b border-[#E2E8F0] rounded-t-2xl`}
                  style={{ backgroundColor: AIRDEV_COL_BG }}
                  scope="col"
                >
                  Airdev
                </th>
                <th className={`${ROW_DIVIDER} ${thHeaderBase} text-center text-[#0A2540]`} style={{ backgroundColor: WHY_AIRDEV_BG }} scope="col">
                  Off-the-Shelf LMS
                </th>
                <th className={`${ROW_DIVIDER} ${thHeaderBase} text-center text-[#0A2540]`} style={{ backgroundColor: WHY_AIRDEV_BG }} scope="col">
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
                    <td className={`${divCls} ${tdBodyCls} text-left font-medium text-[#0A2540]`} style={{ backgroundColor: WHY_AIRDEV_BG }}>
                      {row.label}
                    </td>
                    <td
                      className={`${divCls} ${tdBodyCls} text-center ${isLast ? "rounded-b-2xl" : ""}`}
                      style={{ backgroundColor: AIRDEV_COL_BG }}
                    >
                      <CellContent value={row.airdev} statusIcons={!!row.statusIcons} isAirdev />
                    </td>
                    <td className={`${divCls} ${tdBodyCls} text-center`} style={{ backgroundColor: WHY_AIRDEV_BG }}>
                      <CellContent value={row.saas} statusIcons={!!row.statusIcons} isAirdev={false} />
                    </td>
                    <td className={`${divCls} ${tdBodyCls} text-center`} style={{ backgroundColor: WHY_AIRDEV_BG }}>
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

const LMS_FEATURES: Product[] = [
  {
    id: "courses-content",
    name: "Courses",
    cardHeading: "Course authoring & catalog",
    description:
      "Structure curricula the way you teach: modules, lessons, resources, and prerequisites—with versioning and reuse across programs.",
    icon: BuildingLibraryIcon,
    color: "#1265EF",
    features: [
      { name: "Modular courses with rich text and media embeds", icon: DocumentTextIcon },
      { name: "Learning objectives and prerequisite chains", icon: QueueListIcon },
      { name: "Content libraries, tags, and reuse across cohorts", icon: TagIcon },
      { name: "SCORM packages or custom lesson types (your choice)", icon: ArrowPathIcon },
    ],
  },
  {
    id: "learner-portal",
    name: "Learners",
    cardHeading: "Learner portal & progress",
    description:
      "Give every learner a clear path: enrollment, dashboard, completion status, and certificates—on web and mobile-friendly layouts.",
    icon: AcademicCapIcon,
    color: "#06b6d4",
    features: [
      { name: "Self-serve or admin-driven enrollment", icon: UserCircleIcon },
      { name: "Progress bars, resume-where-you-left-off, bookmarks", icon: Squares2X2Icon },
      { name: "Transcripts and downloadable credentials", icon: ShieldCheckIcon },
      { name: "Role-based views for students, managers, and admins", icon: UserGroupIcon },
    ],
  },
  {
    id: "assessments",
    name: "Assessments",
    cardHeading: "Assessments & grading",
    description:
      "Validate learning with quizzes, assignments, and rubrics—auto-graded where it helps, manual review where it matters.",
    icon: ClipboardDocumentCheckIcon,
    color: "#10b981",
    features: [
      { name: "Question banks, randomization, and attempt limits", icon: DocumentTextIcon },
      { name: "Multiple question types and weighted scoring", icon: TagIcon },
      { name: "Instructor review queues and feedback", icon: ChatBubbleLeftRightIcon },
      { name: "Pass/fail rules tied to certificates or unlocks", icon: ShieldCheckIcon },
    ],
  },
  {
    id: "paths-cohorts",
    name: "Paths",
    cardHeading: "Learning paths & scheduling",
    description:
      "Run fixed-date cohorts, rolling enrollments, or blended programs with deadlines, reminders, and calendar-aware schedules.",
    icon: CalendarIcon,
    color: "#a855f7",
    features: [
      { name: "Sequential paths and optional electives", icon: QueueListIcon },
      { name: "Cohort calendars, due dates, and nudges", icon: CalendarIcon },
      { name: "Instructor-led sessions alongside async content", icon: VideoCameraIcon },
      { name: "Waitlists, capacity, and section management", icon: UserGroupIcon },
    ],
  },
  {
    id: "live-social",
    name: "Live",
    cardHeading: "Live & social learning",
    description:
      "Support webinars, office hours, discussions, and announcements so learners stay engaged between lessons.",
    icon: VideoCameraIcon,
    color: "#f59e0b",
    features: [
      { name: "Live session scheduling with links or embedded video", icon: VideoCameraIcon },
      { name: "Recordings and replay inside the course", icon: DocumentTextIcon },
      { name: "Forums, Q&A threads, and moderation tools", icon: ChatBubbleLeftRightIcon },
      { name: "Announcements and targeted messaging", icon: ArrowsRightLeftIcon },
    ],
  },
  {
    id: "admin-compliance",
    name: "Admin",
    cardHeading: "Admin, roles & compliance",
    description:
      "Enterprise-ready controls: org hierarchy, granular permissions, audit trails, and accessibility-conscious UX patterns.",
    icon: LockClosedIcon,
    color: "#ec4899",
    features: [
      { name: "SSO-ready auth and org / sub-account structure", icon: LockClosedIcon },
      { name: "Granular roles for authors, instructors, and viewers", icon: UserGroupIcon },
      { name: "Activity logs and export for audits", icon: MagnifyingGlassIcon },
      { name: "WCAG-minded patterns and branded experiences", icon: CheckBadgeIcon },
    ],
  },
  {
    id: "analytics-integrations",
    name: "Analytics",
    cardHeading: "Analytics & integrations",
    description:
      "Prove impact with completion and engagement reporting, and connect your LMS to HRIS, CRM, and payment tools.",
    icon: SparklesIcon,
    color: "#0ea5e9",
    features: [
      { name: "Completion, time-on-task, and cohort dashboards", icon: Squares2X2Icon },
      { name: "Exports, filters, and scheduled reports", icon: MagnifyingGlassIcon },
      { name: "REST APIs and webhooks for HRIS / CRM sync", icon: ArrowsRightLeftIcon },
      { name: "Monetization hooks: tiers, coupons, or B2B billing handoff", icon: TagIcon },
    ],
  },
];

export function LmsTypesSection() {
  return (
    <div id="marketplace-types" className="scroll-mt-[88px]">
      <SampleProducts
        bgColor="#F6F9FC"
        products={LMS_FEATURES}
        label="COMMON FEATURES"
        title="LMS capabilities we specialize in"
        description="From course delivery to assessments, cohorts, and analytics—we build learning platforms around how your organization trains, sells education, or serves members."
        leftColumnClassName="lg:col-span-3"
        rightColumnClassName="lg:col-span-9"
      />
    </div>
  );
}

const LAUNCHPAD_BULLETS = [
  "You own it, no per-seat LMS license",
  "A lean team to get you started",
  "AI-powered scoping to define your LMS product and get a quote",
  "Base modules include courses, enrollments, assessments, and reporting",
  "Standard UX/UI with your colors, logo, and branding applied",
  "Customizations for your curriculum, compliance, and integrations",
];

const AGENCY_BULLETS = [
  "You own it, no per-seat LMS license",
  "A full team of product, design, and development experts",
  "Custom discovery and scoping process",
  "Strategic input on learning architecture and rollout",
  "Custom UX/UI design",
  "Complex workflows: multi-tenant, B2B, or regulated training",
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

export function LmsPricingSection() {
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

const LMS_CASE_SLIDES_RAW = [
  {
    id: "bubble",
    company: "Bubble.io",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766446287440x908698787583342700/bubble.io.png",
    logoText: "",
    heading:
      "How no-code leader Bubble turned to Airdev for a custom rebuild of their Developer Certification Platform... built on Bubble",
    description: "",
    image:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/665f5ab8b085585d4543d3ea_Certification---In-line-5.png",
    imageTitle:
      "How no-code leader Bubble turned to Airdev for a custom rebuild of their Developer Certification Platform... built on Bubble",
    customFields: [
      { label: "Business type", value: "SMB", color: "#635bff" },
      { label: "Product type", value: "Exam platform", color: "#00d4ff" },
      { label: "Timeline", value: "3 months", color: "#a960ee" },
      {
        label: "Key results",
        value: "A more performant, reliable, and flexible exam for users and internal developers",
        color: "#ff6b6b",
      },
    ],
  },
];

export const LMS_CASE_SLIDES = LMS_CASE_SLIDES_RAW.map((slide) => ({
  ...slide,
  customFields: slide.customFields.filter((field) => field.label !== "Key results"),
}));
