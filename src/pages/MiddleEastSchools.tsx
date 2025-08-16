import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { FreeAuditTool } from "@/components/FreeAuditTool";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Globe, Leaf, Users, Clock, Target, ArrowRight, Star, TrendingUp, Heart, Recycle, Shield } from "lucide-react";

// Import images
import heroImage from "@/assets/our-mission-hero.jpg";
import problemsSolutionImage from "@/assets/uniform-problems-solution.jpg";
import sustainableFabricsImage from "@/assets/sustainable-materials.jpg";
import studentCommitteeImage from "@/assets/student-sustainability-committee.jpg";
import globalImpactImage from "@/assets/global-impact-connection.jpg";
import smartDeliveryImage from "@/assets/smart-locker.jpg";

export default function MiddleEastSchools() {
  const problemPoints = [
    {
      icon: <TrendingUp className="w-6 h-6 text-destructive" />,
      title: "High Costs & Poor Service for Parents",
      description: "Overpriced uniforms with inconsistent quality and delivery delays leaving families frustrated."
    },
    {
      icon: <Target className="w-6 h-6 text-destructive" />,
      title: "Stockouts & Supplier Headaches for Schools",
      description: "Constant inventory issues, unreliable suppliers, and administrative burden managing multiple vendors."
    },
    {
      icon: <Leaf className="w-6 h-6 text-destructive" />,
      title: "Harmful Materials Damaging the Planet",
      description: "Synthetic fabrics and unsustainable production methods contributing to environmental degradation."
    },
    {
      icon: <Shield className="w-6 h-6 text-destructive" />,
      title: "Invisible Supply Chains with Unfair Labor",
      description: "No transparency into manufacturing conditions or worker treatment in the supply chain."
    }
  ];

  const solutionBenefits = [
    {
      group: "Parents",
      benefits: [
        "50% cost savings vs premium suppliers",
        "Next-day delivery to smart lockers",
        "24/7 AI-powered support in Arabic",
        "Size exchanges handled automatically"
      ]
    },
    {
      group: "Schools",
      benefits: [
        "Zero inventory management required",
        "On-campus uniform shops available",
        "Real-time analytics dashboard",
        "Dedicated account manager"
      ]
    },
    {
      group: "Students",
      benefits: [
        "Comfortable, climate-appropriate fabrics",
        "Leadership opportunities in sustainability",
        "QR codes showing their impact story",
        "Factory and farm visit programs"
      ]
    },
    {
      group: "Communities",
      benefits: [
        "1:1 uniform donations to Africa",
        "1:1 meal donations for every uniform",
        "Local job creation in logistics",
        "Educational sustainability programs"
      ]
    }
  ];

  const partnershipIncludes = [
    "100% Sustainable Materials (GOTS Certified Organic Cotton)",
    "Climate-Appropriate Fabrics for Desert Conditions",
    "Modest Designs Respecting Cultural Values",
    "Smart Delivery (Lockers, Next-Day, On-Campus Shops)",
    "AI-Powered Parent Support in Arabic & English",
    "Fully Managed Takeback & Recycling Program",
    "1:1 Uniform Donations + Meals in Africa",
    "Real-Time Impact Tracking Dashboard",
    "Student Leadership & Educational Programs",
    "Factory Visits & Supply Chain Transparency",
    "Halal-Certified Supply Chain",
    "Dedicated Regional Account Manager"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Deep dive into your school's needs, values, and sustainability goals.",
      timeline: "Week 1-2"
    },
    {
      step: "02", 
      title: "Setup",
      description: "Custom uniform design, supply chain setup, and parent communication systems.",
      timeline: "Week 3-6"
    },
    {
      step: "03",
      title: "Launch",
      description: "Soft launch with pilot families, feedback integration, and full rollout.",
      timeline: "Week 7-8"
    },
    {
      step: "04",
      title: "Ongoing Partnership",
      description: "Continuous optimization, impact reporting, and community engagement.",
      timeline: "Ongoing"
    }
  ];

  const impactStats = [
    { value: "50+", label: "Middle Eastern Schools Ready to Partner", highlight: true },
    { value: "100K+", label: "Sustainable Uniforms Planned for Delivery" },
    { value: "500K+", label: "Meals to be Funded in Africa" },
    { value: "25%", label: "Carbon Footprint Reduction Target" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <Badge className="mb-6 px-4 py-2 text-sm">
                  🌟 Now Accepting Partnership Applications for Middle East Expansion
                </Badge>
                <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 leading-tight">
                  The Traditional Uniform Model is <span className="text-primary">Broken.</span><br/>
                  We're Here to Fix It.
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Kapes transforms the school uniform experience for schools, parents, and students across the UAE, Saudi Arabia, Qatar, and beyond. 
                  Sustainable materials, ethical manufacturing, and 1:1 impact donations that honor tradition while protecting our planet.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Button size="lg" className="px-10 py-4 text-lg">
                    Apply for Partnership <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                  ✅ No setup fees  ✅ Risk-free trial  ✅ Cancel anytime
                </div>
              </div>
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={heroImage} 
                    alt="Middle Eastern students in sustainable school uniforms" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                The Problems Every School Faces
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Traditional uniform suppliers are failing schools, parents, and our planet. Here's what's really happening:
              </p>
              <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-lg mx-auto mb-8 max-w-2xl">
                <img 
                  src={problemsSolutionImage} 
                  alt="Traditional uniform problems vs Kapes solutions comparison" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {problemPoints.map((problem, index) => (
                <Card key={index} className="border-destructive/20 bg-background">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-lg bg-destructive/10">
                        {problem.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-destructive">{problem.title}</h3>
                        <p className="text-muted-foreground">{problem.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                The Kapes Model: One Solution for Everyone
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Instead of band-aid solutions, we've built a complete system that works for everyone in your school community.
              </p>
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg mx-auto mb-12 max-w-xl">
                <img 
                  src={smartDeliveryImage} 
                  alt="Smart delivery system for school uniforms in Middle East" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutionBenefits.map((solution, index) => (
                <Card key={index} className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{solution.group}</h3>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* One Impact Partnership */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 px-4 py-2 bg-primary text-primary-foreground">
                Our Only Tier
              </Badge>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                One Impact Partnership
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                No confusing tiers or hidden costs. Every school gets our complete sustainable uniform solution.
              </p>
            </div>
            
            <Card className="border-primary/30 bg-background/80 backdrop-blur">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-2">Complete Partnership Includes:</h3>
                  <p className="text-muted-foreground">Everything your school needs for a successful sustainable uniform program</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {partnershipIncludes.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <Button size="lg" className="px-10 py-4 text-lg">
                      Start Your Partnership
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    💰 Cost savings from day one  🚀 Launch in 8 weeks  📈 Guaranteed impact results
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                How It Works: From Partnership to Impact
              </h2>
              <p className="text-xl text-muted-foreground">
                Our proven 4-step process gets your school from decision to full impact in just 8 weeks.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="relative border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="mt-4">
                      <Badge variant="outline" className="mb-3">{step.timeline}</Badge>
                      <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12">
              Implementation Timeline
            </h2>
            
            <div className="space-y-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-light text-primary mb-2">Week 1-2</div>
                  <div className="text-sm text-muted-foreground">Consultation and onboarding</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-primary mb-2">Week 3-6</div>
                  <div className="text-sm text-muted-foreground">Shop setup & communications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-primary mb-2">Week 7-8</div>
                  <div className="text-sm text-muted-foreground">Launch & rollout</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-primary mb-2">Ongoing</div>
                  <div className="text-sm text-muted-foreground">Support & impact tracking</div>
                </div>
              </div>
              
              <Card className="p-6 bg-primary/5 border-primary/20">
                <p className="text-lg text-center">
                  <strong>Ready to launch in just 8 weeks</strong> with ongoing support and optimization to maximize your impact.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Social Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                Real Sustainability, Real Impact
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Every uniform creates a ripple of positive change across three continents.
              </p>
              <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-lg mx-auto mb-12 max-w-2xl">
                <img 
                  src={sustainableFabricsImage} 
                  alt="Sustainable fabrics and materials for Middle East school uniforms" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <Leaf className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Sustainable Materials</h3>
                  <p className="text-sm text-muted-foreground">GOTS certified organic cotton, recycled polyester, and climate-appropriate fabrics designed for desert conditions.</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Ethical Production</h3>
                  <p className="text-sm text-muted-foreground">Full supply chain transparency with halal-certified factories and fair labor practices throughout.</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <Recycle className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Circular Economy</h3>
                  <p className="text-sm text-muted-foreground">Complete takeback program turns old uniforms into new ones, creating a truly circular system.</p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-gradient-to-r from-primary/10 to-background border-primary/20 mb-12">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <Heart className="w-8 h-8 text-primary mx-auto lg:mx-0 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Global Impact: Every Uniform = 1 Uniform + 1 Meal Donated</h3>
                    <p className="text-muted-foreground">
                      For every uniform sold, we donate one uniform and fund one meal for children in Africa. 
                      Your school's uniform program directly supports education and nutrition for those who need it most.
                    </p>
                  </div>
                  <div>
                    <div className="aspect-[16/10] rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={globalImpactImage} 
                        alt="Global impact connection between Middle East and African students" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study / Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                Schools Trust Kapes
              </h2>
              <p className="text-xl text-muted-foreground">
                Leading educational institutions choose our sustainable approach.
              </p>
            </div>
            
            <Card className="border-primary/20 bg-background">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg italic text-muted-foreground mb-4">
                    "Kapes has transformed our approach to school uniforms. The sustainability impact aligns perfectly with our values, 
                    and parents love the convenience and quality. Our students are proud to wear uniforms that make a difference."
                  </blockquote>
                  <div className="font-semibold">Sarah Al-Rashid</div>
                  <div className="text-sm text-muted-foreground">Head of Sustainability, Arbor School Dubai</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-light text-primary mb-1">40%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-primary mb-1">95%</div>
                    <div className="text-sm text-muted-foreground">Parent Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-primary mb-1">2,500+</div>
                    <div className="text-sm text-muted-foreground">Meals Funded</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Involvement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                  Students Lead the Change
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Our program empowers students to become sustainability leaders in their school and community.
                </p>
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={studentCommitteeImage} 
                    alt="Middle Eastern students in sustainability committee meeting" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="grid gap-6">
                <Card className="border-border/50">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">Sustainability Committees</h3>
                    <p className="text-sm text-muted-foreground">Students join committees to guide sustainability initiatives and track school-wide impact.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">Impact Reviews</h3>
                    <p className="text-sm text-muted-foreground">Regular sessions where students analyze their school's environmental and social impact data.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50">
                  <CardContent className="p-6 text-center">
                    <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">Factory & Farm Visits</h3>
                    <p className="text-sm text-muted-foreground">Educational trips to see sustainable manufacturing and organic cotton farming in action.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Impact Stats */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12">
              Ready to Make an Impact Across the Gulf
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className={`${stat.highlight ? 'bg-primary text-primary-foreground rounded-lg p-6' : ''}`}>
                  <div className={`text-3xl md:text-4xl font-light mb-2 ${stat.highlight ? '' : 'text-primary'}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${stat.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scorecard Section */}
      <div id="audit-section" className="scroll-mt-20">
        <FreeAuditTool />
      </div>

      {/* Final Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Transform Your School's Impact Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the sustainable uniform revolution. Every day you wait is another day of missed impact for your students, community, and planet.
            </p>
            
            <div className="bg-background/80 backdrop-blur rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
                <div>
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Launch in 8 Weeks</div>
                  <div className="text-sm text-muted-foreground">From partnership to full program</div>
                </div>
                <div>
                  <Target className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Guaranteed Impact</div>
                  <div className="text-sm text-muted-foreground">Measurable results or money back</div>
                </div>
                <div>
                  <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">1:1 Donation Match</div>
                  <div className="text-sm text-muted-foreground">Every uniform creates double impact</div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button size="lg" className="px-12 py-4 text-lg">
                  Apply for Partnership Today <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                ⚡ Limited partnerships available for 2024 launch  🔒 No long-term contracts  ✅ Cancel anytime
              </p>
            </div>
            
            <p className="text-muted-foreground">
              Ready to lead the sustainable uniform revolution in the Middle East?<br/>
              <strong>Your students are counting on you.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4">
                Start Your Partnership
              </h2>
              <p className="text-muted-foreground">
                Get in touch today to discuss your school's sustainability transformation.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}