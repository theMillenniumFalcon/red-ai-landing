"use client"

import React, { forwardRef } from "react"
import { cn } from "@/utils/cn"

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SectionContainer = forwardRef<HTMLDivElement, SectionContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section ref={ref} className={cn("py-28", className)} {...props}>
        {children}
      </section>
    )
  },
)

SectionContainer.displayName = "SectionContainer"