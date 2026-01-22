
import { AuthCard } from "@/components/shared";
import { SignupForm } from "@/components/auth";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6 animate-fade-in">
        <AuthCard
          title="Create your account"
          description="Sign up via your email or Google account"
        >
          <SignupForm />
        </AuthCard>
        <div className="text-muted-foreground text-center text-xs">
          By clicking continue, you agree to our{" "}
          <a href="#" className="underline underline-offset-4 hover:text-primary">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Signup;
