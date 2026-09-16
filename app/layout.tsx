import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Inter, JetBrains_Mono } from "next/font/google"
import { tr } from "@/lib/i18n/dictionaries/tr"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
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
    <html lang="tr" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-neutral-50 text-neutral-900 selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  )
}
