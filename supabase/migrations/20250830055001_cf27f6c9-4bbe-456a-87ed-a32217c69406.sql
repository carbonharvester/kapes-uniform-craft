-- Update BISJ school code to include password parameter
UPDATE public.school_codes 
SET redirect_url = 'https://shop.kapesuniforms.com/collections/bisj?password=BISJ2173'
WHERE code = 'BISJ2173';