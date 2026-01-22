import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { getAuthenticatedUserRoute } from '@/utils/auth-routing';

interface AuthRouteProps {
  children: React.ReactNode;
}

export const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If user is authenticated, redirect based on their role
  if (user) {
    const redirectPath = getAuthenticatedUserRoute(profile?.role || null);
    return <Navigate to={redirectPath} replace />;
  }

  // If not authenticated, allow access to auth pages
  return <>{children}</>;
};