
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute, AuthRoute } from "@/components/auth";
import { SettingsDialog } from "@/components/settings-dialog";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { useEffect, useState } from "react";
import Index from "./views/Index";
import BubbleAppAudit from "./views/BubbleAppAudit";
import { ROUTES } from "@/config/routes";
import Partners from "./views/Partners";
import Developers from "./views/Developers";
import ProductManagers from "./views/ProductManagers";
import UxDesigners from "./views/UxDesigners";
import CoreValues from "./views/CoreValues";
import Mission from "./views/Mission";
import Approach from "./views/Approach";
import Careers from "./views/Careers";
import Blog from "./views/Blog";
import WillAIMakeDevelopersObsolete from "./views/WillAIMakeDevelopersObsolete";
import Signup from "./views/Signup";
import Login from "./views/Login";
import { ForgotPassword } from "./views/ForgotPassword";
import { ResetPassword } from "./views/ResetPassword";
import Dashboard from "./views/Dashboard";
import Projects from "./views/Projects";
import Team from "./views/Team";
import Settings from "./views/Settings";
import Account from "./views/Account";
import Admin from "./views/Admin";
import Portal from "./views/Portal";
import NotFound from "./views/NotFound";
import Onboarding from "./views/Onboarding";

const queryClient = new QueryClient();

import ClientStories from "./views/ClientStories";
import SaasProducts from "./views/SaasProducts";
import Marketplaces from "./views/Marketplaces";
import InternalTools from "./views/InternalTools";
import AiApplications from "./views/AiApplications";
import FinancialServices from "./views/FinancialServices";
import TechnologyAndSoftware from "./views/TechnologyAndSoftware";
import IndustrialAndManufacturing from "./views/IndustrialAndManufacturing";
import PublicSectorAndNonprofit from "./views/PublicSectorAndNonprofit";
import Healthcare from "./views/Healthcare";
import ConsumerAndRetail from "./views/ConsumerAndRetail";
import Mvps from "./views/Mvps";
import FullScaleBuilds from "./views/FullScaleBuilds";
import ProductDesign from "./views/ProductDesign";
import BubbleDevelopment from "./views/BubbleDevelopment";
import BubbleAgency from "./views/BubbleAgency";
import AiEnablement from "./views/AiEnablement";

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    // Open dialog when account=true parameter is present
    if (params.get('account') === 'true') {
      setSettingsOpen(true);
    }
  }, [location]);

  const handleSettingsOpenChange = (open: boolean) => {
    setSettingsOpen(open);
    if (!open) {
      // Remove account param when closing
      const params = new URLSearchParams(location.search);
      params.delete('account');
      const newSearch = params.toString();
      navigate({
        pathname: location.pathname,
        search: newSearch ? `?${newSearch}` : ''
      }, { replace: true });
    }
  };

  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Index />} />
        <Route path={ROUTES.BUBBLE_APP_AUDIT} element={<BubbleAppAudit />} />
        <Route path={ROUTES.CLIENT_STORIES} element={<ClientStories />} />
        <Route path={ROUTES.SAAS_PRODUCTS} element={<SaasProducts />} />
        <Route path={ROUTES.MARKETPLACES} element={<Marketplaces />} />
        <Route path={ROUTES.INTERNAL_TOOLS} element={<InternalTools />} />
        <Route path={ROUTES.AI_APPLICATIONS} element={<AiApplications />} />
        <Route path={ROUTES.FINANCIAL_SERVICES} element={<FinancialServices />} />
        <Route path={ROUTES.TECHNOLOGY_AND_SOFTWARE} element={<TechnologyAndSoftware />} />
        <Route path={ROUTES.INDUSTRIAL_AND_MANUFACTURING} element={<IndustrialAndManufacturing />} />
        <Route path={ROUTES.PUBLIC_SECTOR_AND_NONPROFIT} element={<PublicSectorAndNonprofit />} />
        <Route path={ROUTES.HEALTHCARE} element={<Healthcare />} />
        <Route path={ROUTES.CONSUMER_AND_RETAIL} element={<ConsumerAndRetail />} />
        <Route path={ROUTES.MVPS} element={<Mvps />} />
        <Route path={ROUTES.FULL_SCALE_BUILDS} element={<FullScaleBuilds />} />
        <Route path={ROUTES.PRODUCT_DESIGN} element={<ProductDesign />} />
        <Route path={ROUTES.BUBBLE_DEVELOPMENT} element={<BubbleDevelopment />} />
        <Route path={ROUTES.BUBBLE_AGENCY} element={<BubbleAgency />} />
        <Route path={ROUTES.AI_ENABLEMENT} element={<AiEnablement />} />
        <Route path={ROUTES.PARTNERS} element={<Partners />} />
        <Route path={ROUTES.PARTNERS_DEVELOPERS} element={<Developers />} />
        <Route path={ROUTES.PARTNERS_PRODUCT_MANAGERS} element={<ProductManagers />} />
        <Route path={ROUTES.PARTNERS_UX_DESIGNERS} element={<UxDesigners />} />
        <Route path={ROUTES.CORE_VALUES} element={<CoreValues />} />
        <Route path={ROUTES.MISSION} element={<Mission />} />
        <Route path={ROUTES.APPROACH} element={<Approach />} />
        <Route path={ROUTES.CAREERS} element={<Careers />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.BLOG_AI_DEVELOPERS} element={<WillAIMakeDevelopersObsolete />} />
        <Route path={ROUTES.SIGNUP} element={
          <AuthRoute>
            <Signup />
          </AuthRoute>
        } />
        <Route path={ROUTES.LOGIN} element={
          <AuthRoute>
            <Login />
          </AuthRoute>
        } />
        <Route path={ROUTES.FORGOT_PASSWORD} element={
          <AuthRoute>
            <ForgotPassword />
          </AuthRoute>
        } />
        <Route path={ROUTES.RESET_PASSWORD} element={
          <AuthRoute>
            <ResetPassword />
          </AuthRoute>
        } />
        <Route path={ROUTES.ONBOARDING} element={<Onboarding />} />
        <Route 
          path={ROUTES.ACCOUNT} 
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } 
        />
        <Route
          path={ROUTES.ADMIN}
          element={
            <ProtectedRoute requiredRole="admin">
              <Admin />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to={ROUTES.ADMIN_DASHBOARD} replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="team" element={<Team />} />
          <Route path="settings">
            <Route index element={<Navigate to={`${ROUTES.ADMIN_SETTINGS}/notifications`} replace />} />
            <Route path=":section" element={<Settings />} />
          </Route>
        </Route>
        <Route
          path={ROUTES.PORTAL}
          element={
            <ProtectedRoute>
              <Portal />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to={ROUTES.PORTAL_PROJECTS} replace />} />
          <Route path="projects" element={<div className="p-6"><p className="text-muted-foreground">Insert tab content here</p></div>} />
          <Route path="customers" element={<div className="p-6"><p className="text-muted-foreground">Insert tab content here</p></div>} />
        </Route>
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
      <SettingsDialog open={settingsOpen} onOpenChange={handleSettingsOpenChange} />
    </>
  );
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
