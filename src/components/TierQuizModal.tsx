import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TierQuiz } from "@/components/TierQuiz";

interface TierQuizModalProps {
  children: React.ReactNode;
}

export const TierQuizModal = ({ children }: TierQuizModalProps) => {
  const [open, setOpen] = useState(false);

  const handleQuizComplete = (tier: string, description: string) => {
    // Quiz completed, keep modal open to show results
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">Partnership Tier Quiz</DialogTitle>
        </DialogHeader>
        <TierQuiz onComplete={handleQuizComplete} />
      </DialogContent>
    </Dialog>
  );
};
