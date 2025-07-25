export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero-to-warm -mt-[1px]">
      {/* Hero background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{
      backgroundImage: 'url(/lovable-uploads/a2f28efa-df53-424f-95ae-677cf0fa1e80.png)'
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
          <div className="pt-4 flex flex-col gap-4 justify-center items-center px-4 max-w-md mx-auto">
            <button onClick={() => document.getElementById('parent-section')?.scrollIntoView({
            behavior: 'smooth'
          })} className="group w-full inline-flex items-center justify-between px-6 py-4 bg-gradient-to-r from-coral-500 to-coral-400 text-white rounded-2xl font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/20">
              <div className="flex flex-col items-start">
                <span className="text-lg font-semibold">I'm a Parent</span>
                <span className="text-sm opacity-90 font-normal">Shop Now</span>
              </div>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button onClick={() => document.getElementById('audit-section')?.scrollIntoView({
            behavior: 'smooth'
          })} className="group w-full inline-flex items-center justify-between px-6 py-4 bg-white/15 text-white border border-white/30 rounded-2xl font-medium text-lg transition-all duration-300 hover:bg-white/25 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-md">
              <div className="flex flex-col items-start">
                <span className="text-lg font-semibold">I'm a School</span>
                <span className="text-sm opacity-90 font-normal">See How It Works</span>
              </div>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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