import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Manrope, JetBrains_Mono } from "next/font/google"
import { tr } from "@/lib/i18n/dictionaries/tr"
import "./globals.css"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: tr.meta.title,
  description: tr.meta.description,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      className={`${manrope.variable} ${jetbrainsMono.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
      lang="tr"
    >
      <body className="bg-neutral-50 text-neutral-900 selection:bg-pop selection:text-neutral-950">
        {children}
      </body>
    </html>
  )
}
