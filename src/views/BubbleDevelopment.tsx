"use client";

import {
  Navbar,
  Hero,
  Testimonials,
  SaasCTA,
  Footer,
  ClientLogoTicker,
  WhoWeAre,
} from "@/components/landing";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ChevronRight } from "lucide-react";
import { ROUTES } from "@/config/routes";

const BubbleDevelopment = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238405098x558032232358736100/Colfax-Regular.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238390337x266305410589744440/Colfax-Medium.woff') format('woff');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238365698x537474310193827300/Colfax-Bold.woff') format('woff');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238333088x971494408092793500/Colfax-Black.woff') format('woff');
            font-weight: 900;
            font-style: normal;
            font-display: swap;
          }
        `
      }} />
      <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900" style={{ fontFamily: "'Colfax', sans-serif" }}>
        <Navbar />
        <main>
          <Hero 
            title="Hire the best Bubble developer"
            description="Build to the highest standard with top 1% Bubble development talent. Hire a full-service team or a freelance Bubble developer to create a product you can scale with."
            showImages={true}
            showButton={true}
            buttonText="Talk to us"
            titleMaxWidth="800px"
            alignLeft={true}
            lottieAnimation="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/646dcae8ab7266fb0356dd33_swipe-vector.lottie"
            label="TRUSTED BY ORGANIZATIONS OF ALL SIZES"
          />
          <div className="pt-16">
            <ClientLogoTicker />
          </div>
          <section className="py-24 bg-[#F6F9FC]">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3 block">
                  WAYS WE CAN WORK WITH YOU
                </span>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-6">
                  Our Bubble development models
                </h2>
                <p className="text-[20px] text-[#425466] leading-relaxed">
                  Choose the engagement model that fits your team best, from a fully managed agency build to flexible Bubble expertise.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#1265EF]/10 flex items-center justify-center text-[#1265EF]">
                      <img
                        src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/64be3f69d6216bb291612d1f_agency-icon.svg"
                        alt="Airdev Agency"
                        className="w-8 h-8"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1a1a1a]">Airdev Agency</h3>
                  </div>
                  <p className="text-[#425466] text-lg mb-8 leading-relaxed">
                    Hire a fully managed team of Bubble developers and designers to build your product.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 mt-1 rounded-full bg-[#F8F8FB] flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-[#0B58D3]" />
                      </div>
                      <span className="text-[#425466] text-lg leading-relaxed">
                        Best for teams looking to use a white-glove agency and have Airdev fully scope and manage the build.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 mt-1 rounded-full bg-[#F8F8FB] flex items-center justify-center flex-shrink-0">
                        <span className="text-[13px] font-normal text-[#0B58D3]">$</span>
                      </div>
                      <span className="text-[#425466] text-lg leading-relaxed">
                        Projects start at $10k USD – our product experts scope to fit your product/budget needs.
                      </span>
                    </li>
                  </ul>
                  <div className="mt-8 flex justify-start">
                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById("bubble-agency-model");
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      className="text-[16px] font-medium text-[#1265EF] hover:text-[#1a1a1a] transition-colors flex items-center gap-1.5 group"
                    >
                      <span>Learn more</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#1265EF]/10 flex items-center justify-center text-[#1265EF]">
                      <img
                        src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/64be3f62d474374353aa4721_freelance-icon.svg"
                        alt="Airdev Flex"
                        className="w-8 h-8"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1a1a1a]">Airdev Flex</h3>
                  </div>
                  <p className="text-[#425466] text-lg mb-8 leading-relaxed">
                    Match with and manage fractional Bubble freelance talent from our network of experts.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 mt-1 rounded-full bg-[#F8F8FB] flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-[#0B58D3]" />
                      </div>
                      <span className="text-[#425466] text-lg leading-relaxed">
                        Best for teams that prefer to own the build themselves and manage top talent directly.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 mt-1 rounded-full bg-[#F8F8FB] flex items-center justify-center flex-shrink-0">
                        <span className="text-[13px] font-normal text-[#0B58D3]">$</span>
                      </div>
                      <span className="text-[#425466] text-lg leading-relaxed">
                        Monthly packages start at $1k/month – pricing depends on experience level and monthly hours.
                      </span>
                    </li>
                  </ul>
                  <div className="mt-8 flex justify-start">
                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById("bubble-flex-model");
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      className="text-[16px] font-medium text-[#1265EF] hover:text-[#1a1a1a] transition-colors flex items-center gap-1.5 group"
                    >
                      <span>Learn more</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Alternating content section */}
          <section className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6 space-y-24">
              {/* Part 1: text left, image right */}
              <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
                <div id="bubble-agency-model">
                  <span className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3 block">
                    BUBBLE AGENCY MODEL
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-[#0A0A0A] mb-5">
                    Quality you’d expect from a high-end agency, at a fraction of the cost and time
                  </h2>
                  <p className="text-[18px] sm:text-[20px] text-[#425466] leading-relaxed mb-8">
                    Quality you’d expect from a high-end agency, at a fraction of the cost and time.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      "Custom high-fidelity designs, to know what you’ll get",
                      "Dedicated product expertise, to help optimize for your budget",
                      "Clear budget & timeline transparency, so you can plan your business",
                      "Top 1% Bubble developers to assemble UI and app logic for performance at scale",
                      "Project management using our in-house process & software",
                      "The backing of the Airdev agency, for peace of mind",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#F8F8FB] flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-[#0B58D3]" />
                        </div>
                        <span className="text-[#425466] text-lg leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://portal.airdev.co/start?amp=751c2a24-20d2-4353-8eef-48173f86d419R"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button className="bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-6 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none">
                        Start inquiry
                      </Button>
                    </a>
                    <a href={ROUTES.BUBBLE_AGENCY}>
                      <Button
                        variant="outline"
                        className="border-[#D0D5DD] text-[#0A0A0A] bg-white hover:bg-[#F9FAFB] px-6 pb-2 pt-2.5 text-[16px] font-medium rounded-[6px]"
                      >
                        Learn more
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative w-full max-w-[640px] mx-auto lg:mr-0">
                    <img
                      src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/65428ca58a4b56bb19254606_agency-model.webp"
                      alt="Agency model"
                      className="w-full h-auto rounded-2xl md:scale-110 lg:scale-125 md:translate-x-2 lg:translate-x-4"
                    />
                  </div>
                </div>
              </div>

              {/* Part 2: image left, text right */}
              <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">
                <div className="order-2 md:order-1">
                  <div className="relative w-full max-w-[640px] mx-auto lg:ml-0">
                    <img
                      src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/65428e545126af468a6e39a4_agency.webp"
                      alt="Bubble flex model"
                      className="w-full h-auto rounded-2xl md:scale-110 lg:scale-125 md:-translate-x-2 lg:-translate-x-4"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2" id="bubble-flex-model">
                  <span className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3 block">
                    BUBBLE FLEX MODEL
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] mb-5">
                    Upgrade your team with top Bubble developer talent, on a fractional basis
                  </h2>
                  <p className="text-[18px] sm:text-[20px] text-[#425466] leading-relaxed mb-8">
                    There are a lot of freelance no-code developers out there, but only a select few build with the standards that quickly
                    produce a production-grade app. Our Bubble developers, designers, and PMs go through extensive technical vetting and
                    project experience, and you can add them to your team in the blink of an eye.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      "A top 1% Bubble developer, designer, or PM, vetted by Airdev’s rigorous agency selection process",
                      "You provide the requirements and your team executes at Bubble-speed",
                      "Book monthly hours, from fractional to full-time – you coordinate when and how you work with your freelancers",
                      "Use your own process & tools to manage the process",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-8 h-8 mt-1 rounded-full bg-[#F8F8FB] flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-[#0B58D3]" />
                        </div>
                        <span className="text-[#425466] text-lg leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://portal.airdev.co/flex_start"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button className="bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-6 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none">
                        Start inquiry
                      </Button>
                    </a>
                    <a href={ROUTES.FULL_SCALE_BUILDS}>
                      <Button
                        variant="outline"
                        className="border-[#D0D5DD] text-[#0A0A0A] bg-white hover:bg-[#F9FAFB] px-6 pb-2 pt-2.5 text-[16px] font-medium rounded-[6px]"
                      >
                        Learn more
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <WhoWeAre />
          <Testimonials backgroundColor="#F6F9FC" />

          {/* FAQ Section (copied from BubbleAppAudit, localized for this page) */}
          <section className="py-24 bg-white">
            <div className="max-w-[800px] mx-auto px-6">
              <div className="text-center mb-16">
                <span className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3 block">
                  FAQ
                </span>
                <h2 className="text-[48px] font-semibold tracking-tight leading-none text-[#1a1a1a] mb-6">
                  Common questions
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  {
                    question: "How is Airdev’s Bubble developer talent vetted and supported by Airdev?",
                    answer:
                      "All Airdev Bubble developers go through a rigorous, multi-step vetting process that tests Bubble-specific skills, product thinking, communication, and professionalism. We only accept a small percentage of applicants into our network. Once onboarded, they have access to Airdev’s internal playbooks, technical leads, and project support so you’re not just getting a single freelancer, but the backing of an experienced Bubble agency.",
                  },
                  {
                    question: "What’s the difference between the Agency model and the Flex model?",
                    answer:
                      "With the Agency model, Airdev fully scopes, designs, builds, and manages your Bubble project end-to-end — ideal if you want a white-glove partner to own delivery. With the Flex model, you plug vetted Bubble developers, designers, or PMs into your own team and processes on a fractional or full-time basis, while you stay in control of day-to-day management and priorities.",
                  },
                  {
                    question: "Can I switch between Agency and Flex as my needs change?",
                    answer:
                      "Yes. Many clients start with an Agency engagement to get a production-ready app live, then move to Flex to support ongoing enhancements, maintenance, or internal team augmentation. We can also start with Flex talent and expand into a fuller Agency-style engagement if the scope grows or you want more hands-on product leadership.",
                  },
                  {
                    question: "How quickly can a Bubble developer or team get started on my project?",
                    answer:
                      "Timelines depend on scope and availability, but most clients can kick off an Agency engagement within a couple of weeks once we’ve aligned on requirements. Flex engagements can often start even faster — sometimes within a few business days — once we’ve matched you with the right Bubble talent for your needs and time zone.",
                  },
                  {
                    question: "What if I’m not technical — will I still be able to manage and evolve my Bubble app?",
                    answer:
                      "Absolutely. Bubble is built for non-technical users, and our team is used to working with non-technical founders and operators. During and after an engagement, we can structure handoff, documentation, and training so that you or your team feel confident running the app, whether you continue working with Airdev or bring more work in-house over time.",
                  },
                  {
                    question: "How does pricing work for Agency vs Flex Bubble projects?",
                    answer:
                      "Agency engagements are typically scoped as fixed-fee or milestone-based projects once we understand your product requirements, timeline, and constraints. Flex is billed as a monthly subscription based on the number of hours and seniority of the Bubble talent you bring onto your team. In both cases, we aim for clear, upfront expectations so you can plan with confidence.",
                  },
                  {
                    question: "Who owns the IP and Bubble application after working with Airdev?",
                    answer:
                      "You do. All work produced through both Agency and Flex engagements is owned by you or your company. We build in your Bubble account (or transfer the app to you), so you maintain full control over the application, data, and any associated IP once the engagement concludes.",
                  },
                  {
                    question: "Can Airdev’s Bubble developers work with my existing tech stack and tools?",
                    answer:
                      "Yes. Many of our projects involve integrating Bubble with existing tools like Stripe, HubSpot, Salesforce, custom APIs, or internal systems. For Flex, your Bubble talent can work inside your existing process and tools — whether that’s Jira, Linear, Notion, Slack, or something else — so they plug into your workflow rather than forcing you to change it.",
                  },
                  {
                    question: "Do you support teams across different time zones?",
                    answer:
                      "We work with clients around the world and can often match you with Bubble talent whose working hours overlap with your core team. For larger projects, we may structure a hybrid model with partial overlap and async communication so that progress continues smoothly without requiring everyone to be online at the same time.",
                  },
                ].map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="bg-white border-b last:border-0"
                    style={{ borderColor: "#E2E8F0" }}
                  >
                    <AccordionTrigger className="text-left font-medium text-[#1a1a1a] hover:no-underline py-6 text-[18px] items-center">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-6 text-[18px]" style={{ lineHeight: "29px" }}>
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
          <SaasCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BubbleDevelopment;
