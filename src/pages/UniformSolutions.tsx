import { Button } from "@/components/ui/button";
import { Leaf, Recycle, ShieldCheck, Shirt, Zap, Users, Sparkles, CheckCircle } from "lucide-react";

export const UniformSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Sustainable Fashion Revolution</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Uniform Solutions
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-white/30 flex-1 max-w-20"></div>
              <p className="text-2xl md:text-3xl font-semibold text-white/90">
                Sustainable. Ethical. Durable.
              </p>
              <div className="h-px bg-white/30 flex-1 max-w-20"></div>
            </div>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed text-white/90">
              At Kapes, we create school uniforms that reflect your school's values and commitment to sustainability—without sacrificing quality or comfort.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-auto">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="hsl(var(--background))"></path>
          </svg>
        </div>
      </section>

      {/* Enhanced Materials Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Materials that Matter</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every fiber tells a story of sustainability, innovation, and care for our planet
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group hover-scale animate-fade-in">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 h-full border border-green-100 dark:border-green-900/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">
                  Regenerative Organic Cotton
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Naturally soft, breathable, and grown sustainably to improve soil and biodiversity. Our cotton doesn't just avoid harm—it actively heals the earth.
                </p>
                <div className="mt-6 flex items-center text-green-600 dark:text-green-400">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Carbon Negative Process</span>
                </div>
              </div>
            </div>

            <div className="group hover-scale animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl p-8 h-full border border-blue-100 dark:border-blue-900/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Recycle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">
                  Biodegradable Tech Fabrics
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced technology meets nature. These innovative fabrics perform like high-tech synthetics but safely biodegrade, leaving zero waste behind.
                </p>
                <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">100% Biodegradable</span>
                </div>
              </div>
            </div>

            <div className="group hover-scale animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8 h-full border border-purple-100 dark:border-purple-900/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">
                  Recycled Fabrics
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Durable materials crafted from recycled fibers, giving new life to plastic waste while reducing carbon footprint by up to 70%.
                </p>
                <div className="mt-6 flex items-center text-purple-600 dark:text-purple-400">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">70% Less Carbon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Uniform Types Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.05),transparent_70%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Complete Uniform Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From everyday essentials to specialized sportswear, we've got every uniform need covered
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group hover-scale animate-fade-in">
              <div className="bg-background/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/20">
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shirt className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Everyday Schoolwear</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Complete wardrobe solutions including shirts, trousers, skirts, dresses, shorts, and blazers.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    <span>Stain-resistant treatments</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    <span>Easy-care fabrics</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    <span>Comfort-first design</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group hover-scale animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-background/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/20">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Sports & PE Kits</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  High-performance, breathable kits made from natural fibers and sustainable tech-fabrics.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-orange-500" />
                    <span>Moisture-wicking technology</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-orange-500" />
                    <span>Anti-microbial properties</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-orange-500" />
                    <span>Durable construction</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group hover-scale animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-background/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/20">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Accessories & Essentials</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Complete your uniform program with sustainable hats, bags, ties, and socks.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span>Matching brand aesthetics</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span>Sustainable materials</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Powered by AI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">AI-Driven Sizing Made Easy</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              No more confusion or wasted time. Our AI-powered sizing tool ensures every parent gets the right fit, every time—reducing returns by 85%.
            </p>
            
            <div className="bg-gradient-to-br from-background to-secondary/20 rounded-3xl p-8 border border-border/50 shadow-2xl mb-12">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Upload Photo</h4>
                  <p className="text-sm text-muted-foreground">Simple body measurements from a photo</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">AI Analysis</h4>
                  <p className="text-sm text-muted-foreground">Advanced algorithms determine perfect fit</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Perfect Fit</h4>
                  <p className="text-sm text-muted-foreground">Guaranteed size recommendations</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              Book Your Free Uniform Consultation
              <div className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</div>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};