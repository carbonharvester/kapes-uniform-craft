
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-tri-soft">
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
              <video
                src="https://res.cloudinary.com/dng12bd0a/video/upload/v1752989802/case_study__fairgreen_international_1080p_g0dkdi.mp4"
                width="100%"
                height="100%"
                className="absolute inset-0 object-cover"
                controls
                title="What Schools Are Saying"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
