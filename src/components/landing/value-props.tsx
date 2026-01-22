import { 
  RocketLaunchIcon, 
  ArrowPathIcon, 
  AdjustmentsHorizontalIcon, 
  ComputerDesktopIcon, 
  ChartBarIcon, 
  UserGroupIcon 
} from "@heroicons/react/24/solid";

const VALUES = [
  {
    title: "Launch leaner and faster",
    description: "Smaller teams, faster builds. Visual development cuts out the bloat of traditional development, so you get to market while the window is still open.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Iterate at the speed of feedback",
    description: "Adding features or changing direction happens fast. Your product evolves as quickly as your learning.",
    icon: ArrowPathIcon,
  },
  {
    title: "100% flexible",
    description: "No templates, no compromises. We build exactly what your business needs, down to every workflow and edge case.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    title: "Modern UI",
    description: "Your product will look and feel like it belongs alongside the best SaaS tools on the market. Clean, intuitive, and built to current standards.",
    icon: ComputerDesktopIcon,
  },
  {
    title: "Scales with you",
    description: "Start with an MVP and grow to millions of users. The infrastructure handles it from day one.",
    icon: ChartBarIcon,
  },
  {
    title: "Ongoing support",
    description: "We stick around after launch. As your business evolves, we're here to help you ship new features and keep things running smoothly.",
    icon: UserGroupIcon,
  },
];

export const ValueProps = () => {
  return (
    <section className="py-24 bg-[#0A2540]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-left max-w-2xl mb-16">
          <span className="text-[15px] font-semibold text-[#0AE4E3] uppercase tracking-wider mb-3 block">
            BENEFITS
          </span>
          <h2 className="text-[48px] font-semibold tracking-tight leading-none text-white mb-6">
            Why founders choose us
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our approach lets us deliver better results, faster and cheaper than traditional agencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((value, index) => (
            <div key={index} className="bg-[#112F4E]/50 border border-[#1E3A5F] rounded-2xl p-8 flex flex-col h-full">
              <div className="mb-4">
                <value.icon className="w-8 h-8 text-[#0AE4E3]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-[#ADBDCC] text-[18px] leading-relaxed flex-grow">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

