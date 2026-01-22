import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ROUTES } from "@/config/routes";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href={ROUTES.HOME} className="flex items-center">
            <img 
              src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6577847e968a59db1df535cf_logo_v4.svg" 
              alt="Airdev" 
              className="h-7 w-auto"
            />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`flex items-center gap-1 text-[16px] font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-[#1a1a1a] hover:text-gray-600'}`}>
                About
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'about' && (
                <motion.div
                  initial={{ opacity: 0, y: 4, rotateX: -10 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: 4, rotateX: -10 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full left-0 pt-2 w-max z-50 perspective-[2000px]"
                >
                  <div className="bg-white rounded-xl shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] border-none overflow-hidden ring-1 ring-black/5 min-w-[280px]">
                    <div className="p-6">
                      <div className="text-[14px] font-medium text-gray-500 uppercase tracking-wider mb-4">
                        Company
                      </div>
                      
                      <div className="flex flex-col gap-5">
                        <a href={ROUTES.MISSION} className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#0ea5e9]">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">Our mission</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">To set the new standard</p>
                          </div>
                        </a>

                        <a href={ROUTES.APPROACH} className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#10b981]">
                              <path d="M3 4a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm2 0v12h10V4H5zm2 2h6v2H7V6zm0 4h6v2H7v-2zm0 4h4v2H7v-2z" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">Our approach</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">How we work</p>
                          </div>
                        </a>

                        <a href="#" className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#8b5cf6]">
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">Our people</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">Top 1% talent</p>
                          </div>
                        </a>

                        <a href="#" className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#f97316]">
                              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">Why Bubble</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">Our builder of choice</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* What We Build Dropdown - Mega Menu Style */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('what-we-build')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`flex items-center gap-1 text-[16px] font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-[#1a1a1a] hover:text-gray-600'}`}>
                What We Build
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'what-we-build' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'what-we-build' && (
                <motion.div
                  initial={{ opacity: 0, y: 4, rotateX: -10 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: 4, rotateX: -10 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full left-0 pt-2 w-max z-50 perspective-[2000px]"
                >
                  <div className="bg-white rounded-xl shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] border-none overflow-hidden ring-1 ring-black/5 min-w-[280px]">
                    <div className="p-6">
                      <div className="text-[14px] font-medium text-gray-500 uppercase tracking-wider mb-4">
                        Products
                      </div>
                      
                      <div className="flex flex-col gap-5">
                        <a href={ROUTES.AI_APPLICATIONS} className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#a855f7]">
                              <path d="M16.5 7.5h-9v9h9v-9Z" />
                              <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">AI Apps</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">Build on top of LLMs</p>
                          </div>
                        </a>

                        <a href={ROUTES.SAAS_PRODUCTS} className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#ff6b35]">
                              <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">SaaS Products</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">Launch a software startup</p>
                          </div>
                        </a>

                        <a href={ROUTES.MARKETPLACES} className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#06b6d4]">
                              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">Marketplaces</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">Connect buyers & sellers</p>
                          </div>
                        </a>

                        <a href={ROUTES.INTERNAL_TOOLS} className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#10b981]">
                              <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" />
                              <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">Internal Tools</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">Manage business ops</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Industry Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('industry')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`flex items-center gap-1 text-[16px] font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-[#1a1a1a] hover:text-gray-600'}`}>
                Industry
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'industry' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'industry' && (
                <motion.div
                  initial={{ opacity: 0, y: 4, rotateX: -10 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: 4, rotateX: -10 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full left-0 pt-2 w-max z-50 perspective-[2000px]"
                >
                  <div className="bg-white rounded-xl shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] border-none overflow-hidden ring-1 ring-black/5 min-w-[280px]">
                    <div className="p-6">
                      <div className="text-[14px] font-medium text-gray-500 uppercase tracking-wider mb-4">
                        Industry
                      </div>
                      
                      <div className="flex flex-col gap-5">
                        <a href={ROUTES.TECHNOLOGY_AND_SOFTWARE} className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#6366f1]">
                              <path fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">Technology & Software</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">Tech products & platforms</p>
                          </div>
                        </a>

                        <a href={ROUTES.INDUSTRIAL_AND_MANUFACTURING} className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#f97316]">
                              <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">Industrial & Manufacturing</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">Operations & supply chain</p>
                          </div>
                        </a>

                        <a href={ROUTES.PUBLIC_SECTOR_AND_NONPROFIT} className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#0ea5e9]">
                              <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                              <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">Public Sector & Nonprofit</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">Government & social impact</p>
                          </div>
                        </a>

                        <a href={ROUTES.FINANCIAL_SERVICES} className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#10b981]">
                              <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                              <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
                              <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">Financial Services</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">Fintech & banking solutions</p>
                          </div>
                        </a>

                        <a href={ROUTES.HEALTHCARE} className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#ef4444]">
                              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">Healthcare</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">Health & life sciences</p>
                          </div>
                        </a>

                        <a href={ROUTES.CONSUMER_AND_RETAIL} className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#ec4899]">
                              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">Consumer & Retail</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">E-commerce & retail</p>
                          </div>
                        </a>
                      </div>
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
              <button className={`flex items-center gap-1 text-[16px] font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-[#1a1a1a] hover:text-gray-600'}`}>
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: 4, rotateX: -10 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: 4, rotateX: -10 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full left-0 pt-2 w-max z-50 perspective-[2000px]"
                >
                  <div className="bg-white rounded-xl shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] border-none overflow-hidden ring-1 ring-black/5 min-w-[280px]">
                    <div className="p-6">
                      <div className="text-[14px] font-medium text-gray-500 uppercase tracking-wider mb-4">
                        Services
                      </div>
                      
                      <div className="flex flex-col gap-5">
                        <a href={ROUTES.BUBBLE_AGENCY} className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#6366f1]">
                              <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">Agency</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">Full-service team</p>
                          </div>
                        </a>

                        <a href="#" className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#f43f5e]">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">Flex</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">Expert Bubble devs</p>
                          </div>
                        </a>

                        <a href={ROUTES.BUBBLE_APP_AUDIT} className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#eab308]">
                              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">App Audit</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">For existing Bubble apps</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

          {/* Client Stories */}
          <a
            href={ROUTES.CLIENT_STORIES}
            className={`text-[16px] font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-[#1a1a1a] hover:text-gray-600'}`}
          >
            Client stories
          </a>

            {/* For Builders Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('for-builders')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`flex items-center gap-1 text-[16px] font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-[#1a1a1a] hover:text-gray-600'}`}>
                For Builders
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'for-builders' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'for-builders' && (
                <motion.div
                  initial={{ opacity: 0, y: 4, rotateX: -10 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: 4, rotateX: -10 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full right-0 pt-2 w-max z-50 perspective-[2000px]"
                >
                  <div className="bg-white rounded-xl shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] border-none overflow-hidden ring-1 ring-black/5 min-w-[280px]">
                    <div className="p-6">
                      <div className="text-[14px] font-medium text-gray-500 uppercase tracking-wider mb-4">
                        Resources
                      </div>
                      
                      <div className="flex flex-col gap-5">
                        <a href="#" className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#14b8a6]">
                              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">Canvas</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">Our building tool</p>
                          </div>
                        </a>

                        <a href={ROUTES.PARTNERS} className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#ef4444]">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">Partner Program</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">Build with us</p>
                          </div>
                        </a>

                        <a href="#" className="group flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#3b82f6]">
                              <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                            </svg>
                          </div>
                          <div className="min-w-[140px]">
                            <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-black transition-colors mb-0 leading-none">Bootcamp</h3>
                            <p className="text-[14px] text-gray-500 font-normal leading-tight mt-1 whitespace-nowrap group-hover:text-black transition-colors">Learn to build</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <Button className="bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none">
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
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 lg:hidden flex flex-col gap-4 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          {/* About Dropdown */}
          <div>
            <button
              onClick={() => setOpenMobileDropdown(openMobileDropdown === 'about' ? null : 'about')}
              className="w-full flex items-center justify-between text-lg font-medium text-gray-900 py-2"
            >
              About
              <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileDropdown === 'about' && (
              <div className="pl-4 pt-2 pb-2 border-l-2 border-gray-100">
                <div className="text-[12px] font-medium text-gray-500 uppercase tracking-wider mb-3">Company</div>
                <div className="flex flex-col gap-4">
                  <a href={ROUTES.MISSION} className="flex items-start gap-3 group">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#0ea5e9] flex-shrink-0 mt-0.5">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">Our mission</h3>
                      <p className="text-[14px] text-gray-500">To set the new standard</p>
                    </div>
                  </a>
                  <a href={ROUTES.APPROACH} className="flex items-start gap-3 group">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5">
                      <path d="M3 4a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm2 0v12h10V4H5zm2 2h6v2H7V6zm0 4h6v2H7v-2zm0 4h4v2H7v-2z" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">Our approach</h3>
                      <p className="text-[14px] text-gray-500">How we work</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-start gap-3 group">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#8b5cf6] flex-shrink-0 mt-0.5">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">Our people</h3>
                      <p className="text-[14px] text-gray-500">Top 1% talent</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-start gap-3 group">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">Why Bubble</h3>
                      <p className="text-[14px] text-gray-500">Our builder of choice</p>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* What We Build Dropdown */}
          <div>
            <button
              onClick={() => setOpenMobileDropdown(openMobileDropdown === 'what-we-build' ? null : 'what-we-build')}
              className="w-full flex items-center justify-between text-lg font-medium text-gray-900 py-2"
            >
              What We Build
              <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'what-we-build' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileDropdown === 'what-we-build' && (
              <div className="pl-4 pt-2 pb-2 border-l-2 border-gray-100">
                <div className="text-[12px] font-medium text-gray-500 uppercase tracking-wider mb-3">Products</div>
                <div className="flex flex-col gap-4">
                  <a href={ROUTES.AI_APPLICATIONS} className="flex items-start gap-3 group">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#a855f7] flex-shrink-0 mt-0.5">
                      <path d="M16.5 7.5h-9v9h9v-9Z" />
                      <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">AI Apps</h3>
                      <p className="text-[14px] text-gray-500">Build on top of LLMs</p>
                    </div>
                  </a>
                  <a href={ROUTES.SAAS_PRODUCTS} className="flex items-start gap-3 group">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-0.5">
                      <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">SaaS Products</h3>
                      <p className="text-[14px] text-gray-500">Launch a software startup</p>
                    </div>
                  </a>
                  <a href={ROUTES.MARKETPLACES} className="flex items-start gap-3 group">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">Marketplaces</h3>
                      <p className="text-[14px] text-gray-500">Connect buyers & sellers</p>
                    </div>
                  </a>
                  <a href={ROUTES.INTERNAL_TOOLS} className="flex items-start gap-3 group">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5">
                      <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">Internal Tools</h3>
                      <p className="text-[14px] text-gray-500">Manage business ops</p>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Industry Dropdown */}
          <div>
            <button
              onClick={() => setOpenMobileDropdown(openMobileDropdown === 'industry' ? null : 'industry')}
              className="w-full flex items-center justify-between text-lg font-medium text-gray-900 py-2"
            >
              Industry
              <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'industry' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileDropdown === 'industry' && (
              <div className="pl-4 pt-2 pb-2 border-l-2 border-gray-100">
                <div className="text-[12px] font-medium text-gray-500 uppercase tracking-wider mb-3">Industry</div>
                <div className="flex flex-col gap-4">
                  <a href={ROUTES.TECHNOLOGY_AND_SOFTWARE} className="flex items-start gap-3 group">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#6366f1] flex-shrink-0 mt-0.5">
                      <path fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">Technology & Software</h3>
                      <p className="text-[14px] text-gray-500">Tech products & platforms</p>
                    </div>
                  </a>
                  <a href={ROUTES.INDUSTRIAL_AND_MANUFACTURING} className="flex items-start gap-3 group">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5">
                      <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">Industrial & Manufacturing</h3>
                      <p className="text-[14px] text-gray-500">Operations & supply chain</p>
                    </div>
                  </a>
                  <a href={ROUTES.PUBLIC_SECTOR_AND_NONPROFIT} className="flex items-start gap-3 group">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#0ea5e9] flex-shrink-0 mt-0.5">
                      <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                      <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">Public Sector & Nonprofit</h3>
                      <p className="text-[14px] text-gray-500">Government & social impact</p>
                    </div>
                  </a>
                  <a href={ROUTES.FINANCIAL_SERVICES} className="flex items-start gap-3 group">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5">
                      <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                      <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
                      <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">Financial Services</h3>
                      <p className="text-[14px] text-gray-500">Fintech & banking solutions</p>
                    </div>
                  </a>
                  <a href={ROUTES.HEALTHCARE} className="flex items-start gap-3 group">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#ef4444] flex-shrink-0 mt-0.5">
                      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">Healthcare</h3>
                      <p className="text-[14px] text-gray-500">Health & life sciences</p>
                    </div>
                  </a>
                  <a href={ROUTES.CONSUMER_AND_RETAIL} className="flex items-start gap-3 group">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#ec4899] flex-shrink-0 mt-0.5">
                      <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">Consumer & Retail</h3>
                      <p className="text-[14px] text-gray-500">E-commerce & retail</p>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div>
            <button
              onClick={() => setOpenMobileDropdown(openMobileDropdown === 'services' ? null : 'services')}
              className="w-full flex items-center justify-between text-lg font-medium text-gray-900 py-2"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileDropdown === 'services' && (
              <div className="pl-4 pt-2 pb-2 border-l-2 border-gray-100">
                <div className="text-[12px] font-medium text-gray-500 uppercase tracking-wider mb-3">Services</div>
                <div className="flex flex-col gap-4">
                  <a href={ROUTES.BUBBLE_AGENCY} className="flex items-start gap-3 group">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#6366f1] flex-shrink-0 mt-0.5">
                      <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">Agency</h3>
                      <p className="text-[14px] text-gray-500">Full-service team</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-start gap-3 group">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#f43f5e] flex-shrink-0 mt-0.5">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">Flex</h3>
                      <p className="text-[14px] text-gray-500">Expert Bubble devs</p>
                    </div>
                  </a>
                  <a href={ROUTES.BUBBLE_APP_AUDIT} className="flex items-start gap-3 group">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#eab308] flex-shrink-0 mt-0.5">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">App Audit</h3>
                      <p className="text-[14px] text-gray-500">For existing Bubble apps</p>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Client Stories - No Dropdown */}
          <a href={ROUTES.CLIENT_STORIES} className="text-lg font-medium text-gray-900 py-2">
            Client Stories
          </a>

          {/* For Builders Dropdown */}
          <div>
            <button
              onClick={() => setOpenMobileDropdown(openMobileDropdown === 'for-builders' ? null : 'for-builders')}
              className="w-full flex items-center justify-between text-lg font-medium text-gray-900 py-2"
            >
              For Builders
              <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'for-builders' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileDropdown === 'for-builders' && (
              <div className="pl-4 pt-2 pb-2 border-l-2 border-gray-100">
                <div className="text-[12px] font-medium text-gray-500 uppercase tracking-wider mb-3">Resources</div>
                <div className="flex flex-col gap-4">
                  <a href="#" className="flex items-start gap-3 group">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">Canvas</h3>
                      <p className="text-[14px] text-gray-500">Our building tool</p>
                    </div>
                  </a>
                  <a href={ROUTES.PARTNERS} className="flex items-start gap-3 group">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#ef4444] flex-shrink-0 mt-0.5">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">Partner Program</h3>
                      <p className="text-[14px] text-gray-500">Build with us</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-start gap-3 group">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5">
                      <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                    </svg>
                    <div>
                      <h3 className="text-[16px] font-medium text-gray-900 mb-0.5">Bootcamp</h3>
                      <p className="text-[14px] text-gray-500">Learn to build</p>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          <Button className="w-full bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] pb-2 pt-2.5 text-[16px] font-medium leading-none">Talk to us</Button>
        </div>
      )}
    </nav>
  );
};


