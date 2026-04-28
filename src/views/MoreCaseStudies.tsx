"use client";

import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Navbar, Footer, SaasCTA } from "@/components/landing";
import { caseStudyRoute } from "@/config/routes";
import { ChevronRight } from "lucide-react";

type FilterCategory = "all" | "startups" | "enterprises";

const CaseStudyCard = ({
  slug,
  name,
  thumbnailImage,
  customerLogo,
  businessType,
  productType,
  timeline,
  keyResults,
}: {
  slug: string;
  name: string;
  thumbnailImage?: string;
  customerLogo?: string;
  businessType?: string;
  productType?: string;
  timeline?: string;
  keyResults?: string;
}) => (
  <a
    href={caseStudyRoute(slug)}
    className="group relative rounded-2xl overflow-hidden bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col"
  >
    {/* Image */}
    <div className="relative aspect-[16/10] overflow-hidden">
      {thumbnailImage ? (
        <img
          src={thumbnailImage}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#0A2540] to-[#1265EF]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#176AAF] via-[#176AAF]/70 to-[#176AAF]/30 mix-blend-color opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent" />
      {customerLogo && (
        <div className="absolute top-5 left-5 z-10">
          <img
            src={customerLogo}
            alt={slug}
            className="h-8 w-auto object-contain brightness-0 invert"
          />
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-1 bg-white">
      <h3 className="text-[17px] font-semibold text-[#1a1a1a] leading-snug mb-4 line-clamp-3">
        {name}
      </h3>
      <div className="mt-auto space-y-2">
        {businessType && (
          <div className="flex gap-2 text-[13px]">
            <span className="text-gray-400 w-24 shrink-0">Business</span>
            <span className="font-medium text-[#1a1a1a]">{businessType}</span>
          </div>
        )}
        {productType && (
          <div className="flex gap-2 text-[13px]">
            <span className="text-gray-400 w-24 shrink-0">Product</span>
            <span className="font-medium text-[#1a1a1a] line-clamp-1">{productType}</span>
          </div>
        )}
        {timeline && (
          <div className="flex gap-2 text-[13px]">
            <span className="text-gray-400 w-24 shrink-0">Timeline</span>
            <span className="font-medium text-[#1a1a1a]">{timeline}</span>
          </div>
        )}
        {keyResults && (
          <div className="flex gap-2 text-[13px] pt-1 border-t border-gray-100 mt-2">
            <span className="text-gray-400 w-24 shrink-0">Results</span>
            <span className="font-medium text-[#1265EF] line-clamp-2">{keyResults}</span>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-center gap-1 text-[#1265EF] text-[14px] font-medium">
        Read story <ChevronRight className="w-3.5 h-3.5" />
      </div>
    </div>
  </a>
);

const MoreCaseStudies = () => {
  const [filter, setFilter] = useState<FilterCategory>("all");
  const allStudies = useQuery(api.caseStudies.listAll);

  const filtered =
    filter === "all"
      ? allStudies
      : allStudies?.filter((s) => s.filteringCategory === filter);

  const isLoading = allStudies === undefined;

  return (
    <div className="bg-white min-h-screen font-['Colfax']">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-[140px] pb-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
              OUR CUSTOMERS
            </div>
            <h1
              className="text-[48px] lg:text-[64px] leading-[1.05] font-semibold text-black mb-5"
              style={{ letterSpacing: "-0.03em" }}
            >
              Client Stories
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              We've helped hundreds of startups, fast-growing businesses, and
              Fortune 500 enterprises launch production-grade no-code
              applications in a fraction of the time and cost.
            </p>

            {/* Filters */}
            <div className="flex items-center gap-3">
              {(
                [
                  { id: "all", label: "All stories" },
                  { id: "startups", label: "Startups" },
                  { id: "enterprises", label: "Enterprises" },
                ] as { id: FilterCategory; label: string }[]
              ).map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setFilter(id)}
                  className={`px-4 py-1.5 rounded-full text-[15px] font-medium transition-colors ${
                    filter === id
                      ? "bg-[#1265EF] text-white"
                      : "text-[#1a1a1a] hover:text-[#617083]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="pb-24">
          <div className="max-w-[1200px] mx-auto px-6">
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden animate-pulse"
                  >
                    <div className="aspect-[16/10] bg-gray-200" />
                    <div className="p-6 bg-white space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                      <div className="h-4 bg-gray-200 rounded w-1/2" />
                      <div className="h-4 bg-gray-200 rounded w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filtered && filtered.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((study) => (
                  <CaseStudyCard
                    key={study._id}
                    slug={study.slug}
                    name={study.name}
                    thumbnailImage={study.thumbnailImage}
                    customerLogo={study.customerLogo}
                    businessType={study.businessType}
                    productType={study.productType}
                    timeline={study.timeline}
                    keyResults={study.keyResults}
                  />
                ))}
              </div>
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
