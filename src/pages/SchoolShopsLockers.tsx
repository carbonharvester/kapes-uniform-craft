
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Store, Package, Clock, Users, Sparkles, CheckCircle, Shield, Zap } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Feature } from "@/components/ui/feature-with-image-comparison";

export const SchoolShopsLockers = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Our Mission Template */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752871031/2_19_s_eyievk.jpg')",
            backgroundPosition: "20% center"
          }}
        ></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">On-Campus Solutions</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              School Shops & 
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {" "}Lockers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              Convenience Meets Sustainability—Right on Campus. Make uniform shopping effortless for parents by offering professionally managed stores or convenient e-commerce lockers directly at your school.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Full-width background sections */}
      
      {/* On-Campus School Shops Section */}
      <section className="bg-gradient-warm-section py-16 w-full">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight mb-4">On-Campus School Shops</h2>
            <p className="text-muted-foreground text-lg">Beautiful, fully-managed retail spaces that bring the uniform experience directly to your school</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
            <Card className="border-0 shadow-glass h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Store className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-medium mb-6">Premium Retail Experience</h3>
                <div className="space-y-4 flex-grow">
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
              </CardContent>
            </Card>

            <Card className="border-0 shadow-glass h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-medium mb-6">Fully Managed Operations</h3>
                <div className="space-y-4 flex-grow">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Stocking & inventory management</h4>
                      <p className="text-sm text-muted-foreground">Professional stocking and inventory management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Professional staffing</h4>
                      <p className="text-sm text-muted-foreground">Expert staff dedicated to uniform services</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Visual merchandising</h4>
                      <p className="text-sm text-muted-foreground">Professional display and store presentation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Sales reporting & analytics</h4>
                      <p className="text-sm text-muted-foreground">Detailed insights and performance tracking</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Comparison Section with minimal padding */}
      <div className="py-2">
        <Feature />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* E-Commerce Lockers Section */}
          <section className="pt-8 pb-20 lg:pt-12 lg:pb-32">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6" style={{ color: '#030063' }}>
                  E-Commerce Lockers
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Secure, convenient, and available 24/7—the future of uniform collection. Smart pickup solution for busy families.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Content Section */}
                <div className="space-y-8">
                  <div className="grid gap-8">
                    <div className="flex gap-4 items-start group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                          <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold" style={{ color: '#030063' }}>
                          Secure & Strategic
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Secure, self-service lockers placed strategically on campus for maximum convenience and accessibility.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                          <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold" style={{ color: '#030063' }}>
                          24/7 Convenience
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Parents order online and collect at their convenience—no more delivery uncertainty or missed parcels.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                          <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold" style={{ color: '#030063' }}>
                          Zero Admin Burden
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Fully managed logistics by Kapes Uniforms; zero extra work for your school—we handle everything.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      A modern, flexible solution designed for today's busy families—one more way Kapes Uniforms makes uniforms effortless for everyone involved.
                    </p>
                  </div>
                </div>
                
                {/* Image Section */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/src/assets/smart-locker.jpg" 
                      alt="E-commerce lockers - smart pickup solution" 
                      className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="bg-gradient-light-warm-section py-16">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight mb-4">Benefits to Schools</h2>
              <p className="text-muted-foreground text-lg">Transform your uniform program into a seamless, sustainable service that enhances your school's reputation</p>
            </div>
            
            <div className="grid gap-8 max-w-4xl mx-auto">
              <Card className="border-0 shadow-glass">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Enhanced Parent & Student Experience</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Convenient shopping options that fit busy family schedules, reducing stress and improving satisfaction with your school's services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-glass">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Zero Administrative Burden</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Completely managed by us—from inventory to customer service, we handle every aspect so your staff can focus on education.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-glass">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sparkles className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Visible Sustainability Leadership</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        A visible sign of your school's commitment to seamless service and sustainability—reinforcing your values daily.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16" style={{ backgroundColor: '#cfeaff' }}>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-2 mb-6">
              <Store className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get Started Today</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ready to Transform Your Uniform Program?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss which solution works best for your school—shops, lockers, or both.
            </p>
            <Button size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-all duration-300">
              Request a Free Shop or Locker Consultation
            </Button>
          </section>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};
