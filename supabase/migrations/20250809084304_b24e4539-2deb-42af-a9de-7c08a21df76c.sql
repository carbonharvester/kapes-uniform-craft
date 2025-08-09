
-- Upsert BISJ2173 to point to your custom-domain collection
WITH updated AS (
  UPDATE public.school_codes
     SET redirect_url = 'https://www.kapesuniforms.com/collections/bisj',
         updated_at   = now(),
         active       = true
   WHERE lower(code) = lower('BISJ2173')
   RETURNING id
)
INSERT INTO public.school_codes (code, school_name, redirect_url, active)
SELECT 'BISJ2173', NULL, 'https://www.kapesuniforms.com/collections/bisj', true
WHERE NOT EXISTS (SELECT 1 FROM updated);
