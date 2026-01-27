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
} from "@/components/landing";
import {
  UserGroupIcon,
  DocumentTextIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  ClipboardDocumentListIcon,
  MegaphoneIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  BuildingLibraryIcon,
  HeartIcon,
  AcademicCapIcon,
  ArrowPathIcon,
  BellIcon,
  FolderIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";
import { Product } from "@/components/landing/sample-products";

const PUBLIC_SECTOR_PRODUCTS: Product[] = [
  {
    id: "grant-management",
    name: "Grant Management",
    description: "Platforms for managing the entire grant lifecycle. From application intake and review to fund disbursement and reporting. Tools that help foundations and government agencies distribute funds efficiently and track impact.",
    icon: CurrencyDollarIcon,
    color: "#10b981",
    features: [
      { name: "Grant application portals", icon: DocumentTextIcon },
      { name: "Review and scoring workflows", icon: ClipboardDocumentListIcon },
      { name: "Fund disbursement tracking", icon: CurrencyDollarIcon },
      { name: "Grantee reporting and compliance", icon: ShieldCheckIcon },
      { name: "Impact measurement dashboards", icon: ChartBarIcon },
      { name: "Multi-program management", icon: FolderIcon },
    ],
  },
  {
    id: "donor-management",
    name: "Donor & Fundraising",
    description: "CRM and fundraising platforms built for nonprofits. Tools to manage donor relationships, track contributions, run campaigns, and build lasting supporter engagement that drives sustainable funding.",
    icon: HeartIcon,
    color: "#ec4899",
    features: [
      { name: "Donor database and CRM", icon: UserGroupIcon },
      { name: "Online donation processing", icon: CurrencyDollarIcon },
      { name: "Campaign management tools", icon: MegaphoneIcon },
      { name: "Recurring giving programs", icon: ArrowPathIcon },
      { name: "Donor communication and stewardship", icon: BellIcon },
      { name: "Fundraising analytics and reporting", icon: ChartBarIcon },
    ],
  },
  {
    id: "volunteer-management",
    name: "Volunteer Management",
    description: "Platforms to recruit, schedule, and engage volunteers. Tools that help organizations coordinate their volunteer workforce, track hours, and recognize contributions to the mission.",
    icon: UserGroupIcon,
    color: "#6366f1",
    features: [
      { name: "Volunteer registration and onboarding", icon: IdentificationIcon },
      { name: "Shift scheduling and sign-ups", icon: CalendarIcon },
      { name: "Hours tracking and verification", icon: ClipboardDocumentListIcon },
      { name: "Communication and notifications", icon: BellIcon },
      { name: "Recognition and rewards programs", icon: HeartIcon },
      { name: "Reporting and compliance", icon: DocumentTextIcon },
    ],
  },
  {
    id: "program-management",
    name: "Program Management",
    description: "Tools for managing nonprofit programs and services. Intake systems, case management, service delivery tracking, and outcome measurement platforms that help organizations deliver on their mission.",
    icon: ClipboardDocumentListIcon,
    color: "#f59e0b",
    features: [
      { name: "Client intake and enrollment", icon: IdentificationIcon },
      { name: "Case management workflows", icon: FolderIcon },
      { name: "Service delivery tracking", icon: ClipboardDocumentListIcon },
      { name: "Outcome and impact measurement", icon: ChartBarIcon },
      { name: "Staff assignment and coordination", icon: UserGroupIcon },
      { name: "Funder reporting and compliance", icon: DocumentTextIcon },
    ],
  },
  {
    id: "civic-engagement",
    name: "Civic Engagement",
    description: "Platforms that connect citizens with government services and civic participation. Portals for public feedback, permit applications, community programs, and transparent government operations.",
    icon: BuildingLibraryIcon,
    color: "#0ea5e9",
    features: [
      { name: "Citizen service portals", icon: GlobeAltIcon },
      { name: "Permit and license applications", icon: DocumentTextIcon },
      { name: "Public feedback and surveys", icon: MegaphoneIcon },
      { name: "Community event management", icon: CalendarIcon },
      { name: "Transparency and open data", icon: ChartBarIcon },
      { name: "Multi-language support", icon: GlobeAltIcon },
    ],
  },
  {
    id: "education-training",
    name: "Education & Training",
    description: "Learning management and educational platforms for nonprofits and public institutions. Tools for delivering training, tracking certifications, and managing educational programs at scale.",
    icon: AcademicCapIcon,
    color: "#8b5cf6",
    features: [
      { name: "Course creation and management", icon: FolderIcon },
      { name: "Learner enrollment and tracking", icon: UserGroupIcon },
      { name: "Assessment and certification", icon: ClipboardDocumentListIcon },
      { name: "Progress dashboards and reporting", icon: ChartBarIcon },
      { name: "Virtual classroom tools", icon: GlobeAltIcon },
      { name: "Compliance training workflows", icon: ShieldCheckIcon },
    ],
  },
];

const PublicSectorAndNonprofit = () => {
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
          <Hero 
            title="A better way to build for the public sector"
            description="We help government agencies and nonprofit organizations launch mission-driven applications in a fraction of the time and cost of traditional development. From grant management to civic engagement platforms, we've built solutions that serve millions of citizens and beneficiaries."
            showImages={false}
            showButton={true}
            buttonText="Talk to us"
            titleMaxWidth="800px"
            alignLeft={true}
            rightImage="https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1768956850212x425965442327471200/grantworks.webp"
          />
          <div className="pt-16 pb-24 hidden">
            <ClientLogoTicker />
          </div>
          <CaseStudies 
            description="We've helped public sector organizations and nonprofits build grant management systems, donor platforms, volunteer coordination tools, and citizen engagement portals."
            slides={[
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
                ]
              },
              {
                id: "navigreat",
                company: "NaviGreat",
                logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765319327038x377695290107660200/navigreat.png",
                logoText: "",
                heading: "How NaviGreat built a digital hub for nonprofit organizations with Airdev's freelance Bubble developer in just 2 weeks",
                description: "",
                image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/6644f29802eba3647e2d8030_NaviGreat_Airdev_no_code.jpg",
                imageTitle: "How NaviGreat built a digital hub for nonprofit organizations with Airdev's freelance Bubble developer in just 2 weeks",
                customFields: [
                  { label: "Business type", value: "Nonprofit organization", color: "#635bff" },
                  { label: "Product type", value: "Social network platform", color: "#00d4ff" },
                  { label: "Timeline", value: "2 weeks", color: "#a960ee" },
                  { label: "Key results", value: "A fully functional app developed in just 2 weeks", color: "#ff6b6b" },
                ]
              }
            ]}
          />
          <SampleProducts 
            bgColor="bg-[#F6F9FC]" 
            products={PUBLIC_SECTOR_PRODUCTS}
            label="SAMPLE PRODUCTS"
            title="Public sector & nonprofit products we build"
            titleMaxWidth="620px"
            description="Mission-driven solutions for government agencies and nonprofit organizations. Here are some of the most common types."
            descriptionMaxWidth="650px"
          />
          <FintechValueProps 
            title="Why nonprofits choose us"
            description="Building for the public good requires understanding unique constraints and priorities. Here's why mission-driven organizations trust us with their technology."
          />
          <SaasCTA 
            variant="light" 
            title="Building something in nonprofit?"
            description="We're happy to talk through your project, even if you're still in the early stages."
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PublicSectorAndNonprofit;
