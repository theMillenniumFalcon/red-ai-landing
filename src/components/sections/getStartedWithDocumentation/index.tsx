"use client"

import React, { ReactNode } from "react"
import Image from "next/image"
import { Blocks, Code, Sparkles, Workflow } from "lucide-react"
import { SectionContainer } from "@/components/layouts/sectionContainer"
import { ViewContainer } from "@/components/layouts/viewContainer"
import { ScreenMockup } from "@/components/layouts/screenMockup"
import { Button } from "@/components/ui/button"
import { CTAContainer, CTADescription, CTAHeadline, CTAList } from "@/components/ui/cta"
import { IconContentWrapper, IconContentWrapperDescription, IconContentWrapperHeadline } from "@/components/ui/iconContentWrapper"

type DocsContentBlockType = {
  icon: ReactNode
  headline: string
  description: string
}

const DocsContentBlocks: DocsContentBlockType[] = [
  {
    icon: <Sparkles className="w-4 h-4" />,
    headline: "Get Inspiration",
    description: "Embark on a journey of exploration with Stack AI.",
  },
  {
    icon: <Blocks className="w-4 h-4" />,
    headline: "Builder guide",
    description:
      "Unlock the full potential of your projects with our comprehensive Builder Guide.",
  },
  {
    icon: <Workflow className="w-4 h-4" />,
    headline: "Integrations",
    description: "Seamlessly connect and enhance your workflows with Stack AI.",
  },
  {
    icon: <Code className="w-4 h-4" />,
    headline: "Code",
    description:
      "Immerse yourself in the heart of development with Stack AI's Code capabilities.",
  },
]

export const GetStartedWithDocumentationSection = () => {
  return (
    <SectionContainer id="get-started-with-docs">
      <ViewContainer className="flex flex-row items-center justify-center gap-24">
        <ScreenMockup className="-ml-[600px]">
          <Image
            src="/media/docs-demo.svg"
            alt="get-started-with-docs-example-screenshot"
            priority
            className="rounded-xl border"
            width={900}
            height={500}
          />
        </ScreenMockup>
        <div className="docs-section-content-wrapper max-lg:flex max-lg:flex-col max-lg:items-center">
          <CTAContainer>
            <CTAHeadline className="lg:w-full">
              Dive into Our Comprehensive Documentation
            </CTAHeadline>
            <CTADescription className="lg:w-[60ch]">
              Discover the vast capabilities of Stack AI by exploring our
              detailed documentation. From getting started guides to advanced
              features, our documentation is your go-to resource for seamless
              integration and harnessing the power of our platform. <br />
              <br />
              Empower your journey with Stack AI - the key to unlocking
              limitless possibilities in AI innovation!
            </CTADescription>
            <CTAList>
              <Button withArrow variant="gloss" size="lg">
                Explore Stack AI Docs
              </Button>
              <Button withArrow variant="secondary" size="lg">
                Contact Us
              </Button>
            </CTAList>
          </CTAContainer>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 mt-12 gap-x-12">
            {DocsContentBlocks.map(
              (block: DocsContentBlockType, index: number) => {
                return (
                  <IconContentWrapper
                    key={index}
                    icon={block.icon}
                    className="lg:w-[340px]">
                    <IconContentWrapperHeadline>
                      {block.headline}
                    </IconContentWrapperHeadline>
                    <IconContentWrapperDescription>
                      {block.description}
                    </IconContentWrapperDescription>
                  </IconContentWrapper>
                )
              },
            )}
          </div>
        </div>
      </ViewContainer>
    </SectionContainer>
  )
}