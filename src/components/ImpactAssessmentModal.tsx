import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ImpactAssessment } from "@/components/ImpactAssessment";

export const ImpactAssessmentModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpenAssessment = () => {
      setOpen(true);
    };

    document.addEventListener('openImpactAssessment', handleOpenAssessment);
    return () => document.removeEventListener('openImpactAssessment', handleOpenAssessment);
  }, []);

  const handleAssessmentComplete = (results: any) => {
    // Assessment completed, keep modal open to show results
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto w-[95vw] sm:w-full p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="sr-only">Impact Readiness Assessment</DialogTitle>
        </DialogHeader>
        <ImpactAssessment onComplete={handleAssessmentComplete} />
      </DialogContent>
    </Dialog>
  );
};
