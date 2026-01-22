import { motion } from "framer-motion";

export const HeroPremiumBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-white pointer-events-none">
      {/* 1. Fluid Mesh Gradient - The "Aurora" Base */}
      <div className="absolute top-[-50%] left-[-50%] right-[-50%] bottom-[-50%] opacity-60">
        <motion.div 
          className="w-full h-full"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, 
              #EFF6FF 0deg, 
              #DBEAFE 60deg, 
              #F3E8FF 120deg, 
              #E0F2FE 180deg, 
              #FFFFFF 240deg, 
              #EFF6FF 300deg, 
              #DBEAFE 360deg
            )`,
            filter: 'blur(100px)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* 2. Floating Deep Glows for Contrast */}
      <motion.div
        className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-blue-400/10 blur-[80px] mix-blend-multiply"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[0%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-purple-400/10 blur-[80px] mix-blend-multiply"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* 3. Crisp Grid Overlay (Linear style) */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          // Mask to fade out the grid at the edges/bottom for a seamless look
          maskImage: 'radial-gradient(circle at 50% 0%, black 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 0%, black 40%, transparent 90%)'
        }}
      />

      {/* 4. Subtle Noise Texture (The "Premium" Feel) */}
      <div 
        className="absolute inset-0 z-20 opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* 5. Smooth Fade to Content */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white z-30" />
    </div>
  );
};


