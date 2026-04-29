"use client";

import {
  Navbar,
  Hero,
  CaseStudies,
  ClientLogoTicker,
  SaasCTA,
  Footer,
  SampleProducts,
  FintechValueProps,
  type FintechValuePropItem,
} from "@/components/landing";
import { CASE_STUDY_SLUG } from "@/config/case-study-static-slugs";
import { Product } from "@/components/landing/sample-products";
import {
  ArrowPathIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  CpuChipIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  LockClosedIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";

const HEALTHCARE_BENEFITS: FintechValuePropItem[] = [
  {
    title: "Privacy and compliance aware",
    description:
      "We model PHI, roles, audit trails, and consent so compliance and clinical reviewers see a product that matches how you govern data day to day.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Secure by default",
    description:
      "Encryption, access control, logging, and monitoring are built in from the start, not rushed in before an audit or customer security review.",
    icon: LockClosedIcon,
  },
  {
    title: "Interoperability and integrations",
    description:
      "We wire up EHRs, clearinghouses, identity tools, and internal systems so staff work from one flow instead of retyping between disconnected tools.",
    icon: PuzzlePieceIcon,
  },
  {
    title: "Ship without slowing care teams",
    description:
      "Shorter build cycles mean you can pilot, learn, and expand on timelines that fit enrollment, grants, and contracts instead of multi-year rewrite plans.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Visibility for outcomes and operations",
    description:
      "Dashboards for access, utilization, and backlog give leaders a clear read on adoption and bottlenecks without living in one-off spreadsheets.",
    icon: ChartBarIcon,
  },
  {
    title: "Ongoing partnership",
    description:
      "When payers, policy, or your roadmap shift, we stay on for integrations, workflows, and releases so the product does not stall as a fragile one-off.",
    icon: UserGroupIcon,
  },
];

const HEALTHCARE_PRODUCTS: Product[] = [
  {
    id: "patient-engagement",
    name: "Patient engagement",
    cardHeading: "Scheduling and access",
    subtitle: "Find care, book visits, and stay informed",
    description:
      "Consumer-facing flows for search, eligibility or coverage hints, appointment booking, reminders, and pre-visit intake. Built for clarity on phones and for populations with mixed digital literacy.",
    icon: CalendarIcon,
    color: "#1265EF",
    features: [
      { name: "Search and filter by location, specialty, or network", icon: GlobeAltIcon },
      { name: "Self-scheduling with rules for visit types and capacity", icon: CalendarIcon },
      { name: "SMS and email reminders with preference controls", icon: BellIcon },
      { name: "Pre-visit forms and document upload", icon: ClipboardDocumentListIcon },
      { name: "Waitlist and cancellation backfill logic", icon: UserGroupIcon },
      { name: "Handoffs to call center or staff queues when needed", icon: ArrowPathIcon },
    ],
  },
  {
    id: "care-coordination",
    name: "Care coordination",
    cardHeading: "Referrals and handoffs",
    subtitle: "Keep episodes moving across teams",
    description:
      "Tools for referrals, tasks, and status tracking so primary care, specialists, and care managers share one timeline instead of parallel email threads.",
    icon: ArrowPathIcon,
    color: "#06b6d4",
    features: [
      { name: "Referral intake with attachments and priority", icon: DocumentTextIcon },
      { name: "Task queues by role or program", icon: ClipboardDocumentCheckIcon },
      { name: "Status timelines visible to authorized staff", icon: ChartBarIcon },
      { name: "Closed-loop reporting for program sponsors", icon: UserGroupIcon },
      { name: "Notifications with escalation paths", icon: BellIcon },
      { name: "Exports or API hooks to the EHR or CRM you use", icon: PuzzlePieceIcon },
    ],
  },
  {
    id: "revenue-operations",
    name: "Revenue operations",
    cardHeading: "Prior auth and billing admin",
    subtitle: "Reduce rework for back-office teams",
    description:
      "Internal portals for prior authorization tracking, appeals packets, underpayment workflows, and contract terms so revenue cycle staff work from a single system of record.",
    icon: ClipboardDocumentCheckIcon,
    color: "#10b981",
    features: [
      { name: "Case queues with SLA and owner assignment", icon: ClipboardDocumentListIcon },
      { name: "Packet assembly from structured fields and uploads", icon: DocumentTextIcon },
      { name: "Payer-specific checklist templates", icon: ClipboardDocumentCheckIcon },
      { name: "Appeal and resubmission tracking", icon: ArrowPathIcon },
      { name: "Reporting by payer, site, or denial reason", icon: ChartBarIcon },
      { name: "Role-based access for offshore and onshore teams", icon: ShieldCheckIcon },
    ],
  },
  {
    id: "virtual-care",
    name: "Virtual care",
    cardHeading: "Visits and programs online",
    subtitle: "Video, messaging, and async touchpoints",
    description:
      "Workflows that combine scheduling, links, session notes, and patient instructions for telehealth or hybrid programs where the visit is only part of the episode.",
    icon: VideoCameraIcon,
    color: "#a855f7",
    features: [
      { name: "Visit types with device and consent checks", icon: VideoCameraIcon },
      { name: "Queueing for on-demand or scheduled sessions", icon: UserGroupIcon },
      { name: "Post-visit summaries and education content", icon: DocumentTextIcon },
      { name: "Program enrollment with milestones", icon: CalendarIcon },
      { name: "Secure messaging boundaries by role", icon: ShieldCheckIcon },
      { name: "Usage and no-show reporting", icon: ChartBarIcon },
    ],
  },
  {
    id: "analytics-population",
    name: "Analytics and quality",
    cardHeading: "Population and program analytics",
    subtitle: "Measure access, gaps, and performance",
    description:
      "Dashboards and drill-downs for cohorts, quality measures, readmission risk flags, or network performance, with exports your analysts can trust.",
    icon: ChartBarIcon,
    color: "#f59e0b",
    features: [
      { name: "Cohort filters by condition, payer, or geography", icon: UserGroupIcon },
      { name: "Measure numerators and denominators with audit notes", icon: ClipboardDocumentCheckIcon },
      { name: "Trend views and peer comparisons", icon: ChartBarIcon },
      { name: "Scheduled reports to leadership or partners", icon: BellIcon },
      { name: "De-identified views where appropriate", icon: ShieldCheckIcon },
      { name: "API or file feeds to BI tools", icon: CpuChipIcon },
    ],
  },
  {
    id: "provider-operations",
    name: "Provider operations",
    cardHeading: "Credentialing and staffing",
    subtitle: "Onboard and roster clinicians faster",
    description:
      "Applications, document collection, committee workflows, and privilege matrices for teams that cannot afford another spreadsheet-only credentialing cycle.",
    icon: UserGroupIcon,
    color: "#ec4899",
    features: [
      { name: "Provider profiles with document versioning", icon: DocumentTextIcon },
      { name: "Committee review and decision logging", icon: ClipboardDocumentCheckIcon },
      { name: "Privilege templates by site or specialty", icon: ClipboardDocumentListIcon },
      { name: "Expiration tracking for licenses and DEA", icon: CalendarIcon },
      { name: "Task routing to medical staff office", icon: ArrowPathIcon },
      { name: "Reporting for Joint Commission or payer surveys", icon: ChartBarIcon },
    ],
  },
];

const Healthcare = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
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
        `
      }} />
      <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900" style={{ fontFamily: "'Colfax', sans-serif" }}>
        <Navbar />
        <main>
          <div className="pb-24 lg:pb-32">
            <Hero
              title={
                <>
                  A better way to build for
                  <br />
                  healthcare
                </>
              }
              description="We help health systems, payers, and digital health teams launch patient and clinician-facing products in a fraction of the time and cost of traditional development. From scheduling and engagement to operations and analytics, we build software that fits regulated, real-world care delivery."
              showImages={false}
              showButton={true}
              buttonText="Get a quote"
              titleMaxWidth="960px"
              descriptionMaxWidth="42rem"
              alignLeft={true}
              rightImage="https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1768942292841x753883318458439700/docseek.webp"
            />
          </div>
          <FintechValueProps
            title="Why healthcare teams choose us"
            description="Clinical and business leaders need software that respects privacy, integrates with the stack you already run, and ships on timelines tied to enrollment or contract milestones. Here is why teams trust us with regulated builds."
            items={HEALTHCARE_BENEFITS}
            introMaxWidthClassName="max-w-xl"
          />
          <div className="pt-16 pb-24 hidden">
            <ClientLogoTicker />
          </div>
          <CaseStudies
            description="We've helped healthcare and digital health organizations build patient engagement tools, revenue operations workflows, and analytics that support better access and outcomes."
            slides={[
              {
                id: CASE_STUDY_SLUG.dividend,
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
                ]
              },
              {
                id: CASE_STUDY_SLUG.bubble,
                company: "Tributi",
                logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766777935802x342363134894177340/tributi.png",
                logoText: "VC funded",
                heading: "How Airdev helped Tributi build a tax management software for Latin America in just 5 weeks using the no-code tool Bubble",
                description: "",
                image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/63507625712da8bcd35f011e_tributi.jpeg",
                imageTitle: "How Airdev helped Tributi build a tax management software for Latin America in just 5 weeks using the no-code tool Bubble",
                customFields: [
                  { label: "Business type", value: "SMB", color: "#635bff" },
                  { label: "Product type", value: "Tax management software", color: "#00d4ff" },
                  { label: "Timeline", value: "5 weeks", color: "#a960ee" },
                  { label: "Key results", value: "Supported 20k daily users and launched a successful YCombinator bid", color: "#ff6b6b" },
                ]
              },
              {
                id: CASE_STUDY_SLUG.playground,
                company: "My NFT Alerts",
                logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766777953165x204069526181363420/mynftalerts.png",
                logoText: "",
                heading: "How Airdev helped My NFT Alerts build a custom no-code platform on Bubble for NFT holders to track, trade and set personalized floor price alerts",
                description: "",
                image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635079364569b5471f0fc12d_nft.jpeg",
                imageTitle: "How Airdev helped My NFT Alerts build a custom no-code platform on Bubble for NFT holders to track, trade and set personalized floor price alerts",
                customFields: [
                  { label: "Business type", value: "Startup", color: "#635bff" },
                  { label: "Product type", value: "Portfolio tracking app", color: "#00d4ff" },
                  { label: "Timeline", value: "6 weeks", color: "#a960ee" },
                  { label: "Key results", value: "Rapid user adoption", color: "#ff6b6b" },
                ]
              }
            ]}
          />
          <SampleProducts
            bgColor="bg-[#F6F9FC]"
            products={HEALTHCARE_PRODUCTS}
            label="SAMPLE PRODUCTS"
            title="Healthcare software we build"
            description="Products for patients, clinicians, and operations teams in regulated environments. Here are common shapes we deliver."
            descriptionMaxWidth="720px"
          />
          <SaasCTA
            title="Building something in healthcare?"
            description="We're happy to talk through your project, even if you're still in the early stages."
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Healthcare;
