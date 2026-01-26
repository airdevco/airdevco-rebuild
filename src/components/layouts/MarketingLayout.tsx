"use client";

import { Navbar, Footer } from "@/components/landing";

interface MarketingLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function MarketingLayout({ children, className = "min-h-screen bg-white" }: MarketingLayoutProps) {
  return (
    <div className={className}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
