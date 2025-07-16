import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";

export const KapesImpactDashboard = () => {
  const metrics = [
    { emoji: "🌱", text: "Carbon saved" },
    { emoji: "♻️", text: "Uniforms recycled" },
    { emoji: "🍲", text: "Meals donated" },
    { emoji: "👨‍👩‍👧‍👦", text: "Parent engagement" },
    { emoji: "📈", text: "PR-ready reports" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">
              📊 Introducing: KapesImpact™ Dashboard
            </h2>
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Transparency That Builds Trust
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Your school gets a dedicated sustainability dashboard showing:
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto mb-8">
            <CardContent className="p-8">
              <div className="grid gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="flex items-center gap-4 text-left">
                    <span className="text-2xl">{metric.emoji}</span>
                    <span className="text-lg">{metric.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              View Dashboard Demo
            </Button>
            <Button size="lg" variant="outline">
              Learn More About Impact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};