"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Dictionary } from "@/lib/i18n/dictionaries/tr"

export function ShowcaseTabs({
  dict,
  images,
}: {
  dict: Dictionary["showcase"]
  images: Dictionary["images"]
}) {
  const [activeTab, setActiveTab] = useState(dict.tabs[0].id)
  const active = dict.tabs.find((tab) => tab.id === activeTab) ?? dict.tabs[0]

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {dict.tabs.map((tab) => (
          <button
            key={tab.id}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-medium border transition-all",
              tab.id === activeTab
                ? "border-emerald-700 bg-emerald-700 text-white shadow-xs"
                : "border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950",
            )}
            onClick={() => setActiveTab(tab.id)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto rounded-3xl border border-neutral-200 bg-neutral-50/50 p-5 shadow-xl overflow-hidden">
        <div className="rounded-t-2xl bg-white border border-neutral-200 overflow-hidden">
          <div className="h-10 bg-neutral-50 border-b border-neutral-200 px-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
            </div>
            <div className="text-[11px] font-mono text-neutral-500 bg-white border border-neutral-200 px-4 py-0.5 rounded">
              {active.path}
            </div>
            <div className="text-[10px] font-mono text-neutral-400">{dict.liveScreenLabel}</div>
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
