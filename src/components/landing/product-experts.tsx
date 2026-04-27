"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BriefcaseIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  CalendarDaysIcon,
  WindowIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";

const EXPERTS = [
  {
    name: "Mike W.",
    image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1767146211465x589311195573718900/mike.png",
    stats: [
      { icon: BriefcaseIcon, label: "Experience", value: "10+ years" },
      { icon: RocketLaunchIcon, label: "Products", value: "50+ products built" },
      { icon: AcademicCapIcon, label: "Education", value: "MBA from NYU Stern" }
    ]
  },
  {
    name: "Vlad L.",
    image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1767146222062x244957364883829700/vlad.png",
    stats: [
      { icon: BriefcaseIcon, label: "Experience", value: "10+ years" },
      { icon: RocketLaunchIcon, label: "Products", value: "100+ products built" },
      { icon: AcademicCapIcon, label: "Education", value: "MBA from Harvard Business School" }
    ]
  },
  {
    name: "Andrew H.",
    image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1767146234173x743718087852878200/andrew.png",
    stats: [
      { icon: BriefcaseIcon, label: "Experience", value: "10+ years" },
      { icon: RocketLaunchIcon, label: "Products", value: "100+ products built" },
      { icon: AcademicCapIcon, label: "Education", value: "MBA from Harvard Business School" }
    ]
  }
];

const DISCOVERY_STEPS = [
  {
    step: "01",
    icon: CalendarDaysIcon,
    title: "Kickoff & scoping",
    description:
      "We align on your goals, constraints, users, and success criteria so every decision that follows is grounded in context.",
  },
  {
    step: "02",
    icon: WindowIcon,
    title: "Prototype & specification",
    description:
      "A clickable, high-fidelity prototype alongside detailed technical docs, user stories, and database schemas.",
  },
  {
    step: "03",
    icon: ClipboardDocumentCheckIcon,
    title: "Review & handoff",
    description:
      "We walk you through every deliverable, incorporate feedback, and hand off build-ready assets your team can act on immediately.",
  },
];

// Circle diameter + card top-padding so circle sits centred on the card top edge
const CIRCLE_SIZE = 52; // px
const CIRCLE_HALF = CIRCLE_SIZE / 2; // 26px — line top value

function DiscoveryProcessSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div ref={ref} className="relative">
      {/*
        Connecting line — desktop only.
        top = CIRCLE_HALF (26px) so it bisects all three circles.
        left/right = half of one column width (1/6 of grid = ~16.666%)
        which lands at the horizontal centre of col 1 and col 3.
      */}
      <div
        className="hidden lg:block absolute h-px pointer-events-none"
        style={{
          top: CIRCLE_HALF,
          left: "calc(100% / 6)",
          right: "calc(100% / 6)",
          background: "linear-gradient(90deg, #1265EF40 0%, #1265EF80 50%, #1265EF40 100%)",
        }}
        aria-hidden
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DISCOVERY_STEPS.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            {/* Circle — centred horizontally, sits above card */}
            <div
              className="relative z-10 flex items-center justify-center rounded-full border border-[#1265EF]/25 bg-white shadow-[0_4px_20px_-4px_rgba(18,101,239,0.2)]"
              style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE, marginBottom: 16 }}
            >
              <step.icon className="h-5 w-5 text-[#1265EF]" />
            </div>

            {/* Card — left-aligned text */}
            <div className="w-full rounded-2xl border border-[#E5ECF6] bg-white p-6 shadow-[0_2px_12px_-4px_rgba(18,101,239,0.08)] flex flex-col text-left flex-1">
              <span className="mb-3 block text-[14px] font-semibold text-[#8C97A8] tabular-nums">
                {step.step}
              </span>
              <h3 className="mb-3 text-[24px] font-bold text-[#0A2540] leading-snug">
                {step.title}
              </h3>
              <p className="text-[18px] leading-relaxed text-[#425466]">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

interface ProductExpertsProps {
  /** When true, show the DISCOVERY header copy but hide the expert profile cards. */
  hideProfiles?: boolean;
  backgroundColor?: string;
  labelColor?: string;
  titleColor?: string;
  descriptionColor?: string;
}

export const ProductExperts = ({
  hideProfiles = false,
  backgroundColor = "#0A2540",
  labelColor = "#0AE4E3",
  titleColor = "#FFFFFF",
  descriptionColor = "#ADBDCC",
}: ProductExpertsProps = {}) => {
  return (
    <section className="py-24" style={{ backgroundColor }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[15px] font-semibold uppercase tracking-wider mb-3 block" style={{ color: labelColor }}>
            DISCOVERY
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6" style={{ color: titleColor }}>
            Led by product experts
          </h2>
          <p className="text-[20px] leading-relaxed" style={{ color: descriptionColor }}>
            Senior product managers who have seen hundreds of products come to life.<br />They'll help you refine your vision and build a roadmap for success.
          </p>
        </div>

        {hideProfiles && (
          <DiscoveryProcessSteps />
        )}

        {!hideProfiles && (
          <div className="grid md:grid-cols-3 gap-8">
            {EXPERTS.map((expert, index) => (
              <div key={index} className="bg-[#112F4E]/50 border border-[#1E3A5F] rounded-2xl p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4" style={{ border: 'none' }}>
                  <img 
                    src={expert.image} 
                    alt={expert.name} 
                    className="w-full h-full object-cover"
                    style={{ border: 'none', outline: 'none' }}
                  />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6">{expert.name}</h3>
                
                <div className="w-full space-y-4">
                  {expert.stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-4 bg-[#0A2540]/50 rounded-lg p-3 border border-[#1E3A5F]">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center text-[#0AE4E3]">
                        <stat.icon className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <p className="text-[13px] text-[#ADBDCC] uppercase tracking-wide font-medium">{stat.label}</p>
                        <p className="text-white font-semibold">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

