"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Navbar, Footer, SaasCTA } from "@/components/landing";
import { ROUTES } from "@/config/routes";
import { ChevronRight } from "lucide-react";

const StatBadge = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div className="relative pl-4" style={{ borderLeft: "2px solid #00d4ff" }}>
    <div className="text-[13px] text-gray-400 mb-0.5">{label}</div>
    <div className="text-[16px] font-semibold text-[#1a1a1a] leading-snug">
      {value}
    </div>
  </div>
);

const CaseStudyDetail = ({ slug }: { slug: string }) => {
  const study = useQuery(api.caseStudies.getBySlug, { slug });

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

  return (
    <div className="bg-white min-h-screen font-['Colfax']">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-[120px] pb-0 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[14px] text-gray-400 mb-6">
              <a href={ROUTES.MORE_CASE_STUDIES} className="hover:text-[#1265EF] transition-colors">
                Client Stories
              </a>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#1a1a1a]">{study.slug}</span>
            </div>

            {/* Customer logo */}
            {study.customerLogo && (
              <div className="mb-6">
                <img
                  src={study.customerLogo}
                  alt={study.slug}
                  className="h-10 w-auto object-contain"
                />
              </div>
            )}

            {/* Headline */}
            <h1
              className="text-[36px] lg:text-[52px] font-semibold text-[#1a1a1a] leading-[1.1] mb-8 max-w-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              {study.name}
            </h1>

            {/* Stats bar */}
            {stats.length > 0 && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 p-6 bg-[#F6F9FC] rounded-2xl">
                {stats.map((stat) => (
                  <StatBadge key={stat.label} label={stat.label} value={stat.value} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Hero image */}
        {study.thumbnailImage && (
          <section className="pb-16">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/7] shadow-xl">
                <img
                  src={study.thumbnailImage}
                  alt={study.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#176AAF]/60 via-transparent to-transparent mix-blend-color" />
              </div>
            </div>
          </section>
        )}

        {/* Hero summary */}
        {study.heroSummary && (
          <section className="pb-16">
            <div className="max-w-[800px] mx-auto px-6">
              <p className="text-[20px] text-gray-700 leading-relaxed">
                {study.heroSummary}
              </p>
            </div>
          </section>
        )}

        {/* Objective / Solution / Result */}
        {(study.objective || study.solution || study.result) && (
          <section className="py-16 bg-[#F6F9FC]">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="grid lg:grid-cols-3 gap-8">
                {study.objective && (
                  <div>
                    <div className="text-[13px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
                      Objective
                    </div>
                    <p className="text-[17px] text-gray-700 leading-relaxed">
                      {study.objective}
                    </p>
                  </div>
                )}
                {study.solution && (
                  <div>
                    <div className="text-[13px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
                      Solution
                    </div>
                    <p className="text-[17px] text-gray-700 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                )}
                {study.result && (
                  <div>
                    <div className="text-[13px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
                      Result
                    </div>
                    <p className="text-[17px] text-gray-700 leading-relaxed">
                      {study.result}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Quote */}
        {study.quote && (
          <section className="py-16 bg-[#0A2540]">
            <div className="max-w-[800px] mx-auto px-6 text-center">
              <blockquote className="text-[24px] lg:text-[28px] font-medium text-white leading-relaxed mb-8">
                &ldquo;{study.quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                {study.quoteImage && (
                  <img
                    src={study.quoteImage}
                    alt={study.quoteName ?? ""}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                  />
                )}
                <div className="text-left">
                  {study.quoteName && (
                    <div className="font-semibold text-white">
                      {study.quoteName}
                    </div>
                  )}
                  {study.quoteRole && (
                    <div className="text-[#ADBDCC] text-[14px]">
                      {study.quoteRole}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Gallery */}
        {study.galleryImages && study.galleryImages.length > 0 && (
          <section className="py-16">
            <div className="max-w-[1200px] mx-auto px-6">
              <h2 className="text-[32px] font-semibold text-[#1a1a1a] mb-8">
                Gallery
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {study.galleryImages.map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-video bg-gray-100">
                    <img
                      src={src}
                      alt={`${study.slug} screenshot ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back link */}
        <section className="py-12">
          <div className="max-w-[1200px] mx-auto px-6">
            <a
              href={ROUTES.MORE_CASE_STUDIES}
              className="inline-flex items-center gap-1.5 text-[#1265EF] font-medium hover:underline text-[16px]"
            >
              ← Back to all client stories
            </a>
          </div>
        </section>

        <SaasCTA />
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
