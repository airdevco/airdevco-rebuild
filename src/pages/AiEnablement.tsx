"use client";

import {
  Navbar,
  Hero,
  CaseStudies,
  SaasCTA,
  Footer,
  SampleProducts,
  ProcessSection,
} from "@/components/landing";
import {
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ChartPieIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/solid";
import { Product } from "@/components/landing/sample-products";

const AI_ENABLEMENT_SLIDES = [
  {
    id: "kidsbook",
    company: "Kidsbook",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1767135534066x924543251627778700/kidsbook.png",
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
    id: "bolster",
    company: "Bolster",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1767069657325x211103928710127970/bolster.png",
    logoText: "",
    heading: "How Bolster developed 3 custom no-code web apps on Bubble in just 6 weeks per app",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635076547ab429d14db22f83_bolster.jpeg",
    imageTitle: "How Bolster developed 3 custom no-code web apps on Bubble in just 6 weeks per app",
    customFields: [
      { label: "Business type", value: "SMB", color: "#635bff" },
      { label: "Product type", value: "Custom web portals", color: "#00d4ff" },
      { label: "Timeline", value: "6 weeks per app", color: "#a960ee" },
      { label: "Key results", value: "Raised $2.8M in funding", color: "#ff6b6b" },
    ]
  },
  {
    id: "playground",
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
];

const AI_PRODUCTS: Product[] = [
  {
    id: "ai-chat",
    name: "AI Chat & Assistants",
    subtitle: "Intelligent customer support platform",
    description: "We built an AI-powered customer support platform that uses natural language processing to handle customer inquiries, route complex issues to human agents, and learn from interactions to improve responses over time.",
    icon: ChatBubbleLeftRightIcon,
    color: "#6366f1",
    features: [
      { name: "Natural language processing", icon: SparklesIcon },
      { name: "Context-aware conversations", icon: ChatBubbleLeftRightIcon },
      { name: "Multi-language support", icon: GlobeAltIcon },
      { name: "Sentiment analysis", icon: UserGroupIcon },
    ],
  },
  {
    id: "ai-automation",
    name: "AI Workflow Automation",
    subtitle: "Intelligent process automation",
    description: "A financial services company needed to automate document processing and data extraction. We built an AI system that reads, categorizes, and extracts key information from thousands of documents daily, reducing manual work by 80%.",
    icon: Cog6ToothIcon,
    color: "#10b981",
    features: [
      { name: "Document processing & OCR", icon: DocumentTextIcon },
      { name: "Intelligent data extraction", icon: MagnifyingGlassIcon },
      { name: "Automated decision-making", icon: Cog6ToothIcon },
      { name: "Workflow orchestration", icon: SparklesIcon },
    ],
  },
  {
    id: "ai-personalization",
    name: "AI Personalization",
    subtitle: "Personalized user experiences",
    description: "We developed an AI-powered recommendation engine for an e-commerce platform that analyzes user behavior, preferences, and purchase history to deliver personalized product suggestions and content, increasing conversion rates by 35%.",
    icon: SparklesIcon,
    color: "#f59e0b",
    features: [
      { name: "Behavioral analysis", icon: UserGroupIcon },
      { name: "Recommendation algorithms", icon: SparklesIcon },
      { name: "Real-time personalization", icon: Cog6ToothIcon },
      { name: "A/B testing framework", icon: ChartPieIcon },
    ],
  },
  {
    id: "ai-analytics",
    name: "AI Analytics & Insights",
    subtitle: "Predictive analytics platform",
    description: "A logistics company wanted to predict demand and optimize inventory. We built an AI analytics platform that processes historical data, market trends, and external factors to generate accurate forecasts and actionable insights.",
    icon: ChartPieIcon,
    color: "#ec4899",
    features: [
      { name: "Predictive modeling", icon: ChartPieIcon },
      { name: "Anomaly detection", icon: MagnifyingGlassIcon },
      { name: "Automated reporting", icon: DocumentTextIcon },
      { name: "Data visualization dashboards", icon: PresentationChartLineIcon },
    ],
  },
];

const AiEnablement = () => {
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
            title="Build AI-powered applications"
            description="Integrate cutting-edge AI capabilities into your applications with our visual development approach. We help you leverage AI to automate workflows, enhance user experiences, and unlock new possibilities—all built faster and more cost-effectively than traditional development."
            showImages={false}
            showButton={true}
            buttonText="Talk to us"
            titleMaxWidth="800px"
            alignLeft={true}
            rightImage="https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1767148500165x432666082974164860/designify.png"
            label="TRUSTED BY ORGANIZATIONS OF ALL SIZES"
          />
          <CaseStudies 
            label="AI-POWERED APPLICATIONS"
            description="We've helped businesses integrate AI capabilities into their applications, from intelligent automation to personalized user experiences. Our visual development approach makes AI integration faster and more accessible."
            slides={AI_ENABLEMENT_SLIDES}
          />
          <ProcessSection />
          <SampleProducts 
            bgColor="bg-[#F6F9FC]"
            label="SAMPLE PRODUCTS"
            title="AI-powered applications we build"
            description="From intelligent chatbots to predictive analytics, we help businesses integrate AI capabilities that drive real results. Here are examples of AI-powered applications we've built."
            products={AI_PRODUCTS}
          />
          <SaasCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AiEnablement;

