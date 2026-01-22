import type { ReactNode, ComponentType } from "react";
import { AppSidebar } from "@/components/navigation";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface SidebarLayoutProps {
  title: string;
  children: ReactNode;
  headerActions?: ReactNode;
  contentClassName?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "full";
  sidebarComponent?: ComponentType;
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  full: "max-w-full",
};

export function SidebarLayout({ 
  title, 
  children, 
  headerActions,
  contentClassName,
  maxWidth = "7xl",
  sidebarComponent: SidebarComponent = AppSidebar
}: SidebarLayoutProps) {
  return (
    <SidebarProvider>
      <SidebarComponent />
      <SidebarInset>
        <header className="h-16 shrink-0 border-b">
          <div className="h-full px-4">
            <div className={cn("h-full flex items-center gap-2 mx-auto", maxWidthClasses[maxWidth])}>
              <SidebarTrigger className="md:hidden -ml-1" />
              <div className="flex-1">
                <h1 className="text-xl font-semibold">{title}</h1>
              </div>
              {headerActions && (
                <div className="flex items-center gap-2">
                  {headerActions}
                </div>
              )}
            </div>
          </div>
        </header>
        <main className="flex-1 p-4">
          <div className={cn("mx-auto", maxWidthClasses[maxWidth], contentClassName)}>
            {children}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}