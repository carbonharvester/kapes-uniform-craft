import { supabase } from '@/integrations/supabase/client';
import { ContactFormData, ScorecardFormData, CalculatorFormData } from '@/lib/validation';
import { BlogPost } from '@/types/blog';

// Secure API service that uses Supabase instead of external services

export const secureApi = {
  // Blog content - now uses secure edge function
  async getBlogPosts(limit?: number): Promise<BlogPost[]> {
    try {
      const url = limit ? `?limit=${limit}` : '';
      const { data, error } = await supabase.functions.invoke('blog-content' + url);

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      throw new Error('Failed to fetch blog posts');
    }
  },

  async getBlogPost(slug: string): Promise<BlogPost | null> {
    try {
      const { data, error } = await supabase.functions.invoke(`blog-content?slug=${slug}`);

      if (error) throw error;
      return data || null;
    } catch (error) {
      console.error('Error fetching blog post:', error);
      throw new Error('Failed to fetch blog post');
    }
  },

  // Contact form submission - now stored securely in Supabase
  async submitContactForm(formData: ContactFormData): Promise<void> {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          school_name: formData.school_name,
          contact_name: formData.contact_name,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message,
          form_type: formData.form_type,
        });

      if (error) throw error;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw new Error('Failed to submit contact form');
    }
  },

  // Scorecard submission - secure database storage
  async submitScorecardAssessment(formData: ScorecardFormData, assessmentData?: any): Promise<void> {
    try {
      const { error } = await supabase
        .from('scorecard_submissions')
        .insert({
          school_name: formData.school_name,
          country: formData.country,
          contact_name: formData.contact_name,
          email: formData.email,
          student_count: formData.student_count,
          assessment_data: assessmentData || null,
        });

      if (error) throw error;
    } catch (error) {
      console.error('Error submitting scorecard:', error);
      throw new Error('Failed to submit sustainability scorecard');
    }
  },

  // Calculator submission - secure tracking
  async submitCalculatorData(formData: CalculatorFormData, calculatedValues: any): Promise<void> {
    try {
      const { error } = await supabase
        .from('calculator_submissions')
        .insert({
          student_count: formData.student_count,
          location: formData.location,
          calculated_values: calculatedValues,
        });

      if (error) throw error;
    } catch (error) {
      console.error('Error submitting calculator data:', error);
      throw new Error('Failed to submit calculator data');
    }
  },
};