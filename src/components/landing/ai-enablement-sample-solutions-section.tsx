"use client";

import type { ReactNode } from "react";

const CARD_SHELL =
  "flex h-full flex-col overflow-hidden rounded-[26px] border border-[#E5ECF6] bg-white p-8 shadow-[0_24px_70px_-28px_rgba(18,101,239,0.28)]";

const MOCK_CANVAS = "mb-5 min-h-[132px] rounded-xl border border-[#E5ECF6] bg-[#F0F4F8] p-3 sm:p-4";

type SolutionCard = {
  index: string;
  title: string;
  description: string;
  graphic: ReactNode;
};

function GraphicCopilots() {
  return (
    <div className={`graphic-copilot-mock ${MOCK_CANVAS} flex flex-col gap-2`}>
      <style>{`
        @keyframes graphic-copilot-dot {
          0%, 70%, 100% { transform: translateY(0); opacity: 0.35; }
          35% { transform: translateY(-3px); opacity: 1; }
        }
        .graphic-copilot-mock .copilot-dot {
          animation: graphic-copilot-dot 1.05s ease-in-out infinite;
        }
        .graphic-copilot-mock .copilot-dot:nth-child(1) { animation-delay: 0s; }
        .graphic-copilot-mock .copilot-dot:nth-child(2) { animation-delay: 0.2s; }
        .graphic-copilot-mock .copilot-dot:nth-child(3) { animation-delay: 0.4s; }
      `}</style>
      <div className="self-end max-w-[min(100%,14rem)] rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-none bg-[#3D4A5C] px-2.5 py-2 text-[10px] leading-snug text-white/95 sm:max-w-[min(100%,15rem)] sm:text-[11px]">
        Draft a proposal for Acme Corp based on our discovery call notes.
      </div>
      <div className="w-fit max-w-full self-start rounded-tl-md rounded-tr-md rounded-br-md rounded-bl-none border border-[#E5ECF6] bg-white px-2.5 py-2.5">
        <div className="flex items-center gap-1">
          <span className="copilot-dot size-1.5 shrink-0 rounded-full bg-[#94A3B8]" />
          <span className="copilot-dot size-1.5 shrink-0 rounded-full bg-[#94A3B8]" />
          <span className="copilot-dot size-1.5 shrink-0 rounded-full bg-[#94A3B8]" />
        </div>
      </div>
    </div>
  );
}

