import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface Stat {
  label: string;
  value: number | string;
  suffix?: string;
  decimals?: number;
}

interface GalleryItem {
  title: string;
  image: string;
}

interface WhoWeAreProps {
  label?: string;
  title?: string;
  description?: string;
  stats?: Stat[];
  items?: GalleryItem[];
  bgColor?: string;
  labelColor?: string;
  titleColor?: string;
  descriptionColor?: string;
}

const DEFAULT_STATS: Stat[] = [
  { label: "Client Projects", value: 1000, suffix: "+" },
  { label: "Team Size", value: 150, suffix: "+" },
  { label: "Building on Bubble", value: 10, suffix: " yrs" },
  { label: "On Clutch", value: 4.9, suffix: "", decimals: 1 },
];

const DEFAULT_ITEMS: GalleryItem[] = [
  { title: "Workflow Automation", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769429191897x436633841629032500/image1.webp" },
  { title: "Marketplace Platform", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6543cc2869811415b8e810a2_homeswap.webp" },
  { title: "Analytics Dashboard", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769429549134x328873006570567400/image3.webp" },
  { title: "Search Engine", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769430219522x941368570781668100/docseek1%20%281%29.webp" },
  { title: "Social Network", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6543cc27ee364f01aadbb1be_lens.webp" },
  { title: "Travel Platform", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769432626672x566179361881819840/aircal2.webp" },
  { title: "Company Profile", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769429678886x412652779463499500/imager2-2.webp" },
  { title: "Community Hub", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769431075653x923487208758857500/plyground.webp" },
  // Duplicating items to reach 15
  { title: "Workflow Automation", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769444557266x857893168824462500/cerebro.png" },
  { title: "Marketplace Platform", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769446640637x420605172794157100/ch.webp" },
  { title: "Analytics Dashboard", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769431327914x326072329645070460/craftly2.webp" },
  { title: "Search Engine", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769446581327x991888232717732400/kidsbook2.webp" },
  { title: "Social Network", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769444704254x747992525882827000/learnmate.webp" },
  { title: "Travel Platform", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6543cc273a280b98e26fd0b2_tourvista.webp" },
  { title: "Company Profile", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769446525143x563993953087865000/tax.webp" },
];

export const WhoWeAre = ({
  label = "Who we are",
  title = "Our mission is to set the new standard for building software",
  description = "by helping others launch scalable, secure, and performant products in a fraction of the time and cost of traditional development.",
  stats = DEFAULT_STATS,
  items = DEFAULT_ITEMS,
  bgColor = "#0A2540",
  labelColor = "#0AE4E3",
  titleColor = "#FFFFFF",
  descriptionColor = "#ADBDCC",
}: WhoWeAreProps = {}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
    };
    
    checkDesktop();
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    mediaQuery.addEventListener('change', checkDesktop);
    
    return () => mediaQuery.removeEventListener('change', checkDesktop);
  }, []);

  const handleMouseEnter = (idx: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(idx);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredIndex(null);
  };

  // Helper to calculate exact positioning and dimensions for 2x2 grid coverage
  const getExpandedPosition = (index: number) => {
    const col = index % 5;
    const row = Math.floor(index / 5);
    
    let leftOffset = '0';
    let topOffset = '0';
    
    if (col >= 3) {
      leftOffset = 'calc(-100% - 1rem - 2px)';
    }
    
    if (row === 2) {
      topOffset = 'calc(-100% - 1rem - 2px)';
    }

    return {
      left: leftOffset,
      top: topOffset,
      width: 'calc(200% + 1rem + 2px)',
      height: 'calc(200% + 1rem + 2px)',
    };
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: bgColor }}>
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <div className="text-[15px] font-semibold uppercase tracking-wider mb-3" style={{ color: labelColor }}>
            {label}
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6" style={{ color: titleColor }}>
            {title}
          </h2>
          <p className="text-xl leading-relaxed" style={{ color: descriptionColor }}>
            {description}
          </p>
        </div>

        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {stats.map((stat, idx) => (
              <div key={idx} className="pt-8 pr-8 pb-8 pl-0">
                <div className="text-5xl font-bold mb-2 tracking-tight pl-4 pt-1 relative" style={{ color: titleColor, borderLeft: `2px solid ${labelColor}` }}>
                  {typeof stat.value === 'number' && stat.decimals ? stat.value.toFixed(stat.decimals) : stat.value}{stat.suffix}
                </div>
                <div className="font-medium pl-4" style={{ color: descriptionColor }}>{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 5x3 Full Width Grid Gallery */}
      {items && items.length > 0 && (
        <div className="w-full px-4 overflow-hidden">
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 auto-rows-fr min-h-[480px] md:min-h-[540px] lg:h-[480px]">
            {items.map((item, idx) => {
              const expandedPos = getExpandedPosition(idx);
              
              return (
                <div 
                  key={idx} 
                  className="relative rounded-2xl bg-[#112F4E] border border-[#1E3A5F] overflow-hidden lg:overflow-visible min-h-[100px]"
                  onMouseEnter={() => {
                    if (isDesktop) {
                      handleMouseEnter(idx);
                    }
                  }}
                  onMouseLeave={() => {
                    if (isDesktop) {
                      handleMouseLeave();
                    }
                  }}
                  style={{ zIndex: hoveredIndex === idx ? 100 : 1 }}
                >
                  {/* Base Image - Always visible */}
                  <div className="w-full h-full rounded-2xl overflow-hidden absolute inset-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className={`w-full h-full ${idx === 11 ? "object-cover object-center" : "object-cover object-top"}`}
                      style={{ 
                        opacity: hoveredIndex === idx && isDesktop ? 0 : 1 
                      }}
                    />
                  </div>
                  
                  {/* Expansion Overlay - Desktop Only (lg and above) */}
                  <AnimatePresence mode="wait">
                    {hoveredIndex === idx && (
                      <motion.div
                        layoutId={`expanded-card-${idx}`}
                        className="hidden lg:block absolute overflow-hidden rounded-2xl shadow-2xl bg-[#112F4E] border border-[#1E3A5F] pointer-events-none"
                        initial={{ 
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          opacity: 0.8
                        }}
                        animate={{ 
                          top: expandedPos.top,
                          left: expandedPos.left,
                          width: expandedPos.width,
                          height: expandedPos.height,
                          opacity: 1,
                          boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.7)"
                        }}
                        exit={{ 
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          opacity: 0,
                          transition: { duration: 0.15, ease: "easeOut" } 
                        }}
                        transition={{ 
                          type: "spring",
                          stiffness: 250,
                          damping: 28,
                          mass: 0.5
                        }}
                        style={{ zIndex: 200 }}
                      >
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className={`w-full h-full ${idx === 11 ? "object-cover object-center" : "object-cover object-top"}`}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};


