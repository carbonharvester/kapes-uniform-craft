import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Recycle, Shield, Users, BarChart3, QrCode, Package, Truck, CheckCircle, Heart, Globe } from "lucide-react";
import { Footer } from "@/components/Footer";
const SustainabilityEthics = () => {
  const sustainableMaterials = [{
    title: "Organic Cotton",
    description: "Improves soil health, biodiversity, and farmer livelihoods",
    icon: Leaf,
    image: "/src/assets/organic-cotton.jpg"
  }, {
    title: "Recycled Materials",
    description: "Reduces reliance on virgin resources and cuts plastic waste",
    icon: Recycle,
    image: "/src/assets/sustainable-materials.jpg"
  }, {
    title: "Lyocell",
    description: "Made from sustainably sourced eucalyptus wood pulp, offering excellent breathability and moisture management",
    icon: Globe,
    image: "/src/assets/zero-waste.jpg"
  }, {
    title: "No Chemical Treatments",
    description: "We never use toxic chemicals that promise wrinkle-free or stain-repellent benefits - just safe, natural fabrics",
    icon: Shield,
    image: "/src/assets/ethical-manufacturing.jpg"
  }];
  const ethicalStandards = [{
    title: "No Child Labour",
    description: "Ever",
    icon: Shield
  }, {
    title: "Fair Wages & Safe Working Conditions",
    description: "Protecting worker rights and wellbeing",
    icon: Heart
  }, {
    title: "Independent Audits & Full Transparency",
    description: "Open books, verified practices",
    icon: CheckCircle
  }, {
    title: "Respect for Workers & Their Communities",
    description: "Supporting local communities and economies",
    icon: Users
  }];
  const sustainabilityFeatures = [{
    title: "KapesImpact™ Dashboard",
    description: "Every Core and Impact school receives access to track their sustainability metrics",
    icon: BarChart3
  }, {
    title: "Real-Time Impact Tracking",
    description: "Track your school's carbon savings, recycled garments, and meals donated",
    icon: BarChart3
  }, {
    title: "QR Code Transparency",
    description: "Impact tier uniforms come with QR codes showing real-time garment impact",
    icon: QrCode
  }];
  const logisticsFeatures = [{
    title: "Glassine Paper Packaging",
    description: "Impact tier gets fully plastic-free experience",
    icon: Package
  }, {
    title: "Recycled Polybags",
    description: "Core tier protection with purpose",
    icon: Recycle
  }, {
    title: "Smart Delivery Options",
    description: "Next-day delivery for convenience with reduced waste",
    icon: Truck
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
        backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752871031/2_19_s_eyievk.jpg')",
        backgroundPosition: "20% center"
      }}></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Sustainability & Ethics</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              Built to Do What's{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Right
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              At Kapes, sustainability and ethics aren't an afterthought. They are the foundation of everything we do — from the fabric we choose to the factories we partner with.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      </section>

      {/* Sustainable Materials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 flex items-center justify-center gap-3">
              🌱 Sustainable Materials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use the safest, most sustainable materials available for children and the planet
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {sustainableMaterials.map((material, index) => {
            const IconComponent = material.icon;
            return <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={material.image} 
                      alt={material.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg dark:bg-green-900/20">
                        <IconComponent className="w-6 h-6 text-green-600" />
                      </div>
                      <CardTitle className="text-lg">{material.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{material.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
          
          <div className="text-center">
            <p className="text-lg font-medium text-foreground">
              Our uniforms aren't just sustainable — they're comfortable, durable, and parent-approved.
            </p>
          </div>
        </div>
      </section>

      {/* Ethical Manufacturing Section */}
      <section className="bg-gradient-warm-section py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 flex items-center justify-center gap-3">
              🧵 Ethical Manufacturing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We manufacture responsibly in fully vetted, ethical factories. Our partners share our commitment to:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {ethicalStandards.map((standard, index) => {
            const IconComponent = standard.icon;
            return <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg dark:bg-blue-900/20">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{standard.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{standard.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
          
          <div className="text-center">
            <p className="text-lg font-medium text-foreground">
              We don't cut corners, and we don't work with anyone who does.
            </p>
          </div>
        </div>
      </section>

      {/* Measurable Sustainability Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 flex items-center justify-center gap-3">
              🌍 Sustainability That's Measurable
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kapes goes beyond claims — we give schools data-backed sustainability
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {sustainabilityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center dark:bg-purple-900/20">
                      <IconComponent className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
          
          <div className="text-center">
            <p className="text-lg font-medium text-foreground">
              Transparency is how we build trust — and move the industry forward.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainable Logistics Section */}
      <section className="bg-gradient-light-warm-section py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 flex items-center justify-center gap-3">
              📦 Sustainable Logistics, Too
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Even our delivery and packaging is considered
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {logisticsFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center dark:bg-orange-900/20">
                      <IconComponent className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030063]">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6 text-white">
              Kapes makes it easy for schools to align their uniforms with their values — without compromise.
            </h2>
            <p style={{
            color: '#030063'
          }} className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white">
              Because doing the right thing should be the simplest option.
            </p>
            <Link to="/partnership-tiers">
              <Button size="lg" variant="secondary" className="rounded-2xl px-8 py-6 text-lg hover-scale transition-smooth text-white" style={{
              backgroundColor: '#f97769'
            }}>
                Learn About Our Partnership Tiers
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default SustainabilityEthics;