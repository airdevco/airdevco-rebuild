"use client";

import { useEffect, useMemo, useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Navbar, Footer, SaasCTA } from "@/components/landing";
import { caseStudyRoute, ROUTES } from "@/config/routes";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { ChevronRight, ExternalLink, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  absolutizeImageUrl,
  caseStudyMetaDescription,
} from "@/lib/case-study-seo";
import { useParams } from "react-router-dom";
import { CASE_STUDY_SLUG } from "@/config/case-study-static-slugs";

function CaseStudyHtml({
  html,
  className,
}: {
  html: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "case-study-body mx-auto text-left text-[20px] leading-relaxed text-[#425466] max-w-3xl",
        "[&_strong]:font-semibold [&_strong]:text-[#1a1a1a]",
        "[&_a]:text-[#1265EF] [&_a]:underline-offset-2 hover:[&_a]:underline",
        "[&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-2",
        "[&_p]:mb-4 [&_p:last-child]:mb-0",
        "[&_em]:italic",
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

const PRIMARY_RECOMMENDATION_SLUGS = [
  CASE_STUDY_SLUG.bubble,
  CASE_STUDY_SLUG.dividend,
  CASE_STUDY_SLUG.consenna,
] as const;

const FALLBACK_RECOMMENDATION_SLUGS = [
  CASE_STUDY_SLUG.tfa,
  CASE_STUDY_SLUG.navigreat,
  CASE_STUDY_SLUG.ticketrev,
] as const;

type StudyCard = {
  _id: string;
  slug: string;
  name: string;
  thumbnailSummary?: string;
  thumbnailImage?: string;
};

function pickThreeRelatedStudies(
  allStudies: StudyCard[],
  currentSlug: string
): StudyCard[] {
  const bySlug = (s: string) => allStudies.find((x) => x.slug === s);
  const out: StudyCard[] = [];
  const used = new Set<string>();
  for (const s of PRIMARY_RECOMMENDATION_SLUGS) {
    if (s === currentSlug) continue;
    const doc = bySlug(s);
    if (doc) {
      out.push(doc);
      used.add(doc.slug);
    }
  }
  for (const s of FALLBACK_RECOMMENDATION_SLUGS) {
    if (out.length >= 3) break;
    if (s === currentSlug) continue;
    const doc = bySlug(s);
    if (doc && !used.has(doc.slug)) {
      out.push(doc);
      used.add(doc.slug);
    }
  }
  for (const doc of allStudies) {
    if (out.length >= 3) break;
    if (doc.slug === currentSlug || used.has(doc.slug)) continue;
    out.push(doc);
    used.add(doc.slug);
  }
  return out.slice(0, 3);
}

function youtubeVideoId(url: string): string | null {
  try {
    const u = new URL(url.trim());
    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace(/^\//, "").split("/")[0] ?? "";
      return id.length >= 8 ? id : null;
    }
    if (u.hostname.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      return v && v.length >= 8 ? v : null;
    }
    return null;
  } catch {
    return null;
  }
}

function youtubePosterUrl(videoLink: string): string | null {
  const id = youtubeVideoId(videoLink);
  if (!id) return null;
  return `https://img.youtube.com/vi/${encodeURIComponent(id)}/maxresdefault.jpg`;
}

function youtubeEmbedSrc(url: string): string | null {
  const id = youtubeVideoId(url);
  if (!id) return null;
  return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`;
}

function normalizePullQuote(raw: string): string {
  let s = raw.trim();
  const pairs: readonly (readonly [string, string])[] = [
    ['"', '"'],
    ["\u201c", "\u201d"],
    ["\u2018", "\u2019"],
  ];
  for (let depth = 0; depth < 5 && s.length >= 2; depth++) {
    let stripped = false;
    for (const [open, close] of pairs) {
      if (s.startsWith(open) && s.endsWith(close)) {
        s = s.slice(open.length, s.length - close.length).trim();
        stripped = true;
        break;
      }
    }
    if (!stripped) break;
  }
  return s;
}

function RelatedCaseCard({
  slug,
  name,
  thumbnailSummary,
  thumbnailImage,
}: {
  slug: string;
  name: string;
  thumbnailSummary?: string;
  thumbnailImage?: string;
}) {
  return (
    <a
      href={caseStudyRoute(slug)}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06),0_12px_24px_rgba(0,0,0,0.04)]",
        "transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
      )}
    >
      <div
        className="relative w-full shrink-0 overflow-hidden bg-gray-100"
        style={{ aspectRatio: "16/10" }}
      >
        {thumbnailImage ? (
          <img
            src={thumbnailImage}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="h-full min-h-[140px] w-full bg-gradient-to-br from-[#0A2540] to-[#1265EF]" />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#176AAF] via-[#176AAF]/85 to-[#176AAF]/45 mix-blend-color opacity-100" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#176AAF]/80 via-[#176AAF]/35 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <h3 className="text-[18px] font-medium leading-snug tracking-tight text-[#1a1a1a]">
          {name}
        </h3>
        {thumbnailSummary?.trim() ? (
          <p className="text-[15px] leading-relaxed text-slate-600 line-clamp-4">
            {thumbnailSummary}
          </p>
        ) : null}
        <span className="mt-auto inline-flex items-center gap-1 pt-1 text-[14px] font-medium text-[#1265EF] transition-all group-hover:gap-1.5">
          Read case study
          <ArrowLongRightIcon className="h-3.5 w-3.5 shrink-0" aria-hidden />
        </span>
      </div>
    </a>
  );
}

const CaseStudyDetail = ({ slug: slugProp }: { slug?: string } = {}) => {
  const params = useParams<{ slug: string }>();
  const slug = slugProp ?? params.slug ?? "";
  const study = useQuery(api.caseStudies.getBySlug, { slug });
  const allStudies = useQuery(api.caseStudies.listAll);
  const [heroVideoOpen, setHeroVideoOpen] = useState(false);

  useEffect(() => {
    setHeroVideoOpen(false);
  }, [slug]);

  useEffect(() => {
    if (study === undefined || study === null) return;

    const pageTitle = `${study.metaTitle?.trim() || study.name} | Airdev`;
    const metaDescription = caseStudyMetaDescription(study);
    const ogImage = absolutizeImageUrl(
      typeof window !== "undefined" ? window.location.origin : "",
      study.thumbnailImage
    );

    const previousTitle = document.title;
    document.title = pageTitle;

    type Rollback = {
      el: HTMLMetaElement;
      prevContent: string | null;
      created: boolean;
    };
    const rollbacks: Rollback[] = [];

    const setMeta = (
      attr: "name" | "property",
      key: string,
      content: string | undefined
    ) => {
      if (content === undefined || !content.trim()) return;
      const value = content.trim();
      let el = document.querySelector(
        `meta[${attr}="${key}"]`
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        el.setAttribute("content", value);
        document.head.appendChild(el);
        rollbacks.push({ el, prevContent: null, created: true });
        return;
      }
      const prevContent = el.getAttribute("content");
      el.setAttribute("content", value);
      rollbacks.push({ el, prevContent, created: false });
    };

    setMeta("name", "description", metaDescription);
    setMeta("property", "og:title", pageTitle);
    setMeta("property", "og:description", metaDescription);
    if (ogImage) {
      setMeta("property", "og:image", ogImage);
    }
    setMeta("name", "twitter:title", pageTitle);
    setMeta("name", "twitter:description", metaDescription);
    if (ogImage) {
      setMeta("name", "twitter:image", ogImage);
    }

    return () => {
      document.title = previousTitle;
      for (const r of rollbacks) {
        if (r.created) {
          r.el.remove();
        } else if (r.prevContent !== null) {
          r.el.setAttribute("content", r.prevContent);
        } else {
          r.el.removeAttribute("content");
        }
      }
    };
  }, [study]);

  const related = useMemo(() => {
    if (!allStudies) return [];
    return pickThreeRelatedStudies(allStudies, slug);
  }, [allStudies, slug]);

  if (study === undefined) {
    return (
      <div className="bg-white min-h-screen font-['Colfax']">
        <Navbar />
        <div className="pt-[140px] pb-24 max-w-[1200px] mx-auto px-6">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-1/4" />
            <div className="h-12 bg-gray-200 rounded w-3/4" />
            <div className="h-[480px] bg-gray-200 rounded-2xl" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (study === null) {
    return (
      <div className="bg-white min-h-screen font-['Colfax']">
        <Navbar />
        <div className="pt-[140px] pb-24 max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold text-[#1a1a1a] mb-4">
            Case study not found
          </h1>
          <p className="text-gray-500 mb-8">
            This case study may have been removed or the URL is incorrect.
          </p>
          <a
            href={ROUTES.MORE_CASE_STUDIES}
            className="inline-flex items-center gap-1 text-[#1265EF] font-medium hover:underline"
          >
            View all client stories <ChevronRight className="w-4 h-4" />
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  const stats = [
    { label: "Business type", value: study.businessType },
    { label: "Product type", value: study.productType },
    { label: "Timeline", value: study.timeline },
    { label: "Key results", value: study.keyResults },
  ].filter((s): s is { label: string; value: string } => Boolean(s.value));

  const heroVideoEmbedSrc = study.videoLink?.trim()
    ? youtubeEmbedSrc(study.videoLink)
    : null;
  const hasHeroVideo = Boolean(heroVideoEmbedSrc);
  const heroVideoPosterSrc = study.videoLink?.trim()
    ? youtubePosterUrl(study.videoLink)
    : null;
  const heroVideoPlayImageSrc =
    heroVideoPosterSrc ?? study.thumbnailImage ?? undefined;

  const showHeroMedia =
    stats.length > 0 ||
    Boolean(study.thumbnailImage) ||
    (hasHeroVideo && Boolean(heroVideoEmbedSrc));

  const pullQuote =
    study.quote?.trim() ? normalizePullQuote(study.quote) : "";

  return (
    <div className="bg-white min-h-screen font-['Colfax']">
      <Navbar />

      <main>
        {/* Hero — matches airdev case layout: name, subtitle, stats */}
        <section className="pt-[120px] pb-10 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <nav
              className="flex flex-wrap items-center gap-2 text-[15px] text-gray-400 mb-8"
              aria-label="Breadcrumb"
            >
              <a
                href={ROUTES.MORE_CASE_STUDIES}
                className="hover:text-[#1265EF] transition-colors"
              >
                Client Stories
              </a>
              <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
              <span className="text-[#1a1a1a]">{study.name}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6 max-w-4xl">
              <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] font-semibold text-[#1a1a1a] leading-[1.08] tracking-[-0.03em]">
                {study.name}
              </h1>
              {study.companyUrl?.trim() ? (
                <a
                  href={study.companyUrl.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center text-[#1265EF] hover:text-[#0d4fc7] active:text-[#0a3fa3] transition-colors"
                  aria-label={`Visit ${study.name} website (opens in new tab)`}
                >
                  <ExternalLink className="h-8 w-8" strokeWidth={2} aria-hidden />
                </a>
              ) : null}
            </div>

            {study.thumbnailSummary?.trim() ? (
              <p className="text-[32px] text-gray-600 leading-[1.28] max-w-4xl mb-10">
                {study.thumbnailSummary.trim()}
              </p>
            ) : null}

            {/* Same layout as Client Stories → Customers by sizes (single row, no carousel / logos / image text) */}
            {showHeroMedia ? (
              <div className="min-h-[400px] mb-8">
                <div
                  className={cn(
                    "grid gap-12 items-start",
                    stats.length > 0 ? "lg:grid-cols-12" : ""
                  )}
                >
                  {stats.length > 0 ? (
                    <div className="lg:col-span-4 relative h-[320px] lg:h-[400px]">
                      <div className="absolute inset-0 space-y-6 flex flex-col justify-center">
                        {stats.map((stat) => (
                          <div key={stat.label} className="relative">
                            <div className="text-[16px] text-gray-500 mb-1 pl-4">
                              {stat.label}
                            </div>
                            <p
                              className="text-[18px] font-semibold text-[#1a1a1a] leading-relaxed pl-4"
                              style={{ borderLeft: "1px solid #00d4ff" }}
                            >
                              {stat.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  <div
                    className={cn(
                      "h-[320px] lg:h-[400px] relative overflow-hidden",
                      stats.length > 0 ? "lg:col-span-8" : "lg:col-span-12 w-full"
                    )}
                  >
                    <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-lg">
                      {hasHeroVideo && heroVideoEmbedSrc ? (
                        <button
                          type="button"
                          onClick={() => setHeroVideoOpen(true)}
                          className="group absolute inset-0 block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1265EF] focus-visible:ring-offset-2"
                          aria-label={`Play ${study.name} case study video`}
                        >
                          {heroVideoPlayImageSrc ? (
                            <img
                              src={heroVideoPlayImageSrc}
                              alt=""
                              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] to-[#1265EF]" />
                          )}
                          <div className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/45" />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#176AAF]/80 via-[#176AAF]/35 to-transparent" />
                          <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-[#1265EF] shadow-lg ring-1 ring-black/5 transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
                              <Play
                                className="ml-1 h-7 w-7 sm:h-9 sm:w-9"
                                fill="currentColor"
                                aria-hidden
                              />
                            </span>
                          </span>
                        </button>
                      ) : study.thumbnailImage ? (
                        <img
                          src={study.thumbnailImage}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] to-[#1265EF]" />
                      )}
                      {!hasHeroVideo ? (
                        <>
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#176AAF] via-[#176AAF]/90 to-[#176AAF]/50 mix-blend-color opacity-100" />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#176AAF]/90 via-[#176AAF]/40 to-transparent" />
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </section>

        {/* Intro + bullets (heroSummary HTML) */}
        {study.heroSummary ? (
          <section className="pb-12">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="mx-auto max-w-3xl text-left">
                <CaseStudyHtml html={study.heroSummary} />
              </div>
            </div>
          </section>
        ) : null}

        {/* Pull quote */}
        {pullQuote ? (
          <section className="pb-14">
            <div className="max-w-[1200px] mx-auto px-6">
              <figure className="mx-auto max-w-3xl text-left rounded-2xl bg-[#F6F9FC] px-8 py-10 sm:px-10 sm:py-12">
                <blockquote className="text-[22px] sm:text-[26px] font-medium text-[#1a1a1a] leading-snug mb-8">
                  &ldquo;{pullQuote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  {study.quoteImage ? (
                    <img
                      src={study.quoteImage}
                      alt=""
                      className="h-14 w-14 rounded-full object-cover border border-gray-200/80"
                    />
                  ) : null}
                  <div>
                    {study.quoteName ? (
                      <div className="font-semibold text-[#1a1a1a]">
                        {study.quoteName}
                      </div>
                    ) : null}
                    {study.quoteRole ? (
                      <div className="text-[20px] text-gray-500 mt-0.5">
                        {study.quoteRole}
                      </div>
                    ) : null}
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        ) : null}

        {/* Narrative sections */}
        {(study.objective || study.solution || study.result) && (
          <section className="pb-16">
            <div className="max-w-[1200px] mx-auto px-6 pt-10 space-y-14">
              <div className="mx-auto max-w-3xl space-y-14 text-left">
                {study.objective ? (
                  <div>
                    <h2 className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-[0.14em] mb-5">
                      The problem
                    </h2>
                    <CaseStudyHtml html={study.objective} className="mx-0" />
                  </div>
                ) : null}
                {study.solution ? (
                  <div>
                    <h2 className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-[0.14em] mb-5">
                      The solution
                    </h2>
                    <CaseStudyHtml html={study.solution} className="mx-0" />
                  </div>
                ) : null}
                {study.result ? (
                  <div>
                    <h2 className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-[0.14em] mb-5">
                      The results
                    </h2>
                    <CaseStudyHtml html={study.result} className="mx-0" />
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        )}

        {/* Explore more — always three picks (Teach for America fills in when a primary pick is the current page) */}
        {related.length > 0 ? (
          <section className="bg-white pt-16 pb-24 sm:pb-28">
            <div className="max-w-[1200px] mx-auto px-6 pb-10 sm:pb-12">
              <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-4">
                Explore more case studies
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {related.slice(0, 3).map((s) => (
                  <RelatedCaseCard
                    key={s._id}
                    slug={s.slug}
                    name={s.name}
                    thumbnailSummary={s.thumbnailSummary}
                    thumbnailImage={s.thumbnailImage}
                  />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <SaasCTA contentLayout="responsive" />
      </main>

      <Dialog open={heroVideoOpen} onOpenChange={setHeroVideoOpen}>
        <DialogContent
          hideClose
          className={cn(
            "fixed left-0 top-0 z-[100] flex h-[100dvh] max-h-[100dvh] w-full max-w-none translate-x-0 translate-y-0 flex-col border-0 bg-black p-0 shadow-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "sm:rounded-none"
          )}
        >
          <DialogTitle className="sr-only">
            {study.name} case study video
          </DialogTitle>
          <button
            type="button"
            onClick={() => setHeroVideoOpen(false)}
            className="absolute right-3 top-3 z-[110] rounded-full bg-white/10 px-3 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:right-4 sm:top-4"
          >
            Close
          </button>
          {heroVideoOpen && heroVideoEmbedSrc ? (
            <div className="flex min-h-0 flex-1 items-center justify-center px-3 pb-6 pt-14 sm:px-6 sm:pb-8 sm:pt-16">
              <div className="relative aspect-video w-full max-w-[min(100%,1200px)] overflow-hidden rounded-lg bg-black shadow-2xl">
                <iframe
                  title={`${study.name} — Airdev case study`}
                  src={heroVideoEmbedSrc}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
