-- Add missing Fairgreen International School code
INSERT INTO public.school_codes (code, school_name, redirect_url, active)
VALUES ('2brKG4Fv3S', 'Fairgreen International School', 'https://shop.kapesuniforms.com/collections/fairgreen-international', true)
ON CONFLICT (code) DO UPDATE SET
  school_name = EXCLUDED.school_name,
  redirect_url = EXCLUDED.redirect_url,
  active = EXCLUDED.active,
  updated_at = now();