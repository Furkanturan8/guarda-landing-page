import Link from "next/link"
import type { Dictionary } from "@/lib/i18n/dictionaries/tr"
import type { Locale } from "@/lib/i18n/types"
import { DEMO_URL } from "@/lib/constants"
import { copyrightPath, homePath, privacyPath } from "@/lib/routes"

export function SiteFooter({
  navDict,
  footerDict,
  locale,
}: {
  navDict: Dictionary["nav"]
  footerDict: Dictionary["footer"]
  locale: Locale
}) {
  const home = homePath(locale)

  return (
    <footer className="border-t border-neutral-200 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-neutral-950">{navDict.brandName}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-600 border border-neutral-200">
                {navDict.brandBadge}
              </span>
            </div>
            <p className="text-xs text-neutral-500 mt-1 font-mono">{footerDict.tagline}</p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-600 font-medium">
            <a className="hover:text-neutral-950 transition-colors" href={`${home}#nasil-calisir`}>
              {navDict.links.nasilCalisir}
            </a>
            <a className="hover:text-neutral-950 transition-colors" href={`${home}#ozellikler`}>
              {navDict.links.ozellikler}
            </a>
            <a className="hover:text-neutral-950 transition-colors" href={`${home}#premium`}>
              {navDict.links.premium}
            </a>
            <a className="hover:text-neutral-950 transition-colors" href={`${home}#karsilastirma`}>
              {navDict.links.karsilastirma}
            </a>
            <a className="hover:text-neutral-950 transition-colors" href={DEMO_URL} target="_blank">
              {footerDict.liveDemo}
            </a>
          </div>
          <div className="text-xs text-neutral-400 font-mono">{footerDict.copyright}</div>
        </div>
        <div className="mt-6 pt-6 border-t border-neutral-100 flex flex-wrap items-center gap-4 text-xs text-neutral-500 font-medium">
          <Link className="hover:text-neutral-950 transition-colors" href={privacyPath(locale)}>
            {footerDict.privacyLabel}
          </Link>
          <Link className="hover:text-neutral-950 transition-colors" href={copyrightPath(locale)}>
            {footerDict.copyrightLabel}
          </Link>
        </div>
      </div>
    </footer>
  )
}
