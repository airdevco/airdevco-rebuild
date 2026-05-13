"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export type AiEnablementPhaseStat = { num: string; title: string; body: string };

export type AiEnablementPhaseCard = { icon: LucideIcon; title: string; body: string };

export type AiEnablementPhaseSectionProps = {
  phaseLabel: string;
  headline: string;
  intro: string;
  whatWeDo: readonly AiEnablementPhaseStat[];
  whatYouGet: readonly AiEnablementPhaseCard[];
  callout: string;
  /** When false, omits top border (e.g. stacked directly under another phase). Default true. */
  showTopBorder?: boolean;
  /** Merged onto `<section>` after padding; default `bg-white`. */
  sectionClassName?: string;
  /** Left column eyebrow. Default `WHAT WE DO`. */
  leftColumnLabel?: string;
  /** Right column eyebrow. Default `WHAT YOU GET`. */
  rightColumnLabel?: string;
  /** Extra classes for each right-column `Card` (e.g. `bg-white` on a tinted section). */
  cardClassName?: string;
  /** When false, hides the decorative opening quote in the callout band. Default true. */
  calloutShowMark?: boolean;
  /** When true, callout copy is centered (typically without `calloutShowMark`). Default false. */
  calloutCentered?: boolean;
};

function ColumnRuleLabel({ children }: { children: string }) {
  return (
    <div className="mb-8 flex min-h-[1.25rem] items-center gap-3">
      <span className="shrink-0 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0D2350]">
        {children}
      </span>
      <div className="h-px min-w-0 flex-1 bg-[#E5ECF6]" aria-hidden />
    </div>
  );
}

export function AiEnablementPhaseSection({
  phaseLabel,
  headline,
  intro,
  whatWeDo,
  whatYouGet,
  callout,
  showTopBorder = true,
  sectionClassName = "bg-white",
  leftColumnLabel = "WHAT WE DO",
  rightColumnLabel = "WHAT YOU GET",
  cardClassName,
  calloutShowMark = true,
  calloutCentered = false,
}: AiEnablementPhaseSectionProps) {
  return (
    <section
      className={cn(
        "py-20 lg:py-28",
        showTopBorder && "border-t border-[#E5ECF6]",
        sectionClassName
      )}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <span className="mb-3 block text-[15px] font-semibold uppercase tracking-wider text-[#1F3A8A]">
          {phaseLabel}
        </span>

        <div className="mb-16 max-w-4xl lg:mb-20">
          <h2 className="text-balance text-[32px] font-semibold leading-[1.15] tracking-tight text-[#1A1A1A] sm:text-[40px] lg:text-[48px]">
            {headline}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 lg:text-xl">{intro}</p>
        </div>

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <ColumnRuleLabel>{leftColumnLabel}</ColumnRuleLabel>
            <ul className="space-y-0">
              {whatWeDo.map((item, i) => (
                <li
                  key={item.num}
                  className={cn(
                    "grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-0 border-[#E5ECF6] py-8 first:pt-0 lg:gap-x-6",
                    i < whatWeDo.length - 1 && "border-b"
                  )}
                >
                  <span
                    className="pt-0.5 text-[40px] font-semibold leading-none text-[#9EAAC2] sm:text-[44px] lg:text-[48px]"
                    aria-hidden
                  >
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold leading-snug text-[#0D2350] sm:text-[22px]">{item.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-600 sm:text-base">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnRuleLabel>{rightColumnLabel}</ColumnRuleLabel>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {whatYouGet.map(({ icon: Icon, title, body }) => (
                <Card
                  key={title}
                  className={cn(
                    "border border-[#E5ECF6] bg-[#F6F9FC] shadow-none",
                    cardClassName
                  )}
                >
                  <CardContent className="flex flex-col gap-3 p-6 sm:p-7">
                    <Icon className="size-6 shrink-0 text-[#1265EF]" strokeWidth={1.75} aria-hidden />
                    <h3 className="text-lg font-bold leading-snug text-[#0D2350]">{title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <figure className="mt-14 rounded-2xl bg-[#0A2540] px-6 py-8 sm:px-10 sm:py-10 lg:mt-16">
          {calloutShowMark ? (
            <blockquote className="flex gap-3 text-lg leading-relaxed text-white sm:text-xl sm:leading-relaxed">
              <span className="select-none text-4xl leading-none text-[#0AE4E3]" aria-hidden>
                &ldquo;
              </span>
              <p className="min-w-0 pt-1">{callout}</p>
            </blockquote>
          ) : (
            <p
              className={cn(
                "text-lg leading-relaxed text-white sm:text-xl sm:leading-relaxed",
                calloutCentered && "mx-auto max-w-xl text-center"
              )}
            >
              {callout}
            </p>
          )}
        </figure>
      </div>
    </section>
  );
}
