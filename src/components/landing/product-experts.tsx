import { BriefcaseIcon, AcademicCapIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";

const EXPERTS = [
  {
    name: "Mike W.",
    image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1767146211465x589311195573718900/mike.png",
    stats: [
      { icon: BriefcaseIcon, label: "Experience", value: "10+ years" },
      { icon: RocketLaunchIcon, label: "Products", value: "50+ products built" },
      { icon: AcademicCapIcon, label: "Education", value: "MBA from NYU Stern" }
    ]
  },
  {
    name: "Vlad L.",
    image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1767146222062x244957364883829700/vlad.png",
    stats: [
      { icon: BriefcaseIcon, label: "Experience", value: "10+ years" },
      { icon: RocketLaunchIcon, label: "Products", value: "100+ products built" },
      { icon: AcademicCapIcon, label: "Education", value: "MBA from Harvard Business School" }
    ]
  },
  {
    name: "Andrew H.",
    image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1767146234173x743718087852878200/andrew.png",
    stats: [
      { icon: BriefcaseIcon, label: "Experience", value: "10+ years" },
      { icon: RocketLaunchIcon, label: "Products", value: "100+ products built" },
      { icon: AcademicCapIcon, label: "Education", value: "MBA from Harvard Business School" }
    ]
  }
];

export const ProductExperts = () => {
  return (
    <section className="py-24 bg-[#0A2540]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[15px] font-semibold text-[#0AE4E3] uppercase tracking-wider mb-3 block">
            DISCOVERY
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
            Led by product experts
          </h2>
          <p className="text-[20px] text-[#ADBDCC] leading-relaxed">
            Senior product managers who have seen hundreds of products come to life.<br />They'll help you refine your vision and build a roadmap for success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {EXPERTS.map((expert, index) => (
            <div key={index} className="bg-[#112F4E]/50 border border-[#1E3A5F] rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4" style={{ border: 'none' }}>
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="w-full h-full object-cover"
                  style={{ border: 'none', outline: 'none' }}
                />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6">{expert.name}</h3>
              
              <div className="w-full space-y-4">
                {expert.stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-4 bg-[#0A2540]/50 rounded-lg p-3 border border-[#1E3A5F]">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center text-[#0AE4E3]">
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-[13px] text-[#ADBDCC] uppercase tracking-wide font-medium">{stat.label}</p>
                      <p className="text-white font-semibold">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

