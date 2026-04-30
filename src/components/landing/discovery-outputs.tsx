import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MockupWireframe } from "./process-section";

export type DiscoveryOutputSlide = {
  title: string;
  description: string;
  animation: "prototype" | "documentation" | "validation";
};

const DEFAULT_INTRO =
  "We don't just give you a slide deck. We deliver tangible assets that prepare you for a successful build and launch.";

const OUTPUTS: DiscoveryOutputSlide[] = [
  {
    title: "Live prototype",
    description:
      "Experience your full product before a single line of code is written. We build a clickable, high-fidelity prototype you can use to pitch investors and validate with users.",
    animation: "prototype",
  },
  {
    title: "Written documentation",
    description:
      "Comprehensive technical specs, logic flows, user stories, and database schema that serve as the detailed blueprint for your build.",
    animation: "documentation",
  },
  {
    title: "Technical validation",
    description:
      "Detailed analysis of feasibility, AI proof-of-concepts, API integrations, and scalability requirements to de-risk your most complex features.",
    animation: "validation",
  },
];

export type DiscoveryOutputsProps = {
  prototypeScale?: number;
  /** When stacked under another `bg-[#0A2540]` block, subtle top separator */
  showTopBorder?: boolean;
};

const wireframeSpring = (delay: number) => ({
  type: "spring" as const,
  stiffness: 260,
  damping: 34,
  mass: 0.85,
  delay,
});

// Abstract UI Components for animations
const PrototypeAnimation = ({ scale = 1 }: { scale?: number }) => (
  <div className="relative w-full h-full bg-[#0A2540] flex items-center justify-center overflow-hidden px-5 py-8">
    <div className="w-full max-w-[300px]" style={{ transform: `scale(${scale})` }}>
      <MockupWireframe />
    </div>
  </div>
);

