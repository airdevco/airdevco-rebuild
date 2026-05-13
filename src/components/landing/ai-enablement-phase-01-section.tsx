"use client";

import {
  Calculator,
  LayoutGrid,
  Network,
  Route,
} from "lucide-react";
import { AiEnablementPhaseSection } from "./ai-enablement-phase-section";

const PHASE_01_CONTENT = {
  phaseLabel: "PHASE 01",
  headline: "First, we figure out where AI actually fits.",
  intro:
    "Most AI projects fail not because the technology doesn't work, but because it gets pointed at the wrong problem. Before we build anything, we spend time inside your business — talking to the people who do the work, mapping how things actually flow, and finding the places where AI moves the needle in a way you'll feel.",
  whatWeDo: [
    {
      num: "01",
      title: "Stakeholder interviews",
      body: "We talk to leadership, frontline teams, and the people stuck doing the most repetitive work. The best AI opportunities usually surface in the gap between what executives think happens and what actually happens.",
    },
    {
      num: "02",
      title: "Workflow and process mapping",
      body: "We document how work moves through your organization today, where the friction is, and what data exists at each step.",
    },
    {
      num: "03",
      title: "Technical feasibility assessment",
      body: "Not every promising opportunity is buildable with current AI. We tell you which ones are real, which are 12 months away, and which aren't worth chasing.",
    },
    {
      num: "04",
      title: "Build vs. buy vs. wait analysis",
      body: "Sometimes the right answer is a custom build. Sometimes it's an off-the-shelf tool. Sometimes it's holding off until the technology matures. We tell you which is which.",
    },
  ],
  whatYouGet: [
    {
      icon: LayoutGrid,
      title: "A prioritized opportunity map",
      body: "Every AI use case we identified, scored on impact, feasibility, and effort.",
    },
    {
      icon: Route,
      title: "A recommended roadmap",
      body: "Specific projects, sequenced by what to build first and why.",
    },
    {
      icon: Calculator,
      title: "ROI estimates",
      body: "Realistic numbers, not consulting-deck fantasy.",
    },
    {
      icon: Network,
      title: "Technical architecture",
      body: "What gets built, how it integrates with existing systems, and what your team needs to maintain it.",
    },
  ],
  callout:
    "Many clients hire us just for this phase, then take the roadmap to their internal team. Either way works — we're not trying to lock you into a build.",
} as const;

export function AiEnablementPhase01Section() {
  return <AiEnablementPhaseSection {...PHASE_01_CONTENT} />;
}
