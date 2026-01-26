"use client";

import { Navbar, Footer, ClientLogoTicker, SaasCTA } from "@/components/landing";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

import { ChevronRight } from "lucide-react";

// --- Agility Section Data ---
const ALL_SLIDES = [
  // Startups
  {
    id: "ticketrev",
    company: "TicketRev",
    category: "startups",
    logo: "https://cdn.prod.website-files.com/64e8a789efa42eaf8fe4d068/64e8b49e181622332d021cee_Logo.svg",
    logoText: "",
    heading: "How a buyer-first ticket marketplace startup quickly secured $1.1M in funding with Bubble.io",
    description: "Modernizing logistics with instant payments and automated reconciliation.",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/64cc2c786d693702395f21b1_TicketRev-built-with-no-code-Airdev.jpg",
    imageTitle: "How a buyer-first ticket marketplace startup quickly secured $1.1M in funding with Bubble.io",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "Marketplace app", color: "#00d4ff" },
      { label: "Timeline", value: "2 months", color: "#a960ee" },
      { label: "Key results", value: "$1.1M in pre-seed funding raised in 2 years", color: "#ff6b6b" },
    ]
  },
  {
    id: "navigreat",
    company: "NaviGreat",
    category: "startups",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765319327038x377695290107660200/navigreat.png",
    logoText: "",
    heading: "How NaviGreat built a digital hub for nonprofit organizations with Airdev's freelance Bubble developer in just 2 weeks",
    description: "Handling millions of transactions for developer-first communications APIs.",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/6644f29802eba3647e2d8030_NaviGreat_Airdev_no_code.jpg",
    imageTitle: "How NaviGreat built a digital hub for nonprofit organizations with Airdev's freelance Bubble developer in just 2 weeks",
    customFields: [
      { label: "Business type", value: "Nonprofit organization", color: "#635bff" },
      { label: "Product type", value: "Social network platform", color: "#00d4ff" },
      { label: "Timeline", value: "2 weeks", color: "#a960ee" },
      { label: "Key results", value: "A fully functional app developed in just 2 weeks", color: "#ff6b6b" },
    ]
  },
  {
    id: "playground",
    company: "Playground IEP",
    category: "startups",
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
  },
  {
    id: "cerebro",
    company: "Cerebro Sports",
    category: "startups",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447113960x777797950241704700/cerebro.png",
    logoText: "",
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
  // Enterprises
  {
    id: "dividend",
    company: "Dividend Finance",
    category: "enterprises",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447523324x536489976697318800/dividend.png",
    logoText: "$300m+ raised",
    heading: "See how Amazon simplified cross-border payments with Stripe",
    description: "Amazon businesses on Stripe including Prime, Audible, and Amazon Pay.",
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
    id: "cadence",
    company: "Cadence Translate",
    category: "enterprises",
    logo: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9ff1b72d8c1ec14d79f4_cadence.webp",
    logoText: "500 startups funded",
    heading: "How Airdev helped Cadence Translate connect Salesforce data to a custom no-code gig portal in just weeks",
    description: "Creating a seamless digital purchasing experience for premium vehicles and services.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2940&auto=format&fit=crop",
    imageTitle: "How Airdev helped Cadence Translate connect Salesforce data to a custom no-code gig portal in just weeks",
    customFields: [
      { label: "Business type", value: "Enterprise", color: "#635bff" },
      { label: "Product type", value: "Salesforce-integrated gig management platform", color: "#00d4ff" },
      { label: "Timeline", value: "4 weeks of development", color: "#a960ee" },
      { label: "Key results", value: "400% increase in jobs processed per month", color: "#ff6b6b" },
    ]
  },
  {
    id: "bubble",
    company: "Bubble.io",
    category: "enterprises",
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
    id: "tfa",
    company: "Teach for America",
    category: "enterprises",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447145612x608821623632928600/tfa.png",
    logoText: "",
    heading: "How Airdev helped Teach for America build a custom no-code internal hub with Bubble to support corps members across their journey",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635075d6712da824635efa1d_tfa%20(1).jpeg",
    imageTitle: "How Airdev helped Teach for America build a custom no-code internal hub with Bubble to support corps members across their journey",
    customFields: [
      { label: "Business type", value: "National nonprofit", color: "#635bff" },
      { label: "Product type", value: "Internal hub", color: "#00d4ff" },
      { label: "Timeline", value: "4 weeks", color: "#a960ee" },
      { label: "Key results", value: "Ability to manage the organization at scale", color: "#ff6b6b" },
    ]
  }
];

