// Form validation utilities for HighLevel integration

export interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  acres: string;
  service: string;
  frequency: string;
  message: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  acres?: string;
  service?: string;
  frequency?: string;
  message?: string;
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone number validation regex (supports various formats)
const PHONE_REGEX = /^[\+]?[1-9][\d]{0,15}$/;

export const validateForm = (data: FormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Name validation
  if (!data.name.trim()) {
    errors.name = 'Name is required';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation (optional but if provided, must be valid)
  if (data.phone.trim() && !isValidPhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  return errors;
};

export const isValidPhone = (phone: string): boolean => {
  // Remove all non-digit characters
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Check if it's a valid length (7-15 digits)
  return cleanPhone.length >= 7 && cleanPhone.length <= 15;
};

export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Format as international number if it looks like a US number
  if (cleanPhone.length === 10) {
    return `+1${cleanPhone}`;
  } else if (cleanPhone.length === 11 && cleanPhone.startsWith('1')) {
    return `+${cleanPhone}`;
  }
  
  // Return as-is for other formats
  return cleanPhone.length > 0 ? `+${cleanPhone}` : phone;
};

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

export const validateRequired = (value: string, fieldName: string): string | undefined => {
  if (!value.trim()) {
    return `${fieldName} is required`;
  }
  return undefined;
};

export const validateEmail = (email: string): string | undefined => {
  if (!email.trim()) {
    return 'Email is required';
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    return 'Please enter a valid email address';
  }
  return undefined;
};

export const validatePhone = (phone: string): string | undefined => {
  if (phone.trim() && !isValidPhone(phone)) {
    return 'Please enter a valid phone number';
  }
  return undefined;
};
