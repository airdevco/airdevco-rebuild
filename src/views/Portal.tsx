import { Outlet, useLocation } from "react-router-dom";
import { SidebarLayout } from "@/components/layouts";
import { PortalSidebar } from "@/components/navigation";
import { useMemo } from "react";

export default function Portal() {
  const location = useLocation();
  
  // Determine the page title based on the current route
  const pageTitle = useMemo(() => {
    const path = location.pathname;
    if (path.includes('/projects')) return 'Projects';
    if (path.includes('/customers')) return 'Customers';
    return 'Portal'; // fallback
  }, [location.pathname]);

  return (
    <SidebarLayout title={pageTitle} sidebarComponent={PortalSidebar}>
      <Outlet />
    </SidebarLayout>
  );
}