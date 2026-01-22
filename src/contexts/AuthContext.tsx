
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { appConfig } from '@/config/app.config';
import { Database } from '@/integrations/supabase/types';

export type UserRole = Database['public']['Enums']['user_role'];

// Add new type for profile data
export type UserProfile = {
  firstName: string | null;
  lastName: string | null;
  role: UserRole | null;
};

// This TypeScript interface defines what data and functions will be available
// when any component uses the useAuth() hook
interface AuthContextType {
  user: User | null;          // The currently logged-in user object (null if not logged in)
  session: Session | null;    // The current session with tokens and expiry info
  profile: UserProfile | null; // The user's profile from the profiles table
  loading: boolean;           // True while checking if user is logged in on app start
  signUp: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<void>;
  resetPasswordForEmail: (email: string) => Promise<{ error: AuthError | null }>;
  updatePassword: (newPassword: string) => Promise<{ error: AuthError | null }>;
  refreshProfile: () => Promise<void>; // Function to manually refresh the user's profile
}

// Creates the "container" that will hold our auth data
// Think of this like creating a radio channel that components can tune into
// Initially undefined because no data exists yet
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// This custom hook is what components call to access auth data
// Example: const { user, signOut } = useAuth();
export const useAuth = () => {
  // "Tune in" to the AuthContext to get the current value
  const context = useContext(AuthContext);
  
  // Safety check: If context is undefined, it means you're trying to use useAuth()
  // outside of the AuthProvider wrapper (like trying to tune into a radio station
  // that isn't broadcasting)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  // Return all the auth data and functions
  return context;
};

// This component wraps your entire app and provides auth data to all child components
// It's like a radio tower broadcasting auth information that any component can receive
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // These state variables hold the actual auth data
  // When these change, all components using useAuth() automatically get the updates
  const [user, setUser] = useState<User | null>(null);        // Stores user info (name, email, id, etc)
  const [session, setSession] = useState<Session | null>(null); // Stores session tokens and expiry
  const [profile, setProfile] = useState<UserProfile | null>(null); // Stores user's profile from profiles table
  const [loading, setLoading] = useState(true);                // True while checking initial auth status
  const { toast } = useToast();                                // For showing success/error messages

  // Function to fetch user's profile from profiles table
  const fetchUserProfile = async (userId: string): Promise<UserProfile | null> => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('first_name, last_name, role')  // Fetch all profile fields
        .eq('id', userId)
        .single();

      if (error) {
        return null;
      }

      return {
        firstName: data?.first_name || null,
        lastName: data?.last_name || null,
        role: data?.role || null
      };
    } catch (error) {
      return null;
    }
  };

  // This runs once when the app starts
  useEffect(() => {
    // STEP 1: Set up a "listener" that watches for auth changes
    // This fires whenever: user logs in, logs out, session expires, or tokens refresh
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        // When auth state changes, update our local state variables
        setSession(session);                    // Save the new session
        setUser(session?.user ?? null);         // Extract user from session (or set to null)
        
        // Don't fetch profile here - let getSession handle it for initial load
        // For auth state changes after initial load, we'll handle profile updates separately
        if (!session?.user) {
          setProfile(null);
        }
        
        // Only set loading false if this is a sign out event
        // Initial loading will be handled by getSession
        if (event === 'SIGNED_OUT') {
          setLoading(false);
        }
      }
    );

    // STEP 2: Check if user is already logged in (from a previous visit)
    // This looks in browser storage (cookies/localStorage) for existing session
    supabase.auth.getSession()
      .then(async ({ data: { session } }) => {
        setSession(session);                      // If session exists, save it
        setUser(session?.user ?? null);           // Extract the user info
        
        // Fetch user's profile if they're logged in
        if (session?.user) {
          const profileData = await fetchUserProfile(session.user.id);
          setProfile(profileData);
        }
        
        setLoading(false);                        // Done with initial check
      })
      .catch(() => {
        setLoading(false);  // Make sure loading is set to false even on error
      });

    // Cleanup: Stop listening when component unmounts (prevents memory leaks)
    return () => subscription.unsubscribe();
  }, []); // Empty array means this only runs once on mount

  // Creates a new user account
  const signUp = async (email: string, password: string) => {
    // Where to redirect after email confirmation
    const redirectUrl = `${window.location.origin}/`;
    
    // Call Supabase to create the account
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl  // Link in confirmation email will come back here
      }
    });

    // Show appropriate message based on success/failure
    if (error) {
      toast({
        title: "Sign Up Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Sign Up Successful",
        description: appConfig.auth.requireEmailConfirmation 
          ? "Please check your email to verify your account."  // If email confirmation required
          : "Welcome! You're now logged in.",                 // If no confirmation needed
      });
    }

    // Return error so the calling component can handle it if needed
    return { error };
  };

  // Logs in an existing user
  const signIn = async (email: string, password: string) => {
    // Attempt to authenticate with Supabase
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    // Note: If successful, the onAuthStateChange listener (above) will automatically
    // fire and update the user/session state variables

    if (error) {
      toast({
        title: "Sign In Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Sign In Successful",
        description: "Welcome back!",
      });
    }

    return { error };
  };

  // Logs out the current user
  const signOut = async () => {
    // Tell Supabase to clear the session
    const { error } = await supabase.auth.signOut();
    
    // The onAuthStateChange listener will automatically set user/session to null
    
    if (error) {
      toast({
        title: "Sign Out Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed Out",
        description: "You have been successfully signed out.",
      });
    }
  };

  const resetPasswordForEmail = async (email: string) => {
    const redirectUrl = `${window.location.origin}/reset-password`;
    
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: redirectUrl,
    });

    if (error) {
      toast({
        title: "Password Reset Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Reset Email Sent",
        description: "Check your email for the password reset link.",
      });
    }

    return { error };
  };

  const updatePassword = async (newPassword: string) => {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      toast({
        title: "Password Update Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Password Updated",
        description: "Your password has been successfully updated.",
      });
    }

    return { error };
  };

  // Manually refresh the user's profile from the database
  const refreshProfile = async () => {
    if (!user?.id) {
      return;
    }

    const profileData = await fetchUserProfile(user.id);
    
    if (profileData) {
      setProfile(profileData);
    }
  };

  // Package all our auth data and functions into one object
  // This is what components receive when they call useAuth()
  const value = {
    user,                    // Current user object (from state)
    session,                 // Current session (from state)
    profile,                 // User's profile from profiles table (from state)
    loading,                 // Loading status (from state)
    signUp,                  // Function to create account
    signIn,                  // Function to log in
    signOut,                 // Function to log out
    resetPasswordForEmail,   // Function to send password reset email
    updatePassword,          // Function to change password
    refreshProfile,          // Function to manually refresh profile
  };

  // The Provider "broadcasts" the value to all child components
  // Any component inside this Provider can "tune in" using useAuth()
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
