
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, MapPin, Package, Leaf, Recycle, ShieldCheck, Sparkles, CheckCircle, Clock } from "lucide-react";
import { Footer } from "@/components/Footer";

export const DeliveryPackaging = () => {
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
            <Badge className="mb-4 bg-white/20 text-white border-white/30">End-to-End Logistics</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              Delivery & 
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {" "}Packaging
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              Sustainable, Reliable, and Hassle-Free. At Kapes, how our uniforms reach your families matters just as much as how they're made.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Next-Day Delivery Section */}
          <section className="bg-gradient-warm-section py-16">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight mb-4">Next-Day Home Delivery</h2>
              <p className="text-muted-foreground text-lg">Lightning-fast delivery that puts parent convenience first</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="border-0 shadow-glass">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                    <Clock className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-medium mb-6">Reliable & Fast</h3>
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
                </CardContent>
              </Card>

              <Card className="border-0 shadow-glass">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                      <Truck className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Delivery Promise</span>
                    </div>
                    <div className="text-4xl font-medium text-primary mb-2">99.7%</div>
                    <div className="text-sm text-muted-foreground">On-time delivery rate</div>
                  </div>
                  <div className="space-y-4">
                    <Card className="border border-green-200 dark:border-green-800">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Carbon Neutral Delivery</span>
                          <Leaf className="w-4 h-4 text-green-600" />
                        </div>
                        <div className="text-xs text-green-600">All deliveries offset through verified carbon credits</div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Flexible Pickup Options Section */}
          <section>
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight mb-4">Flexible Pickup Options</h2>
              <p className="text-muted-foreground text-lg">Choose what works best for your family's schedule and lifestyle</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-glass hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Direct Home Delivery</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Fast next-day delivery straight to your door
                  </p>
                  <div className="text-sm text-muted-foreground">
                    Perfect for: Busy families, urgent orders
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-glass hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 h-full">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Package className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Campus E-Lockers</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    24/7 secure pickup from on-campus lockers
                  </p>
                  <div className="text-sm text-muted-foreground">
                    Perfect for: Flexible timing, avoiding missed deliveries
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-glass hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 h-full">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-medium mb-4">School Shop Pickup</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Collect from fully managed on-campus stores
                  </p>
                  <div className="text-sm text-muted-foreground">
                    Perfect for: Personal service, try-before-buy
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Sustainable Packaging Section */}
          <section className="bg-gradient-light-warm-section py-16">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight mb-4">Sustainable Packaging Options</h2>
              <p className="text-muted-foreground text-lg">Every tier includes sustainable packaging that reflects your school's commitment to the environment</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-glass hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gray-500/10 rounded-xl flex items-center justify-center">
                      <Package className="h-6 w-6 text-gray-500" />
                    </div>
                    
                  </div>
                  <h3 className="text-2xl font-medium mb-4">Standard Packaging</h3>
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
                </CardContent>
              </Card>

              <Card className="border-0 shadow-glass hover:shadow-xl transition-all duration-300 ring-2 ring-blue-200 dark:ring-blue-800">
                <CardContent className="p-8 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <Recycle className="h-6 w-6 text-blue-500" />
                    </div>
                    
                  </div>
                  <h3 className="text-2xl font-medium mb-4">Recycled Plastic Packaging</h3>
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
                </CardContent>
              </Card>

              <Card className="border-0 shadow-glass hover:shadow-xl transition-all duration-300 ring-2 ring-green-200 dark:ring-green-800">
                <CardContent className="p-8 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="relative">
                      
                      <Sparkles className="w-4 h-4 text-yellow-500 absolute -top-2 -right-2" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium mb-4">Plastic-Free Glassine</h3>
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
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <Card className="border-0 shadow-glass max-w-3xl mx-auto">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <span className="font-medium">Packaging Promise</span>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our packaging reflects your school's sustainability level and helps reinforce your commitment to the environment with every delivery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Returns & Exchanges Section */}
          <section>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-6">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Hassle-Free Guarantee</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight mb-8">Returns & Exchanges—Handled for You</h2>
              
              <Card className="border-0 shadow-glass max-w-4xl mx-auto">
                <CardContent className="p-12">
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    We manage all returns and exchanges directly with parents, ensuring hassle-free solutions for your school community.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div className="space-y-4">
                      <h4 className="font-medium text-lg">What We Handle:</h4>
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
                      <h4 className="font-medium text-lg">Your School Benefits:</h4>
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
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
              <Truck className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Seamless Logistics</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Experience the Future of Uniform Delivery
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how our sustainable delivery and packaging solutions can enhance your uniform program
            </p>
            <Button size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-all duration-300">
              Learn More About Our Delivery & Packaging
            </Button>
          </section>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};
