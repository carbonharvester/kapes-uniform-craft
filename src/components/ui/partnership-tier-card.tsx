
"use client";

import * as React from "react";
import { BadgeCheck, ArrowRight, Crown, Rocket, TreePine, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export interface PartnershipTier {
  name: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
  popular?: boolean;
  icon?: string;
}

interface PartnershipTierCardProps {
  tier: PartnershipTier;
}

export function PartnershipTierCard({
  tier
}: PartnershipTierCardProps) {
  const isHighlighted = tier.highlighted;
  const isPopular = tier.popular;
  const isCustom = tier.name === "CUSTOM";
  const isLegacyImpact = tier.name === "LEGACYIMPACT";
  
  const getIcon = () => {
    switch (tier.icon) {
      case "rocket":
        return Rocket;
      case "tree":
        return TreePine;
      case "crown":
        return Crown;
      case "settings":
        return Settings;
      default:
        return Settings;
    }
  };

  const IconComponent = getIcon();
  
  return <Card className={cn(
    "relative flex flex-col gap-8 overflow-hidden p-6 h-full shadow-glass",
    isCustom ? "bg-[#030063] text-white border-[#030063]" : 
    isHighlighted ? "bg-primary text-primary-foreground border-primary" : 
    "bg-background text-foreground",
    (isPopular || isLegacyImpact) && "ring-2 ring-primary"
  )}>
      {isHighlighted && !isCustom && <HighlightedBackground />}
      {isPopular && <PopularBackground />}
      {isLegacyImpact && (
        <Crown className="absolute top-4 right-4 h-6 w-6 text-primary z-10" />
      )}

      <div className="flex items-center gap-3">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center",
          isCustom ? "bg-[#f9f3df]/20" : 
          isHighlighted ? "bg-primary-foreground/20" : "bg-primary/10"
        )}>
          <IconComponent className={cn(
            "h-6 w-6",
            isCustom ? "text-[#f9f3df]" :
            isHighlighted ? "text-primary-foreground" : "text-primary"
          )} />
        </div>
        <h2 className={cn(
          "text-xl font-medium",
          isCustom ? "text-[#f9f3df]" : ""
        )}>
          {tier.name}
          {isPopular && <Badge variant="secondary" className="ml-2 mt-1 z-10">
              🔥 Most Popular
            </Badge>}
        </h2>
      </div>

      <div className="flex-1 space-y-4">
        <h3 className={cn(
          "text-sm font-medium",
          isCustom ? "text-[#f9f3df]" : ""
        )}>{tier.description}</h3>
        <ul className={cn("space-y-2", tier.name === "CUSTOM" && "blur-sm transition-all duration-300")}>
          {tier.features.map((feature, index) => <li key={index} className={cn(
            "flex items-center gap-2 text-sm font-medium",
            isCustom ? "text-white" :
            isHighlighted ? "text-primary-foreground" : "text-muted-foreground"
          )}>
              <BadgeCheck className="h-4 w-4" />
              {feature}
            </li>)}
        </ul>
      </div>

      <Button 
        variant={isHighlighted ? "secondary" : "default"} 
        className={cn(
          "w-full",
          isCustom ? "bg-[#f9f3df] text-[#030063] hover:bg-[#f9f3df]/90" :
          isHighlighted && "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
        )} 
        asChild
      >
        <a href={tier.href}>
          {tier.cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </Card>;
}

const HighlightedBackground = () => <div className="absolute inset-0 from-primary/10 via-primary/5 to-transparent bg-transparent bg-[030063]" />;
const PopularBackground = () => <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />;
