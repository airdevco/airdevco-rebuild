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
  ArrowsRightLeftIcon,
  ArrowPathIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  CpuChipIcon,
  CreditCardIcon,
  DocumentCurrencyDollarIcon,
  DocumentTextIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  QueueListIcon,
  SparklesIcon,
  Squares2X2Icon,
  TagIcon,
  TruckIcon,
  UserCircleIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

// Custom slides for ERPs page (OUR CLIENTS) — page-specific; edit here without affecting Internal Tools.
const ERPS_CASE_STUDIES = [
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
    id: "finance",
    name: "Finance",
    cardHeading: "Core Finance",
    description: "Manage accounting, cash flow, and financial controls with a real-time system of record.",
    icon: DocumentCurrencyDollarIcon,
    color: "#1265EF",
    features: [
      { name: "General ledger and journal entries", icon: DocumentTextIcon },
      { name: "Accounts payable and receivable", icon: CreditCardIcon },
      { name: "Multi-entity and multi-currency support", icon: BuildingLibraryIcon },
      { name: "Month-end close workflows", icon: CalendarIcon },
    ],
  },
  {
    id: "procurement",
    name: "Procurement",
    cardHeading: "Procurement and Purchasing",
    description: "Control spend from requisition through vendor management and purchase order approvals.",
    icon: ClipboardDocumentListIcon,
    color: "#06b6d4",
    features: [
      { name: "Purchase requisitions and approvals", icon: ClipboardDocumentListIcon },
      { name: "Supplier onboarding and management", icon: BuildingOffice2Icon },
      { name: "PO generation and change tracking", icon: DocumentTextIcon },
      { name: "Spend analysis by category and vendor", icon: TagIcon },
    ],
  },
  {
    id: "inventory",
    name: "Inventory",
    cardHeading: "Inventory and Warehousing",
    description: "Track stock, movements, and replenishment across locations with operational accuracy.",
    icon: QueueListIcon,
    color: "#10b981",
    features: [
      { name: "Real-time stock levels by location", icon: QueueListIcon },
      { name: "Serial, lot, and batch tracking", icon: TagIcon },
      { name: "Cycle counts and adjustments", icon: ClipboardDocumentListIcon },
      { name: "Reorder points and replenishment rules", icon: ArrowPathIcon },
    ],
  },
  {
    id: "orders",
    name: "Orders",
    cardHeading: "Order Management",
    description: "Coordinate quotes, sales orders, fulfillment, and invoicing in one connected workflow.",
    icon: TruckIcon,
    color: "#a855f7",
    features: [
      { name: "Quotes, sales orders, and amendments", icon: DocumentTextIcon },
      { name: "Fulfillment and shipment tracking", icon: TruckIcon },
      { name: "Returns and credit memo handling", icon: ArrowsRightLeftIcon },
      { name: "Billing handoff to finance", icon: DocumentCurrencyDollarIcon },
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    cardHeading: "Manufacturing Operations",
    description: "Plan production and execute shop-floor workflows with visibility across materials and output.",
    icon: CpuChipIcon,
    color: "#f59e0b",
    features: [
      { name: "Bills of materials and routings", icon: BuildingLibraryIcon },
      { name: "Work order scheduling and capacity planning", icon: CalendarIcon },
      { name: "WIP tracking and production statuses", icon: Squares2X2Icon },
      { name: "Quality checks and nonconformance logs", icon: ShieldCheckIcon },
    ],
  },
  {
    id: "people",
    name: "People",
    cardHeading: "HR and Payroll",
    description: "Support core people operations including employee records, approvals, and payroll workflows.",
    icon: UserGroupIcon,
    color: "#ec4899",
    features: [
      { name: "Employee profiles and org structure", icon: UserCircleIcon },
      { name: "Leave, attendance, and policy workflows", icon: CalendarIcon },
      { name: "Payroll calculations and approvals", icon: DocumentCurrencyDollarIcon },
      { name: "Role permissions and audit trails", icon: LockClosedIcon },
    ],
  },
  {
    id: "analytics-integrations",
    name: "Analytics",
    cardHeading: "Analytics and Integrations",
    description: "Unify ERP data with dashboards and external systems to drive better decisions.",
    icon: SparklesIcon,
    color: "#0ea5e9",
    features: [
      { name: "Executive dashboards and KPI scorecards", icon: Squares2X2Icon },
      { name: "Ad hoc reports and drill-down filters", icon: MagnifyingGlassIcon },
      { name: "APIs and webhooks for external systems", icon: ArrowsRightLeftIcon },
      { name: "ETL syncs with retries and alerts", icon: ChatBubbleLeftRightIcon },
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
            title="A better way to launch your ERP"
            description="We help startups and enterprises launch custom ERP systems that fit their real operations, from finance and inventory to procurement, order management, and reporting."
            showImages={false}
            showButton={true}
            buttonText="Get a quote"
            titleMaxWidth="800px"
            alignLeft={true}
            rightImage="https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774008740758x320185903005129500/erp4.webp"
          />
          <div className="pt-16 pb-24">
            <ClientLogoTicker variant="featured" />
          </div>
          <ValueProps />
          <CaseStudies
            slides={ERPS_CASE_STUDIES}
            description="From manufacturing and inventory to finance and reporting—see how we've helped teams replace rigid spreadsheets and off-the-shelf ERPs with modular systems built around their real processes."
            hideLogoGrid
          />
          <SampleProducts 
            products={ERPS_PRODUCTS}
            label="COMMON FEATURES"
            title="ERP-style systems we specialize in"
            description="From finance to operations, inventory, and integrations-we build ERP capabilities around your exact business workflows."
            descriptionMaxWidth="760px"
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