const DURATION = 6000; // 6 seconds per slide

const ClientStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [selectedTab, setSelectedTab] = useState<'startups' | 'enterprises'>('startups');
  
  // Filter slides based on selected tab
  const SLIDES = ALL_SLIDES.filter(slide => slide.category === selectedTab);

  const handleManualSwitch = (index: number) => {
    setPrevIndex(activeIndex);
    setActiveIndex(index);
    setProgressKey((prev) => prev + 1);
  };

  // Reset active index when tab changes
  useEffect(() => {
    setActiveIndex(0);
    setProgressKey(0);
  }, [selectedTab]);

  const activeSlide = SLIDES[activeIndex] || SLIDES[0];
  const direction = activeIndex > prevIndex ? 1 : activeIndex < prevIndex ? -1 : 1;

  return (
    <div className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900 font-['Colfax']">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pb-8 lg:pb-16 overflow-hidden" style={{ paddingTop: '180px' }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="text-left lg:pt-8">
                <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
                  OUR CUSTOMERS
                </div>
                <h1 className="text-[48px] lg:text-[64px] leading-[1.05] font-semibold text-black mb-5 lg:mb-6" style={{ letterSpacing: '-0.03em', marginLeft: '-0.05em' }}>
                  Client Stories
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                  We've helped hundreds of new startups, fast-growing businesses, and Fortune 500 enterprises launch complex, production-grade no-code applications in a fraction of the time and cost of traditional development.
                </p>
                <Button 
                  className="h-12 px-8 text-lg font-medium rounded-[6px] bg-[#1265EF] hover:bg-[#0E4FCC]"
                  onClick={() => {
                    const element = document.getElementById('customers-by-sizes');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  See all stories
                </Button>
              </div>
              <div className="relative w-full lg:w-[110%] lg:-mr-[10%] lg:-mt-8">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                  {/* Column 1 - Baseline */}
                  <div className="flex flex-col gap-3 lg:gap-4 lg:pt-8">
                    {[
                      {
                        title: "TicketRev",
                        logo: "https://cdn.prod.website-files.com/64e8a789efa42eaf8fe4d068/64e8b49e181622332d021cee_Logo.svg",
                        image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/64cc2c786d693702395f21b1_TicketRev-built-with-no-code-Airdev.jpg",
                        link: "#",
                        type: "video",
                        logoClass: "h-5",
                        imageClass: "",
                        whiteBg: false
                      },
                      {
                        title: "Playground IEP",
                        logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447131162x922542988700125000/playground.png",
                        image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/63b8851d340bdc19030b55b3_adam-winger-7fF0iei80AQ-unsplash%205-p-3200.jpg",
                        link: "#",
                        type: "story",
                        logoClass: "h-8",
                        imageClass: "",
                        whiteBg: true
                      }
                    ].map((card, index) => (
                      <a 
                        key={index}
                        href={card.link}
                        className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 hover:scale-[1.02] transition-transform duration-300 w-full shadow-lg"
                      >
                        <img 
                          src={card.image} 
                          alt={card.title}
                          className={`w-full h-full object-cover ${card.imageClass}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#176AAF] via-[#176AAF]/90 to-[#176AAF]/50 mix-blend-color opacity-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#176AAF]/90 via-[#176AAF]/40 to-transparent" />
                        
                        <div className="absolute top-6 left-6 z-10">
                          {card.logo ? (
                            <img 
                              src={card.logo} 
                              alt={card.title}
                              className={`w-auto object-contain ${card.logoClass || 'h-8'} ${card.whiteBg ? 'invert grayscale mix-blend-screen brightness-200 contrast-200' : 'brightness-0 invert'}`}
                            />
                          ) : (
                            <h3 className="text-white font-bold text-xl">{card.title}</h3>
                          )}
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Column 2 - Starts Higher */}
                  <div className="flex flex-col gap-3 lg:gap-4 lg:-mt-8">
                    {[
                      {
                        title: "Dividend Finance",
                        logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766446287440x908698787583342700/bubble.io.png",
                        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop",
                        link: "#",
                        type: "video",
                        imageClass: "object-left",
                        logoClass: "h-6",
                        whiteBg: false
                      },
                      {
                        title: "NaviGreat",
                        logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765319327038x377695290107660200/navigreat.png",
                        image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/6644f29802eba3647e2d8030_NaviGreat_Airdev_no_code.jpg",
                        link: "#",
                        type: "video",
                        imageClass: "",
                        logoClass: "h-8",
                        whiteBg: false
                      }
                    ].map((card, index) => (
                      <a 
                        key={index}
                        href={card.link}
                        className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 hover:scale-[1.02] transition-transform duration-300 w-full shadow-lg"
                      >
                        <img 
                          src={card.image} 
                          alt={card.title}
                          className={`w-full h-full object-cover ${card.imageClass}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#176AAF] via-[#176AAF]/90 to-[#176AAF]/50 mix-blend-color opacity-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#176AAF]/90 via-[#176AAF]/40 to-transparent" />
                        
                        <div className="absolute top-6 left-6 z-10">
                          {card.logo ? (
                            <img 
                              src={card.logo} 
                              alt={card.title}
                              className={`w-auto object-contain ${card.logoClass} ${card.whiteBg ? 'invert grayscale mix-blend-screen brightness-200 contrast-200' : 'brightness-0 invert'}`}
                            />
                          ) : (
                            <h3 className="text-white font-bold text-xl">{card.title}</h3>
                          )}
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Column 3 - Starts Lower */}
                  <div className="hidden lg:flex flex-col gap-4 pt-16">
                    {[
                      {
                        title: "Teach for America",
                        logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447145612x608821623632928600/tfa.png",
                        image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635075d6712da824635efa1d_tfa%20(1).jpeg",
                        link: "#",
                        type: "video",
                        imageClass: "",
                        logoClass: "h-8",
                        whiteBg: false
                      },
                      {
                        title: "Cerebro Sports",
                        logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447113960x777797950241704700/cerebro.png",
                        image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/64eced7d1af330bc878905e9_Cerebro_Airdev_no_code-app-build.jpg",
                        link: "#",
                        type: "story",
                        imageClass: "",
                        logoClass: "h-8",
                        whiteBg: true
                      }
                    ].map((card, index) => (
                      <a 
                        key={index}
                        href={card.link}
                        className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 hover:scale-[1.02] transition-transform duration-300 w-full shadow-lg"
                      >
                        <img 
                          src={card.image} 
                          alt={card.title}
                          className={`w-full h-full object-cover ${card.imageClass || ''}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#176AAF] via-[#176AAF]/90 to-[#176AAF]/50 mix-blend-color opacity-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#176AAF]/90 via-[#176AAF]/40 to-transparent" />
                        
                        <div className="absolute top-6 left-6 z-10">
                          {card.logo ? (
                            <img 
                              src={card.logo} 
                              alt={card.title}
                              className={`w-auto object-contain ${card.logoClass || 'h-8'} ${card.whiteBg ? 'invert grayscale mix-blend-screen brightness-200 contrast-200' : 'brightness-0 invert'}`}
                            />
                          ) : (
                            <h3 className="text-white font-bold text-xl">{card.title}</h3>
                          )}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Section */}
        <div className="pb-16">
          <ClientLogoTicker />
        </div>

        {/* Trusted By Section */}
        <section id="customers-by-sizes" className="relative py-24 bg-white overflow-hidden">
          <div className="relative z-10 max-w-[1200px] mx-auto px-6">
            {/* Top Content */}
            <div className="max-w-3xl mb-8">
              <h3 className="text-[#1e3a8a] font-semibold tracking-wide uppercase text-sm mb-3">
                CUSTOMERS BY SIZES
              </h3>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#1a1a1a] mb-6">
                Case studies
              </h2>
              <p className="text-[20px] text-[#425466] leading-relaxed mb-8 max-w-5xl">
                We've helped our clients launch a wide range of web applications, including two-sided marketplaces, social networks, productivity tools, process management tools, and much more. Our products support millions of users and billions of dollars of transaction volume.
              </p>
              
              {/* Toggle Tabs */}
              <div className="flex items-center gap-6 mb-8">
                <button
                  onClick={() => {
                    setSelectedTab('startups');
                  }}
                  className={`px-4 py-1.5 rounded-full text-[16px] font-medium transition-colors flex items-center justify-center leading-[22px] ${
                    selectedTab === 'startups'
                      ? 'bg-[#1265EF] text-white'
                      : 'text-[#1a1a1a] hover:text-[#617083]'
                  }`}
                >
                  Startups
                </button>
                <button
                  onClick={() => {
                    setSelectedTab('enterprises');
                  }}
                  className={`px-4 py-1.5 rounded-full text-[16px] font-medium transition-colors flex items-center justify-center leading-[22px] ${
                    selectedTab === 'enterprises'
                      ? 'bg-[#1265EF] text-white'
                      : 'text-[#1a1a1a] hover:text-[#617083]'
                  }`}
                >
                  Enterprises
                </button>
                
                <a 
                  href="/more-case-studies" 
                  className="flex items-center gap-1 text-[#1265EF] font-medium hover:underline text-[16px]"
                >
                  All customer stories <ChevronRight className="w-4 h-4" />
                </a>
              </div>
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

            {/* Bottom Logo Grid with Progress Bar - Full Width */}
            <div className="border-t border-solid border-slate-200 border-l border-solid border-b border-solid grid grid-cols-2 md:grid-cols-4 mb-12 lg:mb-16 mt-12">
              {SLIDES.map((slide, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => handleManualSwitch(index)}
                    className={`relative h-24 flex items-center justify-center border-r border-solid border-slate-200 transition-all duration-300 bg-white hover:bg-slate-50 ${index >= 2 ? 'border-t md:border-t-0' : ''}`}
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
                            ${slide.id === 'ticketrev' ? 'max-h-6' : ''} 
                            ${slide.id === 'dividend' ? 'max-h-5' : ''} 
                            ${slide.id === 'bubble' ? 'max-h-5' : ''} 
                            ${slide.id === 'playground' || slide.id === 'cerebro' ? 'mix-blend-multiply' : ''}
                            ${isActive ? 'grayscale-0 opacity-100' : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'}
                          `}
                        />
                      </div>
                      {slide.logoText && (
                        <p className="text-[10px] text-gray-400 text-center font-medium mt-1.5 whitespace-nowrap">
                          {slide.logoText}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Clutch Ratings Section */}
        <section className="py-24 bg-[#F6F9FC]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col items-center">
              <div className="max-w-3xl w-full text-left mb-12">
                <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-4">
                  RATINGS
                </div>
                <h2 className="text-[48px] font-semibold tracking-tight leading-none text-[#1a1a1a] mb-6">
                  Top-rated by customers on Clutch
                </h2>
                <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                  Airdev is the largest and <a href="https://clutch.co/profile/airdev#reviews" className="text-[#1265EF] hover:underline">most highly-rated Bubble.io agency globally</a>. Read our client reviews to see how our revolutionary development process not only delivers great products, but great experiences.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_16px_rgba(0,0,0,0.04)] py-10 px-6 md:px-8 max-w-3xl w-full flex flex-col md:flex-row items-stretch gap-8 mb-8">
                <div className="flex flex-col gap-4 flex-shrink-0 w-40">
                  <div className="flex-1 flex items-center justify-center">
                    <img 
                      src="https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766450599210x102817283016072740/clutch.png" 
                      alt="Clutch" 
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <div className="text-left flex flex-col justify-end">
                    <div className="flex items-end gap-2">
                      <div className="flex text-[#FF5A00] mb-1">
                        {[1, 2, 3, 4, 5].map(i => (
                          <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 4.646 1.251 5.313c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.313-4.117-4.646c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-2xl font-bold leading-none">4.9</span>
                    </div>
                    <div className="text-gray-500 text-[14px]">84 reviews</div>
                  </div>
                </div>
                
                <div className="flex-1 text-left border-l border-gray-100 pl-8">
                  <p className="text-[32px] text-black font-medium mb-2 leading-[36px]">"It felt like a true partnership — they were building with us, not for us."</p>
                  <p className="text-[18px] text-gray-500 font-normal">Bill Felix, Truepoint Wealth Counsel</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="pt-32 pb-12 relative overflow-hidden bg-[#0A2540]">
          <div className="relative z-10 max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl mb-20">
              <div className="text-[15px] font-semibold text-[#0AE4E3] uppercase tracking-wider mb-3">
                OUTCOMES
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#FFFFFF] mb-4">
                Key stats
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
              {[
                { label: "Projects completed", value: "1,000+" },
                { label: "Raised by our startup clients", value: "$600m+" },
                { label: "Transacted through our apps", value: "$1b+" },
                { label: "Client satisfaction rating", value: "4.9/5" },
              ].map((stat, idx) => (
                <div key={idx} className="pt-8 pr-8 pb-8 pl-0">
                  <div className="text-5xl font-bold text-white mb-2 tracking-tight pl-4 pt-1 relative" style={{ borderLeft: '2px solid #0AE4E3' }}>
                    {stat.value}
                  </div>
                  <div className="text-[#ADBDCC] font-medium pl-4 whitespace-nowrap">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="pt-32 pb-32 overflow-visible bg-[#F6F9FC] relative">
          <div className="max-w-[1200px] mx-auto px-6">
            {/* Header */}
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <div className="text-[16px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
                Airdev Reviews
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6 max-w-2xl mx-auto">
                What customers are saying about us
              </h2>
            </div>

            {/* Testimonials Masonry Grid - Staggered */}
            <div className="relative pb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Column 1 */}
                <div className="flex flex-col gap-6">
                  {[
                    {
                      quote: "Airdev has been critical to our venture's progress. They truly offer a seemingly impossible value proposition: they not only sit in the intersection between quality, speed, and cost, but also bring business wits into the process. In the end, I truly considered Airdev our partners in our venture.",
                      name: "Andrés Vélez",
                      role: "Founder and CEO, Tributi",
                      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6500aaa230666988d62b5d2a_Andres.png"
                    },
                    {
                      quote: "In just two weeks, AirDev created an elegantly streamlined version of our previous gig management platform, built on top of our Salesforce data. The result became an instant hit with our network of linguists, while dramatically reducing the time we spend on ongoing maintenance.",
                      name: "Matt Conger",
                      role: "CEO and Founder, Cadence Translate",
                      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/650af0adf55118f1835773b3_Matt%20Conger_Cadence.png"
                    },
                    {
                      quote: "As non-technical, female founders of a mission-driven organization, we got a lot of feedback that our idea was nice but we needed to get a technical co-founder on board to be taken seriously. What Airdev has been able to accomplish in just a week is totally astounding and fits our needs perfectly.",
                      name: "Madeline Dangerfield-Cha",
                      role: "Co-founder, Mon Ami",
                      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/650d96fd849248da2ffc5596_Madeline.png"
                    }
                  ].map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100/50 shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_16px_rgba(0,0,0,0.04)] flex flex-col">
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
                  ))}
                </div>
                
                {/* Column 2 */}
                <div className="flex flex-col gap-6">
                  {[
                    {
                      quote: "Airdev is a great solution for companies who are starting at the very earliest stage, who are trying to come up with a proof of concept…But, they're not just for the brand new ideation and MVP types. Airdev has built a system that's enabled us to scale as well.",
                      name: "Phil Meachin",
                      role: "SVP, Head of Product, Dividend Finance",
                      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6500af6291ac594b67d99f52_phil.png"
                    },
                    {
                      quote: "Working with AirDev was an entirely different experience from typical outsourced developers; it was like having another member of the team. Their ability to translate broad guidance and run with ideas saved me and our team 40+ hours per week.",
                      name: "Richard Sherrington",
                      role: "Engagement Manager, McKinsey & Company",
                      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/650af0ad1fd3a8d78150fe34_Richard%20Sherrington_Mckinsey.png"
                    },
                    {
                      quote: "Having partnered with Airdev on previous projects both for HP and other leading technology companies, it was clear that they were best placed to deliver this sort of complex tool.",
                      name: "Douglas Jeffrey",
                      role: "Chairman, Consenna",
                      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6500afb08c847142b80af69f_douglas.png"
                    }
                  ].map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100/50 shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_16px_rgba(0,0,0,0.04)] flex flex-col">
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
                  ))}
                </div>
                
                {/* Column 3 */}
                <div className="flex flex-col gap-6">
                  {[
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
                      quote: "We've spent the same amount on consultants implementing our off-the-shelf system as we've spent building something totally custom with Airdev.",
                      name: "Aidan Wojtech",
                      role: "Director, Analytics & Process Improvement Greener Corporation",
                      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/650d96e25450f83d337e1545_Aidan.png"
                    }
                  ].map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100/50 shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_16px_rgba(0,0,0,0.04)] flex flex-col">
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
                  ))}
                </div>
              </div>
              
              {/* More Client Stories Link - centered below entire masonry */}
              <div className="mt-8 flex justify-center">
                <a 
                  href="#" 
                  className="text-[16px] font-medium text-[#1265EF] hover:text-[#1a1a1a] transition-colors flex items-center gap-1.5 group/link"
                >
                  More client stories
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <SaasCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default ClientStories;

