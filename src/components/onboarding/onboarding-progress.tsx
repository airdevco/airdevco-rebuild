import { Progress } from "@/components/ui/progress";

interface OnboardingProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function OnboardingProgress({ currentStep, totalSteps }: OnboardingProgressProps) {
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;
  
  return (
    <div className="w-full">
      <Progress value={progressPercentage} className="h-2" />
    </div>
  );
}