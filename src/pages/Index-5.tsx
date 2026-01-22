import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  ChevronDown,
  Compass,
  UsersRound,
  Rocket,
  Cpu,
  Boxes,
  Store,
  LayoutDashboard,
  Building2,
  Gauge,
  FileSearch,
  Layers,
  HeartHandshake,
  BookOpen,
  Calendar,
  MapPin,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white py-3 ${
        isScrolled ? "border-b border-gray-100" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img 
              src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6577847e968a59db1df535cf_logo_v4.svg" 
              alt="Airdev" 
              className="h-8 w-auto"
            />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-[16px] font-medium text-gray-600 hover:text-gray-900 transition-colors">
                About
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'about' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 pt-2 w-auto min-w-[280px] z-50"
                >
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
                  <div className="grid gap-1">
                    <a href="#" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg border flex items-center justify-center transition-colors" style={{ backgroundColor: '#F4F4F4', borderColor: '#E0E0E0' }}>
                        <Compass className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 mb-0.5">Our mission</h3>
                        <p className="text-sm text-gray-600">To set the new standard</p>
                      </div>
                    </a>

                    <a href="#" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg border flex items-center justify-center transition-colors" style={{ backgroundColor: '#F4F4F4', borderColor: '#E0E0E0' }}>
                        <UsersRound className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 mb-0.5">Our people</h3>
                        <p className="text-sm text-gray-600">Top 1% talent</p>
                      </div>
                    </a>

                    <a href="#" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg border flex items-center justify-center transition-colors" style={{ backgroundColor: '#F4F4F4', borderColor: '#E0E0E0' }}>
                        <Rocket className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 mb-0.5">Why Bubble</h3>
                        <p className="text-sm text-gray-600">Our builder of choice</p>
                      </div>
                    </a>
                  </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* What We Build Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('what-we-build')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-[16px] font-medium text-gray-600 hover:text-gray-900 transition-colors">
                What We Build
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'what-we-build' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'what-we-build' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 pt-2 w-auto min-w-[320px] z-50"
                >
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
                  <div className="grid gap-1">
                    <a href="#" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg border flex items-center justify-center transition-colors" style={{ backgroundColor: '#F4F4F4', borderColor: '#E0E0E0' }}>
                        <Cpu className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 mb-0.5">AI Apps</h3>
                        <p className="text-sm text-gray-600">Build on top of LLMs</p>
                      </div>
                    </a>

                    <a href="#" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg border flex items-center justify-center transition-colors" style={{ backgroundColor: '#F4F4F4', borderColor: '#E0E0E0' }}>
                        <Boxes className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 mb-0.5">SaaS Products</h3>
                        <p className="text-sm text-gray-600">Launch a software startup</p>
                      </div>
                    </a>

                    <a href="#" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg border flex items-center justify-center transition-colors" style={{ backgroundColor: '#F4F4F4', borderColor: '#E0E0E0' }}>
                        <Store className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 mb-0.5">Marketplaces</h3>
                        <p className="text-sm text-gray-600">Connect buyers & sellers</p>
                      </div>
                    </a>

                    <a href="#" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg border flex items-center justify-center transition-colors" style={{ backgroundColor: '#F4F4F4', borderColor: '#E0E0E0' }}>
                        <LayoutDashboard className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 mb-0.5">Internal Tools</h3>
                        <p className="text-sm text-gray-600">Manage business ops</p>
                      </div>
                    </a>
                  </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-[16px] font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 pt-2 w-auto min-w-[280px] z-50"
                >
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
                  <div className="grid gap-1">
                    <a href="#" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg border flex items-center justify-center transition-colors" style={{ backgroundColor: '#F4F4F4', borderColor: '#E0E0E0' }}>
                        <Building2 className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 mb-0.5">Agency</h3>
                        <p className="text-sm text-gray-600">Full-service team</p>
                      </div>
                    </a>

                    <a href="#" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg border flex items-center justify-center transition-colors" style={{ backgroundColor: '#F4F4F4', borderColor: '#E0E0E0' }}>
                        <Gauge className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 mb-0.5">Flex</h3>
                        <p className="text-sm text-gray-600">Expert Bubble devs</p>
                      </div>
                    </a>

                    <a href="#" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg border flex items-center justify-center transition-colors" style={{ backgroundColor: '#F4F4F4', borderColor: '#E0E0E0' }}>
                        <FileSearch className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 mb-0.5">App Audit</h3>
                        <p className="text-sm text-gray-600">For existing Bubble apps</p>
                      </div>
                    </a>
                  </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Client Stories - No Dropdown */}
            <a
              href="#"
              className="text-[16px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Client stories
            </a>

            {/* For Builders Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('for-builders')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-[16px] font-medium text-gray-600 hover:text-gray-900 transition-colors">
                For Builders
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'for-builders' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'for-builders' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 pt-2 w-auto min-w-[280px] z-50"
                >
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
                  <div className="grid gap-1">
                    <a href="#" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg border flex items-center justify-center transition-colors" style={{ backgroundColor: '#F4F4F4', borderColor: '#E0E0E0' }}>
                        <Layers className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 mb-0.5">Canvas</h3>
                        <p className="text-sm text-gray-600">Our building tool</p>
                      </div>
                    </a>

                    <a href="#" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg border flex items-center justify-center transition-colors" style={{ backgroundColor: '#F4F4F4', borderColor: '#E0E0E0' }}>
                        <HeartHandshake className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 mb-0.5">Partner Program</h3>
                        <p className="text-sm text-gray-600">Build with us</p>
                      </div>
                    </a>

                    <a href="#" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg border flex items-center justify-center transition-colors" style={{ backgroundColor: '#F4F4F4', borderColor: '#E0E0E0' }}>
                        <BookOpen className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 mb-0.5">Bootcamp</h3>
                        <p className="text-sm text-gray-600">Learn to build</p>
                      </div>
                    </a>
                  </div>
                  </div>
                </motion.div>
              )}
            </div>

            <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-lg px-3 h-10 text-[16px] font-medium transition-colors">
              Talk to us
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 lg:hidden flex flex-col gap-4 shadow-xl">
          {["About", "What We Build", "Services", "Client Stories", "For Builders"].map((item) => (
            <a key={item} href="#" className="text-lg font-medium text-gray-900">
              {item}
            </a>
          ))}
          <div className="h-px bg-gray-100 my-2" />
          <Button className="w-full bg-gray-900 text-white rounded-lg h-10 text-[16px] font-medium">Talk to us</Button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-[100%] blur-3xl opacity-60" />
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div>
            <h1 className="text-[56px] lg:text-[80px] leading-[1.05] font-semibold tracking-[-0.03em] text-gray-900 mb-8">
              Build world-class products <span className="text-gray-500">in record time</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              We use the power of visual development and AI to build world-class products in a fraction of time and cost of conventional agencies.
            </p>

            <div className="mt-8 mb-12 flex items-center justify-center gap-8">
              <img 
                src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/66969187efb02a2bec53fa5e_bubble.webp" 
                alt="Badge" 
                className="h-12 w-auto"
              />
              <div className="h-4 w-px bg-gray-300" />
              <img 
                src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0c3731de254210406f2e4_star-rating.png" 
                alt="Star Rating" 
                className="h-12 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientLogoTicker = () => {
  const logos = [
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9e8bf871c558358f1a5b_dividend.webp", alt: "Dividend", text: "$300m+ raised" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9ee1ae74665b5db8e326_team.webp", alt: "Team", text: "YCombinator funded" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9f84d5671aa3618dd823_next.webp", alt: "Next", text: "$120m raised from Softbank" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9ff1b72d8c1ec14d79f4_cadence.webp", alt: "Cadence", text: "500 Startups funded" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669aa054a5cede730dd27b7c_masa.webp", alt: "Masa", text: "Techstars funded" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9c3d751e65ec09878e99_breakr.webp", alt: "Breakr", text: "Andreessen Horowitz funded" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a999f6474337c4a7222a6_cvs.webp", alt: "CVS" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a98f0f9d898fd7a42ee37_hp.webp", alt: "HP" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a98856387d81692ff84c7_634856296daa1063fb978b74_att.webp", alt: "AT&T" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9ab61b705a1b138a54a4_teach.webp", alt: "Teach" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/632d6dc4b4679012dc6be0fc_brand-microsoft.svg", alt: "Microsoft" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9b18abc279093236c577_lenovo.webp", alt: "Lenovo" }
  ];

  // Logos are used directly in the grid below

  return (
    <section className="py-16 relative overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center gap-12">
          {/* Left content */}
          <div className="flex-shrink-0 flex flex-col gap-4">
            {/* Trusted by container - hidden for now */}
            <div className="hidden flex items-center gap-2 px-4 h-10 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm">
              <div className="flex -space-x-2">
                <img 
                  src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6500aaa230666988d62b5d2a_Andres.png" 
                  alt="Andrés Vélez" 
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6500af6291ac594b67d99f52_phil.png" 
                  alt="Phil Meachin" 
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/650dac8fd3c770962cbd6e24_nisha.png" 
                  alt="Nisha Bhalla" 
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
              </div>
              <span className="text-sm font-medium text-gray-600">Trusted by 1,000 founders</span>
            </div>
            
            {/* Text */}
            <p className="text-base text-gray-500 font-medium max-w-[220px]">
              We serve organizations from startups to enterprises
            </p>
          </div>
          
          {/* Scrolling logos */}
          <div className="relative flex-1 overflow-hidden">
            {/* Fade overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(to right, white, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(to left, white, transparent)' }} />
            
            {/* Scrolling container - duplicate for seamless loop */}
            <div className="flex logo-scroll-container">
              {/* First set */}
              <div className="flex logo-scroll-track">
                {logos.map((logo, index) => {
                  // Consistent sizing for logos with text
                  let logoHeight = "h-8";
                  if (logo.alt === "Dividend" || logo.alt === "Team") {
                    logoHeight = "h-9";
                  } else if (logo.alt === "Next" || logo.alt === "Cadence" || logo.alt === "Masa") {
                    logoHeight = "h-9";
                  } else if (logo.alt === "Breakr") {
                    logoHeight = "h-9";
                  } else if (!logo.text) {
                    // Logos without text slightly smaller
                    logoHeight = "h-7";
                  }
                  return (
                  <div
                    key={`${logo.alt}-${index}`}
                    className={`flex flex-col items-center justify-center py-3 flex-shrink-0 ${logo.text ? 'px-10 w-[180px]' : 'px-4 w-[120px]'}`}
                  >
                    <div className="h-9 flex items-center justify-center">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className={`${logoHeight} w-auto object-contain opacity-100`}
                      />
                    </div>
                    {logo.text && (
                      <p className="text-xs text-gray-400 text-center font-medium mt-2 whitespace-nowrap">
                        {logo.text}
                      </p>
                    )}
                  </div>
                  );
                })}
              </div>
              {/* Second set - exact duplicate */}
              <div className="flex logo-scroll-track">
                {logos.map((logo, index) => {
                  // Consistent sizing for logos with text
                  let logoHeight = "h-8";
                  if (logo.alt === "Dividend" || logo.alt === "Team") {
                    logoHeight = "h-9";
                  } else if (logo.alt === "Next" || logo.alt === "Cadence" || logo.alt === "Masa") {
                    logoHeight = "h-9";
                  } else if (logo.alt === "Breakr") {
                    logoHeight = "h-9";
                  } else if (!logo.text) {
                    // Logos without text slightly smaller
                    logoHeight = "h-7";
                  }
                  return (
                  <div
                    key={`${logo.alt}-dup-${index}`}
                    className={`flex flex-col items-center justify-center py-3 flex-shrink-0 ${logo.text ? 'px-10 w-[180px]' : 'px-4 w-[120px]'}`}
                  >
                    <div className="h-9 flex items-center justify-center">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className={`${logoHeight} w-auto object-contain opacity-100`}
                      />
                    </div>
                    {logo.text && (
                      <p className="text-xs text-gray-400 text-center font-medium mt-2 whitespace-nowrap">
                        {logo.text}
                      </p>
                    )}
                  </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll-left {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-1800px);
            }
          }
          
          .logo-scroll-container {
            animation: scroll-left 30s linear infinite;
          }
          
          .logo-scroll-container:hover {
            animation-play-state: paused;
          }
        `
      }} />
    </section>
  );
};

export const LogoTicker = () => {
  const logos = [
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9e8bf871c558358f1a5b_dividend.webp", alt: "Dividend" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9ee1ae74665b5db8e326_team.webp", alt: "Team" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9f84d5671aa3618dd823_next.webp", alt: "Next" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9ff1b72d8c1ec14d79f4_cadence.webp", alt: "Cadence" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669aa054a5cede730dd27b7c_masa.webp", alt: "Masa" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9c3d751e65ec09878e99_breakr.webp", alt: "Breakr" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a999f6474337c4a7222a6_cvs.webp", alt: "CVS" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a98856387d81692ff84c7_634856296daa1063fb978b74_att.webp", alt: "AT&T" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/632d6dc4b4679012dc6be0fc_brand-microsoft.svg", alt: "Microsoft" },
  ];

  return (
    <section className="py-12 border-y border-gray-100 bg-gray-50/50">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-wider">We serve organizations of all sizes</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60">
          {logos.map((logo) => (
            <img 
              key={logo.alt} 
              src={logo.src} 
              alt={logo.alt} 
              className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CountUp = ({ end, suffix = "", duration = 2, decimals = 0 }: { end: number; suffix?: string; duration?: number; decimals?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = end * easeOutQuart;
      
      setCount(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration, decimals]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
            <span className="text-[12px] font-medium text-gray-600 tracking-wider">Who we are</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            Our mission is to set the new standard for building software
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            by helping others launch scalable, secure, and performant products in a fraction of the time and cost of traditional development.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Client Projects", value: 1000, suffix: "+" },
            { label: "Team Size", value: 150, suffix: "+" },
            { label: "Building on Bubble", value: 10, suffix: " yrs" },
            { label: "On Clutch", value: 4.9, suffix: "", decimals: 1 },
          ].map((stat, idx) => (
            <div key={idx} className="p-8 relative pl-10">
              <div className="absolute left-0 top-8 bottom-8 w-0.5 bg-gray-100" />
              <div className="text-5xl font-bold text-gray-900 mb-2 tracking-tight">
                <CountUp end={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />
              </div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProfileCardStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const profiles = [
    {
      name: "Michael Jones",
      role: "UX Designer",
      hours: "10 hours per week",
      location: "San Francisco, CA",
      image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1764808161560x751416532088936000/user1.png?_gl=1*d2i5dm*_gcl_au*MTUwODMyNDUxNS4xNzYyMzQxMzM3*_ga*NTI5MjczODIuMTc2MDQ5MzE4OQ..*_ga_BFPVR2DEE2*czE3NjQ4MDA5NzUkbzQ3JGcxJHQxNzY0ODA2ODE3JGo1NiRsMCRoMA.."
    },
    {
      name: "Sarah Chen",
      role: "Product Manager",
      hours: "20 hours per week",
      location: "New York, NY",
      image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1764808551869x972338666005876400/user4.png"
    },
    {
      name: "David Smith",
      role: "Bubble Developer",
      hours: "40 hours per week",
      location: "Austin, TX",
      image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1764808461330x682777414019612200/user3.png"
    },
    {
      name: "Emily Davis",
      role: "QA Engineer",
      hours: "15 hours per week",
      location: "Seattle, WA",
      image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1764808362136x483839724045490100/user2.png?_gl=1*1o1r9zq*_gcl_au*MTUwODMyNDUxNS4xNzYyMzQxMzM3*_ga*NTI5MjczODIuMTc2MDQ5MzE4OQ..*_ga_BFPVR2DEE2*czE3NjQ4MDA5NzUkbzQ3JGcxJHQxNzY0ODA2ODE3JGo1NiRsMCRoMA.."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profiles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [profiles.length]);

  return (
    <div className="relative h-[420px] w-full flex items-start justify-center -mx-[25.6px] pt-4 overflow-hidden">
      {profiles.map((profile, index) => {
        let position = (index - currentIndex + profiles.length) % profiles.length;
        if (position > 2) return null;

        return (
          <motion.div
            key={index}
            className="absolute w-[280px] rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center text-center"
            initial={false}
            animate={{
              y: position * 15,
              scale: 1 - position * 0.05,
              zIndex: 10 - position,
              opacity: 1 - position * 0.2,
              top: position === 0 ? '0px' : `${position * 15}px`,
              x: '-50%'
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ left: '50%', backgroundColor: '#F9FAFB' }}
          >
            <div className="w-28 h-28 overflow-hidden mb-5 relative bg-gray-50">
              <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{profile.name}</h3>
            <div className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              {profile.role}
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
              <Calendar className="w-4 h-4" />
              <span>{profile.hours}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{profile.location}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const Features = () => {
  const features = [
    {
      id: "01",
      title: "Connect your calendar",
      description: "We'll handle all the cross-referencing, so you don't have to worry about double bookings.",
      image: "https://49291ba917ced6f25ff01e5cc5b9a691.cdn.bubble.io/cdn-cgi/image/w=1024,h=671,f=auto,dpr=2,fit=contain/f1763054037361x139486763646640820/desktop%20%281%29.webp",
      realTitle: "Powerful no-code framework",
      realDesc: "Bubble is a visual programming language that lets us build 5x faster, while controlling every detail of design and functionality."
    },
    {
      id: "02",
      title: "Set your availability",
      description: "Want to block off weekends? Set up any buffers? We make that easy.",
      image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1764810280887x343083959278793100/ai%20%281%29.png",
      realTitle: "AI throughout our work",
      realDesc: "We integrate AI into various parts of our process to streamline it, as well as into the products that we build."
    },
    {
      id: "03",
      title: "Choose how to meet",
      description: "It could be a video chat, phone call, or a walk in the park!",
      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669977d23a2e5967e7a52575_img2.webp",
      realTitle: "Meticulous builders",
      realDesc: "Our rigorous multi-step selection process uses practical exercises to screen thousands of no-code candidates and find the top 1%."
    },
    {
      id: "04",
      title: "Obsessive quality standards",
      description: "We establish best-in-class resources, tools, and processes for every aspect of our work.",
      image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1764810615819x902272734823797000/cover3%20%281%29.jpg",
      realTitle: "Quality standards",
      realDesc: "We establish best-in-class resources, tools, and processes for every aspect of our work, to consistently deliver top-quality results."
    }
  ];

  return (
    <section className="py-32 bg-gray-50/50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
            <span className="text-[12px] font-medium text-gray-600 tracking-wider">The Airdev difference</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6 max-w-2xl mx-auto">
            The new approach to building great products
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Combining cutting-edge technology with world-class expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-3xl p-[25.6px] border border-gray-200 shadow-sm flex flex-col h-full overflow-hidden relative">
              <div className="mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold text-gray-500 mb-6" style={{ fontFamily: "'Roboto Mono', monospace", backgroundColor: '#F4F4F4' }}>
                  {feature.id}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.realTitle}</h3>
                <p className="text-[16px] leading-relaxed text-gray-600">{feature.realDesc}</p>
              </div>
              
              {/* Image for card #3 */}
              {feature.id === "03" && (
                <div className="mt-auto pt-4 -mx-[25.6px] -mb-[25.6px]">
                  <div className="relative aspect-[5/3] overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1764809095840x334856083424703840/users.png" 
                      alt="Users" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              
              {feature.id === "01" && (
                <div className="mt-auto pt-4">
                  <div className="relative aspect-[5/3] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center p-[5px]">
                    <img 
                      src={feature.image} 
                      alt={feature.realTitle} 
                      className="w-full h-full object-contain" 
                      style={{ marginTop: '10px' }}
                    />
                  </div>
                </div>
              )}
              
              {feature.id === "02" && (
                <div className="mt-auto pt-4">
                  <div className="relative aspect-[5/3] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center">
                    <img 
                      src={feature.image} 
                      alt={feature.realTitle} 
                      className="w-5/6 h-5/6 object-contain" 
                    />
                  </div>
                </div>
              )}
              
              {feature.id === "04" && (
                <div className="mt-auto pt-4">
                  <div className="relative aspect-[5/3] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                    <img 
                      src={feature.image} 
                      alt={feature.realTitle} 
                      className="w-full h-full object-cover" 
                      style={{ objectPosition: 'right center' }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
            <span className="text-[12px] font-medium text-gray-600 tracking-wider">Client stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6 max-w-2xl mx-auto">
            Clients trust Airdev to launch and scale
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            See why founders and enterprise leaders choose us as their development partner
          </p>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="relative">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {(() => {
              const allTestimonials = [
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
              
              return allTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-3xl p-[25.6px] border border-gray-200 shadow-sm flex flex-col mb-6 break-inside-avoid">
                  <blockquote className="text-[16px] text-[#0A0A0A] leading-relaxed mb-6 font-normal">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0 border border-gray-100"
                    />
                    <div>
                      <div className="font-semibold text-[#0A0A0A] text-base">{testimonial.name}</div>
                      <div className="text-gray-500" style={{ fontSize: '14px' }}>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ));
            })()}
          </div>

          {/* More Client Stories Link */}
          <div className="flex items-center justify-center mt-16">
            <Button className="text-black border border-gray-200 rounded-lg h-10 px-3 text-[16px] font-medium transition-colors group hover:bg-[#F2F2F4]" style={{ backgroundColor: '#F7F7F9' }}>
              More client stories <ArrowRight className="ml-1 w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Showcase = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1400px] mx-auto px-6 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full mb-6 shadow-sm mx-auto">
          <span className="text-[12px] font-medium text-gray-600 tracking-wider">Our Work</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
          Real apps, real results
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Explore the powerful applications we've built for clients across industries—from AI-powered platforms to enterprise SaaS solutions
        </p>
      </div>
      
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none" />
          <img 
            src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67a16874fad40d3e5b676ea9_website%20hero.webp" 
            alt="Showcase" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="pt-32 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="rounded-3xl py-16 px-[25.6px] border border-gray-200 shadow-sm text-center relative overflow-hidden" style={{ backgroundImage: 'url(https://framerusercontent.com/images/qDrnphZImHJ0Ev3PBEtSsuAKiw.png?width=2160&height=736)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
              Want to explore working with us?
            </h2>
            <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-lg px-3 h-10 text-[16px] font-medium transition-colors mb-8">
              Talk to us
            </Button>
            <div className="flex items-center justify-center gap-8">
              <img 
                src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/66969187efb02a2bec53fa5e_bubble.webp" 
                alt="Badge" 
                className="h-12 w-auto"
              />
              <div className="h-4 w-px bg-gray-300" />
              <img 
                src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0c3731de254210406f2e4_star-rating.png" 
                alt="Star Rating" 
                className="h-12 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
            <a href="#" className="mb-6 block">
              <img 
                src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6577847e968a59db1df535cf_logo_v4.svg" 
                alt="Airdev" 
                className="h-8 w-auto"
              />
            </a>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              The trusted no-code & Bubble agency. Helping businesses launch world-class software products in a fraction of the time and cost.
            </p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Services</h4>
              <ul className="space-y-4">
                {["Bubble agency", "Bubble freelancers", "Bubble app audit", "Bubble developers"].map(l => (
                  <li key={l}><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">What we build</h4>
              <ul className="space-y-4">
                {["AI Apps", "SaaS Products", "Marketplaces", "Internal Tools"].map(l => (
                  <li key={l}><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Company</h4>
              <ul className="space-y-4">
                {["Client Stories", "Careers", "Blog", "About"].map(l => (
                  <li key={l}><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">For Builders</h4>
              <ul className="space-y-4">
                {["Canvas Framework", "Partner Program", "Bubble Bootcamp"].map(l => (
                  <li key={l}><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© 2025 Airdev, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 text-gray-500">
            <a href="#" className="hover:text-gray-900"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-gray-900"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-gray-900"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Index5 = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <ClientLogoTicker />
        <Stats />
        <Features />
        <Testimonials />
        {/* <Showcase /> */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index5;

