"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
  icon?: React.ComponentType<any>
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval, isAutoPlay])

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index)
    setProgress(0)
    setIsAutoPlay(false)
  }

  return (
    <div className={cn("py-16 px-4", className)}>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-medium mb-12 text-center text-heading">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="order-2 md:order-1 space-y-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 md:gap-6 cursor-pointer hover:bg-muted/30 rounded-lg p-3 transition-all duration-300"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => handleFeatureClick(index)}
                >
                  <motion.div
                    className={cn(
                      "w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                      index === currentFeature
                        ? "bg-primary border-primary text-primary-foreground scale-110 shadow-lg"
                        : "bg-muted border-muted-foreground text-muted-foreground",
                    )}
                  >
                    {IconComponent ? (
                      <IconComponent className="w-6 h-6 md:w-7 md:h-7" />
                    ) : index <= currentFeature ? (
                      <span className="text-lg font-bold">✓</span>
                    ) : (
                      <span className="text-lg font-semibold">{index + 1}</span>
                    )}
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-medium text-heading mb-1">
                      {feature.title || feature.step}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {feature.content}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl shadow-lg",
              "border border-border/50"
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-lg overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover transition-transform transform"
                      />
                      
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}