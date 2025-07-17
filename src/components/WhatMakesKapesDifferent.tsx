
import { Features } from "@/components/ui/features-4";

export const WhatMakesKapesDifferent = () => {
  return (
    <section className="py-16 bg-background relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-3">
        <img 
          src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1920&h=1080&fit=crop&crop=center" 
          alt="Sustainable nature background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
        <Features />
      </div>
    </section>
  );
};
