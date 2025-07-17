
export const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-background overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow text */}
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium">
              Sustainable School Uniforms
            </span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-8 leading-tight">
            Transform your school's impact with{" "}
            <span className="text-primary">ethically made uniforms</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            From design to delivery, we handle everything while creating measurable positive impact for your school and communities worldwide. Zero admin, maximum impact.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-primary/90 hover:shadow-lg min-w-[200px]">
              Get Started Today
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-accent min-w-[200px]">
              View Our Impact
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-6">Trusted by leading schools worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-medium">School 1</div>
              <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-medium">School 2</div>
              <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-medium">School 3</div>
              <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-medium">School 4</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
