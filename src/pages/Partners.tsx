"use client";

import { Navbar, Footer, ClientLogoTicker } from "@/components/landing";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CodeBracketIcon, BriefcaseIcon, PaintBrushIcon } from "@heroicons/react/24/solid";
import { ROUTES } from "@/config/routes";

const Partners = () => {
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
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-4">
                    PARTNER PROGRAM
                  </div>
                  <h1 className="text-[64px] leading-[1.05] font-semibold text-black mb-8" style={{ letterSpacing: '-0.03em', marginLeft: '-0.05em' }}>
                    Build with <span className="text-black">the best</span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    Join a global remote team of the world’s best no-code experts, and build software for companies ranging from small startups to large enterprises.
                  </p>

                  <div className="flex items-center gap-4">
                    {/* Talk to us button hidden */}
                  </div>
                </div>

                <div>
                  <img 
                    src="https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1764809095840x334856083424703840/users.png"
                    alt="Partners"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className="py-24">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="text-left mb-16">
                <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
                  HOW IT WORKS
                </div>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-6 max-w-4xl">
                  Focus on the work you love — we'll take care of the rest
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  As Bubble and no-code continue to grow, so does the demand for great talent. Airdev Partners is a unique program that provides the flexibility of freelancing (remote, gig-based), but without the hassle of finding your own clients and managing logistics. We look for the top no-code talent through our rigorous selection process, and staff virtual teams to execute client builds using our standards and processes. This means Partners can focus on what they love – building great products.
                </p>
              </div>

              <div className="flex flex-col gap-16">
                {/* Developer Track Card */}
                <div className="bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
                  <div className="grid lg:grid-cols-12 min-h-[480px]">
                    <div className="lg:col-span-8 p-10 lg:p-14 flex flex-col justify-between relative">
                      <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-[10px] rounded-full bg-purple-100 text-purple-700 text-[12px] font-bold uppercase tracking-wider mb-6" style={{ lineHeight: '1' }}>
                          <CodeBracketIcon className="w-4 h-4 flex-shrink-0" />
                          <span style={{ transform: 'translateY(2px)', display: 'inline-block' }}>Technical</span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4 tracking-tight">The Developer Track</h3>
                        <p className="text-[18px] text-gray-600 mb-6 leading-relaxed">
                          Developer Partners build secure and performant Bubble applications to meet the client's needs.
                        </p>
                        
                        <div className="flex flex-col gap-6 mb-10">
                          <div>
                            <div className="text-[14px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">The Role</div>
                            <p className="text-[18px] text-gray-600 leading-relaxed">
                              In this role, the Developer is responsible for all of the app's functionality – database structure, privacy rules, workflow logic, integrations, etc. We provide functional requirements and a preassembled UI, and the Developer works independently to hit weekly deliverables.
                            </p>
                          </div>
                          <div>
                            <div className="text-[14px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">The Fit</div>
                            <p className="text-[18px] text-gray-600 leading-relaxed">
                              You might be a fit if you have Bubble mastery (logic, not design), love creating elegant solutions to complex problems, and have clear written communication (English). Don't know Bubble yet? Check out our <a href="https://build.airdev.co/bootcamp" target="_blank" rel="noopener noreferrer" className="text-[#1265EF] hover:text-[#0E4FCC] hover:underline">bootcamp</a>!
                            </p>
                          </div>
                        </div>
                      </div>

                      <Link href={ROUTES.PARTNERS_DEVELOPERS}>
                        <Button className="h-12 px-8 text-lg font-medium rounded-[6px] bg-[#1265EF] hover:bg-[#0E4FCC] w-fit">
                          Learn more
                        </Button>
                      </Link>
                    </div>
                    
                    <div className="lg:col-span-4 p-8 lg:p-12 flex flex-col justify-start relative border-l border-gray-100">
                      <img 
                        src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/642c331c3972af3ac91441c1_pablo-pic.png" 
                        alt="Pablo Heredia Pastor"
                        className="w-full aspect-square object-cover rounded-2xl mb-8"
                      />
                      <blockquote className="text-[16px] text-gray-600 leading-relaxed mb-6">
                        "Joining the Partner Program was the best move in my Bubble career. I was able to access great resources and expertise, work with amazing teammates, and earn good money while growing my skillset."
                      </blockquote>
                      <div>
                        <div className="font-bold text-gray-900 text-xl">Pablo Heredia Pastor</div>
                        <div className="text-gray-500">Spain</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Manager Track Card */}
                <div className="bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
                  <div className="grid lg:grid-cols-12 min-h-[480px]">
                    <div className="lg:col-span-4 p-8 lg:p-12 flex flex-col justify-start relative border-r border-gray-100 order-2 lg:order-1">
                      <img 
                        src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/642ee4b347d6add152f22e6f_partners-Matt%20Neary.jpg" 
                        alt="Matt Neary"
                        className="w-full aspect-square object-cover rounded-2xl mb-8"
                      />
                      <blockquote className="text-[16px] text-gray-600 leading-relaxed mb-6">
                        "The Partner Program is the real deal. Between the challenging projects, the supportive community, and the continual push for growth, I don't know where I'd be without it."
                      </blockquote>
                      <div>
                        <div className="font-bold text-gray-900 text-xl">Matt Neary</div>
                        <div className="text-gray-500">New Zealand</div>
                      </div>
                    </div>

                    <div className="lg:col-span-8 p-10 lg:p-14 flex flex-col justify-between relative order-1 lg:order-2">
                      <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-[10px] rounded-full bg-emerald-100 text-emerald-700 text-[12px] font-bold uppercase tracking-wider mb-6" style={{ lineHeight: '1' }}>
                          <BriefcaseIcon className="w-4 h-4 flex-shrink-0" />
                          <span style={{ transform: 'translateY(2px)', display: 'inline-block' }}>Management</span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4 tracking-tight">The Product Manager Track</h3>
                        <p className="text-[18px] text-gray-600 mb-6 leading-relaxed">
                          PM Partners translate a client's vision into specific product requirements and manage the build.
                        </p>
                        
                        <div className="flex flex-col gap-6 mb-10">
                          <div>
                            <div className="text-[14px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">The Role</div>
                            <p className="text-[18px] text-gray-600 leading-relaxed">
                              In this role the Product Manager is responsible for taking a build from concept to live app. This means creating detailed feature requirements and project plan, managing build execution and launch, and supporting the client as they iterate and scale.
                            </p>
                          </div>
                          <div>
                            <div className="text-[14px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">The Fit</div>
                            <p className="text-[18px] text-gray-600 leading-relaxed">
                              You might be a fit if you have a strong analytical background, superior communication skills (English), and want to experience the end-to-end product creation process with multiple projects at once. Note: Prior Bubble experience is not required, but it helps cut your onboarding time.
                            </p>
                          </div>
                        </div>
                      </div>

                      <Link href={ROUTES.PARTNERS_PRODUCT_MANAGERS}>
                        <Button className="h-12 px-8 text-lg font-medium rounded-[6px] bg-[#1265EF] hover:bg-[#0E4FCC] w-fit">
                          Learn more
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* UX Designer Track Card */}
                <div className="bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
                  <div className="grid lg:grid-cols-12 min-h-[480px]">
                    <div className="lg:col-span-8 p-10 lg:p-14 flex flex-col justify-between relative">
                      <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-[10px] rounded-full bg-pink-100 text-pink-700 text-[12px] font-bold uppercase tracking-wider mb-6" style={{ lineHeight: '1' }}>
                          <PaintBrushIcon className="w-4 h-4 flex-shrink-0" />
                          <span style={{ transform: 'translateY(2px)', display: 'inline-block' }}>Design</span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4 tracking-tight">The UX Designer Track</h3>
                        <p className="text-[18px] text-gray-600 mb-6 leading-relaxed">
                          UX Designer Partners create delightful front-end experiences to match app requirements.
                        </p>
                        
                        <div className="flex flex-col gap-6 mb-10">
                          <div>
                            <div className="text-[14px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">The Role</div>
                            <p className="text-[18px] text-gray-600 leading-relaxed">
                              In this role the Designer is responsible for creating high-fidelity Figma mockups for complete client apps. We provide functional requirements and our Canvas design frameworks, and the Designer works independently to bring the client app to life.
                            </p>
                          </div>
                          <div>
                            <div className="text-[14px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">The Fit</div>
                            <p className="text-[18px] text-gray-600 leading-relaxed">
                              You might be a fit if you have product design and Figma mastery, past experience using design systems, and clear written communication (English).
                            </p>
                          </div>
                        </div>
                      </div>

                      <Link href={ROUTES.PARTNERS_UX_DESIGNERS}>
                        <Button className="h-12 px-8 text-lg font-medium rounded-[6px] bg-[#1265EF] hover:bg-[#0E4FCC] w-fit">
                          Learn more
                        </Button>
                      </Link>
                    </div>
                    
                    <div className="lg:col-span-4 p-8 lg:p-12 flex flex-col justify-start relative border-l border-gray-100">
                      <img 
                        src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6390867aaa174e4ebb04efec_partners-Patricia%20San%20Luis.jpg" 
                        alt="Patricia San Luis"
                        className="w-full aspect-square object-cover rounded-2xl mb-8"
                      />
                      <blockquote className="text-[16px] text-gray-600 leading-relaxed mb-6">
                        "Being a Partner has been a truly rewarding experience – working on a wide range of projects that have not only helped me improve my skills, but also helped me build meaningful connections with teammates."
                      </blockquote>
                      <div>
                        <div className="font-bold text-gray-900 text-xl">Patricia San Luis</div>
                        <div className="text-gray-500">Philippines</div>
                      </div>
                    </div>
                  </div>
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
                  We build custom software for all types of clients
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

export default Partners;

