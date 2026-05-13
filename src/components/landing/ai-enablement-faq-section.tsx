"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "How is this different from a strategy consultancy or a dev shop?",
    answer:
      "Strategy firms hand you a roadmap and walk away. Dev shops want a fully-specced ticket before they'll start. We do both halves — figuring out what's worth building, then building it — which is also why our recommendations are realistic. We're not selling you a strategy that we'd struggle to execute.",
  },
  {
    question: "What if we've tried AI before and it didn't work?",
    answer:
      "Most stalled AI projects we see weren't technology failures. They were targeting the wrong problem, or they shipped a demo that couldn't survive real users, or they didn't account for adoption. We start by understanding what didn't work last time, and we design around the actual failure mode.",
  },
  {
    question: "Do we need to have our data organized before starting?",
    answer:
      "No. Part of Phase 1 is assessing your data — what you have, what's usable, what's missing. If data work needs to happen first, we'll tell you, and we can do that work as part of the engagement.",
  },
  {
    question: "Can we engage you for just discovery, or just implementation?",
    answer:
      "Yes to both. Many clients hire us only for Phase 1 and take the roadmap to internal teams. Others come to us with a roadmap already in hand and want us to build. The phases are designed to work together but they don't have to.",
  },
  {
    question: "How long does an engagement take?",
    answer:
      "Phase 1 is typically 3–6 weeks depending on the size of the organization. Phase 2 ranges from a few weeks for focused builds to several months for larger systems. We'll give you a timeline before you commit.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Phase 1 is a fixed-fee engagement scoped to your organization. Phase 2 is priced per project, based on scope. We don't bill hourly — you'll know what you're spending before we start.",
  },
  {
    question: "What about data security and model choice?",
    answer:
      "We're flexible. We work with all major model providers (Anthropic, OpenAI, Google, open-source) and we'll recommend the right one for your security, cost, and accuracy requirements. For sensitive data, we can build with self-hosted models or restricted-access deployments.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We document everything we build and hand it off cleanly. If you want us to keep iterating, we offer ongoing engagements. If you want to take it in-house, your team can — that's the goal.",
  },
] as const;

/** AI Enablement — FAQ pattern matches Bubble Development accordion. */
export function AiEnablementFaqSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <span className="mb-3 block text-[15px] font-semibold uppercase tracking-wider text-[#1F3A8A]">
            Common questions
          </span>
          <h2 className="mx-auto max-w-5xl text-[48px] font-semibold leading-none tracking-tight text-[#1a1a1a]">
            What people ask before they hire us.
          </h2>
        </div>

        <div className="mx-auto max-w-[800px]">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={item.question}
                value={`ai-enablement-faq-${i}`}
                className="border-b border-[#E2E8F0] bg-white last:border-0"
              >
                <AccordionTrigger className="items-center py-4 text-left text-[18px] font-medium text-[#1a1a1a] hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-3.5 text-[18px] leading-[29px] text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
