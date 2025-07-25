import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PartnershipQuiz } from "@/components/PartnershipQuiz";

export const PartnershipQuizModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpenQuiz = () => setOpen(true);
    document.addEventListener('openPartnershipQuiz', handleOpenQuiz);
    return () => document.removeEventListener('openPartnershipQuiz', handleOpenQuiz);
  }, []);

  const handleQuizComplete = (recommendation: string, description: string) => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">Partnership Assessment</DialogTitle>
        </DialogHeader>
        <PartnershipQuiz onComplete={handleQuizComplete} />
      </DialogContent>
    </Dialog>
  );
};