import { ShieldCheckIcon, ServerIcon } from "@heroicons/react/24/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const CAPABILITIES = [
  {
    category: "Security",
    description: "Enterprise-grade security standards to protect your data and your users.",
    icon: ShieldCheckIcon,
    items: [
      "SOC 2 Type II Compliance",
      "End-to-end Data Encryption",
      "Role-based Access Control (RBAC)"
    ]
  },
  {
    category: "Scalability",
    description: "Built on infrastructure that grows with your business, from day one to millions of users.",
    icon: ServerIcon,
    items: [
      "Auto-scaling Architecture",
      "Global CDN Distribution",
      "High Availability & Uptime"
    ]
  }
];

export const CapabilitiesSection = () => {
  return (
    <section className="py-24 bg-[#F6F9FC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3 block">
            CAPABILITIES
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-6">
            Enterprise-grade foundation
          </h2>
          <p className="text-[20px] text-[#425466] leading-relaxed">
            We build on a robust technical foundation designed to meet the rigorous demands of modern enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {CAPABILITIES.map((cap, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#1265EF]/10 flex items-center justify-center text-[#1265EF]">
                  <cap.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a1a]">{cap.category}</h3>
              </div>
              
              <p className="text-[#425466] text-lg mb-8 leading-relaxed">
                {cap.description}
              </p>

              <ul className="space-y-4">
                {cap.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#10b981] flex-shrink-0" />
                    <span className="text-lg text-[#1a1a1a] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

