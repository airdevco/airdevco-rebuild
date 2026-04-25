import { ShieldCheckIcon, ChartBarIcon } from "@heroicons/react/24/solid";

const CAPABILITIES = [
  {
    category: "Security",
    description: "Enterprise-grade security standards to protect your data and your users.",
    icon: ShieldCheckIcon,
    footerLeft: "All systems secure",
    items: [
      {
        title: "SOC 2 Type II Compliance",
        detail: "Independently audited controls across security, availability, and confidentiality.",
      },
      {
        title: "End-to-end Data Encryption",
        detail: "AES-256 at rest and TLS 1.3 in transit across your application.",
      },
      {
        title: "Role-based Access Control (RBAC)",
        detail: "Granular permissions so each team member only gets access they need.",
      },
    ],
  },
  {
    category: "Scalability",
    description: "Built on infrastructure that grows with your business, from day one to millions of users.",
    icon: ChartBarIcon,
    footerLeft: "99.9% uptime SLA",
    items: [
      {
        title: "Auto-scaling Architecture",
        detail: "Resources scale up as demand increases and scale down when usage drops.",
      },
      {
        title: "Global CDN Distribution",
        detail: "Low-latency delivery through distributed edge locations worldwide.",
      },
      {
        title: "High Availability & Uptime",
        detail: "Redundant infrastructure and failover systems designed for reliability.",
      },
    ],
  },
];

export const CapabilitiesSection = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Named uniquely so we don't clash with Tailwind's \`pulse\` utility keyframes */
            @keyframes capabilitiesStatusPulse {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.5; transform: scale(0.8); }
            }
          `,
        }}
      />
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
            <div
              key={index}
              className="bg-white rounded-[26px] border border-[#E5ECF6] shadow-[0_24px_70px_-28px_rgba(18,101,239,0.28)] overflow-hidden"
            >
              <div className="px-8 pt-8 pb-7 border-b border-[#EEF2F8]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1265EF]/10 flex items-center justify-center text-[#1265EF]">
                    <cap.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a]">{cap.category}</h3>
                </div>

                <p className="text-[#425466] text-lg leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <ul className="border-b border-[#EEF2F8] px-8">
                {cap.items.map((item, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[36px_1fr] items-start gap-3 py-4 border-b border-[#EEF2F8] last:border-b-0"
                  >
                    <span className="text-sm font-semibold leading-[1.4] tracking-[0.12em] text-[#9DAAC2]">
                      {`${i + 1}`.padStart(2, "0")}
                    </span>
                    <div>
                      <div className="text-[14px] leading-[1.4] font-medium text-[#030A3A]">{item.title}</div>
                      <p className="text-[14px] leading-[1.45] text-[#5F7085] mt-1">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex items-center px-8 py-5">
                <div
                  className="flex items-center text-[#64748b]"
                  style={{ gap: "7px", fontSize: "14px" }}
                >
                  <span
                    className="inline-block shrink-0 rounded-full"
                    style={{
                      width: 7,
                      height: 7,
                      background: "#2d47f0",
                      boxShadow: "0 0 6px #2d47f0",
                      animation: "capabilitiesStatusPulse 2s ease-in-out infinite",
                    }}
                  />
                  <span style={{ paddingTop: 4 }}>{cap.footerLeft}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};

