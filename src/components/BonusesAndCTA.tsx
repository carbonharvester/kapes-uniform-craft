import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Users, BookOpen, Plane } from "lucide-react";

export const BonusesAndCTA = () => {
  const bonuses = [
    {
      icon: Gift,
      title: "Free Setup & Transition",
      description: "Complete program setup with zero transition costs",
      value: "Worth £5,000"
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description: "Personal support throughout your partnership",
      value: "Included"
    },
    {
      icon: BookOpen,
      title: "Educational Resource Package",
      description: "Curriculum materials and sustainability guides",
      value: "Worth £2,000"
    },
    {
      icon: Plane,
      title: "Factory Visit Program",
      description: "Educational trips for students and staff",
      value: "Exclusive Access"
    }
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partnership Bonuses</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              When you partner with Kapes, you get more than just uniforms - you get a complete transformation package
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="bg-primary-foreground text-primary border-0">
                <CardHeader className="text-center pb-2">
                  <bonus.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <Badge variant="secondary" className="mx-auto mb-2">{bonus.value}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-lg mb-2">{bonus.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{bonus.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center space-y-6">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your School's Impact?</h3>
              <p className="text-primary-foreground/80 mb-6">
                Join leading schools across the UK who are making a measurable difference to the planet and their communities. 
                No upfront costs, guaranteed results, and complete support every step of the way.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary">
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Get Your Free Audit
              </Button>
            </div>
            
            <p className="text-sm text-primary-foreground/60">
              Speak to our education specialists • No commitment required • Setup in 30 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};