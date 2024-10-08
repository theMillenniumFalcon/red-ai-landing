import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/sections/navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stack AI · No-Code Platform for Enterprise AI',
  description: 'Stack AI is the fastest way to build AI applications, automations, workflows. Skyrocket productivity by integrating LLMs with your data sources. Build co-pilots, assistants, chatbots, forms, and APIs, without code.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <script async src="https://cdn.splitbee.io/sb.js" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}