import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const HeroBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-white">
      {/* 1. Base Image Background */}
      <div 
        className="absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage: `url("https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765569456596x522352130451563700/bg-2%20%281%29.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* White Fade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-0 pointer-events-none" />

      {/* 2. Floating Gradient Streak (Animated Left/Right) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="streak-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C084FC" stopOpacity="0" />
            <stop offset="15%" stopColor="#C084FC" stopOpacity="0.7" /> {/* Added Purple Back */}
            <stop offset="40%" stopColor="#60A5FA" stopOpacity="0.8" /> {/* Soft Blue */}
            <stop offset="70%" stopColor="#60A5FA" stopOpacity="0.7" />
            <stop offset="90%" stopColor="#22D3EE" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </linearGradient>

          <filter id="blur-streak" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="25" />
          </filter>
        </defs>

        {/* --- 1. The Glowing Gradient Streak (Bottom Left - Animated) --- */}
        <motion.path
          d="M-200 750 C 50 700, 300 550, 600 450"
          stroke="url(#streak-gradient)"
          strokeWidth="140"
          strokeLinecap="round"
          filter="url(#blur-streak)"
          initial={{ opacity: 0.7, x: 0 }}
          animate={{ 
            opacity: [0.7, 0.8, 0.7],
            x: [0, 80, 0, -30, 0],
            d: [
              "M-200 750 C 50 700, 300 550, 600 450",
              "M-200 760 C 120 710, 420 490, 620 440",
              "M-200 750 C 50 700, 300 550, 600 450"
            ]
          }}
          transition={{ 
            duration: 5, // Faster left/right floating
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </svg>

      {/* 3. Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply z-[2]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
