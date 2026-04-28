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
import {
  CodeBracketIcon,
  CpuChipIcon,
  CloudIcon,
  CubeTransparentIcon,
  CommandLineIcon,
  ServerStackIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CogIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  BoltIcon,
  CircleStackIcon,
  GlobeAltIcon,
  PresentationChartLineIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import { Product } from "@/components/landing/sample-products";

const TECH_SOFTWARE_PRODUCTS: Product[] = [
  {
    id: "developer-tools",
    name: "Developer Tools",
    subtitle: "Platforms that help developers build better software",
    description: "IDEs, code editors, debugging tools, and development environments. Products that streamline the software development lifecycle and help engineering teams ship faster with better quality.",
    icon: CodeBracketIcon,
    color: "#6366f1",
    features: [
      { name: "Code editing and syntax highlighting", icon: CommandLineIcon },
      { name: "Version control integration", icon: ArrowPathIcon },
      { name: "Debugging and profiling tools", icon: CogIcon },
      { name: "CI/CD pipeline management", icon: BoltIcon },
      { name: "API development and testing", icon: GlobeAltIcon },
      { name: "Team collaboration features", icon: UserGroupIcon },
    ],
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    subtitle: "Platforms for processing and visualizing data",
    description: "Business intelligence tools, data pipelines, and analytics platforms. Products that help organizations collect, process, and derive insights from their data to make better decisions.",
    icon: ChartBarIcon,
    color: "#10b981",
    features: [
      { name: "Data visualization dashboards", icon: PresentationChartLineIcon },
      { name: "ETL and data pipeline tools", icon: ArrowPathIcon },
      { name: "Real-time analytics processing", icon: BoltIcon },
      { name: "Custom report builders", icon: DocumentTextIcon },
      { name: "Data warehouse integrations", icon: CircleStackIcon },
      { name: "Predictive analytics models", icon: CpuChipIcon },
    ],
  },
  {
    id: "cloud-infrastructure",
    name: "Cloud & Infrastructure",
    subtitle: "Tools for managing cloud resources and deployments",
    description: "Cloud management platforms, infrastructure automation, and DevOps tools. Products that simplify the complexity of modern cloud infrastructure and help teams deploy and scale applications reliably.",
    icon: CloudIcon,
    color: "#0ea5e9",
    features: [
      { name: "Multi-cloud resource management", icon: ServerStackIcon },
      { name: "Container orchestration", icon: CubeTransparentIcon },
      { name: "Infrastructure as code", icon: CommandLineIcon },
      { name: "Monitoring and alerting", icon: BoltIcon },
      { name: "Cost optimization tools", icon: ChartBarIcon },
      { name: "Security and compliance automation", icon: ShieldCheckIcon },
    ],
  },
  {
    id: "automation-integration",
    name: "Automation & Integration",
    subtitle: "Platforms that connect systems and automate workflows",
    description: "iPaaS solutions, workflow automation, and integration platforms. Products that help businesses connect their disparate systems and automate repetitive processes to improve efficiency.",
    icon: CogIcon,
    color: "#8b5cf6",
    features: [
      { name: "API connectors and integrations", icon: GlobeAltIcon },
      { name: "Workflow automation builders", icon: ArrowPathIcon },
      { name: "Event-driven triggers", icon: BoltIcon },
      { name: "Data transformation tools", icon: CircleStackIcon },
      { name: "Error handling and monitoring", icon: ShieldCheckIcon },
      { name: "Custom logic and scripting", icon: CommandLineIcon },
    ],
  },
  {
    id: "enterprise-platforms",
    name: "Enterprise Platforms",
    subtitle: "Large-scale business software solutions",
    description: "Enterprise resource planning, project management, and collaboration platforms. Products designed to handle the complexity and scale requirements of large organizations.",
    icon: ServerStackIcon,
    color: "#f59e0b",
    features: [
      { name: "Multi-tenant architecture", icon: CloudIcon },
      { name: "Role-based access control", icon: ShieldCheckIcon },
      { name: "Enterprise SSO integration", icon: UserGroupIcon },
      { name: "Audit logging and compliance", icon: DocumentTextIcon },
      { name: "Custom workflows and approvals", icon: ArrowPathIcon },
      { name: "Advanced reporting and analytics", icon: PresentationChartLineIcon },
    ],
  },
  {
    id: "ai-ml-platforms",
    name: "AI & ML Platforms",
    subtitle: "Tools for building and deploying AI applications",
    description: "Machine learning platforms, AI model management, and intelligent automation tools. Products that help organizations leverage artificial intelligence to enhance their products and operations.",
    icon: CpuChipIcon,
    color: "#ec4899",
    features: [
      { name: "Model training and deployment", icon: CloudIcon },
      { name: "Data labeling and preparation", icon: CircleStackIcon },
      { name: "LLM integration and orchestration", icon: CubeTransparentIcon },
      { name: "Real-time inference APIs", icon: BoltIcon },
      { name: "Model monitoring and versioning", icon: ArrowPathIcon },
      { name: "Custom AI agent builders", icon: CogIcon },
    ],
  },
];

const TECH_SOFTWARE_BENEFITS: FintechValuePropItem[] = [
  {
    title: "Built for production-grade software",
    description:
      "Technology products need environments, roles, and release discipline—not disposable demos. We structure builds so permissions, data modeling, and workflows stay coherent as your roadmap grows.",
    icon: CodeBracketIcon,
  },
  {
    title: "Secure by default",
    description:
      "Enterprise buyers expect sensible identity, encryption, and access patterns. We align with SOC 2-ready infrastructure and controls so security isn't bolted on at the end.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Complex integrations handled",
    description:
      "Developer tools and SaaS platforms rarely stand alone. REST APIs, webhooks, OAuth, CRMs, cloud providers—we connect the systems your users and internal teams already depend on.",
    icon: PuzzlePieceIcon,
  },
  {
    title: "Ship faster, iterate sooner",
    description:
      "Visual development shrinks build cycles so you can validate ideas, onboard design partners, and reach GA without burning through runway on a traditional agency timeline.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Scales with adoption and load",
    description:
      "From early adopters to enterprise rollouts, infrastructure can grow with traffic and tenants so you aren’t forced into a rewrite when usage spikes or contracts expand.",
    icon: BoltIcon,
  },
  {
    title: "Ongoing partnership",
    description:
      "Software products evolve with customer feedback and roadmap bets. We stay engaged after launch for new modules, refactors, integrations, and whatever the next release demands.",
    icon: UserGroupIcon,
  },
];

const TechnologyAndSoftware = () => {
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
              title="A better way to build for tech & software"
              description="We help technology and software companies launch innovative products in a fraction of the time and cost of traditional development. From developer tools to enterprise platforms, we've built solutions that power some of the most ambitious tech companies."
              showImages={false}
              showButton={true}
              buttonText="Get a quote"
              titleMaxWidth="800px"
              alignLeft={true}
              rightImage="https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774054070321x256633132397210620/hr5.webp"
            />
          </div>
          <FintechValueProps
            title="Why software companies choose us"
            description="Shipping credible SaaS and developer-facing products takes architecture judgment, integration depth, and iteration speed. Here's why technology teams trust us with their builds."
            items={TECH_SOFTWARE_BENEFITS}
          />
          <div className="pt-16 pb-24 hidden">
            <ClientLogoTicker />
          </div>
          <CaseStudies 
            description="We've helped technology and software companies build developer tools, enterprise platforms, automation solutions, and scalable SaaS products."
            slides={[
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
                id: "cerebro",
                company: "Cerebro Sports",
                logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447113960x777797950241704700/cerebro.png",
                logoText: "Mark Cuban-funded",
                heading: "How a Mark Cuban-funded startup upgraded spreadsheets to a scaling product with no-code",
                description: "",
                image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/64eced7d1af330bc878905e9_Cerebro_Airdev_no_code-app-build.jpg",
                imageTitle: "How a Mark Cuban-funded startup upgraded spreadsheets to a scaling product with no-code",
                customFields: [
                  { label: "Business type", value: "Startup", color: "#635bff" },
                  { label: "Product type", value: "Analytics Platform", color: "#00d4ff" },
                  { label: "Timeline", value: "2 months", color: "#a960ee" },
                  { label: "Key results", value: "A pre-seed fundraising round led by Mark Cuban to help scale internal data operations", color: "#ff6b6b" },
                ]
              },
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
                  { label: "Product type", value: "Ticket marketplace", color: "#00d4ff" },
                  { label: "Timeline", value: "2 months", color: "#a960ee" },
                  { label: "Key results", value: "$1.1M in pre-seed funding raised in 2 years", color: "#ff6b6b" },
                ]
              }
            ]}
          />
          <SampleProducts 
            bgColor="bg-[#F6F9FC]" 
            products={TECH_SOFTWARE_PRODUCTS}
            label="SAMPLE PRODUCTS"
            title="Softwares we build"
            description="Powerful, scalable solutions across the technology landscape. Here are some of the most common types."
            descriptionMaxWidth="600px"
          />
          <SaasCTA
            title="Building a software?"
            description="We're happy to talk through your project, even if you're still in the early stages."
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TechnologyAndSoftware;
