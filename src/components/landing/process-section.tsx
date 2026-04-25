import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const STEPS = [
  {
    id: "product-design",
    tabLabel: "1. Product design",
    heading: "World-class UI/UX design",
    description: "We work with you to define your product roadmap and create a beautiful, intuitive user interface tailored to your brand. We focus on creating a seamless user experience that converts visitors into loyal users.",
    features: [
      "Product strategy workshop",
      "Interactive prototypes",
      "Mobile-responsive layouts",
      "Design system creation"
    ]
  },
  {
    id: "build",
    tabLabel: "2. Build",
    heading: "Rapid visual development",
    description: "Using visual development frameworks and AI, we build your application in weeks instead of months. Our process ensures high-quality, scalable code without the technical debt.",
    features: [
      "Full-stack development",
      "Third-party integrations",
      "Security & compliance setup",
      "Scalable infrastructure"
    ]
  },
  {
    id: "support",
    tabLabel: "3. Support",
    heading: "Deploy and scale",
    description: "We help you launch your MVP to the market and provide ongoing support to scale. As you grow, we help you iterate based on user feedback and business metrics.",
    features: [
      "QA & testing",
      "Analytics setup",
      "Post-launch support",
      "Iterative improvements"
    ]
  }
];

export const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [tabWidth, setTabWidth] = useState(0);
  const [tabLeft, setTabLeft] = useState(0);

  useEffect(() => {
    if (tabsRef.current) {
      const activeTabElement = tabsRef.current.children[activeStep] as HTMLElement;
      if (activeTabElement) {
        setTabWidth(activeTabElement.offsetWidth);
        setTabLeft(activeTabElement.offsetLeft);
      }
    }
  }, [activeStep]);

  return (
    <section className="pt-24 pb-16 bg-[#0A2540] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12">
          <div className="text-[15px] font-semibold text-[#0AE4E3] uppercase tracking-wider mb-3">
            How it works
          </div>
          <h2 className="text-[48px] font-semibold tracking-tight leading-none text-white mb-6 max-w-2xl">
            From idea to launch in 3 simple steps
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-12">
            Our streamlined process removes the friction of traditional software development, allowing you to focus on building your business.
          </p>
          
          {/* Horizontal Tabs */}
          <div className="relative border-b border-[#1E3A5F]">
            <div className="flex space-x-8 overflow-x-auto scrollbar-hide" ref={tabsRef}>
              {STEPS.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`pb-4 text-[17px] font-medium transition-colors duration-200 whitespace-nowrap ${
                    activeStep === index
                      ? "text-[#0AE4E3]"
                      : "text-[#ADBDCC] hover:text-white"
                  }`}
                >
                  {step.tabLabel}
                </button>
              ))}
            </div>
            {/* Animated Underline */}
            <div
              className="absolute bottom-0 h-0.5 bg-[#0AE4E3] transition-all duration-300 ease-in-out"
              style={{
                width: `${tabWidth}px`,
                transform: `translateX(${tabLeft}px)`,
              }}
            />
          </div>
        </div>

        {/* Content Card */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-[#112F4E]/50 border border-[#1E3A5F] rounded-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0 h-full">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {STEPS[activeStep].heading}
                  </h3>
                  <p className="text-[18px] text-[#ADBDCC] leading-relaxed mb-8">
                    {STEPS[activeStep].description}
                  </p>
                  <ul className="space-y-3">
                    {STEPS[activeStep].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[#ADBDCC]">
                        <CheckCircleIcon className="w-5 h-5 text-[#0AE4E3] flex-shrink-0" />
                        <span className="text-[16px]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#0A2540] relative min-h-[400px] md:min-h-auto border-l border-[#1E3A5F] flex items-center justify-center p-8">
                  {/* Visuals */}
                  <div className="w-full max-w-[400px]">
                    {activeStep === 0 && <MockupWireframe />}
                    {activeStep === 1 && <GanttChart />}
                    {activeStep === 2 && <GrowthGraph />}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// Visual Components

const wireframeSpring = (delay: number) => ({
  type: "spring" as const,
  stiffness: 260,
  damping: 34,
  mass: 0.85,
  delay,
});

/** Shared wireframe row: square placeholder + blue text lines */
const WireframeLineRow = () => (
  <div className="flex flex-1 min-h-0 items-center gap-3">
    <div className="w-10 h-10 shrink-0 rounded-sm bg-[#1265EF]/20 border border-[#1265EF]/45" />
    <div className="flex flex-1 flex-col gap-2 min-w-0 py-0.5">
      <div className="h-2 w-[78%] rounded-full bg-[#1265EF]/65" />
      <div className="h-2 w-[62%] rounded-full bg-[#1265EF]/45" />
      <div className="h-2 w-[48%] rounded-full bg-[#1265EF]/35" />
    </div>
  </div>
);

const MockupWireframe = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.35, margin: "0px 0px -10% 0px" });

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[4/3] bg-[#112F4E] rounded-xl border border-[#1E3A5F] shadow-2xl overflow-hidden flex flex-col"
    >
      {/* Window chrome — compact bar (~half of h-11) for the three dots */}
      <div className="h-[22px] shrink-0 border-b border-[#1E3A5F] flex items-center px-4 gap-2 bg-[#0A2540]/50">
        <div className="w-2 h-2 rounded-full bg-[#1265EF]/60" />
        <div className="w-2 h-2 rounded-full bg-[#1E3A5F]" />
        <div className="w-2 h-2 rounded-full bg-[#1E3A5F]" />
      </div>
      <div className="flex flex-1 p-4 gap-4">
        {/* Sidebar */}
        <motion.div
          className="w-1/4 h-full flex flex-col gap-3"
          initial={{ x: -16, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -16, opacity: 0 }}
          transition={wireframeSpring(0.12)}
        >
          <div className="h-8 w-full bg-[#1265EF]/35 border border-[#1265EF]/50 rounded-md" />
          <div className="h-4 w-3/4 bg-[#1265EF]/25 rounded-md" />
          <div className="h-4 w-5/6 bg-[#1265EF]/20 rounded-md" />
          <div className="h-4 w-4/5 bg-[#1265EF]/20 rounded-md" />
          <motion.div
            className="h-14 rounded-lg bg-[#1E3A5F]/20 border border-[#1265EF]/30 p-2 flex flex-col gap-2 mt-1"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={wireframeSpring(0.45)}
          >
            <div className="h-1.5 w-[83%] rounded-full bg-[#1265EF]/60" />
            <div className="h-1.5 w-[66%] rounded-full bg-[#1265EF]/40" />
          </motion.div>
        </motion.div>
        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-4">
          <motion.div
            className="h-24 w-full shrink-0 bg-[#1E3A5F]/20 border border-[#1265EF]/30 rounded-lg p-3 flex items-stretch"
            initial={{ y: -14, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -14, opacity: 0 }}
            transition={wireframeSpring(0.32)}
          >
            <WireframeLineRow />
          </motion.div>
          <div className="flex gap-4">
            <motion.div
              className="flex-1 h-20 bg-[#1E3A5F]/20 border border-[#1265EF]/30 rounded-lg p-3 flex items-stretch"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.94, opacity: 0 }}
              transition={wireframeSpring(0.58)}
            >
              <WireframeLineRow />
            </motion.div>
            <motion.div
              className="flex-1 h-20 bg-[#1E3A5F]/20 border border-[#1265EF]/30 rounded-lg p-3 flex flex-col justify-between"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.94, opacity: 0 }}
              transition={wireframeSpring(0.78)}
            >
              <div className="h-2 w-1/2 rounded-full bg-[#1265EF]/60" />
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-[#1265EF]/30 border border-[#1265EF]/25" />
                <div className="w-3 h-3 rounded-sm bg-[#1265EF]/40 border border-[#1265EF]/35" />
                <div className="w-3 h-3 rounded-sm bg-[#1265EF]/50 border border-[#1265EF]/45" />
              </div>
            </motion.div>
          </div>
          <motion.div
            className="flex-1 bg-[#1E3A5F]/20 border border-[#1265EF]/20 rounded-lg p-3"
            initial={{ y: 16, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 16, opacity: 0 }}
            transition={wireframeSpring(0.98)}
          >
            <div className="h-2 w-2/5 rounded-full bg-[#1265EF]/60 mb-2" />
            <div className="grid grid-cols-3 gap-2 h-[calc(100%-0.75rem)]">
              <div className="rounded-md bg-[#1265EF]/20 border border-[#1265EF]/30" />
              <div className="rounded-md bg-[#1265EF]/15 border border-[#1265EF]/25" />
              <div className="rounded-md bg-[#1265EF]/20 border border-[#1265EF]/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const GanttChart = () => {
  const tasks = [
    { label: "Database Schema", start: 0, width: 25, color: "#0AE4E3", delay: 0.1 },
    { label: "API Integration", start: 20, width: 30, color: "#1265EF", delay: 0.2 },
    { label: "Frontend Dev", start: 35, width: 35, color: "#7C3AED", delay: 0.3 },
    { label: "User Auth", start: 15, width: 20, color: "#10B981", delay: 0.4 },
    { label: "Payment Setup", start: 40, width: 25, color: "#F59E0B", delay: 0.5 },
    { label: "Testing & QA", start: 55, width: 30, color: "#EF4444", delay: 0.6 },
    { label: "Deployment", start: 70, width: 20, color: "#06B6D4", delay: 0.7 },
  ];

  return (
    <div className="relative w-full aspect-[4/3] bg-[#112F4E] rounded-xl border border-[#1E3A5F] shadow-2xl overflow-hidden p-6 flex flex-col">
      {/* Timeline Header */}
      <div className="flex items-center justify-between mb-6 border-b border-[#1E3A5F] pb-2">
         <span className="text-xs text-[#ADBDCC] font-mono">Jan</span>
         <span className="text-xs text-[#ADBDCC] font-mono">Feb</span>
         <span className="text-xs text-[#ADBDCC] font-mono">Mar</span>
         <span className="text-xs text-[#ADBDCC] font-mono">Apr</span>
      </div>
      
      <div className="flex-1 flex flex-col gap-4 font-mono text-xs">
          {tasks.map((task, index) => (
            <div key={index} className="relative">
              <div className="flex items-center justify-between mb-1">
                <span className="text-white text-xs">{task.label}</span>
              </div>
              <div className="h-5 w-full bg-[#1E3A5F]/20 rounded-md relative">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${task.width}%` }}
                  transition={{ duration: 0.6, delay: task.delay }}
                  className="absolute left-0 top-0 bottom-0 rounded-md"
                  style={{
                    left: `${task.start}%`,
                    backgroundColor: `${task.color}30`,
                    border: `1px solid ${task.color}50`,
                  }}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const GrowthGraph = () => (
    <div className="relative w-full aspect-[4/3] bg-[#112F4E] rounded-xl border border-[#1E3A5F] shadow-2xl overflow-hidden p-6 flex flex-col justify-end">
        <div className="absolute top-6 left-6 z-10">
             <div className="text-sm font-semibold text-white mb-1">Total Users</div>
             <div className="h-8 w-24 bg-[#0AE4E3]/10 text-[#0AE4E3] rounded flex items-center justify-center font-bold border border-[#0AE4E3]/30">
                 +124%
             </div>
        </div>

        {/* Graph Lines */}
        <div className="relative h-48 w-full mt-auto px-4">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between px-4">
                <div className="w-full h-[1px] bg-[#1E3A5F]/30"></div>
                <div className="w-full h-[1px] bg-[#1E3A5F]/30"></div>
                <div className="w-full h-[1px] bg-[#1E3A5F]/30"></div>
                <div className="w-full h-[1px] bg-[#1E3A5F]/30"></div>
            </div>

            {/* Path */}
            <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0AE4E3" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#0AE4E3" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    d="M5 75 C 15 75, 25 65, 35 55 C 45 45, 55 60, 65 40 C 75 20, 85 30, 95 10"
                    fill="none"
                    stroke="#0AE4E3"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                />
                 <motion.path
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    d="M5 75 C 15 75, 25 65, 35 55 C 45 45, 55 60, 65 40 C 75 20, 85 30, 95 10 L 95 100 L 5 100 Z"
                    fill="url(#gradient)"
                    stroke="none"
                />
            </svg>
        </div>
        
        {/* X Axis Labels */}
        <div className="flex justify-between mt-2 px-4 text-[10px] text-[#ADBDCC] font-mono">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
        </div>
    </div>
);