const DocumentationAnimation = ({ scale = 1 }: { scale?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.35, margin: "0px 0px -10% 0px" });

  return (
    <div ref={ref} className="relative w-full h-full bg-[#0A2540] flex items-center justify-center overflow-hidden px-5 py-8">
      <div className="absolute inset-0 bg-[radial-gradient(#1265EF15_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="w-full max-w-[300px]" style={{ transform: `scale(${scale})` }}>
        <motion.div
          className="relative w-full h-[232px] bg-[#112F4E] rounded-xl border border-[#1E3A5F] shadow-2xl overflow-hidden p-4 space-y-3"
          initial={{ y: 12, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 12, opacity: 0 }}
          transition={wireframeSpring(0.1)}
        >
        {/* Doc header */}
        <div className="flex gap-2 items-center border-b border-[#1E3A5F] pb-3">
          <div className="w-7 h-7 bg-[#1265EF]/20 border border-[#1265EF]/40 rounded-md flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#1265EF]" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex-1 space-y-1">
            <div className="text-[10px] text-[#ADBDCC] leading-none">Technical specifications</div>
            <div className="h-1.5 bg-[#1265EF]/25 rounded w-1/2" />
          </div>
        </div>

        {/* Documentation blocks */}
        <motion.div
          className="mt-1 w-full space-y-2"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={wireframeSpring(0.2)}
        >
          <div className="w-full rounded-md border border-[#1E3A5F] bg-[#112F4E]/35 p-2.5">
            <div className="text-[9px] text-[#ADBDCC]/90 mb-2">Database schema</div>
            <div className="space-y-1.5">
              <div className="h-1.5 bg-[#1265EF]/50 rounded w-[88%]" />
              <div className="h-1.5 bg-[#1265EF]/40 rounded w-[72%]" />
              <div className="h-1.5 bg-[#1265EF]/35 rounded w-[80%]" />
            </div>
          </div>

          <div className="w-full rounded-md border border-[#1E3A5F] bg-[#112F4E]/35 p-2.5">
            <div className="text-[9px] text-[#ADBDCC]/90 mb-2">User stories</div>
            <div className="space-y-1.5">
              <div className="h-1.5 bg-[#1265EF]/50 rounded w-[86%]" />
              <div className="h-1.5 bg-[#1265EF]/40 rounded w-[76%]" />
              <div className="h-1.5 bg-[#1265EF]/35 rounded w-[70%]" />
            </div>
          </div>

          <div className="w-full rounded-md border border-[#1E3A5F] bg-[#112F4E]/35 p-2.5">
            <div className="text-[9px] text-[#ADBDCC]/90 mb-2">Logic flows</div>
            <div className="space-y-1.5">
              <div className="h-1.5 bg-[#1265EF]/50 rounded w-[84%]" />
              <div className="h-1.5 bg-[#1265EF]/40 rounded w-[74%]" />
              <div className="h-1.5 bg-[#1265EF]/35 rounded w-[68%]" />
            </div>
          </div>
        </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const VALIDATION_CHECKS = [
  { label: "API Connectivity", delay: 0.1, color: "#1265EF" },
  { label: "Scalability", delay: 0.35, color: "#3557A6" },
  { label: "AI Proof-of-concept", delay: 0.6, color: "#1B4EC8" },
  { label: "Security & Compliance", delay: 0.85, color: "#2A63D4" },
];

const ValidationAnimation = ({ scale = 1 }: { scale?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.35, margin: "0px 0px -10% 0px" });

  return (
    <div ref={ref} className="relative w-full h-full bg-[#0A2540] flex items-center justify-center overflow-hidden px-5 py-8">
      <div className="absolute inset-0 bg-[radial-gradient(#1265EF15_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="w-full max-w-[300px]" style={{ transform: `scaleX(${scale}) scaleY(${scale * 0.9})` }}>
        <motion.div
          className="relative w-full bg-[#112F4E] rounded-xl border border-[#1E3A5F] shadow-2xl overflow-hidden p-4"
          initial={{ y: 12, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 12, opacity: 0 }}
          transition={wireframeSpring(0.05)}
        >
        {/* Header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#1E3A5F]">
          <div className="w-7 h-7 bg-[#1265EF]/15 border border-[#1265EF]/35 rounded-md flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#1265EF]" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-[9px] text-[#ADBDCC] mb-1">Technical validation</div>
            <div className="h-1.5 bg-[#1265EF]/25 rounded w-1/3" />
          </div>
          {/* Overall score badge */}
          <motion.div
            className="text-[9px] font-bold px-1.5 py-0.5 rounded border text-[#1265EF] border-[#1265EF]/40 bg-[#1265EF]/10"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
          >
            PASS
          </motion.div>
        </div>

        {/* Check rows */}
        <div className="space-y-3">
          {VALIDATION_CHECKS.map((check, i) => (
            <div key={i} className="flex items-center gap-3">
              {/* Status icon */}
              <div className="w-5 h-5 shrink-0 relative">
                {/* Spinner base (always visible briefly) */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-[#1E3A5F]"
                  initial={{ opacity: 1 }}
                  animate={isInView ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ delay: check.delay + 0.45, duration: 0.15 }}
                />
                {/* Spinning arc */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: `1.5px solid transparent`,
                    borderTopColor: check.color,
                    opacity: 0.8,
                  }}
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={isInView
                    ? [
                        { rotate: 0, opacity: 1 },
                        { rotate: 270, opacity: 1 },
                        { rotate: 270, opacity: 0 },
                      ]
                    : { rotate: 0, opacity: 0 }}
                  transition={{
                    times: [0, 0.75, 1],
                    duration: check.delay + 0.5,
                    delay: 0,
                    ease: "linear",
                  }}
                />
                {/* Check icon */}
                <motion.div
                  className="absolute inset-0 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${check.color}18`, border: `1px solid ${check.color}45` }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: check.delay + 0.45 }}
                >
                  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke={check.color} strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </div>

              {/* Label + bar */}
              <div className="flex-1 min-w-0">
                <motion.div
                  className="text-[10px] mb-1 font-medium"
                  style={{ color: "#ADBDCC" }}
                  initial={{ opacity: 0, x: -6 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
                  transition={{ delay: check.delay, duration: 0.3 }}
                >
                  {check.label}
                </motion.div>
                <div className="h-1 w-full bg-[#1E3A5F]/50 rounded overflow-hidden">
                  <motion.div
                    className="h-full rounded"
                    style={{ backgroundColor: check.color, opacity: 0.6 }}
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: `${72 + i * 6}%` } : { width: "0%" }}
                    transition={{ duration: 0.55, delay: check.delay + 0.45, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feasibility score */}
        <motion.div
          className="mt-4 pt-3 border-t border-[#1E3A5F] flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.1, duration: 0.4 }}
        >
          <span className="text-[10px] text-[#ADBDCC]">Feasibility score</span>
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((dot) => (
                <motion.div
                  key={dot}
                  className="w-2 h-2 rounded-sm"
                  style={{ backgroundColor: dot <= 4 ? "#1265EF" : "#1E3A5F" }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1.1 + dot * 0.07, type: "spring", stiffness: 280 }}
                />
              ))}
            </div>
            <span className="text-[10px] font-bold text-[#1265EF]">4/5</span>
          </div>
        </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export const DiscoveryOutputs = ({
  prototypeScale = 1,
  showTopBorder = false,
}: DiscoveryOutputsProps = {}) => {
  return (
    <section
      className={`py-24 bg-[#0A2540]${showTopBorder ? " border-t border-[#1E3A5F]" : ""}`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[15px] font-semibold text-[#0AE4E3] uppercase tracking-wider mb-3 block">
            DELIVERABLES
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
            What you get
          </h2>
          <p className="text-[20px] text-[#ADBDCC] leading-relaxed">{DEFAULT_INTRO}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {OUTPUTS.map((output, index) => (
            <div key={index} className="bg-[#112F4E]/50 border border-[#1E3A5F] rounded-2xl overflow-hidden flex flex-col h-full">
              <div className="h-60 w-full bg-[#0A2540]/45 border-b border-[#1E3A5F] overflow-hidden">
                {output.animation === "prototype" && <PrototypeAnimation scale={prototypeScale} />}
                {output.animation === "documentation" && <DocumentationAnimation scale={prototypeScale} />}
                {output.animation === "validation" && <ValidationAnimation scale={prototypeScale} />}
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-[24px] font-bold text-white mb-3">{output.title}</h3>
                <p className="text-[18px] text-[#ADBDCC] leading-relaxed">{output.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

