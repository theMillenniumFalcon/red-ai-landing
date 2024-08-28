"use client"

import React from "react"
import Image from "next/image"
import { SectionContainer } from "@/components/layouts/sectionContainer"
import { ViewContainer } from "@/components/layouts/viewContainer"
import { Button } from "@/components/ui/button"
import { CTAContainer, CTADescription, CTAHeadline, CTAList } from "@/components/ui/cta"
import { cn } from "@/utils/cn"

export interface TestimonialCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  fullName: string
  avatar: string
  companyLogo: string
  designation: string
  content: string
}

const TestimonialList: TestimonialCardProps[] = [
  {
    content: "Stack AI has been an invaluable resource in piloting and collaborating around complex LLM projects. The support from the leadership team has also helped accelerate development.",
    designation: "CEO",
    fullName: "Michael Carvin",
    avatar: "https://www.stack-ai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmichael-carvin.b9447e6f.jpeg&w=256&q=75",
    companyLogo: "https://www.stack-ai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsmartasset.09cc537b.png&w=256&q=75",
  },
  {
    content: "Since we began using Stack AI, the productivity gains have been remarkable. The ability to effortlessly create complex logic has been a game-changer for us.",
    designation: "CEO",
    fullName: "Yarden Shaked",
    avatar: "https://www.stack-ai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyarden-shaked.a3ab365d.jpeg&w=256&q=75",
    companyLogo: "https://www.stack-ai.com/_next/static/media/varos.b925b0ee.svg",
  },
  {
    content: "Potential of Gen AI in Education is huge, and Stack AI bridges the technical gap. We are powering entrepreneurial courses with Stack AI and students are loving it!",
    designation: "Gen AI Product Lead",
    fullName: "Doug Williams",
    avatar: "https://www.stack-ai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdoug-williams.c89d0414.jpeg&w=256&q=75",
    companyLogo: "https://www.stack-ai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmartin-trust-center.52d60188.png&w=256&q=75",
  },
  {
    content: "“We are deeply impressed with the Stack AI environment and have been utilizing it in various initiatives. Since October last year, at Yamanashi University, we have been providing a chat function created with Stack AI for internal use, ensuring a safe and secure environment for faculty and staff. ”",
    designation: "Professor",
    fullName: "Masanori Hanawa",
    avatar: "https://www.stack-ai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmasanori-hanawa.d0f901f1.jpeg&w=256&q=75",
    companyLogo: "https://www.stack-ai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Funiversity-of-yamanashi-letters.c785e37b.jpeg&w=256&q=75",
  },
  {
    content: "Stack AI's support was instrumental in launching our first AI use cases in the platform, marking a significant milestone in our journey towards embracing Generative AI.",
    designation: "CEO",
    fullName: "Vicente Zavarce",
    avatar: "https://www.stack-ai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvicente-zavarce.f0d96789.avif&w=256&q=75",
    companyLogo: "https://www.stack-ai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyummy.04be4916.png&w=256&q=75",
  },
  {
    content: "Stack AI is in a league of their own in terms of LLM workflow building capabilities and deployment options. StackAI has literally been a superpower for our team!",
    designation: "President",
    fullName: "Matthew Kahn",
    avatar: "https://www.stack-ai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmatthew-kahn.5bb3f26e.jpeg&w=256&q=75",
    companyLogo: "https://www.stack-ai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthe-institutes.fbbf1b96.jpeg&w=256&q=75",
  },
  {
    content: "Using StackAI has been a game-changer. Simple to use, effective results. Our team at Truewind is genuinely impressed. Highly recommended.",
    designation: "CTO",
    fullName: "Tennison Chan",
    avatar: "https://www.stack-ai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftennison-chan.facd598c.jpeg&w=256&q=75",
    companyLogo: "https://www.stack-ai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftruewind.c6deb187.png&w=256&q=75",
  },
]

export const TestimonialSection = () => {
  return (
    <SectionContainer id="testimonials" className="relative">
      <ViewContainer className="flex flex-row items-start gap-12 max-lg:grid max-lg:items-center">
        <div className="testimonials-top-layer grid gap-44 items-start justify-around max-lg:flex-col max-xl:items-start max-xl:gap-30 lg:sticky lg:top-36 max-lg:w-fit max-lg:mx-auto">
          <CTAContainer className="">
            <CTAHeadline>We are working with amazing companies</CTAHeadline>
            <CTADescription>
              Discover the success stories of our collaborative journey with
              outstanding companies. Hear firsthand experiences from our valued
              partners who have benefited from the exceptional services and
              solutions we provide.
            </CTADescription>
            <CTAList>
              <Button variant="gloss" withArrow size="lg">
                {"Start Exploring"}
              </Button>
            </CTAList>
          </CTAContainer>
          <TestimonialCard {...TestimonialList[0]} className="max-lg:hidden" />
        </div>
        <div className="grid testimonials-bottom-layer-grid-wrapper gap-x-12 gap-y-16 max-lg:w-fit max-lg:mx-auto max-lg:mt-12">
          <TestimonialCard {...TestimonialList[0]} className="lg:hidden" />
          {TestimonialList.map(
            (testimonial: TestimonialCardProps, index: number) => {
              if (index) {
                return <TestimonialCard {...testimonial} key={index} />
              }
            },
          )}
        </div>
        <CTAList className="lg:hidden">
          <Button size="lg" withArrow>
            Get a Demo
          </Button>
        </CTAList>
      </ViewContainer>
    </SectionContainer>
  )
}

const TestimonialCard = ({
  className,
  content,
  avatar,
  fullName,
  designation,
  companyLogo,
  ...args
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "testimonial-card relative border rounded-3xl py-6 px-10 max-w-[600px]",
        className,
      )}
      {...args}>
      <div className="testimonial-author-details-container flex flex-row items-center justify-between absolute -top-8">
        <div className="author-details-wrapper p-2 bg-white flex flex-row items-center gap-2">
          <Image
            src={avatar}
            alt={fullName}
            className="rounded-full"
            width={40}
            height={40}
            priority
          />
          <div className="author-name-designation-wrapper flex flex-col items-start gap-1">
            <p className="text-sm font-medium">{fullName}</p>
            <p className="text-xs font-medium text-neutral-500">
              {designation}
            </p>
          </div>
        </div>
      </div>
      <div className="testimonial-content-wrapper w-full h-full flex flex-col items-start gap-6 justify-center mt-2">
        <p className="text font-medium">{`\"${content}\"`}</p>
        <div className="author-companyLogo-wrapper w-full flex flex-row items-center justify-end">
          <Image
            src={companyLogo}
            alt="company-logo"
            width={
              fullName === "Michael Carvin" || fullName === "Tennison Chan"
                ? 100
                : 60
            }
            height={60}
          />
        </div>
      </div>
    </div>
  )
}