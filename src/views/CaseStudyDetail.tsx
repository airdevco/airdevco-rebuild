"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Navbar, Footer, SaasCTA } from "@/components/landing";
import { caseStudyRoute, ROUTES } from "@/config/routes";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useParams } from "react-router-dom";

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
        "case-study-body text-[17px] leading-relaxed text-[#425466] max-w-3xl",
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

const StatItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400 mb-2">
      {label}
    </div>
    <div
      className="text-[16px] font-semibold text-[#1a1a1a] leading-snug pl-3"
      style={{ borderLeft: "2px solid #00d4ff" }}
    >
      {value}
    </div>
  </div>
);

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
        "group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06),0_12px_24px_rgba(0,0,0,0.04)]",
        "transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]",
        "sm:flex-row"
      )}
    >
      <div
        className="relative w-full shrink-0 overflow-hidden bg-gray-100 sm:w-[min(38%,280px)] sm:min-h-[160px] sm:max-w-[280px]"
        style={{ aspectRatio: "16/10" }}
      >
        {thumbnailImage ? (
          <img
            src={thumbnailImage}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:min-h-[160px]"
          />
        ) : (
          <div className="h-full min-h-[140px] w-full bg-gradient-to-br from-[#0A2540] to-[#1265EF]" />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#176AAF] via-[#176AAF]/85 to-[#176AAF]/45 mix-blend-color opacity-100" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#176AAF]/80 via-[#176AAF]/35 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-2 p-4 sm:py-5 sm:pl-6 sm:pr-7">
        <h3 className="text-[18px] font-medium leading-snug tracking-tight text-[#1a1a1a]">
          {name}
        </h3>
        {thumbnailSummary?.trim() ? (
          <p className="text-[15px] leading-relaxed text-slate-600 line-clamp-3">
            {thumbnailSummary}
          </p>
        ) : null}
        <span className="mt-0.5 inline-flex items-center gap-1 text-[14px] font-medium text-[#1265EF] transition-all group-hover:gap-1.5">
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

  const related =
    allStudies?.filter((s) => s.slug !== study.slug).slice(0, 3) ?? [];

  return (
    <div className="bg-white min-h-screen font-['Colfax']">
      <Navbar />

      <main>
        {/* Hero — matches airdev case layout: name, subtitle, stats */}
        <section className="pt-[120px] pb-10 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <nav
              className="flex flex-wrap items-center gap-2 text-[14px] text-gray-400 mb-8"
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

            {study.customerLogo ? (
              <div className="mb-6">
                <img
                  src={study.customerLogo}
                  alt=""
                  className="h-8 sm:h-9 w-auto object-contain object-left"
                />
              </div>
            ) : null}

            <h1
              className="text-[40px] sm:text-[48px] lg:text-[56px] font-semibold text-[#1a1a1a] leading-[1.08] tracking-[-0.03em] mb-5 max-w-4xl"
            >
              {study.name}
            </h1>

            {study.thumbnailSummary?.trim() ? (
              <p className="text-[20px] sm:text-[22px] text-gray-600 leading-relaxed max-w-4xl mb-10">
                {study.thumbnailSummary.trim()}
              </p>
            ) : null}

            {stats.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 py-8 px-6 sm:px-8 bg-[#F6F9FC] rounded-2xl">
                {stats.map((stat) => (
                  <StatItem key={stat.label} label={stat.label} value={stat.value} />
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {study.thumbnailImage ? (
          <section className="pb-14">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/7] sm:aspect-[2/1] shadow-lg">
                <img
                  src={study.thumbnailImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#176AAF]/55 via-transparent to-transparent mix-blend-multiply" />
              </div>
            </div>
          </section>
        ) : null}

        {/* Intro + bullets (heroSummary HTML) */}
        {study.heroSummary ? (
          <section className="pb-12">
            <div className="max-w-[1200px] mx-auto px-6">
              <p className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-6">
                {study.name}
              </p>
              <CaseStudyHtml html={study.heroSummary} />
            </div>
          </section>
        ) : null}

        {/* Pull quote */}
        {study.quote ? (
          <section className="pb-14">
            <div className="max-w-[1200px] mx-auto px-6">
              <figure className="max-w-3xl rounded-2xl bg-[#F6F9FC] px-8 py-10 sm:px-10 sm:py-12">
                <blockquote className="text-[22px] sm:text-[26px] font-medium text-[#1a1a1a] leading-snug mb-8">
                  &ldquo;{study.quote}&rdquo;
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
                      <div className="text-[15px] text-gray-500 mt-0.5">
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
          <section className="pb-16 border-t border-gray-100">
            <div className="max-w-[1200px] mx-auto px-6 pt-14 space-y-14">
              {study.objective ? (
                <div>
                  <h2 className="text-[13px] font-semibold text-[#1e3a8a] uppercase tracking-[0.14em] mb-5">
                    The problem
                  </h2>
                  <CaseStudyHtml html={study.objective} />
                </div>
              ) : null}
              {study.solution ? (
                <div>
                  <h2 className="text-[13px] font-semibold text-[#1e3a8a] uppercase tracking-[0.14em] mb-5">
                    The solution
                  </h2>
                  <CaseStudyHtml html={study.solution} />
                </div>
              ) : null}
              {study.result ? (
                <div>
                  <h2 className="text-[13px] font-semibold text-[#1e3a8a] uppercase tracking-[0.14em] mb-5">
                    The results
                  </h2>
                  <CaseStudyHtml html={study.result} />
                </div>
              ) : null}
            </div>
          </section>
        )}

        {/* Gallery */}
        {study.galleryImages && study.galleryImages.length > 0 ? (
          <section className="py-14 bg-[#F6F9FC]">
            <div className="max-w-[1200px] mx-auto px-6">
              <h2 className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-8">
                Gallery
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {study.galleryImages.map((src, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden aspect-video bg-gray-100 shadow-sm"
                  >
                    <img
                      src={src}
                      alt={`${study.name} screenshot ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* Explore more — same visual language as More Case Studies cards */}
        {related.length > 0 ? (
          <section className="py-16 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
                Explore more case studies
              </div>
              <h2 className="text-[32px] sm:text-[36px] font-semibold tracking-tight text-[#1a1a1a] mb-10">
                More client stories
              </h2>
              <div className="flex flex-col gap-5">
                {related.map((s) => (
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

        <SaasCTA />
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
