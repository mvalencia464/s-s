import { useState } from 'react';
import { FormData, formatPhoneNumber, sanitizeInput } from '../utils/formValidation';

// HighLevel API configuration
const HIGHLEVEL_API_BASE = 'https://services.leadconnectorhq.com';
const API_VERSION = '2021-07-28';

// Map form values to HighLevel picklist values
const mapServiceValue = (service: string): string => {
  const serviceMap: Record<string, string> = {
    'commercial': 'Commercial Mowing',
    'solar': 'Solar Farm Maintenance',
    'hydro': 'Hydro Seeding',
    'specialty': 'Specialty Services',
    'multiple': 'Multiple Services'
  };
  return serviceMap[service] || 'Not specified';
};

const mapFrequencyValue = (frequency: string): string => {
  const frequencyMap: Record<string, string> = {
    'one-time': 'One-time project',
    'monthly': 'Monthly',
    'quarterly': 'Quarterly',
    'seasonal': 'Seasonal',
    'as-needed': 'As needed'
  };
  return frequencyMap[frequency] || 'Not specified';
};

export interface HighLevelContact {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  phone?: string;
  locationId: string;
  customFields: Array<{
    key: string;
    field_value: string;
  }>;
  tags: string[];
  source: string;
}

export interface SubmissionState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

export const useHighLevel = () => {
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    isLoading: false,
    isSuccess: false,
    error: null,
  });

  const resetState = () => {
    setSubmissionState({
      isLoading: false,
      isSuccess: false,
      error: null,
    });
  };

  const createContact = async (formData: FormData): Promise<boolean> => {
    const token = import.meta.env.VITE_HIGHLEVEL_TOKEN;
    const locationId = import.meta.env.VITE_HIGHLEVEL_LOCATION_ID;

    if (!token || !locationId) {
      setSubmissionState({
        isLoading: false,
        isSuccess: false,
        error: 'HighLevel configuration not found. Please check your environment variables.',
      });
      return false;
    }

    setSubmissionState({
      isLoading: true,
      isSuccess: false,
      error: null,
    });

    try {
      // Parse name into first and last name
      const nameParts = sanitizeInput(formData.name).split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      // Prepare custom fields mapping
      const customFields = [
        {
          key: 'acresscope',
          field_value: sanitizeInput(formData.acres) || 'Not specified',
        },
        {
          key: 'service_interest',
          field_value: mapServiceValue(formData.service),
        },
        {
          key: 'frequency_needed',
          field_value: mapFrequencyValue(formData.frequency),
        },
        {
          key: 'project_details',
          field_value: sanitizeInput(formData.message) || 'No details provided',
        },
        {
          key: 'lead_source',
          field_value: 'S&S Land Management Website',
        },
        {
          key: 'submission_date',
          field_value: new Date().toISOString(),
        },
        {
          key: 'company_name',
          field_value: sanitizeInput(formData.company) || 'Not provided',
        },
      ];

      // Prepare contact payload
      const contactPayload: HighLevelContact = {
        firstName,
        lastName,
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        locationId,
        customFields,
        tags: ['Website Lead', 'S&S Land Management', 'Quote Request'],
        source: 'S&S Land Management Website',
      };

      // Add phone if provided
      if (formData.phone.trim()) {
        contactPayload.phone = formatPhoneNumber(formData.phone);
      }

      console.log('Creating HighLevel contact with payload:', contactPayload);

      // Make API request to HighLevel
      const response = await fetch(`${HIGHLEVEL_API_BASE}/contacts/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Version': API_VERSION,
          'Accept': 'application/json',
        },
        body: JSON.stringify(contactPayload),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error('HighLevel API Error:', response.status, responseData);
        throw new Error(
          responseData.message || 
          responseData.error || 
          `API Error: ${response.status} ${response.statusText}`
        );
      }

      console.log('HighLevel contact created successfully:', responseData);

      setSubmissionState({
        isLoading: false,
        isSuccess: true,
        error: null,
      });

      return true;
    } catch (error) {
      console.error('Error creating HighLevel contact:', error);
      
      let errorMessage = 'Failed to submit form. Please try again.';
      
      if (error instanceof Error) {
        if (error.message.includes('401')) {
          errorMessage = 'Authentication failed. Please contact support.';
        } else if (error.message.includes('400')) {
          errorMessage = 'Invalid form data. Please check your entries and try again.';
        } else if (error.message.includes('429')) {
          errorMessage = 'Too many requests. Please wait a moment and try again.';
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
          errorMessage = 'Network error. Please check your connection and try again.';
        }
      }

      setSubmissionState({
        isLoading: false,
        isSuccess: false,
        error: errorMessage,
      });

      return false;
    }
  };

  return {
    createContact,
    submissionState,
    resetState,
  };
};
