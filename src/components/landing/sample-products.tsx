import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SparklesIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  KeyIcon,
  ClockIcon,
  ChartPieIcon,
  BellIcon,
  CloudIcon,
  BriefcaseIcon,
  FolderIcon,
  BuildingStorefrontIcon,
  SquaresPlusIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  PresentationChartLineIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";

export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  features: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
}

const PRODUCTS: Product[] = [
  {
    id: "vertical-saas",
    name: "Vertical SaaS",
    description: "Software built for a specific industry. The value is deep domain knowledge baked into the product. We've built tools for museums, restaurants, law firms, property managers, healthcare providers, and more. If your industry has unique workflows that generic tools can't handle, this is what you need.",
    icon: BriefcaseIcon,
    color: "#a855f7",
    features: [
      { name: "Industry-specific workflows and terminology", icon: BuildingStorefrontIcon },
      { name: "Compliance with sector regulations", icon: ShieldCheckIcon },
      { name: "Integrations with industry-standard tools", icon: SquaresPlusIcon },
      { name: "Reporting tailored to how your industry measures success", icon: ChartPieIcon },
      { name: "User roles that match real-world job functions", icon: UserGroupIcon },
      { name: "Domain-specific automations", icon: SparklesIcon },
    ],
  },
  {
    id: "internal-tools",
    name: "Internal Tools",
    description: "Software your own team uses to work better. OKR tracking, project management, approval workflows, employee directories, internal dashboards. These products are sold to companies for their employees to use, and the goal is making work more efficient and organized.",
    icon: FolderIcon,
    color: "#ff6b35",
    features: [
      { name: "Role-based permissions and access control", icon: KeyIcon },
      { name: "Team and department structures", icon: UserGroupIcon },
      { name: "Task assignment and tracking", icon: ClockIcon },
      { name: "Approval and review workflows", icon: ShieldCheckIcon },
      { name: "Activity logs and audit trails", icon: BellIcon },
      { name: "Integrations with Slack, email, and calendars", icon: CalendarIcon },
    ],
  },
  {
    id: "multi-party",
    name: "Multi-party Platforms",
    description: "Software that coordinates between different user types who need to work together. Vendor/buyer relationships, franchisee/franchisor systems, agency/client setups, supplier networks. Not quite marketplaces, but systems where multiple distinct roles interact through a shared platform.",
    icon: UserGroupIcon,
    color: "#06b6d4",
    features: [
      { name: "Separate dashboards for each user type", icon: PresentationChartLineIcon },
      { name: "Ordering and request workflows", icon: TruckIcon },
      { name: "Shared document and data access", icon: FolderIcon },
      { name: "Communication tools between parties", icon: ChatBubbleLeftRightIcon },
      { name: "Reporting for each side of the relationship", icon: ChartPieIcon },
      { name: "Permission controls by user type", icon: KeyIcon },
    ],
  },
  {
    id: "data-collection",
    name: "Data Collection & Management",
    description: "Software where the core value is gathering, organizing, or processing information. Form builders, survey tools, intake systems, research databases, data pipelines with workflows attached. If your product is about getting data from the world and making it useful, this is the category.",
    icon: CloudIcon,
    color: "#10b981",
    features: [
      { name: "Custom form and input builders", icon: SquaresPlusIcon },
      { name: "Data validation and cleaning", icon: ShieldCheckIcon },
      { name: "Import/export in multiple formats", icon: FolderIcon },
      { name: "Search, filter, and organization tools", icon: GlobeAltIcon },
      { name: "Automated data processing workflows", icon: SparklesIcon },
      { name: "Reporting and visualization", icon: ChartPieIcon },
    ],
  },
  {
    id: "automation",
    name: "Automation & Integration Tools",
    description: "Software that connects systems or replaces manual processes. Taking data from one place, transforming it, putting it somewhere else. These products save time by eliminating repetitive work and making sure information flows where it needs to go without manual intervention.",
    icon: SparklesIcon,
    color: "#f59e0b",
    features: [
      { name: "Connections to third-party APIs", icon: GlobeAltIcon },
      { name: "Trigger-based workflow automation", icon: BellIcon },
      { name: "Data transformation and mapping", icon: SquaresPlusIcon },
      { name: "Scheduling and batch processing", icon: ClockIcon },
      { name: "Error handling and notifications", icon: ShieldCheckIcon },
      { name: "Logs and monitoring dashboards", icon: PresentationChartLineIcon },
    ],
  },
  {
    id: "analytics",
    name: "Analytics & BI",
    description: "Software that takes data and turns it into insights. Dashboards, reporting tools, metrics tracking, benchmarking platforms. The core value is helping people understand what's happening in their business or domain and make better decisions based on real numbers.",
    icon: ChartPieIcon,
    color: "#ec4899",
    features: [
      { name: "Data connections to multiple sources", icon: GlobeAltIcon },
      { name: "Custom dashboard builder", icon: PresentationChartLineIcon },
      { name: "Charts, graphs, and visualizations", icon: ChartPieIcon },
      { name: "Scheduled reports and alerts", icon: BellIcon },
      { name: "Drill-down and filtering capabilities", icon: SquaresPlusIcon },
      { name: "Export and sharing options", icon: FolderIcon },
    ],
  },
];



interface SampleProductsProps {
  bgColor?: string;
  products?: Product[];
  label?: string;
  title?: string;
  description?: string;
  descriptionMaxWidth?: string;
  titleMaxWidth?: string;
}

