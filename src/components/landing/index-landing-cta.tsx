"use client";

import type { CSSProperties } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/utils";

export interface IndexLandingCTAProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  /** When set, the primary button is a link (e.g. Flex portal). Otherwise it opens the landing pricing popup. */
  buttonHref?: string;
  buttonTarget?: HTMLAnchorElement["target"];
  buttonRel?: string;
  clientStoriesHref?: string;
  clientStoriesLabel?: string;
  /** When false, hides the secondary “See client stories” link. */
  showClientStories?: boolean;
  /** Applied to the outer `<section>` (e.g. `pt-16` before the card, like Product Design). */
  sectionClassName?: string;
  /** Extra classes on the description paragraph (e.g. `max-w-*` for line breaks). */
  descriptionClassName?: string;
  /** When true (homepage), full-width mesh background, centered copy (no card). */
  showSideVisual?: boolean;
}

/** Pastel mesh — lavender, sky blue, mint */
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
  description = "Chat with our team to see what we can do.",
  buttonText = "Talk to us",
  buttonHref,
  buttonTarget,
  buttonRel,
  clientStoriesHref = ROUTES.CLIENT_STORIES,
  clientStoriesLabel = "See client stories",
  showClientStories = true,
  sectionClassName,
  descriptionClassName,
  showSideVisual = false,
}: IndexLandingCTAProps = {}) {
  const openLandingPricingPopup = () => {
    window.dispatchEvent(new CustomEvent("open-landing-pricing-popup"));
  };

  const primaryButtonClassName =
    "bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none";

  const ctaBody = (layout: "card" | "home") => {
    const centered = layout === "home";
    return (
      <>
        <p className="hidden" aria-hidden>
          {eyebrow}
        </p>
        <h2 className="text-[36px] font-semibold leading-tight tracking-[-0.02em] text-[#0D2350]">{title}</h2>
        <p
          className={cn(
            "mt-3 max-w-none whitespace-pre-line text-base leading-relaxed text-[#5A6A7A] md:text-lg",
            descriptionClassName,
          )}
        >
          {description}
        </p>
        <div
          className={cn(
            "mt-7 flex flex-wrap gap-x-6 gap-y-3",
            centered ? "justify-center" : "items-center",
          )}
        >
          {buttonHref ? (
            <a href={buttonHref} target={buttonTarget} rel={buttonRel}>
              <Button type="button" className={primaryButtonClassName}>
                {buttonText}
              </Button>
            </a>
          ) : (
            <Button type="button" onClick={openLandingPricingPopup} className={primaryButtonClassName}>
              {buttonText}
            </Button>
          )}
          {showClientStories ? (
            <a
              href={clientStoriesHref}
              className="text-[16px] font-medium text-[#1265EF] hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-1.5 group/link"
            >
              {clientStoriesLabel}
              <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 shrink-0" />
            </a>
          ) : null}
        </div>
      </>
    );
  };

  if (showSideVisual) {
    return (
      <section
        className={cn("relative w-full overflow-hidden py-0", sectionClassName)}
        style={CTA_MESH_STYLE}
      >
        {/* top white mask — lens bowing DOWN into the section */}
        <svg
          className="pointer-events-none absolute left-0 top-0 w-full"
          height="72"
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0,0 L1440,0 Q720,72 0,0 Z" fill="white" />
        </svg>

        <div className="relative z-10 mx-auto max-w-[720px] px-6 py-20 text-center md:py-24">
          {ctaBody("home")}
        </div>

        {/* bottom white mask — lens bowing UP into the section */}
        <svg
          className="pointer-events-none absolute bottom-0 left-0 w-full"
          height="72"
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0,72 L1440,72 Q720,0 0,72 Z" fill="white" />
        </svg>
      </section>
    );
  }

  return (
    <section className={cn("relative bg-white py-0", sectionClassName)}>
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="relative overflow-hidden rounded-[26px] border border-[#E5ECF6] bg-white shadow-[0_8px_30px_-12px_rgba(15,23,42,0.06),0_2px_12px_-6px_rgba(18,101,239,0.08)]">
          <div className="flex min-w-0 flex-col justify-center px-8 py-8 md:px-12 md:py-10">{ctaBody("card")}</div>
        </div>
      </div>
    </section>
  );
}
