import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { FreeAuditTool } from "@/components/FreeAuditTool";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Globe, Leaf, Users, Clock, Target, ArrowRight, Star, TrendingUp, Heart, Recycle, Shield } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Import images
import heroImage from "@/assets/our-mission-hero.jpg";
import problemsSolutionImage from "@/assets/uniform-problems-solution.jpg";

import studentCommitteeImage from "@/assets/student-sustainability-committee.jpg";
import globalImpactImage from "@/assets/global-impact-connection.jpg";
import smartDeliveryImage from "@/assets/smart-locker.jpg";
import kapesModelImage from "@/assets/kapes-model-middle-east.jpg";
export default function MiddleEastSchools() {
  const problemPoints = [{
    icon: <Leaf className="w-6 h-6 text-destructive" />,
    title: "Harmful Materials Damaging the Planet",
    description: "Synthetic fabrics and unsustainable production methods contributing to environmental degradation."
  }, {
    icon: <Shield className="w-6 h-6 text-destructive" />,
    title: "Invisible Supply Chains with Unfair Labor",
    description: "1 in 5 cotton garments in the world are tainted by child labour, and most schools don't know who makes their uniforms."
  }, {
    icon: <TrendingUp className="w-6 h-6 text-destructive" />,
    title: "High Costs & Low Value for Parents",
    description: "Overpriced uniforms with inconsistent quality and delivery delays leaving families frustrated."
  }, {
    icon: <Target className="w-6 h-6 text-destructive" />,
    title: "Stockouts & Supplier Headaches for Schools",
    description: "Constant inventory issues, unreliable suppliers, and administrative burden managing multiple vendors."
  }, {
    icon: <Heart className="w-6 h-6 text-destructive" />,
    title: "Buy-Back Clauses",
    description: "Schools locked into unfavorable contracts with mandatory buy-back commitments that create financial risk."
  }, {
    icon: <Clock className="w-6 h-6 text-destructive" />,
    title: "Revenue Shares",
    description: "Suppliers typically add revenue shares that conflict with sustainability goals and add this cost to the retail price."
  }];
  const solutionBenefits = [{
    group: "Parents",
    benefits: ["50% cost savings vs premium suppliers", "Next-day delivery to smart lockers", "24/7 AI-powered support in Arabic", "AI-powered size recommendations"]
  }, {
    group: "Schools",
    benefits: ["Zero inventory management required", "On-campus uniform shops available", "Real-time analytics dashboard", "Dedicated account manager"]
  }, {
    group: "Students",
    benefits: ["Comfortable, climate-appropriate fabrics", "Leadership opportunities in sustainability", "QR codes showing their impact story", "Factory and farm visit programs"]
  }, {
    group: "Communities",
    benefits: ["1:1 uniform donations to Africa", "1:1 meal donations for every uniform", "Local job creation in logistics", "Sustainability lesson plans for teachers"]
  }];
  const partnershipIncludes = ["100% Sustainable Materials (GOTS Certified Organic Cotton)", "Climate-Appropriate Fabrics for Desert Conditions", "Modest Designs Respecting Cultural Values", "Smart Delivery (Lockers, Next-Day, On-Campus Shops)", "AI-Powered Parent Support in Arabic & English", "Fully Managed Takeback & Recycling Program", "1:1 Uniform Donations + Meals in Africa", "Real-Time Impact Tracking Dashboard", "Student Leadership & Educational Programs", "Factory Visits & Supply Chain Transparency", "Halal-Certified Supply Chain", "Dedicated Regional Account Manager"];
  const processSteps = [{
    step: "01",
    title: "Consultation",
    description: "Deep dive into your school's needs, values, and sustainability goals.",
    timeline: "Week 1-2"
  }, {
    step: "02",
    title: "Signed Agreement",
    description: "Finalize partnership terms, pricing, and implementation timeline.",
    timeline: "Week 3"
  }, {
    step: "03",
    title: "Design & Sampling",
    description: "Custom uniform design, fabric selection, and sample approvals.",
    timeline: "Week 4-6"
  }, {
    step: "04",
    title: "Manufacturing",
    description: "Ethical production of your custom uniforms with quality control.",
    timeline: "Week 7-10"
  }, {
    step: "05",
    title: "Launch",
    description: "Soft launch with pilot families, feedback integration, and full rollout.",
    timeline: "Week 11-12"
  }, {
    step: "06",
    title: "Ongoing Partnership",
    description: "Continuous optimization, impact reporting, and community engagement.",
    timeline: "Ongoing"
  }];
  const impactStats = [{
    value: "50+",
    label: "Middle Eastern Schools Ready to Partner",
    highlight: true
  }, {
    value: "100K+",
    label: "Sustainable Uniforms Planned for Delivery"
  }, {
    value: "500K+",
    label: "Meals to be Funded in Africa"
  }, {
    value: "25%",
    label: "Carbon Footprint Reduction Target"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Centered badge outside responsive text container */}
            <div className="text-center mb-6">
              <Badge className="px-4 py-2 text-sm">
                🌟 Now Accepting Partnership Applications for Middle East Expansion
              </Badge>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 leading-tight">
                  The Traditional Uniform Model is <span className="text-primary">Broken.</span><br />
                  We're Here to Fix It.
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">Kapes transforms the school uniform experience for schools, parents, and students across the UAE, Saudi Arabia, Bahrain, Oman, and beyond. Sustainable materials, ethical manufacturing, and social impact donations that honour tradition while protecting our planet.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Button size="lg" className="px-10 py-4 text-lg">
                    Apply for Partnership <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>✅ Guaranteed environmental savings</div>
                  <div>✅ No buy-back clauses</div>
                </div>
              </div>
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
                  <img src={heroImage} alt="Middle Eastern students in sustainable school uniforms" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">The Problems Every School in the Middle East  Faces</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Traditional uniform suppliers are failing schools, parents, and our planet. Here's what's really happening:
              </p>
              
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {problemPoints.map((problem, index) => <Card key={index} className="border-destructive/20 bg-background">
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
                </Card>)}
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
                <img src={kapesModelImage} alt="The Kapes Model - One Solution for Everyone" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutionBenefits.map((solution, index) => <Card key={index} className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{solution.group}</h3>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>)}
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
                Join Our Mission
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
                  <h3 className="text-2xl font-semibold mb-2">Kapes vs Traditional Suppliers</h3>
                  <p className="text-muted-foreground">See the difference our partnership makes for your school</p>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-left font-semibold">Feature</TableHead>
                        <TableHead className="text-center font-semibold text-primary">Kapes</TableHead>
                        <TableHead className="text-center font-semibold text-muted-foreground">Traditional Suppliers</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-sm">Materials</TableCell>
                        <TableCell className="text-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mx-auto mb-1" />
                          GOTS Certified Organic Cotton
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          ❌ Synthetic fabrics
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">Climate Suitability</TableCell>
                        <TableCell className="text-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mx-auto mb-1" />
                          Desert-appropriate fabrics
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          ❌ One-size-fits-all materials
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">Cultural Design</TableCell>
                        <TableCell className="text-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mx-auto mb-1" />
                          Modest designs respecting values
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          ❌ Generic western designs
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">Delivery</TableCell>
                        <TableCell className="text-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mx-auto mb-1" />
                          Smart lockers + next-day
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          ❌ Delayed, unreliable shipping
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">Support</TableCell>
                        <TableCell className="text-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mx-auto mb-1" />
                          24/7 AI support in Arabic
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          ❌ Limited language support
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">Recycling</TableCell>
                        <TableCell className="text-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mx-auto mb-1" />
                          Full takeback & recycling
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          ❌ No end-of-life solution
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">Social Impact</TableCell>
                        <TableCell className="text-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mx-auto mb-1" />
                          1:1 uniforms + meals to Africa
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          ❌ No social giving program
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">Impact Tracking</TableCell>
                        <TableCell className="text-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mx-auto mb-1" />
                          Real-time dashboard
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          ❌ No impact measurement
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">Student Programs</TableCell>
                        <TableCell className="text-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mx-auto mb-1" />
                          Leadership & educational visits
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          ❌ No student engagement
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">Supply Chain</TableCell>
                        <TableCell className="text-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mx-auto mb-1" />
                          Halal-certified transparency
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          ❌ Hidden supply chains
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">Contract Terms</TableCell>
                        <TableCell className="text-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mx-auto mb-1" />
                          No buy-back clauses
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          ❌ Buy-back requirements
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">Account Management</TableCell>
                        <TableCell className="text-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mx-auto mb-1" />
                          Dedicated regional manager
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          ❌ Generic support teams
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                
                <div className="text-center space-y-4 mt-8">
                  <div className="flex justify-center">
                    <Button size="lg" className="px-10 py-4 text-lg">
                      Apply for Partnership
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    🌱 Environmental Savings from day 1  🚀 Launch in 8 weeks  📈 Guaranteed impact results
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
                Our proven 6-step process gets your school from decision to full impact in just 16-20 weeks.
              </p>
            </div>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4 pt-6">
                {processSteps.map((step, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <Card className="relative border-border/50 h-full min-h-[280px]">
                      <CardContent className="p-6 text-center h-full flex flex-col">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                            {step.step}
                          </div>
                        </div>
                        <div className="mt-6 space-y-4 flex-1">
                          <Badge variant="outline">{step.timeline}</Badge>
                          <h3 className="text-lg font-semibold">{step.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="relative left-0 translate-x-0 translate-y-0 hover:bg-primary hover:text-primary-foreground" />
                <CarouselNext className="relative right-0 translate-x-0 translate-y-0 hover:bg-primary hover:text-primary-foreground" />
              </div>
            </Carousel>
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
                <img src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747119030/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg" alt="Sustainable fabrics and materials for Middle East school uniforms" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
              
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Global Impact</h3>
                  <p className="text-sm text-muted-foreground">Every uniform purchased funds education and meals for children in Africa through our 1:1 donation program.</p>
                </CardContent>
              </Card>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* School Testimonials */}
      <Testimonials />



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
                  <div className="font-semibold">Launch in 16-20 Weeks</div>
                  <div className="text-sm text-muted-foreground">From partnership to full program</div>
                </div>
                <div>
                  <Target className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Guaranteed Impact</div>
                  <div className="text-sm text-muted-foreground">Measurable results or cancel anytime</div>
                </div>
                <div>
                  <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Free Meals & Free Uniforms</div>
                  <div className="text-sm text-muted-foreground">Every uniform breaks down barriers to education double impact</div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button size="lg" className="px-12 py-4 text-lg">
                  Apply for a Consultation Today <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">⚡ Limited partnerships available for 2026/27 launch 🔒 No buy-back clauses  ✅ Cancel anytime</p>
            </div>
            
            <p className="text-muted-foreground">
              Ready to lead the sustainable uniform revolution in the Middle East?<br />
              <strong>Your students are counting on you.</strong>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}