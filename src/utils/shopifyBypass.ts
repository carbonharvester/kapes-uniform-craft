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

    // Create script to inject into Shopify theme
    const bypassScript = `
      (function() {
        // Override any existing schoolCode array or validation function
        if (typeof window !== 'undefined') {
          // Store the original redirect data
          const kapesAuthData = ${JSON.stringify(authData)};
          
          // Override common Shopify theme school code functions
          window.validateSchoolCode = function(code) {
            if (code === kapesAuthData.code) {
              // Use our database URL instead of theme mapping
              window.location.href = kapesAuthData.originalUrl;
              return true;
            }
            return false;
          };
          
          // Override any schoolCode array
          if (window.schoolCode) {
            window.schoolCode['${authData.code}'] = '${authData.originalUrl.replace('https://shop.kapesuniforms.com', '')}';
          }
          
          // Set authentication in localStorage for Shopify theme
          localStorage.setItem('pwd', 'authenticated');
          localStorage.setItem('school', kapesAuthData.code);
          
          console.log('[Kapes Auth] Shopify bypass script loaded for code:', kapesAuthData.code);
        }
      })();
    `;

    // Inject the script
    const scriptEl = document.createElement('script');
    scriptEl.textContent = bypassScript;
    document.head.appendChild(scriptEl);
    
    // Clean up
    localStorage.removeItem('kapes.pendingAuth');
    
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
  
  // Create a temporary script that will run on the Shopify domain
  const script = document.createElement('script');
  script.textContent = `
    // This script ensures proper authentication on the Shopify domain
    (function() {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code') || '${schoolCode}';
      
      if (code) {
        localStorage.setItem('pwd', 'authenticated');
        localStorage.setItem('school', code);
        
        // If we're on the wrong collection, redirect to the correct one
        const currentPath = window.location.pathname;
        const expectedPath = '${new URL(redirectUrl).pathname}';
        
        if (currentPath !== expectedPath && !currentPath.includes('school-')) {
          window.location.href = '${redirectUrl}';
        }
      }
    })();
  `;
  
  document.head.appendChild(script);
  
  // Clean up script after a short delay
  setTimeout(() => {
    if (script.parentNode) {
      script.parentNode.removeChild(script);
    }
  }, 1000);
}