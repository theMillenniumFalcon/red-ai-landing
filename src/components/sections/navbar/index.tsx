"use client"

import React from "react"
import { Logo } from "@/components/ui/logo"
import { ViewContainer } from "@/components/layouts/viewContainer"

export const Navbar: React.FunctionComponent = () => {
    return (
        <nav className="navbar-section py-6">
            <ViewContainer className="flex flex-row items-center justify-between">
            <div className="logo-wrapper">
                <Logo />
            </div>
            </ViewContainer>
        </nav>
    )
}