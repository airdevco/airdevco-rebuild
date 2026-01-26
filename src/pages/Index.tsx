import {
  Navbar,
  Hero,
  CaseStudies,
  ClientLogoTicker,
  Stats,
  Testimonials,
  SaasCTA,
  Footer,
  BusinessTypes,
} from "@/components/landing";
import { useSEO } from "@/hooks/use-seo";

const Index = () => {
  useSEO({
    title: "Airdev | The leading no-code and Bubble app development agency",
    description: "Airdev is the leader in no-code & Bubble app development. We help businesses launch software products in a fraction of the time & cost of traditional developers.",
    ogImage: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
  });

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238405098x558032232358736100/Colfax-Regular.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238390337x266305410589744440/Colfax-Medium.woff') format('woff');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238365698x537474310193827300/Colfax-Bold.woff') format('woff');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238333088x971494408092793500/Colfax-Black.woff') format('woff');
            font-weight: 900;
            font-style: normal;
            font-display: swap;
          }
        `
      }} />
      <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900" style={{ fontFamily: "'Colfax', sans-serif" }}>
        <Navbar />
        <main>
          <Hero centerText={true} />
          <div className="pt-16">
            <ClientLogoTicker />
          </div>
          <CaseStudies />
          <BusinessTypes />
          <Stats />
          <Testimonials />
          <SaasCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
