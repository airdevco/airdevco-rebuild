import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

const DEFAULT_BUSINESS_TYPES = [
  {
    title: "SaaS",
    description: "Subscription platforms that scale with your customers. From simple tools to complex multi-tenant systems.",
    link: "#",
    iconColor: "#ff6b35",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Marketplaces",
    description: "Two-sided platforms that connect buyers and sellers with matching, payments, and everything in between.",
    link: "#",
    iconColor: "#06b6d4",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </svg>
    ),
  },
  {
    title: "AI Applications",
    description: "Products powered by machine learning, automation, and intelligent workflows. Built for real business problems.",
    link: "#",
    iconColor: "#a855f7",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M16.5 7.5h-9v9h9v-9Z" />
        <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Internal Tools",
    description: "Custom software for your team. Replace spreadsheets and manual processes with something that actually works.",
    link: "#",
    iconColor: "#10b981",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Portals",
    description: "Secure spaces for customers, partners, or vendors to access information, submit requests, and get things done.",
    link: "#",
    iconColor: "#1265EF",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "ERPs",
    description: "Operations software tailored to how your business actually runs. Inventory, orders, workflows, reporting.",
    link: "#",
    iconColor: "#f59e0b",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
      </svg>
    ),
  },
];

interface BusinessType {
  title: string;
  description: string;
  link: string;
  iconColor: string;
  icon: React.ReactNode;
}

interface BusinessTypesProps {
  label?: string;
  title?: string;
  description?: string;
  items?: BusinessType[];
}

export const BusinessTypes = ({ 
  label = "WHAT WE BUILD",
  title = "Deep expertise across product types",
  description = "1,000+ completed builds means we've seen most kinds of products before. Here's what we build most often.",
  items = DEFAULT_BUSINESS_TYPES
}: BusinessTypesProps = {}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        container.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 380 + 24; // Card width + gap
      const scrollAmount = cardWidth;
      
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-24 bg-[#f6f9fc] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
              {label}
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-6 whitespace-nowrap">
              {title}
            </h2>
            <p className="text-[20px] text-[#425466] leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-9 h-9 rounded-full bg-white flex items-center justify-center transition-all ${
                canScrollLeft 
                  ? 'text-[#1a1a1a] hover:bg-gray-50 cursor-pointer' 
                  : 'text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-9 h-9 rounded-full bg-white flex items-center justify-center transition-all ${
                canScrollRight 
                  ? 'text-[#1a1a1a] hover:bg-gray-50 cursor-pointer' 
                  : 'text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-12 pt-4 scrollbar-hide scroll-smooth"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            paddingLeft: 'max(24px, calc((100vw - 1200px) / 2 + 24px))',
            paddingRight: 'max(24px, calc((100vw - 1200px) / 2 + 24px))',
            marginTop: '-16px'
          }}
        >
          {items.map((type, index) => (
            <div 
              key={index} 
              className="group flex-shrink-0 w-[300px] md:w-[380px] h-[300px] md:h-[280px] bg-white rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08),0_16px_32px_rgba(0,0,0,0.12)] flex flex-col transition-all duration-300 hover:scale-105 hover:z-10 overflow-hidden"
            >
              {/* Top Border Line */}
              <div 
                className="h-2 w-full" 
                style={{ 
                  backgroundColor: type.iconColor,
                  minHeight: '8px',
                  display: 'block'
                }} 
              />
              
              <div className="p-6 md:p-8 flex flex-col h-full bg-white">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="flex items-center" style={{ color: type.iconColor }}>
                    {type.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-[#1a1a1a] leading-tight">{type.title}</h3>
                </div>
                <p className="text-[18px] text-[#425466] leading-relaxed mb-4 md:mb-6 flex-1">
                  {type.description}
                </p>
                
                {/* Learn more link */}
                <a 
                  href={type.link} 
                  className="text-[16px] font-medium text-[#1265EF] hover:text-[#1a1a1a] transition-colors flex items-center gap-1.5 group/link"
                >
                  Learn more
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                </a>
                
                {/* Logo Grid - Hidden */}
                <div className="mt-auto pb-0 hidden">
                  {/* Top Border Line */}
                  <div className="border-t border-gray-200 mb-3" />
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((logoIndex) => (
                      <div
                        key={logoIndex}
                        className="flex items-center justify-center"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg"
                          alt="Logo placeholder"
                          className="h-4 w-auto grayscale opacity-60"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
