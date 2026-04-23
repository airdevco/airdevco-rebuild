import { CoreValuesMvpsHero } from "./core-values-mvps-hero";

const CORE_VALUES = [
  {
    title: "Excellence in our craft",
    description:
      "We treat our work as our craft, putting in the extra effort to get it right and sharpen our skills.",
    means: [
      "We hold ourselves and those we work with to the highest standards",
      "We pay attention to the small details, even when no one is looking",
      "We have a growth mindset, using challenges to better ourselves",
      "We focus on inputs such as process, effort, and thoughtfulness",
    ],
    watchOut: [
      "Getting stuck in the small details – things need to get done (keep in mind the 80/20 rule)",
      "Missing an easier way to do something",
      "Taking on too much in the name of excellence and growth",
    ],
  },
  {
    title: "People matter",
    description:
      "We take care of people we work with, treating each one like a person and not a transaction.",
    means: [
      "We do our best to provide interesting and rewarding work",
      "We optimize for flexibility, autonomy, and work-life balance",
      "We are honest and transparent, trusting people to handle the truth",
      "We empathize with one another, and offer help when someone is struggling",
    ],
    watchOut: [
      "Avoiding difficult conversations to \u201cbe nice\u201d \u2013 being upfront is part of treating people well",
    ],
  },
  {
    title: "Same team",
    description: "We approach our client work as co-owners, not vendors.",
    means: [
      "We prioritize long-term client success, not short-term revenue",
      "We are clear and transparent about what we think is right, what we can and cannot do",
      "We provide guidance and pushback where needed",
    ],
    watchOut: [
      "Blindly accepting tasks from clients to make them happy",
      "Oversteering our client's vision; we should offer our counsel but then commit to their decisions",
    ],
  },
  {
    title: "Do what you say",
    description:
      "We build trust through repeatedly setting clear expectations and meeting (or exceeding) them.",
    means: [
      "We are clear with our commitments, so that everyone understands what's expected",
      "We hold ourselves accountable for what we agreed to, without prodding",
      "We are careful with the deadlines that we commit to, building in buffer as necessary",
      "We look for opportunities to delight",
    ],
    watchOut: [
      "Being afraid to make commitments",
      "Underpromising to overdeliver – expectations should be real so they can be planned around",
      "Sticking to a bad plan just because you \u201csaid it\u201d \u2013 it\u2019s ok to change decisions or reset expectations based on new information",
    ],
  },
  {
    title: "Build systems",
    description:
      "We create systems around everything we do in order to avoid reinventing the wheel.",
    means: [
      "We create processes, tools, written guidance, and checklists to make our work efficient and consistently superb",
      "We think modularly, breaking work into components in order to standardize parts without disrupting the whole",
      "We find and eliminate bottlenecks in order to scale",
    ],
    watchOut: [
      "Creating systems earlier than necessary – in the beginning it's often better to do something manually",
      "Being inflexible because of a system that we created – anything can be changed",
    ],
  },
  {
    title: "Substance over hype",
    description:
      "We value good ideas and hard work, and stay away from herd mentality.",
    means: [
      "We look for the best ideas, no matter who they come from (and invite respectful dissent from anyone)",
      "We create training and selection processes to eliminate bias and ignore bluster in favor of true skills and potential",
      "We focus on the content being presented instead of presentation style",
      "We optimize for the good of the organization, putting aside ego and personal agenda",
    ],
    watchOut: [
      "Not talking about our achievements – people need to know about us to understand the value we provide",
      "Avoiding something just because others are doing it – they might be doing it for a reason",
    ],
  },
  {
    title: "Make it better",
    description:
      "We are never satisfied with the status quo and are always looking to improve and explore.",
    means: [
      "We look for 1% changes that compound over time",
      "We are not afraid to drastically overhaul something, even if it's hard",
      "We have a bias for action, even in the face of uncertainty",
      "We proactively address issues without owners, and never say \u201cthat\u2019s not my problem\u201d",
      "We aim to simplify whenever possible",
      "We explore our passions and curiosities, knowing they often yield unexpected benefits",
    ],
    watchOut: [
      "Making changes just for the sake of making changes – sometimes the best thing to do is to leave something alone and let it play out",
      "Trying to do everything at once – prioritization and patience are important",
    ],
  },
];

export function CoreValuesContent() {
  return (
    <>
      <CoreValuesMvpsHero
        title="Airdev core values"
        description="Our core values represent our cultural and operational DNA: we use them to navigate tough decisions, build trust within our team, and to find inspiration in our work."
        showImages={false}
        showButton={false}
        titleMaxWidth="800px"
        alignLeft={true}
        rightImage="https://4b71d08d04d5d7c66482fc6e8486501c.cdn.bubble.io/f1776897366692x106317666327673700/core.webp"
      />

      <section className="pb-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="divide-y divide-gray-100">
            {CORE_VALUES.map((value, i) => (
              <div key={value.title} className="py-12 lg:py-16">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
                  {/* Left column — number + title + tagline */}
                  <div>
                    <span className="text-[12px] font-semibold tracking-widest text-[#1265EF] uppercase mb-3 block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-[30px] font-semibold text-[#1a1a1a] leading-snug mb-3">
                      {value.title}
                    </h2>
                    <p className="text-base text-gray-500 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Right column — two sub-columns */}
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#1265EF] mb-4">
                        What this means
                      </p>
                      <ul className="space-y-2.5">
                        {value.means.map((item) => (
                          <li key={item} className="flex gap-2.5 text-[16px] text-gray-700 leading-relaxed">
                            <span className="mt-[6px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#1265EF]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-amber-600 mb-4">
                        Watch out for
                      </p>
                      <ul className="space-y-2.5">
                        {value.watchOut.map((item) => (
                          <li key={item} className="flex gap-2.5 text-[16px] text-gray-700 leading-relaxed">
                            <span className="mt-[6px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
