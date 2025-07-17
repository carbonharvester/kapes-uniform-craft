
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Target, Users, Leaf, Award, ArrowRight } from "lucide-react";

const impactMetrics = [{
  icon: BarChart3,
  label: "Carbon Tracking",
  value: "12.5t CO2",
  change: "+15%"
}, {
  icon: TrendingUp,
  label: "Waste Reduction",
  value: "87%",
  change: "+23%"
}, {
  icon: Target,
  label: "Goals Achieved",
  value: "9/12",
  change: "+3"
}, {
  icon: Users,
  label: "Students Engaged",
  value: "1,247",
  change: "+89"
}];

const dashboardFeatures = [{
  icon: Leaf,
  title: "Environmental Impact",
  description: "Track carbon footprint, waste reduction, and energy savings in real-time",
  screenshot: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop"
}, {
  icon: BarChart3,
  title: "Data Visualization",
  description: "Beautiful charts and graphs that make complex sustainability data easy to understand",
  screenshot: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
}, {
  icon: Target,
  title: "Goal Management",
  description: "Set, track, and achieve sustainability targets with automated progress monitoring",
  screenshot: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
}, {
  icon: Award,
  title: "Achievement Sharing",
  description: "Celebrate milestones and share your school's success story with the community",
  screenshot: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop"
}];

export const KapesImpactDashboard = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              KapesImpact™{" "}
              <span className="text-primary">Dashboard</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your sustainability data into compelling stories. Track, measure, and showcase your school's environmental impact with our comprehensive platform.
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="text-center bg-card border-border hover:shadow-md transition-all duration-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-semibold mb-1 text-foreground">{metric.value}</div>
                  <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                  <div className="text-xs text-primary font-medium">{metric.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Feature Navigation - Horizontal Layout */}
          <div className="mb-12">
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {dashboardFeatures.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedFeature(index)}
                  className={`p-6 rounded-xl border transition-all text-center ${
                    selectedFeature === index 
                      ? 'bg-primary/5 border-primary/20 shadow-sm' 
                      : 'bg-card hover:bg-card/80 border-border hover:border-border/80'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      selectedFeature === index 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-primary/10'
                    }`}>
                      <feature.icon className={`h-6 w-6 ${
                        selectedFeature === index 
                          ? 'text-primary-foreground' 
                          : 'text-primary'
                      }`} />
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Centered Image Display */}
            <div className="flex justify-center">
              <Card className="relative overflow-hidden border-border shadow-lg max-w-2xl w-full">
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-3 rounded-lg font-medium">
              Book Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 rounded-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
