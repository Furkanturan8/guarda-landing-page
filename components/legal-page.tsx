import Link from "next/link"
import type { Dictionary } from "@/lib/i18n/dictionaries/tr"
import type { Locale } from "@/lib/i18n/types"
import { homePath } from "@/lib/routes"

export function LegalPage({
  locale,
  backToHomeLabel,
  content,
}: {
  locale: Locale
  backToHomeLabel: string
  content: Dictionary["legal"]["privacy"] | Dictionary["legal"]["copyright"]
}) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <Link className="text-sm text-neutral-500 hover:text-neutral-950 transition-colors" href={homePath(locale)}>
        {backToHomeLabel}
      </Link>
      <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">{content.title}</h1>
      <p className="mt-2 text-xs font-mono text-neutral-500">
        {content.updatedLabel} {content.updatedDate}
      </p>
      <div className="mt-10 space-y-10">
        {content.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold text-neutral-950 mb-3">{section.heading}</h2>
            <div className="space-y-3">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm text-neutral-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
