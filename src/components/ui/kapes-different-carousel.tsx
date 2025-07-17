
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Plus, Leaf, Shield, Recycle, Users, Heart, Globe, Truck, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface DifferenceCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  textColor: string;
  icon: React.ReactNode;
  image?: string;
  details: {
    title: string;
    content: string;
    features: string[];
  };
}

const differences: DifferenceCard[] = [
  {
    id: "sustainability",
    title: "100% Sustainable",
    subtitle: "Every thread matters for our planet's future.",
    description: "Eco-friendly materials and processes",
    color: "bg-gradient-to-br from-green-400 to-emerald-600",
    textColor: "text-white",
    icon: <Leaf className="w-6 h-6" />,
    details: {
      title: "Sustainability Leadership",
      content: "Our commitment to environmental responsibility drives every decision we make.",
      features: [
        "100% organic and recycled materials",
        "Carbon-neutral manufacturing process",
        "Biodegradable packaging",
        "Zero-waste production facilities",
        "Renewable energy powered operations"
      ]
    }
  },
  {
    id: "transparency",
    title: "Full Transparency",
    subtitle: "Your trust is our foundation.",
    description: "Complete supply chain visibility",
    color: "bg-gradient-to-br from-blue-500 to-purple-600",
    textColor: "text-white",
    icon: <Shield className="w-6 h-6" />,
    details: {
      title: "Transparency & Trust",
      content: "We believe in complete openness about our processes, pricing, and impact.",
      features: [
        "Open-book pricing model",
        "Real-time supply chain tracking",
        "Factory visit programs",
        "Impact measurement dashboard",
        "Third-party sustainability audits"
      ]
    }
  },
  {
    id: "circular",
    title: "Circular Economy",
    subtitle: "Built for endless cycles of use.",
    description: "Take-back and recycling programs",
    color: "bg-gradient-to-br from-orange-400 to-red-500",
    textColor: "text-white",
    icon: <Recycle className="w-6 h-6" />,
    details: {
      title: "Circular Economy Model",
      content: "We've designed a closed-loop system that eliminates waste and maximizes value.",
      features: [
        "Uniform take-back program",
        "Upcycling and recycling services",
        "Repair and maintenance support",
        "Material regeneration process",
        "Second-life product programs"
      ]
    }
  },
  {
    id: "community",
    title: "Community Impact",
    subtitle: "Our values shape everything we do.",
    description: "Supporting communities worldwide",
    color: "bg-gradient-to-br from-teal-400 to-cyan-600",
    textColor: "text-white",
    icon: <Users className="w-6 h-6" />,
    details: {
      title: "Community & Social Impact",
      content: "We're committed to creating positive change in every community we serve.",
      features: [
        "Local employment programs",
        "Educational scholarships",
        "Community development projects",
        "Fair trade partnerships",
        "Social enterprise support"
      ]
    }
  },
  {
    id: "quality",
    title: "Premium Quality",
    subtitle: "Built to stand the test of time.",
    description: "Durable, comfortable, and stylish",
    color: "bg-gradient-to-br from-gray-800 to-gray-900",
    textColor: "text-white",
    icon: <Heart className="w-6 h-6" />,
    details: {
      title: "Uncompromising Quality",
      content: "Every garment is crafted with precision and care to ensure maximum durability and comfort.",
      features: [
        "Premium sustainable fabrics",
        "Rigorous quality testing",
        "Ergonomic design principles",
        "Extended warranty coverage",
        "Performance guarantees"
      ]
    }
  },
  {
    id: "global",
    title: "Global Reach",
    subtitle: "Serving schools across continents.",
    description: "International delivery and support",
    color: "bg-gradient-to-br from-indigo-500 to-purple-700",
    textColor: "text-white",
    icon: <Globe className="w-6 h-6" />,
    details: {
      title: "Global Network",
      content: "Our worldwide presence ensures consistent service and support wherever you are.",
      features: [
        "Presence in 45+ countries",
        "Local customer support teams",
        "Regional fulfillment centers",
        "Cultural adaptation services",
        "Multi-language support"
      ]
    }
  },
  {
    id: "delivery",
    title: "Fast Delivery",
    subtitle: "When you need it, where you need it.",
    description: "Reliable and efficient logistics",
    color: "bg-gradient-to-br from-pink-500 to-rose-600",
    textColor: "text-white",
    icon: <Truck className="w-6 h-6" />,
    details: {
      title: "Lightning-Fast Delivery",
      content: "Our advanced logistics network ensures your uniforms arrive exactly when you need them.",
      features: [
        "Next-day delivery available",
        "Real-time tracking system",
        "Flexible delivery options",
        "Emergency rush orders",
        "Worldwide shipping network"
      ]
    }
  },
  {
    id: "customization",
    title: "Complete Customization",
    subtitle: "Your vision, perfectly realized.",
    description: "Tailored solutions for every school",
    color: "bg-gradient-to-br from-amber-500 to-orange-600",
    textColor: "text-white",
    icon: <Award className="w-6 h-6" />,
    details: {
      title: "Unlimited Customization",
      content: "Every uniform is crafted to reflect your school's unique identity and requirements.",
      features: [
        "Custom colors and designs",
        "Embroidered logos and crests",
        "Size-inclusive options",
        "Adaptive uniform solutions",
        "Brand guideline compliance"
      ]
    }
  },
  {
    id: "technology",
    title: "Smart Technology",
    subtitle: "Innovation in every fiber.",
    description: "Advanced fabric technology",
    color: "bg-gradient-to-br from-violet-500 to-purple-600",
    textColor: "text-white",
    icon: <Shield className="w-6 h-6" />,
    details: {
      title: "Cutting-Edge Technology",
      content: "Our uniforms incorporate the latest innovations in textile technology for enhanced performance.",
      features: [
        "Moisture-wicking fabrics",
        "Stain-resistant treatments",
        "Temperature regulation",
        "Antimicrobial properties",
        "Wrinkle-free technology"
      ]
    }
  }
];

