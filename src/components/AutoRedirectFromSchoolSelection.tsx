
import { useEffect } from "react";
import { getSchoolSelection } from "@/utils/schoolCodeStorage";
import { goToExternal } from "@/utils/redirect";

export const AutoRedirectFromSchoolSelection = () => {
  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname !== "/") return;

    const selection = getSchoolSelection();
    if (!selection) return;

    console.log("[AutoRedirect] Found saved selection, redirecting:", selection);
    goToExternal(selection.redirect_url);
  }, []);

  return null;
};
