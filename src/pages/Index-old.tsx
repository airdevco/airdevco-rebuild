import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  ChevronDown
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Hook for media query
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

const TimelineStep = ({ item, index, acceleratedProgress, isMobile }: { item: any, index: number, acceleratedProgress: any, isMobile: boolean }) => {
   // Step positions in the accelerated progress space: 0 -> 0, 1 -> 0.33, 2 -> 0.66, 3 -> 1.0
   const stepPosition = index / 3; 
   const isStep3Or4 = index >= 2;
   
   // Use transform for all steps, but with different ranges
   let borderColor: any;
   let textColor: any;
   
   if (isStep3Or4) {
      // Steps 3 and 4: activate earlier so they turn blue when line touches them
      let adjustedPosition = stepPosition;
      if (index === 2) {
         // Step 3: activate at 0.6
         adjustedPosition = 0.6;
      } else if (index === 3) {
         // Step 4: activate at 0.88
         adjustedPosition = 0.88;
      }
      
      const activationStart = adjustedPosition - 0.003;
      const activationEnd = adjustedPosition;
      
      borderColor = useTransform(
         acceleratedProgress, 
         [activationStart, activationEnd], 
         ["#E5E7EB", "#1165EF"]
      );
      textColor = useTransform(
         acceleratedProgress, 
         [activationStart, activationEnd], 
         ["#9CA3AF", "#1165EF"]
      );
   } else {
      // Steps 1 and 2: normal smooth transition
      const activationStart = Math.max(0, stepPosition - 0.01);
      const activationEnd = Math.min(1, stepPosition + 0.01);
      borderColor = useTransform(
         acceleratedProgress, 
         [activationStart - 0.01, activationStart, activationEnd], 
         ["#E5E7EB", "#E5E7EB", "#1165EF"],
         { clamp: true }
      );
      textColor = useTransform(
         acceleratedProgress, 
         [activationStart - 0.01, activationStart, activationEnd], 
         ["#9CA3AF", "#9CA3AF", "#1165EF"],
         { clamp: true }
      );
   }

   return (
      <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
         {/* Timeline Number (Desktop Center) */}
         <div className="absolute left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center justify-center z-10">
            <motion.div 
               initial={{ borderColor: "#E5E7EB" }}
               className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm z-20"
               style={{ 
                  borderColor: borderColor,
               }}
            >
               <motion.span 
                  initial={{ color: "#9CA3AF" }}
                  className="font-bold text-lg text-gray-400"
                  style={{ color: textColor }}
               >
                  {item.id}
               </motion.span>
            </motion.div>
         </div>

         {/* Content - Left Side */}
         <div className="space-y-5 text-left lg:pr-10 relative">
            
            <div className="flex items-center gap-3 lg:hidden">
               <span className="flex items-center justify-center w-10 h-10 rounded-full text-[#1165EF] font-semibold text-lg" style={{ backgroundColor: '#F4F4F4' }}>{item.id}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0A0A0A] leading-tight">
               {item.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
               {item.description}
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-[#1165EF] font-medium text-sm">
               Learn more 
               <ArrowRight className="w-4 h-4" />
            </a>
         </div>

         {/* Image - Right Side */}
         <motion.div 
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:pl-10"
         >
            <div className={`bg-[#F9FAFB] rounded-2xl w-full h-full ${item.imageAlignRight ? "pl-6 pt-6 pb-6 pr-0" : "p-6"}`}>
               <img 
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-auto"
               />
            </div>
         </motion.div>
      </div>
   );
};

const IndexOld = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  
  const [hasAnimated, setHasAnimated] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const statsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });
  
  // Create accelerated progress: normal speed for steps 1-2, faster for 2-3 and 3-4
  // Step 2 is at position 0.66, so accelerate after that point
  const acceleratedProgress = useTransform(scrollYProgress, (latest) => {
    if (latest <= 0.66) {
      // Normal speed for steps 1-2 (0 to 0.66 maps to 0 to 0.66)
      return latest;
    } else {
      // Accelerate for steps 2-3 and 3-4
      // Map the remaining scroll range (0.66 to 1.0) to progress range (0.66 to 1.0)
      // but compress it so progress advances faster
      const afterStep2 = (latest - 0.66) / 0.34; // 0 to 1
      // Use a power function with exponent > 1 to accelerate (cubic for strong acceleration)
      const accelerated = 0.66 + (Math.pow(afterStep2, 0.6) * 0.34);
      return Math.min(1, accelerated);
    }
  });
  
  // Progress line should extend fully when step 4 is activated (at 0.88)
  const progressLineScale = useTransform(acceleratedProgress, (latest) => {
    // When step 4 activates (>= 0.88), extend line fully to bottom
    if (latest >= 0.88) {
      return 1.0;
    }
    return latest;
  });

  const [counts, setCounts] = useState({ projects: 0, team: 0, years: 0, rating: 0 });

  useEffect(() => {
    if (isMobile && !hasAnimated) {
      setHasAnimated(true);
      setCounts({ projects: 1000, team: 150, years: 10, rating: 4.9 });
    }
  }, [isMobile, hasAnimated]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate counts
            const duration = 500; // 0.5 seconds (faster)
            const steps = 60;
            const stepDuration = duration / steps;

            // Projects: 1000+
            let projectsStep = 0;
            const projectsInterval = setInterval(() => {
              projectsStep++;
              const progress = projectsStep / steps;
              const value = Math.floor(1000 * progress);
              setCounts((prev) => ({ ...prev, projects: projectsStep >= steps ? 1000 : value }));
              if (projectsStep >= steps) clearInterval(projectsInterval);
            }, stepDuration);

            // Team: 150+
            let teamStep = 0;
            const teamInterval = setInterval(() => {
              teamStep++;
              const progress = teamStep / steps;
              const value = Math.floor(150 * progress);
              setCounts((prev) => ({ ...prev, team: teamStep >= steps ? 150 : value }));
              if (teamStep >= steps) clearInterval(teamInterval);
            }, stepDuration);

            // Years: 10
            let yearsStep = 0;
            const yearsInterval = setInterval(() => {
              yearsStep++;
              const progress = yearsStep / steps;
              const value = Math.floor(10 * progress);
              setCounts((prev) => ({ ...prev, years: yearsStep >= steps ? 10 : value }));
              if (yearsStep >= steps) clearInterval(yearsInterval);
            }, stepDuration);

            // Rating: 4.9
            let ratingStep = 0;
            const ratingInterval = setInterval(() => {
              ratingStep++;
              const progress = ratingStep / steps;
              const value = Math.round((4.9 * progress) * 10) / 10;
              setCounts((prev) => ({ ...prev, rating: ratingStep >= steps ? 4.9 : value }));
              if (ratingStep >= steps) clearInterval(ratingInterval);
            }, stepDuration);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="min-h-screen bg-white font-sans text-[#0A0A0A] selection:bg-[#1165EF] selection:text-white">
      
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-200" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center">
              <img 
                src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6577847e968a59db1df535cf_logo_v4.svg" 
                alt="Airdev" 
                className="h-8 w-auto"
              />
            </a>

            <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-500 absolute left-1/2 transform -translate-x-1/2">
              <div className="relative group">
                <button className="px-4 py-2 rounded-full hover:bg-black/70 hover:text-white transition-colors">
                  About
                </button>
                <div className="absolute top-full left-0 pt-4 w-64 hidden group-hover:block z-50">
                  <div className="bg-[#565656] backdrop-blur-md rounded-3xl p-4 shadow-xl">
                    <a href="#" className="block p-2 rounded-xl hover:bg-white/10 transition-colors text-white mb-1">
                      <div className="font-medium mb-1">Our mission</div>
                      <div className="text-gray-300 text-xs leading-relaxed">To set the new standard</div>
                    </a>
                    <a href="#" className="block p-2 rounded-xl hover:bg-white/10 transition-colors text-white mb-1">
                      <div className="font-medium mb-1">Our people</div>
                      <div className="text-gray-300 text-xs leading-relaxed">Top 1% talent</div>
                    </a>
                    <a href="#" className="block p-2 rounded-xl hover:bg-white/10 transition-colors text-white">
                      <div className="font-medium mb-1">Why Bubble</div>
                      <div className="text-gray-300 text-xs leading-relaxed">Our builder of choice</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="px-4 py-2 rounded-full hover:bg-black/70 hover:text-white transition-colors">
                  What We Build
                </button>
                <div className="absolute top-full left-0 pt-4 w-[500px] hidden group-hover:block z-50">
                  <div className="bg-[#565656] backdrop-blur-md rounded-3xl p-2 shadow-xl grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-1 p-2">
                      {[
                        { title: "AI Apps", desc: "Build on top of LLMs" },
                        { title: "SaaS Products", desc: "Launch a software startup" },
                        { title: "Marketplaces", desc: "Connect buyers & sellers" },
                        { title: "Internal Tools", desc: "Manage business ops" }
                      ].map((item) => (
                        <a key={item.title} href="#" className="group/item p-2 rounded-xl hover:bg-white/10 transition-colors">
                          <div className="text-white font-medium mb-1">{item.title}</div>
                          <div className="text-gray-300 text-xs leading-relaxed">{item.desc}</div>
                        </a>
                      ))}
                    </div>
                    <div className="bg-[#565656] rounded-2xl p-6 flex flex-col justify-between">
                      <div className="bg-white rounded-xl aspect-video mb-6 flex items-center justify-center overflow-hidden">
                         <img 
                           src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67dca0a5bf08461620385d5c_ailogos.png"
                           alt="AI Logos"
                           className="w-full h-full object-contain"
                         />
                      </div>
                      <div>
                        <div className="text-white font-medium mb-2">AI Integrated</div>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          We integrate AI into various parts of our process to streamline it, as well as into the products that we build.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="px-4 py-2 rounded-full hover:bg-black/70 hover:text-white transition-colors">
                  Services
                </button>
                <div className="absolute top-full left-0 pt-4 w-64 hidden group-hover:block z-50">
                  <div className="bg-[#565656] backdrop-blur-md rounded-3xl p-4 shadow-xl">
                    <a href="#" className="block p-2 rounded-xl hover:bg-white/10 transition-colors text-white mb-1">
                      <div className="font-medium mb-1">Agency</div>
                      <div className="text-gray-300 text-xs leading-relaxed">Full-service team</div>
                    </a>
                    <a href="#" className="block p-2 rounded-xl hover:bg-white/10 transition-colors text-white mb-1">
                      <div className="font-medium mb-1">Flex</div>
                      <div className="text-gray-300 text-xs leading-relaxed">Expect Bubble devs</div>
                    </a>
                    <a href="#" className="block p-2 rounded-xl hover:bg-white/10 transition-colors text-white">
                      <div className="font-medium mb-1">App Audit</div>
                      <div className="text-gray-300 text-xs leading-relaxed">For existing Bubble apps</div>
                    </a>
                  </div>
                </div>
              </div>
              <a href="#" className="px-4 py-2 rounded-full hover:bg-black/70 hover:text-white transition-colors">Client Stories</a>
              <div className="relative group">
                <button className="px-4 py-2 rounded-full hover:bg-black/70 hover:text-white transition-colors">
                  For Builders
                </button>
                <div className="absolute top-full left-0 pt-4 w-64 hidden group-hover:block z-50">
                  <div className="bg-[#565656] backdrop-blur-md rounded-3xl p-4 shadow-xl">
                    <a href="#" className="block p-2 rounded-xl hover:bg-white/10 transition-colors text-white mb-1">
                      <div className="font-medium mb-1">Canvas</div>
                      <div className="text-gray-300 text-xs leading-relaxed">Our building tool</div>
                    </a>
                    <a href="#" className="block p-2 rounded-xl hover:bg-white/10 transition-colors text-white mb-1">
                      <div className="font-medium mb-1">Partner Program</div>
                      <div className="text-gray-300 text-xs leading-relaxed">Build with us</div>
                    </a>
                    <a href="#" className="block p-2 rounded-xl hover:bg-white/10 transition-colors text-white">
                      <div className="font-medium mb-1">Bootcamp</div>
                      <div className="text-gray-300 text-xs leading-relaxed">Learn to build</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Button className="bg-[#0A0A0A] text-white hover:bg-gray-800 rounded-full px-5 h-9 text-sm font-medium transition-all">
                Talk to us
              </Button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-500 hover:text-black"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden overflow-y-auto animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex flex-col space-y-4 text-lg font-medium text-gray-500 pb-10">
             {/* About */}
             <div>
              <button 
                onClick={() => setExpandedMobileMenu(expandedMobileMenu === 'about' ? null : 'about')}
                className="flex items-center justify-between w-full hover:text-black py-2"
              >
                About
                <ChevronDown className={`w-5 h-5 transition-transform ${expandedMobileMenu === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMobileMenu === 'about' && (
                <div className="pl-4 flex flex-col space-y-3 mt-2 text-base text-gray-400 border-l-2 border-gray-100 ml-2">
                  <a href="#" className="hover:text-black">Our mission</a>
                  <a href="#" className="hover:text-black">Our people</a>
                  <a href="#" className="hover:text-black">Why Bubble</a>
                </div>
              )}
            </div>

            {/* What We Build */}
            <div>
              <button 
                onClick={() => setExpandedMobileMenu(expandedMobileMenu === 'what-we-build' ? null : 'what-we-build')}
                className="flex items-center justify-between w-full hover:text-black py-2"
              >
                What We Build
                <ChevronDown className={`w-5 h-5 transition-transform ${expandedMobileMenu === 'what-we-build' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMobileMenu === 'what-we-build' && (
                <div className="pl-4 flex flex-col space-y-3 mt-2 text-base text-gray-400 border-l-2 border-gray-100 ml-2">
                  <a href="#" className="hover:text-black">AI Apps</a>
                  <a href="#" className="hover:text-black">SaaS Products</a>
                  <a href="#" className="hover:text-black">Marketplaces</a>
                  <a href="#" className="hover:text-black">Internal Tools</a>
                </div>
              )}
            </div>

            {/* Services */}
             <div>
              <button 
                onClick={() => setExpandedMobileMenu(expandedMobileMenu === 'services' ? null : 'services')}
                className="flex items-center justify-between w-full hover:text-black py-2"
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform ${expandedMobileMenu === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMobileMenu === 'services' && (
                <div className="pl-4 flex flex-col space-y-3 mt-2 text-base text-gray-400 border-l-2 border-gray-100 ml-2">
                  <a href="#" className="hover:text-black">Agency</a>
                  <a href="#" className="hover:text-black">Flex</a>
                  <a href="#" className="hover:text-black">App Audit</a>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-black py-2">Client Stories</a>

             {/* For Builders */}
             <div>
              <button 
                onClick={() => setExpandedMobileMenu(expandedMobileMenu === 'for-builders' ? null : 'for-builders')}
                className="flex items-center justify-between w-full hover:text-black py-2"
              >
                For Builders
                <ChevronDown className={`w-5 h-5 transition-transform ${expandedMobileMenu === 'for-builders' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMobileMenu === 'for-builders' && (
                <div className="pl-4 flex flex-col space-y-3 mt-2 text-base text-gray-400 border-l-2 border-gray-100 ml-2">
                  <a href="#" className="hover:text-black">Canvas</a>
                  <a href="#" className="hover:text-black">Partner Program</a>
                  <a href="#" className="hover:text-black">Bootcamp</a>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-4 mt-2">
              <a href="#" className="hover:text-black">Log in</a>
              <Button className="bg-[#0A0A0A] text-white hover:bg-gray-800 w-full rounded-full">Talk to us</Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-xl relative z-10">
              <h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-[#0A0A0A] mb-8 leading-[1.1]">
                The reimagined <br />
                <span className="text-[#0A0A0A]">software agency</span>
              </h1>
              <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                We use the power of visual development and AI to build world-class products in a fraction of time and cost of conventional agencies.
              </p>
              <div className="flex flex-wrap gap-4 mb-6 hidden">
                <Button size="lg" className="bg-[#0A0A0A] text-white hover:bg-gray-800 h-12 px-8 rounded-full text-base font-medium">
                  Talk to us
                </Button>
                <Button size="lg" variant="outline" className="border-gray-200 text-[#0A0A0A] hover:bg-gray-50 h-12 px-8 rounded-full text-base font-medium">
                  Learn more
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-0">
                <img 
                  src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/66969187efb02a2bec53fa5e_bubble.webp" 
                  alt="Badge" 
                  className="h-[63px] w-auto"
                />
                <img 
                  src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0c3731de254210406f2e4_star-rating.png" 
                  alt="Star Rating" 
                  className="h-[63px] w-auto"
                />
              </div>
            </div>

            {/* Abstract AI Builder Interface */}
            <div className="relative h-[280px] lg:h-[600px] w-full lg:w-[calc(100%+20vw)] lg:-mr-[calc(20vw+2rem)] lg:ml-8 mt-12 lg:mt-0">
               <div 
                  className="absolute inset-0 bg-gray-50 rounded-[20px] border border-gray-200 shadow-xl overflow-hidden flex flex-col"
               >
                  {/* Top Bar */}
                  <div className="h-8 lg:h-12 border-b border-gray-200 bg-white flex items-center px-2 lg:px-4 justify-between">
                     <div className="flex gap-1 lg:gap-2">
                        <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-gray-300"></div>
                     </div>
                     <div className="h-4 lg:h-6 w-32 lg:w-64 bg-gray-100 rounded-full"></div>
                     <div className="flex gap-2">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-blue-100 border border-blue-200"></div>
                     </div>
                  </div>

                  <div className="flex-1 flex overflow-hidden">
                     {/* Left Sidebar */}
                     <div className="w-10 lg:w-16 border-r border-gray-200 bg-white flex flex-col items-center py-2 lg:py-4 gap-2 lg:gap-4 relative z-10">
                        {[1, 2, 3, 4, 5].map((i) => (
                           <motion.div 
                              key={i} 
                              className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg bg-gray-100 hover:bg-blue-50 transition-colors cursor-pointer relative group"
                              whileHover={{ scale: 1.05 }}
                           >
                              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-gray-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                 Tool {i}
                              </div>
                           </motion.div>
                        ))}
                     </div>

                     {/* Secondary Sidebar */}
                     <div className="w-32 lg:w-48 border-r border-gray-200 bg-gray-50/50 p-2 lg:p-4 flex flex-col gap-1.5 lg:gap-3 relative z-0">
                        <div className="flex items-center justify-between mb-1 lg:mb-2">
                           <div className="h-3 lg:h-4 w-16 lg:w-24 bg-gray-200 rounded"></div>
                           <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gray-200"></div>
                        </div>
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                           <div 
                              key={i} 
                              className="flex items-center gap-1.5 lg:gap-2 p-1 lg:p-2 rounded hover:bg-white hover:shadow-sm transition-all cursor-pointer group"
                           >
                              <div className={`w-3 h-3 lg:w-4 lg:h-4 rounded ${i === 2 ? 'bg-blue-200' : 'bg-gray-200'} group-hover:bg-blue-300 transition-colors`}></div>
                              <div className="h-2 lg:h-3 w-12 lg:w-20 bg-gray-200 rounded group-hover:bg-gray-300 transition-colors"></div>
                              {i === 2 && <div className="ml-auto w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-blue-500"></div>}
                           </div>
                        ))}
                        
                        <div className="mt-auto pt-2 lg:pt-4 border-t border-gray-200">
                           <div className="flex items-center gap-1.5 lg:gap-2 p-1 lg:p-2">
                              <div className="w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-gray-200"></div>
                              <div className="h-2 lg:h-3 w-12 lg:w-16 bg-gray-200 rounded"></div>
                           </div>
                        </div>
                     </div>

                     {/* Main Canvas */}
                     <div className="flex-1 bg-gray-50 p-3 lg:p-8 relative overflow-hidden">
                        {/* Floating Palette */}
                        <div 
                           className="absolute top-2 right-2 lg:top-4 lg:right-4 w-40 lg:w-64 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 p-2 lg:p-4 z-10"
                        >
                           <div className="flex items-center justify-between mb-2 lg:mb-4">
                              <div className="h-2 lg:h-3 w-16 lg:w-24 bg-gray-200 rounded"></div>
                              <div className="flex gap-1">
                                 <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-gray-300"></div>
                                 <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-gray-300"></div>
                              </div>
                           </div>
                           <div className="grid grid-cols-2 gap-1.5 lg:gap-2 mb-2 lg:mb-4">
                              <div className="h-6 lg:h-8 bg-blue-50 rounded-lg border border-blue-100 flex items-center justify-center">
                                 <div className="w-3 h-3 lg:w-4 lg:h-4 rounded bg-blue-200"></div>
                              </div>
                              <div className="h-6 lg:h-8 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center">
                                 <div className="w-3 h-3 lg:w-4 lg:h-4 rounded bg-gray-200"></div>
                              </div>
                           </div>
                           <div className="space-y-1 lg:space-y-2">
                              <div className="h-1.5 lg:h-2 w-full bg-gray-100 rounded"></div>
                              <div className="h-1.5 lg:h-2 w-3/4 bg-gray-100 rounded"></div>
                              <div className="h-1.5 lg:h-2 w-1/2 bg-gray-100 rounded">                              </div>
                           </div>
                        </div>

                        {/* Central App Interface */}
                        <div 
                           className="w-full h-full bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden"
                        >
                           {/* App Header */}
                           <div className="h-10 lg:h-16 border-b border-gray-100 flex items-center justify-between px-3 lg:px-6">
                              <div className="h-4 lg:h-6 w-24 lg:w-32 bg-gray-100 rounded"></div>
                              <div className="flex gap-1.5 lg:gap-2">
                                 <div className="h-6 w-16 lg:h-8 lg:w-20 bg-blue-500/10 rounded-lg"></div>
                                 <div className="h-6 w-6 lg:h-8 lg:w-8 bg-gray-100 rounded-lg"></div>
                              </div>
                           </div>
                           
                           {/* App Content */}
                           <div className="flex-1 p-3 lg:p-6 grid grid-cols-3 gap-3 lg:gap-6">
                              {/* Chart/Stat Cards */}
                              <div className="col-span-3 grid grid-cols-4 gap-2 lg:gap-4 mb-1 lg:mb-2">
                                 {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-16 lg:h-24 bg-gray-50 rounded-xl border border-gray-100 p-2 lg:p-3">
                                       <div className="w-6 h-6 lg:w-8 lg:h-8 rounded bg-white border border-gray-100 mb-1 lg:mb-2"></div>
                                       <div className="h-2 lg:h-3 w-8 lg:w-12 bg-gray-200 rounded mb-0.5 lg:mb-1"></div>
                                       <div className="h-3 lg:h-5 w-12 lg:w-16 bg-gray-300 rounded"></div>
                                    </div>
                                 ))}
                              </div>
                              
                              {/* Main Content Area */}
                              <div className="col-span-2 bg-gray-50 rounded-xl border border-gray-100 h-32 lg:h-64 p-2 lg:p-4 relative overflow-hidden">
                                 <div className="absolute bottom-0 left-0 right-0 h-24 lg:h-48 flex items-end gap-1 lg:gap-2 px-2 lg:px-4 pb-2 lg:pb-4">
                                    {[40, 65, 45, 70, 50, 80, 60, 90].map((h, i) => (
                                       <div 
                                          key={i}
                                          className="flex-1 bg-blue-500/20 rounded-t-sm"
                                          style={{ height: `${h}%` }}
                                       ></div>
                                    ))}
                                 </div>
                              </div>
                              
                              {/* Side Panel */}
                              <div className="col-span-1 space-y-2 lg:space-y-3">
                                 {[1, 2, 3].map((i) => (
                                    <div key={i} className="h-12 lg:h-16 bg-white border border-gray-100 rounded-xl p-2 lg:p-3 flex gap-2 lg:gap-3">
                                       <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gray-100 shrink-0"></div>
                                       <div className="space-y-1.5 lg:space-y-2 flex-1 py-0.5 lg:py-1">
                                          <div className="h-1.5 lg:h-2 w-full bg-gray-100 rounded"></div>
                                          <div className="h-1.5 lg:h-2 w-2/3 bg-gray-100 rounded"></div>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>

                        {/* Connecting Lines / Visual Logic Nodes */}
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
        
        {/* Trust Grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-24 pt-12">
          <p className="text-base font-medium text-gray-500 mb-8 tracking-wider text-center">We serve organizations of all sizes</p>
          <div className="flex flex-col gap-y-8">
            {/* First Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center justify-items-center">
              <div className="flex flex-col items-center gap-2">
                <img src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9e8bf871c558358f1a5b_dividend.webp" alt="Dividend" className="max-w-[120px] w-auto h-auto object-contain" />
                <p className="text-xs text-gray-500 text-center">$300m+ raised</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9ee1ae74665b5db8e326_team.webp" alt="Team" className="max-w-[120px] w-auto h-auto object-contain" />
                <p className="text-xs text-gray-500 text-center">YCombinator funded</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9f84d5671aa3618dd823_next.webp" alt="Next" className="max-w-[120px] w-auto h-auto object-contain" />
                <p className="text-xs text-gray-500 text-center">$120m raised from Softbank</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9ff1b72d8c1ec14d79f4_cadence.webp" alt="Cadence" className="max-w-[120px] w-auto h-auto object-contain" />
                <p className="text-xs text-gray-500 text-center">500 Startups funded</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669aa054a5cede730dd27b7c_masa.webp" alt="Masa" className="max-w-[120px] w-auto h-auto object-contain" />
                <p className="text-xs text-gray-500 text-center">Techstars funded</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9c3d751e65ec09878e99_breakr.webp" alt="Breakr" className="max-w-[120px] w-auto h-auto object-contain" />
                <p className="text-xs text-gray-500 text-center">Andreessen Horowitz funded</p>
              </div>
            </div>
            {/* Second Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center justify-items-center">
              <div className="flex items-center justify-center">
                <img src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a999f6474337c4a7222a6_cvs.webp" alt="CVS" className="max-w-[120px] w-auto h-auto object-contain" />
              </div>
              <div className="flex items-center justify-center">
                <img src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a98f0f9d898fd7a42ee37_hp.webp" alt="HP" className="max-w-[60px] w-auto h-auto object-contain" />
              </div>
              <div className="flex items-center justify-center">
                <img src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a98856387d81692ff84c7_634856296daa1063fb978b74_att.webp" alt="AT&T" className="max-w-[120px] w-auto h-auto object-contain" />
              </div>
              <div className="flex items-center justify-center">
                <img src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9ab61b705a1b138a54a4_teach.webp" alt="Teach" className="max-w-[120px] w-auto h-auto object-contain" />
              </div>
              <div className="flex items-center justify-center">
                <img src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/632d6dc4b4679012dc6be0fc_brand-microsoft.svg" alt="Microsoft" className="max-w-[120px] w-auto h-auto object-contain" />
              </div>
              <div className="flex items-center justify-center">
                <img src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9b18abc279093236c577_lenovo.webp" alt="Lenovo" className="max-w-[120px] w-auto h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-gray-200 md:divide-x">
             <div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-[#0A0A0A]">
                  {hasAnimated ? `${counts.projects.toLocaleString()}+` : '0+'}
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">Client Projects</div>
             </div>
             <div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-[#0A0A0A]">
                  {hasAnimated ? `${counts.team}+` : '0+'}
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">Team Size</div>
             </div>
             <div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-[#0A0A0A]">
                  {hasAnimated ? `${counts.years} yrs` : '0 yrs'}
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">Building on Bubble</div>
             </div>
             <div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-[#0A0A0A]">
                  {hasAnimated ? counts.rating.toFixed(1) : '0.0'}
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">On Clutch</div>
             </div>
          </div>
        </div>
      </section>
      
      {/* The Airdev Difference - Animated Timeline */}
      <section className="py-24 bg-white overflow-hidden" ref={timelineRef}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
           <div className="mb-24 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
                 <p className="text-gray-600 font-medium text-sm">The Airdev Difference</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#0A0A0A] mb-4">The new approach to building great products</h2>
              <p className="text-gray-500 text-lg">Combining cutting-edge technology with world-class expertise</p>
           </div>
           
           <div className="relative">
              {/* Center Vertical Line Container */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-100 hidden lg:block">
                 {/* Progress Line */}
                 <motion.div 
                    className="absolute top-0 left-0 w-full h-full bg-[#1165EF] origin-top"
                    style={{ scaleY: progressLineScale }}
                 />
              </div>

              <div className="space-y-32">
                 {[
                    {
                       id: 1,
                       title: "We use the most powerful no-code framework",
                       description: "Bubble is a visual programming language that lets us build 5x faster, while controlling every detail of design and functionality.",
                       image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6699757a77af0e37c4946de6_66842ff5432e3efa779d8c0d_image1-p-1080.webp",
                       alt: "Bubble framework"
                    },
                    {
                       id: 2,
                       title: "We use AI throughout our work",
                       description: "We integrate AI into various parts of our process to streamline it, as well as into the products that we build.",
                       image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67dca0a5bf08461620385d5c_ailogos.png",
                       alt: "AI integration",
                       imageAlignRight: true
                    },
                    {
                       id: 3,
                       title: "We select the world's most meticulous builders",
                       description: "Our rigorous multi-step selection process uses practical exercises to screen thousands of no-code candidates and find the top 1%.",
                       image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669977d23a2e5967e7a52575_img2.webp",
                       alt: "Team selection"
                    },
                    {
                       id: 4,
                       title: "We obsess over quality standards",
                       description: "We establish best-in-class resources, tools, and processes for every aspect of our work, to consistently deliver top-quality results.",
                       image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6699782711aaa6eab383cf8d_img3.webp",
                       alt: "Quality standards",
                       imageAlignRight: true
                    }
                 ].map((item, index) => (
                    <TimelineStep key={item.id} item={item} index={index} acceleratedProgress={acceleratedProgress} isMobile={isMobile} />
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header with Navigation */}
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between md:gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
                <p className="text-gray-600 font-medium text-sm">Client Stories</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#0A0A0A] mb-4">Clients trust Airdev to launch and scale</h2>
              <p className="text-gray-500 text-lg">See why founders and enterprise leaders choose us as their development partner</p>
            </div>
            
            {/* Navigation Arrows - Bottom Right */}
            <div className="flex items-center gap-4 mt-6 md:mt-0">
              <button
                onClick={() => {
                  setTestimonialIndex(prev => {
                    const newIndex = prev - 3;
                    return newIndex < 0 ? 6 : newIndex;
                  });
                }}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={() => {
                  setTestimonialIndex(prev => {
                    const newIndex = prev + 3;
                    return newIndex >= 9 ? 0 : newIndex;
                  });
                }}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(() => {
                const testimonials = [
                  {
                    quote: "Airdev has been critical to our venture's progress. They truly offer a seemingly impossible value proposition: they not only sit in the intersection between quality, speed, and cost, but also bring business wits into the process. In the end, I truly considered Airdev our partners in our venture.",
                    name: "Andrés Vélez",
                    role: "Founder and CEO, Tributi",
                    image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6500aaa230666988d62b5d2a_Andres.png"
                  },
                  {
                    quote: "Airdev is a great solution for companies who are starting at the very earliest stage, who are trying to come up with a proof of concept…But, they're not just for the brand new ideation and MVP types. Airdev has built a system that's enabled us to scale as well.",
                    name: "Phil Meachin",
                    role: "SVP, Head of Product, Dividend Finance",
                    image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6500af6291ac594b67d99f52_phil.png"
                  },
                  {
                    quote: "Airdev helped me launch my marketplace for therapy services in a fraction of the time and cost quoted by other vendors. Being non-technical, I relied on Airdev's guidance for prioritizing the most critical MVP features to test my hypothesis. Really recommend using this team if you want a strong product to market quickly!",
                    name: "Nisha Bhalla",
                    role: "CEO, Anima Bios",
                    image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/650dac8fd3c770962cbd6e24_nisha.png"
                  },
                  {
                    quote: "What was most attractive about no-code and Airdev was the cost, the quality, and the trust and communication aspect…Airdev was the perfect solution because they could help me build something fast, and more importantly, affordable",
                    name: "Jason Shatsky",
                    role: "Co-Founder and CEO, TicketRev",
                    image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6500af0242257e314ee8b4c2_jason.png"
                  },
                  {
                    quote: "In just two weeks, AirDev created an elegantly streamlined version of our previous gig management platform, built on top of our Salesforce data. The result became an instant hit with our network of linguists, while dramatically reducing the time we spend on ongoing maintenance.",
                    name: "Matt Conger",
                    role: "CEO and Founder, Cadence Translate",
                    image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/650af0adf55118f1835773b3_Matt%20Conger_Cadence.png"
                  },
                  {
                    quote: "Working with AirDev was an entirely different experience from typical outsourced developers; it was like having another member of the team. Their ability to translate broad guidance and run with ideas saved me and our team 40+ hours per week.",
                    name: "Richard Sherrington",
                    role: "Engagement Manager, McKinsey & Company",
                    image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/650af0ad1fd3a8d78150fe34_Richard%20Sherrington_Mckinsey.png"
                  },
                  {
                    quote: "As non-technical, female founders of a mission-driven organization, we got a lot of feedback that our idea was nice but we needed to get a technical co-founder on board to be taken seriously. What Airdev has been able to accomplish in just a week is totally astounding and fits our needs perfectly.",
                    name: "Madeline Dangerfield-Cha",
                    role: "Co-founder, Mon Ami",
                    image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/650d96fd849248da2ffc5596_Madeline.png"
                  },
                  {
                    quote: "Having partnered with Airdev on previous projects both for HP and other leading technology companies, it was clear that they were best placed to deliver this sort of complex tool.",
                    name: "Douglas Jeffrey",
                    role: "Chairman, Consenna",
                    image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6500afb08c847142b80af69f_douglas.png"
                  },
                  {
                    quote: "We've spent the same amount on consultants implementing our off-the-shelf system as we've spent building something totally custom with Airdev.",
                    name: "Aidan Wojtech",
                    role: "Director, Analytics & Process Improvement Greener Corporation",
                    image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/650d96e25450f83d337e1545_Aidan.png"
                  }
                ];
                
                const currentTestimonials = testimonials.slice(testimonialIndex, testimonialIndex + 3);
                
                return currentTestimonials.map((testimonial, index) => (
                  <div key={testimonialIndex + index} className="bg-white p-8 rounded-[20px] border border-gray-200 shadow-sm flex flex-col justify-between min-h-[320px]">
                    <blockquote className="text-lg text-[#0A0A0A] leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                      />
                      <div>
                        <div className="font-medium text-[#0A0A0A] text-base mb-1">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ));
              })()}
            </div>

            {/* More Client Stories Link */}
            <div className="flex items-center justify-center mt-12">
              <a href="#" className="inline-flex items-center gap-2 text-[#1165EF] font-medium text-sm group/link">
                More client stories
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-white text-center">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-[#1C2534] rounded-[20px] py-12 px-8">
               <h2 className="text-3xl md:text-4xl font-semibold mb-4">Want to explore working with us?</h2>
               <p className="text-xl text-blue-100 mb-8">Chat with our team to see how we can help.</p>
               <Button size="lg" className="bg-white text-[#1165EF] hover:bg-blue-50 h-12 px-10 rounded-full text-lg font-medium">
                  Talk to us
               </Button>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">
            <div className="lg:w-64">
              <a href="https://www.airdev.co/" className="mb-6 block">
                <img 
                  src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6577847e968a59db1df535cf_logo_v4.svg" 
                  alt="Airdev" 
                  className="h-8 w-auto"
                />
              </a>
              <p className="text-gray-500 text-sm leading-relaxed">
                 The trusted no-code & Bubble agency. Helping businesses launch world-class software products in a fraction of the time and cost.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-[8px] flex-1">
              <div>
                <h4 className="font-medium text-[#0A0A0A] mb-4">Services</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li><a href="https://www.airdev.co/services/agency" className="hover:text-black transition-colors">Bubble agency</a></li>
                  <li><a href="https://www.airdev.co/services/flex" className="hover:text-black transition-colors">Bubble freelancers</a></li>
                  <li><a href="https://www.airdev.co/services/app-audit" className="hover:text-black transition-colors">Bubble app audit</a></li>
                  <li><a href="https://www.airdev.co/services" className="hover:text-black transition-colors">Bubble developers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[#0A0A0A] mb-4">What we build</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li><a href="https://www.airdev.co/what-we-build/ai-apps" className="hover:text-black transition-colors">AI Apps</a></li>
                  <li><a href="https://www.airdev.co/what-we-build/saas-products" className="hover:text-black transition-colors">SaaS Products</a></li>
                  <li><a href="https://www.airdev.co/what-we-build/marketplaces" className="hover:text-black transition-colors">Marketplaces</a></li>
                  <li><a href="https://www.airdev.co/what-we-build/internal-tools" className="hover:text-black transition-colors">Internal Tools</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[#0A0A0A] mb-4">About</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li><a href="https://www.airdev.co/about/our-mission" className="hover:text-black transition-colors">Our mission</a></li>
                  <li><a href="https://www.airdev.co/about/our-people" className="hover:text-black transition-colors">Top 1% talent</a></li>
                  <li><a href="https://www.airdev.co/about/why-bubble" className="hover:text-black transition-colors">Why Bubble</a></li>
                  <li><a href="https://www.airdev.co/about" className="hover:text-black transition-colors">Our capabilities</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[#0A0A0A] mb-4">Company</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li><a href="https://www.airdev.co/client-stories" className="hover:text-black transition-colors">Client Stories</a></li>
                  <li><a href="https://www.airdev.co/careers" className="hover:text-black transition-colors">Careers</a></li>
                  <li><a href="https://www.airdev.co/blog" className="hover:text-black transition-colors">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[#0A0A0A] mb-4">For Builders</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li><a href="https://www.airdev.co/canvas" className="hover:text-black transition-colors">Canvas Framework</a></li>
                  <li><a href="https://www.airdev.co/partner-program" className="hover:text-black transition-colors">Partner Program</a></li>
                  <li><a href="https://www.airdev.co/bootcamp" className="hover:text-black transition-colors">Bubble Bootcamp</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© 2025 Airdev, Inc. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="https://www.airdev.co/privacy-policy" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="https://www.airdev.co/terms-of-service" className="hover:text-black transition-colors">Terms of Service</a>
              <div className="flex items-center gap-4 ml-2">
                <a href="https://www.facebook.com/airdev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.twitter.com/airdev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/airdev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndexOld;
