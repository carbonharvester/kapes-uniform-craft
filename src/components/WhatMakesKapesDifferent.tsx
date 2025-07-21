
import { KapesDifferentCarousel } from "@/components/ui/kapes-different-carousel";

export const WhatMakesKapesDifferent = () => {
  return (
    <section className="py-16 bg-white relative">
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6">
              What Makes <span className="text-primary">Kapes</span> Different?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the unique features that set us apart in sustainable school uniform solutions
            </p>
          </div>
          <KapesDifferentCarousel />
        </div>
      </div>
    </section>
  );
};
