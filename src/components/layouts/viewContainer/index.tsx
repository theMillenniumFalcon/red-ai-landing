"use client"

import React, { forwardRef } from "react"
import { cn } from "@/utils/cn"

export interface ViewContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ViewContainer = forwardRef<HTMLDivElement, ViewContainerProps>(({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'box-border mx-auto',
          'w-[1100px] max-2xl:w-[1200px] max-xl:w-[920px] max-lg:w-[680px] max-md:w-[440px] max-sm:w-[340px]',
          className,
        )}
        {...props}>
        {children}
      </div>
    )
  },
)

ViewContainer.displayName = 'ViewContainer'