"use client"

import { useState } from "react"
import type { Locale } from "@/lib/i18n/types"
import { LanguageSwitcher } from "@/components/language-switcher"

export function MobileNav({
  links,
  locale,
}: {
  links: { key: string; label: string; href: string }[]
  locale: Locale
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        aria-expanded={open}
        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 transition-colors"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        {open ? (
          <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-16 border-b border-neutral-200 bg-white/95 backdrop-blur-md shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col text-sm font-medium text-neutral-700">
            {links.map((link) => (
              <a
                key={link.key}
                className="px-2 py-3 rounded-lg hover:bg-neutral-50 hover:text-neutral-950 transition-colors"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="max-w-7xl mx-auto px-4 pb-4 pt-3 border-t border-neutral-100">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      )}
    </div>
  )
}
