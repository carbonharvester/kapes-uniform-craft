import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TierQuiz } from "@/components/TierQuiz";

export const TierQuizModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpenQuiz = () => {
      console.log("Opening tier quiz modal");
      setOpen(true);
    };

    document.addEventListener('openTierQuiz', handleOpenQuiz);
    return () => document.removeEventListener('openTierQuiz', handleOpenQuiz);
  }, []);

  const handleQuizComplete = (tier: string, description: string) => {
    // Quiz completed, keep modal open to show results
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto w-[95vw] sm:w-full p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="sr-only">Partnership Tier Quiz</DialogTitle>
        </DialogHeader>
        <TierQuiz onComplete={handleQuizComplete} />
      </DialogContent>
    </Dialog>
  );
};
