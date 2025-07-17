import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const WhatMakesKapesDifferent = () => {
  const features = [
    {
      title: "Natural, Sustainable Materials",
      description: "From regenerative cotton to biodegradable tech-fabrics"
    },
    {
      title: "Ethical Manufacturing",
      description: "No shortcuts. No child labour. Just safe jobs and fair pay."
    },
    {
      title: "Real-Time Sustainability Dashboard",
      description: "Track your environmental and social impact across the year"
    },
    {
      title: "Fully Managed Takeback Scheme",
      description: "Old uniforms = new meals for children in need across Africa"
    },
    {
      title: "Student Governance Board",
      description: "Give your students a voice in the sustainability mission"
    },
    {
      title: "Free Uniforms & School Meals in Africa",
      description: "Every sale funds uniforms and meals for children in need"
    }
  ];

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>Sustainability</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              What Makes Kapes Different
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              We're Not Just a Uniform Supplier — We're Your Sustainability & Social Impact Partner
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-row gap-6 w-full items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>{feature.title}</p>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};