import Link from "next/link"
import type { Locale } from "@/lib/i18n/types"

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const target = locale === "tr" ? { href: "/en", label: "EN" } : { href: "/", label: "TR" }

  return (
    <Link
      className="inline-flex items-center justify-center text-xs font-mono font-medium px-2.5 py-1.5 rounded-md border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50 transition-colors"
      href={target.href}
    >
      {target.label}
    </Link>
  )
}
