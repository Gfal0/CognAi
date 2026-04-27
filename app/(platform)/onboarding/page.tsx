import { OnboardingWizard } from "@/components/onboarding/onboarding-wizard";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <OnboardingWizard />
      </div>
    </div>
  );
}

