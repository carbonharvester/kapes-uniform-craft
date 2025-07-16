import { Button } from "@/components/ui/button";
import { Truck, MapPin, Package, Leaf, Recycle, ShieldCheck, Sparkles, CheckCircle, Clock } from "lucide-react";

export const DeliveryPackaging = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_40%_20%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Truck className="w-4 h-4" />
              <span className="text-sm font-medium">End-to-End Logistics</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Delivery & Packaging
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-white/30 flex-1 max-w-20"></div>
              <p className="text-2xl md:text-3xl font-semibold text-white/90">
                Sustainable, Reliable, and Hassle-Free
              </p>
              <div className="h-px bg-white/30 flex-1 max-w-20"></div>
            </div>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed text-white/90">
              At Kapes, how our uniforms reach your families matters just as much as how they're made.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-auto">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="hsl(var(--background))"></path>
          </svg>
        </div>
      </section>

      {/* Enhanced Next-Day Delivery Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Next-Day Home Delivery</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Lightning-fast delivery that puts parent convenience first
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-900/20 shadow-lg">
                  <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-blue-800 dark:text-blue-300">Reliable & Fast</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Fast, reliable, next-day delivery to parents' homes ensures uniforms arrive exactly when needed, minimizing stress and maximizing convenience.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Order by 2pm for next-day delivery</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Real-time tracking included</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Safe place delivery options</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="bg-gradient-to-br from-background to-secondary/20 rounded-3xl p-8 border border-border/50 shadow-2xl">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                      <Truck className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Delivery Promise</span>
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">99.7%</div>
                    <div className="text-sm text-muted-foreground">On-time delivery rate</div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-green-100 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Carbon Neutral Delivery</span>
                        <Leaf className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="text-xs text-green-600">All deliveries offset through verified carbon credits</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Flexible Pickup Options Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.05),transparent_70%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Flexible Pickup Options</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose what works best for your family's schedule and lifestyle
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group hover-scale animate-fade-in">
                <div className="bg-background/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/20">
                  <div className="bg-gradient-to-br from-primary to-primary/80 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Direct Home Delivery</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Fast next-day delivery straight to your door
                  </p>
                  <div className="text-sm text-muted-foreground">
                    Perfect for: Busy families, urgent orders
                  </div>
                </div>
              </div>

              <div className="group hover-scale animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="bg-background/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/20">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Package className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Campus E-Lockers</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    24/7 secure pickup from on-campus lockers
                  </p>
                  <div className="text-sm text-muted-foreground">
                    Perfect for: Flexible timing, avoiding missed deliveries
                  </div>
                </div>
              </div>

              <div className="group hover-scale animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-background/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/20">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">School Shop Pickup</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Collect from fully managed on-campus stores
                  </p>
                  <div className="text-sm text-muted-foreground">
                    Perfect for: Personal service, try-before-buy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Sustainable Packaging Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Sustainable Packaging Options</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every tier includes sustainable packaging that reflects your school's commitment to the environment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group hover-scale animate-fade-in">
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 rounded-2xl p-8 h-full border border-gray-100 dark:border-gray-900/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gray-500 rounded-full w-16 h-16 flex items-center justify-center">
                    <Package className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1">
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Base Tier</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-300">
                  Standard Packaging
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Simple protective polybags for basic protection during delivery.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-gray-600" />
                    <span className="text-sm">Basic protection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-gray-600" />
                    <span className="text-sm">Cost-effective solution</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group hover-scale animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl p-8 h-full border border-blue-100 dark:border-blue-900/20 shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-blue-200 dark:ring-blue-800">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center">
                    <Recycle className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-800 rounded-full px-3 py-1">
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-300">Core Tier</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">
                  Recycled Plastic Packaging
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  100% recycled, reusable polybags—protect uniforms while significantly reducing environmental impact.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">100% recycled materials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">Reusable design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">70% less carbon footprint</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group hover-scale animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 h-full border border-green-100 dark:border-green-900/20 shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-green-200 dark:ring-green-800">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-green-100 dark:bg-green-800 rounded-full px-3 py-1 relative">
                    <span className="text-xs font-medium text-green-600 dark:text-green-300">Impact Tier</span>
                    <div className="absolute -top-2 -right-2">
                      <Sparkles className="w-4 h-4 text-yellow-500" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">
                  Plastic-Free Glassine
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Completely biodegradable, fully compostable glassine paper—beautifully sustainable and zero plastic waste.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">100% biodegradable</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Home compostable</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Zero plastic waste</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Premium aesthetics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-16 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-background to-secondary/20 rounded-3xl p-8 border border-border/50 shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="font-semibold">Packaging Promise</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our packaging reflects your school's sustainability level and helps reinforce your commitment to the environment with every delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Returns & Exchanges Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.05),transparent_70%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-6">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Hassle-Free Guarantee</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Returns & Exchanges—Handled for You</h2>
            
            <div className="bg-background/80 backdrop-blur-sm border-2 border-border/50 rounded-3xl p-12 shadow-2xl">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We manage all returns and exchanges directly with parents, ensuring hassle-free solutions for your school community.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">What We Handle:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Size exchanges within 30 days</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Quality issue replacements</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Direct parent communication</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Return shipping arrangements</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Your School Benefits:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Zero admin time required</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Enhanced parent satisfaction</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Professional service reputation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Complete peace of mind</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Truck className="w-4 h-4" />
              <span className="text-sm font-medium">Seamless Logistics</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Future of Uniform Delivery</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Discover how our sustainable delivery and packaging solutions can enhance your uniform program
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              Learn More About Our Delivery & Packaging
              <div className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</div>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};