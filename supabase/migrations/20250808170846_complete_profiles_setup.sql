-- =============================================
-- Complete Profiles Setup with User Roles Migration
-- =============================================
-- This migration sets up the complete profiles system including:
-- 1. Helper functions for timestamps
-- 2. User role enum type
-- 3. Profiles table with RLS
-- 4. Role helper functions
-- 5. Automatic profile creation on user signup
-- =============================================

-- 1. Create function to update updated_at column
-- This is a reusable function for any table with an updated_at column
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- 2. Create role enum type
CREATE TYPE public.user_role AS ENUM ('standard', 'admin');

-- 3. Create profiles table with role support
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name text,
  last_name text,
  role public.user_role NOT NULL DEFAULT 'standard',
  onboarding_complete timestamp with time zone,
  created_at timestamptz NOT NULL DEFAULT NOW(),
  updated_at timestamptz NOT NULL DEFAULT NOW()
);

-- 4. Enable Row Level Security on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 5. Helper function for RLS policies to get current user's role
CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS public.user_role
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT role FROM public.profiles WHERE id = (SELECT auth.uid())
$$;

-- 6. Create RLS policies for profiles table
-- Users can only access their own profile

-- Policy: Users can view their own profile
DO $$ 
BEGIN
  CREATE POLICY "Users can view their own profile"
    ON public.profiles
    FOR SELECT
    USING (auth.uid() = id);
EXCEPTION 
  WHEN duplicate_object THEN NULL; 
END $$;

-- Policy: Users can create their own profile
DO $$ 
BEGIN
  CREATE POLICY "Users can create their own profile"
    ON public.profiles
    FOR INSERT
    WITH CHECK (auth.uid() = id);
EXCEPTION 
  WHEN duplicate_object THEN NULL; 
END $$;

-- Policy: Users can update own profile except role
-- CRITICAL: This policy prevents users from changing their own role
DO $$ 
BEGIN
  CREATE POLICY "Users can update own profile except role"
    ON public.profiles
    FOR UPDATE
    USING (auth.uid() = id)
    WITH CHECK (
      -- Ensure role cannot be changed by the user themselves
      -- Only allow update if role remains the same OR user is admin
      (role = (SELECT role FROM public.profiles WHERE id = auth.uid()))
      OR 
      ((SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin')
    );
EXCEPTION 
  WHEN duplicate_object THEN NULL; 
END $$;

-- Policy: Users can delete their own profile
DO $$ 
BEGIN
  CREATE POLICY "Users can delete their own profile"
    ON public.profiles
    FOR DELETE
    USING (auth.uid() = id);
EXCEPTION 
  WHEN duplicate_object THEN NULL; 
END $$;

-- 7. Create trigger to keep updated_at in sync
DO $$ 
BEGIN
  CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();
EXCEPTION 
  WHEN duplicate_object THEN NULL; 
END $$;

-- 8. Create function to handle new user signup
-- This function automatically creates a profile when a user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER 
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, first_name, last_name, role, created_at, updated_at)
  VALUES (
    NEW.id,
    NULL,  -- first_name will be populated during onboarding
    NULL,  -- last_name will be populated during onboarding
    'standard',  -- default role for new users
    NOW(),
    NOW()
  )
  ON CONFLICT (id) DO NOTHING;  -- Prevent errors if profile already exists
  RETURN NEW;
END;
$$;

-- 9. Create trigger to automatically create profile on user signup
DO $$ 
BEGIN
  CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW 
    EXECUTE FUNCTION public.handle_new_user();
EXCEPTION 
  WHEN duplicate_object THEN NULL; 
END $$;

-- =============================================
-- Migration complete
-- =============================================
-- Example usage for admin-only table access:
-- CREATE POLICY "admin_only" ON admin_table
-- FOR ALL USING (public.get_user_role() = 'admin');