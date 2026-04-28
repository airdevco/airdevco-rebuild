"use client";

import {
  Navbar,
  Hero,
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  SaasCTA,
  Footer,
  ValueProps,
  SampleProducts,
} from "@/components/landing";
import type { Product } from "@/components/landing/sample-products";
import {
  ShoppingBagIcon,
  HomeIcon,
  BriefcaseIcon,
  CalendarIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
  SquaresPlusIcon,
  ChartPieIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  BellIcon,
  KeyIcon,
  ClockIcon,
  FolderIcon,
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  CubeIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

// Custom slides for ERPs page (OUR CLIENTS) — page-specific; edit here without affecting Internal Tools.
const ERPS_CASE_STUDIES = [
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
    id: "bubble",
    company: "Bubble.io",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766446287440x908698787583342700/bubble.io.png",
    logoText: "",
    heading: "How no-code leader Bubble turned to Airdev for a custom rebuild of their Developer Certification Platform... built on Bubble",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/665f5ab8b085585d4543d3ea_Certification---In-line-5.png",
    imageTitle: "How no-code leader Bubble turned to Airdev for a custom rebuild of their Developer Certification Platform... built on Bubble",
    customFields: [
      { label: "Business type", value: "SMB", color: "#635bff" },
      { label: "Product type", value: "Exam platform", color: "#00d4ff" },
      { label: "Timeline", value: "3 months", color: "#a960ee" },
      { label: "Key results", value: "A more performant, reliable, and flexible exam for users and internal developers", color: "#ff6b6b" },
    ]
  },
  {
    id: "playground",
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
    ]
  },
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
];

const ERPS_PRODUCTS: Product[] = [
  {
    id: "crm",
    name: "Customer Relationship Management",
    description: "Comprehensive CRM systems that help businesses manage customer interactions, track sales pipelines, automate follow-ups, and maintain detailed customer histories. These tools centralize all customer data and communication in one place.",
    icon: UserGroupIcon,
    color: "#a855f7",
    features: [
      { name: "Contact and company database management", icon: BuildingStorefrontIcon },
      { name: "Sales pipeline and opportunity tracking", icon: ChartPieIcon },
      { name: "Email and communication history", icon: BellIcon },
      { name: "Task and activity scheduling", icon: CalendarIcon },
      { name: "Reporting and analytics dashboards", icon: ChartPieIcon },
      { name: "Integration with email and calendar systems", icon: GlobeAltIcon },
    ],
  },
  {
    id: "erp",
    name: "Enterprise Resource Planning",
    description: "Integrated ERP systems that manage core business processes including finance, inventory, procurement, manufacturing, and human resources. These platforms provide a unified view of business operations and automate workflows across departments.",
    icon: SquaresPlusIcon,
    color: "#ff6b35",
    features: [
      { name: "Financial management and accounting", icon: ChartPieIcon },
      { name: "Inventory and supply chain tracking", icon: CubeIcon },
      { name: "Purchase order and vendor management", icon: ShoppingBagIcon },
      { name: "Production planning and scheduling", icon: ClockIcon },
      { name: "Multi-department workflow automation", icon: SquaresPlusIcon },
      { name: "Comprehensive reporting and analytics", icon: ChartPieIcon },
    ],
  },
  {
    id: "ats",
    name: "Applicant Tracking System",
    description: "ATS platforms streamline the hiring process from job posting to onboarding. These systems help recruiters manage candidates, schedule interviews, track applications, and make data-driven hiring decisions while maintaining compliance.",
    icon: ClipboardDocumentCheckIcon,
    color: "#06b6d4",
    features: [
      { name: "Job posting and candidate sourcing", icon: SquaresPlusIcon },
      { name: "Resume parsing and candidate profiles", icon: FolderIcon },
      { name: "Interview scheduling and coordination", icon: CalendarIcon },
      { name: "Application tracking and status management", icon: ClockIcon },
      { name: "Collaborative hiring workflows", icon: UserGroupIcon },
      { name: "Reporting and hiring analytics", icon: ChartPieIcon },
    ],
  },
  {
    id: "lms",
    name: "Learning Management System",
    description: "LMS platforms enable organizations to create, deliver, and track training programs and educational content. These systems support employee onboarding, compliance training, skill development, and certification management.",
    icon: AcademicCapIcon,
    color: "#10b981",
    features: [
      { name: "Course creation and content management", icon: FolderIcon },
      { name: "Student enrollment and progress tracking", icon: UserGroupIcon },
      { name: "Assessments and quizzes", icon: ClipboardDocumentCheckIcon },
      { name: "Certification and credential management", icon: ShieldCheckIcon },
      { name: "Reporting on learning outcomes", icon: ChartPieIcon },
      { name: "Integration with HR and performance systems", icon: SquaresPlusIcon },
    ],
  },
  {
    id: "asset-inventory",
    name: "Asset & Inventory Management",
    description: "Comprehensive systems for tracking physical and digital assets, managing inventory levels, monitoring equipment maintenance, and optimizing resource utilization. These tools help organizations maintain accurate asset records and reduce operational costs.",
    icon: CubeIcon,
    color: "#f59e0b",
    features: [
      { name: "Asset registration and categorization", icon: BuildingStorefrontIcon },
      { name: "Inventory tracking and stock management", icon: ClockIcon },
      { name: "Maintenance scheduling and work orders", icon: CalendarIcon },
      { name: "Asset lifecycle and depreciation tracking", icon: ChartPieIcon },
      { name: "Barcode and QR code scanning", icon: SquaresPlusIcon },
      { name: "Reporting and asset analytics", icon: ChartPieIcon },
    ],
  },
  {
    id: "performance-review",
    name: "Performance Review & Feedback",
    description: "Performance management systems that facilitate regular employee reviews, goal setting, 360-degree feedback, and continuous performance tracking. These platforms help organizations align individual performance with business objectives and support employee development.",
    icon: StarIcon,
    color: "#ec4899",
    features: [
      { name: "Goal setting and OKR tracking", icon: ChartPieIcon },
      { name: "360-degree feedback collection", icon: UserGroupIcon },
      { name: "Performance review cycles and scheduling", icon: CalendarIcon },
      { name: "One-on-one meeting notes and action items", icon: BellIcon },
      { name: "Performance analytics and insights", icon: ChartPieIcon },
      { name: "Integration with HR and payroll systems", icon: SquaresPlusIcon },
    ],
  },
];

const Erps = () => {
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
            title="Custom ERP systems, at the speed of SaaS"
            description="We use visual programming and AI to help teams ship ERP-style operations software—inventory, orders, finance, and workflows—tailored to how you actually run the business, without multi-year enterprise timelines."
            showImages={false}
            showButton={true}
            buttonText="Get a quote"
            titleMaxWidth="800px"
            alignLeft={true}
            rightImage="https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774007591255x876566308167353000/crm8.webp"
          />
          <div className="pt-16 pb-24">
            <ClientLogoTicker variant="featured" />
          </div>
          <ValueProps />
          <CaseStudies
            slides={ERPS_CASE_STUDIES}
            description="From manufacturing and inventory to finance and reporting—see how we've helped teams replace rigid spreadsheets and off-the-shelf ERPs with modular systems built around their real processes."
          />
          <SampleProducts 
            products={ERPS_PRODUCTS}
            label="SAMPLE PRODUCTS"
            title="ERP-style systems we specialize in"
            description="We build integrated operations software: finance, inventory, procurement, production, and reporting in one place—so your data and workflows stay aligned as you grow."
            bgColor="#F6F9FC"
          />
          <Testimonials />
          <SaasCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Erps;
