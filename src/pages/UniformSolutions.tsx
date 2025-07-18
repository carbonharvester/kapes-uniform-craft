import { Button } from "@/components/ui/button";
import { Leaf, Recycle, ShieldCheck, Shirt, Zap, Users, Sparkles, CheckCircle } from "lucide-react";

export const UniformSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/drkudvyog/image/upload/v1737219891/mf7gylpmgb26uh7lbk8w.jpg" 
            alt="Sustainable uniform solutions"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Dual Overlays */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        
        {/* Animated blur circles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-2xl px-6 py-3 mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Sustainable Fashion Revolution</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-6">
              Uniform Solutions
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-white/30 flex-1 max-w-20"></div>
              <p className="text-2xl md:text-3xl font-light text-white/90">
                Sustainable. Ethical. Durable.
              </p>
              <div className="h-px bg-white/30 flex-1 max-w-20"></div>
            </div>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              At Kapes, we create school uniforms that reflect your school's values and commitment to sustainability—without sacrificing quality or comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Materials Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">Materials that Matter</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every fiber tells a story of sustainability, innovation, and care for our planet
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group hover-lift transition-smooth animate-fade-in">
              <div className="border-0 shadow-glass rounded-3xl p-8 md:p-12 h-full text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 rounded-2xl p-4 group-hover:scale-110 transition-smooth">
                    <Leaf className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Regenerative Organic Cotton
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Naturally soft, breathable, and grown sustainably to improve soil and biodiversity. Our cotton doesn't just avoid harm—it actively heals the earth.
                </p>
                <div className="mt-6 flex items-center justify-center text-primary">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Carbon Negative Process</span>
                </div>
              </div>
            </div>

            <div className="group hover-lift transition-smooth animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="border-0 shadow-glass rounded-3xl p-8 md:p-12 h-full text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-accent/10 rounded-2xl p-4 group-hover:scale-110 transition-smooth">
                    <Recycle className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Biodegradable Tech Fabrics
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Advanced technology meets nature. These innovative fabrics perform like high-tech synthetics but safely biodegrade, leaving zero waste behind.
                </p>
                <div className="mt-6 flex items-center justify-center text-accent">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">100% Biodegradable</span>
                </div>
              </div>
            </div>

            <div className="group hover-lift transition-smooth animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="border-0 shadow-glass rounded-3xl p-8 md:p-12 h-full text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 rounded-2xl p-4 group-hover:scale-110 transition-smooth">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Recycled Fabrics
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Durable materials crafted from recycled fibers, giving new life to plastic waste while reducing carbon footprint by up to 70%.
                </p>
                <div className="mt-6 flex items-center justify-center text-primary">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">70% Less Carbon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Uniform Types Section */}
      <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">Complete Uniform Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From everyday essentials to specialized sportswear, we've got every uniform need covered
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group hover-lift transition-smooth animate-fade-in">
              <div className="border-0 shadow-glass rounded-3xl p-8 md:p-12 h-full">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 rounded-2xl p-4 group-hover:scale-110 transition-smooth">
                    <Shirt className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">Everyday Schoolwear</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                  Complete wardrobe solutions including shirts, trousers, skirts, dresses, shorts, and blazers.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                    <span>Stain-resistant treatments</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                    <span>Easy-care fabrics</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                    <span>Comfort-first design</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group hover-lift transition-smooth animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="border-0 shadow-glass rounded-3xl p-8 md:p-12 h-full">
                <div className="flex justify-center mb-6">
                  <div className="bg-accent/10 rounded-2xl p-4 group-hover:scale-110 transition-smooth">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">Sports & PE Kits</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                  High-performance, breathable kits made from natural fibers and sustainable tech-fabrics.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-3 text-accent flex-shrink-0" />
                    <span>Moisture-wicking technology</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-3 text-accent flex-shrink-0" />
                    <span>Anti-microbial properties</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-3 text-accent flex-shrink-0" />
                    <span>Durable construction</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group hover-lift transition-smooth animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="border-0 shadow-glass rounded-3xl p-8 md:p-12 h-full">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 rounded-2xl p-4 group-hover:scale-110 transition-smooth">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">Accessories & Essentials</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                  Complete your uniform program with sustainable hats, bags, ties, and socks.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                    <span>Matching brand aesthetics</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                    <span>Sustainable materials</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                    <span>Quality craftsmanship</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced AI Sizing Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-2xl px-6 py-3 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Powered by AI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">AI-Driven Sizing Made Easy</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              No more confusion or wasted time. Our AI-powered sizing tool ensures every parent gets the right fit, every time—reducing returns by 85%.
            </p>
            
            <div className="border-0 shadow-glass rounded-3xl p-8 md:p-12 mb-12">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Upload Photo</h4>
                  <p className="text-sm text-muted-foreground">Simple body measurements from a photo</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">AI Analysis</h4>
                  <p className="text-sm text-muted-foreground">Advanced algorithms determine perfect fit</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Perfect Fit</h4>
                  <p className="text-sm text-muted-foreground">Guaranteed size recommendations</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="rounded-2xl px-12 py-6 text-lg hover-scale transition-smooth group">
              Book Your Free Uniform Consultation
              <div className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</div>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};