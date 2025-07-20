import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Recycle, ArrowRight, School, Users, BarChart3, Package, Heart, Globe, RefreshCw, Target, CheckCircle, TrendingUp, Mail, MapPin, Calendar, ChevronDown, Plus, Minus } from "lucide-react";
import { Footer } from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";

const CircularEconomyTakeback = () => {
  const isMobile = useIsMobile();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    schools: false,
    parents: false,
    impact: false,
    process: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Enhanced data with more details for progressive disclosure
  const detailedInfo = {
    schools: {
      details: "Our managed takeback system integrates seamlessly with your existing uniform ordering process. Parents can return uniforms through multiple convenient channels, and all logistics are handled by our team.",
      benefits: [
        "Zero setup costs or ongoing admin",
        "Automatic integration with KapesImpact™ dashboard", 
        "Transparent reporting for governors and leadership",
        "Enhanced sustainability credentials for school"
      ]
    },
    parents: {
      details: "Returning uniforms is simple and rewarding. Every item you return helps fund meals for children in Africa while keeping textiles out of landfill.",
      benefits: [
        "Free collection from home or school",
        "Immediate impact tracking",
        "Access to affordable second-hand uniforms",
        "Teaching children about circular economy"
      ]
    },
    impact: {
      details: "Our impact measurement goes beyond simple recycling statistics. We track environmental, social, and community benefits in real-time.",
      metrics: [
        "Carbon footprint reduction per uniform",
        "Number of meals funded in African schools",
        "Textile waste diverted from landfill",
        "Parent engagement and satisfaction scores"
      ]
    }
  };

  const takebackSteps = [{
    title: "Parents Return Used Uniforms",
    description: "Whether outgrown, damaged, or end-of-year leftovers",
    icon: Package,
    step: "1"
  }, {
    title: "We Collect, Sort & Process",
    description: "Either for reuse, recycling, or responsible disposal",
    icon: RefreshCw,
    step: "2"
  }, {
    title: "We Fund School Meals",
    description: "For every item returned, we fund a school meal for a child in need in Africa",
    icon: Heart,
    step: "3"
  }];

  const schoolBenefits = [{
    title: "Fully Managed by Us",
    description: "No extra work for your team",
    icon: CheckCircle
  }, {
    title: "Built into Parent Experience",
    description: "Simple and friction-free ordering integration",
    icon: Users
  }, {
    title: "Tracked in KapesImpact™",
    description: "Your community can see the impact in real time",
    icon: BarChart3
  }];

  const parentOptions = [{
    title: "School Collection Bin",
    description: "Drop them into a convenient school collection bin",
    icon: MapPin
  }, {
    title: "Shop Online",
    description: "Purchase second-hand uniforms directly through our online store",
    icon: Mail
  }, {
    title: "Home Delivery & Locker Pickups",
    description: "Convenient collection and delivery options to your preferred location",
    icon: Calendar
  }];

  const impactResults = [{
    title: "Uniforms Reused or Recycled",
    description: "Less textile waste in landfills",
    icon: Recycle,
    metric: "Environmental Impact"
  }, {
    title: "Meals Funded",
    description: "More children attending school",
    icon: Heart,
    metric: "Social Impact"
  }, {
    title: "Parent Engagement",
    description: "Stronger school community connections",
    icon: Users,
    metric: "Community Impact"
  }, {
    title: "Visible Metrics",
    description: "Easy reporting for leadership teams",
    icon: BarChart3,
    metric: "Transparency"
  }];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
          backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752871032/2_30_s_is9zcc.jpg')",
          backgroundPosition: "center"
        }}></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Circular Economy & Takeback
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">Uniforms shouldn't end up in landfill</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              At Kapes, we believe school uniforms should be part of a circular system — not the waste stream. That's why we've built a fully managed takeback scheme that gives old uniforms a new life, and creates real-world impact with every item returned.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
      </section>

      {/* How It Works Section - Process Steps (Blue Theme) */}
      <section className="py-16 px-4 relative">
        {/* Section Separator */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-blue-50/50 dark:to-blue-950/20"></div>
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300">
              Process Overview
            </Badge>
            <h2 className="text-2xl md:text-3xl font-medium mb-4 flex items-center justify-center gap-3">
              ♻️ How the Takeback Scheme Works
            </h2>
            
            {/* Progressive Disclosure for Process Details */}
            <Collapsible open={openSections.process} onOpenChange={() => toggleSection('process')}>
              <CollapsibleTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950/20 transition-colors"
                >
                  Learn More About Our Process
                  {openSections.process ? <ChevronDown className="ml-2 h-4 w-4 rotate-180 transition-transform" /> : <ChevronDown className="ml-2 h-4 w-4 transition-transform" />}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4">
                <div className="max-w-3xl mx-auto bg-blue-50/50 dark:bg-blue-950/20 rounded-lg p-6 border border-blue-200/50 dark:border-blue-800/50">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Our three-step process ensures maximum impact with minimal effort. We handle all logistics, 
                    tracking, and reporting while creating measurable social and environmental benefits.
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          <div className={`grid gap-8 mb-12 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'}`}>
            {takebackSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative group">
                  <Card className="hover:shadow-lg transition-all duration-300 text-center h-full border-blue-200/50 hover:border-blue-300 dark:border-blue-800/50 dark:hover:border-blue-700 hover:-translate-y-1">
                    <CardHeader>
                      <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 rounded-full flex items-center justify-center relative shadow-lg">
                        <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                          {step.step}
                        </div>
                      </div>
                      <CardTitle className="text-xl text-blue-900 dark:text-blue-100">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                  {!isMobile && index < takebackSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center shadow-md">
                        <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Bottom Section Separator */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-blue-50/50 dark:to-blue-950/20"></div>
      </section>

      {/* Enhanced Hero Impact Section */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Diagonal transition from previous section */}
        <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-br from-blue-50/50 via-transparent to-background dark:from-blue-950/20 transform -skew-y-1 origin-top-left"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1747119030/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg')"
            }} 
          />
          {/* Cleaner overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        {/* Main Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto">
              {/* Impact Badge */}
              <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-white font-medium text-sm md:text-base">Real Impact • Real Results</span>
              </div>
              
              {/* Main Headline */}
              <div className="space-y-8 mb-12">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                  <span className="block mb-2">One less uniform</span>
                  <span className="block mb-2">in landfill</span>
                  <div className="flex items-center justify-center gap-6 my-8">
                    <div className="h-px bg-white/30 flex-1"></div>
                    <Globe className="w-8 h-8 md:w-12 md:h-12 text-white" />
                    <div className="h-px bg-white/30 flex-1"></div>
                  </div>
                  <span className="block text-primary">One more child fed</span>
                </h3>
                
                <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                  Every returned uniform creates a ripple effect of positive impact across communities in Africa and here at home
                </p>
              </div>
              
              {/* Redesigned Impact Stats Cards */}
              <div className={`grid gap-6 max-w-4xl mx-auto ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'}`}>
                <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <Recycle className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-white/80 text-sm md:text-base">Circular System</div>
                </div>
                
                <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">1:1</div>
                  <div className="text-white/80 text-sm md:text-base">Meals per Uniform</div>
                </div>
                
                <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">Zero</div>
                  <div className="text-white/80 text-sm md:text-base">Landfill Waste</div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="mt-12">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Discover the Full Impact Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Diagonal transition to next section */}
        <div className="absolute -bottom-24 left-0 right-0 h-24 bg-gradient-to-tl from-green-50/50 via-transparent to-background dark:from-green-950/20 transform skew-y-1 origin-bottom-right"></div>
      </section>

      {/* For Schools Section - Green Theme */}
      <section className="bg-gradient-to-br from-green-50/50 via-green-25/30 to-background dark:from-green-950/20 dark:via-green-900/10 py-16 px-4 relative">
        {/* Top section separator */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-green-50/50 dark:to-green-950/20"></div>
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300">
              For Educational Institutions
            </Badge>
            <h2 className="text-2xl md:text-3xl font-medium mb-4 flex items-center justify-center gap-3 text-green-900 dark:text-green-100">
              🏫 For Schools: Zero Admin, Real Results
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our takeback system is designed for busy schools:
            </p>
            
            {/* Progressive Disclosure for Schools */}
            <Collapsible open={openSections.schools} onOpenChange={() => toggleSection('schools')}>
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline" 
                  className="border-green-200 text-green-700 hover:bg-green-50 dark:border-green-800 dark:text-green-300 dark:hover:bg-green-950/20 min-h-12"
                >
                  {openSections.schools ? 'Hide Details' : 'See Full Benefits'}
                  {openSections.schools ? <Minus className="ml-2 h-4 w-4" /> : <Plus className="ml-2 h-4 w-4" />}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-6">
                <div className="max-w-4xl mx-auto bg-green-50 dark:bg-green-950/30 rounded-xl p-6 border border-green-200 dark:border-green-800">
                  <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                    {detailedInfo.schools.details}
                  </p>
                  <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
                    {detailedInfo.schools.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                        <span className="text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          <div className={`grid gap-6 mb-8 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'}`}>
            {schoolBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return <Card key={index} className="hover:shadow-lg transition-all duration-300 text-center group border-green-200/50 hover:border-green-300 dark:border-green-800/50 dark:hover:border-green-700 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto mb-4 w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/40 dark:to-green-800/40 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <IconComponent className="w-7 h-7 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-lg text-green-900 dark:text-green-100">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>;
            })}
          </div>
          
          <div className="text-center">
            <div className="bg-green-100/50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200/50 dark:border-green-800/50">
              <p className="text-lg font-medium text-green-900 dark:text-green-100">
                Schools on the Core and Impact tiers automatically receive takeback integration and impact reporting.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom section separator */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-green-50/50 dark:to-green-950/20"></div>
      </section>

      {/* For Parents Section - Purple Theme */}
      <section className="py-16 px-4 relative bg-gradient-to-br from-purple-50/30 via-background to-purple-25/20 dark:from-purple-950/10 dark:to-purple-900/5">
        {/* Diagonal section separator */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-green-50/30 via-transparent to-purple-50/30 dark:from-green-950/10 dark:to-purple-950/10 transform -skew-y-1 origin-top-left"></div>
        
        <div className="container mx-auto max-w-6xl relative mt-12">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300">
              For Families
            </Badge>
            <h2 className="text-2xl md:text-3xl font-medium mb-4 flex items-center justify-center gap-3 text-purple-900 dark:text-purple-100">
              👨‍👩‍👧 For Parents: Simple & Purposeful
            </h2>
            <p className="text-lg text-muted-foreground mb-6">Returning and purchasing old uniforms is as easy as:</p>
            
            {/* Progressive Disclosure for Parents */}
            <Collapsible open={openSections.parents} onOpenChange={() => toggleSection('parents')}>
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline" 
                  className="border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-950/20 min-h-12"
                >
                  {openSections.parents ? 'Hide Family Benefits' : 'See Family Benefits'}
                  {openSections.parents ? <Minus className="ml-2 h-4 w-4" /> : <Plus className="ml-2 h-4 w-4" />}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-6">
                <div className="max-w-4xl mx-auto bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                  <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                    {detailedInfo.parents.details}
                  </p>
                  <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
                    {detailedInfo.parents.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                        <Heart className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                        <span className="text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          <div className={`grid gap-6 mb-8 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'}`}>
            {parentOptions.map((option, index) => {
              const IconComponent = option.icon;
              return <Card key={index} className="hover:shadow-lg transition-all duration-300 text-center group border-purple-200/50 hover:border-purple-300 dark:border-purple-800/50 dark:hover:border-purple-700 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto mb-4 w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <IconComponent className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-lg text-purple-900 dark:text-purple-100">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>;
            })}
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100/50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200/50 dark:border-purple-800/50">
              <p className="text-lg font-medium text-purple-900 dark:text-purple-100">
                It's not just recycling — it's feeding children, reducing waste, and teaching values.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom diagonal separator */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-tl from-orange-50/30 via-transparent to-purple-50/30 dark:from-orange-950/10 dark:to-purple-950/10 transform skew-y-1 origin-bottom-right"></div>
      </section>

      {/* Results Section - Orange Theme */}
      <section className="bg-gradient-to-br from-orange-50/40 via-orange-25/20 to-background dark:from-orange-950/15 dark:via-orange-900/8 py-16 px-4 relative">
        {/* Top diagonal separator */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-orange-50/40 dark:to-orange-950/15"></div>
        
        <div className="container mx-auto max-w-6xl relative mt-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300">
              Impact Measurement
            </Badge>
            <h2 className="text-2xl md:text-3xl font-medium mb-4 flex items-center justify-center gap-3 text-orange-900 dark:text-orange-100">
              📈 The Results Speak for Themselves
            </h2>
            
            {/* Progressive Disclosure for Impact */}
            <Collapsible open={openSections.impact} onOpenChange={() => toggleSection('impact')}>
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline" 
                  className="border-orange-200 text-orange-700 hover:bg-orange-50 dark:border-orange-800 dark:text-orange-300 dark:hover:bg-orange-950/20 min-h-12"
                >
                  {openSections.impact ? 'Hide Impact Details' : 'See Impact Metrics'}
                  {openSections.impact ? <Minus className="ml-2 h-4 w-4" /> : <Plus className="ml-2 h-4 w-4" />}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-6">
                <div className="max-w-4xl mx-auto bg-orange-50 dark:bg-orange-950/30 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
                  <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                    {detailedInfo.impact.details}
                  </p>
                  <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
                    {detailedInfo.impact.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                        <BarChart3 className="h-5 w-5 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                        <span className="text-sm font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          <div className={`grid gap-6 mb-8 justify-items-center ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
            {impactResults.map((result, index) => {
              const IconComponent = result.icon;
              return <Card key={index} className={`hover:shadow-lg transition-all duration-300 text-center group border-orange-200/50 hover:border-orange-300 dark:border-orange-800/50 dark:hover:border-orange-700 hover:-translate-y-1 ${isMobile ? 'w-full max-w-md' : 'w-full max-w-sm'}`}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/40 dark:to-orange-800/40 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <IconComponent className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                  </div>
                  <Badge variant="outline" className="mb-2 mx-auto border-orange-200 text-orange-700 dark:border-orange-800 dark:text-orange-300">
                    {result.metric}
                  </Badge>
                  <CardTitle className="text-lg text-center text-orange-900 dark:text-orange-100">{result.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-center">{result.description}</p>
                </CardContent>
              </Card>;
            })}
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100/50 dark:bg-orange-900/20 rounded-xl p-6 border border-orange-200/50 dark:border-orange-800/50">
              <p className="text-lg font-medium text-orange-900 dark:text-orange-100 mb-4">
                By making uniforms circular, we reduce environmental impact and increase social impact — without schools or parents having to change the way they shop.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom section separator */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-orange-50/40 dark:to-orange-950/15"></div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
              Because impact shouldn't require effort — just better systems.
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to make your school uniforms part of the circular economy?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-2xl px-8 py-6 text-lg hover-scale transition-smooth">
                Learn About Partnership Tiers
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl px-8 py-6 text-lg border-white text-primary hover:bg-white hover:text-primary hover-scale transition-smooth">
                See Impact Dashboard Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CircularEconomyTakeback;
