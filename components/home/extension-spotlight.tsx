import type { Dictionary } from "@/lib/i18n/dictionaries/tr"
import { Reveal } from "@/components/reveal"

export function ExtensionSpotlight({ dict }: { dict: Dictionary["extension"] }) {
  return (
    <Reveal>
      <article className="mt-6 grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-500 hover:border-emerald-300 hover:shadow-float-window">
        <div className="p-6 md:p-10 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider bg-neutral-100 text-neutral-700 px-2 py-1 rounded border border-neutral-200">
              {dict.badge}
            </span>
            <span className="text-[11px] font-mono text-neutral-500 px-2 py-1 rounded border border-neutral-200">
              {dict.chromeLabel}
            </span>
            <span className="text-[11px] font-mono text-neutral-500 px-2 py-1 rounded border border-neutral-200">
              {dict.firefoxLabel}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-950 mb-3 max-w-md">
            {dict.title}
          </h3>
          <p className="text-sm text-neutral-600 leading-relaxed max-w-md">{dict.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            <div className="flex items-center gap-1.5" aria-label="⌥ + ⌘ + G">
              <kbd className="kbd">⌥</kbd>
              <span className="text-neutral-500 text-xs">+</span>
              <kbd className="kbd">⌘</kbd>
              <span className="text-neutral-500 text-xs">+</span>
              <kbd className="kbd">G</kbd>
            </div>
            <span className="text-xs text-neutral-500">{dict.shortcutNote}</span>
          </div>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-neutral-600">
            {dict.checklist.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[22rem] lg:min-h-[26rem] bg-neutral-100 border-t lg:border-t-0 lg:border-l border-neutral-200 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 p-8 md:p-10 opacity-70 select-none">
            <div className="h-6 w-40 rounded bg-neutral-300/80 mb-6" />
            <div className="h-3 w-[92%] rounded bg-neutral-300/60 mb-3" />
            <div className="h-3 w-[86%] rounded bg-neutral-300/60 mb-3" />
            <div className="h-3 w-[95%] rounded bg-neutral-300/60 mb-3" />
            <div className="h-3 w-[70%] rounded bg-neutral-300/60 mb-8" />
            <div className="h-3 w-[88%] rounded bg-neutral-300/60 mb-3" />
            <div className="h-3 w-[93%] rounded bg-neutral-300/60 mb-3" />
            <div className="h-3 w-[64%] rounded bg-neutral-300/60 mb-3" />
            <div className="h-3 w-[90%] rounded bg-neutral-300/60 mb-3" />
            <div className="h-3 w-[78%] rounded bg-neutral-300/60" />
          </div>
          <div className="ext-popup absolute left-1/2 top-1/2 w-[92%] max-w-[380px] rounded-2xl bg-[#1c1c1e] text-white border border-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] p-5">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-neutral-800 border border-white/10 flex items-center justify-center text-xl">
                🎓
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-base font-semibold leading-tight truncate">{dict.popup.pageTitle}</div>
                <div className="text-sm text-neutral-400 mt-0.5">{dict.popup.domain}</div>
              </div>
              <div className="ext-saved shrink-0 text-sm font-semibold text-emerald-400 whitespace-nowrap">
                {dict.popup.alreadySaved}
              </div>
            </div>
            <div className="mt-4 rounded-xl bg-[#141416] border border-white/10 px-4 py-3 text-base text-white">
              medium
            </div>
            <div className="mt-3 rounded-xl border-2 border-white/80 px-4 py-3 flex items-center justify-between text-base">
              <span className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                {dict.popup.collectionSelected}
              </span>
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-neutral-300"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <div className="mt-4 font-mono text-[11px] tracking-wider text-neutral-500">{dict.popup.enterHint}</div>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
