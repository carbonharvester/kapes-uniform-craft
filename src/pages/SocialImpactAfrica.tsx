import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, Utensils, Shirt, BarChart3, QrCode, Globe, Target, CheckCircle, TrendingUp, HandHeart, GraduationCap, Building, Sparkles, ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ImageContentSection } from "@/components/ImageContentSection";
const SocialImpactAfrica = () => {
  const uniformImpact = [{
    title: "Free School Uniforms for Children in Need",
    description: "We provide uniforms to children who otherwise couldn't afford them",
    icon: Shirt
  }, {
    title: "Local Ethical Production",
    description: "We work with local factories and tailors to produce uniforms ethically",
    icon: Building
  }, {
    title: "Dignity, Confidence & Access",
    description: "We support dignity, confidence, and access to learning",
    icon: GraduationCap
  }];
  const mealProgram = [{
    title: "Funded Through Takeback Scheme",
    description: "Every returned Kapes uniform = 1 meal donated",
    icon: Utensils
  }, {
    title: "Local Partner Implementation",
    description: "We work with partners in Kenya and beyond to monitor delivery",
    icon: Globe
  }, {
    title: "Improved School Attendance",
    description: "Reducing absenteeism and improving concentration",
    icon: TrendingUp
  }];
  const jobCreation = [{
    title: "Jobs for Adults",
    description: "Employment in tailoring and manufacturing",
    icon: Users
  }, {
    title: "Skills Development",
    description: "Training for women and youth",
    icon: Target
  }, {
    title: "Community Strengthening",
    description: "Circular income that supports families",
    icon: Heart
  }];
  const trackingMetrics = [{
    title: "Uniforms Donated",
    description: "Track the number of free uniforms provided",
    icon: Shirt,
    tier: "Core & Impact"
  }, {
    title: "Meals Funded",
    description: "See how many children have been fed",
    icon: Utensils,
    tier: "Core & Impact"
  }, {
    title: "Carbon Savings",
    description: "Environmental impact from circular systems",
    icon: Globe,
    tier: "Core & Impact"
  }, {
    title: "QR Code Tracking",
    description: "Garment-level impact tracking",
    icon: QrCode,
    tier: "Impact Only"
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
        backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1747129548/WhatsApp_Image_2025-05-13_at_12.12.32_2_qbmzae.jpg')",
        backgroundPosition: "center"
      }}></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Social Impact in Africa</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              Every Uniform Helps Another Child{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Get an Education
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              At Kapes, we believe access to education should never be determined by poverty — and that uniforms can unlock opportunity.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      </section>

      {/* Free School Uniforms Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6" style={{ color: '#030063' }}>
              Free School Uniforms
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              In many parts of Africa, a uniform is the barrier between a child and a classroom. Children without one are often turned away — even from free public schools.
            </p>
          </div>
          
        {/* Hero Video Section - Program Overview */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-3xl p-8 lg:p-12">
            <div className="absolute top-4 left-4">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Program Overview
              </div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white/80 dark:bg-black/20 backdrop-blur-sm">
                <iframe 
                  title="Free Uniform Program Overview" 
                  src="https://player.vimeo.com/video/718334030?h=08f724cf5c" 
                  width="100%" 
                  height="100%" 
                  className="w-full h-full"
                  frameBorder="0" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   
                  allowFullScreen
                />
              </div>
              <p className="text-lg text-muted-foreground mt-6 text-center max-w-2xl mx-auto">
                Discover how our free uniform program is transforming education across Africa by removing barriers to learning
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Content Section */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                {uniformImpact.map((impact, index) => {
                  const IconComponent = impact.icon;
                  return (
                    <div key={index} className="flex gap-4 items-start group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                          <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold" style={{ color: '#030063' }}>
                          {impact.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {impact.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="pt-4 border-t border-border/50">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your students wear sustainable uniforms — and make it possible for others to wear theirs, too.
                </p>
              </div>
            </div>
          </div>
          
          {/* Testimonial Video Section */}
          <div className="lg:col-span-1">
            <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 rounded-2xl p-6">
              <div className="absolute top-4 left-4">
                <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Student Story
                </div>
              </div>
              <div className="pt-8">
                <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                  <iframe 
                    title="Jacob from Kirigu Primary School - Free Uniform Testimonial" 
                    src="https://player.vimeo.com/video/812944686?h=9df738afb7" 
                    width="100%" 
                    height="100%" 
                    className="w-full h-full"
                    frameBorder="0" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   
                    allowFullScreen
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold text-green-800 dark:text-green-200">Jacob's Story</h4>
                  <p className="text-sm text-muted-foreground">
                    Meet Jacob from Kirigu Primary School in Kenya, who shares how receiving a free school uniform changed his educational journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Supporting Image Section */}
          <div className="lg:col-span-1">
            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://res.cloudinary.com/dng12bd0a/image/upload/v1750536183/Screen_Shot_2022-06-07_at_7.22.23_PM_i4veeu.png" 
                  alt="Free school uniforms program - children in school" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free School Uniforms Section - Reversed Layout */}
      <section className="py-20 lg:py-32 bg-gradient-warm-section">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6" style={{ color: '#030063' }}>
              Free School Meals
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We also fund school meals for children who can't afford to eat during the day — helping reduce absenteeism, improve concentration, and keep children in school longer.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Section - Now on Left */}
            <div className="relative order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747129548/WhatsApp_Image_2025-05-13_at_12.12.32_1_gve5d6.jpg" 
                  alt="Free school meals program - children eating" 
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
            </div>

            {/* Content Section - Now on Right */}
            <div className="space-y-8 order-2">
              <div className="grid gap-8">
                {mealProgram.map((program, index) => {
                  const IconComponent = program.icon;
                  return (
                    <div key={index} className="flex gap-4 items-start group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors">
                          <IconComponent className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold" style={{ color: '#030063' }}>
                          {program.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {program.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="pt-4 border-t border-border/50">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  One garment returned = one child fed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creating Jobs Through Local Production Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6" style={{ color: '#030063' }}>
              Creating Jobs Through Local Production
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Impact isn't just about charity — it's about creating self-sustaining ecosystems. That's why our free uniforms are made locally, providing:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Section - on Left */}
            <div className="space-y-8 order-1">
              <div className="grid gap-8">
                {jobCreation.map((job, index) => {
                  const IconComponent = job.icon;
                  return (
                    <div key={index} className="flex gap-4 items-start group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl flex items-center justify-center group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">
                          <IconComponent className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold" style={{ color: '#030063' }}>
                          {job.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="pt-4 border-t border-border/50">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Creating sustainable employment opportunities in local communities.
                </p>
              </div>
            </div>

            {/* Image Section - on Right */}
            <div className="relative order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/dng12bd0a/image/upload/v1752781424/Filip-C-Agoo-Everland-Marketing-Kenya-9271-WEB-low-resolution-1_x3pigc.jpg" 
                  alt="Local production - creating jobs through manufacturing" 
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
      <ImageContentSection
        title="Track Your School's Impact"
        description="Every Core and Impact tier school receives access to the KapesImpact™ platform, where you can track:"
        imageSrc="https://res.cloudinary.com/dng12bd0a/image/upload/v1752781502/Filip-C-Agoo-Everland-Marketing-Kenya-9235-WEB-low-resolution-1_mzuiwl.jpg"
        imageAlt="School impact tracking platform dashboard"
        items={trackingMetrics}
        bottomText="Real-world stories and metrics you can share with your community"
        imagePosition="left"
        iconColorScheme="orange"
      />

      {/* Real Change Section */}
      <section className="py-16 px-4 bg-[#cfeaff]">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              Real Change. Real Children. Real Schools.
            </h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              This isn't theoretical impact — it's children learning, eating, and thriving because your school chose Kapes.
            </p>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Every school we partner with is helping build a future where education, dignity, and opportunity are universal.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" style={{ backgroundColor: '#f97769' }} className="hover:opacity-90 transition-opacity">
              See Our Current Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Join the Movement
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>;
};
export default SocialImpactAfrica;