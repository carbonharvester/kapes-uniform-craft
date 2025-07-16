import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Kapes transformed our approach to uniforms. The KapesImpact™ dashboard shows our students exactly how they're making a difference.",
      author: "Sarah Mitchell",
      role: "Head of Sustainability",
      school: "Greenfield Academy",
      impact: "65% Carbon Reduction",
      rating: 5
    },
    {
      quote: "The quality is exceptional and knowing every uniform purchased feeds children in Africa makes our school community so proud.",
      author: "James Thompson",
      role: "Bursar",
      school: "Riverside Independent School", 
      impact: "2,500 Meals Donated",
      rating: 5
    },
    {
      quote: "Our parents love that there are no upfront costs and the buy-back guarantee gives us complete peace of mind.",
      author: "Emma Clarke",
      role: "Business Manager",
      school: "Oakwood College",
      impact: "£15,000 Saved",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Schools Are Saying</h2>
            <p className="text-muted-foreground">
              Real feedback from schools making a real impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.school}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary">
                      {testimonial.impact}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};