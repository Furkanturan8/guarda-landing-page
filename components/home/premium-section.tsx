import type { Dictionary } from "@/lib/i18n/dictionaries/tr"
import { Reveal } from "@/components/reveal"
import { LockedFeatureCard } from "@/components/home/locked-feature-card"
import { WaitlistForm } from "@/components/home/waitlist-form"

export function PremiumSection({ dict }: { dict: Dictionary["premium"] }) {
  return (
    <section className="py-24 bg-white border-t border-neutral-200" id="premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-700 mb-3">
              <span>🔒</span>
              <span>{dict.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">{dict.title}</h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600">{dict.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
          {dict.cards.map((card) => (
            <LockedFeatureCard
              key={card.title}
              comingSoonLabel={dict.comingSoonLabel}
              description={card.description}
              footer={card.footer}
              icon={card.icon}
              title={card.title}
            />
          ))}
        </div>

        <Reveal>
          <div className="mt-12 p-8 rounded-2xl border border-neutral-200 bg-neutral-100/60 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-bold text-neutral-900">{dict.waitlist.title}</h4>
              <p className="text-xs text-neutral-600 mt-1">{dict.waitlist.description}</p>
            </div>
            <WaitlistForm dict={dict.waitlist} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
