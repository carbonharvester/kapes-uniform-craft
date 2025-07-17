import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BorderBeam } from "@/components/ui/border-beam";
import { BarChart3, TrendingUp, Target, Users, Leaf, Award } from "lucide-react";

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
    <section className="py-24 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Kapes Impact Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your sustainability data into compelling stories. Track, measure, and showcase your school's environmental impact with our comprehensive dashboard.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <Card className="relative overflow-hidden border-2 shadow-2xl">
              <BorderBeam size={300} duration={12} delay={9} />
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={dashboardFeatures[selectedFeature].screenshot}
                  alt={`${dashboardFeatures[selectedFeature].title} screenshot`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
            </Card>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Transform Your Impact Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Turn complex sustainability data into clear, compelling narratives that inspire action and demonstrate real environmental progress.
              </p>
            </div>
            
            <div className="grid gap-6">
              {dashboardFeatures.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedFeature(index)}
                  className={`flex gap-4 p-4 rounded-lg border transition-all text-left w-full ${
                    selectedFeature === index 
                      ? 'bg-primary/10 border-primary/30 shadow-lg' 
                      : 'bg-card/50 hover:bg-card'
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
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="flex-1 h-12">
                View Live Demo
              </Button>
              <Button variant="outline" size="lg" className="flex-1 h-12">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};