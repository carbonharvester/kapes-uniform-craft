import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  school_name: z.string().min(2, 'School name must be at least 2 characters').max(100, 'School name must be less than 100 characters'),
  contact_name: z.string().min(2, 'Contact name must be at least 2 characters').max(50, 'Contact name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
  form_type: z.string().default('contact'),
});

// Scorecard assessment form validation schema
export const scorecardFormSchema = z.object({
  school_name: z.string().min(2, 'School name must be at least 2 characters').max(100, 'School name must be less than 100 characters'),
  country: z.string().min(2, 'Please select a country'),
  contact_name: z.string().min(2, 'Contact name must be at least 2 characters').max(50, 'Contact name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  student_count: z.number().min(1, 'Student count must be at least 1').max(10000, 'Student count must be reasonable'),
});

// Value calculator validation schema
export const calculatorFormSchema = z.object({
  student_count: z.number().min(1, 'Student count must be at least 1').max(10000, 'Student count must be reasonable'),
  location: z.string().min(2, 'Please select a location'),
});

// Types derived from schemas
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type ScorecardFormData = z.infer<typeof scorecardFormSchema>;
export type CalculatorFormData = z.infer<typeof calculatorFormSchema>;

// Sanitization functions
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim();
};

export const sanitizeEmail = (email: string): string => {
  // Basic email sanitization - remove potential XSS
  return email.toLowerCase().trim().replace(/[<>'"]/g, '');
};

// Rate limiting helper (in-memory - for production use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export const checkRateLimit = (identifier: string, maxRequests: number = 5, windowMs: number = 60000): boolean => {
  const now = Date.now();
  const userLimit = rateLimitMap.get(identifier);
  
  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (userLimit.count >= maxRequests) {
    return false;
  }
  
  userLimit.count++;
  return true;
};