-- Update all school code redirect URLs to use shop subdomain
UPDATE public.school_codes 
SET redirect_url = REPLACE(redirect_url, 'https://www.kapesuniforms.com/', 'https://shop.kapesuniforms.com/')
WHERE redirect_url LIKE 'https://www.kapesuniforms.com/%';