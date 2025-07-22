
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
      className="fixed left-2 top-1/2 -translate-y-1/2 z-50 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 text-sm md:text-base md:px-6 md:py-3 md:-left-10 md:-rotate-90"
      size="sm"
    >
      <span className="md:block">Get Started</span>
      <span className="md:hidden">Start</span>
    </Button>
  );
};
