import { OnboardingProvider } from "@/contexts/OnboardingContext";
import { OnboardingFlow } from "@/components/onboarding";

const Onboarding = () => {
  return (
    <OnboardingProvider>
      <OnboardingFlow />
    </OnboardingProvider>
  );
};

export default Onboarding;