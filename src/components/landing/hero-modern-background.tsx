import { motion } from "framer-motion";

export const HeroModernBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-gradient-to-b from-slate-50 to-white">
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-30 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(147, 197, 253, 0.3) 50%, transparent 100%)'
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-20 -right-40 w-[600px] h-[600px] rounded-full opacity-25 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(196, 181, 253, 0.3) 50%, transparent 100%)'
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-0 left-1/3 w-[450px] h-[450px] rounded-full opacity-20 blur-[90px]"
        style={{
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.6) 0%, rgba(165, 243, 252, 0.3) 50%, transparent 100%)'
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 100 Q 400 150, 800 100 T 1600 100"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 0.5 }
          }}
        />
        <motion.path
          d="M0 300 Q 400 250, 800 300 T 1600 300"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 2.5, ease: "easeInOut", delay: 0.3 },
            opacity: { duration: 0.5, delay: 0.3 }
          }}
        />
      </svg>

      {/* Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};


