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
} from "@heroicons/react/24/solid";

// Custom slides for Marketplaces page
const MARKETPLACE_CASE_STUDIES = [
  {
    id: "ticketrev",
    company: "TicketRev",
    logo: "https://cdn.prod.website-files.com/64e8a789efa42eaf8fe4d068/64e8b49e181622332d021cee_Logo.svg",
    logoText: "",
    heading: "How a buyer-first ticket marketplace startup quickly secured $1.1M in funding with Bubble.io",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/64cc2c786d693702395f21b1_TicketRev-built-with-no-code-Airdev.jpg",
    imageTitle: "How a buyer-first ticket marketplace startup quickly secured $1.1M in funding with Bubble.io",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "Marketplace app", color: "#00d4ff" },
      { label: "Timeline", value: "2 months", color: "#a960ee" },
      { label: "Key results", value: "$1.1M in pre-seed funding raised in 2 years", color: "#ff6b6b" },
    ]
  },
  {
    id: "kidsbook",
    company: "Kidsbook",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1768940559825x362227103494313200/kidsbook.png",
    logoText: "",
    heading: "How Airdev helped Kidsbook build a custom no-code marketplace in just 6 weeks to connect parents with kids activity providers",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635075037ab429484ab21afb_kidsbook%20(2).png",
    imageTitle: "How Airdev helped Kidsbook build a custom no-code marketplace in just 6 weeks to connect parents with kids activity providers",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "2-sided marketplace", color: "#00d4ff" },
      { label: "Timeline", value: "6 weeks", color: "#a960ee" },
      { label: "Key results", value: "1000+ providers signed up", color: "#ff6b6b" },
    ]
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
    ]
  },
  {
    id: "camphire",
    company: "CampHire",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1768941053053x498298402804590460/camphire.png",
    logoText: "",
    heading: "How Airdev helped CampHire automate their recruitment agency via a self-service marketplace platform",
    description: "",
    image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1768941145859x368793998371030460/camp.jpg",
    imageTitle: "How Airdev helped CampHire automate their recruitment agency via a self-service marketplace platform",
    customFields: [
      { label: "Business type", value: "SMB", color: "#635bff" },
      { label: "Product type", value: "Marketplace platform", color: "#00d4ff" },
      { label: "Timeline", value: "3 months", color: "#a960ee" },
      { label: "Key results", value: "30+ camp and 250+ candidate sign ups in just 1 month since launch", color: "#ff6b6b" },
    ]
  }
];

const MARKETPLACE_PRODUCTS: Product[] = [
  {
    id: "product-marketplace",
    name: "Product marketplace",
    description: "Platforms that connect buyers and sellers of physical or digital products. Think Amazon, Etsy, or specialized marketplaces for specific industries. These platforms handle product listings, search, reviews, payments, and order fulfillment.",
    icon: ShoppingBagIcon,
    color: "#a855f7",
    features: [
      { name: "Product catalog with search and filtering", icon: BuildingStorefrontIcon },
      { name: "Seller onboarding and storefront management", icon: UserGroupIcon },
      { name: "Shopping cart and checkout flows", icon: ShoppingBagIcon },
      { name: "Payment processing and escrow", icon: ShieldCheckIcon },
      { name: "Order management and tracking", icon: ClockIcon },
      { name: "Reviews, ratings, and trust systems", icon: ChartPieIcon },
    ],
  },
  {
    id: "rental-marketplace",
    name: "Rental marketplace",
    description: "Platforms that enable people to rent out assets like vehicles, equipment, spaces, or properties. These marketplaces handle availability calendars, booking systems, insurance, and payment processing for temporary access to assets.",
    icon: HomeIcon,
    color: "#ff6b35",
    features: [
      { name: "Availability calendar and booking system", icon: CalendarIcon },
      { name: "Asset listing and photo galleries", icon: BuildingStorefrontIcon },
      { name: "Pricing and rate management", icon: ChartPieIcon },
      { name: "Booking confirmations and reminders", icon: BellIcon },
      { name: "Payment processing and deposits", icon: ShieldCheckIcon },
      { name: "Damage reporting and insurance claims", icon: ShieldCheckIcon },
    ],
  },
  {
    id: "gig-marketplace",
    name: "Gig marketplace",
    description: "Platforms that connect service providers with clients who need work done. From freelance marketplaces to on-demand services, these platforms handle job postings, proposals, project management, and payments for services rendered.",
    icon: BriefcaseIcon,
    color: "#06b6d4",
    features: [
      { name: "Job posting and proposal system", icon: SquaresPlusIcon },
      { name: "Provider profiles and portfolios", icon: UserGroupIcon },
      { name: "Messaging and communication tools", icon: BellIcon },
      { name: "Milestone-based payments", icon: ShieldCheckIcon },
      { name: "Project tracking and deliverables", icon: ClockIcon },
      { name: "Reviews and reputation systems", icon: ChartPieIcon },
    ],
  },
  {
    id: "events-marketplace",
    name: "Events marketplace",
    description: "Platforms that connect event organizers with attendees, venues, vendors, and service providers. These marketplaces handle event discovery, ticketing, vendor bookings, and coordination for events of all sizes.",
    icon: CalendarIcon,
    color: "#10b981",
    features: [
      { name: "Event discovery and search", icon: GlobeAltIcon },
      { name: "Ticketing and registration systems", icon: ShoppingBagIcon },
      { name: "Venue and vendor listings", icon: BuildingStorefrontIcon },
      { name: "Event management dashboards", icon: ChartPieIcon },
      { name: "Attendee communication tools", icon: BellIcon },
      { name: "Payment processing and refunds", icon: ShieldCheckIcon },
    ],
  },
  {
    id: "multi-sided-marketplaces",
    name: "Multi-sided marketplaces",
    description: "Complex platforms that connect multiple distinct user types who all need to interact. These marketplaces coordinate between buyers, sellers, service providers, and sometimes additional parties like delivery drivers or administrators.",
    icon: UserGroupIcon,
    color: "#f59e0b",
    features: [
      { name: "Multiple user type dashboards", icon: UserGroupIcon },
      { name: "Role-based permissions and access", icon: KeyIcon },
      { name: "Complex matching algorithms", icon: SquaresPlusIcon },
      { name: "Multi-party payment processing", icon: ShieldCheckIcon },
      { name: "Communication between all parties", icon: BellIcon },
      { name: "Comprehensive analytics and reporting", icon: ChartPieIcon },
    ],
  },
];

const Marketplaces = () => {
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
            title="A better way to launch your two-sided marketplace"
            description="We use a new approach to help startups and enterprises launch two-sided marketplaces that are 100% flexible, for a small fraction of the cost of building from scratch."
            showImages={false}
            showButton={true}
            buttonText="Talk to us"
            titleMaxWidth="800px"
            alignLeft={true}
            rightImage="https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1768942292841x753883318458439700/docseek.webp"
          />
          <div className="pt-16 pb-24">
            <ClientLogoTicker />
          </div>
          <ValueProps />
          <CaseStudies slides={MARKETPLACE_CASE_STUDIES} />
          <SampleProducts 
            products={MARKETPLACE_PRODUCTS}
            label="SAMPLE PRODUCTS"
            title="Marketplace products we specialize in"
            description="We've built marketplaces across industries, connecting buyers and sellers, renters and owners, service providers and clients. Here are the types of marketplaces we excel at building."
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

export default Marketplaces;
