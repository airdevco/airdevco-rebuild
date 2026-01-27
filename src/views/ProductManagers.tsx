"use client";

import { Navbar, Footer, ClientLogoTicker } from "@/components/landing";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { 
  CurrencyDollarIcon, 
  DocumentTextIcon, 
  GlobeAmericasIcon, 
  UserGroupIcon, 
  AcademicCapIcon,
  ClockIcon,
  VideoCameraIcon,
  PuzzlePieceIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  ClipboardDocumentCheckIcon,
  UserIcon,
  ComputerDesktopIcon
} from "@heroicons/react/24/solid";

const ProductManagers = () => {
  const scrollToApplicationProcess = () => {
    const element = document.getElementById('application-process');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="relative z-10 max-w-[1200px] mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="text-left">
                  <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-4">
                    PARTNER PROGRAM
                  </div>
                  <h1 className="text-[56px] lg:text-[64px] leading-[1.05] font-semibold tracking-[-0.03em] text-black mb-8" style={{ marginLeft: '-0.05em' }}>
                    Bring client apps to life, as an <span className="text-black">Airdev Partner PM</span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                    The Partner program is the best way to manage end-to-end product builds with multiple projects at once. Product Managers work with Airdev clients from startups to enterprises, and lead teams of the top Bubble builders around the world.
                  </p>

                  <div className="flex items-center gap-4">
                    <Button 
                      onClick={scrollToApplicationProcess}
                      className="h-12 px-8 text-lg font-medium rounded-[6px] bg-[#1265EF] hover:bg-[#0E4FCC]"
                    >
                      Apply now
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-3xl opacity-60 transform translate-x-10 translate-y-10"></div>
                  <img 
                    src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/639709eeeaa1f2275136a734_product-managers-hero.jpg" 
                    alt="Product Manager working"
                    className="w-full h-auto rounded-2xl relative z-10"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="text-left mb-20 max-w-4xl">
                <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
                  HOW IT WORKS
                </div>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-6">
                  Focus on the work you love, we'll take care of the rest
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  As a product manager, you'll get to focus on the work you love - no-code product management.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <CurrencyDollarIcon className="w-6 h-6 text-emerald-600" />,
                    bg: "bg-emerald-50",
                    title: "Earn competitive pay",
                    desc: "Whether you choose to build a lot or a little, we offer jobs based on competitive rates for top product managers."
                  },
                  {
                    icon: <ClipboardDocumentCheckIcon className="w-6 h-6 text-indigo-600" />,
                    bg: "bg-indigo-50",
                    title: "Operate a world-class process",
                    desc: "We have engineered our process (and in-house project management software) for clear deliverables, timelines, and handoffs."
                  },
                  {
                    icon: <GlobeAmericasIcon className="w-6 h-6 text-purple-600" />,
                    bg: "bg-purple-50",
                    title: "Work where and when you want",
                    desc: "The Partner program is fully remote and gig-based – you manage your project workload, and execute builds from wherever you work best."
                  },
                  {
                    icon: <UserGroupIcon className="w-6 h-6 text-orange-600" />,
                    bg: "bg-orange-50",
                    title: "Be part of a team of experts",
                    desc: "We staff teams of specialists, with clear deliverables and handovers at each step. As a PM you'll work with the top developers and designers in the field."
                  },
                  {
                    icon: <AcademicCapIcon className="w-6 h-6 text-pink-600" />,
                    bg: "bg-pink-50",
                    title: "Grow your skills & experience",
                    desc: "Learn from our wealth of internal Bubble resources, our expert help desk, and from the growing community of top PMs and Bubble builders across the world."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-6`}>
                      {item.icon}
                    </div>
                    <h3 className={`text-xl font-semibold text-gray-900 mb-3 ${item.title === "Work where and when you want" ? "whitespace-nowrap" : ""}`}>{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-[18px]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="pt-32 pb-32 overflow-visible bg-[#F6F9FC] relative">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="mb-16 text-left">
                <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
                  WHAT OUR PRODUCT MANAGER PARTNERS SAY
                </div>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-6 max-w-5xl">
                  Top Product Managers launched their careers in no-code in the Partner Program
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Hear from one of our current product managers about their experience in the Partner Program
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
                <div className="grid lg:grid-cols-12">
                  <div className="lg:col-span-3 px-6 py-6 lg:px-8 lg:py-8 flex flex-col justify-start relative border-r border-gray-100">
                    <img 
                      src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/63949aa9196c5b42bff25f00_partners-Matt%20Neary.jpg" 
                      alt="Matt Neary"
                      className="w-full aspect-square object-cover rounded-2xl mb-4"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-xl mb-1">Matt Neary</div>
                      <div className="text-gray-500 whitespace-nowrap">Product Manager Partner Alum</div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-9 p-8 lg:p-12 flex flex-col justify-center relative">
                    <div className="absolute top-8 left-8 text-[120px] leading-none text-blue-50 font-serif opacity-50 select-none pointer-events-none">
                      "
                    </div>
                    <blockquote className="text-[28px] text-[#0A0A0A] leading-normal relative z-10 font-medium tracking-tight pl-16">
                      The Partner Program is the real deal. Between the challenging projects, the supportive community, and the continual push for growth, I don't know where I'd be without it. A truly innovative and exciting option for anyone building a new career in tech.
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who We Look For */}
          <section className="py-24 bg-[#0A2540] text-white">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="max-w-3xl mb-16">
                <div className="text-[15px] font-semibold text-[#0AE4E3] uppercase tracking-wider mb-3">
                  WHO WE LOOK FOR
                </div>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                  We select for analytical product experts
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  We aim to select Partners who will be most successful in our unique model. For the PM role, this means a combination of product and project management skills.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Product sense",
                    desc: "We look for fluency in translating general needs into specific product features, and discussing options and tradeoffs to optimize product roadmaps.",
                    icon: <SparklesIcon className="w-8 h-8 text-[#0AE4E3]" />
                  },
                  {
                    title: "No-code interest",
                    desc: "We don't require PMs to have prior expertise in Bubble (we cover this in onboarding), but PMs should have an interest in building with no-code.",
                    icon: <ComputerDesktopIcon className="w-8 h-8 text-[#0AE4E3]" />
                  },
                  {
                    title: "Analytical prowess",
                    desc: "We look for candidates who can break complex problems into logical components and create elegant solutions – this leads to apps we can scale and maintain.",
                    icon: <PuzzlePieceIcon className="w-8 h-8 text-[#0AE4E3]" />
                  },
                  {
                    title: "Professional dependability",
                    desc: "Our model depends on high-quality and on-time deliverables by each team member – Developers must be comfortable working on a deadline.",
                    icon: <ClockIcon className="w-8 h-8 text-[#0AE4E3]" />
                  },
                  {
                    title: "Clear communication (in English)",
                    desc: "Written and verbal communication (in English) is key to the PM role, to clearly lay out options, set expectations, and provide guidance.",
                    icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-[#0AE4E3]" />
                  },
                  {
                    title: "Alignment to our values",
                    desc: <>Our <a href={ROUTES.CORE_VALUES} className="text-[#0AE4E3] hover:underline">core values</a> help create a common set of guiding principles that help us work well together across the globe. We want people with whom these values resonate.</>,
                    icon: <UserGroupIcon className="w-8 h-8 text-[#0AE4E3]" />
                  },
                  {
                    title: "NO location / time requirements",
                    desc: "We welcome candidates from anywhere in the world – if you can meet the standards above, we'd love to work with you!",
                    icon: <GlobeAmericasIcon className="w-8 h-8 text-[#0AE4E3]" />
                  }
                ].map((item, i) => (
                  <div key={i} className="relative p-8 rounded-2xl border border-[#1E3A5F] bg-[#112F4E]/50 flex flex-col h-full">
                    <div className="mb-4 text-[#0AE4E3]">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-[#ADBDCC] text-[18px] leading-relaxed flex-1">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Application Process */}
          <section id="application-process" className="py-24 bg-[#F6F9FC]">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="mb-16 max-w-3xl mx-auto">
                <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3 text-center">
                  APPLICATION PROCESS
                </div>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-6 leading-tight text-center">
                  Learn more about the application process
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed text-left">
                  We have developed a rigorous multi-step selection process that uses practical exercises to screen thousands of candidates and find the product managers. We test for technical ability, professionalism, and alignment with our <a href={ROUTES.CORE_VALUES} className="text-[#1265EF] hover:underline">core values</a>. The result is the most skilled and customer-centric team in the industry.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
                {[
                  {
                    step: "1",
                    icon: <DocumentTextIcon className="w-6 h-6" />,
                    title: "Submit application",
                    time: "1 hour",
                    desc: "You'll describe your experience and motivations"
                  },
                  {
                    step: "2",
                    icon: <ClockIcon className="w-6 h-6" />,
                    title: "Initial technical assessment",
                    time: "1 hour",
                    desc: "You'll complete a short analytical assessment"
                  },
                  {
                    step: "2",
                    icon: <VideoCameraIcon className="w-6 h-6" />,
                    title: "Interview",
                    time: "30 minutes",
                    desc: "You'll have an interview with one of our team members"
                  },
                  {
                    step: "4",
                    icon: <UserIcon className="w-6 h-6" />,
                    title: "Mock client call",
                    time: "1 hour",
                    desc: "You'll do a mock scoping call with a client"
                  }
                ].map((item, i) => (
                  <div key={i} className="relative group">
                    <div className="bg-white px-6 py-6 rounded-3xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div className="text-4xl font-bold text-gray-300">
                          {item.step}
                        </div>
                        <div className="text-xs font-bold uppercase tracking-wider text-gray-600 bg-gray-100 px-3 pb-1.5 rounded flex items-center" style={{ paddingTop: '8px' }}>
                          {item.time}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-50 text-[#1265EF] flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 text-[16px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a href="https://forms.clickup.com/8465184/f/82at0-18804/M3NIYQBZU1C15UJ1CU" target="_blank" rel="noopener noreferrer">
                  <Button className="h-14 px-10 text-lg font-medium rounded-[6px] bg-[#1265EF] hover:bg-[#0E4FCC]">
                    Start your application
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="text-left mb-8 max-w-3xl">
                <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
                  PROJECTS
                </div>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-6">
                  Build custom software for all types of clients
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  from 1-person startups to Fortune 50 enterprises
                </p>
              </div>
            </div>
            <ClientLogoTicker />
          </section>

           {/* Outcomes */}
           <section className="pt-32 pb-12 relative overflow-hidden bg-[#0A2540]">
            <div className="relative z-10 max-w-[1200px] mx-auto px-6">
              <div className="max-w-4xl mb-20">
                <div className="text-[15px] font-semibold text-[#0AE4E3] uppercase tracking-wider mb-3">
                  OUTCOMES
                </div>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#FFFFFF] mb-6">
                  Airdev is trusted by 500+ forward-thinking startups and enterprises
                </h2>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                {[
                  { label: "Projects completed", value: 1000, suffix: "+", formatted: true },
                  { label: "Raised by our startup clients", value: 600, suffix: "m+", prefix: "$" },
                  { label: "Transacted through our apps", value: 1, suffix: "b+", prefix: "$" },
                  { label: "Client satisfaction rating", value: 4.9, suffix: "", decimals: 1, additional: "/5" },
                ].map((stat, idx) => (
                  <div key={idx} className="pt-8 pr-8 pb-8 pl-0">
                    <div className="text-5xl font-bold text-white mb-2 tracking-tight pl-4 pt-1 relative" style={{ borderLeft: '2px solid #0AE4E3' }}>
                      {stat.prefix || ''}{stat.formatted ? stat.value.toLocaleString() : (stat.decimals ? stat.value.toFixed(stat.decimals) : stat.value)}{stat.suffix}{stat.additional || ''}
                    </div>
                    <div className="text-[#ADBDCC] font-medium pl-4">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
           </section>

        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ProductManagers;

