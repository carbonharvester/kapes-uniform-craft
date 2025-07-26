
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Play } from "lucide-react";
import { useState } from "react";

export const Testimonials = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-16 bg-gradient-from-light-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight mb-4">What Schools Are Saying</h2>
            <p className="text-muted-foreground">
              Real feedback from schools making a real impact
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              {!isPlaying ? (
                <div 
                  className="relative w-full h-full cursor-pointer group"
                  onClick={handlePlay}
                >
                  <img
                    src="https://res.cloudinary.com/dng12bd0a/image/upload/v1752991030/thumb_4_mzgf4h.jpg"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              ) : (
                <video
                  src="https://res.cloudinary.com/dng12bd0a/video/upload/v1752989802/case_study__fairgreen_international_1080p_g0dkdi.mp4"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 object-cover"
                  controls
                  autoPlay
                  title="What Schools Are Saying"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
