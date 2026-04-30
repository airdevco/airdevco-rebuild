"use client";

/**
 * Flex Bubble freelancers landing — forked from BubbleAgency so this page can diverge
 * without changing `/bubble-development/bubble-agency`.
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Navbar,
  Hero,
  Testimonials,
  SaasCTA,
  Footer,
  ClientLogoTicker,
  OurRoles,
  type Role,
} from "@/components/landing";
import { MockupWireframe } from "@/components/landing/process-section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  UserGroupIcon,
  PaintBrushIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  ChatBubbleLeftIcon,
  VideoCameraIcon,
  CheckCircleIcon,
  CommandLineIcon,
  ClipboardDocumentListIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";

/* ─── HOW IT WORKS — matches the DISCOVERY section on product-design exactly ─── */

const CIRCLE_SIZE = 52;
const CIRCLE_HALF = CIRCLE_SIZE / 2;

const FLEX_HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    icon: ChatBubbleLeftIcon,
    title: "Describe your needs",
    description: "We'll look for the perfect match within our network of vetted experts",
  },
  {
    step: "02",
    icon: VideoCameraIcon,
    title: "Interview & hire",
    description: "Chat face-to-face to see if it's a good fit, and make an offer",
  },
  {
    step: "03",
    icon: CheckCircleIcon,
    title: "Manage your build",
    description: "You direct your team's efforts, and own the outcomes",
  },
] as const;

function FlexHowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="py-24 bg-[#F6F9FC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[15px] font-semibold uppercase tracking-wider mb-3 block text-[#1e3a8a]">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-[#1a1a1a]">
            Hire the top Bubble help in 3 simple steps
          </h2>
          <p className="text-[20px] leading-relaxed text-[#425466]">
            Tell us what you need, meet your match, and run your build with vetted Flex talent — in three clear steps.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute h-px pointer-events-none"
            style={{
              top: CIRCLE_HALF,
              left: "calc(100% / 6)",
              right: "calc(100% / 6)",
              background: "linear-gradient(90deg, #1265EF40 0%, #1265EF80 50%, #1265EF40 100%)",
            }}
            aria-hidden
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FLEX_HOW_IT_WORKS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                className="relative flex flex-col items-center"
              >
                {/* Icon circle — sits above card */}
                <div
                  className="relative z-10 flex items-center justify-center rounded-full border border-[#1265EF]/25 bg-white shadow-[0_4px_20px_-4px_rgba(18,101,239,0.2)]"
                  style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE, marginBottom: 16 }}
                >
                  <step.icon className="h-5 w-5 text-[#1265EF]" />
                </div>

                {/* Card */}
                <div className="w-full rounded-2xl border border-[#E5ECF6] bg-white p-6 shadow-[0_2px_12px_-4px_rgba(18,101,239,0.08)] flex flex-col text-left flex-1">
                  <span className="mb-3 block text-[14px] font-semibold text-[#8C97A8] tabular-nums">
                    {step.step}
                  </span>
                  <h3 className="mb-3 text-[24px] font-bold text-[#0A2540] leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[18px] leading-relaxed text-[#425466]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── USE CASES (replaces DELIVERABLES on this page only) ─── */

const wireframeSpring = (delay: number) => ({
  type: "spring" as const,
  stiffness: 260,
  damping: 34,
  mass: 0.85,
  delay,
});

function FlexBuildNewAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0A2540] px-5 py-8">
      <div className="w-full max-w-[300px]" style={{ transform: "scale(0.8)" }}>
        <MockupWireframe />
      </div>
    </div>
  );
}

function FlexMaintainAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.35, margin: "0px 0px -10% 0px" });
  const pushes = [
    { label: "Performance pass", sub: "DB & workflows", delay: 0.15 },
    { label: "New module shipped", sub: "Customer portal", delay: 0.35 },
    { label: "Regression sweep", sub: "Pre-deploy QA", delay: 0.55 },
  ];
  return (
    <div ref={ref} className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0A2540] px-5 py-8">
      <div className="absolute inset-0 bg-[radial-gradient(#1265EF15_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="w-full max-w-[280px]" style={{ transform: "scale(0.85)" }}>
        <motion.div
          className="relative w-full rounded-xl border border-[#1E3A5F] bg-[#112F4E] p-4 shadow-2xl"
          initial={{ y: 14, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 14, opacity: 0 }}
          transition={wireframeSpring(0.08)}
        >
          <div className="mb-3 flex items-center justify-between border-b border-[#1E3A5F] pb-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#1265EF]/35 bg-[#1265EF]/15">
                <ArrowPathIcon className="h-4 w-4 text-[#1265EF]" />
              </div>
              <div>
                <div className="text-[10px] text-[#ADBDCC]">Live app</div>
                <div className="text-[11px] font-bold text-white">Ongoing support</div>
              </div>
            </div>
            <motion.div
              className="rounded border border-[#0AE4E3]/40 bg-[#0AE4E3]/10 px-2 py-0.5 text-[9px] font-bold text-[#0AE4E3]"
              animate={isInView ? { opacity: [0.65, 1, 0.65] } : {}}
              transition={{ duration: 2.2, repeat: Infinity }}
            >
              v2.4
            </motion.div>
          </div>
          <div className="space-y-2">
            {pushes.map((row) => (
              <motion.div
                key={row.label}
                className="rounded-lg border border-[#1E3A5F] bg-[#0A2540]/55 p-2.5"
                initial={{ opacity: 0, x: -8 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                transition={{ delay: row.delay, duration: 0.35 }}
              >
                <div className="text-[10px] font-medium text-white">{row.label}</div>
                <div className="text-[9px] text-[#ADBDCC]">{row.sub}</div>
                <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-[#1E3A5F]/60">
                  <motion.div
                    className="h-full rounded-full bg-[#1265EF]/70"
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: "100%" } : { width: "0%" }}
                    transition={{ duration: 0.6, delay: row.delay + 0.2, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FlexAugmentAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.35, margin: "0px 0px -10% 0px" });
  return (
    <div ref={ref} className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0A2540] px-4 py-8">
      <div className="absolute inset-0 bg-[radial-gradient(#1265EF15_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative flex w-full max-w-[290px] flex-col items-center gap-4" style={{ transform: "scale(0.88)" }}>
        <div className="flex w-full items-center justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-10 w-10 shrink-0 rounded-full border border-[#1E3A5F] bg-[#112F4E]"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.05 + i * 0.12, type: "spring", stiffness: 260, damping: 18 }}
            />
          ))}
        </div>
        <motion.div
          className="h-px w-4/5 bg-gradient-to-r from-transparent via-[#1265EF]/70 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ delay: 0.45, duration: 0.35 }}
        />
        <motion.div
          className="flex items-center gap-2 rounded-full border-2 border-[#1265EF] bg-white px-3 py-1.5 shadow-lg"
          initial={{ y: 16, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 16, opacity: 0 }}
          transition={{ delay: 0.55, type: "spring", stiffness: 220, damping: 16 }}
        >
          <UserGroupIcon className="h-4 w-4 text-[#1265EF]" />
          <span className="text-[10px] font-bold tracking-wide text-[#0A2540]">FLEX DEV</span>
        </motion.div>
        <p className="text-center text-[9px] text-[#ADBDCC]">Plugs into your system & team</p>
      </div>
    </div>
  );
}

const FLEX_USE_CASE_CARDS = [
  {
    title: "Build a new app",
    description: "Save money by hiring who you need, managing them yourself",
    Animation: FlexBuildNewAnimation,
  },
  {
    title: "Maintain an existing app",
    description: "Support & extend your app with a single dev",
    Animation: FlexMaintainAnimation,
  },
  {
    title: "Augment a team",
    description: "Plug a dev into your existing system/team",
    Animation: FlexAugmentAnimation,
  },
];

