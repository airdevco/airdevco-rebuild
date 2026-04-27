"use client";

import { useEffect, useRef, useState } from "react";
import { SparklesIcon, UserIcon, UsersIcon } from "@heroicons/react/24/solid";

const PROCESS_LINE_CYCLE_MS = 7000;
const PROCESS_LINE_FILL_PORTION = 0.85;

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    human: {
      role: "Product Director",
      icon: "user",
      description:
        "Leads the conversations that uncover what you actually need — not just what you think you need. Challenges assumptions, navigates stakeholder politics, and defines a clear direction.",
    },
    ai: {
      description:
        "Generates competitive analysis, market research, and initial feature maps from conversation transcripts. Surfaces edge cases and patterns from 1,000+ past projects.",
    },
  },
  {
    number: "02",
    title: "Scoping",
    human: {
      role: "Product Director + Project Lead",
      icon: "users",
      description:
        "Makes the hard prioritization calls — what's in, what's out, what's deferred. Structures the build into phases that balance ambition with pragmatism.",
    },
    ai: {
      description:
        "Turns discovery notes into detailed requirements, user stories, and acceptance criteria. Maps dependencies, flags conflicts, and estimates timelines automatically.",
    },
  },
  {
    number: "03",
    title: "Design",
    human: {
      role: "UX Designer",
      icon: "user",
      description:
        "Defines how your product feels — the flows, the identity, the moments that make users trust it. Catches the UX friction that looks fine on paper but fails in practice.",
    },
    ai: {
      description:
        "Generates layout variations, responsive versions, and design system components at speed. Handles the production work so your Designer focuses on decisions, not pixels.",
    },
  },
  {
    number: "04",
    title: "Development",
    human: {
      role: "Developer",
      icon: "user",
      description:
        "Architects the system for scale, reviews every line of AI-generated code, and solves the hard problems AI can't. This is quality control and engineering judgment.",
    },
    ai: {
      description:
        "Writes the majority of the application code — front-end, back-end, database, tests, documentation. What used to take a team of eight now takes one senior developer and AI.",
    },
  },
  {
    number: "05",
    title: "Support",
    human: {
      role: "Project Lead + Developer",
      icon: "users",
      description:
        "Prioritizes what to fix, improve, or build next based on real usage. Provides ongoing strategic guidance as your product evolves.",
    },
    ai: {
      description:
        "Monitors performance, runs continuous regression tests, flags errors in real time, and keeps documentation current — all without anyone lifting a finger.",
    },
  },
];

