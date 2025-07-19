import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Users, 
  Utensils, 
  Shirt, 
  BarChart3, 
  QrCode, 
  Globe, 
  Target,
  CheckCircle,
  TrendingUp,
  HandHeart,
  GraduationCap,
  Building,
  Sparkles,
  ArrowRight
} from "lucide-react";

const SocialImpactAfrica = () => {
  const uniformImpact = [
    {
      title: "Free School Uniforms for Children in Need",
      description: "We provide uniforms to children who otherwise couldn't afford them",
      icon: Shirt
    },
    {
      title: "Local Ethical Production",
      description: "We work with local factories and tailors to produce uniforms ethically",
      icon: Building
    },
    {
      title: "Dignity, Confidence & Access",
      description: "We support dignity, confidence, and access to learning",
      icon: GraduationCap
    }
  ];

  const mealProgram = [
    {
      title: "Funded Through Takeback Scheme",
      description: "Every returned Kapes uniform = 1 meal donated",
      icon: Utensils
    },
    {
      title: "Local Partner Implementation",
      description: "We work with partners in Kenya and beyond to monitor delivery",
      icon: Globe
    },
    {
      title: "Improved School Attendance",
      description: "Reducing absenteeism and improving concentration",
      icon: TrendingUp
    }
  ];

  const jobCreation = [
    {
      title: "Jobs for Adults",
      description: "Employment in tailoring and manufacturing",
      icon: Users
    },
    {
      title: "Skills Development",
      description: "Training for women and youth",
      icon: Target
    },
    {
      title: "Community Strengthening",
      description: "Circular income that supports families",
      icon: Heart
    }
  ];

  const trackingMetrics = [
    {
      title: "Uniforms Donated",
      description: "Track the number of free uniforms provided",
      icon: Shirt,
      tier: "Core & Impact"
    },
    {
      title: "Meals Funded",
      description: "See how many children have been fed",
      icon: Utensils,
      tier: "Core & Impact"
    },
    {
      title: "Carbon Savings",
      description: "Environmental impact from circular systems",
      icon: Globe,
      tier: "Core & Impact"
    },
    {
      title: "QR Code Tracking",
      description: "Garment-level impact tracking",
      icon: QrCode,
      tier: "Impact Only"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1747129548/WhatsApp_Image_2025-05-13_at_12.12.32_2_qbmzae.jpg')",
            backgroundPosition: "center"
          }}
        ></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Social Impact in Africa</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              Every Uniform Helps Another Child{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Go to School
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              At Kapes, we believe access to education should never be determined by poverty — and that uniforms can unlock opportunity.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Free School Uniforms Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              👕 Free School Uniforms
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In many parts of Africa, a uniform is the barrier between a child and a classroom. Children without one are often turned away — even from free public schools.
            </p>
          </div>
          
          <div className="mb-8">
            <p className="text-center text-lg font-medium text-foreground mb-8">
              Through our impact program, funded by your uniform purchases:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {uniformImpact.map((impact, index) => {
              const IconComponent = impact.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center dark:bg-blue-900/20">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{impact.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{impact.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center bg-blue-50 p-6 rounded-lg dark:bg-blue-950/20">
            <p className="text-lg font-medium text-blue-800 dark:text-blue-200">
              Your students wear sustainable uniforms — and make it possible for others to wear theirs, too.
            </p>
          </div>
        </div>
      </section>

      {/* Free School Meals Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              🍲 Free School Meals
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We also fund school meals for children who can't afford to eat during the day — helping reduce absenteeism, improve concentration, and keep children in school longer.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {mealProgram.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center dark:bg-green-900/20">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{program.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center bg-green-50 p-6 rounded-lg dark:bg-green-950/20">
            <p className="text-xl font-bold text-green-800 dark:text-green-200">
              One garment returned = one child fed.
            </p>
          </div>
        </div>
      </section>

      {/* Creating Jobs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              🧵 Creating Jobs Through Local Production
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Impact isn't just about charity — it's about creating self-sustaining ecosystems. That's why our free uniforms are made locally, providing:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {jobCreation.map((job, index) => {
              const IconComponent = job.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center dark:bg-purple-900/20">
                      <IconComponent className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Track Impact Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              📊 Track Your School's Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every Core and Impact tier school receives access to the KapesImpact™ platform, where you can track:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 justify-items-center">
            {trackingMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow text-center w-full max-w-sm">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center dark:bg-orange-900/20">
                      <IconComponent className="w-6 h-6 text-orange-600" />
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`mb-2 mx-auto ${metric.tier === 'Impact Only' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}
                    >
                      {metric.tier}
                    </Badge>
                    <CardTitle className="text-lg text-center">{metric.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground text-center">{metric.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center">
            <p className="text-lg font-medium text-foreground">
              Real-world stories and metrics you can share with your community
            </p>
          </div>
        </div>
      </section>

      {/* Real Change Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              ❤️ Real Change. Real Children. Real Schools.
            </h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              This isn't theoretical impact — it's children learning, eating, and thriving because your school chose Kapes.
            </p>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Every school we partner with is helping build a future where education, dignity, and opportunity are universal.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              See Our Current Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Book a Call to Join the Movement
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final Impact Statement */}
      <section className="py-12 px-4 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-950/20 dark:to-red-950/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Sparkles className="w-8 h-8 text-orange-600" />
            <HandHeart className="w-8 h-8 text-red-600" />
            <Sparkles className="w-8 h-8 text-orange-600" />
          </div>
          <p className="text-2xl font-bold text-foreground">
            Together, we're making education accessible, one uniform at a time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SocialImpactAfrica;