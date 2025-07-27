
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ImpactAssessmentModal } from "@/components/ImpactAssessmentModal"
import { ImpactFeatureCard } from "@/components/ui/impact-feature-card"

export interface ImpactFeature {
  category: string
  features: string[]
  description: string
  icon: string
  color: string
}

interface ImpactPartnershipSectionProps {
  title: string
  subtitle: string
  features: ImpactFeature[]
}

export function ImpactPartnershipSection({
  title,
  subtitle,
  features,
}: ImpactPartnershipSectionProps) {
  return (
    <section className="flex flex-col items-center gap-10 py-10" style={{ backgroundColor: 'hsl(var(--background-light-warm))' }}>
      <div className="space-y-7 text-center">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-light tracking-tight leading-tight">{title}</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">{subtitle}</p>
        </div>
        
        <div className="relative z-10">
          <Button 
            onClick={() => {
              document.dispatchEvent(new CustomEvent('openImpactAssessment'));
            }}
            className="rounded-xl px-6 py-3 font-medium transition-smooth bg-primary text-primary-foreground hover:bg-primary/90 touch-manipulation cursor-pointer relative z-10"
            style={{ 
              WebkitTapHighlightColor: 'transparent',
              pointerEvents: 'auto',
              userSelect: 'none'
            }}
          >
            Discover Your Impact Potential
          </Button>
        </div>
      </div>

      <div className="grid w-full max-w-7xl gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 px-4 md:px-8">
        {features.map((feature) => (
          <ImpactFeatureCard
            key={feature.category}
            feature={feature}
          />
        ))}
      </div>

      {/* Impact Stats */}
      <div className="w-full max-w-4xl mx-auto mt-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight mb-4">
            Real Impact, Real Numbers
          </h2>
          <p className="text-muted-foreground text-lg">
            Join the Kapes mission: by 2030 we aim to transform school uniforms worldwide into a force for positive change
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
            <div className="text-4xl font-light text-primary mb-2">12,000+</div>
            <div className="text-muted-foreground">School meals funded</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
            <div className="text-4xl font-light text-primary mb-2">85%</div>
            <div className="text-muted-foreground">Reduction in uniform waste</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
            <div className="text-4xl font-light text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Free uniforms donated</div>
          </div>
        </div>
      </div>
    </section>
  )
}
