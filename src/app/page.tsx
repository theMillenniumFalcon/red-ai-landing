"use client"

import { HeroSection } from "@/components/sections/hero"
import { BasicFeatureSection } from "@/components/sections/basicFeatures"
import { FeaturesBentoSection } from "@/components/sections/featuresBento"
import { HowToUseSection } from "@/components/sections/howToUse"

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-8 max-md:gap-0">
      <HeroSection />
      <BasicFeatureSection />
      <FeaturesBentoSection />
      <HowToUseSection />   
    </div>
  )
}
