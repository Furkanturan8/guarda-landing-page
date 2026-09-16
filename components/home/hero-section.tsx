import { Fragment } from "react"
import Image from "next/image"
import type { Dictionary } from "@/lib/i18n/dictionaries/tr"
import { DEMO_URL } from "@/lib/constants"
import { Reveal } from "@/components/reveal"

export function HeroSection({
  dict,
  images,
}: {
  dict: Dictionary["hero"]
  images: Dictionary["images"]
}) {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e4e1d8_1px,transparent_1px)] [background-size:24px_24px] opacity-60 -z-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="justify-self-center inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-700 shadow-sm mb-6">
            <span className="text-neutral-900">✦</span>
            <span>{dict.announcement.text}</span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-500 font-mono text-[11px]">
              {dict.announcement.storageLabel}
            </span>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 max-w-4xl mx-auto leading-[1.15]">
            {dict.headlineLine1} <br className="hidden sm:block" />
            <span className="relative inline-block text-emerald-800 font-extrabold">
              <span className="absolute inset-x-0 bottom-1 h-3 sm:h-4 -z-10 bg-pop/70 rounded-sm" aria-hidden="true" />
              {dict.headlineLine2}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            <span className="font-mono text-xs uppercase tracking-wider bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded mr-1">
              {dict.subtitleTag}
            </span>
            {dict.subtitleText}
          </p>
        </Reveal>

        <Reveal delay={270}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-semibold px-6 py-3 rounded-full bg-emerald-700 text-white hover:bg-emerald-800 transition-all shadow-md hover:shadow-lg active:scale-95"
              href={DEMO_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              {dict.ctaPrimary}
            </a>
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-medium px-5 py-3 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 transition-all shadow-sm"
              href="#ozellikler"
            >
              {dict.ctaSecondary}
            </a>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs font-mono text-neutral-500">
            {dict.trustIndicators.map((item, i) => (
              <Fragment key={item}>
                {i > 0 && <span className="text-neutral-300">•</span>}
                <span className="inline-flex items-center gap-1.5">
                  <span className="text-emerald-600">✓</span> {item}
                </span>
              </Fragment>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12">
        <Reveal delay={430}>
          <div className="mt-14 relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 -top-10 h-52 rounded-full bg-gradient-to-r from-emerald-300/30 via-pop/30 to-emerald-300/30 blur-3xl -z-10"
            />
            <div className="animate-float">
              <div className="rounded-2xl border border-neutral-300/80 bg-neutral-900/5 p-4 shadow-float-window backdrop-blur-sm overflow-hidden">
                <div className="rounded-t-xl bg-white border border-neutral-200 overflow-hidden text-left">
                  <div className="h-10 bg-neutral-50 border-b border-neutral-200 flex items-center gap-3 px-4">
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="w-3 h-3 rounded-full bg-red-400/90 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-400/90 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-green-400/90 inline-block" />
                    </div>
                    <div className="flex-1 min-w-0 max-w-64 sm:max-w-80 mx-auto flex items-center justify-center bg-white border border-neutral-200 rounded-md px-4 py-1 text-xs font-mono text-neutral-500 shadow-xs">
                      <span className="text-neutral-400 mr-1.5 shrink-0">🔒</span>
                      <span className="truncate">
                        <span className="text-neutral-800">guarda.local</span>
                        <span className="text-neutral-400">{dict.windowAddressPath}</span>
                      </span>
                    </div>
                    <div className="text-xs font-mono text-neutral-400 hidden sm:block shrink-0">
                      {dict.windowOs}
                    </div>
                  </div>
                  <div className="relative bg-neutral-100 aspect-[2880/1570] w-full overflow-hidden">
                    <Image
                      alt={dict.imageAlt}
                      className="object-cover object-top"
                      fill
                      priority
                      sizes="(min-width: 1536px) 1496px, 100vw"
                      src={images.planlayici}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hidden sm:flex absolute -top-5 -left-4 md:-left-8 z-30 items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-neutral-200 shadow-xl text-left pointer-events-none animate-bounce duration-1000"
              style={{ animationDuration: "4s" }}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-700 text-white font-mono text-xs shadow-sm">
                ⌘K
              </span>
              <div>
                <div className="text-[11px] font-semibold text-neutral-900 flex items-center gap-1.5">
                  <span>{dict.badge1.title}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <div className="text-[10px] font-mono text-neutral-500">{dict.badge1.subtitle}</div>
              </div>
            </div>
            <div className="hidden sm:flex absolute -bottom-5 -right-3 md:-right-6 z-30 items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-neutral-200 shadow-xl text-left pointer-events-none">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center text-xs font-mono">
                🗓️
              </div>
              <div>
                <div className="text-[11px] font-semibold text-neutral-900 flex items-center gap-1.5">
                  <span>{dict.badge2.title}</span>
                  <span className="text-[10px] font-mono bg-neutral-100 px-1.5 py-0.2 rounded text-neutral-600">
                    {dict.badge2.tag}
                  </span>
                </div>
                <div className="text-[10px] text-neutral-500 font-mono">{dict.badge2.subtitle}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
