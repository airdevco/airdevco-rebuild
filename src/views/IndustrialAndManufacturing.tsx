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
import { Product } from "@/components/landing/sample-products";

// Single case study for this page only; does not affect other routes.
const INDUSTRIAL_MANUFACTURING_CLIENT_STORY = {
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
        "Custom ERP around Greener's processes, estimated ~75% lower lifetime cost than off-the-shelf",
      color: "#ff6b6b",
    },
  ],
} as const;
import {
  ArrowPathIcon,
  BoltIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  CogIcon,
  CubeTransparentIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  TruckIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

const MANUFACTURING_BENEFITS: FintechValuePropItem[] = [
  {
    title: "Built for operational reality",
    description:
      "Shop floors and warehouses need workflows around work orders, inventory, suppliers, and exceptions, not generic SaaS templates. We model how your teams actually run production and fulfillment.",
    icon: TruckIcon,
  },
  {
    title: "Traceability and audit-ready",
    description:
      "Lot tracking, supplier records, and change history matter when customers or regulators ask questions. We build visibility and controls suited to regulated or contract-heavy environments.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Complex integrations handled",
    description:
      "ERPs, WMS tools, procurement platforms, and spreadsheets often coexist. We connect systems so planners, buyers, and supervisors work from consistent data.",
    icon: PuzzlePieceIcon,
  },
  {
    title: "Deploy faster across sites",
    description:
      "Pilot at one facility, then extend standards, dashboards, and workflows across plants without rebuilding from scratch each time you expand.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Scales with throughput and complexity",
    description:
      "From pilot lines to higher volume and more SKUs, the platform can grow with adoption so operations are not capped by brittle spreadsheets or one-off tools.",
    icon: BoltIcon,
  },
  {
    title: "Ongoing partnership",
    description:
      "Manufacturing programs evolve with suppliers, equipment, and KPIs. We stay engaged after launch for new modules, integrations, and continuous improvement.",
    icon: UserGroupIcon,
  },
];

const MANUFACTURING_PRODUCTS: Product[] = [
  {
    id: "inventory-warehouse",
    name: "Inventory & warehouse",
    cardHeading: "Inventory and warehouse operations",
    subtitle: "Stock, locations, and accuracy across sites",
    description:
      "Systems for real-time stock levels, bin and location tracking, cycle counts, transfers, and alerts when inventory runs thin. Built for teams that cannot afford mismatches between the floor and the ledger.",
    icon: CubeTransparentIcon,
    color: "#1265EF",
    features: [
      { name: "Multi-site and multi-warehouse visibility", icon: GlobeAltIcon },
      { name: "SKU, lot, and serial tracking where you need it", icon: ClipboardDocumentListIcon },
      { name: "Reorder points, safety stock, and exception queues", icon: BoltIcon },
      { name: "Count workflows and adjustment approvals", icon: ClipboardDocumentCheckIcon },
      { name: "Handoffs to ERP or WMS through APIs and exports", icon: PuzzlePieceIcon },
      { name: "Dashboards for planners and warehouse leads", icon: ChartBarIcon },
    ],
  },
  {
    id: "procurement-suppliers",
    name: "Procurement & suppliers",
    cardHeading: "Procurement and supplier management",
    subtitle: "Buying, contracts, and supplier performance",
    description:
      "Portals and internal tools for purchase requests, approvals, PO issuance, receiving alignment, and supplier scorecards. Helps procurement and operations agree on lead times, pricing changes, and who owns each supplier relationship.",
    icon: ClipboardDocumentListIcon,
    color: "#06b6d4",
    features: [
      { name: "Requisitions, budgets, and approval routing", icon: ClipboardDocumentCheckIcon },
      { name: "Supplier onboarding and contact hierarchy", icon: UserGroupIcon },
      { name: "Open PO tracking and receiving status", icon: TruckIcon },
      { name: "Price history and contract visibility", icon: DocumentTextIcon },
      { name: "Performance signals: on-time, quality, spend", icon: ChartBarIcon },
      { name: "Integration with email, ERP, and payment workflows", icon: GlobeAltIcon },
    ],
  },
  {
    id: "production-work-orders",
    name: "Production & work orders",
    cardHeading: "Production visibility and work orders",
    subtitle: "Schedule, execute, and report on the floor",
    description:
      "Work order management, routing steps, labor or machine assignments, and progress signals for supervisors. Bridges planning and execution so teams see what is running, blocked, or behind without walking the line with a clipboard.",
    icon: CogIcon,
    color: "#10b981",
    features: [
      { name: "Work order creation, sequencing, and dependencies", icon: CogIcon },
      { name: "BOM and component allocation views", icon: CubeTransparentIcon },
      { name: "Shift and crew visibility for leads", icon: UserGroupIcon },
      { name: "Downtime and exception logging", icon: BoltIcon },
      { name: "Throughput and order-level reporting", icon: ChartBarIcon },
      { name: "Handoffs from planning spreadsheets or ERP jobs", icon: ArrowPathIcon },
    ],
  },
  {
    id: "quality-traceability",
    name: "Quality & traceability",
    cardHeading: "Quality, lots, and traceability",
    subtitle: "Inspections, holds, and genealogy",
    description:
      "Inspection plans, nonconformance workflows, corrective actions, and lot-level genealogy from raw material through shipment. Supports audits and customer inquiries with structured history instead of scattered files.",
    icon: ClipboardDocumentCheckIcon,
    color: "#a855f7",
    features: [
      { name: "Lot and batch tracking across operations", icon: CubeTransparentIcon },
      { name: "Inspection checklists and pass or fail routing", icon: ClipboardDocumentCheckIcon },
      { name: "CAPA and root-cause documentation", icon: DocumentTextIcon },
      { name: "Hold and release workflows", icon: ShieldCheckIcon },
      { name: "Supplier quality feedback loops", icon: UserGroupIcon },
      { name: "Reports for customers and regulators", icon: ChartBarIcon },
    ],
  },
  {
    id: "maintenance-assets",
    name: "Maintenance & assets",
    cardHeading: "Maintenance and asset management",
    subtitle: "Keep assets running and downtime visible",
    description:
      "CMMS-style tools for asset registers, preventive schedules, work requests, spare parts usage, and downtime reasons. Gives maintenance and operations a shared picture of reliability across lines and facilities.",
    icon: WrenchScrewdriverIcon,
    color: "#f59e0b",
    features: [
      { name: "Asset hierarchy and criticality", icon: CubeTransparentIcon },
      { name: "PM calendars and work order dispatch", icon: ClockIcon },
      { name: "Breakdown requests with priority and routing", icon: BoltIcon },
      { name: "Parts usage and stock ties where needed", icon: ClipboardDocumentListIcon },
      { name: "MTBF or downtime summaries by asset", icon: ChartBarIcon },
      { name: "Technician mobile-friendly task views", icon: UserGroupIcon },
    ],
  },
  {
    id: "logistics-fulfillment",
    name: "Logistics & fulfillment",
    cardHeading: "Logistics and inbound or outbound flow",
    subtitle: "Coordinate movement across the network",
    description:
      "Scheduling dock appointments, ASN or shipment visibility, carrier handoffs, and yard or route coordination when distribution complexity grows beyond a single dock door.",
    icon: TruckIcon,
    color: "#ec4899",
    features: [
      { name: "Shipment and ASN tracking with statuses", icon: TruckIcon },
      { name: "Receiving workflows tied to PO lines", icon: ClipboardDocumentCheckIcon },
      { name: "Cross-dock or transfer orchestration", icon: ArrowPathIcon },
      { name: "Carrier or broker contact surfaces", icon: GlobeAltIcon },
      { name: "Exceptions: damage, short ship, late arrival", icon: BoltIcon },
      { name: "Fulfillment KPIs and lane-level reporting", icon: ChartBarIcon },
    ],
  },
];

const IndustrialAndManufacturing = () => {
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
              title="A better way to build for industrial & manufacturing"
              description="We help manufacturers and industrial teams launch operations software in a fraction of the time and cost of traditional development. From procurement and supplier management to inventory and production visibility, we build tools that match how plants and networks actually run."
              showImages={false}
              showButton={true}
              buttonText="Get a quote"
              titleMaxWidth="800px"
              alignLeft={true}
              rightImage="https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774014292763x501102941799014900/im5.webp"
            />
          </div>
          <FintechValueProps
            title="Why industrial & manufacturing teams choose us"
            description="Modern plants depend on connected tools for procurement, inventory, production signals, and supplier performance. Here's why operations and IT leaders trust us with their software."
            items={MANUFACTURING_BENEFITS}
            introMaxWidthClassName="max-w-3xl"
          />
          <div className="pt-16 pb-24 hidden">
            <ClientLogoTicker />
          </div>
          <CaseStudies
            description="We've helped industrial and manufacturing teams ship procurement tools, inventory systems, supplier workflows, and operations dashboards."
            slides={[INDUSTRIAL_MANUFACTURING_CLIENT_STORY]}
            hideLogoGrid
          />
          <SampleProducts
            bgColor="bg-[#F6F9FC]"
            products={MANUFACTURING_PRODUCTS}
            label="SAMPLE PRODUCTS"
            title="Manufacturing software we build"
            description="Operational products for plants, warehouses, and supply networks. Here are common shapes we deliver."
            descriptionMaxWidth="720px"
          />
          <SaasCTA
            title="Building something in manufacturing?"
            description="We're happy to talk through your project, even if you're still in the early stages."
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default IndustrialAndManufacturing;
