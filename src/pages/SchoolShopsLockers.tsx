import { Button } from "@/components/ui/button";
import { Store, Package, Clock, Users, Sparkles, CheckCircle, Shield, Zap } from "lucide-react";

export const SchoolShopsLockers = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Store className="w-4 h-4" />
              <span className="text-sm font-medium">On-Campus Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              School Shops & Lockers
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-white/30 flex-1 max-w-20"></div>
              <p className="text-2xl md:text-3xl font-semibold text-white/90">
                Convenience Meets Sustainability—Right on Campus
              </p>
              <div className="h-px bg-white/30 flex-1 max-w-20"></div>
            </div>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed text-white/90">
              Make uniform shopping effortless for parents by offering professionally designed and fully managed uniform stores or convenient e-commerce lockers directly at your school.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-auto">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="hsl(var(--background))"></path>
          </svg>
        </div>
      </section>

      {/* Enhanced On-Campus School Shops Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">On-Campus School Shops</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Beautiful, fully-managed retail spaces that bring the uniform experience directly to your school
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-in">
                <div className="bg-gradient-to-br from-background to-secondary/20 rounded-3xl p-8 border border-border/50 shadow-2xl">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Store className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">Premium Retail Experience</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Beautifully designed spaces</h4>
                        <p className="text-sm text-muted-foreground">Tailored specifically for your school's aesthetic and brand</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Try-before-you-buy</h4>
                        <p className="text-sm text-muted-foreground">Fitting rooms and size consultations on-site</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Expert staff support</h4>
                        <p className="text-sm text-muted-foreground">Knowledgeable team to assist with all uniform needs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-900/20 shadow-lg">
                  <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-blue-800 dark:text-blue-300">Fully Managed Operations</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Zap className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Stocking & inventory management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Professional staffing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Visual merchandising</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Sales reporting & analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced E-Commerce Lockers Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(0,0,0,0.05),transparent_70%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">E-Commerce Lockers</h2>
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-6">
                <Package className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Smart Pickup Solution</span>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Secure, convenient, and available 24/7—the future of uniform collection
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group hover-scale animate-fade-in">
                <div className="bg-background/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/20">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Secure & Strategic</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Secure, self-service lockers placed strategically on campus for maximum convenience and accessibility.
                  </p>
                </div>
              </div>

              <div className="group hover-scale animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="bg-background/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/20">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">24/7 Convenience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Parents order online and collect at their convenience—no more delivery uncertainty or missed parcels.
                  </p>
                </div>
              </div>

              <div className="group hover-scale animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-background/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/20">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Zero Admin Burden</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fully managed logistics by Kapes; zero extra work for your school—we handle everything.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Benefits to Schools</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform your uniform program into a seamless, sustainable service that enhances your school's reputation
              </p>
            </div>
            
            <div className="grid gap-8">
              <div className="flex items-start gap-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 animate-fade-in">
                <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-green-800 dark:text-green-300">Enhanced Parent & Student Experience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Convenient shopping options that fit busy family schedules, reducing stress and improving satisfaction with your school's services.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-blue-800 dark:text-blue-300">Zero Administrative Burden</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Completely managed by us—from inventory to customer service, we handle every aspect so your staff can focus on education.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-purple-800 dark:text-purple-300">Visible Sustainability Leadership</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A visible sign of your school's commitment to seamless service and sustainability—reinforcing your values daily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_40%_60%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Store className="w-4 h-4" />
              <span className="text-sm font-medium">Get Started Today</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Uniform Program?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's discuss which solution works best for your school—shops, lockers, or both.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              Request a Free Shop or Locker Consultation
              <div className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</div>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};