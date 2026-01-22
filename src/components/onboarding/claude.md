# Onboarding Component Architecture

## Overview
Multi-step onboarding flow with progress tracking and modular step management.

## File Structure & Roles

### `onboarding-flow.tsx`
**Main orchestrator** - Controls the entire onboarding experience
- Manages current step index and navigation (back/forward)
- Stores all form data across steps
- Renders the active step component
- Wraps content in AuthCard for consistent styling
- Redirects to `/dashboard` on completion

### `onboarding-progress.tsx`
**Progress indicator** - Visual feedback for user progress
- Displays "Step X of Y" text
- Shows percentage complete
- Renders progress bar using shadcn Progress component

### `steps/personal-info-step.tsx`
**Example step component** - Template for all onboarding steps
- Self-contained form with validation
- Receives `initialData`, `onNext`, and `isLastStep` props
- Button text changes to "Complete Setup" on final step

## How Components Work Together

```
Onboarding (page)
└── OnboardingProvider (context)
    └── OnboardingFlow (orchestrator)
        ├── OnboardingProgress (visual feedback)
        └── AuthCard (consistent layout)
            └── [Current Step Component] (form content)
```

1. **OnboardingFlow** reads from `ONBOARDING_STEPS` array to determine available steps
2. Each step component handles its own form logic and validation
3. On submit, step passes data to OnboardingFlow via `onNext` callback
4. OnboardingFlow stores data and advances to next step (or completes flow)

## Adding New Steps

### 1. Create Step Component
Create file in `/steps/` folder:
```tsx
// steps/company-info-step.tsx
export function CompanyInfoStep({ initialData, onNext, isLastStep }) {
  // Form fields and validation
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ companyName, industry });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields */}
      <Button type="submit">
        {isLastStep ? "Complete Setup" : "Continue"}
      </Button>
    </form>
  );
}
```

### 2. Export from Steps Index
```tsx
// steps/index.ts
export { PersonalInfoStep } from './personal-info-step';
export { CompanyInfoStep } from './company-info-step'; // Add this
```

### 3. Add to ONBOARDING_STEPS
In `onboarding-flow.tsx`:
```tsx
const ONBOARDING_STEPS = [
  {
    id: 'personal-info',
    component: PersonalInfoStep,
    title: 'Welcome! Let\'s get started',
    description: 'Tell us a bit about yourself'
  },
  {
    id: 'company-info',  // Add new step
    component: CompanyInfoStep,
    title: 'Company Information',
    description: 'Tell us about your organization'
  }
];
```

That's it! The flow automatically handles:
- Progress bar updates
- Step navigation
- Form data persistence
- Completion detection

## Key Props for Step Components

- `initialData`: Previous form values (for back navigation)
- `onNext`: Callback to submit step data and proceed
- `isLastStep`: Boolean to show "Complete Setup" vs "Continue"