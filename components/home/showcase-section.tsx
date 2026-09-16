import type { Dictionary } from "@/lib/i18n/dictionaries/tr"
import { Reveal } from "@/components/reveal"
import { ShowcaseTabs } from "@/components/home/showcase-tabs"

export function ShowcaseSection({
  dict,
  images,
}: {
  dict: Dictionary["showcase"]
  images: Dictionary["images"]
}) {
  return (
    <section className="py-24 border-t border-neutral-200 bg-white" id="ekranlar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-600 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full">
              {dict.badge}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">{dict.title}</h2>
            <p className="mt-3 text-sm text-neutral-600">{dict.description}</p>
          </div>
        </Reveal>
        <ShowcaseTabs dict={dict} images={images} />
      </div>
    </section>
  )
}