export function ApproachProcessSection() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [fillProgress, setFillProgress] = useState(0);
  const [stepCenters, setStepCenters] = useState<number[]>([]);
  const [lineRange, setLineRange] = useState({ start: 8, end: 8 });

  useEffect(() => {
    let rafId = 0;
    const fillDurationMs = PROCESS_LINE_CYCLE_MS * PROCESS_LINE_FILL_PORTION;
    const startTime = performance.now();

    const animate = (now: number) => {
      const cycleElapsed = (now - startTime) % PROCESS_LINE_CYCLE_MS;
      const nextProgress = Math.min(cycleElapsed / fillDurationMs, 1);
      setFillProgress(nextProgress);
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    const measureTimeline = () => {
      const timeline = timelineRef.current;
      if (!timeline) return;

      const start = 8;
      const end = Math.max(timeline.offsetHeight - 8, start);
      const centers = stepRefs.current.map((stepEl) =>
        stepEl ? stepEl.offsetTop + stepEl.offsetHeight / 2 : Number.POSITIVE_INFINITY,
      );

      setLineRange({ start, end });
      setStepCenters(centers);
    };

    measureTimeline();

    const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measureTimeline) : null;
    if (resizeObserver) {
      if (timelineRef.current) resizeObserver.observe(timelineRef.current);
      stepRefs.current.forEach((stepEl) => {
        if (stepEl) resizeObserver.observe(stepEl);
      });
    }

    window.addEventListener("resize", measureTimeline);
    return () => {
      window.removeEventListener("resize", measureTimeline);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  const currentFillY = lineRange.start + (lineRange.end - lineRange.start) * fillProgress;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top content */}
        <div className="max-w-3xl mb-16">
          <p className="text-[#1e3a8a] font-semibold tracking-wide uppercase text-[15px] mb-3">
            Our process
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#1a1a1a] mb-6">
            Built for momentum
          </h2>
          <p className="text-[20px] text-[#425466] leading-relaxed max-w-2xl">
            From first discovery call to post-launch support, each phase pairs senior product judgment with AI execution. You get faster delivery, clearer decisions, and a product that scales without the usual handoff friction.
          </p>
        </div>

        {/* Steps */}
        <div ref={timelineRef} className="relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[#E2E8F0] hidden lg:block" />
          <div className="absolute left-[11px] top-2 bottom-2 w-px overflow-hidden pointer-events-none hidden lg:block">
            <div
              className="absolute left-0 top-0 bottom-0 w-px bg-[#1265EF] origin-top"
              style={{ transform: `scaleY(${fillProgress})` }}
            />
          </div>

          <div className="space-y-4 lg:space-y-5">
          {PROCESS_STEPS.map((step, index) => {
            const HumanRoleIcon = step.human.icon === "users" ? UsersIcon : UserIcon;
            const isFirstStep = index === 0;
            const isLastStep = index === PROCESS_STEPS.length - 1;
            const isStepPassed = currentFillY >= (stepCenters[index] ?? Number.POSITIVE_INFINITY);
            return (
              <div
                key={step.number}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className="lg:pl-12 relative"
              >
                {isFirstStep && (
                  <div className="absolute left-[11px] top-0 h-1/2 w-px bg-white hidden lg:block" />
                )}
                {isLastStep && (
                  <div className="absolute left-[11px] top-1/2 bottom-0 w-px bg-white hidden lg:block" />
                )}

                <div
                  className={`absolute z-10 left-[1px] top-1/2 -translate-y-1/2 w-[21px] h-[21px] rounded-full border-2 bg-white hidden lg:flex items-center justify-center ${
                    isStepPassed ? "border-[#1265EF]" : "border-[#E2E8F0]"
                  }`}
                >
                  {isStepPassed && <div className="w-2.5 h-2.5 rounded-full bg-[#1265EF]" />}
                </div>

                <div className="grid lg:grid-cols-[220px_1fr_1fr] rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  {/* Step identity */}
                  <div className="px-6 py-8 lg:px-8 lg:border-r border-gray-200 bg-[#F6F9FC] flex flex-col justify-start gap-1.5">
                    <span className="text-[14px] font-semibold text-[#8C97A8] tabular-nums">
                      {step.number}
                    </span>
                    <h2 className="text-[24px] lg:text-[26px] font-semibold text-[#1a1a1a] leading-snug">
                      {step.title}
                    </h2>
                  </div>

                {/* Human */}
                <div className="px-6 py-8 lg:px-8 border-t lg:border-t-0 lg:border-r border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <HumanRoleIcon className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="inline-flex h-6 items-center pt-[3px] text-[16px] font-semibold text-amber-700 leading-none">
                      {step.human.role}
                    </span>
                  </div>
                  <p className="text-[16px] text-gray-600 leading-relaxed">
                    {step.human.description}
                  </p>
                </div>

                {/* AI */}
                <div className="px-6 py-8 lg:px-8 border-t lg:border-t-0 border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <SparklesIcon className="w-3.5 h-3.5 text-[#1D3A8A] shrink-0" />
                    <span className="inline-flex h-6 items-center pt-[3px] text-[16px] font-semibold text-[#1D3A8A] leading-none">
                      AI
                    </span>
                  </div>
                  <p className="text-[16px] text-gray-600 leading-relaxed">
                    {step.ai.description}
                  </p>
                </div>
              </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
