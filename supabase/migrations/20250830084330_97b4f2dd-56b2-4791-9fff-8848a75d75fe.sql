-- Update redirect URLs to remove code parameters and point directly to collections
UPDATE school_codes SET 
  redirect_url = 'https://shop.kapesuniforms.com/collections/school-b1sj47x9'
WHERE code IN ('BISJ', 'BISJ2173');

UPDATE school_codes SET 
  redirect_url = 'https://shop.kapesuniforms.com/collections/school-demo123'
WHERE code = 'DEMO123';

UPDATE school_codes SET 
  redirect_url = 'https://shop.kapesuniforms.com/collections/school-test001'
WHERE code = 'TEST001';