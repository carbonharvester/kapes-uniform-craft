// Utility to handle Shopify theme school code conflicts
// This creates a script injection that overrides the theme's school code handling

export function injectShopifyBypassScript() {
  // Only run if we're about to redirect to shop.kapesuniforms.com
  const pendingAuth = localStorage.getItem('kapes.pendingAuth');
  if (!pendingAuth) return;

  try {
    const authData = JSON.parse(pendingAuth);
    const now = Date.now();
    
    // Clear stale auth data (older than 5 minutes)
    if (now - authData.timestamp > 5 * 60 * 1000) {
      localStorage.removeItem('kapes.pendingAuth');
      return;
    }

    // Enhanced script to handle collection page authentication
    const bypassScript = `
      (function() {
        if (typeof window !== 'undefined') {
          const kapesAuthData = ${JSON.stringify(authData)};
          
          // Enhanced authentication for collection pages
          function authenticateForCollection() {
            // Set authentication in localStorage for Shopify theme
            localStorage.setItem('pwd', 'authenticated');
            localStorage.setItem('school', kapesAuthData.code);
            
            // Extract collection handle from URL for better matching
            const urlObj = new URL(kapesAuthData.originalUrl);
            const collectionMatch = urlObj.pathname.match(/\/collections\/([^\/]+)/);
            if (collectionMatch) {
              localStorage.setItem('collection', collectionMatch[1]);
            }
            
            console.log('[Kapes Auth] Collection authentication set:', {
              code: kapesAuthData.code,
              collection: collectionMatch ? collectionMatch[1] : 'unknown',
              url: kapesAuthData.originalUrl
            });
          }
          
          // Run authentication immediately
          authenticateForCollection();
          
          // Override common Shopify theme functions
          window.validateSchoolCode = function(code) {
            if (code === kapesAuthData.code) {
              authenticateForCollection();
              if (window.location.href !== kapesAuthData.originalUrl) {
                window.location.href = kapesAuthData.originalUrl;
              }
              return true;
            }
            return false;
          };
          
          // Override schoolCode array mapping
          if (window.schoolCode) {
            const path = kapesAuthData.originalUrl.replace('https://shop.kapesuniforms.com', '');
            window.schoolCode[kapesAuthData.code] = path;
          }
          
          // Handle URL parameters on page load
          const urlParams = new URLSearchParams(window.location.search);
          const codeParam = urlParams.get('code');
          if (codeParam === kapesAuthData.code) {
            authenticateForCollection();
          }
        }
      })();
    `;

    // Inject the script
    const scriptEl = document.createElement('script');
    scriptEl.textContent = bypassScript;
    document.head.appendChild(scriptEl);
    
    // Clean up after a delay to ensure it runs
    setTimeout(() => {
      localStorage.removeItem('kapes.pendingAuth');
    }, 2000);
    
  } catch (error) {
    console.error('[Kapes Auth] Error injecting bypass script:', error);
    localStorage.removeItem('kapes.pendingAuth');
  }
}

export function createShopifyRedirectHandler(schoolCode: string, redirectUrl: string) {
  // Store authentication data for cross-domain use
  const authData = {
    code: schoolCode,
    originalUrl: redirectUrl,
    timestamp: Date.now()
  };
  
  localStorage.setItem('kapes.pendingAuth', JSON.stringify(authData));
  
  // Enhanced script for better collection page handling
  const script = document.createElement('script');
  script.textContent = `
    (function() {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code') || '${schoolCode}';
      
      if (code) {
        // Set comprehensive authentication
        localStorage.setItem('pwd', 'authenticated');
        localStorage.setItem('school', code);
        
        // Extract and store collection info
        const urlObj = new URL('${redirectUrl}');
        const collectionMatch = urlObj.pathname.match(/\/collections\/([^\/]+)/);
        if (collectionMatch) {
          localStorage.setItem('collection', collectionMatch[1]);
        }
        
        // Enhanced path checking for collection pages
        const currentPath = window.location.pathname;
        const expectedPath = urlObj.pathname;
        
        // Debug logging
        console.log('[Kapes Auth] Collection redirect check:', {
          current: currentPath,
          expected: expectedPath,
          code: code,
          collection: collectionMatch ? collectionMatch[1] : 'none'
        });
        
        // Redirect if paths don't match and we're not already on the right collection
        if (currentPath !== expectedPath) {
          window.location.href = '${redirectUrl}';
        }
      }
    })();
  `;
  
  document.head.appendChild(script);
  
  // Clean up script after ensuring it runs
  setTimeout(() => {
    if (script.parentNode) {
      script.parentNode.removeChild(script);
    }
  }, 2000);
}