function FlexUseCasesSection() {
  return (
    <section className="border-t border-[#1E3A5F] bg-[#0A2540] py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 block text-[15px] font-semibold uppercase tracking-wider text-[#0AE4E3]">
            USE CASES FOR BUBBLE FREELANCERS
          </span>
          <h2 className="mb-6 text-4xl font-semibold tracking-tight text-white lg:text-5xl">
            How you can use Airdev Flex
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {FLEX_USE_CASE_CARDS.map((output) => {
            const Animation = output.Animation;
            return (
              <div
                key={output.title}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#1E3A5F] bg-[#112F4E]/50"
              >
                <div className="h-60 w-full overflow-hidden border-b border-[#1E3A5F] bg-[#0A2540]/45">
                  <Animation />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="mb-3 text-[24px] font-bold text-white">{output.title}</h3>
                  <p className="text-[18px] leading-relaxed text-[#ADBDCC]">{output.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const FLEX_ROLES: Role[] = [
  {
    id: "developer",
    title: "Developer",
    description:
      "There are many Bubblers out there, but only a select few with the technical and professional standards to take your app to the next level. We select our developers based on a rigorous vetting process including technical challenges and client simulations, so we can trust them with complex client builds.",
    icon: CommandLineIcon,
    color: "#1265EF",
    helpTitle: "Developers can help with:",
    helpPoints: [
      "Building an app from scratch using your functional specs (+Canvas design components)",
      "Extending and maintaining an existing Bubble app you've built",
      "Troubleshooting, refactoring, or optimizing your Bubble app's performance",
    ],
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    description:
      "Our UX designers help clients translate their app requirements into a clean and intuitive experience for users, leveraging our Canvas design framework to optimize for build efficiency. We select based on rigorous testing to ensure UXDs match form with function for nearly any concept.",
    icon: PaintBrushIcon,
    color: "#f59e0b",
    helpTitle: "UX Designers can help with:",
    helpPoints: [
      "Creating high-fidelity designs to fit your feature requirements (using Canvas design framework)",
      "Architecting high-level app UX and choosing Canvas elements to fit",
      "Reskinning an existing app or set of mockups",
    ],
  },
  {
    id: "product-manager",
    title: "Product Manager",
    description:
      "Our Product Managers help clients translate their vision into clear functional requirements, optimized for building in Bubble, to give a developer the direction they need. We select PMs who are analytical problem-solvers, clear communicators, and can work to Bubble's strengths.",
    icon: ClipboardDocumentListIcon,
    color: "#10b981",
    helpTitle: "Product Managers can help with:",
    helpPoints: [
      "Documenting clear and detailed feature requirements",
      "Prioritizing features and creating project plans",
      "Consulting on the best way to implement features in Bubble",
    ],
  },
  {
    id: "front-end-developer",
    title: "Front-end Developer",
    description:
      "Our front-end developers specialize in implementing pixel-perfect designs in Bubble in a way that sets a build up for success. We vet front-end skills based on in-house training courses and client simulations, to ensure they can match any design while following building best practices.",
    icon: ComputerDesktopIcon,
    color: "#06b6d4",
    helpTitle: "Front-end Developers can help with:",
    helpPoints: [
      "Building custom Bubble designs using your detailed mockups (e.g., Figma)",
      "Creating custom modules within the Canvas design framework",
      "Troubleshooting front-end/responsive issues, and optimizing for performance",
    ],
  },
  {
    id: "qa-specialist",
    title: "QA Specialist",
    description:
      "Software products are only as good as their latest round of testing, and our QA specialists can help make sure everything is working properly before you deploy to users. We select based on client simulations to ensure our specialists find issues and communicate clearly.",
    icon: ShieldCheckIcon,
    color: "#a855f7",
    helpTitle: "QA Specialists can help with:",
    helpPoints: [
      "Holistic app testing (before a launch)",
      "Testing new features before they are deployed",
      "Regression testing as you extend your app",
    ],
  },
];

/* ─── HOW WE'RE DIFFERENT — LMS-style comparison table, Flex-only (3 columns) ─── */

const FLEX_DIFF_BG = "#ffffff";
const FLEX_DIFF_AIRDEV_COL_BG = "#ECF2FB";
const FLEX_DIFF_ROW_DIVIDER = "border-b border-[#E2E8F0]";
const flexDiffThHeader =
  "text-[20px] leading-[28px] font-semibold py-5 md:py-6 px-5 md:px-6 align-middle";
const flexDiffTdBody = "py-5 md:py-6 px-5 md:px-6 text-[16px] leading-[24px] align-middle";

const FLEX_VS_TRADITIONAL_ROWS: { label: string; flex: string; traditional: string }[] = [
  {
    label: "Talent",
    flex: "Airdev vets the top 1% Bubble experts using rigorous selection process",
    traditional: "Lots of options, difficult to compare technical skills across profiles",
  },
  {
    label: "Support Resources",
    flex: "Experts can access Airdev's technical documentation & help desk",
    traditional: "Freelancers are on their own, risk getting stuck and burning time",
  },
  {
    label: "Team configuration",
    flex: "A single place to hire every role you need to build a great no-code product",
    traditional: "Find roles in different places, designers and PMs likely to not be familiar with Bubble",
  },
  {
    label: "Management",
    flex: "Book and pay via our easy-to-use portal, get help from your client success manager when you need it",
    traditional: "Find roles in different places, designers and PMs likely to not be familiar with Bubble",
  },
];

function FlexHowWereDifferent() {
  const lastIdx = FLEX_VS_TRADITIONAL_ROWS.length - 1;
  return (
    <section className="scroll-mt-[88px] bg-white py-20 md:py-28" style={{ backgroundColor: FLEX_DIFF_BG }}>
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="mb-3 text-left text-[15px] font-semibold uppercase tracking-wide text-[#1e3a8a]">
          HOW WE&apos;RE DIFFERENT
        </p>
        <h2 className="mb-4 text-left text-3xl font-semibold tracking-tight text-[#0A2540] md:text-4xl lg:text-5xl">
          Benefits of Airdev Flex vs. traditional freelance
        </h2>
        <p className="mb-12 max-w-2xl text-left text-lg leading-relaxed text-[#425466] md:mb-14">
          Airdev Flex pairs rigorously vetted Bubble specialists with shared Airdev resources and a single hiring
          workflow—so you spend less time evaluating profiles and coordinating freelancers, and more time shipping.
        </p>

        <div className="mx-auto w-full max-w-[1180px] overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-0">
            <thead>
              <tr>
                <th
                  className={`${FLEX_DIFF_ROW_DIVIDER} ${flexDiffThHeader} w-[22%] text-left`}
                  style={{ backgroundColor: FLEX_DIFF_BG }}
                  scope="col"
                />
                <th
                  className={`${flexDiffThHeader} rounded-t-2xl border-b border-[#E2E8F0] text-left text-[#1265EF]`}
                  style={{ backgroundColor: FLEX_DIFF_AIRDEV_COL_BG }}
                  scope="col"
                >
                  Airdev Flex
                </th>
                <th
                  className={`${FLEX_DIFF_ROW_DIVIDER} ${flexDiffThHeader} text-left text-[#0A2540]`}
                  style={{ backgroundColor: FLEX_DIFF_BG }}
                  scope="col"
                >
                  Traditional freelance
                </th>
              </tr>
            </thead>
            <tbody>
              {FLEX_VS_TRADITIONAL_ROWS.map((row, idx) => {
                const isLast = idx === lastIdx;
                const divCls = isLast ? "" : FLEX_DIFF_ROW_DIVIDER;
                return (
                  <tr key={row.label}>
                    <td
                      className={`${divCls} ${flexDiffTdBody} text-left font-medium text-[#0A2540]`}
                      style={{ backgroundColor: FLEX_DIFF_BG }}
                    >
                      {row.label}
                    </td>
                    <td
                      className={`${divCls} ${flexDiffTdBody} text-left font-normal text-[#111827] ${isLast ? "rounded-b-2xl" : ""}`}
                      style={{ backgroundColor: FLEX_DIFF_AIRDEV_COL_BG }}
                    >
                      {row.flex}
                    </td>
                    <td
                      className={`${divCls} ${flexDiffTdBody} text-left font-normal text-[#425466]`}
                      style={{ backgroundColor: FLEX_DIFF_BG }}
                    >
                      {row.traditional}
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

/* ─── Page component ─────────────────────────────────────────────────────── */

const FlexBubbleFreelancers = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238405098x558032232358736100/Colfax-Regular.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238390337x266305410589744440/Colfax-Medium.woff') format('woff');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238365698x537474310193827300/Colfax-Bold.woff') format('woff');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238333088x971494408092793500/Colfax-Black.woff') format('woff');
            font-weight: 900;
            font-style: normal;
            font-display: swap;
          }
        `,
        }}
      />
      <div
        className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900"
        style={{ fontFamily: "'Colfax', sans-serif" }}
      >
        <Navbar />
        <main>
          <Hero
            title={
              <>
                Hire the top 1% of{" "}
                <span className="whitespace-nowrap">Bubble freelancers</span>
                , on a fractional basis
              </>
            }
            description="Airdev Flex is a flexible & cost-effective alternative to hiring a full agency. Match directly with top freelance Bubble developers, designers, & product managers to build & scale your product."
            showImages={true}
            showButton={true}
            buttonText="Get started"
            buttonHref="https://portal.airdev.co/flex_start"
            titleMaxWidth="800px"
            descriptionMaxWidth="640px"
            alignLeft={true}
            rightImage="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/65020bfd5ed32573fd88e8fa_flex-hero.png"
            useOriginalImageSize
            rightImagePlain
            label="TRUSTED BY ORGANIZATIONS OF ALL SIZES"
          />
          <div className="bg-white pt-16 pb-12 lg:pb-16">
            <ClientLogoTicker variant="featured" />
          </div>

          {/* HOW IT WORKS — matches product-design DISCOVERY (light section) */}
          <FlexHowItWorks />

          <FlexUseCasesSection />

          <OurRoles
            eyebrow="WHO WE OFFER"
            heading="Need a Bubble freelancer for a specific skill?"
            intro="Airdev Flex provides on-demand access to top 1% Bubble development experts for building, launching, and maintaining your app."
            headerMaxWidthClass="max-w-[760px]"
            roles={FLEX_ROLES}
            hideProfiles
          />

          <FlexHowWereDifferent />

          <Testimonials backgroundColor="#FFFFFF" />

          <SaasCTA
            title="Ready to hire a Bubble freelancer?"
            description="Get matched with the right Bubble developer, designer, or product manager."
            buttonText="Get started"
            buttonLink="https://portal.airdev.co/flex_start"
          />

          {/* FAQ — Flex-specific copy, do not touch BubbleAgency */}
          <section className="py-24 bg-white">
            <div className="max-w-[800px] mx-auto px-6">
              <div className="text-center mb-16">
                <span className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3 block">
                  FAQS
                </span>
                <h2 className="text-[48px] font-semibold tracking-tight leading-none text-[#1a1a1a] mb-6">
                  Your questions, answered
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  {
                    question:
                      "What project management and communication tools should I use to manage my project?",
                    answer: (
                      <>
                        <p className="mb-4">
                          Ultimately, how you manage your team is completely up to you – you can use whatever process and software
                          you prefer. However, here are some recommendations to consider:
                        </p>
                        <p className="mb-3">
                          <strong>Project Management:</strong> Use tools like Clickup, Trello, Asana, or Linear to organize tasks
                          with status updates.
                        </p>
                        <p className="mb-3">
                          <strong>Communication:</strong> Use a tool like Slack for occasional seamless communications, reserving live
                          video calls for complex topics. Aim to keep most communication within the project management tool so all
                          relevant information stays organized by task.
                        </p>
                        <p>
                          <strong>Time Tracking:</strong> Decide with your team whether to use the time tracking tool in your
                          Airdev portal, based on your project&apos;s needs. If you hire a full-time developer, they may not need to
                          log hours. However, if you hire a developer for less than 20 hours per month, logging hours can help you
                          track remaining capacity.
                        </p>
                      </>
                    ),
                  },
                  {
                    question:
                      "What types of plans are available and how do they affect freelancer availability and billing?",
                    answer: (
                      <p>
                        There are two kinds of plans available: single-month plans and recurring plans. Single-month plans are
                        suitable for discrete tasks, while recurring plans are ideal for ongoing projects. Both plans allow you to
                        choose your monthly number of hours, and the hourly rate decreases as you book more hours. You and your
                        freelancer decide how to allocate your monthly hours, and if you run out of hours, you can top-up at the
                        same rate. Recurring plans can be canceled at any time, with the cancellation taking effect at the end of
                        the current period.
                      </p>
                    ),
                  },
                  {
                    question: "How quickly can I get matched with a Bubble freelancer?",
                    answer: (
                      <p>
                        You can get matched with a freelancer within 2-3 business days after paying a $500 deposit and providing
                        details about the role you need and your preferences. This deposit is deducted from your first payment if
                        you hire someone – or refunded if you don&apos;t. Once matched, you&apos;ll have a 30-minute discovery call
                        with the freelancer to discuss project requirements and learn more about them.
                      </p>
                    ),
                  },
                  {
                    question: "How is freelance Bubble talent vetted and supported by Airdev?",
                    answer: (
                      <p>
                        All Airdev freelancers undergo a rigorous selection process tailored to their specific roles. This process
                        includes interviews, exercises, and simulated client projects to assess both their job skills and
                        professionalism. Once onboarded, team members receive ongoing support through centralized resources and a
                        technical help desk. Additionally, individual performance is monitored to ensure consistent high standards.
                        If technical issues arise, freelancers can rely on Airdev&apos;s central help desk for assistance.
                      </p>
                    ),
                  },
                  {
                    question: "Who should use Airdev Flex?",
                    answer: (
                      <>
                        <p className="mb-4">
                          Airdev Flex is ideal for individuals or businesses looking for a cost-effective solution to build their
                          product without the expense of hiring a high-end agency. Flex allows you to access top-quality Bubble
                          developers, designers, and other essential roles on a fractional basis. If you have the time and skills
                          to manage your own team, Airdev Flex offers the highest value-for-money way to bring your product to
                          market.
                        </p>
                        <p className="mb-3 font-medium text-[#1a1a1a]">
                          The most common client types we see using this model are:
                        </p>
                        <ul className="list-disc space-y-2 pl-5">
                          <li>
                            Entrepreneurs/organizations seeking cost-effective Bubble product development (and are willing to put in
                            the effort)
                          </li>
                          <li>
                            Entrepreneurs/organizations with an existing Bubble product needing expert assistance for further
                            development
                          </li>
                          <li>
                            Companies/agencies aiming to establish or augment their Bubble capabilities without the hiring
                            overhead
                          </li>
                        </ul>
                      </>
                    ),
                  },
                ].map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="bg-white border-b last:border-0"
                    style={{ borderColor: "#E2E8F0" }}
                  >
                    <AccordionTrigger className="text-left font-medium text-[#1a1a1a] hover:no-underline py-6 text-[18px] items-center">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-6 text-[18px]" style={{ lineHeight: "29px" }}>
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FlexBubbleFreelancers;
