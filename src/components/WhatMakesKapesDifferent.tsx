

import { KapesDifferentCarousel } from "@/components/ui/kapes-different-carousel";

export const WhatMakesKapesDifferent = () => {
  return (
    <section className="py-12 md:py-16 bg-white relative">
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4 md:mb-6 leading-tight">
              What Makes <span className="text-primary">Kapes Uniforms</span> Different?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover the unique features that set us apart in sustainable school uniform solutions
            </p>
          </div>
          <KapesDifferentCarousel />
        </div>
      </div>
    </section>
  );
};

