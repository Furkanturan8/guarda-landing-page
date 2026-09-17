import type { Dictionary } from "@/lib/i18n/dictionaries/tr"
import { DEMO_URL } from "@/lib/constants"
import { Eyebrow } from "@/components/eyebrow"

export function ComparisonSection({ dict }: { dict: Dictionary["comparison"] }) {
  return (
    <section className="py-24 border-t border-neutral-200 bg-neutral-50" id="karsilastirma">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Eyebrow>{dict.badge}</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">{dict.title}</h2>
          <p className="mt-3 text-sm text-neutral-600">{dict.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border-2 border-emerald-700 p-8 shadow-md flex flex-col justify-between relative">
            <div className="absolute -top-3.5 left-8 bg-emerald-700 text-white font-mono text-[11px] font-semibold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
              {dict.free.badgeTop}
            </div>
            <div>
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-bold text-neutral-950">{dict.free.name}</h3>
                <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {dict.free.priceBadge}
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-neutral-950">{dict.free.price}</span>
                <span className="text-xs text-neutral-500 font-mono">{dict.free.priceNote}</span>
              </div>
              <p className="text-xs text-neutral-600 mb-6 leading-relaxed">{dict.free.description}</p>
              <ul className="space-y-3.5 text-xs text-neutral-700">
                {dict.free.includedFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
                {dict.free.excludedFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-neutral-500">
                    <span>✕</span>
                    <span className="line-through">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-100">
              <a
                className="w-full inline-flex items-center justify-center text-xs font-semibold py-3 px-4 rounded-full bg-emerald-700 text-white hover:bg-emerald-800 transition-colors shadow-sm"
                href={DEMO_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                {dict.free.cta}
              </a>
            </div>
          </div>

          <div className="bg-neutral-950 text-white rounded-3xl border border-neutral-800 p-8 flex flex-col justify-between relative shadow-xl">
            <div className="absolute -top-3.5 left-8 bg-pop text-neutral-950 font-mono text-[11px] font-semibold px-3 py-0.5 rounded-full uppercase tracking-wider">
              {dict.premium.badgeTop}
            </div>
            <div>
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{dict.premium.name}</h3>
                <span className="text-xs font-mono text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded">
                  {dict.premium.priceBadge}
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold text-white">{dict.premium.price}</span>
                <span className="text-xs text-neutral-400 font-mono">{dict.premium.priceNote}</span>
              </div>
              <p className="text-xs text-neutral-400 mb-6 leading-relaxed">{dict.premium.description}</p>
              <ul className="space-y-3.5 text-xs text-neutral-300">
                {dict.premium.includedFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-800">
              <a
                className="w-full inline-flex items-center justify-center text-xs font-semibold py-3 px-4 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700 hover:bg-neutral-700 hover:text-white transition-colors"
                href="#premium"
              >
                {dict.premium.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
