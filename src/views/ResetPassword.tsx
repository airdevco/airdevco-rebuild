import { useState, useEffect } from "react";
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
import { Link, useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { ROUTES } from "@/config/routes";
import { CheckCircle, AlertCircle } from "lucide-react";

const resetPasswordSchema = z.object({
  password: z.string().min(1, "Password is required"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

export function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isValidSession, setIsValidSession] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { updatePassword } = useAuth();
  const { toast } = useToast();

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    let mounted = true;
    
    // Check for recovery token in URL hash
    const hashParams = new URLSearchParams(location.hash.substring(1));
    const accessToken = hashParams.get('access_token');
    const type = hashParams.get('type');
    
    if (accessToken && type === 'recovery') {
      // We have a valid recovery token
      if (mounted) {
        setIsValidSession(true);
      }
    } else {
      // Check if we have an active recovery session
      const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
        if (mounted) {
          if (event === "PASSWORD_RECOVERY" && session) {
            setIsValidSession(true);
          } else if (!session && isValidSession === null) {
            // No session and no recovery event
            setIsValidSession(false);
          }
        }
      });

      // Check current session
      supabase.auth.getSession().then(({ data }) => {
        if (mounted && isValidSession === null) {
          setIsValidSession(!!data.session);
        }
      });

      return () => {
        mounted = false;
        authListener.subscription.unsubscribe();
      };
    }
    
    return () => {
      mounted = false;
    };
  }, [location.hash, isValidSession]);

  async function onSubmit(data: ResetPasswordFormValues) {
    setLoading(true);

    const { error } = await updatePassword(data.password);

    if (!error) {
      setSuccess(true);
    } else {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }

    setLoading(false);
  }

  if (isValidSession === null) {
    // Still checking session validity
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isValidSession === false) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-md space-y-6 animate-fade-in">
          <AuthCard
            title="Invalid or expired link"
            description="This password reset link is invalid or has expired"
          >
            <div className="space-y-4">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  The password reset link you followed is invalid or has expired. 
                  Please request a new password reset link.
                </AlertDescription>
              </Alert>

              <Button 
                className="w-full" 
                onClick={() => navigate(ROUTES.FORGOT_PASSWORD)}
              >
                Request new reset link
              </Button>
            </div>
          </AuthCard>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-md space-y-6 animate-fade-in">
          <AuthCard
            title="Password updated successfully"
            description="Your password has been updated and you're now logged in"
          >
            <div className="space-y-4">
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  Your password has been successfully updated. You're now logged in and can access your account.
                </AlertDescription>
              </Alert>

              <Link to="/dashboard" className="block">
                <Button className="w-full">
                  Go to Dashboard
                </Button>
              </Link>
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
          title="Reset your password"
          description="Enter your new password below"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter new password"
                        disabled={loading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirm new password"
                        disabled={loading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Resetting..." : "Reset password"}
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

export default ResetPassword;