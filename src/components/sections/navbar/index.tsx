"use client"

import React from "react"
import { Logo } from "@/components/ui/logo"
import { 
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation"
import { ViewContainer } from "@/components/layouts/viewContainer"
import { cn } from "@/utils/cn"

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
        <NavigationMenuLink asChild>
            <a
                ref={ref}
                className={cn(
                    'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-100 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                    className,
                )}
                {...props}>
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground text-neutral-500">
                    {children}
                </p>
            </a>
        </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = "ListItem"

const SolutionOptions = [
    {
      title: 'Enterprise',
      href: '',
      description: 'Enhance enterprise productivity with cutting-edge solutions.',
    },
    {
      title: 'SMB',
      href: '',
      description: 'Optimize operations with tailored solutions for small and medium-sized businesses.',
    },
    {
      title: 'Startups',
      href: '',
      description: 'Fuel startup growth with specialized solutions for unique challenges.',
    },
    {
      title: 'AI Assistants',
      href: '',
      description: 'Experience the power of AI assistants for streamlined tasks and improved efficiency.',
    },
    {
      title: 'Workflow Automation',
      href: '',
      description: 'Optimize workflows with automation solutions for simplicity and speed.',
    },
    {
      title: 'Chatbots',
      href: '',
      description: 'Engage users seamlessly with intelligent chatbots for enhanced experiences.',
    },
    {
      title: 'Healthcare',
      href: '',
      description: 'Revolutionize healthcare delivery with solutions improving patient care.',
    },
    {
      title: 'Education',
      href: '',
      description: 'Transform education through innovative solutions for interactive learning.',
    },
    {
      title: 'Manufacturing and Logistics',
      href: '',
      description: 'Optimize manufacturing and logistics with solutions for efficiency.',
    },
]

export const Navbar: React.FunctionComponent = () => {
    return (
        <nav className="navbar-section py-6">
            <ViewContainer className="flex flex-row items-center justify-between">
                <div className="logo-wrapper">
                    <Logo />
                </div>
                <NavigationMenu className="max-lg:hidden">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-white">
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {SolutionOptions.map((option) => (
                                        <ListItem
                                            key={option.title}
                                            title={option.title}
                                            href={option.href}>
                                            {option.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        {['Pricing', 'Docs', 'Blog', 'Discord', 'Talk to us'].map(
                            (option: string, index: number) => (
                                <NavigationMenuItem key={index}>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {option}
                                </NavigationMenuLink>
                                </NavigationMenuItem>
                            ),
                        )}
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="lg:hidden">

                </div>
            </ViewContainer>
        </nav>
    )
}