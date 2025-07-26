
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Users, BookOpen, Plane } from "lucide-react";
export const BonusesAndCTA = () => {
  const bonuses = [{
    icon: Gift,
    title: "Free Setup & Transition",
    description: "Complete program setup with zero transition costs",
    value: "Worth £5,000"
  }, {
    icon: Users,
    title: "Dedicated Account Manager",
    description: "Personal support throughout your partnership",
    value: "Included"
  }, {
    icon: BookOpen,
    title: "Educational Resource Package",
    description: "Curriculum materials and sustainability guides",
    value: "Worth £2,000"
  }, {
    icon: Plane,
    title: "Factory Visit Program",
    description: "Educational trips for students and staff",
    value: "Exclusive Access"
  }];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4">
            Exclusive Partnership Bonuses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Additional value when you join the Kapes family
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {bonuses.map((bonus, index) => {
            const IconComponent = bonus.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{bonus.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{bonus.description}</p>
                  <Badge variant="secondary">{bonus.value}</Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Your Partnership
          </Button>
        </div>
      </div>
    </section>
  );
};
