"use client";

const CARDS = [
  {
    heading: "You know AI matters, but not where to start.",
    body: "Your board is asking. Your competitors are announcing pilots. Internally, you've had a dozen conversations and zero shipped projects. You need someone to come in, look at how you actually operate, and tell you where AI is worth the investment — and where it isn't.",
  },
  {
    heading: "You've run AI pilots that never made it to production.",
    body: "The demo worked. The proof of concept was promising. Then it stalled — for technical reasons, organizational reasons, or both. You need a partner who can diagnose what went wrong and actually ship the next version.",
  },
  {
    heading: "Your team is using ChatGPT in shadow IT.",
    body: "Employees are pasting customer data into consumer tools because no one has given them a sanctioned alternative. You need an AI strategy that's secure, useful, and that your team will actually adopt.",
  },
  {
    heading: "You know what you want built. You just need someone to build it well.",
    body: "You've already done the strategy work. You have a roadmap. What you don't have is an in-house team with the engineering chops to ship production-grade AI software on a reasonable timeline. That's where we come in.",
  },
];

/** AI Enablement only — light band with two-column cards. */
export function AiEnablementWhoWeWorkWithSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 max-w-4xl text-left">
          <span className="mb-3 block text-[15px] font-semibold uppercase tracking-wider text-[#1F3A8A]">
            WHO WE WORK WITH
          </span>
          <h2 className="text-[32px] font-semibold leading-[52px] tracking-tight text-[#1A1A1A] sm:text-[40px] md:text-[48px]">
            You're probably here because one of these sounds familiar.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {CARDS.map((card, index) => (
            <div
              key={index}
              className="flex h-full flex-col overflow-hidden rounded-[26px] border border-[#E5ECF6] bg-white p-8 shadow-[0_24px_70px_-28px_rgba(18,101,239,0.28)]"
            >
              <span className="mb-3 block text-[14px] font-[600] uppercase tracking-widest text-[#9EAAC2]">
                #{index + 1}
              </span>
              <h3 className="mb-3 text-2xl font-bold text-[#0D2350]">{card.heading}</h3>
              <p className="grow text-[18px] leading-relaxed text-gray-600">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-gray-600">
            Not sure if you fit? That&apos;s a normal reason to start a conversation.{" "}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-landing-pricing-popup"))}
              className="inline text-[16px] font-medium text-[#1265EF] transition-colors hover:text-[#1a1a1a]"
            >
              Talk to us →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
