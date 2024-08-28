"use client"

import Image from "next/image"
import { SectionContainer } from "@/components/layouts/sectionContainer"
import { ViewContainer } from "@/components/layouts/viewContainer"
import { Button } from "@/components/ui/button"
import { CTAContainer, CTADescription, CTAHeadline, CTAList } from "@/components/ui/cta"

const CompanyLogoList = [
  "azure",
  "google-cloud",
  "meta",
  "aws",
  "openai",
  "mistral-ai",
  "mosaic",
  "anthropic",
]

export const ModelsUsedSection = () => {
  return (
    <SectionContainer id="models-from-companies">
      <ViewContainer className="flex flex-row items-center justify-between max-xl:flex-col max-xl:items-start max-xl:gap-12">
        <CTAContainer>
          <CTAHeadline>Access State-of-the-Art AI Models</CTAHeadline>
          <CTADescription>
            Unlock unparalleled capabilities with seamless access to
            state-of-the-art AI models. Elevate your projects and applications
            by harnessing the latest advancements in artificial intelligence.
          </CTADescription>
          <CTAList>
            <Button
              size="lg"
              withArrow
              variant="gloss"
              onClick={() =>
                window.open("")
              }>
              Build for enterprise
            </Button>
          </CTAList>
        </CTAContainer>
        <div className="companies-logo-list-wrapper grid grid-cols-4 w-fit gap-12 items-center justify-center max-lg:w-fit max-lg:mx-auto max-lg:mt-6 max-md:grid-cols-2">
          {CompanyLogoList.map((logo: string, index: number) => {
            return (
              <Image
                src={`/media/company-logos/${logo}.svg`}
                alt={logo}
                key={index}
                width={logo === "aws" ? 80 : 120}
                height={60}
                className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
              />
            )
          })}
        </div>
      </ViewContainer>
    </SectionContainer>
  )
}