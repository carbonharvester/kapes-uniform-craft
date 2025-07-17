
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Target, Users, Leaf, Award, ArrowRight } from "lucide-react";

const impactMetrics = [
  { icon: BarChart3, label: "Carbon Tracking", value: "12.5t CO2", change: "+15%" },
  { icon: TrendingUp, label: "Waste Reduction", value: "87%", change: "+23%" },
  { icon: Target, label: "Goals Achieved", value: "9/12", change: "+3" },
  { icon: Users, label: "Students Engaged", value: "1,247", change: "+89" },
];

const dashboardFeatures = [
  { 
    icon: Leaf, 
    title: "Environmental Impact", 
    description: "Track carbon footprint, waste reduction, and energy savings in real-time",
    screenshot: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop"
  },
  { 
    icon: BarChart3, 
    title: "Data Visualization", 
    description: "Beautiful charts and graphs that make complex sustainability data easy to understand",
    screenshot: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
  },
  { 
    icon: Target, 
    title: "Goal Management", 
    description: "Set, track, and achieve sustainability targets with automated progress monitoring",
    screenshot: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
  },
  { 
    icon: Award, 
    title: "Achievement Sharing", 
    description: "Celebrate milestones and share your school's success story with the community",
    screenshot: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop"
  },
];

export const KapesImpactDashboard = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);
  
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              KapesImpact™{" "}
              <span className="font-medium bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Transform your sustainability data into compelling stories. Track, measure, and showcase your school's environmental impact with our comprehensive platform.
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="text-center border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-semibold mb-1">{metric.value}</div>
                  <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                  <div className="text-xs text-primary font-medium">{metric.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Main Feature Showcase */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-light tracking-tight mb-4">
                  Transform Your{" "}
                  <span className="font-medium">Impact Story</span>
                </h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Turn complex sustainability data into clear, compelling narratives that inspire action and demonstrate real environmental progress.
                </p>
              </div>
              
              <div className="space-y-4">
                {dashboardFeatures.map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedFeature(index)}
                    className={`flex gap-4 p-4 rounded-xl border transition-all text-left w-full ${
                      selectedFeature === index 
                        ? 'bg-primary/5 border-primary/20 shadow-sm' 
                        : 'bg-card/50 hover:bg-card border-border/50'
                    }`}
                  >
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        selectedFeature === index ? 'bg-primary text-primary-foreground' : 'bg-primary/10'
                      }`}>
                        <feature.icon className={`h-5 w-5 ${
                          selectedFeature === index ? 'text-primary-foreground' : 'text-primary'
                        }`} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground font-light">{feature.description}</p>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button size="lg" className="flex-1 h-12 rounded-xl font-medium">
                  Book Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="flex-1 h-12 rounded-xl">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card className="relative overflow-hidden border-border/50 shadow-lg">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img 
                    src={dashboardFeatures[selectedFeature].screenshot}
                    alt={`${dashboardFeatures[selectedFeature].title} screenshot`}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
