
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Store, Package, Clock, Users, Sparkles, CheckCircle, Shield, Zap } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Feature } from "@/components/ui/feature-with-image-comparison";
import { ImageContentSection } from "@/components/ImageContentSection";
import eCommerceHeroImage from "@/assets/e-commerce-lockers-hero.jpg";

export const SchoolShopsLockers = () => {
  // E-commerce lockers features data
  const eCommerceFeatures = [
    {
      title: "Secure & Strategic",
      description: "Secure, self-service lockers placed strategically on campus for maximum convenience and accessibility.",
      icon: Shield
    },
    {
      title: "24/7 Convenience", 
      description: "Parents order online and collect at their convenience—no more delivery uncertainty or missed parcels.",
      icon: Clock
    },
    {
      title: "Zero Admin Burden",
      description: "Fully managed logistics by Kapes; zero extra work for your school—we handle everything.",
      icon: Zap
    }
  ];
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
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-8">
              <Store className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wide uppercase">On-Campus Solutions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight leading-tight mb-6" style={{ color: '#030063' }}>
              On-Campus School Shops
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Beautiful, fully-managed retail spaces that bring the uniform experience directly to your school
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-7xl mx-auto">
            {/* Premium Retail Experience Card */}
            <Card className="group relative overflow-hidden border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative p-10 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Store className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-3xl font-bold mb-8" style={{ color: '#030063' }}>Premium Retail Experience</h3>
                <div className="space-y-6 flex-grow">
                  <div className="flex items-start gap-5">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2" style={{ color: '#030063' }}>Beautifully designed spaces</h4>
                      <p className="text-muted-foreground leading-relaxed">Tailored specifically for your school's aesthetic and brand</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2" style={{ color: '#030063' }}>Try-before-you-buy</h4>
                      <p className="text-muted-foreground leading-relaxed">Fitting rooms and size consultations on-site</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2" style={{ color: '#030063' }}>Expert staff support</h4>
                      <p className="text-muted-foreground leading-relaxed">Knowledgeable team to assist with all uniform needs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fully Managed Operations Card */}
            <Card className="group relative overflow-hidden border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative p-10 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-3xl font-bold mb-8" style={{ color: '#030063' }}>Fully Managed Operations</h3>
                <div className="space-y-6 flex-grow">
                  <div className="flex items-start gap-5">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2" style={{ color: '#030063' }}>Stocking & inventory management</h4>
                      <p className="text-muted-foreground leading-relaxed">Professional stocking and inventory management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2" style={{ color: '#030063' }}>Professional staffing</h4>
                      <p className="text-muted-foreground leading-relaxed">Expert staff dedicated to uniform services</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2" style={{ color: '#030063' }}>Visual merchandising</h4>
                      <p className="text-muted-foreground leading-relaxed">Professional display and store presentation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2" style={{ color: '#030063' }}>Sales reporting & analytics</h4>
                      <p className="text-muted-foreground leading-relaxed">Detailed insights and performance tracking</p>
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

      {/* E-Commerce Lockers Section */}
      <ImageContentSection
        title="E-Commerce Lockers"
        description="Secure, convenient, and available 24/7—the future of uniform collection"
        imageSrc={eCommerceHeroImage}
        imageAlt="E-commerce lockers installation showing modern secure pickup solution"
        items={eCommerceFeatures}
        bottomText="Smart pickup solution that transforms uniform collection for busy families"
        imagePosition="right"
        iconColorScheme="blue"
        className="bg-gradient-warm-section"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* Benefits Section */}
          <section className="bg-gradient-light-warm-section py-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Benefits to Schools</h2>
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
            <div className="inline-flex items-center gap-2 bg-white/80 rounded-full px-6 py-2 mb-6">
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
