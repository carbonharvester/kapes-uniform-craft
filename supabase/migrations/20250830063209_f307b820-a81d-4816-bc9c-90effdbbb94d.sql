-- Add comprehensive school codes with proper redirect URLs to prevent Shopify theme conflicts

-- Insert common school code patterns with proper URLs
INSERT INTO public.school_codes (code, school_name, redirect_url, active) VALUES
-- BISJ pattern (already exists, this will be ignored due to unique constraint)
('BISJ2173', 'British International School of Jeddah', 'https://shop.kapesuniforms.com/collections/school-b1sj47x9?code=BISJ2173', true),

-- Common school code variations that might exist
('BISJ', 'British International School of Jeddah', 'https://shop.kapesuniforms.com/collections/school-b1sj47x9?code=BISJ2173', true),
('TEST001', 'Test School 1', 'https://shop.kapesuniforms.com/collections/school-test001?code=TEST001', true),
('DEMO123', 'Demo School', 'https://shop.kapesuniforms.com/collections/school-demo123?code=DEMO123', true)

ON CONFLICT (code) DO UPDATE SET
  redirect_url = EXCLUDED.redirect_url,
  school_name = COALESCE(EXCLUDED.school_name, school_codes.school_name),
  active = EXCLUDED.active,
  updated_at = now();

-- Create an index on redirect_url for faster lookups
CREATE INDEX IF NOT EXISTS idx_school_codes_redirect_url ON public.school_codes(redirect_url);

-- Create a function to validate redirect URLs (optional safeguard)
CREATE OR REPLACE FUNCTION validate_redirect_url()
RETURNS TRIGGER AS $$
BEGIN
  -- Ensure redirect URL starts with the correct domain
  IF NEW.redirect_url NOT LIKE 'https://shop.kapesuniforms.com/%' AND 
     NEW.redirect_url NOT LIKE 'https://www.kapesuniforms.com/%' THEN
    RAISE EXCEPTION 'Invalid redirect URL domain. Must be shop.kapesuniforms.com or www.kapesuniforms.com';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to validate redirect URLs on insert/update
DROP TRIGGER IF EXISTS validate_redirect_url_trigger ON public.school_codes;
CREATE TRIGGER validate_redirect_url_trigger
  BEFORE INSERT OR UPDATE ON public.school_codes
  FOR EACH ROW EXECUTE FUNCTION validate_redirect_url();