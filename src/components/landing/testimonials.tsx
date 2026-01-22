import { ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

interface TestimonialsProps {
  label?: string;
  title?: string;
  description?: string;
  testimonials?: Testimonial[];
  linkText?: string;
  linkUrl?: string;
  backgroundColor?: string;
}

const DEFAULT_TESTIMONIALS = [
    {
      quote: "Airdev has been critical to our venture's progress. They truly offer a seemingly impossible value proposition: they not only sit in the intersection between quality, speed, and cost, but also bring business wits into the process. In the end, I truly considered Airdev our partners in our venture.",
      name: "Andrés Vélez",
      role: "Founder and CEO, Tributi",
      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6500aaa230666988d62b5d2a_Andres.png"
    },
    {
      quote: "Airdev is a great solution for companies who are starting at the very earliest stage, who are trying to come up with a proof of concept…But, they're not just for the brand new ideation and MVP types. Airdev has built a system that's enabled us to scale as well.",
      name: "Phil Meachin",
      role: "SVP, Head of Product, Dividend Finance",
      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6500af6291ac594b67d99f52_phil.png"
    },
    {
      quote: "Airdev helped me launch my marketplace for therapy services in a fraction of the time and cost quoted by other vendors. Being non-technical, I relied on Airdev's guidance for prioritizing the most critical MVP features to test my hypothesis. Really recommend using this team if you want a strong product to market quickly!",
      name: "Nisha Bhalla",
      role: "CEO, Anima Bios",
      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/650dac8fd3c770962cbd6e24_nisha.png"
    },
    {
      quote: "What was most attractive about no-code and Airdev was the cost, the quality, and the trust and communication aspect…Airdev was the perfect solution because they could help me build something fast, and more importantly, affordable",
      name: "Jason Shatsky",
      role: "Co-Founder and CEO, TicketRev",
      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6500af0242257e314ee8b4c2_jason.png"
    },
    {
      quote: "In just two weeks, AirDev created an elegantly streamlined version of our previous gig management platform, built on top of our Salesforce data. The result became an instant hit with our network of linguists, while dramatically reducing the time we spend on ongoing maintenance.",
      name: "Matt Conger",
      role: "CEO and Founder, Cadence Translate",
      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/650af0adf55118f1835773b3_Matt%20Conger_Cadence.png"
    },
    {
      quote: "Working with AirDev was an entirely different experience from typical outsourced developers; it was like having another member of the team. Their ability to translate broad guidance and run with ideas saved me and our team 40+ hours per week.",
      name: "Richard Sherrington",
      role: "Engagement Manager, McKinsey & Company",
      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/650af0ad1fd3a8d78150fe34_Richard%20Sherrington_Mckinsey.png"
    },
    {
      quote: "As non-technical, female founders of a mission-driven organization, we got a lot of feedback that our idea was nice but we needed to get a technical co-founder on board to be taken seriously. What Airdev has been able to accomplish in just a week is totally astounding and fits our needs perfectly.",
      name: "Madeline Dangerfield-Cha",
      role: "Co-founder, Mon Ami",
      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/650d96fd849248da2ffc5596_Madeline.png"
    },
    {
      quote: "Having partnered with Airdev on previous projects both for HP and other leading technology companies, it was clear that they were best placed to deliver this sort of complex tool.",
      name: "Douglas Jeffrey",
      role: "Chairman, Consenna",
      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6500afb08c847142b80af69f_douglas.png"
    },
    {
      quote: "We've spent the same amount on consultants implementing our off-the-shelf system as we've spent building something totally custom with Airdev.",
      name: "Aidan Wojtech",
      role: "Director, Analytics & Process Improvement Greener Corporation",
      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/650d96e25450f83d337e1545_Aidan.png"
    }
];

export const Testimonials = ({
  label = "WHAT CLIENTS SAY",
  title = "Clients trust Airdev to launch and scale",
  description = "Hear from the founders and teams we've worked with.",
  testimonials = DEFAULT_TESTIMONIALS,
  linkText = "More client stories",
  linkUrl = "/client-stories",
  backgroundColor = "white"
}: TestimonialsProps = {}) => {
  return (
    <section className="pt-32 pb-16 overflow-visible relative" style={{ backgroundColor }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="text-[16px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
            {label}
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6 max-w-2xl mx-auto">
            {title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="relative pb-12">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 border border-gray-100/50 shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_16px_rgba(0,0,0,0.04)] flex flex-col break-inside-avoid"
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
                    <div className="text-gray-500" style={{ fontSize: '14px' }}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* More Client Stories Link - centered below entire masonry */}
          {linkText && linkUrl && (
            <div className="mt-8 flex justify-center">
              <a 
                href={linkUrl} 
                className="text-[16px] font-medium text-[#1265EF] hover:text-[#1a1a1a] transition-colors flex items-center gap-1.5 group/link"
              >
                {linkText}
                <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Diagonal Bottom Edge - Removed to prevent clipping */ }
    </section>
  );
};


