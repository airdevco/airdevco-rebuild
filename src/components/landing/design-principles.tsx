import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserGroupIcon,
  SparklesIcon,
  ArrowPathIcon,
  ChartBarIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

export interface DesignPrinciple {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  explanation: string;
}

const PRINCIPLES: DesignPrinciple[] = [
  {
    id: "user-centered",
    name: "User-centered design",
    description: "Every decision starts with understanding your users' needs, goals, and pain points.",
    icon: UserGroupIcon,
    color: "#a855f7",
    explanation: "We believe great products are built by deeply understanding the people who will use them. Our design process begins with user research—interviews, surveys, and behavioral analysis—to uncover real problems worth solving. We create user personas, map user journeys, and validate assumptions through testing. This user-first approach ensures we're building features that matter, not just features that look good."
  },
  {
    id: "simplicity",
    name: "Simplicity and clarity",
    description: "Complex problems deserve simple solutions. We strip away the unnecessary to reveal what truly matters.",
    icon: SparklesIcon,
    color: "#ff6b35",
    explanation: "The best interfaces feel effortless. We practice progressive disclosure—showing users only what they need, when they need it. By reducing cognitive load and eliminating friction, we create experiences that feel intuitive from the first interaction. Every element earns its place through careful consideration of hierarchy, spacing, and visual weight. Simplicity isn't about removing features—it's about making complexity feel simple."
  },
  {
    id: "iterative",
    name: "Iterative design process",
    description: "Great design emerges through cycles of building, testing, learning, and refining.",
    icon: ArrowPathIcon,
    color: "#06b6d4",
    explanation: "We don't aim for perfection on the first try. Instead, we embrace an iterative approach: rapid prototyping, user testing, and continuous refinement. We start with low-fidelity wireframes to validate concepts quickly, then progressively add detail and fidelity. Each iteration is informed by real user feedback and data, allowing us to course-correct early and often. This agile methodology means we ship better products faster."
  },
  {
    id: "data-driven",
    name: "Data-driven decisions",
    description: "We combine qualitative insights with quantitative data to make informed design choices.",
    icon: ChartBarIcon,
    color: "#10b981",
    explanation: "Design intuition is powerful, but it's even stronger when backed by data. We use analytics to understand how users actually interact with products—where they click, where they drop off, and what paths they take. We complement this with qualitative research to understand the 'why' behind the numbers. A/B testing, heatmaps, and user session recordings help us validate hypotheses and optimize for real-world usage patterns."
  },
  {
    id: "accessibility",
    name: "Accessibility and inclusivity",
    description: "We design for everyone, ensuring our products are usable by people of all abilities.",
    icon: HeartIcon,
    color: "#ec4899",
    explanation: "Inclusive design isn't an afterthought—it's a fundamental requirement. We follow WCAG guidelines, ensure proper color contrast, support keyboard navigation, and design with screen readers in mind. But accessibility goes beyond compliance: we consider diverse user contexts, varying technical literacy, and different cultural perspectives. When we design for the edges, we create better experiences for everyone."
  }
];

interface DesignPrinciplesProps {
  bgColor?: string;
  principles?: DesignPrinciple[];
  label?: string;
  title?: string;
  description?: string;
}

export const DesignPrinciples = ({ 
  bgColor = "bg-white",
  principles = PRINCIPLES,
  label = "OUR APPROACH",
  title = "Our design principles",
  description = "These core principles guide every design decision we make, ensuring we create products that are not just beautiful, but truly effective."
}: DesignPrinciplesProps) => {
  const [selectedPrinciple, setSelectedPrinciple] = useState<string>(principles[0].id);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const currentPrinciple = principles.find((p) => p.id === selectedPrinciple) || principles[0];

  const handleTabClick = (principleId: string) => {
    setSelectedPrinciple(principleId);
    
    // Scroll to show the selected tab
    const tabElement = tabRefs.current[principleId];
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
    // Scroll to selected tab on mount and when selectedPrinciple changes
    if (selectedPrinciple && tabRefs.current[selectedPrinciple] && scrollContainerRef.current) {
      const tabElement = tabRefs.current[selectedPrinciple];
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
  }, [selectedPrinciple]);

  return (
    <section className={`py-24 ${bgColor}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-left max-w-2xl mb-16">
          <span className="text-[15px] font-semibold text-[#1265EF] uppercase tracking-wider mb-3 block">
            {label}
          </span>
          <h2 className="text-[48px] font-semibold tracking-tight leading-none text-[#1a1a1a] mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
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
                  {principles.map((principle) => (
                    <button
                      key={principle.id}
                      ref={(el) => { tabRefs.current[principle.id] = el; }}
                      onClick={() => handleTabClick(principle.id)}
                      className={`pb-2.5 pt-2 text-[16px] transition-colors duration-200 whitespace-nowrap relative inline-block ${
                        selectedPrinciple === principle.id
                          ? "text-[#1265EF] font-medium"
                          : "text-gray-600 hover:text-gray-900 font-normal"
                      }`}
                    >
                      <span className="leading-tight">
                        {principle.name}
                      </span>
                      {selectedPrinciple === principle.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1265EF]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Desktop: Vertical Selector */}
            <div className="hidden lg:flex flex-col gap-2">
              {principles.map((principle) => (
                <button
                  key={principle.id}
                  onClick={() => setSelectedPrinciple(principle.id)}
                  className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-200 text-[16px] ${
                    selectedPrinciple === principle.id
                      ? "bg-[#1265EF]/10 text-[#1265EF] font-medium"
                      : "text-gray-600 hover:text-gray-900 font-normal hover:bg-gray-50"
                  }`}
                >
                  <span className="leading-tight block">
                    {principle.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content - Selected Principle */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPrinciple.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {/* Card Container */}
                <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden max-w-3xl">
                  {/* Top Color Border */}
                  <div className="h-2 w-full" style={{ backgroundColor: currentPrinciple.color }} />
                  
                  <div className="p-8">
                    {/* Title and Description */}
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-4">
                        <currentPrinciple.icon className="w-8 h-8" />
                        <h3 className="text-3xl font-bold text-[#1a1a1a]">
                          {currentPrinciple.name}
                        </h3>
                      </div>

                      <p className="text-[18px] text-gray-600 leading-relaxed mb-6">
                        {currentPrinciple.description}
                      </p>

                      {/* Explanation */}
                      <div className="pt-6 border-t border-slate-200">
                        <p className="text-[18px] text-gray-700 leading-relaxed">
                          {currentPrinciple.explanation}
                        </p>
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

