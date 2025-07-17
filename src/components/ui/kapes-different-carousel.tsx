
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Plus, Leaf, Factory, BarChart3, Recycle, Users, Heart, Store, Package, Truck } from "lucide-react";
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
    id: "materials",
    title: "Natural, Sustainable Materials",
    subtitle: "Every thread matters for our planet's future.",
    description: "100% organic and recycled fabrics",
    color: "bg-gradient-to-br from-green-400 to-emerald-600",
    textColor: "text-white",
    icon: <Leaf className="w-6 h-6" />,
    details: {
      title: "Natural, Sustainable Materials",
      content: "We use only the finest natural and recycled materials to create uniforms that are kind to both students and the planet.",
      features: [
        "100% organic cotton and recycled polyester",
        "GOTS certified sustainable fabrics",
        "Zero harmful chemicals or dyes",
        "Biodegradable fiber options",
        "Traceable supply chain materials"
      ]
    }
  },
  {
    id: "manufacturing",
    title: "Ethical Manufacturing",
    subtitle: "Fair wages and safe working conditions.",
    description: "Responsible production practices",
    color: "bg-gradient-to-br from-blue-500 to-purple-600",
    textColor: "text-white",
    icon: <Factory className="w-6 h-6" />,
    details: {
      title: "Ethical Manufacturing",
      content: "Our manufacturing partners are carefully selected and regularly audited to ensure fair labor practices and safe working conditions.",
      features: [
        "Fair Trade certified factories",
        "Living wage for all workers",
        "Safe and healthy working environments",
        "Regular third-party audits",
        "Zero tolerance for child labor"
      ]
    }
  },
  {
    id: "dashboard",
    title: "Real-Time Sustainability Dashboard",
    subtitle: "Track your environmental impact live.",
    description: "Complete transparency on impact",
    color: "bg-gradient-to-br from-teal-400 to-cyan-600",
    textColor: "text-white",
    icon: <BarChart3 className="w-6 h-6" />,
    details: {
      title: "Real-Time Sustainability Dashboard",
      content: "Monitor your school's environmental impact with our comprehensive dashboard that tracks every metric in real-time.",
      features: [
        "Live carbon footprint tracking",
        "Water usage and savings metrics",
        "Waste reduction measurements",
        "Social impact indicators",
        "Custom reporting tools"
      ]
    }
  },
  {
    id: "takeback",
    title: "Fully Managed Takeback Scheme",
    subtitle: "Complete circular lifecycle management.",
    description: "End-to-end uniform recycling",
    color: "bg-gradient-to-br from-orange-400 to-red-500",
    textColor: "text-white",
    icon: <Recycle className="w-6 h-6" />,
    details: {
      title: "Fully Managed Takeback Scheme",
      content: "Our comprehensive takeback program ensures no uniform ever goes to waste, creating a truly circular economy.",
      features: [
        "Free collection service",
        "Professional cleaning and refurbishment",
        "Donation to families in need",
        "Material recycling into new products",
        "Complete lifecycle tracking"
      ]
    }
  },
  {
    id: "governance",
    title: "Student Governance Board",
    subtitle: "Empowering students to lead change.",
    description: "Student-led sustainability initiatives",
    color: "bg-gradient-to-br from-purple-500 to-pink-600",
    textColor: "text-white",
    icon: <Users className="w-6 h-6" />,
    details: {
      title: "Student Governance Board",
      content: "We believe students should have a voice in sustainability decisions. Our governance program empowers them to lead.",
      features: [
        "Student-led sustainability committees",
        "Regular impact review meetings",
        "Decision-making authority on initiatives",
        "Leadership development programs",
        "Peer education opportunities"
      ]
    }
  },
  {
    id: "africa",
    title: "Free Uniforms & School Meals in Africa",
    subtitle: "Creating global educational equity.",
    description: "Supporting education worldwide",
    color: "bg-gradient-to-br from-amber-500 to-orange-600",
    textColor: "text-white",
    icon: <Heart className="w-6 h-6" />,
    details: {
      title: "Free Uniforms & School Meals in Africa",
      content: "For every uniform sold, we provide free uniforms and school meals to children in Africa, breaking down barriers to education.",
      features: [
        "1:1 uniform donation program",
        "Daily school meal provision",
        "Educational infrastructure support",
        "Teacher training programs",
        "Community development initiatives"
      ]
    }
  },
  {
    id: "shops",
    title: "On-Campus School Shops",
    subtitle: "Convenient access to quality uniforms.",
    description: "Physical retail presence at schools",
    color: "bg-gradient-to-br from-indigo-500 to-purple-700",
    textColor: "text-white",
    icon: <Store className="w-6 h-6" />,
    details: {
      title: "On-Campus School Shops",
      content: "Our on-campus shops provide convenient access to uniforms while creating valuable retail experience opportunities for students.",
      features: [
        "Dedicated on-site retail spaces",
        "Student employment opportunities",
        "Try-before-you-buy service",
        "Immediate uniform availability",
        "Professional fitting services"
      ]
    }
  },
  {
    id: "lockers",
    title: "E-Commerce Lockers",
    subtitle: "Smart collection points for busy families.",
    description: "Automated pickup and delivery",
    color: "bg-gradient-to-br from-gray-700 to-gray-900",
    textColor: "text-white",
    icon: <Package className="w-6 h-6" />,
    details: {
      title: "E-Commerce Lockers",
      content: "Our smart locker network provides secure, convenient collection points for uniform orders, perfect for busy families.",
      features: [
        "24/7 access to secure lockers",
        "Multiple pickup locations",
        "SMS and email notifications",
        "Temperature-controlled storage",
        "Returns and exchanges capability"
      ]
    }
  },
  {
    id: "delivery",
    title: "Next-Day Home Delivery",
    subtitle: "Fast, reliable delivery to your door.",
    description: "Premium logistics service",
    color: "bg-gradient-to-br from-pink-500 to-rose-600",
    textColor: "text-white",
    icon: <Truck className="w-6 h-6" />,
    details: {
      title: "Next-Day Home Delivery",
      content: "Our premium delivery service ensures uniforms arrive when you need them, with flexible options to suit every family.",
      features: [
        "Guaranteed next-day delivery",
        "Real-time tracking updates",
        "Flexible delivery time slots",
        "Safe place delivery options",
        "Carbon-neutral shipping"
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
                "h-96 border-0 overflow-hidden relative group cursor-pointer transition-all duration-300 hover:scale-105 rounded-2xl",
                difference.color
              )}>
                <CardContent className="p-8 h-full flex flex-col justify-between relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-6 right-6">
                      {difference.icon}
                    </div>
                  </div>
                  
                  {/* Image placeholder area */}
                  <div className="relative z-10 flex-1 mb-6">
                    <div className="w-full h-32 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 mb-6 flex items-center justify-center">
                      {React.cloneElement(difference.icon as React.ReactElement, {
                        className: "w-12 h-12 text-white/80"
                      })}
                    </div>
                    
                    <div className="space-y-3">
                      <span className="text-sm font-medium opacity-80 uppercase tracking-wide">
                        {difference.description}
                      </span>
                      <h3 className={cn("text-2xl font-semibold leading-tight", difference.textColor)}>
                        {difference.title}
                      </h3>
                      <p className={cn("text-base opacity-90 leading-relaxed", difference.textColor)}>
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
                        className="w-[480px] p-0 border-0 shadow-2xl bg-white/95 backdrop-blur-sm"
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
        
        {/* Navigation arrows positioned below and centered */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <CarouselPrevious className="relative left-0 translate-x-0 translate-y-0 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="relative right-0 translate-x-0 translate-y-0 hover:bg-primary hover:text-primary-foreground" />
        </div>
      </Carousel>
    </div>
  );
};
