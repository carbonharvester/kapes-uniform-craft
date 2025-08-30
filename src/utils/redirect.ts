export function goToExternal(url: string, forceBypassShopifyRedirect: boolean = false) {
  try {
    // Simple URL with code parameter
    const finalUrl = ensureCodeParameter(url);
    
    console.log('[Kapes Redirect] Starting redirect to:', finalUrl);
    console.log('[Kapes Redirect] Current location:', window.location.href);

    const inIframe = window.self !== window.top;

    if (inIframe) {
      try {
        // Prefer top-level navigation to break out of iframe (e.g., Lovable preview)
        if (window.top) {
          window.top.location.href = finalUrl;
          return;
        }
      } catch (e) {
        // Access to window.top may be restricted; try opening a new tab
      }

      const opened = window.open(finalUrl, "_blank", "noopener,noreferrer");
      if (!opened) {
        // If the popup was blocked, fall back to same-tab navigation
        window.location.href = finalUrl;
      }
      return;
    }

    // Not in an iframe: normal navigation
    window.location.href = finalUrl;
  } catch {
    // Last resort
    window.location.assign(url);
  }
}

function ensureCodeParameter(url: string): string {
  try {
    const urlObj = new URL(url);
    
    // If URL already has a code parameter, return as-is
    if (urlObj.searchParams.has('code')) {
      return url;
    }
    
    // Extract potential code from URL patterns
    const pathMatch = urlObj.pathname.match(/\/collections\/.*?([A-Z0-9]+)$/);
    if (pathMatch) {
      urlObj.searchParams.set('code', pathMatch[1]);
      return urlObj.toString();
    }
    
    return url;
  } catch {
    return url;
  }
}

function extractCollectionHandle(url: string): string | null {
  try {
    const urlObj = new URL(url);
    const collectionMatch = urlObj.pathname.match(/\/collections\/([^\/]+)/);
    return collectionMatch ? collectionMatch[1] : null;
  } catch {
    return null;
  }
}
