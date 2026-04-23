"use client";

const APPROACH_TESTIMONIALS = [
  {
    quote:
      "Airdev has been critical to our venture's progress. They truly offer a seemingly impossible value proposition: they not only sit in the intersection between quality, speed, and cost, but also bring business wits into the process. In the end, I truly considered Airdev our partners in our venture.",
    name: "Andrés Vélez",
    role: "Founder and CEO, Tributi",
    image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6500aaa230666988d62b5d2a_Andres.png",
  },
  {
    quote:
      "Airdev is a great solution for companies who are starting at the very earliest stage, who are trying to come up with a proof of concept…But, they're not just for the brand new ideation and MVP types. Airdev has built a system that's enabled us to scale as well.",
    name: "Phil Meachin",
    role: "SVP, Head of Product, Dividend Finance",
    image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6500af6291ac594b67d99f52_phil.png",
  },
  {
    quote:
      "Airdev helped me launch my marketplace for therapy services in a fraction of the time and cost quoted by other vendors. Being non-technical, I relied on Airdev's guidance for prioritizing the most critical MVP features to test my hypothesis. Really recommend using this team if you want a strong product to market quickly!",
    name: "Nisha Bhalla",
    role: "CEO, Anima Bios",
    image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/650dac8fd3c770962cbd6e24_nisha.png",
  },
];

export function ApproachTestimonialsSection() {
  return (
    <section className="pt-28 pb-28 bg-[#F6F9FC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="text-[16px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
            WHAT CLIENTS SAY
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 max-w-2xl mx-auto">
            Clients trust Airdev to launch and scale
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {APPROACH_TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100/50 shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_16px_rgba(0,0,0,0.04)] flex flex-col"
            >
              <blockquote className="text-[16px] text-[#0A0A0A] leading-relaxed mb-6 font-normal">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0 border border-gray-100"
                />
                <div>
                  <div className="font-semibold text-[#0A0A0A] text-base">{testimonial.name}</div>
                  <div className="text-gray-500 text-[14px]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
