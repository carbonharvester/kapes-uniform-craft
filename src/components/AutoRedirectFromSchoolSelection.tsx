
import { useEffect } from "react";
import { getSchoolSelection } from "@/utils/schoolCodeStorage";

export const AutoRedirectFromSchoolSelection = () => {
  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname !== "/") return;

    const selection = getSchoolSelection();
    if (!selection) return;

    console.log("[AutoRedirect] Found saved selection, redirecting:", selection);
    window.location.href = selection.redirect_url;
  }, []);

  return null;
};
