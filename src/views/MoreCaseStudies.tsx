"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Navbar, Footer, SaasCTA } from "@/components/landing";
import { caseStudyRoute } from "@/config/routes";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

function categoryBadge(
  businessType?: string,
  filteringCategory?: string
): string | null {
  if (businessType?.trim()) return businessType.trim();
  if (filteringCategory === "startups") return "Startup";
  if (filteringCategory === "enterprises") return "Enterprise";
  if (filteringCategory?.trim())
    return filteringCategory.charAt(0).toUpperCase() + filteringCategory.slice(1);
  return null;
}

const CaseStudyCard = ({
  slug,
  name,
  thumbnailSummary,
  thumbnailImage,
  businessType,
  filteringCategory,
}: {
  slug: string;
  name: string;
  thumbnailSummary?: string;
  thumbnailImage?: string;
  businessType?: string;
  filteringCategory?: string;
}) => {
  const badge = categoryBadge(businessType, filteringCategory);

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
        className="relative w-full shrink-0 overflow-hidden bg-gray-100 sm:w-[min(36%,360px)] sm:min-h-[180px] sm:max-w-[360px]"
        style={{ aspectRatio: "16/10" }}
      >
        {thumbnailImage ? (
          <img
            src={thumbnailImage}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:min-h-[180px]"
          />
        ) : (
          <div className="h-full min-h-[160px] w-full bg-gradient-to-br from-[#0A2540] to-[#1265EF]" />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#176AAF] via-[#176AAF]/90 to-[#176AAF]/50 mix-blend-color opacity-100" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#176AAF]/90 via-[#176AAF]/40 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col justify-center gap-2 p-5 sm:py-6 sm:pl-8 sm:pr-9">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
          <h2 className="text-[24px] font-medium leading-snug tracking-tight text-[#1a1a1a]">
            {name}
          </h2>
          {badge && (
            <span className="inline-flex shrink-0 items-center rounded-full bg-slate-100 px-2.5 py-1 text-[12px] font-medium text-slate-600">
              {badge}
            </span>
          )}
        </div>
        {thumbnailSummary?.trim() ? (
          <p className="text-[18px] leading-relaxed text-slate-600">
            {thumbnailSummary}
          </p>
        ) : null}
        <span className="mt-0.5 inline-flex items-center gap-1 text-[16px] font-medium text-[#1265EF] transition-all group-hover:gap-1.5">
          Read case study
          <ArrowLongRightIcon className="h-4 w-4 shrink-0" aria-hidden />
        </span>
      </div>
    </a>
  );
};

const MoreCaseStudies = () => {
  const allStudies = useQuery(api.caseStudies.listAll);
  const isLoading = allStudies === undefined;
  const studies = allStudies ?? [];

  return (
    <div className="bg-white min-h-screen font-['Colfax']">
      <Navbar />

      <main>
        <section className="pt-[140px] pb-12 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
              OUR CUSTOMERS
            </div>
            <h1
              className="text-[48px] lg:text-[64px] leading-[1.05] font-semibold text-black mb-5"
              style={{ letterSpacing: "-0.03em" }}
            >
              Client Stories
            </h1>
            <p className="text-xl text-gray-600 mb-0 leading-relaxed max-w-3xl mx-auto">
              We've helped our clients launch a wide range of web applications,
              including two-sided marketplaces, social networks, productivity
              tools, process management tools, and much more. Our products
              support millions of users and billions of dollars of transaction
              volume.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-[1100px] mx-auto px-6 flex flex-col gap-5">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md animate-pulse sm:flex-row"
                >
                  <div className="h-44 w-full shrink-0 bg-gray-200 sm:h-auto sm:min-h-[180px] sm:w-[36%]" />
                  <div className="flex flex-1 flex-col gap-2 p-5 sm:py-6 sm:pl-8">
                    <div className="h-6 w-1/3 rounded bg-gray-200" />
                    <div className="h-4 w-full rounded bg-gray-200" />
                    <div className="h-4 w-full rounded bg-gray-200" />
                    <div className="h-4 w-5/6 rounded bg-gray-200" />
                    <div className="mt-2 h-4 w-36 rounded bg-gray-200" />
                  </div>
                </div>
              ))
            ) : studies.length > 0 ? (
              studies.map((study) => (
                <CaseStudyCard
                  key={study._id}
                  slug={study.slug}
                  name={study.name}
                  thumbnailSummary={study.thumbnailSummary}
                  thumbnailImage={study.thumbnailImage}
                  businessType={study.businessType}
                  filteringCategory={study.filteringCategory}
                />
              ))
            ) : (
              <div className="text-center py-24 text-gray-400 text-lg">
                No case studies found.
              </div>
            )}
          </div>
        </section>

        <SaasCTA />
      </main>

      <Footer />
    </div>
  );
};

export default MoreCaseStudies;
