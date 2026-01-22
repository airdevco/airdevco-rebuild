# Authentication & User Roles System Overview

## Architecture

The authentication system is built on Supabase Auth with a custom role-based access control (RBAC) layer. The architecture consists of:

- **Supabase Auth**: Handles user authentication, sessions, and password management
- **Profiles Table**: Extends auth.users with role information and user metadata
- **React Context**: Manages auth state and provides authentication methods throughout the app
- **Route Guards**: Components that protect routes based on authentication status and user roles
- **Role-Based Routing**: Automatically directs users to appropriate interfaces based on their role

## Core Components

### AuthContext (`/src/contexts/AuthContext.tsx`)
Central authentication state manager that:
- Maintains current user, session, and role state
- Provides auth methods: signUp, signIn, signOut, resetPasswordForEmail, updatePassword
- Fetches and caches user role from profiles table
- Broadcasts auth state changes to all consuming components

### ProtectedRoute (`/src/components/auth/protected-route.tsx`)
Route guard that:
- Blocks unauthenticated access (redirects to /login)
- Enforces role-based access when `requiredRole` prop is specified
- Shows loading state while checking authentication
- Redirects unauthorized users to their appropriate dashboard

### AuthRoute (`/src/components/auth/auth-route.tsx`)
Inverse guard for auth pages that:
- Prevents authenticated users from accessing login/signup pages
- Automatically redirects authenticated users to their role-appropriate dashboard
- Uses `getAuthenticatedUserRoute()` utility for intelligent routing

### Auth Routing Utility (`/src/utils/auth-routing.ts`)
Centralized routing logic that:
- Determines the appropriate dashboard based on user role
- Returns `/admin` for admin users
- Returns `/portal` for standard users
- Designed for extensibility (e.g., future onboarding status checks)
- Single source of truth for role-based redirect logic

### Auth Forms
- **SignupForm**: Creates new accounts, redirects to /onboarding on success
- **LoginForm**: Authenticates existing users, redirects to /admin by default
- Both forms integrate with AuthContext for seamless state management

## Database Structure

### User Roles Enum
```sql
CREATE TYPE public.user_role AS ENUM ('standard', 'admin');
```

### Profiles Table
- **id**: UUID reference to auth.users
- **first_name/last_name**: User metadata (populated during onboarding)
- **role**: User's access level (defaults to 'standard')
- **created_at/updated_at**: Timestamps

### Security Features
- **Row Level Security (RLS)**: Users can only access their own profile
- **Role Protection**: Users cannot modify their own role (prevents privilege escalation)
- **Automatic Profile Creation**: Trigger creates profile on user signup
- **Admin Override**: Admin users can modify any profile including roles

## User Flows

### New User Signup Flow
1. User submits email/password on /signup
2. Supabase creates auth.users entry
3. Database trigger automatically creates profiles entry with 'standard' role
4. User redirected to /onboarding for profile completion
5. After onboarding, user directed to /portal (standard users)

### Existing User Login Flow
1. User submits credentials on /login
2. Supabase validates and creates session
3. AuthContext fetches user's role from profiles table
4. User redirected based on role:
   - Admin → /admin dashboard
   - Standard → /portal dashboard

### Role-Based Navigation
1. User attempts to access protected route
2. ProtectedRoute checks authentication status
3. If authenticated, checks role requirements
4. Routes user appropriately:
   - Authorized → Renders requested page
   - Unauthorized → Redirects to user's default dashboard
   - Unauthenticated → Redirects to /login

### Session Management Flow
1. On app load, AuthContext checks for existing session
2. If session exists, fetches user role from database
3. Maintains session through token refresh (handled by Supabase)
4. On signout, clears session and resets all auth state

## Component Relationships

```
App.tsx
  ├── AuthProvider (wraps entire app)
  │     ├── Provides: user, session, userRole, auth methods
  │     └── Manages: Supabase auth state subscription
  │
  ├── Public Routes
  │     └── AuthRoute (redirects if authenticated)
  │           ├── Uses: getAuthenticatedUserRoute() utility
  │           ├── /login → LoginForm
  │           ├── /signup → SignupForm
  │           └── /forgot-password → ForgotPasswordForm
  │
  └── Protected Routes
        └── ProtectedRoute (requires authentication)
              ├── Uses: getAuthenticatedUserRoute() for unauthorized redirects
              ├── /admin (requires 'admin' role)
              │     ├── /admin/dashboard
              │     ├── /admin/projects
              │     └── /admin/settings
              │
              └── /portal (standard user area)
                    ├── /portal/projects
                    └── /portal/customers
```

## Key Integration Points

1. **Route Protection**: All sensitive routes wrapped in ProtectedRoute
2. **Role Checking**: ProtectedRoute accepts `requiredRole` prop for granular access control
3. **Smart Redirects**: `getAuthenticatedUserRoute()` utility provides centralized routing logic
4. **Routing Consistency**: Both AuthRoute and ProtectedRoute use the same utility for redirects
5. **State Synchronization**: AuthContext listeners update UI immediately on auth changes
6. **Database Integrity**: RLS policies ensure users can't escalate privileges
7. **Automatic Setup**: Database triggers handle profile creation seamlessly

## Example User Flows

### Admin User Journey
```
1. Admin logs in at /login
2. Credentials validated by Supabase
3. AuthContext fetches role ('admin') from profiles
4. Redirected to /admin/dashboard
5. Can access all /admin/* routes
6. Can modify user roles in database
```

### Standard User Journey
```
1. User signs up at /signup
2. Profile created with 'standard' role
3. Completes onboarding flow
4. Redirected to /portal/projects
5. Can access /portal/* routes
6. Blocked from /admin/* routes (redirected to /portal)
```

### Unauthorized Access Attempt
```
1. Standard user tries to access /admin/settings
2. ProtectedRoute checks requiredRole='admin'
3. User role is 'standard' (not authorized)
4. Redirected to /portal (their default dashboard)
```

## Implementation Details

### Role Persistence
- User roles stored in database, not in JWT
- Fetched once on login and cached in React context
- Survives page refreshes via session restoration

### Security Considerations
- Roles checked server-side via RLS policies
- Client-side checks are for UX, not security
- Database triggers ensure data consistency
- Users cannot elevate their own privileges

### Extensibility
The system is designed to easily support:
- Additional roles (e.g., 'moderator', 'viewer')
- Feature flags or permissions
- Multi-tenancy with org-level roles
- Conditional redirects based on onboarding status

### Role-Based Routing Logic
The `getAuthenticatedUserRoute()` utility serves as the single source of truth for determining where authenticated users should be routed. This centralized approach:
- Ensures consistent behavior across all auth components
- Makes it easy to modify routing rules in one place
- Supports future enhancements like onboarding checks or feature flags
- Prevents routing logic duplication across components

Current routing rules:
- Admin role → `/admin`
- Standard role → `/portal`
- Null role (shouldn't happen) → `/portal` (safe default)

Future extensibility example:
```
// Could be extended to include:
// - Onboarding status checks
// - Feature flags
// - Subscription tiers
// - Organization-specific routing
```