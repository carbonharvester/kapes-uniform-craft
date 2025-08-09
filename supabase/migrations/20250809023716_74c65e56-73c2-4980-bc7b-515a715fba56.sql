
-- 1) Enforce case-insensitive uniqueness of codes
CREATE UNIQUE INDEX IF NOT EXISTS school_codes_code_lower_key
  ON public.school_codes (lower(code));

-- 2) Seed or update BISJ2173 to point to All Products for immediate testing
INSERT INTO public.school_codes (code, school_name, redirect_url, active)
VALUES
  ('BISJ2173', NULL, 'https://bed59d-3.myshopify.com/collections/all', true)
ON CONFLICT (code) DO UPDATE
SET
  redirect_url = EXCLUDED.redirect_url,
  active = EXCLUDED.active,
  updated_at = now(),
  school_name = COALESCE(EXCLUDED.school_name, public.school_codes.school_name);
