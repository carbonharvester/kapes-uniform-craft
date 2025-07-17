
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Plus, Leaf, Factory, BarChart3, Recycle, Users, Heart, Store, Package, Truck, MapPin, Brain } from "lucide-react";
import factoryVisitsImage from "@/assets/factory-visits.jpg";
import organicCottonImage from "@/assets/organic-cotton.jpg";
import takebackSchemeImage from "@/assets/takeback-scheme.jpg";
import freeUniformsMealsImage from "@/assets/free-uniforms-meals.jpg";
import { cn } from "@/lib/utils";

interface DifferenceCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ReactNode;
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
    image: organicCottonImage,
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
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=600&fit=crop",
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
    image: takebackSchemeImage,
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
    title: "Student Board",
    subtitle: "Empowering students to lead change.",
    description: "Student-led sustainability initiatives",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop",
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
    image: freeUniformsMealsImage,
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
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=600&fit=crop",
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
    id: "visits",
    title: "Farm & Factory Visits",
    subtitle: "See sustainability in action firsthand.",
    description: "Transparent supply chain access",
    image: factoryVisitsImage,
    icon: <MapPin className="w-6 h-6" />,
    details: {
      title: "Farm & Factory Visits",
      content: "Experience complete transparency with guided visits to our partner farms and factories, seeing sustainable practices firsthand.",
      features: [
        "Guided farm and factory tours",
        "Meet the people behind your uniforms",
        "See sustainable practices in action",
        "Educational opportunities for students",
        "Complete supply chain transparency"
      ]
    }
  },
  {
    id: "delivery",
    title: "Next-Day Home Delivery",
    subtitle: "Fast, reliable delivery to your door.",
    description: "Premium logistics service",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=600&fit=crop",
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
  },
  {
    id: "ai-forecasting",
    title: "AI Powered Forecasting & Customer Support",
    subtitle: "Smart predictions and instant assistance.",
    description: "Intelligent planning and support",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=600&fit=crop",
    icon: <Brain className="w-6 h-6" />,
    details: {
      title: "AI Powered Forecasting & Customer Support",
      content: "Our advanced AI technology predicts your uniform needs and provides instant, intelligent customer support 24/7.",
      features: [
        "Predictive sizing and demand forecasting",
        "AI-powered inventory management",
        "24/7 intelligent chatbot support",
        "Automated reorder suggestions",
        "Smart size recommendations based on growth patterns"
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
        <CarouselContent className="-ml-2 md:-ml-4 py-4">
          {differences.map((difference) => (
            <CarouselItem key={difference.id} className="pl-2 md:pl-4 px-2 basis-full sm:basis-1/2 lg:basis-1/3">
              <Card className="h-96 border-0 overflow-hidden relative group cursor-pointer transition-all duration-300 hover:scale-105 rounded-2xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${difference.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 15%, rgba(0,0,0,0) 25%)' }} />
                
                <CardContent className="p-6 h-full flex flex-col justify-between relative z-10">
                  {/* Text content at top left */}
                  <div>
                    <h3 className="text-xl font-semibold leading-tight text-white">
                      {difference.title}
                    </h3>
                  </div>

                  {/* Plus Button at bottom right */}
                  <div className="flex justify-end">
                    <Popover 
                      open={openPopover === difference.id} 
                      onOpenChange={(open) => setOpenPopover(open ? difference.id : null)}
                    >
                      <PopoverTrigger asChild>
                        <button
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenPopover(openPopover === difference.id ? null : difference.id);
                          }}
                        >
                          <Plus className="w-4 h-4 text-white" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent 
                        className="w-[480px] p-0 border-0 shadow-2xl bg-white/95 backdrop-blur-sm fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
                      >
                        <div className="p-8">
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="p-3 rounded-xl bg-primary">
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
