"use client";

import { WhoWeAre } from "@/components/landing/who-we-are";

const APPROACH_STATS_ITEMS = [
  { label: "Average time to launch MVP", value: "4-8", suffix: " weeks" },
  { label: "Lower cost than traditional agencies", value: 70, suffix: "%", className: "lg:pr-6" },
  { label: "Products built and counting", value: "1,000", suffix: "+" },
  { label: "Senior specialists on your project", value: 100, suffix: "%" },
];

const APPROACH_GALLERY_ITEMS = [
  { title: "Workflow Automation", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769429191897x436633841629032500/image1.webp" },
  { title: "Marketplace Platform", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6543cc2869811415b8e810a2_homeswap.webp" },
  { title: "Analytics Dashboard", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769429549134x328873006570567400/image3.webp" },
  { title: "Search Engine", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769430219522x941368570781668100/docseek1%20%281%29.webp" },
  { title: "Social Network", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6543cc27ee364f01aadbb1be_lens.webp" },
  { title: "Travel Platform", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769432626672x566179361881819840/aircal2.webp" },
  { title: "Company Profile", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769429678886x412652779463499500/imager2-2.webp" },
  { title: "Community Hub", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769431075653x923487208758857500/plyground.webp" },
  { title: "Workflow Automation", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769444557266x857893168824462500/cerebro.png" },
  { title: "Marketplace Platform", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769446640637x420605172794157100/ch.webp" },
  { title: "Analytics Dashboard", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769431327914x326072329645070460/craftly2.webp" },
  { title: "Search Engine", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769446581327x991888232717732400/kidsbook2.webp" },
  { title: "Social Network", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769444704254x747992525882827000/learnmate.webp" },
  { title: "Travel Platform", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6543cc273a280b98e26fd0b2_tourvista.webp" },
  { title: "Company Profile", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769446525143x563993953087865000/tax.webp" },
];

export function ApproachWhoWeAreSection() {
  return (
    <WhoWeAre
      label="WHY TEAMS CHOOSE AIRDEV"
      title="Built for speed, quality, and efficiency"
      description="Our process combines senior product experts with AI-powered execution so you can launch faster, spend less, and still get world-class outcomes."
      stats={APPROACH_STATS_ITEMS}
      items={APPROACH_GALLERY_ITEMS}
      hideGallery
      compactMetricsBottom
      bgColor="#0A2540"
      labelColor="#0AE4E3"
      titleColor="#FFFFFF"
      descriptionColor="#ADBDCC"
      titleClassName="max-w-[500px]"
      titleLineHeight="1.28"
      statValueClassName="whitespace-nowrap"
      statLabelClassName="lg:whitespace-nowrap"
      statsGridClassName="gap-6 lg:gap-x-10 lg:gap-y-6"
      statItemClassName="pt-9 pb-9 pr-0"
    />
  );
}
