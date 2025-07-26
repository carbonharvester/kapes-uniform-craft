"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { PartnershipQuizModal } from "@/components/PartnershipQuizModal"
import { PartnershipTierCard, type PartnershipTier } from "@/components/ui/partnership-tier-card"

interface PartnershipSectionProps {
  title: string
  subtitle: string
  tiers: PartnershipTier[]
}

export function PartnershipSection({
  title,
  subtitle,
  tiers,
}: PartnershipSectionProps) {
  return (
    <section className="flex flex-col items-center gap-10 py-10" style={{ backgroundColor: 'hsl(var(--background-light-warm))' }}>
      <div className="space-y-7 text-center">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-light tracking-tight leading-tight">{title}</h1>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        
        <div className="relative z-10">
          <Button 
            onClick={() => {
              document.dispatchEvent(new CustomEvent('openPartnershipQuiz'));
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

      {tiers.length > 1 ? (
        <div className="grid w-full max-w-7xl gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-8">
          {tiers.map((tier) => (
            <PartnershipTierCard
              key={tier.name}
              tier={tier}
            />
          ))}
        </div>
      ) : (
        <div className="max-w-md mx-auto px-4">
          <PartnershipTierCard tier={tiers[0]} />
        </div>
      )}
      <PartnershipQuizModal />
    </section>
  )
}