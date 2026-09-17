import type { Dictionary } from "@/lib/i18n/dictionaries/tr"
import { Reveal } from "@/components/reveal"
import { Eyebrow } from "@/components/eyebrow"
import { ProductShowcaseCard } from "@/components/home/product-showcase-card"
import { CapabilityCard } from "@/components/home/capability-card"
import { ExtensionSpotlight } from "@/components/home/extension-spotlight"

const CAPABILITY_ICONS = [
  <svg key="tag" aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <circle cx="7" cy="7" r="1.5" />
  </svg>,
  <svg key="cmd" aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24">
    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
  </svg>,
  <svg key="offline" aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24">
    <line x1="22" x2="2" y1="12" y2="12" />
    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    <line x1="6" x2="6.01" y1="16" y2="16" />
    <line x1="10" x2="10.01" y1="16" y2="16" />
  </svg>,
]

export function FeaturesGridSection({
  dict,
  extensionDict,
  images,
}: {
  dict: Dictionary["features"]
  extensionDict: Dictionary["extension"]
  images: Dictionary["images"]
}) {
  return (
    <section className="py-24 border-t border-neutral-200 bg-neutral-50" id="ozellikler">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <Eyebrow className="mb-3" dot tone="accent">
                {dict.badge}
              </Eyebrow>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl max-w-xl">
                {dict.title}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-600 max-w-md md:pb-1">{dict.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger">
          {dict.products.map((product) => (
            <ProductShowcaseCard
              key={product.path}
              description={product.description}
              eyebrow={product.eyebrow}
              imageAlt={product.imageAlt}
              imageSrc={images[product.imageKey]}
              path={product.path}
              title={product.title}
            />
          ))}
        </div>

        <ExtensionSpotlight dict={extensionDict} />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 stagger">
          {dict.capabilities.map((capability, i) => (
            <CapabilityCard
              key={capability.title}
              dark={i === 2}
              description={capability.description}
              icon={CAPABILITY_ICONS[i]}
              stats={"stats" in capability ? capability.stats : undefined}
              title={capability.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
