-- Create secure database tables for user data collection
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  school_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  form_type TEXT NOT NULL DEFAULT 'contact',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for sustainability scorecard submissions
CREATE TABLE IF NOT EXISTS public.scorecard_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  school_name TEXT NOT NULL,
  country TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  student_count INTEGER,
  assessment_data JSONB,
  score INTEGER,
  recommendations TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for value calculator submissions
CREATE TABLE IF NOT EXISTS public.calculator_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_count INTEGER NOT NULL,
  location TEXT NOT NULL,
  calculated_values JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scorecard_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.calculator_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since these are lead generation forms)
-- Users can only read their own submissions, but anyone can insert
CREATE POLICY "Allow public insert on contact_submissions" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public insert on scorecard_submissions" 
ON public.scorecard_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public insert on calculator_submissions" 
ON public.calculator_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON public.contact_submissions;
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS update_scorecard_submissions_updated_at ON public.scorecard_submissions;
CREATE TRIGGER update_scorecard_submissions_updated_at
  BEFORE UPDATE ON public.scorecard_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();