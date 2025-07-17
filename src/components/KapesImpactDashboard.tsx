import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BarChart3, Users, Target, TrendingUp } from "lucide-react";

const platformScreenshots = [
  {
    id: "dashboard",
    title: "Impact Dashboard",
    icon: BarChart3,
    screenshot: "/lovable-uploads/d8575c73-b7ca-4226-8f9f-bc3ce1de9393.png",
    description: "Track your sustainability metrics and environmental impact in real-time"
  },
  {
    id: "analytics",
    title: "Analytics View",
    icon: TrendingUp,
    screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description: "Deep dive into your data with comprehensive analytics and reporting"
  },
  {
    id: "engagement",
    title: "Student Engagement",
    icon: Users,
    screenshot: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "Monitor and boost student participation in sustainability initiatives"
  },
  {
    id: "goals",
    title: "Goal Tracking",
    icon: Target,
    screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description: "Set, track, and achieve your sustainability targets with precision"
  }
];

export const KapesImpactDashboard = () => {
  const [activeScreenshot, setActiveScreenshot] = useState(platformScreenshots[0]);

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Kapes Impact Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See our platform in action. Click the buttons below to explore different features and capabilities.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Platform Screenshot Display */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-border">
              <img 
                src={activeScreenshot.screenshot}
                alt={activeScreenshot.title}
                className="w-full h-auto transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{activeScreenshot.title}</h3>
                <p className="text-white/90 text-sm">{activeScreenshot.description}</p>
              </div>
            </div>
          </div>
          
          {/* Platform Feature Buttons */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-4">Explore Platform Features</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Click any button below to see a live screenshot of that platform feature in action.
              </p>
            </div>
            
            <div className="grid gap-4">
              {platformScreenshots.map((item) => (
                <Button
                  key={item.id}
                  variant={activeScreenshot.id === item.id ? "default" : "outline"}
                  size="lg"
                  className="justify-start h-auto p-4 text-left"
                  onClick={() => setActiveScreenshot(item)}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm opacity-70">{item.description}</div>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="flex-1 h-12">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="flex-1 h-12">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};