
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";

export const FloatingScorecardCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const differentSection = document.getElementById('school-section');
      if (differentSection) {
        const rect = differentSection.getBoundingClientRect();
        setIsVisible(rect.bottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAudit = () => {
    const element = document.getElementById('audit-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToAudit}
      className="fixed right-6 bottom-6 z-40 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full p-4 animate-pulse"
      size="lg"
    >
      <Target className="h-5 w-5 mr-2" />
      Get Score
    </Button>
  );
};
