"use client";

import {
  Navbar,
  Hero,
  Footer,
  ApproachContent,
  WhoWeAre,
  ApproachValues,
  SaasCTA,
} from "@/components/landing";

const Approach = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @font-face {
            font-family: 'Colfax';
            src: url('/fonts/Colfax-Regular.woff2') format('woff2'), url('/fonts/Colfax-Regular.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Colfax';
            src: url('/fonts/Colfax-Medium.woff2') format('woff2'), url('/fonts/Colfax-Medium.woff') format('woff');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Colfax';
            src: url('/fonts/Colfax-Bold.woff2') format('woff2'), url('/fonts/Colfax-Bold.woff') format('woff');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Colfax';
            src: url('/fonts/Colfax-Black.woff2') format('woff2'), url('/fonts/Colfax-Black.woff') format('woff');
            font-weight: 900;
            font-style: normal;
            font-display: swap;
          }
        `
      }} />
      <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900" style={{ fontFamily: "'Colfax', sans-serif" }}>
        <Navbar />
        <main>
          <Hero 
            label="THE PROBLEM"
            title="Software is eating the world... but software development is broken"
            description="Software powers today's economy but the way it is created is still stuck in the dark ages. Writing millions of lines of code to build products results in a process that is slow, expensive, unreliable, and inaccessible to most."
            showImages={false}
            centerText={false}
          />
          <ApproachContent />
          <WhoWeAre 
            label="Who we are"
            title="Our mission is to set the new standard for building software"
            description="by helping others launch scalable, secure, and performant products in a fraction of the time and cost of traditional development."
            bgColor="#0A2540"
            labelColor="#0AE4E3"
            titleColor="#FFFFFF"
            descriptionColor="#ADBDCC"
          />
          <ApproachValues />
          <SaasCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Approach;

