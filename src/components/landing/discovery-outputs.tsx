import { motion } from "framer-motion";

const OUTPUTS = [
  {
    title: "Live prototype",
    description: "Experience your full product before a single line of code is written. We build a clickable, high-fidelity prototype you can use to pitch investors and validate with users.",
    animation: "prototype"
  },
  {
    title: "Written documentation",
    description: "Comprehensive technical specs, logic flows, user stories, and database schema that serve as the detailed blueprint for your build.",
    animation: "documentation"
  },
  {
    title: "Technical validation",
    description: "Detailed analysis of feasibility, AI proof-of-concepts, API integrations, and scalability requirements to de-risk your most complex features.",
    animation: "validation"
  }
];

// Abstract UI Components for animations
const PrototypeAnimation = () => (
  <div className="relative w-full h-full bg-slate-50 flex items-center justify-center overflow-hidden">
    <motion.div 
      className="relative w-[70%] bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden"
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ maxHeight: '88%', aspectRatio: '4/3' }}
    >
      <div className="h-5 bg-slate-50 border-b border-slate-100 flex items-center px-2.5 gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
      </div>
      <div className="p-3 space-y-2">
        <div className="flex gap-2">
          <div className="w-1/3 space-y-1.5">
            <motion.div 
              className="h-14 bg-slate-100 rounded-md"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="h-2.5 bg-slate-100 rounded w-3/4" />
            <div className="h-2.5 bg-slate-100 rounded w-1/2" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-6 bg-blue-50 rounded w-full border border-blue-100" />
            <div className="grid grid-cols-2 gap-1.5">
              <div className="h-[72px] bg-slate-50 rounded border border-slate-100" />
              <div className="h-[72px] bg-slate-50 rounded border border-slate-100" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Cursor Animation */}
      <motion.div
        className="absolute w-3 h-3"
        animate={{ 
          x: [60, 120, 90, 60],
          y: [70, 110, 60, 70],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-blue-500 drop-shadow-md">
          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill="currentColor" stroke="white" strokeWidth="2" />
        </svg>
      </motion.div>
    </motion.div>
  </div>
);

const DocumentationAnimation = () => (
  <div className="relative w-full h-full bg-slate-50 flex items-center justify-center overflow-hidden">
    <motion.div 
      className="relative w-[70%] bg-white rounded-sm shadow-md border border-slate-200 p-4 space-y-2"
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ maxHeight: '90%' }}
    >
      {/* Document header */}
      <div className="flex gap-2 mb-3 items-center border-b border-slate-100 pb-2">
        <div className="w-6 h-6 bg-blue-50 rounded flex items-center justify-center text-blue-500 font-bold text-[10px]">DOC</div>
        <div className="space-y-1 flex-1">
          <div className="h-1.5 bg-slate-200 rounded w-1/2" />
          <div className="h-1 bg-slate-100 rounded w-1/3" />
        </div>
      </div>
      
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex gap-2 items-center">
          <div className="w-0.5 h-0.5 rounded-full bg-slate-300 flex-shrink-0" />
          <motion.div
            className="h-1 bg-slate-100 rounded w-full"
            initial={{ width: "0%" }}
            whileInView={{ width: `${Math.random() * 30 + 50}%` }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          />
        </div>
      ))}
      
      <div className="mt-3 p-2 bg-slate-50 rounded border border-slate-100">
        <div className="flex gap-2 mb-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <div className="h-1 bg-slate-200 rounded w-1/3" />
        </div>
        <div className="ml-2.5 space-y-0.5 border-l border-slate-200 pl-1.5">
          <div className="h-0.5 bg-slate-100 rounded w-3/4" />
          <div className="h-0.5 bg-slate-100 rounded w-1/2" />
        </div>
      </div>
    </motion.div>
  </div>
);

const ValidationAnimation = () => (
  <div className="relative w-full h-full bg-slate-50 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
    
    <div className="relative z-10 flex items-center gap-6">
      {/* Input */}
      <motion.div 
        className="w-16 h-16 bg-white rounded-lg shadow-sm border border-slate-200 flex flex-col items-center justify-center gap-1"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-6 h-6 rounded bg-slate-100" />
        <div className="h-1 w-8 bg-slate-200 rounded" />
      </motion.div>

      {/* Processing - Circle with checkmark */}
      <motion.div 
        className="w-16 h-16 bg-white rounded-full shadow-sm border border-slate-200 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
        >
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Output (Checkmark) */}
      <motion.div 
        className="w-16 h-16 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center"
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
        >
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

export const DiscoveryOutputs = () => {
  return (
    <section className="py-24 bg-[#F6F9FC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3 block">
            DELIVERABLES
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-6">
            What you get
          </h2>
          <p className="text-[20px] text-[#425466] leading-relaxed">
            We don't just give you a slide deck. We deliver tangible assets that prepare you for a successful build and launch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {OUTPUTS.map((output, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden flex flex-col h-full">
              <div className="h-60 w-full bg-slate-50 border-b border-slate-100 overflow-hidden">
                {output.animation === 'prototype' && <PrototypeAnimation />}
                {output.animation === 'documentation' && <DocumentationAnimation />}
                {output.animation === 'validation' && <ValidationAnimation />}
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-[24px] font-bold text-[#1a1a1a] mb-3">{output.title}</h3>
                <p className="text-[18px] text-gray-600 leading-relaxed">
                  {output.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

