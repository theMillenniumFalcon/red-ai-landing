"use client"

import React from "react"
import Image from "next/image"
import { SectionContainer } from "@/components/layouts/sectionContainer"
import { ViewContainer } from "@/components/layouts/viewContainer"

const InvestorCompanyLogos = ["yc.webp", "soma.webp", "gradient-ventures.svg"]

export const InvestorSection = () => {
  return (
    <SectionContainer id="investors" className="py-12">
      <ViewContainer>
        <h2 className="font-semibold text-2xl text-center">
          Backed By Visionaries
        </h2>
        <div className="grid grid-cols-3 justify-center items-center mt-24 max-md:grid-cols-1 max-md:gap-12 max-md:mt-12">
          {InvestorCompanyLogos.map((logo: string, index: number) => {
            return (
              <Image
                key={index}
                src={`/media/investors/${logo}`}
                alt={logo}
                width={140}
                height={80}
                priority
                className="w-fit mx-auto grayscale hover:grayscale-0"
              />
            )
          })}
        </div>
      </ViewContainer>
    </SectionContainer>
  )
}