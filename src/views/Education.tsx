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
import {
  AcademicCapIcon,
  ArrowPathIcon,
  BuildingLibraryIcon,
  BuildingStorefrontIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  LockClosedIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import { Product } from "@/components/landing/sample-products";

const EDUCATION_BENEFITS: FintechValuePropItem[] = [
  {
    title: "Built for compliance",
    description:
      "Education products handle sensitive student and educator data. We design roles, audit trails, and data-handling patterns that align with how schools and districts actually operate.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Secure, dependable infrastructure",
    description:
      "Launch on hardened foundations with encryption, access controls, and monitoring so administrators can trust your platform during registration and peak usage.",
    icon: LockClosedIcon,
  },
  {
    title: "Complex integrations handled",
    description:
      "Connect SSO, SIS, LMS ecosystems, calendars, and common productivity tools so your product fits into district workflows instead of fighting them.",
    icon: PuzzlePieceIcon,
  },
  {
    title: "Ship on academic timelines",
    description:
      "Visual development keeps iterations fast when you need to hit semesters, cohort kickoffs, or grant milestones.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Reporting that drives meaningful action",
    description:
      "Dashboards for enrollment, completion, interventions, and program outcomes so leaders see adoption and impact without relying on spreadsheets.",
    icon: ChartBarIcon,
  },
  {
    title: "Ongoing partnership",
    description:
      "Education programs evolve with standards and stakeholders. We stay engaged after go-live for new terms, integrations, and product roadmap delivery.",
    icon: UserGroupIcon,
  },
];

const EDUCATION_PRODUCTS: Product[] = [
  {
    id: "learning-platforms-lms",
    name: "Learning platforms",
    cardHeading: "LMS & course delivery",
    subtitle: "Courses, cohorts, and learner progress tailored to your audience",
    description:
      "Full learning environments with catalogs, modules, prerequisites, cohort calendars, and mobile-friendly portals for schools, nonprofits, and training organizations.",
    icon: AcademicCapIcon,
    color: "#1265EF",
    features: [
      { name: "Course authoring, versioning, and reusable content libraries", icon: BuildingLibraryIcon },
      { name: "Enrollment rules, sections, waitlists, and rolling or fixed cohorts", icon: UserGroupIcon },
      { name: "Learner dashboards, progress, bookmarks, and completion signals", icon: ChartBarIcon },
      { name: "Live and async sessions, recordings, and announcements", icon: VideoCameraIcon },
      { name: "Branding and hierarchy for districts or multi-campus operators", icon: GlobeAltIcon },
      { name: "Exports and handoffs to HRIS, CRM, or partner systems", icon: ArrowPathIcon },
    ],
  },
  {
    id: "district-school-operations",
    name: "District & schools",
    cardHeading: "Portals & school operations",
    subtitle: "Tools for administrators, educators, and families",
    description:
      "Operational portals that unify schedules, communications, permissions, and resource access across campuses, from enrollment to internal hubs that keep teams aligned.",
    icon: UserGroupIcon,
    color: "#06b6d4",
    features: [
      { name: "Role-based access for admins, teachers, staff, and guardians", icon: ShieldCheckIcon },
      { name: "Unified directories and organizational hierarchy", icon: UserGroupIcon },
      { name: "Forms, approvals, and task routing across departments", icon: ClipboardDocumentCheckIcon },
      { name: "Calendars, deadlines, and reminders tied to terms", icon: ClockIcon },
      { name: "Document repositories with governed visibility", icon: DocumentTextIcon },
      { name: "Notifications via email and in-app messaging patterns", icon: GlobeAltIcon },
    ],
  },
  {
    id: "assessment-credentials",
    name: "Assessments",
    cardHeading: "Assessment & certification",
    subtitle: "Validate skills and issue trusted credentials",
    description:
      "Exam engines, rubrics, practice modes, and credentialing flows for certification programs, licensure prep, or competency checks at scale.",
    icon: ClipboardDocumentCheckIcon,
    color: "#10b981",
    features: [
      { name: "Question banks, randomization, attempts, and anti-abuse controls", icon: DocumentTextIcon },
      { name: "Weighted scoring, outcomes mapping, and appeals workflows", icon: ChartBarIcon },
      { name: "Proctor-friendly configurations and audit trails", icon: ShieldCheckIcon },
      { name: "Certificates, transcripts, and verification artifacts", icon: ClipboardDocumentCheckIcon },
      { name: "Scheduling windows aligned to testing calendars", icon: ClockIcon },
      { name: "Analytics for item performance and cohort readiness", icon: ChartBarIcon },
    ],
  },
  {
    id: "education-marketplaces",
    name: "Marketplaces",
    cardHeading: "Education marketplaces",
    subtitle: "Connect buyers and sellers of programs, products, and services",
    description:
      "Multi-sided platforms for procurement, fulfillment, and governance across schools and vendors when geography, approvals, or bundles matter as much as listings.",
    icon: BuildingStorefrontIcon,
    color: "#a855f7",
    features: [
      { name: "Supplier onboarding, catalogs, and entitlement rules", icon: BuildingStorefrontIcon },
      { name: "Cart, checkout, and order workflows with approvals where needed", icon: ClipboardDocumentCheckIcon },
      { name: "Segmentation by district, role, or purchasing authority", icon: UserGroupIcon },
      { name: "Fulfillment tracking and customer communications", icon: GlobeAltIcon },
      { name: "Reporting for adoption, utilization, and outcomes", icon: ChartBarIcon },
      { name: "Integration hooks for billing and procurement systems", icon: ArrowPathIcon },
    ],
  },
  {
    id: "student-services",
    name: "Student services",
    cardHeading: "Caseload & intervention tools",
    subtitle: "Operational clarity for specialized programs",
    description:
      "Workflow-heavy apps for caseloads, service delivery, documentation, and coordination for teams managing individualized plans and compliance-heavy processes.",
    icon: DocumentTextIcon,
    color: "#f59e0b",
    features: [
      { name: "Case timelines, assignments, and coverage across providers", icon: UserGroupIcon },
      { name: "Structured notes, forms, and configurable review cycles", icon: DocumentTextIcon },
      { name: "Permissions tuned for sensitive student records", icon: ShieldCheckIcon },
      { name: "Routing and escalations between specialists and administrators", icon: ArrowPathIcon },
      { name: "Operational dashboards for backlog and outcomes", icon: ChartBarIcon },
      { name: "Exports compatible with district reporting expectations", icon: GlobeAltIcon },
    ],
  },
  {
    id: "educator-program-hubs",
    name: "Program hubs",
    cardHeading: "Educator & corps hubs",
    subtitle: "Central hubs for programs that span regions",
    description:
      "Internal platforms that onboard cohorts, distribute resources, coordinate milestones, and measure participation for scaled educator or leadership programs.",
    icon: GlobeAltIcon,
    color: "#ec4899",
    features: [
      { name: "Program journeys with gated milestones and resource drops", icon: RocketLaunchIcon },
      { name: "Community spaces, FAQs, and targeted broadcasts", icon: UserGroupIcon },
      { name: "Attendance, tasks, and manager workflows", icon: ClipboardDocumentCheckIcon },
      { name: "Skills trackers and lightweight credentialing", icon: AcademicCapIcon },
      { name: "Mobile-first patterns for distributed cohorts", icon: GlobeAltIcon },
      { name: "Analytics on engagement across regions or cohorts", icon: ChartBarIcon },
    ],
  },
];

const Education = () => {
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
              title="A better way to build for education"
              description="We help schools, EdTech companies, and mission-driven organizations launch learning products, district tools, and education marketplaces in a fraction of the time and cost of traditional development. From LMS platforms to specialized programs, we ship products that scale with students and educators."
              showImages={false}
              showButton={true}
              buttonText="Get a quote"
              titleMaxWidth="800px"
              alignLeft={true}
              rightImage="https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774027428617x992217413442989600/lms1.webp"
            />
          </div>
          <FintechValueProps
            title="Why education teams choose us"
            description="Education products need thoughtful permissions, accessibility, and timelines that align with school years and funding cycles. Here's why teams trust us with learning technology."
            items={EDUCATION_BENEFITS}
            introMaxWidthClassName="max-w-xl"
          />
          <div className="pt-16 pb-24 hidden">
            <ClientLogoTicker />
          </div>
          <CaseStudies
            description="We've helped education organizations build learning platforms, district and program hubs, assessment tools, and marketplaces that serve schools at scale."
            slides={[
              {
                id: CASE_STUDY_SLUG.playground,
                company: "Playground IEP",
                logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447131162x922542988700125000/playground.png",
                logoText: "",
                heading: "How Airdev helped Playground IEP create a special education caseload management tool for schools",
                description: "",
                image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/63b8851d340bdc19030b55b3_adam-winger-7fF0iei80AQ-unsplash%205-p-3200.jpg",
                imageTitle: "How Airdev helped Playground IEP create a special education caseload management tool for schools",
                customFields: [
                  { label: "Business type", value: "Startup", color: "#635bff" },
                  { label: "Product type", value: "Internal management portal", color: "#00d4ff" },
                  { label: "Timeline", value: "3 months", color: "#a960ee" },
                  { label: "Key results", value: "5 pilot schools signed up in <1 year", color: "#ff6b6b" },
                ],
              },
              {
                id: "tfa",
                company: "Teach for America",
                logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447145612x608821623632928600/tfa.png",
                logoText: "",
                heading: "How Airdev helped Teach for America build a custom no-code internal hub with Bubble to support corps members across their journey",
                description: "",
                image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635075d6712da824635efa1d_tfa%20(1).jpeg",
                imageTitle: "How Airdev helped Teach for America build a custom no-code internal hub with Bubble to support corps members across their journey",
                customFields: [
                  { label: "Business type", value: "National nonprofit", color: "#635bff" },
                  { label: "Product type", value: "Internal hub", color: "#00d4ff" },
                  { label: "Timeline", value: "4 weeks", color: "#a960ee" },
                  { label: "Key results", value: "Ability to manage the organization at scale", color: "#ff6b6b" },
                ],
              },
              {
                id: "consenna",
                company: "Consenna",
                logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1768940931729x657157670211085600/consenna.png",
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
            ]}
          />
          <SampleProducts
            bgColor="bg-[#F6F9FC]"
            products={EDUCATION_PRODUCTS}
            label="SAMPLE PRODUCTS"
            title="Education products we build"
            description="Purpose-built software for schools, districts, and education organizations. Here are common product shapes we deliver."
            descriptionMaxWidth="760px"
          />
          <SaasCTA
            title="Building an education product?"
            description="We're happy to talk through your project, even if you're still in the early stages."
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Education;
