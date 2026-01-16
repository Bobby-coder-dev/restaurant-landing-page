import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Salgaderia Maranato | Authentic Brazilian Cuisine",
  description:
    "Handcrafted Brazilian salgados, traditional recipes, and homemade cakes. Experience the authentic flavors of Brazil at Salgaderia Maranato.",
  keywords: ["Brazilian restaurant", "salgados", "coxinha", "Brazilian food", "Brazilian cakes"],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#4A3627",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
