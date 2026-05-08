import type { ComponentProps } from "react";
import { IndexLandingCTA } from "@/components/landing/index-landing-cta";

export type ApproachCtaSectionProps = Partial<
  ComponentProps<typeof IndexLandingCTA>
>;

/** Matches homepage CTA layout; override any `IndexLandingCTA` prop via `ApproachCtaSectionProps`. */
export function ApproachCtaSection({
  title = "Have a project in mind?",
  description =
    "Tell us what you're building. We'll show you how we'd approach it.\nWe've shipped 1,000+ products — yours could be next.",
  buttonText = "Talk to us",
  ...rest
}: ApproachCtaSectionProps = {}) {
  return (
    <div className="pt-24 lg:pt-32">
      <IndexLandingCTA
        title={title}
        description={description}
        buttonText={buttonText}
        {...rest}
      />
    </div>
  );
}
