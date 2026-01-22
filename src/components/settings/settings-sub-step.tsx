import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface SettingsSubStepProps {
  title: string;
  onBack: () => void;
  children: React.ReactNode;
}

export const SettingsSubStep = ({ title, onBack, children }: SettingsSubStepProps) => (
  <div className="space-y-6">
    <div className="flex items-center">
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onBack} 
        className="p-0 h-auto text-muted-foreground hover:text-foreground hover:bg-transparent"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        {title}
      </Button>
    </div>
    {children}
  </div>
);