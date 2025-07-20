
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Sparkles, Crown, Settings } from "lucide-react"

export interface PartnershipTier {
  name: string
  features: string[]
  description: string
  cta: string
  href: string
  popular?: boolean
  highlighted?: boolean
}

interface PartnershipTierCardProps {
  tier: PartnershipTier
}

export function PartnershipTierCard({ tier }: PartnershipTierCardProps) {
  const getIconForTier = (tierName: string) => {
    switch (tierName.toLowerCase()) {
      case 'ecolaunch':
        return <Star className="w-6 h-6 text-green-600" />
      case 'sustainpro':
        return <Sparkles className="w-6 h-6 text-blue-600" />
      case 'legacyimpact':
        return <Crown className="w-6 h-6 text-purple-600" />
      case 'custom':
        return <Settings className="w-6 h-6 text-orange-600" />
      default:
        return <Star className="w-6 h-6 text-primary" />
    }
  }

  const getColorScheme = (tierName: string) => {
    switch (tierName.toLowerCase()) {
      case 'ecolaunch':
        return {
          badge: 'bg-green-100 text-green-800 border-green-200',
          header: 'bg-green-50',
          button: 'bg-green-600 hover:bg-green-700 text-white'
        }
      case 'sustainpro':
        return {
          badge: 'bg-blue-100 text-blue-800 border-blue-200',
          header: 'bg-blue-50',
          button: 'bg-blue-600 hover:bg-blue-700 text-white'
        }
      case 'legacyimpact':
        return {
          badge: 'bg-purple-100 text-purple-800 border-purple-200',
          header: 'bg-purple-50',
          button: 'bg-purple-600 hover:purple-700 text-white'
        }
      case 'custom':
        return {
          badge: 'bg-orange-100 text-orange-800 border-orange-200',
          header: 'bg-orange-50',
          button: 'bg-orange-600 hover:bg-orange-700 text-white'
        }
      default:
        return {
          badge: 'bg-gray-100 text-gray-800 border-gray-200',
          header: 'bg-gray-50',
          button: 'bg-primary hover:bg-primary/90 text-primary-foreground'
        }
    }
  }

  const colorScheme = getColorScheme(tier.name)
  
  return (
    <Card className={`h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-105 ${
      tier.highlighted ? 'ring-2 ring-primary shadow-xl scale-105' : ''
    } ${tier.popular ? 'border-primary shadow-lg' : ''}`}>
      <CardHeader className={`text-center pb-4 ${colorScheme.header} rounded-t-lg`}>
        <div className="flex items-center justify-center mb-3">
          {getIconForTier(tier.name)}
        </div>
        
        <div className="space-y-2">
          {tier.popular && (
            <Badge className="bg-primary text-primary-foreground">
              Most Popular
            </Badge>
          )}
          {tier.highlighted && (
            <Badge className={colorScheme.badge}>
              Recommended
            </Badge>
          )}
          
          <CardTitle className="text-xl font-bold">{tier.name}</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 p-6">
        <CardDescription className="text-center mb-6 text-base leading-relaxed">
          {tier.description}
        </CardDescription>
        
        <div className="space-y-3">
          {tier.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          asChild 
          className={`w-full rounded-xl font-medium transition-all duration-300 hover:scale-105 ${colorScheme.button}`}
        >
          <a href={tier.href}>
            {tier.cta}
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
