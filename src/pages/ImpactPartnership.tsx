
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Leaf, Heart, Users, Cog, Check, X } from "lucide-react";
import { Footer } from "@/components/Footer";

const ImpactPartnershipPage = () => {
  const allFeatures = [{
    category: "Environmental Excellence",
    icon: Leaf,
    color: "text-green-600",
    bgColor: "bg-green-50",
    features: ["100% Sustainable Materials Only - No compromises, ever", "Regenerative & Recycled Fibers - Materials that heal the planet", "Zero-Waste Circular System - Nothing goes to landfill", "Plastic-Free Packaging - Beautiful, biodegradable unboxing", "Fully Managed Takeback Scheme - We handle the full lifecycle", "Carbon Footprint Tracking - Measure and reduce your impact"]
  }, {
    category: "Social Impact",
    icon: Heart,
    color: "text-red-600",
    bgColor: "bg-red-50",
    features: ["Free School Meals Funded - Every uniform sale feeds children in need", "Free Uniforms Donated Globally - Local production, global impact", "Ethical Manufacturing Guarantee - Safe, fair-wage, child-labor-free", "Factory Transparency - Visit our facilities, meet our makers", "Community Development - Supporting local economies worldwide"]
  }, {
    category: "Educational Innovation",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    features: ["Student Leadership Council - Real voice in real decisions", "QR Codes on Every Garment - Scan to see impact and story", "Factory Visits & Teaching Materials - Bring learning to life", "Sustainability Curriculum Support - Age-appropriate resources", "Impact Dashboard - Real-time tracking for students and staff"]
  }, {
    category: "Operational Excellence",
    icon: Cog,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    features: ["Fully Managed Online Shop - We build, maintain, and support", "AI-Powered Sizing Technology - Perfect fit, fewer returns", "Multiple Delivery Options - Home, school, or smart lockers", "Dedicated Account Manager - Your personal impact strategist", "Custom PR & CSR Toolkit - Showcase your leadership"]
  }];

  const comparisonData = [
    {
      icon: "🌱",
      feature: "Carbon Neutral Uniforms",
      description: "Offsetting all emissions from production to delivery",
      kapes: "Yes - Certified Carbon Neutral",
      traditional: "No - Standard manufacturing"
    },
    {
      icon: "🧵",
      feature: "Materials",
      description: "Quality and sustainability of fabric materials",
      kapes: "100% Sustainable - Organic & recycled materials only",
      traditional: "Standard materials - Limited sustainability"
    },
    {
      icon: "🤖",
      feature: "AI Technology",
      description: "AI-powered sizing and fit technology",
      kapes: "AI-Powered Sizing - Fewer returns",
      traditional: "Manual sizing - Higher return rates"
    },
    {
      icon: "🍽️",
      feature: "Free Meals for Children",
      description: "Every uniform purchase funds meals for children in need",
      kapes: "Yes - 1 uniform = 1 meal",
      traditional: "No impact programs"
    },
    {
      icon: "👕",
      feature: "Free Uniforms to Kids in Need",
      description: "Donated uniforms to children across Africa",
      kapes: "Yes - Global donation program",
      traditional: "No donation programs"
    },
    {
      icon: "♻️",
      feature: "Takeback & Recycling Scheme",
      description: "End-of-life uniform collection and recycling",
      kapes: "Fully Managed - We collect & recycle",
      traditional: "Not offered"
    },
    {
      icon: "📋",
      feature: "Buy-back Clauses",
      description: "Contractual terms for switching suppliers",
      kapes: "No restrictive clauses - Switch anytime",
      traditional: "Restrictive buy-back clauses"
    },
    {
      icon: "⚖️",
      feature: "Ethical Supply Chain",
      description: "Fair wages, safe working conditions, and ethical practices",
      kapes: "100% Ethical - Audited & certified supply chain",
      traditional: "Limited oversight - Unverified practices"
    },
    {
      icon: "🚚",
      feature: "Delivery Options",
      description: "Flexible delivery and collection options",
      kapes: "Home, school & smart lockers available",
      traditional: "Physical store only - No school collection"
    },
    {
      icon: "🌍",
      feature: "Supply Chain Transparency",
      description: "Full visibility into manufacturing processes",
      kapes: "100% Transparent - Factory visits welcome",
      traditional: "Limited or no transparency"
    },
    {
      icon: "📊",
      feature: "Impact Tracking & Reporting",
      description: "Real-time sustainability metrics",
      kapes: "KapesImpact™ Dashboard included",
      traditional: "No impact reporting"
    },
    {
      icon: "💰",
      feature: "Hidden Costs & Commission",
      description: "Additional costs passed to parents",
      kapes: "No hidden costs - Transparent pricing",
      traditional: "Commission fees increase parent costs"
    }
  ];
  
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
        backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752871031/2_19_s_eyievk.jpg')",
        backgroundPosition: "center"
      }}></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-3xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">THE Impact Partnership</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              One Partnership.{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Maximum Impact.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Join THE impact-first uniform provider. Every school gets every feature—because making a difference shouldn't depend on your budget.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Introduction */}
          <section className="text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">Why Choose Impact Over Cash?</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              We believe every school deserves access to the full power of ethical, sustainable uniforms. 
              That's why we've eliminated revenue shares that only increase costs for parents and created one comprehensive partnership that gives every school everything they need to lead positive change.
            </p>
          </section>

          {/* All Features Included */}
          <section className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight mb-4">
                Everything Included. Always.
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                No hidden features. No premium upgrades. No compromises.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              {allFeatures.map((category, index) => <Card key={index} className="border-0 shadow-glass overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.bgColor}`}>
                        <category.icon className={`h-6 w-6 ${category.color}`} />
                      </div>
                      <CardTitle className={`text-xl font-semibold ${category.color}`}>
                        {category.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>)}
            </div>
          </section>

          {/* Detailed Comparison Table */}
          <section className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight mb-6">
                Why Schools Are Switching to Kapes
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                We focus on impact, not revenue. See how we compare to traditional uniform suppliers who prioritize profit over purpose.
              </p>
            </div>
            
            <Card className="border-0 shadow-lg overflow-hidden bg-white">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50/80 border-b">
                        <th className="text-left font-semibold py-6 px-8 text-gray-700">Feature</th>
                        <th className="text-center font-semibold py-6 px-8 text-gray-700">Kapes</th>
                        <th className="text-center font-semibold py-6 px-8 text-gray-700">Traditional Suppliers</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr 
                          key={index} 
                          className="border-b border-gray-100 hover:bg-gray-50/30 transition-all duration-300 animate-fade-in hover:scale-[1.01] hover:shadow-sm"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <td className="py-6 px-8">
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center gap-3">
                                <span className="text-2xl">{row.icon}</span>
                                <span className="font-medium text-gray-900">{row.feature}</span>
                              </div>
                              <p className="text-sm text-gray-600 ml-11">{row.description}</p>
                            </div>
                          </td>
                          <td className="py-6 px-8 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <Check className="h-5 w-5 text-green-500 transition-colors duration-200" />
                              <span className="font-medium text-green-600 transition-colors duration-200">{row.kapes}</span>
                            </div>
                          </td>
                          <td className="py-6 px-8 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <X className="h-5 w-5 text-red-500 transition-colors duration-200" />
                              <span className="font-medium text-red-600 transition-colors duration-200">{row.traditional}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-10 text-center">
              <Button 
                size="lg" 
                className="rounded-xl font-medium px-8 py-4 text-lg hover:scale-105 transition-smooth shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Ready to Switch? Partner With Kapes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>

          {/* Impact Numbers */}
          <section className="bg-gradient-warm-section py-16 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight mb-4">
                Real Impact, Real Numbers
              </h2>
              <p className="text-muted-foreground text-lg">
                Together, we're transforming education and communities worldwide
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-4 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-light text-primary mb-2">12,000+</div>
                <div className="text-muted-foreground">School meals funded</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-primary mb-2">85%</div>
                <div className="text-muted-foreground">Reduction in uniform waste</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Free uniforms donated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Sustainable materials</div>
              </div>
            </div>
          </section>

          {/* Perfect For */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight mb-4">
                Perfect For Every School
              </h2>
              <p className="text-muted-foreground text-lg">
                Whether you're just starting your sustainability journey or already leading the way
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Sustainability Starters</h3>
                  <p className="text-sm text-muted-foreground">Beginning your environmental journey</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Impact Champions</h3>
                  <p className="text-sm text-muted-foreground">Ready to make a global difference</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Educational Innovators</h3>
                  <p className="text-sm text-muted-foreground">Integrating values into curriculum</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Community Leaders</h3>
                  <p className="text-sm text-muted-foreground">Inspiring others to follow</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-16 rounded-3xl" style={{
          backgroundColor: '#cfeaff'
        }}>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight mb-6">
              Ready to Lead the Impact Revolution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the schools that are transforming education through ethical, sustainable uniforms that make a real difference in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-xl font-medium px-8 py-4 text-lg hover:scale-105 transition-smooth">
                Book Your Impact Partnership Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl font-medium px-8 py-4 text-lg hover:scale-105 transition-smooth">
                Take the Impact Readiness Assessment
              </Button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>;
};
export default ImpactPartnershipPage;
