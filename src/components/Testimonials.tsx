
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">What Schools Are Saying</h2>
            <p className="text-muted-foreground">
              Real feedback from schools making a real impact
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://player.vimeo.com/video/720191939?h=0&title=1&byline=1&portrait=1"
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="What Schools Are Saying"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
