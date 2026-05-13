"use client";

/**
 * Phase 02 — build / ship. Edit this file only; Phase 01 lives in `ai-enablement-phase-01-section.tsx`.
 */
import {
  BadgeCheck,
  FileStack,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { AiEnablementPhaseSection } from "./ai-enablement-phase-section";

const PHASE_02_CONTENT = {
  phaseLabel: "PHASE 02",
  headline: "Then we actually build it.",
  intro:
    "This is where most AI engagements fall apart. Strategy firms hand you a deck and disappear. Dev shops want a fully-specced ticket before they'll write a line of code. We close that gap — taking the roadmap from Phase 1 (or one you bring us) and shipping production software that solves the problem.",
  whatWeDo: [
    {
      num: "01",
      title: "Custom AI applications",
      body: "Full-stack software with AI integrated where it earns its place — internal tools, customer-facing features, new products.",
    },
    {
      num: "02",
      title: "AI integrated into existing systems",
      body: "Most of the value is unlocked by adding AI to software you already run. We work with your stack, not around it.",
    },
    {
      num: "03",
      title: "Internal copilots and assistants",
      body: "Tools your team uses every day — for sales, support, ops, legal, finance — built around your actual workflows and data.",
    },
    {
      num: "04",
      title: "Document and data pipelines",
      body: "Extraction, classification, routing, and analysis of the unstructured content your business runs on.",
    },
    {
      num: "05",
      title: "Agentic workflows",
      body: "Multi-step automations that move work between systems, with human review at the right checkpoints.",
    },
  ],
  whatYouGet: [
    {
      icon: Sparkles,
      title: "AI-native engineering",
      body: "Our team uses Claude Code and similar tools as part of how we build — which is why we ship faster than firms that haven't figured out how to integrate AI into their own process.",
    },
    {
      icon: BadgeCheck,
      title: "Production from day one",
      body: "Evals, monitoring, error handling, and security aren't bolted on at the end. They're part of the build.",
    },
    {
      icon: FileStack,
      title: "Built to be maintained",
      body: "We document, we hand off cleanly, and we don't write code your team can't touch after we leave.",
    },
    {
      icon: RefreshCw,
      title: "Tight feedback loops",
      body: "Weekly demos, shared workspaces, and a project portal so you always know what's shipping and what's blocked.",
    },
  ],
  callout:
    "Already have a roadmap? Skip Phase 1. We can start building as soon as we agree on scope.",
};

export function AiEnablementPhase02Section() {
  return (
    <AiEnablementPhaseSection
      {...PHASE_02_CONTENT}
      showTopBorder={false}
      sectionClassName="bg-[#F6F9FC]"
      leftColumnLabel="WHAT WE BUILD"
      cardClassName="bg-white"
      calloutShowMark={false}
      calloutCentered
    />
  );
}
