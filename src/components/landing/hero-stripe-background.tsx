import { motion } from "framer-motion";

export const HeroStripeBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-visible pointer-events-none">
      {/* Main diagonal gradient shape that extends beyond hero */}
      <motion.div
        className="absolute -inset-y-40 -inset-x-10 w-[120%] h-[150%]"
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(99, 102, 241, 0.15) 0%,
              rgba(168, 85, 247, 0.15) 15%,
              rgba(59, 130, 246, 0.22) 35%,
              rgba(147, 197, 253, 0.15) 55%,
              rgba(219, 234, 254, 0.08) 75%,
              rgba(255, 255, 255, 0) 100%
            )
          `,
          transform: 'rotate(-6deg)',
          transformOrigin: 'top left',
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary gradient layer for depth */}
      <motion.div
        className="absolute top-0 right-0 w-[60%] h-[120%]"
        style={{
          background: `
            radial-gradient(
              ellipse at top right,
              rgba(99, 102, 241, 0.12) 0%,
              rgba(139, 92, 246, 0.08) 30%,
              rgba(255, 255, 255, 0) 60%
            )
          `,
        }}
        animate={{
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle accent glow */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[40%] h-[40%] blur-[100px]"
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(59, 130, 246, 0.25) 0%,
              rgba(147, 197, 253, 0.15) 40%,
              rgba(255, 255, 255, 0) 70%
            )
          `,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Fine grid overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #6366f1 1px, transparent 1px),
            linear-gradient(to bottom, #6366f1 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
};
