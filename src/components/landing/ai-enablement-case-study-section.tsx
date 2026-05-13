"use client";

import Link from "next/link";

import { ROUTES } from "@/config/routes";

const TAGS = ["Logistics & ops", "Mid-market", "8-week build"] as const;

const RESULT_LINES = [
  "62% of tickets fully resolved by AI",
  "Avg. response time: 4.2hr → 90 sec",
  "$840k projected annual savings",
  "Now expanding to sales ops",
] as const;

/** Featured case block for AI Enablement — matches site typography and blues. */
export function AiEnablementCaseStudySection() {
  return (
    <section className="scroll-mt-28 bg-[#F6F9FC] py-20 lg:py-24" id="case-study">
      <div className="mx-auto max-w-[1200px] px-6">
        <span className="mb-4 block text-[15px] font-semibold uppercase tracking-wider text-[#1F3A8A]">
          Case study
        </span>

        <div className="relative overflow-hidden rounded-[26px] border border-[#E5ECF6] bg-white shadow-[0_24px_70px_-28px_rgba(18,101,239,0.28)]">
          <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#1265EF]" aria-hidden />

          <div className="relative border-b border-[#E5ECF6] px-6 py-8 sm:px-10 sm:py-10 lg:pl-12">
            <div className="flex flex-wrap items-center gap-2 gap-y-2">
              <span className="rounded-full bg-[#F6F9FC] px-3 py-1.5 text-sm font-semibold text-[#0D2350]">
                Meridian Logistics
              </span>
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#E5ECF6] bg-white px-2.5 py-1 text-xs font-medium text-[#64748B]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="mt-6 max-w-4xl text-[26px] font-semibold leading-[1.2] tracking-tight text-[#1A1A1A] sm:text-[32px] md:text-[36px] md:leading-[1.15]">
              From{" "}
              <em className="font-medium italic text-[#1265EF]">&ldquo;we should be using AI&rdquo;</em> to a
              shipped support copilot in 11 weeks.
            </h2>
          </div>

          <div className="grid gap-8 border-b border-[#E5ECF6] px-6 py-8 sm:gap-10 sm:px-10 sm:py-10 md:grid-cols-3 lg:pl-12">
            <div>
              <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-[#1F3A8A]">
                The challenge
              </h3>
              <p className="text-[17px] leading-relaxed text-gray-600">
                Meridian&apos;s support team was buried in repetitive tier-1 tickets. Leadership wanted AI; agents were
                tired of vendors selling platforms instead of outcomes.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-[#1F3A8A]">
                What we did
              </h3>
              <p className="text-[17px] leading-relaxed text-gray-600">
                We mapped real ticket flows, narrowed scope to one high-volume path, and shipped a copilot inside their
                existing helpdesk — with guardrails, logging, and a human handoff from day one.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-[#1F3A8A]">
                The results
              </h3>
              <ul className="space-y-2.5 text-[17px] leading-relaxed text-gray-600">
                {RESULT_LINES.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="shrink-0 font-medium text-[#1265EF]" aria-hidden>
                      →
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-b border-[#E5ECF6] px-6 py-8 sm:px-10 sm:py-10 lg:pl-12">
            <blockquote className="border-l-4 border-[#1265EF] pl-4 sm:pl-5">
              <p className="text-lg font-medium italic leading-relaxed text-[#0D2350] sm:text-xl">
                &ldquo;We&apos;d been told &lsquo;AI for logistics&rsquo; for two years and never seen it ship. Airdev
                showed up, told us the first thing to fix wasn&apos;t the AI, and then built something our team actually
                uses every day.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-gray-500">
                <span className="font-semibold text-[#0D2350]">Sarah Chen</span>
                <span aria-hidden> · </span>
                VP Operations, Meridian Logistics
              </footer>
            </blockquote>
          </div>

          <div className="flex flex-col gap-4 px-6 py-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 sm:px-10 sm:py-8 lg:pl-12">
            <Link
              href={ROUTES.MORE_CASE_STUDIES}
              className="inline-flex w-fit items-center justify-center rounded-full bg-[#1a1a1a] px-6 py-3 text-center text-[15px] font-medium text-white transition-colors hover:bg-[#333333]"
            >
              Read the full case study →
            </Link>
            <Link
              href={ROUTES.MORE_CASE_STUDIES}
              className="text-[15px] font-medium text-[#1a1a1a] underline-offset-4 transition-colors hover:text-[#1265EF] sm:no-underline sm:hover:underline"
            >
              See more case studies →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
