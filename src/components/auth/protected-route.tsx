
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import { getAuthenticatedUserRoute } from '@/utils/auth-routing';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: UserRole | UserRole[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole 
}) => {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Check role-based access if requiredRole is specified
  if (requiredRole) {
    const allowedRoles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
    
    // If user's role is not in the allowed roles, redirect to their appropriate dashboard
    if (!profile?.role || !allowedRoles.includes(profile.role)) {
      const redirectPath = getAuthenticatedUserRoute(profile?.role || null);
      return <Navigate to={redirectPath} replace />;
    }
  }

  return <>{children}</>;
};
