"use client"

import React, { forwardRef } from "react"
import Image from "next/image"
import { cn } from "@/utils/cn"

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Logo = forwardRef<HTMLImageElement, LogoProps>(({ className, ...args }, ref) => {
    return (
        <Image
            ref={ref}
            src={"/media/logo2.svg"}
            className={cn("", className)}
            priority
            quality={100}
            alt="logo"
            width={100 as unknown as any}
            height={24 as unknown as any}
            {...args}
        />
    )
  }
)

Logo.displayName = "Logo"