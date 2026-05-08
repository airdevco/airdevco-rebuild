"use client";

import type { CSSProperties } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

interface IndexLandingCTAProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  clientStoriesHref?: string;
  clientStoriesLabel?: string;
}

// ─── Static wireframe — neutral slate (white + subtle chrome; gray mesh is behind card only) ─

function StaticWireframe() {
  const chartBars = [48, 72, 58, 85, 65, 92];
  const line = "bg-slate-400/45";
  const lineMuted = "bg-slate-300/55";

  return (
    <div className="relative flex aspect-[4/3] w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_8px_28px_-12px_rgba(15,23,42,0.08)]">
      <div className="flex h-[18px] shrink-0 items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-2.5">
        <div className="size-1.5 rounded-full bg-slate-300 ring-1 ring-slate-200" />
        <div className="size-1.5 rounded-full bg-slate-200" />
        <div className="size-1.5 rounded-full bg-slate-200" />
        <div className="ml-1.5 h-2 max-w-[42%] flex-1 rounded-sm border border-slate-100 bg-white" />
      </div>

      <div className="flex min-h-0 flex-1 gap-0 bg-white">
        <div className="flex w-[22%] shrink-0 flex-col gap-1.5 border-r border-slate-100 bg-slate-50 py-2 px-1.5">
          <div className="mx-auto mb-1 size-6 rounded-md border border-slate-200 bg-slate-100" />
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`flex items-center gap-1.5 rounded px-1 py-1 ${
                i === 1
                  ? "border border-slate-200 bg-white shadow-sm"
                  : ""
              }`}
            >
              <div className="size-4 shrink-0 rounded-sm border border-slate-100 bg-slate-100" />
              <div className={`h-1 max-w-[80%] flex-1 rounded-full ${i === 1 ? line : lineMuted}`} />
            </div>
          ))}
        </div>

        <div className="flex min-w-0 flex-1 flex-col bg-white">
          <div className="flex shrink-0 items-center gap-2 border-b border-slate-100 bg-white px-2 py-1.5">
            <div className="h-5 max-w-[58%] flex-1 rounded border border-slate-100 bg-slate-50" />
            <div className="size-5 shrink-0 rounded-full border border-slate-200 bg-slate-100" />
          </div>

          <div className="flex min-h-0 flex-1 flex-col gap-1.5 bg-white p-1.5">
            <div className="grid shrink-0 grid-cols-3 gap-1.5">
              {[0, 1, 2].map((k) => (
                <div
                  key={k}
                  className="flex flex-col gap-1 rounded-md border border-slate-200 bg-white p-1.5 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.05)]"
                >
                  <div className={`h-1 w-[60%] rounded-full ${lineMuted}`} />
                  <div className={`h-2.5 w-[78%] rounded-sm ${line}`} />
                </div>
              ))}
            </div>

            <div className="flex min-h-[56px] flex-1 flex-col gap-1 rounded-md border border-slate-200 bg-white p-1.5 shadow-[0_3px_14px_-6px_rgba(15,23,42,0.06)]">
              <div className={`h-1.5 w-[32%] shrink-0 rounded-full ${line}`} />
              <div className="mt-auto flex min-h-[48px] flex-1 items-end justify-between gap-1 border-t border-slate-100 bg-slate-50/60 px-0.5 pt-1">
                {chartBars.map((h, i) => (
                  <div
                    key={i}
                    className="min-h-[18%] flex-1 rounded-t-[2px] border border-slate-200/90 bg-gradient-to-t from-slate-300/70 to-slate-200/50"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="shrink-0 divide-y divide-slate-100 rounded-md border border-slate-200 bg-white shadow-[0_2px_10px_-4px_rgba(15,23,42,0.04)]">
              {[1, 2].map((ri) => (
                <div key={ri} className="flex items-center gap-2 px-1.5 py-1">
                  <div className="size-2.5 rounded-sm border border-slate-100 bg-slate-100" />
                  <div className={`h-1 max-w-[70%] flex-1 rounded-full ${lineMuted}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Pastel mesh behind wireframe — lavender, sky blue, mint (reference-style) */
const CTA_MESH_STYLE: CSSProperties = {
  backgroundColor: "#eef1f7",
  backgroundImage: `
    linear-gradient(165deg, rgba(255, 255, 255, 0.5) 0%, transparent 42%),
    linear-gradient(200deg, transparent 40%, rgba(245, 242, 252, 0.9) 100%),
    radial-gradient(ellipse 110% 90% at 50% 105%, rgba(210, 198, 235, 0.55) 0%, transparent 52%),
    radial-gradient(ellipse 85% 75% at 12% 22%, rgba(175, 210, 245, 0.5) 0%, transparent 54%),
    radial-gradient(ellipse 70% 65% at 94% 12%, rgba(175, 228, 215, 0.42) 0%, transparent 50%),
    radial-gradient(ellipse 65% 55% at 92% 88%, rgba(165, 220, 205, 0.38) 0%, transparent 48%),
    radial-gradient(ellipse 55% 45% at 48% 48%, rgba(236, 240, 248, 0.85) 0%, transparent 62%)
  `,
};

export function IndexLandingCTA({
  eyebrow = "GET STARTED",
  title = "Looking to build the next big thing?",
  description =
    "Chat with our team to see what we can do.\nWe've shipped 1,000+ products — yours could be next.",
  buttonText = "Talk to us",
  clientStoriesHref = ROUTES.CLIENT_STORIES,
  clientStoriesLabel = "See client stories",
}: IndexLandingCTAProps = {}) {
  const openLandingPricingPopup = () => {
    window.dispatchEvent(new CustomEvent("open-landing-pricing-popup"));
  };

  return (
    <section className="relative bg-white py-0">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="relative overflow-hidden rounded-[26px] border border-[#E5ECF6] bg-white shadow-[0_8px_30px_-12px_rgba(15,23,42,0.06),0_2px_12px_-6px_rgba(18,101,239,0.08)]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
            <div className="flex min-w-0 flex-[4] flex-col justify-center px-8 py-8 md:px-12 md:py-10">
              <p className="hidden" aria-hidden>
                {eyebrow}
              </p>
              <h2 className="text-[36px] font-semibold leading-tight tracking-[-0.02em] text-[#0D2350]">
                {title}
              </h2>
              <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-[#5A6A7A] md:text-lg">
                {description}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Button
                  type="button"
                  onClick={openLandingPricingPopup}
                  className="bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none"
                >
                  {buttonText}
                </Button>
                <a
                  href={clientStoriesHref}
                  className="text-[16px] font-medium text-[#1265EF] hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-1.5 group/link"
                >
                  {clientStoriesLabel}
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 shrink-0" />
                </a>
              </div>
            </div>

            <div className="relative flex min-h-[240px] min-w-0 flex-[2] items-center justify-center overflow-hidden p-6 md:min-h-[280px] md:p-8 lg:min-h-[300px] lg:py-10">
              <div
                className="pointer-events-none absolute inset-0 z-0"
                aria-hidden
                style={CTA_MESH_STYLE}
              />
              <div className="relative z-10 w-full max-w-[280px] drop-shadow-sm">
                <StaticWireframe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
