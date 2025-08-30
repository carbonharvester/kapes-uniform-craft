// Simplified utility for Shopify theme authentication
// Sets simple localStorage flags that theme.liquid can easily read

export function createShopifyRedirectHandler(schoolCode: string, redirectUrl: string) {
  // Set simple authentication flags for the Shopify theme
  localStorage.setItem('authenticated', 'true');
  localStorage.setItem('school', schoolCode);
  
  // Extract collection handle for theme.liquid
  const urlObj = new URL(redirectUrl);
  const collectionMatch = urlObj.pathname.match(/\/collections\/([^\/]+)/);
  if (collectionMatch) {
    localStorage.setItem('collection', collectionMatch[1]);
  }
  
  console.log('[Kapes Auth] Simple authentication set:', {
    code: schoolCode,
    collection: collectionMatch ? collectionMatch[1] : 'none',
    url: redirectUrl
  });
}