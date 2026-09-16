import type { Dictionary } from "@/lib/i18n/dictionaries/tr"
import type { Locale } from "@/lib/i18n/types"
import { DEMO_URL } from "@/lib/constants"
import { LanguageSwitcher } from "@/components/language-switcher"

const NAV_ANCHORS = ["nasilCalisir", "ozellikler", "premium", "karsilastirma", "ekranlar"] as const

const ANCHOR_HREFS: Record<(typeof NAV_ANCHORS)[number], string> = {
  nasilCalisir: "#nasil-calisir",
  ozellikler: "#ozellikler",
  premium: "#premium",
  karsilastirma: "#karsilastirma",
  ekranlar: "#ekranlar",
}

export function SiteHeader({ dict, locale }: { dict: Dictionary["nav"]; locale: Locale }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a className="flex items-center gap-2 group" href="#">
            <span className="text-xl font-bold tracking-tight text-neutral-950 font-sans">
              {dict.brandName}
            </span>
            <span className="text-[11px] font-mono tracking-wider px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-500 border border-neutral-200">
              {dict.brandBadge}
            </span>
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600">
          {NAV_ANCHORS.map((key) => (
            <a key={key} className="hover:text-neutral-950 transition-colors" href={ANCHOR_HREFS[key]}>
              {dict.links[key]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-600 font-mono bg-neutral-100/80 px-2.5 py-1 rounded-full border border-neutral-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block dot-live"></span>
            <span>{dict.freeModeBadge}</span>
          </div>
          <LanguageSwitcher locale={locale} />
          <a
            className="inline-flex items-center justify-center text-xs font-semibold px-4 py-2 rounded-full bg-emerald-700 text-white hover:bg-emerald-800 transition-all shadow-sm hover:shadow active:scale-[0.98]"
            href={DEMO_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            {dict.demoCta}
          </a>
        </div>
      </div>
    </header>
  )
}
