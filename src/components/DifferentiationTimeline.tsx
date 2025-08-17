import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const DifferentiationTimeline = () => {
  const timeline = [
    {
      year: "Traditional",
      title: "Standard Uniforms",
      description: "Basic polyester uniforms with high environmental impact",
      impact: "High carbon footprint, fast fashion model",
      color: "bg-red-100 text-red-800"
    },
    {
      year: "Current",
      title: "Eco-Conscious Options",
      description: "Some suppliers offer recycled materials but limited impact tracking",
      impact: "Moderate improvements, limited transparency",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      year: "Kapes Uniforms",
      title: "Transformative Impact",
      description: "Regenerative materials, full lifecycle management, real-time impact tracking",
      impact: "Measurable positive impact on planet and communities",
      color: "bg-green-100 text-green-800"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-light tracking-tight mb-4">The Uniform Evolution</h2>
            <p className="text-muted-foreground">
              See how Kapes Uniforms is revolutionizing school uniforms with measurable impact
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-border h-full hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:w-1/2">
                    <Card className={index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className={item.color}>{item.year}</Badge>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-3">{item.description}</p>
                        <p className="text-sm font-medium">{item.impact}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10"></div>
                  
                  <div className="flex-1 md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};