
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Leaf, Heart, Users, Cog } from "lucide-react";
import { Footer } from "@/components/Footer";

const ImpactPartnershipPage = () => {
  const allFeatures = [
    {
      category: "Environmental Excellence",
      icon: Leaf,
      color: "text-green-600",
      bgColor: "bg-green-50",
      features: [
        "100% Sustainable Materials Only - No compromises, ever",
        "Regenerative & Recycled Fibers - Materials that heal the planet",
        "Zero-Waste Circular System - Nothing goes to landfill",
        "Plastic-Free Packaging - Beautiful, biodegradable unboxing",
        "Fully Managed Takeback Scheme - We handle the full lifecycle",
        "Carbon Footprint Tracking - Measure and reduce your impact"
      ]
    },
    {
      category: "Social Impact",
      icon: Heart,
      color: "text-red-600", 
      bgColor: "bg-red-50",
      features: [
        "Free School Meals Funded - Every uniform sale feeds children in need",
        "Free Uniforms Donated Globally - Local production, global impact",
        "Ethical Manufacturing Guarantee - Safe, fair-wage, child-labor-free",
        "Factory Transparency - Visit our facilities, meet our makers",
        "Community Development - Supporting local economies worldwide"
      ]
    },
    {
      category: "Educational Innovation",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50", 
      features: [
        "Student Leadership Council - Real voice in real decisions",
        "QR Codes on Every Garment - Scan to see impact and story",
        "Factory Visits & Teaching Materials - Bring learning to life",
        "Sustainability Curriculum Support - Age-appropriate resources",
        "Impact Dashboard - Real-time tracking for students and staff"
      ]
    },
    {
      category: "Operational Excellence",
      icon: Cog,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      features: [
        "Fully Managed Online Shop - We build, maintain, and support",
        "AI-Powered Sizing Technology - Perfect fit, fewer returns",
        "Multiple Delivery Options - Home, school, or smart lockers",
        "Dedicated Account Manager - Your personal impact strategist",
        "Custom PR & CSR Toolkit - Showcase your leadership"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752871031/2_19_s_eyievk.jpg')",
            backgroundPosition: "center"
          }}
        ></div>
        
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
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
              Why Choose Impact Over Tiers?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              We believe every school deserves access to the full power of ethical, sustainable uniforms. 
              That's why we've eliminated tiers and created one comprehensive partnership that gives every school everything they need to lead positive change.
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
              {allFeatures.map((category, index) => (
                <Card key={index} className="border-0 shadow-glass overflow-hidden">
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
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
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

          {/* Detailed Comparison */}
          <section className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight mb-4">
                Why Schools Are Switching to Kapes
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Most uniform suppliers focus on revenue. We focus on impact. Here's how Kapes compares to traditional models—point for point.
              </p>
            </div>
            
            <Card className="border-0 shadow-glass overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/30">
                        <th className="text-left font-semibold py-4 px-6 min-w-[200px]">Feature</th>
                        <th className="text-left font-semibold py-4 px-6 min-w-[300px]">Kapes</th>
                        <th className="text-left font-semibold py-4 px-6 min-w-[300px]">Traditional Supplier</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium">🌿 Sustainable Materials</td>
                        <td className="py-4 px-6 text-sm">Organic, low-impact fabrics that reduce pollution</td>
                        <td className="py-4 px-6 text-sm text-muted-foreground">Often synthetic, petroleum-based fabrics</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium">🧵 Ethical Manufacturing</td>
                        <td className="py-4 px-6 text-sm">Certified ethical factories with fair wages</td>
                        <td className="py-4 px-6 text-sm text-muted-foreground">Commonly lowest-cost factories with no transparency</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium">🌱 Carbon Neutral</td>
                        <td className="py-4 px-6 text-sm">Full lifecycle impact calculated and offset</td>
                        <td className="py-4 px-6 text-sm text-muted-foreground">No tracking, no offsets</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium">♻️ Takeback Scheme</td>
                        <td className="py-4 px-6 text-sm">Free, fully managed program to return & recycle uniforms</td>
                        <td className="py-4 px-6 text-sm text-muted-foreground">Not offered</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium">🍽️ Free School Meals</td>
                        <td className="py-4 px-6 text-sm">1 meal donated for every item returned</td>
                        <td className="py-4 px-6 text-sm text-muted-foreground">No contribution</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium">👕 Free Uniforms to Children in Need</td>
                        <td className="py-4 px-6 text-sm">Included in every partnership, co-branded with the school</td>
                        <td className="py-4 px-6 text-sm text-muted-foreground">Not offered</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium">📊 Impact Dashboard</td>
                        <td className="py-4 px-6 text-sm">Real-time data showing carbon saved, meals donated, uniforms provided</td>
                        <td className="py-4 px-6 text-sm text-muted-foreground">No data or tracking available</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium">🛍️ On-Campus Shops & Lockers</td>
                        <td className="py-4 px-6 text-sm">Managed by Kapes, branded for your school</td>
                        <td className="py-4 px-6 text-sm text-muted-foreground">Requires school staff or third parties</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium">🧠 Educational Programs</td>
                        <td className="py-4 px-6 text-sm">Factory visits, workshops, student board</td>
                        <td className="py-4 px-6 text-sm text-muted-foreground">Not part of the offer</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium">🔧 Setup & Admin</td>
                        <td className="py-4 px-6 text-sm">Zero stock risk, minimal staff time required</td>
                        <td className="py-4 px-6 text-sm text-muted-foreground">School handles ordering, storage, complaints</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium">💰 Revenue Share</td>
                        <td className="py-4 px-6 text-sm">No — value is returned through impact</td>
                        <td className="py-4 px-6 text-sm text-muted-foreground">Usually 10–15% cut to the school</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-medium">📢 PR & Marketing Support</td>
                        <td className="py-4 px-6 text-sm">Custom content, case studies, press features</td>
                        <td className="py-4 px-6 text-sm text-muted-foreground">None</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <Button size="lg" className="rounded-xl font-medium px-8 py-4 text-lg hover:scale-105 transition-smooth">
                Ready to Switch? Partner With Kapes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
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
          <section className="text-center py-16 rounded-3xl" style={{ backgroundColor: '#cfeaff' }}>
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
    </div>
  );
};

export default ImpactPartnershipPage;
