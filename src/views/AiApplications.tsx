"use client";

import {
  Navbar,
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  SaasCTA,
  Footer,
  ValueProps,
  SampleProducts,
} from "@/components/landing";
import { Button } from "@/components/ui/button";
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
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  MegaphoneIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  CogIcon,
  CircleStackIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

// Custom slides for AI Applications page
const AI_APPLICATIONS_CASE_STUDIES = [
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

const AI_APPLICATIONS_PRODUCTS: Product[] = [
  {
    id: "sales",
    name: "Sales",
    description: "AI-powered sales tools that help teams prospect smarter, personalize outreach at scale, and close deals faster. From lead scoring to automated follow-ups, these applications leverage LLMs to supercharge your sales pipeline.",
    icon: CurrencyDollarIcon,
    color: "#a855f7",
    features: [
      { name: "AI-powered lead scoring and prioritization", icon: ChartPieIcon },
      { name: "Personalized email and message generation", icon: ChatBubbleLeftRightIcon },
      { name: "Conversation intelligence and call analysis", icon: MagnifyingGlassIcon },
      { name: "Automated follow-up sequences", icon: ClockIcon },
      { name: "CRM enrichment and data sync", icon: CircleStackIcon },
      { name: "Sales forecasting and insights", icon: ChartPieIcon },
    ],
  },
  {
    id: "customer-support",
    name: "Customer support",
    description: "Intelligent customer support applications that handle inquiries, resolve issues, and improve customer satisfaction. Build chatbots, ticket routing systems, and knowledge base assistants powered by AI.",
    icon: ChatBubbleLeftRightIcon,
    color: "#ff6b35",
    features: [
      { name: "AI chatbots and virtual agents", icon: SparklesIcon },
      { name: "Intelligent ticket routing and prioritization", icon: SquaresPlusIcon },
      { name: "Automated response suggestions", icon: ChatBubbleLeftRightIcon },
      { name: "Knowledge base Q&A systems", icon: DocumentTextIcon },
      { name: "Sentiment analysis and escalation", icon: ChartPieIcon },
      { name: "Multi-channel support integration", icon: GlobeAltIcon },
    ],
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "AI marketing tools that generate content, optimize campaigns, and personalize customer experiences. From copywriting assistants to audience segmentation, build marketing applications that drive results.",
    icon: MegaphoneIcon,
    color: "#06b6d4",
    features: [
      { name: "AI content and copy generation", icon: DocumentTextIcon },
      { name: "Audience segmentation and targeting", icon: UserGroupIcon },
      { name: "Campaign performance optimization", icon: ChartPieIcon },
      { name: "Social media content creation", icon: GlobeAltIcon },
      { name: "A/B testing and personalization", icon: SquaresPlusIcon },
      { name: "SEO analysis and recommendations", icon: MagnifyingGlassIcon },
    ],
  },
  {
    id: "document-management",
    name: "Document management",
    description: "Smart document processing applications that extract, organize, and analyze information from documents. Build systems for contract analysis, invoice processing, and intelligent document search.",
    icon: DocumentTextIcon,
    color: "#10b981",
    features: [
      { name: "Document parsing and data extraction", icon: DocumentTextIcon },
      { name: "Contract analysis and review", icon: ShieldCheckIcon },
      { name: "Intelligent document search", icon: MagnifyingGlassIcon },
      { name: "Automated document classification", icon: SquaresPlusIcon },
      { name: "OCR and handwriting recognition", icon: SparklesIcon },
      { name: "Version control and collaboration", icon: UserGroupIcon },
    ],
  },
  {
    id: "research-analysis",
    name: "Research & analysis",
    description: "AI-powered research and analysis tools that synthesize information, identify patterns, and generate insights. Build applications for market research, competitive analysis, and data-driven decision making.",
    icon: MagnifyingGlassIcon,
    color: "#f59e0b",
    features: [
      { name: "Automated research and summarization", icon: DocumentTextIcon },
      { name: "Competitive intelligence gathering", icon: GlobeAltIcon },
      { name: "Trend analysis and forecasting", icon: ChartPieIcon },
      { name: "Data visualization and reporting", icon: ChartPieIcon },
      { name: "Source aggregation and citation", icon: CircleStackIcon },
      { name: "Custom knowledge base creation", icon: SparklesIcon },
    ],
  },
  {
    id: "process-automation",
    name: "Process automation",
    description: "Intelligent process automation applications that streamline workflows, reduce manual tasks, and improve efficiency. Build AI agents that handle repetitive work and make decisions based on complex rules.",
    icon: CogIcon,
    color: "#ec4899",
    features: [
      { name: "AI-powered workflow automation", icon: SquaresPlusIcon },
      { name: "Intelligent decision making", icon: SparklesIcon },
      { name: "Exception handling and escalation", icon: BellIcon },
      { name: "Cross-system integration", icon: GlobeAltIcon },
      { name: "Process monitoring and optimization", icon: ChartPieIcon },
      { name: "Audit trails and compliance", icon: ShieldCheckIcon },
    ],
  },
  {
    id: "data-enrichment",
    name: "Data enrichment",
    description: "AI data enrichment applications that enhance, validate, and complete your data. Build tools for lead enrichment, data cleansing, and automated data quality management.",
    icon: CircleStackIcon,
    color: "#8b5cf6",
    features: [
      { name: "Contact and company data enrichment", icon: UserGroupIcon },
      { name: "Data validation and cleansing", icon: ShieldCheckIcon },
      { name: "Automated data categorization", icon: SquaresPlusIcon },
      { name: "Duplicate detection and merging", icon: CircleStackIcon },
      { name: "Real-time data updates", icon: ClockIcon },
      { name: "Third-party data integration", icon: GlobeAltIcon },
    ],
  },
];

const AiApplications = () => {
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
          {/* Custom Centered Hero for AI Applications */}
          <section className="relative pt-40 pb-0 px-6 overflow-hidden">
            <div className="max-w-[1200px] mx-auto w-full">
              {/* Centered Text Content */}
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                  A better way to launch your AI application
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  We use a new approach to help entrepreneurs launch AI products, for a fraction of cost and time of traditional development
                </p>
                <Button className="bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none">
                  Talk to us
                </Button>
              </div>

              {/* Centered Image Below */}
              <div className="flex justify-center">
                <img 
                  src="https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1768948899127x449947620239162560/ai.webp"
                  alt="AI Applications"
                  className="w-full max-w-5xl h-auto rounded-2xl"
                />
              </div>
            </div>
          </section>
          <ValueProps />
          <SampleProducts 
            products={AI_APPLICATIONS_PRODUCTS}
            label="SAMPLE PRODUCTS"
            title="AI applications we specialize in"
            description="We build AI-powered applications that leverage large language models and machine learning to automate workflows, enhance decision-making, and create intelligent experiences. Here are the types of AI applications we excel at building."
            bgColor="#F6F9FC"
          />
          <div className="pt-16 pb-8">
            <ClientLogoTicker />
          </div>
          <Testimonials />
          <SaasCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AiApplications;
