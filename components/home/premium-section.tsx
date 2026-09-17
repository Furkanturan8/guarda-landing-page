import type { Dictionary } from "@/lib/i18n/dictionaries/tr"
import { Reveal } from "@/components/reveal"
import { Eyebrow } from "@/components/eyebrow"
import { LockedFeatureCard } from "@/components/home/locked-feature-card"
import { WaitlistForm } from "@/components/home/waitlist-form"

export function PremiumSection({ dict }: { dict: Dictionary["premium"] }) {
  return (
    <section className="relative py-24 bg-white border-t border-neutral-200 overflow-hidden" id="premium">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-emerald-200/30 blur-[100px] -z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-1/4 h-72 w-72 rounded-full bg-pop/25 blur-[100px] -z-0"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow className="badge-soon border-neutral-200/70 text-neutral-700 mb-3" icon="🔒">
              {dict.badge}
            </Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">{dict.title}</h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600">{dict.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
          {dict.cards.map((card, i) => (
            <LockedFeatureCard
              key={card.title}
              accent={i % 2 === 0 ? "blue" : "amber"}
              comingSoonLabel={dict.comingSoonLabel}
              description={card.description}
              footer={card.footer}
              icon={card.icon}
              title={card.title}
            />
          ))}
        </div>

        <Reveal>
          <div className="relative mt-12 max-w-3xl mx-auto">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-12 -top-6 h-16 rounded-full bg-gradient-to-r from-emerald-400/30 via-pop/30 to-emerald-400/30 blur-2xl"
            />
            <div className="relative overflow-hidden p-8 rounded-3xl border border-neutral-800 bg-neutral-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pop/20 blur-3xl"
              />
              <div className="relative">
                <h4 className="text-base font-bold text-white">{dict.waitlist.title}</h4>
                <p className="text-xs text-neutral-400 mt-1">{dict.waitlist.description}</p>
              </div>
              <div className="relative">
                <WaitlistForm dict={dict.waitlist} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
