"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ROUTES } from "@/config/routes";
import { Button } from "@/components/ui/button";

/** Matches index `Navbar` CTA + SaaS `Hero` primary button sizing */
const MARKETPLACE_PRIMARY_BTN =
  "bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none";

const NAV_ITEMS = [
  { label: "Why Airdev", sectionId: "why-airdev" },
  { label: "Marketplace Types", sectionId: "marketplace-types" },
  { label: "Case Studies", sectionId: "case-studies" },
  { label: "Pricing", sectionId: "pricing" },
] as const;

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function MarketplaceHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-white/90 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between gap-6">
        <a href={ROUTES.HOME} className="flex items-center shrink-0">
          <img
            src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6577847e968a59db1df535cf_logo_v4.svg"
            alt="Airdev"
            className="h-7 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.sectionId}
              type="button"
              onClick={() => scrollToSection(item.sectionId)}
              className="text-[15px] font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block shrink-0">
          <Button type="button" className={MARKETPLACE_PRIMARY_BTN} onClick={() => scrollToSection("contact")}>
            Talk to Us
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-gray-800"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.sectionId}
              type="button"
              className="text-left text-[16px] font-medium text-gray-800 py-2"
              onClick={() => {
                scrollToSection(item.sectionId);
                setMobileOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
          <Button
            type="button"
            className={`mt-2 w-full ${MARKETPLACE_PRIMARY_BTN}`}
            onClick={() => {
              scrollToSection("contact");
              setMobileOpen(false);
            }}
          >
            Talk to Us
          </Button>
        </div>
      )}
    </header>
  );
}

// Backwards compatibility export (older imports)
export { MarketplaceHeader as SaasMarketplaceHeader };
