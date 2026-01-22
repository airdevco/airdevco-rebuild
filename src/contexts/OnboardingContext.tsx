import { createContext, useContext, useState, ReactNode } from 'react';

interface OnboardingData {
  firstName?: string;
  lastName?: string;
  [key: string]: any;
}

interface OnboardingContextType {
  data: OnboardingData;
  currentStep: number;
  totalSteps: number;
  updateData: (stepData: Partial<OnboardingData>) => void;
  setCurrentStep: (step: number) => void;
  clearData: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<OnboardingData>({});
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 1; // Will be dynamic based on ONBOARDING_STEPS

  const updateData = (stepData: Partial<OnboardingData>) => {
    setData(prev => ({ ...prev, ...stepData }));
  };

  const clearData = () => {
    setData({});
    setCurrentStep(0);
  };

  return (
    <OnboardingContext.Provider 
      value={{
        data,
        currentStep,
        totalSteps,
        updateData,
        setCurrentStep,
        clearData
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
}