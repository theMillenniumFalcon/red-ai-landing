"use client"

import { HeroSection } from "@/components/sections/hero"

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-8 max-md:gap-0">
      <HeroSection />
    </div>
  )
}
