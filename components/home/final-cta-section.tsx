import type { Dictionary } from "@/lib/i18n/dictionaries/tr"
import { DEMO_URL } from "@/lib/constants"
import { Reveal } from "@/components/reveal"
import { Eyebrow } from "@/components/eyebrow"

export function FinalCtaSection({ dict }: { dict: Dictionary["finalCta"] }) {
  return (
    <section className="py-20 border-t border-neutral-200 bg-neutral-950 text-white">
      <Reveal>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Eyebrow className="mb-6" dot tone="dark">
            {dict.badge}
          </Eyebrow>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto">
            {dict.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">{dict.description}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-semibold px-8 py-3.5 rounded-full bg-pop text-neutral-950 hover:bg-pop/90 transition-all shadow-lg active:scale-95"
              href={DEMO_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              {dict.cta}
            </a>
          </div>
          <div className="mt-8 font-mono text-xs text-neutral-500">{dict.footerNote}</div>
        </div>
      </Reveal>
    </section>
  )
}