export const SampleProducts = ({ 
  bgColor = "bg-white",
  products = PRODUCTS,
  label = "SAMPLE PRODUCTS",
  title = "SaaS products we specialize in",
  description = "From simple tools to complex platforms, we've built SaaS products across dozens of industries. Here are some of the most common types.",
  descriptionMaxWidth,
  titleMaxWidth
}: SampleProductsProps) => {
  const [selectedProduct, setSelectedProduct] = useState<string>(products[0].id);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const currentProduct = products.find((p) => p.id === selectedProduct) || products[0];

  const handleTabClick = (productId: string) => {
    setSelectedProduct(productId);
    
    // Scroll to show the selected tab
    const tabElement = tabRefs.current[productId];
    const scrollContainer = scrollContainerRef.current;
    
    if (tabElement && scrollContainer) {
      const containerRect = scrollContainer.getBoundingClientRect();
      const tabRect = tabElement.getBoundingClientRect();
      
      const scrollLeft = scrollContainer.scrollLeft;
      const tabLeft = tabRect.left - containerRect.left + scrollLeft;
      const tabWidth = tabRect.width;
      const containerWidth = containerRect.width;
      
      // Calculate the desired scroll position to center the tab
      const desiredScrollLeft = tabLeft - (containerWidth / 2) + (tabWidth / 2);
      
      scrollContainer.scrollTo({
        left: desiredScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Scroll to selected tab on mount and when selectedProduct changes
    if (selectedProduct && tabRefs.current[selectedProduct] && scrollContainerRef.current) {
      const tabElement = tabRefs.current[selectedProduct];
      const scrollContainer = scrollContainerRef.current;
      
      if (tabElement) {
        const containerRect = scrollContainer.getBoundingClientRect();
        const tabRect = tabElement.getBoundingClientRect();
        
        const scrollLeft = scrollContainer.scrollLeft;
        const tabLeft = tabRect.left - containerRect.left + scrollLeft;
        const tabWidth = tabRect.width;
        const containerWidth = containerRect.width;
        
        const desiredScrollLeft = tabLeft - (containerWidth / 2) + (tabWidth / 2);
        
        scrollContainer.scrollTo({
          left: desiredScrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [selectedProduct]);

  const sectionStyle = bgColor.startsWith('#') 
    ? { backgroundColor: bgColor } 
    : {};
  const sectionClassName = bgColor.startsWith('#') 
    ? 'py-24' 
    : `py-24 ${bgColor}`;

  return (
    <section className={sectionClassName} style={sectionStyle}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-left max-w-[900px] mb-16">
          <span className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3 block">
            {label}
          </span>
          <h2 
            className="text-[48px] font-semibold tracking-tight leading-none text-[#1a1a1a] mb-6"
            style={titleMaxWidth ? { maxWidth: titleMaxWidth } : undefined}
          >
            {title}
          </h2>
          <p 
            className="text-xl text-gray-600 leading-relaxed"
            style={descriptionMaxWidth ? { maxWidth: descriptionMaxWidth } : undefined}
          >
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-0 lg:gap-24">
          {/* Mobile: Horizontal Tabs, Desktop: Vertical Selector */}
          <div className="lg:col-span-3">
            {/* Mobile: Horizontal Tabs */}
            <div className="lg:hidden mb-4 w-full max-w-[calc(100vw-3rem)]">
              <div 
                ref={scrollContainerRef}
                className="overflow-x-auto w-full pb-2" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <style>{`
                  .mobile-tabs-scroll::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                <div className="flex border-b border-slate-200 min-w-max mobile-tabs-scroll gap-8">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      ref={(el) => { tabRefs.current[product.id] = el; }}
                      onClick={() => handleTabClick(product.id)}
                      className={`pb-2.5 pt-2 text-[16px] transition-colors duration-200 whitespace-nowrap relative inline-block ${
                        selectedProduct === product.id
                          ? "text-[#1265EF] font-medium"
                          : "text-gray-600 hover:text-gray-900 font-normal"
                      }`}
                    >
                      <span className="leading-tight">
                        {product.name}
                      </span>
                      {selectedProduct === product.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1265EF]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Desktop: Vertical Selector */}
            <div className="hidden lg:flex flex-col gap-2">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product.id)}
                  className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-200 text-[16px] ${
                    selectedProduct === product.id
                      ? "bg-[#1265EF]/10 text-[#1265EF] font-medium"
                      : "text-gray-600 hover:text-gray-900 font-normal hover:bg-gray-50"
                  }`}
                >
                  <span className="leading-tight block">
                    {product.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content - Selected Product */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {/* Card Container mimicking Stripe style */}
                <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden max-w-3xl">
                  {/* Top Color Border */}
                  <div className="h-2 w-full" style={{ backgroundColor: currentProduct.color }} />
                  
                  <div className="p-8">
                    {/* Title and Description */}
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-4">
                        <currentProduct.icon className="w-8 h-8 flex-shrink-0 -mt-1" />
                        <h3 className="text-3xl font-bold text-[#1a1a1a] leading-tight">
                          {currentProduct.name}
                        </h3>
                      </div>
                      
                      <p className="text-[18px] text-gray-600 leading-relaxed">
                        {currentProduct.description}
                      </p>
                    </div>

                    {/* Feature List */}
                    <div className="pt-6 -mx-8 px-8 border-t border-slate-200">
                      <h4 className="text-[16px] font-medium text-gray-600 mb-4">Included features:</h4>
                      <div className="grid grid-cols-1 gap-4">
                        {currentProduct.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-4"
                          >
                            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#88ADD2]/10 flex items-center justify-center text-[#88ADD2] mt-0.5">
                               <feature.icon className="w-4 h-4" />
                            </div>
                            <span className="text-[18px] text-gray-700 pt-0.5">
                              {feature.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
