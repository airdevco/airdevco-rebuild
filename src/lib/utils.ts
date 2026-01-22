import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null
): string {
  // Try first and last name initials
  if (firstName && lastName) {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  }
  
  // Try first two characters of first name
  if (firstName && firstName.length >= 2) {
    return firstName.slice(0, 2).toUpperCase();
  }
  
  // Try first two characters of last name
  if (lastName && lastName.length >= 2) {
    return lastName.slice(0, 2).toUpperCase();
  }
  
  // Fall back to email initial
  if (email) {
    return email[0].toUpperCase();
  }
  
  // Ultimate fallback
  return "U";
}
