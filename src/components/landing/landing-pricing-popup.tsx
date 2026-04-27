"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export type LandingPricingPlan = {
  name: string;
  subtitle?: string;
  price: string;
  description: string;
  bullets: string[];
  buttonLabel: string;
};

interface LandingPricingPopupProps {
  plans: LandingPricingPlan[];
}

export function LandingPricingPopup({ plans }: LandingPricingPopupProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("open-landing-pricing-popup", handleOpen);
    return () => window.removeEventListener("open-landing-pricing-popup", handleOpen);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-screen h-screen max-w-none rounded-none border-none bg-[#F6F9FC] p-0 [&>button:last-of-type]:hidden">
        <DialogTitle className="sr-only">Landing pricing plans</DialogTitle>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
          aria-label="Close pricing popup"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="h-full overflow-y-auto px-6 py-16 md:px-10">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#1e3a8a]">Pricing</p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0A2540] md:text-4xl">Choose your path</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {plans.slice(0, 2).map((plan) => (
                <div
                  key={plan.name}
                  className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] md:p-10"
                >
                  <h3 className="mb-3 text-[24px] font-semibold leading-[32px] text-[#0A2540]">{plan.name}</h3>
                  <p className="mb-3 text-[48px] font-bold leading-[48px] text-[#0A2540]">{plan.price}</p>
                  <p className="text-[16px] leading-[24px] text-[#425466]">{plan.description}</p>
                  <hr className="my-6 border-slate-200" />
                  <ul className="mb-8 flex-1 space-y-4">
                    {plan.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-[15px] leading-[24px] text-[#425466]">
                        <span className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF]">
                          <svg width="13" height="10" viewBox="0 0 13 10" fill="none" aria-hidden="true">
                            <path
                              d="M1.5 5L5 8.5L11.5 1.5"
                              stroke="#1265EF"
                              strokeWidth="1.15"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="pt-[3px]">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="w-full rounded-xl bg-[#121826] py-4 text-[16px] font-medium leading-[24px] text-white transition-colors hover:bg-[#1a2438]"
                  >
                    {plan.buttonLabel}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
