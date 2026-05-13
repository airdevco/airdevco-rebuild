"use client";

import {
  Navbar,
  CaseStudies,
  HOME_CASE_STUDY_SLIDES,
  ClientLogoTicker,
  Stats,
  Testimonials,
  Footer,
  BusinessTypes,
} from "@/components/landing";
import { IndexLandingHero } from "@/components/landing/index-landing-hero";
import { IndexLandingCTA } from "@/components/landing/index-landing-cta";

const Index = () => {
  return (
    <>
      <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main>
          <IndexLandingHero />
          <CaseStudies
            slides={HOME_CASE_STUDY_SLIDES}
            lazyLogoRowImages
            lazyHeroImage
          />
          <BusinessTypes />
          <Stats hideGallery compactMetricsBottom />
          <div className="pt-12 pb-4 lg:pt-16 lg:pb-8 bg-white">
            <ClientLogoTicker variant="featured" logoImgLoading="lazy" />
          </div>
          <Testimonials avatarImgLoading="lazy" />
          <IndexLandingCTA showSideVisual meshInnerPadding="roomy" showClientStories={false} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
