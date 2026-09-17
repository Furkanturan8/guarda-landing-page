import Link from "next/link"
import type { Locale } from "@/lib/i18n/types"
import { cn } from "@/lib/utils"
import { homePath } from "@/lib/routes"

export function LanguageSwitcher({ locale, className }: { locale: Locale; className?: string }) {
  const target = locale === "tr" ? "en" : "tr"

  return (
    <Link
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-full border border-neutral-200 text-neutral-400 hover:border-neutral-300 hover:text-neutral-500 transition-colors",
        className,
      )}
      href={homePath(target)}
    >
      <span className={locale === "tr" ? "text-neutral-950" : undefined}>TR</span>
      <span>/</span>
      <span className={locale === "en" ? "text-neutral-950" : undefined}>EN</span>
    </Link>
  )
}
