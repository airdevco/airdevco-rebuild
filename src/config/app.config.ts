/**
 * Global application configuration
 * This file contains app-wide configuration settings that control various features
 */

export const appConfig = {
  auth: {
    /**
     * Controls whether email confirmation is required during user signup
     * When true: Users must verify email before accessing the app
     * When false: Users are automatically logged in after signup
     * 
     * IMPORTANT: This should match your Supabase project settings
     */
    requireEmailConfirmation: false,
  },
  // Add future configuration sections here as needed
  // Example:
  // features: {
  //   enableAnalytics: true,
  //   enableNotifications: true,
  // }
};

// Type-safe config getter for better IDE support
export type AppConfig = typeof appConfig;