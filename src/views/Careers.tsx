"use client";

import { Navbar, Footer } from "@/components/landing";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { GlobeAmericasIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { ROUTES } from "@/config/routes";

const Careers = () => {

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
                    AIRDEV CAREERS
                  </div>
                  <h1 className="text-[40px] lg:text-[48px] leading-[1.1] font-semibold tracking-[-0.03em] text-black mb-8" style={{ marginLeft: '-0.05em' }}>
                    Work with us to change how software is made and to open up more career paths for software professionals.
                  </h1>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-3xl opacity-60 transform translate-x-10 translate-y-10"></div>
                  <img 
                    src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6414a7c28346513612a3c407_career-hero.jpg" 
                    alt="Airdev Careers"
                    className="w-full aspect-square object-cover rounded-2xl relative z-10"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Two ways to get involved */}
          <section className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-6">
                  Two ways to get involved
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Partner Program Card */}
                <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6">
                    <GlobeAmericasIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Partner program</h3>
                  <p className="text-[18px] text-gray-600 leading-relaxed mb-8 flex-1">
                    Build and launch no-code products for clients as a developer, designer, or product manager.
                  </p>
                  <Link 
                    href="/partners" 
                    className="text-[18px] font-medium text-[#1265EF] hover:text-[#1a1a1a] transition-colors flex items-center gap-1.5 group/link"
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                </div>

                {/* Internal Roles Card */}
                <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                    <UserGroupIcon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Internal roles</h3>
                  <p className="text-[18px] text-gray-600 leading-relaxed mb-8 flex-1">
                    Support our company growth, standards, and community as part of the internal team.
                  </p>
                  <a 
                    href="https://jobs.airdev.co/home" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[18px] font-medium text-[#1265EF] hover:text-[#1a1a1a] transition-colors flex items-center gap-1.5 group/link"
                  >
                    See openings
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="pt-24 pb-24 relative overflow-hidden">
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0 overflow-hidden bg-[#1265EF]">
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(135deg, #1265EF 0%, #3b82f6 50%, #6366f1 100%)',
              }} />
              
              {/* Animated Gradient Blobs */}
              <div className="absolute inset-0 opacity-70">
                <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-[#6366f1] blur-[80px] mix-blend-overlay animate-mesh-blob-1" />
                <div className="absolute top-[20%] right-[-20%] w-[70%] h-[70%] rounded-full bg-[#06b6d4] blur-[80px] mix-blend-overlay animate-mesh-blob-2" />
                <div className="absolute bottom-[-30%] left-[20%] w-[80%] h-[80%] rounded-full bg-[#8b5cf6] blur-[80px] mix-blend-overlay animate-mesh-blob-3" />
                <div className="absolute top-[40%] left-[40%] w-[50%] h-[50%] rounded-full bg-[#3b82f6] blur-[60px] mix-blend-overlay animate-mesh-blob-4" />
              </div>

              {/* Diagonal Slanted Shape - Top */}
              <div 
                className="absolute -top-px left-0 right-0 h-24 lg:h-32 bg-white z-20"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 100%)',
                }}
              />
              
              {/* Diagonal Slanted Shape - Bottom */}
              <div 
                className="absolute -bottom-px left-0 right-0 h-24 lg:h-32 bg-[#F6F9FC] z-20"
                style={{
                  clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)',
                }}
              />
            </div>
            
            <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-32 pb-24">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white" style={{ marginBottom: '6px' }}>
                  Airdev's mission is to set the standard for no-code development
                </h2>
                <p className="text-xl text-white leading-relaxed">
                  Learn more about our <Link href={ROUTES.MISSION} className="text-[#00F5FF] hover:underline">mission</Link> and our <Link href={ROUTES.CORE_VALUES} className="text-[#00F5FF] hover:underline">values</Link>
                </p>
              </div>
            </div>
            
            <style dangerouslySetInnerHTML={{
              __html: `
                @keyframes mesh-blob-1 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  33% { transform: translate(20%, -20%) scale(1.2); }
                  66% { transform: translate(-15%, 25%) scale(0.85); }
                }
                @keyframes mesh-blob-2 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  33% { transform: translate(-25%, 25%) scale(1.3); }
                  66% { transform: translate(15%, -15%) scale(0.75); }
                }
                @keyframes mesh-blob-3 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  33% { transform: translate(30%, 15%) scale(0.85); }
                  66% { transform: translate(-20%, -20%) scale(1.15); }
                }
                @keyframes mesh-blob-4 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  33% { transform: translate(-30%, -30%) scale(1.2); }
                  66% { transform: translate(20%, 20%) scale(0.8); }
                }
                .animate-mesh-blob-1 { animation: mesh-blob-1 4s ease-in-out infinite; }
                .animate-mesh-blob-2 { animation: mesh-blob-2 5s ease-in-out infinite; }
                .animate-mesh-blob-3 { animation: mesh-blob-3 4.5s ease-in-out infinite; }
                .animate-mesh-blob-4 { animation: mesh-blob-4 3.5s ease-in-out infinite; }
              `
            }} />
          </section>

          {/* Global Remote Company */}
          <section className="py-24 bg-[#F6F9FC]">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-8">
                  A global, remote company.
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Airdev is headquartered in San Francisco but we are a fully-remote, international company. We look for driven, action-oriented people based anywhere who are excited to change the landscape of software development. We might be right for you if you want to be in charge of your own schedule and output, prefer asynchronous work, and love written communication.
                </p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Careers;

