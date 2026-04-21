"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Hero + screenshot strip background (same asset as /saas hero) */
const INDEX_HERO_BLUR_BG =
  "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d482ff67a3aac218170979_blurbg3.svg";

/**
 * Home-only screenshot URLs — edit here without affecting /saas.
 * Initial set matches SaaS hero; order: top row L→R, then bottom row L→R.
 */
const INDEX_HERO_SCREENSHOT_IMAGES = [
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772585113659x667314515892083800/checkout.webp",
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772586305349x201337330678877920/iep.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774054114721x308166416807831320/hr3.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774317071301x405494079399526500/kp5.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774027428617x992217413442989600/lms1.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774308481244x911091318809670300/cp5.webp",
  "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769647224654x585966976925444100/events2.webp",
  "https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774014292763x501102941799014900/im5.webp",
];

/** Row height sync: reference tile index (same grid position as SaaS hero). */
const INDEX_HERO_REFERENCE_SCREEN_INDEX = 2;

function viewportScreenshotMaxHeightPx(): number {
  if (typeof window === "undefined") return 560;
  return Math.min(560, window.innerHeight * 0.52);
}

export function IndexLandingHero() {
  const [unifiedShotHeight, setUnifiedShotHeight] = useState<number | null>(null);
  const referenceImgRef = useRef<HTMLImageElement>(null);

  const recalcShotHeightFromReference = useCallback(() => {
    const img = referenceImgRef.current;
    if (!img?.naturalWidth) return;
    const figure = img.parentElement;
    if (!figure) return;
    const w = figure.getBoundingClientRect().width;
    if (w <= 0) return;
    const intrinsicH = (img.naturalHeight / img.naturalWidth) * w;
    const H = Math.min(intrinsicH, viewportScreenshotMaxHeightPx());
    setUnifiedShotHeight((prev) => {
      const next = Math.max(1, Math.round(H));
      return prev === next ? prev : next;
    });
  }, []);

  useEffect(() => {
    const img = referenceImgRef.current;
    if (!img) return;
    const figure = img.parentElement;
    if (!figure) return;

    const ro = new ResizeObserver(() => recalcShotHeightFromReference());
    ro.observe(figure);
    window.addEventListener("resize", recalcShotHeightFromReference);
    if (img.complete) recalcShotHeightFromReference();

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recalcShotHeightFromReference);
    };
  }, [recalcShotHeightFromReference]);

  return (
    <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-16 overflow-x-hidden bg-white scroll-mt-[88px]">
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-white"
        aria-hidden
        style={{
          backgroundImage: `url(${INDEX_HERO_BLUR_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        aria-hidden
        style={{
          background: `
            linear-gradient(
              to top,
              #ffffff 0%,
              rgba(255, 255, 255, 0.97) 5%,
              rgba(255, 255, 255, 0.88) 12%,
              rgba(255, 255, 255, 0.58) 24%,
              rgba(255, 255, 255, 0.28) 38%,
              rgba(255, 255, 255, 0.08) 50%,
              transparent 64%
            ),
            linear-gradient(
              to bottom,
              #ffffff 0%,
              rgba(255, 255, 255, 0.98) 4%,
              rgba(255, 255, 255, 0.9) 10%,
              rgba(255, 255, 255, 0.72) 18%,
              rgba(255, 255, 255, 0.42) 30%,
              rgba(255, 255, 255, 0.15) 44%,
              transparent 62%
            )
          `,
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[56px] lg:text-[80px] leading-[1.05] font-semibold tracking-[-0.03em] mb-8 mx-auto text-[#0D2350]">
            <span className="block">The reimagined</span>
            <span className="block">software agency</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            We use the power of visual development and AI to build world-class products in a fraction of time and cost
            of conventional agencies.
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 mt-2 lg:mt-4">
        <div className="flex max-w-full flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-6">
            <img
              src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/69a8b5f68f33f4d708ddd0c5_claudec.png"
              alt="Claude Code"
              className="h-9 w-auto shrink-0 sm:h-10"
            />
            <img
              src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/69a8b601263e827cb653e9bb_openaic.png"
              alt="OpenAI Codex"
              className="h-9 w-auto shrink-0 sm:h-10"
            />
          </div>
          <div className="flex items-center gap-6">
            <img
              src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/66969187efb02a2bec53fa5e_bubble.webp"
              alt="Bubble"
              className="h-16 w-auto shrink-0"
            />
            <img
              src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0c3731de254210406f2e4_star-rating.png"
              alt="Star rating"
              className="h-16 w-auto shrink-0"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 pt-[68px] w-full max-w-[min(1920px,calc(100vw-1.25rem))] 2xl:max-w-[min(2000px,calc(100vw-2rem))] mx-auto px-3 sm:px-5 lg:px-8">
        <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {INDEX_HERO_SCREENSHOT_IMAGES.map((src, i) => {
            /** Full tile width; overflow clips from bottom only (no horizontal crop). */
            const isWidthFitClipBottom = src.includes("events2.webp");
            return (
            <figure
              key={`${src}-${i}`}
              className="rounded-[8px] overflow-hidden border border-slate-200/80 bg-slate-50/70 shadow-sm min-w-0 block"
              style={unifiedShotHeight ? { height: unifiedShotHeight } : undefined}
            >
              <img
                ref={i === INDEX_HERO_REFERENCE_SCREEN_INDEX ? referenceImgRef : undefined}
                src={src}
                alt={`Product screenshot ${i + 1}`}
                onLoad={i === INDEX_HERO_REFERENCE_SCREEN_INDEX ? recalcShotHeightFromReference : undefined}
                className={
                  unifiedShotHeight
                    ? isWidthFitClipBottom
                      ? "block w-full max-w-full h-auto min-h-0 shrink-0"
                      : "w-full h-full min-h-0 object-contain object-top"
                    : "w-full h-auto max-h-[min(560px,52vh)] object-contain object-top"
                }
                loading={i < 2 ? "eager" : "lazy"}
              />
            </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
