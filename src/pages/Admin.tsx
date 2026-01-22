import { Outlet, useLocation } from "react-router-dom";
import { SidebarLayout } from "@/components/layouts";
import { useMemo } from "react";

export default function Admin() {
  const location = useLocation();
  
  // Determine the page title based on the current route
  const pageTitle = useMemo(() => {
    const path = location.pathname;
    if (path.includes('/dashboard')) return 'Dashboard';
    if (path.includes('/projects')) return 'Projects';
    if (path.includes('/team')) return 'Team';
    if (path.includes('/settings')) return 'Settings';
    return 'Admin'; // fallback
  }, [location.pathname]);

  // Don't wrap Settings page in SidebarLayout as it has its own layout
  if (location.pathname.includes('/settings')) {
    return <Outlet />;
  }

  return (
    <SidebarLayout title={pageTitle}>
      <Outlet />
    </SidebarLayout>
  );
}