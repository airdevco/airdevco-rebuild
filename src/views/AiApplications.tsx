"use client";

import {
  Navbar,
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  IndexLandingCTA,
  Footer,
  ValueProps,
  SampleProducts,
} from "@/components/landing";
import { CASE_STUDY_SLUG } from "@/config/case-study-static-slugs";
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

/** OUR CLIENTS — same curated stories as AI Enablement; hero image links to `/case-studies/:slug`. */
const AI_APPLICATIONS_CASE_STUDIES = [
  {
    id: "kidsbook",
    caseStudySlug: "kidsbook-marketplace-app",
    company: "Kidsbook",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1767135534066x924543251627778700/kidsbook.png",
    logoText: "",
    heading:
      "How Airdev helped Kidsbook build a custom no-code marketplace in just 6 weeks to connect parents with kids activity providers",
    description: "",
    image:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635075037ab429484ab21afb_kidsbook%20(2).png",
    imageTitle:
      "How Airdev helped Kidsbook build a custom no-code marketplace in just 6 weeks to connect parents with kids activity providers",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "Kids' activities marketplace", color: "#00d4ff" },
      { label: "Timeline", value: "6 weeks", color: "#a960ee" },
      { label: "Key results", value: "1000+ providers signed up", color: "#ff6b6b" },
    ],
  },
  {
    id: "bolster",
    caseStudySlug: CASE_STUDY_SLUG.bolster,
    company: "Bolster",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1767069657325x211103928710127970/bolster.png",
    logoText: "",
    heading: "How Bolster developed 3 custom no-code web apps on Bubble in just 6 weeks per app",
    description: "",
    image:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635076547ab429d14db22f83_bolster.jpeg",
    imageTitle: "How Bolster developed 3 custom no-code web apps on Bubble in just 6 weeks per app",
    customFields: [
      { label: "Business type", value: "SMB", color: "#635bff" },
      { label: "Product type", value: "Custom web portals", color: "#00d4ff" },
      { label: "Timeline", value: "6 weeks per app", color: "#a960ee" },
      { label: "Key results", value: "Raised $2.8M in funding", color: "#ff6b6b" },
    ],
  },
  {
    id: "mynftalerts",
    caseStudySlug: "my-nft-alerts-web-platform-no-code",
    company: "My NFT Alerts",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766777953165x204069526181363420/mynftalerts.png",
    logoText: "",
    heading:
      "How Airdev helped My NFT Alerts build a custom no-code platform on Bubble for NFT holders to track, trade and set personalized floor price alerts",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635079364569b5471f0fc12d_nft.jpeg",
    imageTitle:
      "How Airdev helped My NFT Alerts build a custom no-code platform on Bubble for NFT holders to track, trade and set personalized floor price alerts",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "Portfolio tracking app", color: "#00d4ff" },
      { label: "Timeline", value: "6 weeks", color: "#a960ee" },
      { label: "Key results", value: "Rapid user adoption", color: "#ff6b6b" },
    ],
  },
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
      <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
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
          <div className="pt-16 pb-24">
            <ClientLogoTicker variant="featured" />
          </div>
          <ValueProps />
          <CaseStudies
            slides={AI_APPLICATIONS_CASE_STUDIES}
            description="From intelligent workflows to AI-augmented products—see how we've helped teams ship faster with flexible foundations they can evolve."
          />
          <SampleProducts 
            products={AI_APPLICATIONS_PRODUCTS}
            label="SAMPLE PRODUCTS"
            title="AI applications we specialize in"
            description="We build AI-powered applications that leverage large language models and machine learning to automate workflows, enhance decision-making, and create intelligent experiences. Here are the types of AI applications we excel at building."
            bgColor="#F6F9FC"
          />
          <Testimonials />
          <IndexLandingCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AiApplications;
