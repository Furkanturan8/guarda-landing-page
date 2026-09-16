"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Dictionary } from "@/lib/i18n/dictionaries/tr"

const STEP_DURATION_MS = 4200
const PROGRESS_INTERVAL_MS = 50

export function ShowcaseTabs({
  dict,
  images,
}: {
  dict: Dictionary["showcase"]
  images: Dictionary["images"]
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const isPlayingRef = useRef(isPlaying)
  useEffect(() => {
    isPlayingRef.current = isPlaying
  }, [isPlaying])

  const active = dict.tabs[activeIndex] ?? dict.tabs[0]
  const total = dict.tabs.length

  const goToIndex = useCallback((index: number) => {
    setActiveIndex(index)
    setProgress(0)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPlayingRef.current) return
      setProgress((prev) => {
        const next = prev + (PROGRESS_INTERVAL_MS / STEP_DURATION_MS) * 100
        if (next >= 100) {
          setActiveIndex((i) => (i + 1) % total)
          return 0
        }
        return next
      })
    }, PROGRESS_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [total])

  return (
    <>
      <div className="mb-6 flex justify-center">
        <div className="inline-flex items-center gap-3 bg-neutral-50 border border-neutral-200/90 rounded-full px-4 py-1.5 shadow-xs">
          <button
            className="flex items-center gap-1.5 text-xs font-mono font-medium text-neutral-700 hover:text-neutral-950 transition-colors"
            onClick={() => setIsPlaying((p) => !p)}
            type="button"
          >
            <span className="text-emerald-600 text-xs">{isPlaying ? "⏸" : "▶"}</span>
            <span>{isPlaying ? dict.autoplayLabelPlaying : dict.autoplayLabelPaused}</span>
          </button>
          <div className="w-px h-3.5 bg-neutral-200" />
          <div className="w-24 sm:w-28 bg-neutral-200 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-neutral-900 h-full transition-all duration-100 ease-linear rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <span className="text-[11px] font-mono text-neutral-500">
            {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {dict.tabs.map((tab, i) => (
          <button
            key={tab.id}
            className={cn(
              "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border transition-all",
              i === activeIndex
                ? "border-emerald-700 bg-emerald-700 text-white shadow-xs"
                : "border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950",
            )}
            onClick={() => goToIndex(i)}
            type="button"
          >
            <span className={cn("font-mono text-[10px]", i === activeIndex ? "text-emerald-200" : "text-neutral-400")}>
              {String(i + 1).padStart(2, "0")}
            </span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto rounded-3xl border border-neutral-200 bg-neutral-50/50 p-5 shadow-xl overflow-hidden">
        <div className="rounded-t-2xl bg-white border border-neutral-200 overflow-hidden">
          <div className="h-10 bg-neutral-50 border-b border-neutral-200 px-4 flex items-center gap-3">
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
            </div>
            <div className="flex-1 min-w-0 max-w-xs mx-auto text-center truncate text-[11px] font-mono text-neutral-500 bg-white border border-neutral-200 px-4 py-0.5 rounded">
              {active.path}
            </div>
            <div className="text-[10px] font-mono text-neutral-400 shrink-0 hidden sm:block">{dict.liveScreenLabel}</div>
          </div>
          <div key={active.id} className="tab-content active aspect-[2880/1570] w-full bg-neutral-100 relative">
            <Image
              alt={active.imageAlt}
              className="object-cover object-top"
              fill
              sizes="(min-width: 1280px) 1152px, 100vw"
              src={images[active.imageKey]}
            />
          </div>
        </div>
      </div>
    </>
  )
}
