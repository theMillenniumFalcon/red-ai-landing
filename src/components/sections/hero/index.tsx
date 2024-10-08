"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { ViewContainer } from "@/components/layouts/viewContainer"
import { SectionContainer } from "@/components/layouts/sectionContainer"
import { Button } from "@/components/ui/button"
import { CTAList } from "@/components/ui/cta"

export const HeroSection = () => {
  const [tiltDegree, setTiltDegree] = useState(30)

  useEffect(() => {
    const handleScroll = () => {
        const scrollY = window.scrollY
        // Decrease tilt degree based on scroll position
        const newTiltDegree = Math.max(0, 45 - scrollY * 0.1)
        setTiltDegree(newTiltDegree)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <SectionContainer id="hero" className="pb-12">
      <ViewContainer>
        <div
          className="announcement-cta-wrapper pl-3 pr-1 py-1 text-sm bg-neutral-100 hover:bg-neutral-200/60 border w-fit rounded-full flex flex-row items-center gap-2 cursor-pointer mx-auto mb-8"
          onClick={() =>
            window.open('')
          }>
          {'Build for Enterprises using Stack AI'}
          <div className="flex flex-row px-3 py-1 bg-blue-500 text-white w-fit rounded-full text-xs">
            new
          </div>
        </div>
        <h1 className="hero-headline font-bold text-center text-6xl max-lg:text-4xl max-md:text-3xl">
          The No-Code <br />
          Generative AI Platform
        </h1>
        <p className="text-center text-neutral-500 mt-6">
          Deploy custom AI Assistants, Chatbots, and Workflow Automations
          <br />
          to make your company 10x more efficient.
        </p>
        <CTAList className="justify-center mt-12 max-md:mt-6">
          <Button size="lg" variant="gloss" withArrow className="">
            Start Building for free
          </Button>
          <Button
            size="lg"
            variant="secondary"
            withArrow
            className="max-md:hidden">
            Get a Demo
          </Button>
        </CTAList>
        <div
          className="hero-dashboard-image-wrapper -mt-8"
          style={{
            perspective: '1000px',
          }}>
          <Image
            src={'/media/hero-builder-image.svg'}
            alt="dashboard-demo-image"
            width={'1300'}
            height={'800'}
            className="block w-fit mx-auto max-lg:w-full max-md:mt-12"
            style={{
              transform: `rotateX(${tiltDegree}deg)`,
              transition: 'transform 0.3s ease-out',
            }}
            priority
          />
        </div>
      </ViewContainer>
    </SectionContainer>
  )
}