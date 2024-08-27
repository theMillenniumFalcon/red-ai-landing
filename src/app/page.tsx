"use client"

import { HeroSection } from "@/components/sections/hero"
import { BasicFeatureSection } from "@/components/sections/basicFeatures"
import { FeaturesBento } from "@/components/sections/featuresBento"

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-8 max-md:gap-0">
      <HeroSection />
      <BasicFeatureSection />
      <FeaturesBento />
    </div>
  )
}
