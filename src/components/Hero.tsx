export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero-to-warm -mt-[1px]">
      {/* Hero background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{
      backgroundImage: 'url(/lovable-uploads/18d6320f-3eeb-4608-8da3-c697e8e32ff8.png)'
    }}>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Subtle scorecard header */}
          <div className="text-white/80 text-sm font-medium tracking-wide uppercase mb-4">FREE 3-MINUTE SUSTAINABILITY ASSESSMENT AVAILABLE</div>
          
          {/* Main headline with consistent typography */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-academy-hero font-extrabold tracking-tight text-white drop-shadow-lg px-4">
            School Uniforms That Create Change
          </h1>
          
          {/* Subtitle with perfect spacing */}
          <p className="text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg px-4">The world's <span className="font-bold">only</span> partner making school uniforms eco-friendly, ethical, circular, and carbon neutral—while feeding and clothing children in need, and turning your school's sustainability into a story worth sharing.</p>
          
          {/* CTA buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <button onClick={() => document.getElementById('parent-section')?.scrollIntoView({
            behavior: 'smooth'
          })} className="group inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground rounded-2xl font-medium text-base md:text-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto">
              <div className="flex flex-col items-start">
                <span className="text-base md:text-lg font-medium">I'm a Parent</span>
                <span className="text-xs opacity-90 mt-0.5">Shop Now</span>
              </div>
              <svg className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button onClick={() => document.getElementById('audit-section')?.scrollIntoView({
            behavior: 'smooth'
          })} className="group inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white/10 text-white border border-white/20 rounded-2xl font-medium text-base md:text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm w-full sm:w-auto">
              <div className="flex flex-col items-start">
                <span className="text-base md:text-lg font-medium">I'm a School</span>
                <span className="text-xs opacity-90 mt-0.5">See How It Works</span>
              </div>
              <svg className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{
      animationDelay: '1s'
    }}></div>
    </section>;
};