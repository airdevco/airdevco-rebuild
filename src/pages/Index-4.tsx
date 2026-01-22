import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

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

// App Builder Interface Component
const WireframeInterface = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div className="relative h-full w-full lg:w-[calc(100%+20vw)] lg:-mr-[calc(20vw+2rem)]">
      <motion.div 
        initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Top Bar */}
        <div className="h-8 lg:h-12 border-b border-gray-200 bg-gray-50 flex items-center px-2 lg:px-4 justify-between">
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
          <div className="w-10 lg:w-16 border-r border-gray-200 bg-white flex flex-col items-center py-2 lg:py-4 gap-2 lg:gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg bg-gray-100"
              />
            ))}
          </div>

          {/* Secondary Sidebar */}
          <div className="w-32 lg:w-48 border-r border-gray-200 bg-gray-50/50 p-2 lg:p-4 flex flex-col gap-1.5 lg:gap-3">
            <div className="flex items-center justify-between mb-1 lg:mb-2">
              <div className="h-3 lg:h-4 w-16 lg:w-24 bg-gray-200 rounded"></div>
              <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gray-200"></div>
            </div>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div 
                key={i} 
                initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (i * 0.05) }}
                className="flex items-center gap-1.5 lg:gap-2 p-1 lg:p-2 rounded"
              >
                <div className={`w-3 h-3 lg:w-4 lg:h-4 rounded ${i === 2 ? 'bg-blue-200' : 'bg-gray-200'}`}></div>
                <div className="h-2 lg:h-3 w-12 lg:w-20 bg-gray-200 rounded"></div>
                {i === 2 && <div className="ml-auto w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-blue-500"></div>}
              </motion.div>
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
            <motion.div 
              initial={isMobile ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
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
                <div className="h-1.5 lg:h-2 w-1/2 bg-gray-100 rounded"></div>
              </div>
            </motion.div>

            {/* Central App Interface */}
            <motion.div 
              initial={isMobile ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
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
                      <motion.div 
                        key={i}
                        initial={isMobile ? { height: `${h}%` } : { height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.8 + (i * 0.1), duration: 0.5, ease: "backOut" }}
                        className="flex-1 bg-blue-500/20 rounded-t-sm"
                      />
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
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Index4 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const statsRef = useRef<HTMLDivElement>(null);
  const statsTitleRef = useRef<HTMLDivElement>(null);

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
            
            const duration = 1500;
            const steps = 60;
            const stepDuration = duration / steps;

            let projectsStep = 0;
            const projectsInterval = setInterval(() => {
              projectsStep++;
              const progress = projectsStep / steps;
              const value = Math.floor(1000 * progress);
              setCounts((prev) => ({ ...prev, projects: projectsStep >= steps ? 1000 : value }));
              if (projectsStep >= steps) clearInterval(projectsInterval);
            }, stepDuration);

            let teamStep = 0;
            const teamInterval = setInterval(() => {
              teamStep++;
              const progress = teamStep / steps;
              const value = Math.floor(150 * progress);
              setCounts((prev) => ({ ...prev, team: teamStep >= steps ? 150 : value }));
              if (teamStep >= steps) clearInterval(teamInterval);
            }, stepDuration);

            let yearsStep = 0;
            const yearsInterval = setInterval(() => {
              yearsStep++;
              const progress = yearsStep / steps;
              const value = Math.floor(10 * progress);
              setCounts((prev) => ({ ...prev, years: yearsStep >= steps ? 10 : value }));
              if (yearsStep >= steps) clearInterval(yearsInterval);
            }, stepDuration);

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

    if (statsTitleRef.current) {
      observer.observe(statsTitleRef.current);
    }

    return () => {
      if (statsTitleRef.current) {
        observer.unobserve(statsTitleRef.current);
      }
    };
  }, [hasAnimated]);

  const differenceItems = [
    {
      id: 1,
      title: "We use the most powerful no-code framework",
      description: "Bubble is a visual programming language that lets us build 5x faster, while controlling every detail of design and functionality.",
      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6699757a77af0e37c4946de6_66842ff5432e3efa779d8c0d_image1-p-1080.webp",
    },
    {
      id: 2,
      title: "We use AI throughout our work",
      description: "We integrate AI into various parts of our process to streamline it, as well as into the products that we build.",
      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67dca0a5bf08461620385d5c_ailogos.png",
    },
    {
      id: 3,
      title: "We select the world's most meticulous builders",
      description: "Our rigorous multi-step selection process uses practical exercises to screen thousands of no-code candidates and find the top 1%.",
      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669977d23a2e5967e7a52575_img2.webp",
    },
    {
      id: 4,
      title: "We obsess over quality standards",
      description: "We establish best-in-class resources, tools, and processes for every aspect of our work, to consistently deliver top-quality results.",
      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6699782711aaa6eab383cf8d_img3.webp",
    }
  ];

  const testimonials = [
    {
      quote: "Airdev has been critical to our venture's progress. They truly offer a seemingly impossible value proposition: they not only sit in the intersection between quality, speed, and cost, but also bring business wits into the process. In the end, I truly considered Airdev our partners in our venture.",
      name: "Andrés Vélez",
      role: "Founder and CEO",
      company: "Tributi",
      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6500aaa230666988d62b5d2a_Andres.png"
    },
    {
      quote: "Airdev is a great solution for companies who are starting at the very earliest stage, who are trying to come up with a proof of concept…But, they're not just for the brand new ideation and MVP types. Airdev has built a system that's enabled us to scale as well.",
      name: "Phil Meachin",
      role: "SVP, Head of Product",
      company: "Dividend Finance",
      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6500af6291ac594b67d99f52_phil.png"
    },
    {
      quote: "Airdev helped me launch my marketplace for therapy services in a fraction of the time and cost quoted by other vendors. Being non-technical, I relied on Airdev's guidance for prioritizing the most critical MVP features to test my hypothesis. Really recommend using this team if you want a strong product to market quickly!",
      name: "Nisha Bhalla",
      role: "CEO",
      company: "Anima Bios",
      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/650dac8fd3c770962cbd6e24_nisha.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white antialiased" style={{ fontFamily: "'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/70 backdrop-blur-xl border-b border-gray-200/50" : "bg-transparent"}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center">
              <img 
                src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6577847e968a59db1df535cf_logo_v4.svg" 
                alt="Airdev" 
                className="h-7 w-auto"
              />
            </a>

            <div className="hidden lg:flex items-center gap-1">
              <a href="#" className="px-4 py-2 text-[15px] text-gray-700 hover:text-gray-900 transition-colors font-semibold">About</a>
              <a href="#" className="px-4 py-2 text-[15px] text-gray-700 hover:text-gray-900 transition-colors font-semibold">What We Build</a>
              <a href="#" className="px-4 py-2 text-[15px] text-gray-700 hover:text-gray-900 transition-colors font-semibold">Services</a>
              <a href="#" className="px-4 py-2 text-[15px] text-gray-700 hover:text-gray-900 transition-colors font-semibold">Stories</a>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-md px-6 h-10 text-[15px] font-semibold shadow-sm">
                Talk to us
              </Button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
        >
          <div className="flex flex-col space-y-6 text-lg font-semibold">
            <a href="#" className="text-gray-700 hover:text-gray-900 py-2">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 py-2">What We Build</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 py-2">Services</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 py-2">Stories</a>
            <div className="pt-6 border-t border-gray-200 flex flex-col gap-3">
              <Button className="bg-gray-900 text-white hover:bg-gray-800 w-full rounded-md h-10 text-[15px] font-semibold">Talk to us</Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Hero Section with Mesh Gradient Background */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
        {/* Mesh Gradient Background with Grid Pattern */}
        <div className="absolute inset-0 -z-10">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-pink-50/20" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-pink-200/20 to-blue-200/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-[64px] lg:text-[80px] font-bold tracking-[-0.03em] text-gray-900 mb-6 leading-[1.1]">
                  The reimagined<br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">software agency</span>
                </h1>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[20px] text-gray-600 mb-12 leading-[1.6] font-medium"
              >
                We use the power of visual development and AI to build world-class products in a fraction of time and cost of conventional agencies.
              </motion.p>

              {/* Badges */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-12 flex-wrap opacity-70"
              >
                <img 
                  src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/66969187efb02a2bec53fa5e_bubble.webp" 
                  alt="Bubble Partner" 
                  className="h-16 w-auto"
                />
                <img 
                  src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0c3731de254210406f2e4_star-rating.png" 
                  alt="5 Stars" 
                  className="h-16 w-auto"
                />
              </motion.div>
            </div>

            {/* Right side - Wireframe Interface */}
            <div className="relative h-[400px] lg:h-[600px] w-full">
              <WireframeInterface isMobile={isMobile} />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By - Simplified */}
      <section className="py-24 border-y border-gray-100 bg-gray-50/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-[13px] font-semibold text-gray-400 mb-16 tracking-wider text-center uppercase">
            We serve organizations of all sizes
          </p>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-40">
            {[
              { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9e8bf871c558358f1a5b_dividend.webp", alt: "Dividend", maxWidth: "120px" },
              { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9ee1ae74665b5db8e326_team.webp", alt: "Team", maxWidth: "100px" },
              { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9f84d5671aa3618dd823_next.webp", alt: "Next", maxWidth: "100px" },
              { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a999f6474337c4a7222a6_cvs.webp", alt: "CVS", maxWidth: "100px" },
              { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/632d6dc4b4679012dc6be0fc_brand-microsoft.svg", alt: "Microsoft", maxWidth: "100px" },
              { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9b18abc279093236c577_lenovo.webp", alt: "Lenovo", maxWidth: "100px" }
            ].map((logo) => (
              <img 
                key={logo.alt}
                src={logo.src} 
                alt={logo.alt} 
                className="w-auto h-auto object-contain grayscale"
                style={{ maxWidth: logo.maxWidth }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Modern Grid */}
      <section ref={statsRef} className="py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div ref={statsTitleRef} className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-[44px] lg:text-[56px] font-bold tracking-[-0.02em] text-gray-900 mb-4 leading-[1.2]">
              Our mission is to set the new standard for building software
            </h2>
            <p className="text-[18px] text-gray-600 leading-[1.6] font-medium">
              by helping others launch scalable, secure, and performant products in a fraction of the time and cost of traditional development.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
             <div className="group text-center p-8 rounded-2xl bg-gradient-to-b from-white to-gray-50/50 border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                <div className="text-[56px] font-bold mb-2 text-gray-900 tracking-[-0.02em] group-hover:scale-105 transition-transform">
                  {hasAnimated ? `${counts.projects.toLocaleString()}+` : '0+'}
                </div>
                <p className="text-[15px] text-gray-600 font-semibold">Client Projects</p>
             </div>
             <div className="group text-center p-8 rounded-2xl bg-gradient-to-b from-white to-gray-50/50 border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                <div className="text-[56px] font-bold mb-2 text-gray-900 tracking-[-0.02em] group-hover:scale-105 transition-transform">
                  {hasAnimated ? `${counts.team}+` : '0+'}
                </div>
                <p className="text-[15px] text-gray-600 font-semibold">Team Size</p>
             </div>
             <div className="group text-center p-8 rounded-2xl bg-gradient-to-b from-white to-gray-50/50 border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                <div className="text-[56px] font-bold mb-2 text-gray-900 tracking-[-0.02em] group-hover:scale-105 transition-transform">
                  {hasAnimated ? `${counts.years} yrs` : '0 yrs'}
                </div>
                <p className="text-[15px] text-gray-600 font-semibold">Building on Bubble</p>
             </div>
             <div className="group text-center p-8 rounded-2xl bg-gradient-to-b from-white to-gray-50/50 border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                <div className="text-[56px] font-bold mb-2 text-gray-900 tracking-[-0.02em] group-hover:scale-105 transition-transform">
                  {hasAnimated ? counts.rating.toFixed(1) : '0.0'}
                </div>
                <p className="text-[15px] text-gray-600 font-semibold">On Clutch</p>
             </div>
          </div>
        </div>
      </section>
      
      {/* The Airdev Difference - Clean Cards */}
      <section className="py-32 lg:py-40 bg-gray-50/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-md mb-4 font-semibold text-[12px] uppercase tracking-wider">
              The Airdev Difference
            </div>
            <h2 className="text-[44px] lg:text-[56px] font-bold tracking-[-0.02em] text-gray-900 mb-4 leading-[1.2]">
              The new approach to building great products
            </h2>
            <p className="text-[18px] text-gray-600 leading-[1.6] font-medium">
              Combining cutting-edge technology with world-class expertise
            </p>
          </div>
           
          <div className="grid lg:grid-cols-2 gap-6">
            {differenceItems.map((item, index) => (
              <DifferenceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Clean Minimal */}
      <section className="py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-md mb-4 font-semibold text-[12px] uppercase tracking-wider">
              Client Stories
            </div>
            <h2 className="text-[44px] lg:text-[56px] font-bold tracking-[-0.02em] text-gray-900 mb-4 leading-[1.2]">
              Clients trust Airdev to launch and scale
            </h2>
            <p className="text-[18px] text-gray-600 leading-[1.6] font-medium">
              See why founders and enterprise leaders choose us as their development partner
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>

          <div className="flex items-center justify-center mt-16">
            <a href="#" className="inline-flex items-center gap-2 text-gray-900 font-bold text-[15px] hover:gap-3 transition-all group">
              More client stories
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Example Apps Section - Full Width Image */}
      <section className="py-32 lg:py-40 bg-gray-50/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-md mb-4 font-semibold text-[12px] uppercase tracking-wider">
              Our Work
            </div>
            <h2 className="text-[44px] lg:text-[56px] font-bold tracking-[-0.02em] text-gray-900 mb-4 leading-[1.2]">
              Real apps, real results
            </h2>
            <p className="text-[18px] text-gray-600 leading-[1.6] font-medium">
              Explore the powerful applications we've built for clients across industries—from AI-powered platforms to enterprise SaaS solutions
            </p>
          </div>
        </div>
        
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67a16874fad40d3e5b676ea9_website%20hero.webp" 
              alt="Example apps"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Stripe Style */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 px-12 py-12 lg:py-16 text-center border border-gray-700 shadow-2xl">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" />
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-[36px] lg:text-[44px] font-bold tracking-[-0.02em] text-white mb-4 leading-[1.2]">
                Want to explore working with us?
              </h2>
              <p className="text-[18px] text-gray-300 mb-8 leading-[1.6] font-medium">
                Chat with our team to see how we can help.
              </p>
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 rounded-md px-6 h-10 text-[15px] font-semibold shadow-xl hover:shadow-2xl transition-all">
                Talk to us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-16 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
            <div className="lg:max-w-xs">
              <img 
                src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6577847e968a59db1df535cf_logo_v4.svg" 
                alt="Airdev" 
                className="h-7 w-auto mb-6"
              />
              <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
                The trusted no-code & Bubble agency. Helping businesses launch world-class software products in a fraction of the time and cost.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-[13px] uppercase tracking-wider">Product</h4>
                <ul className="space-y-3 text-[15px] text-gray-600 font-medium">
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Services</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">What We Build</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-[13px] uppercase tracking-wider">Company</h4>
                <ul className="space-y-3 text-[15px] text-gray-600 font-medium">
                  <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Stories</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-[13px] uppercase tracking-wider">Resources</h4>
                <ul className="space-y-3 text-[15px] text-gray-600 font-medium">
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Support</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Partners</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-[13px] uppercase tracking-wider">Legal</h4>
                <ul className="space-y-3 text-[15px] text-gray-600 font-medium">
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Security</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[15px] text-gray-600 font-medium">
            <p>© 2025 Airdev. All rights reserved.</p>
            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
              <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-gray-900 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Modern Difference Card Component with Cal.com-inspired design
const DifferenceCard = ({ item, index }: { item: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500"
    >
      {/* Visual highlight on hover - only on card background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-8 lg:p-10">
        <div className="aspect-[16/9] rounded-xl bg-white border border-gray-200 overflow-hidden mb-6">
          <img 
            src={item.image}
            alt={`Feature ${item.id}`}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-[26px] font-bold tracking-[-0.01em] text-gray-900 mb-3 leading-[1.3]">
          {item.title}
        </h3>
        <p className="text-[16px] text-gray-600 leading-[1.6] mb-4 font-medium">
          {item.description}
        </p>
        <a href="#" className="inline-flex items-center gap-2 text-[15px] font-bold text-gray-900 group-hover:gap-3 transition-all">
          Learn more 
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

// Modern Testimonial Card Component
const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col justify-between h-full hover:shadow-lg hover:border-gray-300 transition-all duration-300"
    >
      <blockquote className="text-[16px] text-gray-700 leading-[1.7] mb-6 font-medium">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-11 h-11 rounded-full object-cover flex-shrink-0"
        />
        <div>
          <div className="font-bold text-gray-900 text-[15px]">{testimonial.name}</div>
          <div className="text-[14px] text-gray-500 font-medium">{testimonial.role}, {testimonial.company}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Index4;
