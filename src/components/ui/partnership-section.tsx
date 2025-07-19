"use client"

import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
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
    <section className="flex flex-col items-center gap-10 py-10">
      <div className="space-y-7 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-medium md:text-5xl">{title}</h1>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        
        <Button asChild variant="outline" className="rounded-xl px-6 py-3 font-medium hover:scale-105 transition-smooth">
          <Link to="/resources#quiz-result">
            Find Your Perfect Tier
          </Link>
        </Button>
      </div>

      <div className="grid w-full max-w-7xl gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier) => (
          <PartnershipTierCard
            key={tier.name}
            tier={tier}
          />
        ))}
      </div>
    </section>
  )
}