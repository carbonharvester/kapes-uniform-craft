-- Update BISJ2173 redirect URL to BISJ collection
UPDATE public.school_codes 
SET redirect_url = 'https://www.kapesuniforms.com/collections/bisj',
    updated_at = now()
WHERE code = 'BISJ2173';