export const KapesDifferentCarousel = () => {
  const [openPopover, setOpenPopover] = useState<string | null>(null);

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {differences.map((difference) => (
            <CarouselItem key={difference.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <Card className={cn(
                "h-64 border-0 overflow-hidden relative group cursor-pointer transition-all duration-300 hover:scale-105",
                difference.color
              )}>
                <CardContent className="p-8 h-full flex flex-col justify-between relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-6 right-6">
                      {difference.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex-1">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        {difference.icon}
                        <span className="text-sm font-medium opacity-80">
                          {difference.description}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className={cn("text-3xl font-semibold leading-tight", difference.textColor)}>
                        {difference.title}
                      </h3>
                      <p className={cn("text-lg opacity-90 leading-relaxed", difference.textColor)}>
                        {difference.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Plus Button */}
                  <div className="relative z-10 flex justify-end">
                    <Popover 
                      open={openPopover === difference.id} 
                      onOpenChange={(open) => setOpenPopover(open ? difference.id : null)}
                    >
                      <PopoverTrigger asChild>
                        <button
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenPopover(openPopover === difference.id ? null : difference.id);
                          }}
                        >
                          <Plus className="w-5 h-5 text-white" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent 
                        className="w-96 p-0 border-0 shadow-2xl bg-white/95 backdrop-blur-sm"
                        side="top"
                        align="center"
                        sideOffset={20}
                      >
                        <div className="p-8">
                          <div className="flex items-center space-x-4 mb-6">
                            <div className={cn("p-3 rounded-xl", difference.color)}>
                              {React.cloneElement(difference.icon as React.ReactElement, {
                                className: "w-6 h-6 text-white"
                              })}
                            </div>
                            <h4 className="text-xl font-semibold text-foreground">
                              {difference.details.title}
                            </h4>
                          </div>
                          
                          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                            {difference.details.content}
                          </p>
                          
                          <div className="space-y-3">
                            <h5 className="text-base font-medium text-foreground">Key Features:</h5>
                            <ul className="space-y-2">
                              {difference.details.features.map((feature, index) => (
                                <li key={index} className="text-sm text-muted-foreground flex items-center space-x-3">
                                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation arrows positioned below and centered - moved inside Carousel */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <CarouselPrevious className="relative left-0 translate-x-0 translate-y-0 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="relative right-0 translate-x-0 translate-y-0 hover:bg-primary hover:text-primary-foreground" />
        </div>
      </Carousel>
    </div>
  );
};
