
import { supabase } from "@/integrations/supabase/client";

export type SchoolCodeRecord = {
  code: string;
  school_name: string | null;
  redirect_url: string;
};

export async function fetchSchoolCode(codeInput: string): Promise<SchoolCodeRecord | null> {
  const code = codeInput.trim();
  if (!code) return null;

  console.log("[schoolCodes] Looking up code:", code);

  // Case-insensitive exact match using ilike without wildcards
  const { data, error } = await supabase
    .from("school_codes")
    .select("code, school_name, redirect_url")
    .ilike("code", code)
    .maybeSingle();

  if (error) {
    console.error("[schoolCodes] Error fetching school code:", error);
    throw new Error("Failed to validate school code");
  }

  console.log("[schoolCodes] Lookup result:", data);
  return data ?? null;
}
