import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AuthCard } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { ROUTES } from "@/config/routes";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const { resetPasswordForEmail } = useAuth();

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: ForgotPasswordFormValues) {
    setLoading(true);

    const { error } = await resetPasswordForEmail(data.email);

    if (!error) {
      setSubmittedEmail(data.email);
      setSubmitted(true);
    }

    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-md space-y-6 animate-fade-in">
          <AuthCard
            title="Check your email"
            description="We've sent you a password reset link"
          >
            <div className="space-y-4">
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  We've sent a password reset link to <strong>{submittedEmail}</strong>. 
                  Please check your inbox and follow the instructions to reset your password.
                </AlertDescription>
              </Alert>
              
              <div className="text-center text-sm text-muted-foreground">
                Didn't receive the email? Check your spam folder or{" "}
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setSubmittedEmail("");
                    form.reset();
                  }}
                  className="underline underline-offset-4 hover:text-primary"
                >
                  try again
                </button>
              </div>
            <div>
              <Link to="/login">
                <Button variant="outline" className="w-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to login
                </Button>
              </Link>
              </div>
            </div>
          </AuthCard>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6 animate-fade-in">
        <AuthCard
          title="Forgot your password?"
          description="Enter your email and we'll send you a reset link"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="hey@example.com"
                        disabled={loading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send reset link"}
              </Button>

              <div className="text-center text-sm">
                Remember your password?{" "}
                <Link to={ROUTES.LOGIN} className="underline underline-offset-4">
                  Back to login
                </Link>
              </div>
            </form>
          </Form>
        </AuthCard>
      </div>
    </div>
  );
}

export default ForgotPassword;