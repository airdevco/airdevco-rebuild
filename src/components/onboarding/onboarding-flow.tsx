import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthCard } from "@/components/shared";
import { OnboardingProgress } from "./onboarding-progress";
import { PersonalInfoStep, CompanyInfoStep } from "./steps";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ROUTES } from "@/config/routes";
 

/**
 * Configuration for each step in the onboarding flow
 */
interface StepConfig {
  id: string;
  component: React.ComponentType<any>;
  title: string;
  description: string;
}

/**
 * Define all onboarding steps in order
 * Add new steps here to extend the onboarding flow
 */
const ONBOARDING_STEPS: StepConfig[] = [
  {
    id: 'personal-info',
    component: PersonalInfoStep,
    title: 'Welcome! Let\'s get started',
    description: 'Tell us a bit about yourself'
  },
  {
    id: 'company-info',
    component: CompanyInfoStep,
    title: 'Company Information',
    description: 'Tell us about your organization'
  },
  // Add more steps here as needed
];

/**
 * Main onboarding flow orchestrator
 * Manages step navigation, form data persistence, and completion
 */
export function OnboardingFlow() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  
  // Track current step index (0-based)
  const [currentStep, setCurrentStep] = useState(0);
  
  // Store all form data across steps
  const [formData, setFormData] = useState<Record<string, any>>({});
  
  // Calculate step position helpers
  const totalSteps = ONBOARDING_STEPS.length;
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;
  
  // Get current step configuration and component
  const currentStepConfig = ONBOARDING_STEPS[currentStep];
  const StepComponent = currentStepConfig.component;
  
  /**
   * Handle form submission from current step
   * Merges step data with existing form data and advances to next step
   * or completes onboarding if on last step
   */
  const handleNext = async (stepData: Record<string, any>) => {
    // Merge new step data with existing form data
    const updatedData = { ...formData, ...stepData };
    setFormData(updatedData);
    
    // If this is step 1 (personal-info), save first and last names to database and user metadata
    if (currentStepConfig.id === 'personal-info' && user) {
      try {
        // First, update the profiles table
        const { error: profileError } = await supabase
          .from('profiles')
          .update({
            first_name: stepData.firstName,
            last_name: stepData.lastName
          })
          .eq('id', user.id);

        if (profileError) {
          console.error('Error saving personal info to profiles:', profileError);
          toast({
            title: "Save Error",
            description: "Failed to save your information, but you can continue.",
            variant: "destructive",
          });
        }

        // Then, update user metadata for backward compatibility
        const { error: authError } = await supabase.auth.updateUser({
          data: {
            first_name: stepData.firstName,
            last_name: stepData.lastName,
          }
        });

        if (authError) {
          console.error('Error updating user metadata:', authError);
          // Don't show error toast for metadata update failure since profile update may have succeeded
        }

        if (!profileError && !authError) {
          console.log('Personal info saved successfully to both profiles and metadata');
          toast({
            title: "Information Saved",
            description: "Your personal information has been saved.",
          });
        }
      } catch (error) {
        console.error('Unexpected error saving personal info:', error);
        toast({
          title: "Save Error", 
          description: "An unexpected error occurred, but you can continue.",
          variant: "destructive",
        });
      }
    }
    
    if (isLastStep) {
      // Complete onboarding and mark completion timestamp
      if (user) {
        try {
          const { error } = await supabase
            .from('profiles')
            .update({
              onboarding_complete: new Date().toISOString()
            } as any)
            .eq('id', user.id);

          if (error) {
            console.error('Error marking onboarding complete:', error);
            toast({
              title: "Warning",
              description: "Onboarding completed but couldn't save completion status.",
              variant: "destructive",
            });
          } else {
            console.log('Onboarding completion timestamp saved successfully');
            toast({
              title: "Welcome!",
              description: "Your onboarding is complete. Welcome to the platform!",
            });
          }
        } catch (error) {
          console.error('Unexpected error marking onboarding complete:', error);
        }
      }
      
      console.log('Onboarding completed with data:', updatedData);
      navigate(ROUTES.PORTAL);
    } else {
      // Move to next step
      setCurrentStep(prev => prev + 1);
    }
  };
  
  /**
   * Navigate back to previous step
   * Form data is preserved for when user returns
   */
  const handleBack = () => {
    if (!isFirstStep) {
      setCurrentStep(prev => prev - 1);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6 animate-fade-in">
        {/* Progress indicator showing current step */}
        <OnboardingProgress 
          currentStep={currentStep} 
          totalSteps={totalSteps} 
        />
        
        {/* Main content card with step title and description */}
        <AuthCard
          title={currentStepConfig.title}
          description={currentStepConfig.description}
        >
          <div key={currentStep} className="space-y-4 animate-fade-in">
            {/* Render current step component with required props */}
            <StepComponent
              initialData={formData}
              onNext={handleNext}
              isLastStep={isLastStep}
            />
          </div>
        </AuthCard>
        {/* Back button - only shown after first step, placed under the card */}
        {!isFirstStep && (
          <div className="flex justify-center">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              Go back
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}