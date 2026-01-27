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
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  PaintBrushIcon,
  ComputerDesktopIcon,
  CheckCircleIcon
} from "@heroicons/react/24/solid";

const UXDesigners = () => {
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
                    Design amazing products, as an <span className="text-black">Airdev Partner Designer</span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                    The Partner program is the best and most flexible way to create full-end designs for multiple products at once. UX Designers build complete interfaces for a range of Airdev client applications, from startups to large enterprises.
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
                    src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/639716274a43b61406adc44f_ux-designer-hero.jpg" 
                    alt="UX Designer working"
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
                  Partners enjoy the flexibility of freelancing (fully remote, gig-based, full- or part-time), but without the hassle of finding clients and managing logistics. This means more time doing what you love – designing great products!
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <CurrencyDollarIcon className="w-6 h-6 text-emerald-600" />,
                    bg: "bg-emerald-50",
                    title: "Earn competitive pay",
                    desc: "Whether you choose to build a lot or a little, we offer jobs based on competitive rates for top UX designers."
                  },
                  {
                    icon: <DocumentTextIcon className="w-6 h-6 text-indigo-600" />,
                    bg: "bg-indigo-50",
                    title: "Get clear assignments",
                    desc: "Every build starts with a clear technical requirements doc, so you know exactly what your design mockups need to accomplish."
                  },
                  {
                    icon: <GlobeAmericasIcon className="w-6 h-6 text-purple-600" />,
                    bg: "bg-purple-50",
                    title: "Work where and when you want",
                    desc: "The Partner program is fully remote and gig-based – you accept the projects you want, and complete the work from wherever you work best."
                  },
                  {
                    icon: <UserGroupIcon className="w-6 h-6 text-orange-600" />,
                    bg: "bg-orange-50",
                    title: "Be part of a team of experts",
                    desc: "We staff teams of specialists, with clear deliverables and handovers at each step. As a designer you'll work with the top PMs and Bubble developers in the field."
                  },
                  {
                    icon: <AcademicCapIcon className="w-6 h-6 text-pink-600" />,
                    bg: "bg-pink-50",
                    title: "Grow your skills & experience",
                    desc: "Learn from our wealth of internal resources, our expert help desk, and from the growing community of top Bubbler experts around the world."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-6`}>
                      {item.icon}
                    </div>
                    <h3 className={`text-xl font-semibold text-gray-900 mb-3 ${i === 2 ? 'whitespace-nowrap' : ''}`}>{item.title}</h3>
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
                  WHAT OUR UX DESIGNER PARTNERS SAY
                </div>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-6 max-w-5xl">
                  Top UX Designers launched their careers in no-code in the Partner Program
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Hear from one of our current UX designers about their experience in the Partner Program
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
                <div className="grid lg:grid-cols-12">
                  <div className="lg:col-span-3 px-6 py-6 lg:px-8 lg:py-8 flex flex-col justify-start relative border-r border-gray-100">
                    <img 
                      src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6390867aaa174e4ebb04efec_partners-Patricia%20San%20Luis.jpg" 
                      alt="Patricia San Luis"
                      className="w-full aspect-square object-cover rounded-2xl mb-4"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-xl mb-1">Patricia San Luis</div>
                      <div className="text-gray-500 whitespace-nowrap">UX Design Lead</div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-9 p-8 lg:p-12 flex flex-col justify-center relative">
                    <div className="absolute top-8 left-8 text-[120px] leading-none text-blue-50 font-serif opacity-50 select-none pointer-events-none">
                      "
                    </div>
                    <blockquote className="text-[28px] text-[#0A0A0A] leading-normal relative z-10 font-medium tracking-tight pl-20">
                      I am incredibly fortunate to be part of a supportive team who truly cares about the success of our partners and clients. It's been a rewarding experience working on a wide range of projects that have not only helped me improve my skills, but also helped me build meaningful connections along the way.
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
                  We select for analytical designers
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  We aim to select Partners who will be most successful in our unique model. For the UX Designers role, this means the ability to create user experiences that are simple to understand and simple to build.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "UX design expertise",
                    desc: "We look for clear demonstration of the ability to create user experiences that are intuitive for users and optimized for building (i.e., simple, modular).",
                    icon: <PaintBrushIcon className="w-8 h-8 text-[#0AE4E3]" />
                  },
                  {
                    title: "Figma mastery",
                    desc: "We create designs using Figma, so designers should be proficient in creating and refining designs using the program.",
                    icon: <ComputerDesktopIcon className="w-8 h-8 text-[#0AE4E3]" />
                  },
                  {
                    title: "Canvas familiarity",
                    desc: <>We build using our <a href="https://build.airdev.co/canvas" target="_blank" rel="noopener noreferrer" className="text-[#0AE4E3] hover:underline">Canvas framework</a>, which provides design standards and a large library of customizable assets. Designers should be able to use a design system to build.</>,
                    icon: <SparklesIcon className="w-8 h-8 text-[#0AE4E3]" />
                  },
                  {
                    title: "Professional dependability",
                    desc: "Our model depends on high-quality and on-time deliverables by each team member – Designers must be comfortable working on a deadline.",
                    icon: <ClockIcon className="w-8 h-8 text-[#0AE4E3]" />
                  },
                  {
                    title: "Clear communication (in English)",
                    desc: "Communication is key in a remote environment, both to teammates and clients. Designers should be proficient in English (mostly written).",
                    icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-[#0AE4E3]" />
                  },
                  {
                    title: "Alignment to our values",
                    desc: <>Our <a href={ROUTES.CORE_VALUES} className="text-[#0AE4E3] hover:underline">core values</a> help create a common set of guiding principles that help us work well together across the globe. We want people with whom these values resonate.</>,
                    icon: <UserGroupIcon className="w-8 h-8 text-[#0AE4E3]" />
                  },
                  {
                    title: "NO Bubble expertise required",
                    desc: "Designers are not expected to create Bubble applications themselves – optimizing designs for easy assembly is sufficient.",
                    icon: <CheckCircleIcon className="w-8 h-8 text-[#0AE4E3]" />
                  },
                  {
                    title: "NO location / time requirements",
                    desc: "Designers are not expected to create Bubble applications themselves – optimizing designs for easy assembly is sufficient.",
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
                  We have developed a rigorous multi-step selection process that uses practical exercises to screen thousands of candidates and find the top designers. We test for technical ability, professionalism, and alignment with our core values. The result is the most skilled and customer-centric team in the industry.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
                {[
                  {
                    step: "1",
                    icon: <DocumentTextIcon className="w-6 h-6" />,
                    title: "Submit application",
                    time: "1 hour",
                    desc: "You'll describe your design experience and motivations"
                  },
                  {
                    step: "2",
                    icon: <PaintBrushIcon className="w-6 h-6" />,
                    title: "Complete initial design exercise",
                    time: "5 hours",
                    desc: "You'll complete a short, design exercise in Figma using the Canvas Design System"
                  },
                  {
                    step: "3",
                    icon: <PaintBrushIcon className="w-6 h-6" />,
                    title: "Complete second design exercise",
                    time: "20 hours",
                    desc: "You'llcomplete a second design exercise that is a simulated client project"
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
                <a href="https://forms.clickup.com/8465184/f/82at0-30971/XQN7HCVVIUYZS40VAU" target="_blank" rel="noopener noreferrer">
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

export default UXDesigners;
