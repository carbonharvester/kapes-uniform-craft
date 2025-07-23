
"use client";

import * as React from "react";
import { BadgeCheck, Leaf, Heart, Users, Cog } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { ImpactFeature } from "@/components/ui/impact-partnership-section";

interface ImpactFeatureCardProps {
  feature: ImpactFeature;
}

export function ImpactFeatureCard({ feature }: ImpactFeatureCardProps) {
  const getIcon = () => {
    switch (feature.icon) {
      case "leaf":
        return Leaf;
      case "heart":
        return Heart;
      case "users":
        return Users;
      case "cog":
        return Cog;
      default:
        return Leaf;
    }
  };

  const getColorClasses = () => {
    switch (feature.color) {
      case "green":
        return {
          iconBg: "bg-green-100",
          iconColor: "text-green-600",
          title: "text-green-700"
        };
      case "red":
        return {
          iconBg: "bg-red-100",
          iconColor: "text-red-600",
          title: "text-red-700"
        };
      case "blue":
        return {
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
          title: "text-blue-700"
        };
      case "purple":
        return {
          iconBg: "bg-purple-100",
          iconColor: "text-purple-600",
          title: "text-purple-700"
        };
      default:
        return {
          iconBg: "bg-primary/10",
          iconColor: "text-primary",
          title: "text-primary"
        };
    }
  };

  const IconComponent = getIcon();
  const colorClasses = getColorClasses();
  
  return (
    <Card className="relative flex flex-col gap-6 overflow-hidden p-6 h-full shadow-glass min-h-[400px] bg-background text-foreground hover-lift transition-smooth">
      <div className="flex items-center gap-3">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center",
          colorClasses.iconBg
        )}>
          <IconComponent className={cn("h-6 w-6", colorClasses.iconColor)} />
        </div>
        <h2 className={cn("text-lg font-semibold", colorClasses.title)}>
          {feature.category}
        </h2>
      </div>

      <div className="flex-1 space-y-4">
        <p className="text-sm font-medium text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
        <ul className="space-y-3">
          {feature.features.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <BadgeCheck className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="font-medium text-foreground leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
