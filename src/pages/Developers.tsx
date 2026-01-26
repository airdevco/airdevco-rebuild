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
  ComputerDesktopIcon,
  PuzzlePieceIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  PaintBrushIcon,
  ClipboardDocumentCheckIcon
} from "@heroicons/react/24/solid";

const Developers = () => {
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
                    Build something great, as an <span className="text-black">Airdev Partner Developer</span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-4 leading-relaxed max-w-lg">
                    The Partner program is the best and most flexible way to build a career in Bubble development. Developers create high-impact Bubble products for startup and enterprise clients, and earn money while growing skills and experience.
                  </p>
                  
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    Don't know Bubble yet? <a href="https://build.airdev.co/bootcamp" target="_blank" rel="noopener noreferrer" className="text-[#1265EF] hover:underline">Check out our free bootcamp!</a>
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
                    src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/639496a06201a3c5ae954c7e_developers-hero.jpg" 
                    alt="Developer working"
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
                  Partners enjoy the flexibility of freelancing (remote, gig-based), but without the hassle of finding clients and managing logistics. This means more time doing what you love – building great products in Bubble!
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <CurrencyDollarIcon className="w-6 h-6 text-emerald-600" />,
                    bg: "bg-emerald-50",
                    title: "Earn competitive pay",
                    desc: "Whether you choose to build a lot or a little, we offer jobs based on competitive rates for top Bubble developers."
                  },
                  {
                    icon: <ClipboardDocumentCheckIcon className="w-6 h-6 text-indigo-600" />,
                    bg: "bg-indigo-50",
                    title: "Get clear assignments",
                    desc: "Every build starts with a clear technical requirements doc and high-fidelity mockups, so you know exactly what you're on the hook for."
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
                    desc: "We staff teams of specialists, with clear deliverables and handovers at each step. As a developer you'll work with the top PMs and designers in the field."
                  },
                  {
                    icon: <AcademicCapIcon className="w-6 h-6 text-pink-600" />,
                    bg: "bg-pink-50",
                    title: "Grow your skills & experience",
                    desc: "Learn from our wealth of internal Bubble resources, our expert help desk, and from the growing community of top Bubblers across the world."
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
                  WHAT OUR DEVELOPER PARTNERS SAY
                </div>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-6 max-w-5xl">
                  Top Bubble developers launched their careers in no-code in the Partner Program
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Hear from some of our current developer partners and alumni about their experiences in the Partner Program
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {[
                  {
                    quote: "Joining the Partner Program at AirDev was a crucial point in my no-code career. The program provided a steady source of income through paid client projects, giving me peace of mind and stability for my family. Even though I am no longer a part of the Partner Program, the experience was instrumental in shaping my skills and increasing my earning potential. I highly recommend it to any no-code developer, whether they are just starting out or looking to take their career to the next level.",
                    name: "Eli Beachy",
                    role: "CTO at funded fintech startup\nFormer PM and Developer at Airdev",
                    image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/63908679c7153532043e8094_partners-Eli%20Beachy.jpg"
                  },
                  {
                    quote: "I had a remarkable experience with Airdev's partner program. Not only were the training and educational resources they provided me with top-notch, but the team was very supportive. From the moment I began, I felt like I was part of a encouraging community that was eager to help. I am so thankful to have had the opportunity to participate in their program, and I can confidently say that it has had a lasting impact on my Bubble and no-code journey.",
                    name: "Lola Ojabowala",
                    role: "Founder of Lunch Pail Labs\nFormer PM and Developer at Airdev",
                    image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/63949aa9c9e9c8daf1635e08_partners-Lola%20Ojabowala.jpg"
                  },
                  {
                    quote: "Joining the Partner Program was, without a doubt, the best thing that happened to me when I started building apps on Bubble. It gave me access to a wealth of resources and expertise, including talented PMs, designers, and QA specialists. It helped me kickstart my career and it empowered me to build some of the most useful and complex Bubble apps I've built to date.",
                    name: "Pablo Heredia Pastor",
                    role: "Developer at Airdev\n5 client applications developed",
                    image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/63949aab8a7e8d8dfa40bd89_partners-Pablo%20Heredia%20Pastor.jpg"
                  },
                  {
                    quote: "The Partner Program is the real deal. Between the challenging projects, the supportive community, and the continual push for growth, I don't know where I'd be without it. A truly innovative and exciting option for anyone building a new career in tech.",
                    name: "Matt Neary",
                    role: "Creator of Think It, Build It\nFormer PM and Developer at Airdev",
                    image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/63949aa9196c5b42bff25f00_partners-Matt%20Neary.jpg"
                  },
                  {
                    quote: "The Partner Program exceeded my expectations and provided a fantastic, valuable, enjoyable work experience. In addition to supplying opportunities for growth and development, the team and resources provided have been first-class. I feel supported and empowered throughout the entire process, and I am grateful for the knowledge and skills I gain through this program.",
                    name: "Juan Camilo Vásquez",
                    role: "Developer at Airdev\n9 client applications developed",
                    image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/63949aa92c8cc39477429be8_partners-Juan%20Camilo%20Va%CC%81squez.jpg"
                  },
                  {
                    quote: "The Partner Program gives you the opportunity to join a large professional community of Bubble developers. You can always get support and help from your colleagues, exchange experiences, and expand your skills. To be part of such a team of like-minded people as Airdev is a great fortune.",
                    name: "Julia Hvaldina",
                    role: "Developer at Airdev\n12 client applications developed",
                    image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/63949aa889f4b19337234b00_partners-Faye%20Watson.jpg"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="rounded-xl overflow-hidden mb-6 aspect-square bg-[#9bbcf2]">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <blockquote className="text-[16px] text-[#425466] leading-relaxed font-normal mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="font-bold text-[#0A0A0A] text-lg">{testimonial.name}</div>
                  </div>
                ))}
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
                  We select for analytical builders
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  We aim to select Partners who will be most successful in our unique model. For the Developer role, this means the ability to build secure, performant, and scalable Bubble apps to match clear functional requirements.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Bubble mastery",
                    desc: "We look for a clear demonstration of mastering both the Bubble editor and best practices in database design, security settings, workflow logic, and modularity/efficiency.",
                    icon: <ComputerDesktopIcon className="w-8 h-8 text-[#0AE4E3]" />
                  },
                  {
                    title: "Analytical prowess",
                    desc: "We look for candidates who can break complex problems into logical components and create elegant solutions – this leads to apps we can scale and maintain.",
                    icon: <PuzzlePieceIcon className="w-8 h-8 text-[#0AE4E3]" />
                  },
                  {
                    title: "Canvas familiarity",
                    desc: <>We build using our <a href="https://build.airdev.co/canvas" target="_blank" rel="noopener noreferrer" className="text-[#0AE4E3] hover:underline">Canvas framework</a>, which provides a clean design and many best practices to cut down on unnecessary development time.</>,
                    icon: <SparklesIcon className="w-8 h-8 text-[#0AE4E3]" />
                  },
                  {
                    title: "Professional dependability",
                    desc: "Our model depends on high-quality and on-time deliverables by each team member – Developers must be comfortable working on a deadline.",
                    icon: <ClockIcon className="w-8 h-8 text-[#0AE4E3]" />
                  },
                  {
                    title: "Clear communication (in English)",
                    desc: "Communication is key in a remote environment, both to teammates and clients. Developers should be proficient in English (mostly written).",
                    icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-[#0AE4E3]" />
                  },
                  {
                    title: "Alignment to our values",
                    desc: <>Our <a href={ROUTES.CORE_VALUES} className="text-[#0AE4E3] hover:underline">core values</a> help create a common set of guiding principles that help us work well together across the globe. We want people with whom these values resonate.</>,
                    icon: <UserGroupIcon className="w-8 h-8 text-[#0AE4E3]" />
                  },
                  {
                    title: "NO design expertise required",
                    desc: "Most projects will come with a pre-assembled UI (using our Canvas framework), so developers don't need expertise in custom design.",
                    icon: <PaintBrushIcon className="w-8 h-8 text-[#0AE4E3]" />
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
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
                  APPLICATION PROCESS
                </div>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-6 leading-tight">
                  Learn more about the application process
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We have developed a rigorous multi-step selection process that uses practical exercises to screen thousands of candidates and find the top developers.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
                {[
                  {
                    step: "1",
                    icon: <DocumentTextIcon className="w-6 h-6" />,
                    title: "Application",
                    time: "1 hour",
                    desc: "You'll describe your Bubble experience and share a video demonstrating your experience."
                  },
                  {
                    step: "2",
                    icon: <ClockIcon className="w-6 h-6" />,
                    title: "Initial technical assessment",
                    time: "1 hour",
                    desc: "You'll complete a small Bubble exercise to test your basic skills."
                  },
                  {
                    step: "3",
                    icon: <VideoCameraIcon className="w-6 h-6" />,
                    title: "Interview",
                    time: "30 minutes",
                    desc: "You'll have a video interview with one of our team members."
                  },
                  {
                    step: "4",
                    icon: <ComputerDesktopIcon className="w-6 h-6" />,
                    title: "Final technical assessment",
                    time: "6 hours",
                    desc: "You'll build a mini Bubble app to demonstrate your full capabilities."
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
                          <h3 className={`text-lg font-bold text-gray-900 ${item.title === "Initial technical assessment" || item.title === "Final technical assessment" ? "leading-tight" : ""}`}>{item.title}</h3>
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
                <div className="mt-8 text-gray-600">
                  Want to see if you're ready? <a href="https://build.airdev.co/quiz" target="_blank" rel="noopener noreferrer" className="text-[#1265EF] hover:underline font-medium">Take our 20-question Bubble developer pre-quiz</a>
                </div>
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
              <div className="max-w-3xl mb-20">
                <div className="text-[15px] font-semibold text-[#0AE4E3] uppercase tracking-wider mb-3">
                  OUTCOMES
                </div>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#FFFFFF] mb-6">
                  Trusted by 500+ forward-thinking startups and enterprises
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

export default Developers;

