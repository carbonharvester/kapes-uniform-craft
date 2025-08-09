
export type SchoolSelection = {
  code: string;
  redirect_url: string;
  school_name?: string | null;
  savedAt: number;
};

const KEY = "kapes.schoolSelection";

export function saveSchoolSelection(code: string, redirect_url: string, school_name?: string | null) {
  if (typeof window === "undefined") return;
  const selection: SchoolSelection = {
    code,
    redirect_url,
    school_name: school_name ?? null,
    savedAt: Date.now(),
  };
  localStorage.setItem(KEY, JSON.stringify(selection));
  console.log("[schoolCodeStorage] Saved selection:", selection);
}

export function getSchoolSelection(): SchoolSelection | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as SchoolSelection;
    if (!parsed?.code || !parsed?.redirect_url) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function clearSchoolSelection() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
  console.log("[schoolCodeStorage] Cleared selection");
}
