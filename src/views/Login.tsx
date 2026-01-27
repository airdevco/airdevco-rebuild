
import { AuthCard } from "@/components/shared";
import { LoginForm } from "@/components/auth";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6 animate-fade-in">
        <AuthCard
          title="Welcome back"
          description="Sign in to your account to continue"
        >
          <LoginForm />
        </AuthCard>
      </div>
    </div>
  );
};

export default Login;
