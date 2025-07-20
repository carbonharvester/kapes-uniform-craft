import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const FloatingGetStarted = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const schoolSection = document.getElementById('school-section');
      if (schoolSection) {
        const rect = schoolSection.getBoundingClientRect();
        setIsVisible(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToGetStarted = () => {
    const element = document.getElementById('parent-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToGetStarted}
      className="fixed left-0 top-1/2 -translate-y-1/2 -rotate-90 z-50 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 origin-center"
      size="lg"
    >
      Get Started
    </Button>
  );
};