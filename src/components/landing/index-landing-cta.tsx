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
  /** When false, hides the secondary “See client stories” link (unless `secondaryTextLink` is set). */
  showClientStories?: boolean;
  /** Case-study-style text link next to primary (no chevron icon); e.g. “Send us a note instead →”. */
  secondaryTextLink?: {
    href: string;
    label: string;
    target?: HTMLAnchorElement["target"];
    rel?: string;
  };
  /** Applied to the outer `<section>` (e.g. `pt-16` before the card, like Product Design). */
  sectionClassName?: string;
  /** Extra classes on the description paragraph (e.g. `max-w-*` for line breaks). */
  descriptionClassName?: string;
  /** When true (homepage), full-width mesh background, centered copy (no card). */
  showSideVisual?: boolean;
  /** With `showSideVisual`, omit the curved top/bottom white masks (flush straight edges). */
  straightSectionEdges?: boolean;
  /**
   * Full-width mesh CTA background. Default `pastel` (homepage). `heroBlue`: viewport-wide CSS wash
   * plus hero-style white overlays (no SVG).
   */
  meshVisual?: "pastel" | "heroBlue";
  /**
   * Vertical padding inside the mesh CTA content column (`showSideVisual` only).
   * `roomy` adds a bit more top/bottom space (homepage).
   */
  meshInnerPadding?: "default" | "roomy";
}

/** Pastel mesh — lavender, sky blue, mint (homepage CTA default). */
const CTA_MESH_STYLE_PASTEL: CSSProperties = {
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

const CTA_MESH_REPEAT_3 = "no-repeat, no-repeat, no-repeat" as const;
const CTA_MESH_REPEAT_8 =
  "no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat" as const;

/** Full-bleed colored wash — taller mid blur; light #EFEEF9 tint; fades toward top/bottom. */
const CTA_MESH_HERO_BLUE_WASH: CSSProperties = {
  backgroundColor: "color-mix(in srgb, #e6eef8 88%, #EFEEF9 12%)",
  backgroundImage: [
    `linear-gradient(
      180deg,
      rgba(239, 238, 249, 0.22) 0%,
      rgba(239, 238, 249, 0.08) 14%,
      transparent 32%,
      transparent 68%,
      rgba(239, 238, 249, 0.08) 86%,
      rgba(239, 238, 249, 0.22) 100%
    )`,
    `linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.48) 6%,
      rgba(255, 255, 255, 0.12) 14%,
      transparent 26%,
      transparent 74%,
      rgba(255, 255, 255, 0.14) 86%,
      rgba(255, 255, 255, 0.52) 94%,
      rgba(255, 255, 255, 0.88) 100%
    )`,
    `radial-gradient(ellipse 240% 260% at 50% 50%, rgba(186, 210, 248, 0.9) 0%, rgba(218, 232, 252, 0.58) 38%, rgba(236, 244, 255, 0.26) 66%, transparent 80%)`,
    `radial-gradient(ellipse 200% 200% at 0% 50%, rgba(165, 195, 242, 0.74) 0%, rgba(210, 226, 248, 0.32) 52%, transparent 70%)`,
    `radial-gradient(ellipse 200% 200% at 100% 50%, rgba(175, 200, 250, 0.68) 0%, rgba(220, 232, 252, 0.28) 50%, transparent 70%)`,
    `radial-gradient(ellipse 180% 170% at 8% 88%, rgba(155, 188, 238, 0.5) 0%, transparent 66%)`,
    `radial-gradient(ellipse 180% 170% at 94% 12%, rgba(198, 214, 252, 0.48) 0%, transparent 64%)`,
    `linear-gradient(90deg, rgba(208, 224, 248, 0.82) 0%, rgba(244, 248, 255, 0.48) 38%, rgba(200, 220, 246, 0.78) 100%)`,
  ].join(","),
  backgroundSize: "auto, auto, auto, auto, auto, auto, auto, auto",
  backgroundPosition: "0 0, 0 0, center center, center center, center center, center center, center center, center center",
  backgroundRepeat: CTA_MESH_REPEAT_8,
};

/** White vignette overlays (same recipe as hero, slightly more transparent mid so the wash shows through). */
const CTA_MESH_HERO_BLUE_OVERLAYS: CSSProperties = {
  backgroundImage: [
    `linear-gradient(
      to top,
      #ffffff 0%,
      rgba(255, 255, 255, 0.96) 6%,
      rgba(255, 255, 255, 0.82) 14%,
      rgba(255, 255, 255, 0.52) 26%,
      rgba(255, 255, 255, 0.22) 40%,
      rgba(255, 255, 255, 0.06) 52%,
      transparent 70%
    )`,
    `linear-gradient(
      to bottom,
      #ffffff 0%,
      rgba(255, 255, 255, 0.96) 5%,
      rgba(255, 255, 255, 0.84) 12%,
      rgba(255, 255, 255, 0.58) 22%,
      rgba(255, 255, 255, 0.32) 34%,
      rgba(255, 255, 255, 0.1) 46%,
      transparent 66%
    )`,
    `linear-gradient(
      to right,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.18) 30%,
      rgba(255, 255, 255, 0.04) 48%,
      transparent 72%
    )`,
  ].join(","),
  backgroundSize: "auto, auto, auto",
  backgroundPosition: "0 0, 0 0, 0 0",
  backgroundRepeat: CTA_MESH_REPEAT_3,
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
  secondaryTextLink,
  sectionClassName,
  descriptionClassName,
  showSideVisual = false,
  straightSectionEdges = false,
  meshVisual = "pastel",
  meshInnerPadding = "default",
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
            "mt-7 flex flex-wrap items-center gap-x-6 gap-y-3",
            centered && "justify-center",
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
          {secondaryTextLink ? (
            <a
              href={secondaryTextLink.href}
              target={secondaryTextLink.target}
              rel={secondaryTextLink.rel}
              className="inline-flex min-h-10 items-center text-[16px] font-medium leading-none text-[#1265EF] transition-colors hover:text-[#1a1a1a]"
            >
              {secondaryTextLink.label}
            </a>
          ) : showClientStories ? (
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
    const isHeroBlue = meshVisual === "heroBlue";

    return (
      <section
        className={cn("relative w-full overflow-hidden bg-white py-0", sectionClassName)}
        style={!isHeroBlue ? CTA_MESH_STYLE_PASTEL : undefined}
      >
        {isHeroBlue ? (
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-0 w-screen -translate-x-1/2"
              style={CTA_MESH_HERO_BLUE_WASH}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-[1]"
              style={CTA_MESH_HERO_BLUE_OVERLAYS}
            />
          </>
        ) : null}

        {!straightSectionEdges ? (
          <svg
            className="pointer-events-none absolute left-0 top-0 z-[2] w-full"
            height="72"
            viewBox="0 0 1440 72"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path d="M0,0 L1440,0 Q720,72 0,0 Z" fill="white" />
          </svg>
        ) : null}

        <div
          className={cn(
            "relative z-10 mx-auto max-w-[720px] px-6 text-center",
            meshInnerPadding === "roomy" ? "py-20 md:py-28" : "py-16 md:py-20",
          )}
        >
          {ctaBody("home")}
        </div>

        {!straightSectionEdges ? (
          <svg
            className="pointer-events-none absolute bottom-0 left-0 z-[2] w-full"
            height="72"
            viewBox="0 0 1440 72"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path d="M0,72 L1440,72 Q720,0 0,72 Z" fill="white" />
          </svg>
        ) : null}
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
