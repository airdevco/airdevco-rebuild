import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bell, Plug, FileText, ScrollText, Tags } from "lucide-react";
import { NotificationsForm, PrivacyPolicyForm, CategoriesForm } from "@/components/settings";

type SettingsSection = 
  | "notifications" 
  | "integrations" 
  | "privacy-policy" 
  | "terms-of-service"
  | "categories";

const appSettingsSections = [
  { id: "notifications" as const, label: "Notifications", icon: Bell },
  { id: "integrations" as const, label: "Integrations", icon: Plug },
  { id: "categories" as const, label: "Categories", icon: Tags },
];

const legalSections = [
  { id: "privacy-policy" as const, label: "Privacy Policy", icon: FileText },
  { id: "terms-of-service" as const, label: "Terms of Service", icon: ScrollText },
];

export default function Settings() {
  const { section } = useParams<{ section?: SettingsSection }>();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<SettingsSection>(
    section || "notifications"
  );

  useEffect(() => {
    if (section && [...appSettingsSections, ...legalSections].some(s => s.id === section)) {
      setActiveSection(section as SettingsSection);
    }
  }, [section]);

  const handleSectionChange = (newSection: SettingsSection) => {
    setActiveSection(newSection);
    navigate(`${ROUTES.ADMIN_SETTINGS}/${newSection}`);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "notifications":
        return <NotificationsForm />;
      case "integrations":
        return (
          null
        );
      case "categories":
        return <CategoriesForm />;
      case "privacy-policy":
        return <PrivacyPolicyForm />;
      case "terms-of-service":
        return (
          null
        );
      default:
        return null;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar className="border-r" collapsible="offcanvas">
          <SidebarContent>
            <div className="p-2">
              <Button
                variant="muted"
                size="sm"
                className="w-full justify-start"
                onClick={() => navigate(ROUTES.ADMIN)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to app
              </Button>
            </div>
            <SidebarGroup>
              <SidebarGroupLabel>App Settings</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {appSettingsSections.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        onClick={() => handleSectionChange(item.id)}
                        isActive={activeSection === item.id}
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Legal</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {legalSections.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        onClick={() => handleSectionChange(item.id)}
                        isActive={activeSection === item.id}
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div className="flex-1 p-6">
            {renderContent()}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}