
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero-to-warm">
      {/* Hero background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: 'url(/lovable-uploads/a2f28efa-df53-424f-95ae-677cf0fa1e80.png)' }}>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Subtle scorecard header */}
          <div className="text-white/80 text-sm font-medium tracking-wide uppercase mb-4">
            Free 5-Minute Sustainability Assessment Available
          </div>
          
          {/* Main headline with consistent typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white drop-shadow-lg">
            School Uniforms That{" "}
            <span className="font-medium text-white drop-shadow-lg">
              Make the World Better
            </span>
          </h1>
          
          {/* Subtitle with perfect spacing */}
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg">
            Ethically made. Sustainably sourced. Fully managed from design to delivery with measurable impact and zero admin for your school
          </p>
          
          {/* CTA buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('parent-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-medium text-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              I'm a Parent
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button 
              onClick={() => document.getElementById('audit-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border border-white/20 rounded-2xl font-medium text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              I'm a School
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button 
              onClick={() => document.getElementById('audit-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center justify-center px-6 py-3 bg-transparent text-white/90 border border-white/30 rounded-xl font-medium text-base transition-all duration-300 hover:bg-white/10 hover:scale-105 backdrop-blur-sm"
            >
              Get Sustainability Score
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};
