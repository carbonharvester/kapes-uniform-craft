import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FloatingGetStarted = () => {
  const scrollToGetStarted = () => {
    const element = document.getElementById('parent-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button
      onClick={scrollToGetStarted}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90"
      size="lg"
    >
      Get Started
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
};