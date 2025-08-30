-- Fix security warnings by setting search_path for functions

-- Update the validate_redirect_url function to include proper search_path
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
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = 'public';

-- Update the set_updated_at function to include proper search_path
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = 'public'
AS $function$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END;
$function$;