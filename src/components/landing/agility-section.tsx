import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Default Data (for SaasProducts) ---
const DEFAULT_SLIDES = [
  {
    id: "dividend",
    company: "Dividend Finance",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447523324x536489976697318800/dividend.png",
    logoText: "$300m+ raised",
    heading: "How we built a FinTech platform for Dividend Finance that scaled to process billions of dollars of loan",
    description: "",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop",
    imageTitle: "How we built a FinTech platform for Dividend Finance that scaled to process billions of dollars of loan",
    customFields: [
      { label: "Business type", value: "Enterprise", color: "#635bff" },
      { label: "Product type", value: "FinTech MVP", color: "#00d4ff" },
      { label: "Timeline", value: "6 weeks", color: "#a960ee" },
      { label: "Key results", value: "Billions of dollars of loans processed", color: "#ff6b6b" },
    ]
  },
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
    id: "playground",
    company: "Playground IEP",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447131162x922542988700125000/playground.png",
    logoText: "",
    heading: "How Airdev helped Playground IEP create a special education caseload management tool for schools",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/63b8851d340bdc19030b55b3_adam-winger-7fF0iei80AQ-unsplash%205-p-3200.jpg",
    imageTitle: "How Airdev helped Playground IEP create a special education caseload management tool for schools",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "Internal management portal", color: "#00d4ff" },
      { label: "Timeline", value: "3 months", color: "#a960ee" },
      { label: "Key results", value: "5 pilot schools signed up in <1 year", color: "#ff6b6b" },
    ]
  }
];


const DURATION = 6000; // 6 seconds per slide

interface Slide {
  id: string;
  company: string;
  logo: string;
  logoText: string;
  heading: string;
  description: string;
  image: string;
  imageTitle: string;
  customFields: Array<{ label: string; value: string; color: string }>;
}

interface CaseStudiesProps {
  description?: string;
  slides?: Slide[];
}

export const CaseStudies = ({ description, slides }: CaseStudiesProps = {}) => {
  const SLIDES = slides || DEFAULT_SLIDES;
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  // Using a key to force re-render of the progress bar animation
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    // Initial start logic or any other side effects
    return () => {};
  }, []);

  const handleManualSwitch = (index: number) => {
    setPrevIndex(activeIndex);
    setActiveIndex(index);
    setProgressKey((prev) => prev + 1);
  };

  const activeSlide = SLIDES[activeIndex];
  // Determine slide direction (1 for forward/right, -1 for backward/left)
  const direction = activeIndex > prevIndex ? 1 : activeIndex < prevIndex ? -1 : 1;

  return (
    <section className="relative py-24 bg-white overflow-hidden">

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Top Content */}
        <div className="max-w-3xl mb-8">
          <h3 className="text-[#1e3a8a] font-semibold tracking-wide uppercase text-sm mb-3">
            TRUSTED BY ORGANIZATIONS OF ALL SIZES
          </h3>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#1a1a1a] mb-6">
            Case studies
          </h2>
          <p className="text-[20px] text-[#425466] leading-relaxed mb-2 max-w-2xl">
            {description || "We've helped our clients launch a wide range of web applications, including two-sided marketplaces, social networks, productivity tools, process management tools, and much more. Our products support millions of users and billions of dollars of transaction volume."}
          </p>
        </div>

        {/* Bottom Logo Grid with Progress Bar - Full Width */}
        <div className="border-t border-solid border-slate-200 border-l border-solid border-b border-solid grid grid-cols-3 mb-12 lg:mb-16">
          {SLIDES.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.id}
                onClick={() => handleManualSwitch(index)}
                className="relative h-24 flex items-center justify-center border-r border-solid border-slate-200 transition-all duration-300 bg-white hover:bg-slate-50"
              >
                {/* Progress Line */}
                {isActive && (
                  <motion.div 
                    className="absolute -top-px left-0 right-0 h-[1px] bg-[#1265EF] z-30"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: DURATION / 1000, ease: "linear" }}
                    onAnimationComplete={() => {
                      // Only advance slide when progress bar finishes
                      if (isActive) {
                        setActiveIndex((prev) => {
                          setPrevIndex(prev);
                          return (prev + 1) % SLIDES.length;
                        });
                        setProgressKey((prev) => prev + 1);
                      }
                    }}
                    key={progressKey} // Force reset on slide change
                  />
                )}
                
                {/* Logo */}
                <div className="flex flex-col items-center justify-center w-full px-4">
                  <div className="h-9 w-full flex items-center justify-center">
                    <img 
                      src={slide.logo} 
                      alt={slide.company} 
                      className={`h-full w-auto object-contain transition-all duration-300 
                        ${slide.id === 'dividend' ? 'max-h-5' : ''} 
                        ${slide.id === 'bubble' ? (slide.company === 'Tributi' ? 'max-h-5 mt-1' : 'max-h-5') : ''} 
                        ${slide.id === 'playground' ? (slide.company === 'My NFT Alerts' ? '' : 'mix-blend-multiply') : ''}
                        ${isActive ? 'grayscale-0 opacity-100' : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'}
                      `}
                    />
                  </div>
                  {slide.logoText && (
                    <p className={`text-[10px] text-gray-400 text-center font-medium whitespace-nowrap ${slide.id === 'bubble' && slide.company === 'Tributi' ? 'mt-0.5' : 'mt-1.5'}`}>
                      {slide.logoText}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Grid Content - Animated Switch */}
        <div className="min-h-[400px] mb-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column - Stats */}
            <div className="lg:col-span-4 relative h-[320px] lg:h-[400px]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0, x: direction * 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute inset-0 space-y-6 flex flex-col justify-center"
                >
                  {activeSlide.customFields && activeSlide.customFields.map((field, idx) => (
                    <div key={idx} className="relative">
                      <div className="text-[16px] text-gray-500 mb-1 pl-4">{field.label}</div>
                      <p className="text-[18px] font-semibold text-[#1a1a1a] leading-relaxed pl-4" style={{ borderLeft: `1px solid #00d4ff` }}>
                        {field.value}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column - Image Card */}
            <div className="lg:col-span-8 h-[320px] lg:h-[400px] relative overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.div 
                  key={activeSlide.id}
                  initial={{ opacity: 0, x: direction * 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <div className="w-full h-full relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
                    <img 
                      src={activeSlide.image}
                      alt={activeSlide.company}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Strong Blue Tint Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#176AAF] via-[#176AAF]/90 to-[#176AAF]/50 mix-blend-color opacity-100" />
                    {/* Darker gradient at bottom for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#176AAF]/90 via-[#176AAF]/40 to-transparent" />
                    {/* Title Overlay */}
                    {activeSlide.imageTitle && (
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <h3 className="text-white text-[20px] lg:text-[24px] font-semibold leading-tight">
                          {activeSlide.imageTitle}
                        </h3>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
