export function goToExternal(url: string) {
  try {
    const inIframe = window.self !== window.top;

    if (inIframe) {
      try {
        // Prefer top-level navigation to break out of iframe (e.g., Lovable preview)
        if (window.top) {
          window.top.location.href = url;
          return;
        }
      } catch (e) {
        // Access to window.top may be restricted; try opening a new tab
      }

      const opened = window.open(url, "_blank", "noopener,noreferrer");
      if (!opened) {
        // If the popup was blocked, fall back to same-tab navigation
        window.location.href = url;
      }
      return;
    }

    // Not in an iframe: normal navigation
    window.location.href = url;
  } catch {
    // Last resort
    window.location.assign(url);
  }
}