function GraphicDocumentPipeline() {
  const rows = [
    { label: "Party", value: "Acme Inc." },
    { label: "Amount", value: "$248,500" },
    { label: "Term", value: "24 mo." },
  ] as const;

  return (
    <div className={`${MOCK_CANVAS} flex min-w-0 max-w-full flex-row items-center gap-1.5 sm:gap-2`}>
      <div className="flex w-[5.65rem] shrink-0 flex-col rounded-lg border border-[#E5ECF6] bg-white px-1.5 py-1.5 sm:w-[6rem] sm:px-2 sm:py-2">
        <div className="mb-1.5 space-y-1 sm:mb-2">
          <div className="h-px w-full bg-[#E8ECF1]" />
          <div className="h-px w-[72%] bg-[#E8ECF1]" />
        </div>
        <p className="text-center text-[8px] font-medium leading-snug text-[#64748B] sm:text-[9px]">
          contract_v3.pdf
        </p>
      </div>
      <span className="shrink-0 pb-0.5 text-xs font-medium leading-none text-[#1265EF] sm:text-sm" aria-hidden>
        →
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex min-w-0 items-center justify-between gap-1 rounded-md border border-[#E5ECF6] bg-white px-1.5 py-1 sm:gap-1.5 sm:px-2 sm:py-1.5"
          >
            <span className="shrink-0 font-normal text-[#94A3B8] text-[8px] sm:text-[9px]">{row.label}</span>
            <span className="min-w-0 flex-1 text-right text-[8px] font-bold leading-tight text-[#0D2350] break-words sm:text-[9px]">
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GraphicSupport() {
  return (
    <div className={`${MOCK_CANVAS} flex flex-row items-center justify-between gap-3`}>
      <div>
        <div className="text-3xl font-bold tracking-tight text-[#0D2350] sm:text-4xl">62%</div>
        <div className="mt-1 max-w-[7rem] text-[10px] leading-snug text-[#64748B] sm:text-[11px]">
          tickets resolved without escalation
        </div>
      </div>
      <div className="flex shrink-0 flex-col gap-1.5">
        {["Shipping", "Returns", "Account", "Billing"].map((label, i) => (
          <div key={label} className="flex items-center gap-1.5">
            <span className="w-10 text-[9px] text-[#94A3B8]">{label}</span>
            <div
              className="h-1.5 rounded-full bg-[#1265EF]/85"
              style={{ width: `${48 + i * 10}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function GraphicProductAI() {
  return (
    <div className={`${MOCK_CANVAS} flex flex-col gap-2`}>
      <div className="rounded-lg border border-[#E5ECF6] bg-white px-2 py-1.5 text-[10px] text-[#64748B] sm:text-[11px]">
        show me Q3 marketing performance <span className="text-[#1265EF]">|</span>
      </div>
      <div className="space-y-1.5 pt-1">
        <div className="h-1.5 rounded-full bg-[#E2E8F0]" style={{ width: "92%" }} />
        <div className="h-1.5 rounded-full bg-[#E2E8F0]" style={{ width: "78%" }} />
        <div className="h-1.5 rounded-full bg-[#E2E8F0]" style={{ width: "85%" }} />
        <div className="h-1.5 rounded-full bg-[#E2E8F0]" style={{ width: "64%" }} />
      </div>
    </div>
  );
}

function GraphicWorkflowAgents() {
  const rows = [
    { done: true, text: "Research target company" },
    { done: true, text: "Draft outreach email" },
    { done: false, pending: true, text: "Awaiting your approval" },
    { done: false, text: "Send + log to CRM" },
  ] as const;
  return (
    <div className={`${MOCK_CANVAS} flex flex-col gap-2 text-[10px] text-[#475569] sm:text-[11px]`}>
      {rows.map((row) => (
        <div key={row.text} className="flex items-center gap-2">
          {row.done ? (
            <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[#1265EF] text-[9px] text-white">
              ✓
            </span>
          ) : row.pending ? (
            <span className="size-4 shrink-0 rounded-full border-2 border-[#1265EF] bg-[#1265EF]/15" />
          ) : (
            <span className="size-4 shrink-0 rounded-full border border-[#CBD5E1]" />
          )}
          <span className={row.pending ? "font-medium text-[#0D2350]" : ""}>{row.text}</span>
        </div>
      ))}
    </div>
  );
}

function GraphicDataReporting() {
  return (
    <div className={`${MOCK_CANVAS} flex flex-col gap-2`}>
      <div className="rounded-lg border border-[#E5ECF6] bg-white px-2 py-1.5 text-[10px] italic text-[#64748B] sm:text-[11px]">
        &ldquo;revenue by region, last 6 months&rdquo;
      </div>
      <div className="flex h-16 items-end justify-center gap-1.5 px-2">
        {[
          { h: "h-7" },
          { h: "h-11" },
          { h: "h-8" },
          { h: "h-14" },
          { h: "h-9" },
        ].map(({ h }, i) => (
          <div key={i} className={`w-2.5 rounded-t bg-[#1265EF]/90 sm:w-3 ${h}`} />
        ))}
      </div>
    </div>
  );
}

const SOLUTION_CARDS: SolutionCard[] = [
  {
    index: "01",
    title: "Internal copilots",
    description:
      "AI assistants embedded in the tools your team already uses. Sales reps that get instant proposal drafts. Support teams that find answers faster. Ops teams that stop copy-pasting between systems.",
    graphic: <GraphicCopilots />,
  },
  {
    index: "02",
    title: "Document pipelines",
    description:
      "Automated extraction, classification, and routing for the contracts, invoices, applications, and forms that currently eat human hours.",
    graphic: <GraphicDocumentPipeline />,
  },
  {
    index: "03",
    title: "Support automation",
    description:
      "AI that handles the repetitive 60% of tickets, escalates the hard ones to humans with full context, and gets smarter as it goes.",
    graphic: <GraphicSupport />,
  },
  {
    index: "04",
    title: "AI inside your product",
    description:
      "Embedded intelligence — search that understands intent, summaries that save time, recommendations that drive engagement. Built into the product your customers already use.",
    graphic: <GraphicProductAI />,
  },
  {
    index: "05",
    title: "Workflow agents",
    description:
      "Multi-step automations that move work between systems — research, draft, route, follow up — with human approval at the checkpoints that matter.",
    graphic: <GraphicWorkflowAgents />,
  },
  {
    index: "06",
    title: "Data & reporting",
    description:
      "Natural-language access to your business data. Ask a question, get a chart. No more waiting on the analytics team for every ad-hoc request.",
    graphic: <GraphicDataReporting />,
  },
];

export function AiEnablementSampleSolutionsSection() {
  return (
    <section
      id="sample-solutions"
      className="scroll-mt-28 bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 max-w-4xl lg:mb-14">
          <span className="mb-3 block text-[15px] font-semibold uppercase tracking-wider text-[#1F3A8A]">
            SAMPLE SOLUTIONS
          </span>
          <h2 className="text-[32px] font-semibold leading-[1.12] tracking-tight text-[#1A1A1A] sm:text-[40px] md:text-[48px] md:leading-[1.1]">
            Here&apos;s what AI Enablement actually looks like in practice.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600 md:text-xl">
            Every engagement is custom, but these are the patterns we see most often.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTION_CARDS.map((card) => (
            <article key={card.index} className={CARD_SHELL}>
              <div className="mb-1">
                <span className="text-sm font-semibold tracking-wide text-[#9DAAC2] sm:text-base">
                  {card.index}
                </span>
              </div>
              {card.graphic}
              <h3 className="mb-3 text-2xl font-bold text-[#0D2350]">{card.title}</h3>
              <p className="grow text-[17px] leading-relaxed text-gray-600">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
