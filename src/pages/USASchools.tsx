import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { FreeAuditTool } from "@/components/FreeAuditTool";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MobileOptimizedTable } from "@/components/MobileOptimizedTable";
import { CheckCircle, Globe, Leaf, Users, Clock, Target, ArrowRight, Star, TrendingUp, Heart, Recycle, Shield, Flag, GraduationCap, DollarSign } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Import images
import heroImage from "@/assets/our-mission-hero.jpg";
import problemsSolutionImage from "@/assets/uniform-problems-solution.jpg";
import studentCommitteeImage from "@/assets/student-sustainability-committee.jpg";
import globalImpactImage from "@/assets/global-impact-connection.jpg";
import smartDeliveryImage from "@/assets/smart-locker.jpg";
import kapesModelImage from "@/assets/kapes-model-usa-new.png";
import usaHeroImage from "@/assets/usa-hero.png";

export default function USASchools() {
  const comparisonData = [
    {
      feature: "Materials",
      kapes: "GOTS certified organic cotton",
      kapesPositive: true,
      traditional: "Synthetic fabrics & chemicals",
      traditionalPositive: false
    },
    {
      feature: "Manufacturing",
      kapes: "Ethical & sustainable production",
      kapesPositive: true,
      traditional: "Minimal transparency",
      traditionalPositive: false
    },
    {
      feature: "Circularity",
      kapes: "Zero-waste manufacturing",
      kapesPositive: true,
      traditional: "Linear production model",
      traditionalPositive: false
    },
    {
      feature: "Supply Chain",
      kapes: "Full transparency & fair labor",
      kapesPositive: true,
      traditional: "Hidden supply chains",
      traditionalPositive: false
    },
    {
      feature: "Carbon Offsetting",
      kapes: "100% carbon neutral operations",
      kapesPositive: true,
      traditional: "No carbon offset programs",
      traditionalPositive: false
    },
    {
      feature: "Educational Programs",
      kapes: "STEM partnerships & resources",
      kapesPositive: true,
      traditional: "No educational offerings",
      traditionalPositive: false
    },
    {
      feature: "Social Impact",
      kapes: "1:1 meals + education funding",
      kapesPositive: true,
      traditional: "No social giving program",
      traditionalPositive: false
    },
    {
      feature: "Impact Tracking",
      kapes: "Real-time dashboard",
      kapesPositive: true,
      traditional: "No impact measurement",
      traditionalPositive: false
    },
    {
      feature: "Factory & Farm Visits",
      kapes: "Open door policy & guided tours",
      kapesPositive: true,
      traditional: "Closed facilities & no access",
      traditionalPositive: false
    }
  ];

  const problemPoints = [{
    icon: <Leaf className="w-6 h-6 text-destructive" />,
    title: "Fast Fashion Harming Student Health",
    description: "Synthetic uniforms with harmful chemicals affecting student comfort and contributing to environmental pollution."
  }, {
    icon: <Shield className="w-6 h-6 text-destructive" />,
    title: "Hidden Supply Chains with Poor Labor Standards",
    description: "Most American school uniforms made overseas with minimal transparency about working conditions and fair wages."
  }, {
    icon: <DollarSign className="w-6 h-6 text-destructive" />,
    title: "Rising Costs Hurting American Families",
    description: "Uniform expenses creating financial burden for families, especially in Title I schools and low-income communities."
  }, {
    icon: <Target className="w-6 h-6 text-destructive" />,
    title: "Limited Climate Adaptability",
    description: "One-size-fits-all uniforms not suitable for America's diverse climate conditions from Alaska to Florida."
  }, {
    icon: <Heart className="w-6 h-6 text-destructive" />,
    title: "Lack of Educational Equity Support",
    description: "Current suppliers offering minimal support for Title I schools or disadvantaged student programs."
  }, {
    icon: <Clock className="w-6 h-6 text-destructive" />,
    title: "No Sustainability Education Integration",
    description: "Missed opportunities to connect uniforms with STEM education and environmental learning programs."
  }];

  const solutionBenefits = [{
    group: "Parents",
    benefits: ["40% cost savings vs premium suppliers", "Premium quality guarantee", "Payment plans for larger families", "All-climate fabric options"]
  }, {
    group: "Schools",
    benefits: ["Zero inventory management required", "Title I school discount programs", "STEM education partnerships", "Dedicated American account manager"]
  }, {
    group: "Students",
    benefits: ["All-climate comfortable fabrics", "Leadership opportunities in sustainability", "STEM learning through supply chain", "Peer mentorship programs"]
  }, {
    group: "Communities",
    benefits: ["Educational programs and partnerships", "1:1 meal donations for every uniform", "Sustainable economic development", "Zero-waste educational programs"]
  }];

  const partnershipIncludes = [
    "100% Sustainable Materials (GOTS Certified Organic Cotton)",
    "All-Climate Fabric Options for Diverse US Regions",
    "Sustainable & ethical manufacturing",
    "Zero-Waste Production Processes",
    "Carbon-Neutral US Delivery Network",
    "Fully Managed Takeback & Recycling Program",
    "Title I School Discount Programs",
    "Real-Time Impact Tracking Dashboard",
    "STEM Education & Factory Visit Programs",
    "Supply Chain Transparency & Fair Labor",
    "Federal Education Compliance Support",
    "Dedicated US Regional Account Manager"
  ];

  const processSteps = [{
    step: "01",
    title: "Complete Assessment",
    description: "Take our free 3-minute sustainability assessment to qualify for consultation.",
    timeline: "3 minutes"
  }, {
    step: "02",
    title: "Consultation",
    description: "Deep dive into your school's needs, climate requirements, and educational goals.",
    timeline: "Week 1"
  }, {
    step: "03",
    title: "Proposal",
    description: "Based on consultation, if we see the school as a good fit, we will present a proposal.",
    timeline: "Week 2-3"
  }, {
    step: "04",
    title: "Design",
    description: "Custom uniform design, climate optimization, and design approvals.",
    timeline: "Week 4-8"
  }, {
    step: "05",
    title: "Signed Agreement",
    description: "Finalize uniform supply agreement prior to manufacturing.",
    timeline: "Week 9-10"
  }, {
    step: "06",
    title: "Material Production",
    description: "Sourcing and production of climate-appropriate sustainable materials.",
    timeline: "Week 11-17"
  }, {
    step: "07",
    title: "Sampling",
    description: "Physical sample creation with climate testing and approvals.",
    timeline: "Week 18-20"
  }, {
    step: "08",
    title: "Manufacturing",
    description: "Quality control, ethical production, and fair labor practices.",
    timeline: "Week 21-25"
  }, {
    step: "09",
    title: "Shipping",
    description: "Quality control, packaging, and carbon-neutral delivery across America.",
    timeline: "Week 26-30"
  }, {
    step: "10",
    title: "Launch",
    description: "Full rollout of your sustainable uniform program to all families.",
    timeline: "Week 31"
  }, {
    step: "11",
    title: "Ongoing Partnership",
    description: "Continuous optimization, STEM education programs, and impact reporting.",
    timeline: "Ongoing"
  }];

  const impactStats = [{
    value: "500+",
    label: "American Schools Ready to Partner",
    highlight: true
  }, {
    value: "1M+",
    label: "Sustainable Uniforms Planned for Delivery"
  }, {
    value: "2M+",
    label: "Meals to be Funded for Children"
  }, {
    value: "50",
    label: "States to Serve"
  }];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero-to-warm -mt-[1px]">
        {/* Hero background image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{
          backgroundImage: `url(${usaHeroImage})`
        }}>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Subtle partnership header */}
            <div className="text-white/80 text-sm font-medium tracking-wide uppercase mb-4">
              🌟 Now Accepting Partnership Applications for USA Expansion
            </div>
            
            {/* Main headline with mobile-optimized typography */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-academy-hero font-extrabold tracking-tight text-white drop-shadow-lg px-4 leading-tight">
              The Uniform Model in America is <span className="text-coral-400">Broken.</span><br />
              We're Here to Fix It.
            </h1>
            
            {/* Subtitle with mobile-optimized spacing and readability */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg px-4">
              Kapes Uniforms transforms the school uniform experience across the United States. Quality manufacturing, STEM education integration, and social impact that supports American families while advancing educational excellence.
            </p>
            
            {/* CTA button - mobile optimized with better touch targets */}
            <div className="pt-6 flex justify-center items-center px-4 max-w-sm mx-auto">
              <button onClick={() => document.getElementById('audit-section')?.scrollIntoView({
                behavior: 'smooth'
              })} className="group w-full inline-flex items-center justify-between px-4 py-4 min-h-[48px] text-white rounded-xl font-medium text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/20 hover:border-white/40 touch-manipulation" style={{ backgroundColor: '#f97769' }}>
                <div className="flex flex-col items-start">
                  <span className="text-lg font-bold">Apply for Partnership</span>
                  <span className="text-xs opacity-95 font-medium">Start Your Assessment</span>
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
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">The Problems Every School in America Faces</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Traditional uniform suppliers are failing American schools, families, and our educational values. Here's what's really happening:
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
                The Kapes Uniforms Model: A Win-Win Solution for Everyone
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Instead of band-aid solutions, we've built a complete system that works for everyone in your American school community.
              </p>
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg mx-auto mb-12 max-w-xl">
                <img src={kapesModelImage} alt="The Kapes Uniforms Model - One Solution for Everyone in America" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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
                No confusing tiers or hidden costs. Every American school gets our complete sustainable uniform solution.
              </p>
            </div>
            
            <Card className="border-primary/30 bg-background/80 backdrop-blur">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-2">Kapes Uniforms vs Traditional American Suppliers</h3>
                  <p className="text-muted-foreground">See the difference our partnership makes for your American school</p>
                </div>
                
                <MobileOptimizedTable 
                  data={comparisonData}
                  title="Kapes Uniforms vs Traditional American Suppliers"
                />
                
                <div className="text-center space-y-4 mt-8">
                  <div className="flex justify-center">
                    <Button size="lg" className="px-10 py-4 text-lg">
                      Apply for Partnership
                    </Button>
                  </div>
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
                 Our proven 8-step process gets your American school from decision to full impact in just 16-20 weeks.
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
                American Schools Leading Global Impact
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Every uniform purchased by American schools directly funds education and meals for children in Africa. Be part of a global movement where American schools set the standard for international social responsibility.
              </p>
              <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-lg mx-auto mb-12 max-w-2xl">
                <img src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747119030/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg" alt="Sustainable materials and American manufacturing for school uniforms" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <Flag className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Quality Manufacturing</h3>
                   <p className="text-sm text-muted-foreground">Supporting ethical production with sustainable practices and fair labor throughout the supply chain.</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <GraduationCap className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Educational Excellence</h3>
                  <p className="text-sm text-muted-foreground">STEM education partnerships and factory visits that bring real-world learning into the classroom.</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Budget-Friendly</h3>
                  <p className="text-sm text-muted-foreground">Affordable solutions with Title I discounts and payment plans that make quality uniforms accessible to all families.</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Global Impact</h3>
                  <p className="text-sm text-muted-foreground">Every uniform purchased funds education and meals for children worldwide through our 1:1 donation program.</p>
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
              Transform Your American School's Impact Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the sustainable uniform revolution in America. Every day you wait is another day of missed impact for your students, community, and educational mission.
            </p>
            
            <div className="bg-background/80 backdrop-blur rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
                <div>
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Launch in 30 Weeks</div>
                  <div className="text-sm text-muted-foreground">From partnership to full program</div>
                </div>
                <div>
                  <Target className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Guaranteed Impact</div>
                  <div className="text-sm text-muted-foreground">Measurable results or cancel anytime</div>
                </div>
                <div>
                  <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Educational Excellence</div>
                  <div className="text-sm text-muted-foreground">STEM programs and factory visits included</div>
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
              Ready to lead the sustainable uniform revolution in America?<br />
              <strong>Your students and educational mission are counting on you.</strong>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}