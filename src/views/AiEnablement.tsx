"use client";

import {
  Navbar,
  CaseStudies,
  IndexLandingCTA,
  Footer,
  SampleProducts,
  ProcessSection,
  WhoWeAre,
  HOME_WHO_WE_ARE_STATS,
} from "@/components/landing";
import { Button } from "@/components/ui/button";
import { AiEnablementWhoWeWorkWithSection } from "@/components/landing/ai-enablement-who-we-work-with-section";
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
import { CASE_STUDY_SLUG } from "@/config/case-study-static-slugs";

/** Same asset as `/approach` hero (`ApproachLandingHero`). */
const AI_ENABLEMENT_HERO_BLUR_BG =
  "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d482ff67a3aac218170979_blurbg3.svg";

const AI_ENABLEMENT_SLIDES = [
  {
    id: "kidsbook",
    caseStudySlug: "kidsbook-marketplace-app",
    company: "Kidsbook",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1767135534066x924543251627778700/kidsbook.png",
    logoText: "",
    heading: "How Airdev helped Kidsbook build a custom no-code marketplace in just 6 weeks to connect parents with kids activity providers",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635075037ab429484ab21afb_kidsbook%20(2).png",
    imageTitle: "How Airdev helped Kidsbook build a custom no-code marketplace in just 6 weeks to connect parents with kids activity providers",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "Kids' activities marketplace", color: "#00d4ff" },
      { label: "Timeline", value: "6 weeks", color: "#a960ee" },
      { label: "Key results", value: "1000+ providers signed up", color: "#ff6b6b" },
    ]
  },
  {
    id: "bolster",
    caseStudySlug: CASE_STUDY_SLUG.bolster,
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
    caseStudySlug: "my-nft-alerts-web-platform-no-code",
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
  const openLandingPricingPopup = () => {
    window.dispatchEvent(new CustomEvent("open-landing-pricing-popup"));
  };

  return (
    <>
      <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main>
          <section className="relative scroll-mt-[88px] overflow-x-hidden bg-white pb-16 pt-32 lg:pb-20 lg:pt-48">
            <div
              className="pointer-events-none absolute inset-0 z-0 bg-white"
              aria-hidden
              style={{
                backgroundImage: `url(${AI_ENABLEMENT_HERO_BLUR_BG})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 z-[1]"
              aria-hidden
              style={{
                background: `
            linear-gradient(
              to top,
              #ffffff 0%,
              rgba(255, 255, 255, 0.97) 5%,
              rgba(255, 255, 255, 0.88) 12%,
              rgba(255, 255, 255, 0.58) 24%,
              rgba(255, 255, 255, 0.28) 38%,
              rgba(255, 255, 255, 0.08) 50%,
              transparent 64%
            ),
            linear-gradient(
              to bottom,
              #ffffff 0%,
              rgba(255, 255, 255, 0.98) 4%,
              rgba(255, 255, 255, 0.9) 10%,
              rgba(255, 255, 255, 0.72) 18%,
              rgba(255, 255, 255, 0.42) 30%,
              rgba(255, 255, 255, 0.15) 44%,
              transparent 62%
            )
          `,
              }}
            />

            <div className="relative z-10 mx-auto max-w-[1200px] px-6">
              <div className="mx-auto max-w-5xl">
                <h1 className="mx-auto mb-8 text-left text-[56px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0D2350] lg:text-center lg:text-[80px]">
                  <span className="block">AI Enablement,</span>
                  <span className="block text-[#6C7280]">end-to-end.</span>
                </h1>

                <p className="mx-auto mb-8 max-w-lg whitespace-pre-line text-left text-xl leading-relaxed text-gray-600 lg:text-center">
                  {`Most firms will sell you a strategy or sell you code.
We do both — figuring out where AI actually fits in your business, then building and shipping it.`}
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                  <Button
                    type="button"
                    onClick={openLandingPricingPopup}
                    className="bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none"
                  >
                    Book a discovery call
                  </Button>
                  <a
                    href="#sample-solutions"
                    className="text-[16px] font-medium text-[#1265EF] transition-colors hover:text-[#1a1a1a]"
                  >
                    See sample solutions
                  </a>
                </div>
              </div>
            </div>
          </section>
          <AiEnablementWhoWeWorkWithSection />
          <WhoWeAre
            label="WHO WE ARE"
            title="Setting the standard for the new way to build"
            description="Visual development and AI are changing how software gets made. We're leading that shift."
            stats={HOME_WHO_WE_ARE_STATS}
            hideGallery
            compactMetricsBottom
            bgColor="#0A2540"
            labelColor="#0AE4E3"
            titleColor="#FFFFFF"
            descriptionColor="#ADBDCC"
          />
          <CaseStudies 
            label="AI-POWERED APPLICATIONS"
            description="We've helped businesses integrate AI capabilities into their applications, from intelligent automation to personalized user experiences. Our visual development approach makes AI integration faster and more accessible."
            slides={AI_ENABLEMENT_SLIDES}
          />
          <ProcessSection />
          <div id="sample-solutions" className="scroll-mt-28">
            <SampleProducts 
              bgColor="bg-[#F6F9FC]"
              label="SAMPLE PRODUCTS"
              title="AI-powered applications we build"
              description="From intelligent chatbots to predictive analytics, we help businesses integrate AI capabilities that drive real results. Here are examples of AI-powered applications we've built."
              products={AI_PRODUCTS}
            />
          </div>
          <div className="pt-16">
            <IndexLandingCTA />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AiEnablement;
