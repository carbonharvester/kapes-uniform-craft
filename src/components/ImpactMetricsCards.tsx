
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Heart, TrendingUp } from "lucide-react";

interface MetricCardProps {
  icon: React.ElementType;
  title: string;
  value: number;
  unit: string;
  description: string;
  trend: number;
  colorScheme: 'green' | 'blue' | 'orange';
  delay?: number;
}

const MetricCard = ({ icon: Icon, title, value, unit, description, trend, colorScheme, delay = 0 }: MetricCardProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let currentValue = 0;
      
      const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= value) {
          setAnimatedValue(value);
          clearInterval(counter);
        } else {
          setAnimatedValue(Math.floor(currentValue));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  const colorClasses = {
    green: {
      bg: 'bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/30 dark:to-green-900/20',
      border: 'border-green-200/50 dark:border-green-800/50',
      iconBg: 'bg-gradient-to-br from-green-500 to-green-600',
      text: 'text-green-900 dark:text-green-100',
      accent: 'text-green-600 dark:text-green-400'
    },
    blue: {
      bg: 'bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20',
      border: 'border-blue-200/50 dark:border-blue-800/50',
      iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
      text: 'text-blue-900 dark:text-blue-100',
      accent: 'text-blue-600 dark:text-blue-400'
    },
    orange: {
      bg: 'bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-orange-900/20',
      border: 'border-orange-200/50 dark:border-orange-800/50',
      iconBg: 'bg-gradient-to-br from-orange-500 to-orange-600',
      text: 'text-orange-900 dark:text-orange-100',
      accent: 'text-orange-600 dark:text-orange-400'
    }
  };

  const colors = colorClasses[colorScheme];

  return (
    <Card className={`${colors.bg} ${colors.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}>
      <CardContent className="p-6">
        {/* Icon */}
        <div className={`w-16 h-16 ${colors.iconBg} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Metric Value */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2 mb-2">
            <span className={`text-4xl font-bold ${colors.text} tabular-nums`}>
              {animatedValue.toLocaleString()}
            </span>
            <span className={`text-lg font-medium ${colors.accent}`}>
              {unit}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className={`w-4 h-4 ${colors.accent}`} />
            <span className={`text-sm font-medium ${colors.accent}`}>
              +{trend}% this month
            </span>
          </div>
        </div>

        {/* Title and Description */}
        <div>
          <h3 className={`text-xl font-semibold mb-2 ${colors.text}`}>
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export const ImpactMetricsCards = () => {
  const metrics = [
    {
      icon: Leaf,
      title: "Carbon Savings",
      value: 2847,
      unit: "kg CO₂",
      description: "Carbon emissions reduced through our sustainable uniform program",
      trend: 12.5,
      colorScheme: 'green' as const
    },
    {
      icon: Recycle,
      title: "Uniform Recycling",
      value: 1256,
      unit: "items",
      description: "Uniforms recycled and given new life through our takeback scheme",
      trend: 8.3,
      colorScheme: 'blue' as const
    },
    {
      icon: Heart,
      title: "Meals Donated",
      value: 3421,
      unit: "meals",
      description: "Nutritious school meals funded in African communities",
      trend: 15.7,
      colorScheme: 'orange' as const
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-4">
            Real Impact • <span className="text-primary">Real Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the measurable difference your school community is making through our sustainable uniform program
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.title}
              {...metric}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
