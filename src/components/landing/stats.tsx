import { WhoWeAre } from "./who-we-are";

const STATS_ITEMS = [
  { label: "Products shipped", value: "1,000", suffix: "+" },
  { label: "Team members", value: 100, suffix: "+" },
  { label: "Users on our products", value: "10M", suffix: "+" },
  { label: "Bubble agency", value: "#1", suffix: "" },
];

const GALLERY_ITEMS = [
    { title: "Workflow Automation", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/65bd08c2b1acbe835709462b_5-Workflow%20page.jpg" },
    { title: "Marketplace Platform", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6543cc2869811415b8e810a2_homeswap.webp" },
    { title: "Analytics Dashboard", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/65bd08c26a7fb9ac7dd0218f_3-Dashboard%20Page%20with%20aggregate%20metrics.jpg" },
    { title: "Search Engine", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/65bd08c43df44feea829410b_1-Startup%20Search%20Page.jpg" },
    { title: "Social Network", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6543cc27ee364f01aadbb1be_lens.webp" },
    { title: "Travel Platform", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6543cc273a280b98e26fd0b2_tourvista.webp" },
    { title: "Company Profile", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/65bd08c2480b92d9276b8e97_2-Company%20Profile.jpg" },
    { title: "Community Hub", image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765574373663x352499346676563300/tt1.png" },
    // Duplicating items to reach 15
    { title: "Workflow Automation", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/65bd08c2b1acbe835709462b_5-Workflow%20page.jpg" },
    { title: "Marketplace Platform", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6543cc2869811415b8e810a2_homeswap.webp" },
    { title: "Analytics Dashboard", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/65bd08c26a7fb9ac7dd0218f_3-Dashboard%20Page%20with%20aggregate%20metrics.jpg" },
    { title: "Search Engine", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/65bd08c43df44feea829410b_1-Startup%20Search%20Page.jpg" },
    { title: "Social Network", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6543cc27ee364f01aadbb1be_lens.webp" },
    { title: "Travel Platform", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6543cc273a280b98e26fd0b2_tourvista.webp" },
    { title: "Company Profile", image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/65bd08c2480b92d9276b8e97_2-Company%20Profile.jpg" },
  ];

export const Stats = () => {
  return (
    <WhoWeAre
      label="WHO WE ARE"
      title="Setting the standard for the new way to build"
      description="Visual development and AI are changing how software gets made. We're leading that shift."
      stats={STATS_ITEMS}
      items={GALLERY_ITEMS}
      bgColor="#0A2540"
      labelColor="#0AE4E3"
      titleColor="#FFFFFF"
      descriptionColor="#ADBDCC"
                      />
  );
};
