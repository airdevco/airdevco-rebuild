import { UserRole } from '@/contexts/AuthContext';

/**
 * Determines the appropriate route for an authenticated user based on their role
 * and other factors (extensible for future conditions like onboarding status)
 */
export function getAuthenticatedUserRoute(userRole: UserRole | null): string {
  // Admin users always go to admin
  if (userRole === 'admin') {
    return '/admin';
  }
  
  // Standard users go to portal
  // In the future, we can add logic here like:
  // if (!onboardingCompleted) return '/onboarding';
  return '/portal';
}