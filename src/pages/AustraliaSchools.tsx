import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { FreeAuditTool } from "@/components/FreeAuditTool";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Globe, Leaf, Users, Clock, Target, ArrowRight, Star, TrendingUp, Heart, Recycle, Shield, Sun } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Import images
import heroImage from "@/assets/our-mission-hero.jpg";
import problemsSolutionImage from "@/assets/uniform-problems-solution.jpg";
import studentCommitteeImage from "@/assets/student-sustainability-committee.jpg";
import globalImpactImage from "@/assets/global-impact-connection.jpg";
import smartDeliveryImage from "@/assets/smart-locker.jpg";
import kapesModelImage from "@/assets/kapes-model-australia.jpg";

export default function AustraliaSchools() {
  const problemPoints = [{
    icon: <Leaf className="w-6 h-6 text-destructive" />,
    title: "Synthetic Fabrics Harming Ocean Life",
    description: "Microplastics from synthetic uniforms polluting Australia's precious marine ecosystems and coral reefs."
  }, {
    icon: <Shield className="w-6 h-6 text-destructive" />,
    title: "Hidden Supply Chains with Poor Labor Standards",
    description: "Most Australian school uniforms are made overseas with minimal transparency about working conditions."
  }, {
    icon: <Sun className="w-6 h-6 text-destructive" />,
    title: "Inadequate Sun Protection",
    description: "Many uniforms lack proper SPF protection despite Australia's extreme UV conditions and skin cancer risks."
  }, {
    icon: <Target className="w-6 h-6 text-destructive" />,
    title: "Limited Local Manufacturing",
    description: "Over-reliance on imports undermining Australian jobs and increasing carbon footprint from shipping."
  }, {
    icon: <Heart className="w-6 h-6 text-destructive" />,
    title: "High Costs for Families",
    description: "Premium uniform suppliers charging excessive prices while families struggle with cost of living pressures."
  }, {
    icon: <Clock className="w-6 h-6 text-destructive" />,
    title: "No End-of-Life Solutions",
    description: "Uniforms ending up in landfill with no recycling programs or sustainable disposal options."
  }];

  const solutionBenefits = [{
    group: "Parents",
    benefits: ["40% cost savings vs premium suppliers", "SPF 50+ sun protection built-in", "Free exchanges for growing kids", "Carbon-neutral delivery options"]
  }, {
    group: "Schools",
    benefits: ["Local Australian manufacturing", "Zero inventory management required", "Compliance with state education guidelines", "Dedicated Australian account manager"]
  }, {
    group: "Students",
    benefits: ["Climate-appropriate breathable fabrics", "Indigenous design collaboration opportunities", "UV protection for outdoor activities", "Ocean plastic recycling programs"]
  }, {
    group: "Communities",
    benefits: ["1:1 uniform donations to Indigenous communities", "1:1 meal donations for every uniform", "Local job creation in manufacturing", "Marine conservation education programs"]
  }];

  const partnershipIncludes = [
    "100% Sustainable Materials (Organic Cotton + Recycled Ocean Plastic)",
    "SPF 50+ UV Protection Fabrics",
    "Climate-Optimized Breathable Designs",
    "Australian-Made Manufacturing",
    "Carbon-Neutral Delivery Network",
    "Fully Managed Takeback & Recycling Program",
    "1:1 Donations to Indigenous Communities + Meals",
    "Real-Time Impact Tracking Dashboard",
    "Indigenous Design Collaboration Programs",
    "Ocean Conservation Educational Visits",
    "ACARA Sustainability Curriculum Support",
    "Dedicated Australian Regional Manager"
  ];

  const processSteps = [{
    step: "01",
    title: "Complete Assessment",
    description: "Take our free 3-minute sustainability assessment to qualify for consultation.",
    timeline: "3 minutes"
  }, {
    step: "02",
    title: "Consultation",
    description: "Deep dive into your school's needs, climate requirements, and sustainability goals.",
    timeline: "Week 1"
  }, {
    step: "03",
    title: "Proposal",
    description: "Based on consultation, if we see the school as a good fit, we will present a proposal.",
    timeline: "Week 2-3"
  }, {
    step: "04",
    title: "Design",
    description: "Custom uniform design with UV protection, Indigenous collaboration options, and design approvals.",
    timeline: "Week 4-8"
  }, {
    step: "05",
    title: "Signed Agreement",
    description: "Finalize uniform supply agreement prior to manufacturing.",
    timeline: "Week 9-10"
  }, {
    step: "06",
    title: "Material Production",
    description: "Sourcing and production of sustainable materials with SPF protection.",
    timeline: "Week 11-17"
  }, {
    step: "07",
    title: "Sampling",
    description: "Physical sample creation with UV testing and approvals.",
    timeline: "Week 18-20"
  }, {
    step: "08",
    title: "Australian Manufacturing",
    description: "Local production with Australian suppliers, quality control, and SPF testing.",
    timeline: "Week 21-25"
  }, {
    step: "09",
    title: "Shipping",
    description: "Quality control, packaging, and carbon-neutral delivery across Australia.",
    timeline: "Week 26-30"
  }, {
    step: "10",
    title: "Launch",
    description: "Full rollout of your sustainable uniform program to all families.",
    timeline: "Week 31"
  }, {
    step: "11",
    title: "Ongoing Partnership",
    description: "Continuous optimization, impact reporting, and ocean conservation engagement.",
    timeline: "Ongoing"
  }];

  const impactStats = [{
    value: "200+",
    label: "Australian Schools Ready to Partner",
    highlight: true
  }, {
    value: "500K+",
    label: "Sustainable Uniforms Planned for Delivery"
  }, {
    value: "1M+",
    label: "Meals to be Funded for Indigenous Communities"
  }, {
    value: "30%",
    label: "Ocean Plastic Recovery Target"
  }];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero-to-warm -mt-[1px]">
        {/* Hero background image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{
          backgroundImage: 'url(/lovable-uploads/a2f28efa-df53-424f-95ae-677cf0fa1e80.png)'
        }}>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Subtle partnership header */}
            <div className="text-white/80 text-sm font-medium tracking-wide uppercase mb-4">
              🌟 Now Accepting Partnership Applications for Australia Expansion
            </div>
            
            {/* Main headline with mobile-optimized typography */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-academy-hero font-extrabold tracking-tight text-white drop-shadow-lg px-4 leading-tight">
              The Uniform Model in Australia is <span className="text-coral-400">Broken.</span><br />
              We're Here to Fix It.
            </h1>
            
            {/* Subtitle with mobile-optimized spacing and readability */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg px-4">
              Kapes transforms the school uniform experience across Australia. SPF 50+ protection, ocean plastic recycling, and local manufacturing that protects students, communities, and our precious marine environment.
            </p>
            
            {/* CTA button - mobile optimized with better touch targets */}
            <div className="pt-6 flex justify-center items-center px-4 max-w-sm mx-auto">
              <button onClick={() => document.getElementById('audit-section')?.scrollIntoView({
                behavior: 'smooth'
              })} className="group w-full inline-flex items-center justify-between px-4 py-4 min-h-[48px] text-white rounded-xl font-medium text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/20 hover:border-white/40 touch-manipulation" style={{ backgroundColor: '#f97769' }}>
                <div className="flex flex-col items-start">
                  <span className="text-lg font-bold">Apply for Partnership</span>
                  <span className="text-xs opacity-95 font-medium">Start Your Application</span>
                </div>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">The Problems Every School in Australia Faces</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Traditional uniform suppliers are failing Australian schools, families, and our environment. Here's what's really happening:
              </p>
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
                Instead of band-aid solutions, we've built a complete system that works for everyone in your Australian school community.
              </p>
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg mx-auto mb-12 max-w-xl">
                <img src={kapesModelImage} alt="The Kapes Model - One Solution for Everyone in Australia" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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
                Join Our Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                One Impact Partnership
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                No confusing tiers or hidden costs. Every Australian school gets our complete sustainable uniform solution.
              </p>
            </div>
            
            <Card className="border-primary/30 bg-background/80 backdrop-blur">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-2">Kapes vs Traditional Australian Suppliers</h3>
                  <p className="text-muted-foreground">See the difference our partnership makes for your Australian school</p>
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
                          Organic Cotton + Ocean Plastic
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          ❌ Synthetic fabrics
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">Sun Protection</TableCell>
                        <TableCell className="text-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mx-auto mb-1" />
                          SPF 50+ built-in protection
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          ❌ Limited UV protection
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">Manufacturing</TableCell>
                        <TableCell className="text-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mx-auto mb-1" />
                          Local Australian production
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          ❌ Overseas manufacturing
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">Ocean Impact</TableCell>
                        <TableCell className="text-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mx-auto mb-1" />
                          Ocean plastic recycling program
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          ❌ No ocean conservation
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
                          1:1 donations to Indigenous communities
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          ❌ No social giving program
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">Cultural Collaboration</TableCell>
                        <TableCell className="text-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mx-auto mb-1" />
                          Indigenous design partnerships
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          ❌ No cultural engagement
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">Climate Optimization</TableCell>
                        <TableCell className="text-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mx-auto mb-1" />
                          Australian climate-appropriate
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground">
                          ❌ Generic designs
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
                 Our proven 8-step process gets your Australian school from decision to full impact in just 16-20 weeks.
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
                Real Sustainability, Real Impact for Australia
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Every uniform creates a ripple of positive change across Australia's communities and marine environment.
              </p>
              <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-lg mx-auto mb-12 max-w-2xl">
                <img src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747119030/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg" alt="Sustainable materials and ocean protection for Australian school uniforms" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <Sun className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Climate Protection</h3>
                  <p className="text-sm text-muted-foreground">SPF 50+ fabrics and moisture-wicking materials designed specifically for Australia's harsh climate conditions.</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <Recycle className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Ocean Plastic Recovery</h3>
                  <p className="text-sm text-muted-foreground">Recycled ocean plastic uniforms helping protect Australia's Great Barrier Reef and marine ecosystems.</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Local Manufacturing</h3>
                  <p className="text-sm text-muted-foreground">Supporting Australian jobs with local production facilities and transparent, ethical supply chains.</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Indigenous Partnership</h3>
                  <p className="text-sm text-muted-foreground">Every uniform supports Indigenous communities through our 1:1 donation program and design collaborations.</p>
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
              Transform Your Australian School's Impact Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the sustainable uniform revolution in Australia. Every day you wait is another day of missed impact for your students, community, and environment.
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
                  <div className="font-semibold">Community Support</div>
                  <div className="text-sm text-muted-foreground">Every uniform supports Indigenous communities</div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button size="lg" className="px-12 py-4 text-lg">
                  Apply for a Consultation Today <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">⚡ Limited partnerships available for 2026/27 launch</p>
            </div>
            
            <p className="text-muted-foreground">
              Ready to lead the sustainable uniform revolution in Australia?<br />
              <strong>Your students and environment are counting on you.</strong>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}