"use client";

/** Hero + screenshot strip background (forked from index hero for /approach only). */
const APPROACH_HERO_BLUR_BG =
  "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d482ff67a3aac218170979_blurbg3.svg";

export function ApproachLandingHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-20 overflow-x-hidden bg-white scroll-mt-[88px]">
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-white"
        aria-hidden
        style={{
          backgroundImage: `url(${APPROACH_HERO_BLUR_BG})`,
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
        <div className="max-w-5xl mx-auto">
          <h1 className="text-[56px] lg:text-[80px] leading-[1.05] font-semibold tracking-[-0.03em] mb-8 mx-auto text-[#0D2350] text-left lg:text-center">
            <span className="block">Top-tier agency quality.</span>
            <span className="block text-[#6C7280]">A fraction of the cost</span>
            <span className="block text-[#6C7280]">and timeline.</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed text-left md:max-w-[72%] md:mx-auto">
            AI excels at speed, volume, and consistency - generating code, producing research, testing thousands of
            scenarios, and handling repetitive work without fatigue. Human experts excel at judgment, strategy, and
            navigating ambiguity - understanding your business context, making hard prioritization calls, and catching
            the subtle issues that only experience reveals. We've redesigned every stage of our process to put each
            where it belongs.
          </p>
        </div>
      </div>
    </section>
  );
}
