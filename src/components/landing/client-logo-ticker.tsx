export const ClientLogoTicker = () => {
  const logos = [
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9e8bf871c558358f1a5b_dividend.webp", alt: "Dividend", text: "$300m+ raised" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9ee1ae74665b5db8e326_team.webp", alt: "Team", text: "YC funded" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9f84d5671aa3618dd823_next.webp", alt: "Next", text: "$120m raised from Softbank" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9ff1b72d8c1ec14d79f4_cadence.webp", alt: "Cadence", text: "500 Startups funded" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669aa054a5cede730dd27b7c_masa.webp", alt: "Masa", text: "Techstars funded" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9c3d751e65ec09878e99_breakr.webp", alt: "Breakr", text: "Andreessen Horowitz funded" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a999f6474337c4a7222a6_cvs.webp", alt: "CVS" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a98f0f9d898fd7a42ee37_hp.webp", alt: "HP" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a98856387d81692ff84c7_634856296daa1063fb978b74_att.webp", alt: "AT&T" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9ab61b705a1b138a54a4_teach.webp", alt: "Teach" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/632d6dc4b4679012dc6be0fc_brand-microsoft.svg", alt: "Microsoft" },
    { src: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9b18abc279093236c577_lenovo.webp", alt: "Lenovo" }
  ];

  const logosWithText = logos.filter(logo => logo.text);
  const logosWithoutText = logos.filter(logo => !logo.text);
  
  // Combine them ensuring logos with text come first
  const displayLogos = [...logosWithText, ...logosWithoutText];

  return (
    <section className="pt-0 pb-8 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {displayLogos.map((logo, index) => {
            let logoClass = "h-8";
            if (logo.alt === "Next") {
              logoClass = "h-6"; // Smaller
            } else if (logo.alt === "Cadence") {
              logoClass = "h-10"; // Bigger
            } else if (logo.alt === "Microsoft") {
              logoClass = "h-7"; // Slightly smaller
            }

            return (
              <div
                key={`${logo.alt}-${index}`}
                className="flex flex-col items-center justify-start p-4 rounded-xl"
              >
                {/* Fixed height container to ensure text alignment */}
                <div className="h-12 w-full flex items-center justify-center mb-1">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`${logoClass} w-auto object-contain opacity-70 mix-blend-multiply grayscale`}
                  />
                </div>
                {logo.text && (
                  <p className="text-[10px] text-gray-400 text-center font-medium whitespace-nowrap">
                    {logo.text}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
