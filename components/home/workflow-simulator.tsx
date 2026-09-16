"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import type { Dictionary } from "@/lib/i18n/dictionaries/tr"

const STEP_DURATION_MS = 3800
const PROGRESS_INTERVAL_MS = 50

const STATUS_CHIP_CLASS = [
  "bg-amber-50 text-amber-700 border-amber-200",
  "bg-blue-50 text-blue-700 border-blue-200",
  "bg-emerald-50 text-emerald-700 border-emerald-200",
  "bg-emerald-600 text-white border-emerald-600",
]

export function WorkflowSimulator({ dict }: { dict: Dictionary["workflow"] }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const isPlayingRef = useRef(isPlaying)
  useEffect(() => {
    isPlayingRef.current = isPlaying
  }, [isPlaying])

  const goToStep = useCallback((step: number) => {
    setCurrentStep(step)
    setProgress(0)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPlayingRef.current) return
      setProgress((prev) => {
        const next = prev + (PROGRESS_INTERVAL_MS / STEP_DURATION_MS) * 100
        if (next >= 100) {
          setCurrentStep((step) => (step >= 4 ? 1 : step + 1))
          return 0
        }
        return next
      })
    }, PROGRESS_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  const stage = dict.stage
  const activeStage =
    currentStep === 1 ? stage.step1 : currentStep === 2 ? stage.step2 : currentStep === 3 ? stage.step3 : stage.step4
  const statusTitle = "statusTitle" in activeStage ? activeStage.statusTitle : stage.step4.completedLine
  const statusChip = "statusChip" in activeStage ? activeStage.statusChip : stage.step4.completedBadge

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/90 text-xs font-mono text-neutral-700 shadow-xs mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="uppercase tracking-wider">{dict.eyebrow}</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">{dict.title}</h2>
        <p className="mt-3 text-neutral-600 text-sm sm:text-base">{dict.description}</p>
        <div className="mt-6 inline-flex items-center gap-3 bg-neutral-50 border border-neutral-200/90 rounded-full px-4 py-1.5 shadow-xs">
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
          <span className="text-[11px] font-mono text-neutral-500">{currentStep} / 4</span>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="hidden lg:block absolute top-[44px] left-8 right-8 h-10 pointer-events-none z-0">
          <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 900 40">
            <path d="M 60 20 L 840 20" stroke="#E5E5E5" strokeLinecap="round" strokeWidth="2.5" />
            <path d="M 60 20 L 840 20" opacity="0.85" stroke="#10B981" strokeLinecap="round" strokeWidth="2.5" />
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
          {dict.steps.map((step, i) => {
            const stepNumber = i + 1
            const active = stepNumber === currentStep
            return (
              <button
                key={step.title}
                className={cn(
                  "text-left p-4 rounded-xl border transition-all duration-300 relative group",
                  active
                    ? "border-neutral-900 bg-neutral-950 text-white shadow-md ring-2 ring-emerald-500/20"
                    : "border-neutral-200 bg-white hover:border-neutral-300 text-neutral-800 shadow-xs",
                )}
                onClick={() => goToStep(stepNumber)}
                type="button"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full font-mono text-xs font-bold transition-all",
                      active
                        ? "bg-white text-neutral-950 ring-4 ring-neutral-800 shadow-sm"
                        : "bg-neutral-100 text-neutral-700 ring-4 ring-neutral-50 shadow-xs",
                    )}
                  >
                    {String(stepNumber).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full border transition-all",
                      active
                        ? "bg-neutral-800 text-emerald-300 border-neutral-700"
                        : "bg-neutral-100 text-neutral-600 border-neutral-200",
                    )}
                  >
                    {step.tag}
                  </span>
                </div>
                <div
                  className={cn(
                    "font-bold text-sm sm:text-base tracking-tight mb-1 transition-colors",
                    active ? "text-white" : "text-neutral-950",
                  )}
                >
                  {step.title}
                </div>
                <p
                  className={cn(
                    "text-xs transition-colors leading-relaxed",
                    active ? "text-neutral-300" : "text-neutral-500",
                  )}
                >
                  {step.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{step.footer}</span>
                </div>
              </button>
            )
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-300/80 bg-gradient-to-b from-neutral-100/90 via-white to-neutral-50/70 p-3 sm:p-5 shadow-float-window backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-neutral-200/80 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-semibold text-neutral-900">{statusTitle}</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-neutral-500">
              <span className="hidden sm:inline">{stage.shortcutLabel}</span>
              <kbd className="bg-white border border-neutral-200 text-neutral-800 px-1.5 py-0.5 rounded shadow-xs font-semibold">
                ⌥ + ⌘ + G
              </kbd>
              <span className="text-neutral-300">•</span>
              <span
                className={cn(
                  "border px-2 py-0.5 rounded-md font-medium text-[11px] font-mono transition-colors",
                  STATUS_CHIP_CLASS[currentStep - 1],
                )}
              >
                {statusChip}
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300">
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">📄</span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                        {stage.articleTitle}
                      </h4>
                      <p className="text-xs font-mono text-neutral-500">{stage.articleUrl}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded-md border border-neutral-200 self-start sm:self-auto">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {stage.step1.droppedBadge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {stage.step1.articleDescription}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-neutral-400">{stage.step1.statusLabel}</span>
                    <span className="text-xs font-mono bg-neutral-50 border border-neutral-200 text-neutral-600 px-2 py-0.5 rounded">
                      {stage.step1.statusValue}
                    </span>
                  </div>
                  <button
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-neutral-950 text-white hover:bg-neutral-800 transition-colors shadow-xs flex items-center gap-1"
                    onClick={() => goToStep(2)}
                    type="button"
                  >
                    {stage.step1.actionButton}
                  </button>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">🗂️</span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                        {stage.articleTitle}
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-xs font-mono">
                        <span className="text-neutral-400">{stage.step2.targetFolderLabel}</span>
                        <span className="bg-neutral-100 text-neutral-900 font-semibold px-2 py-0.5 rounded border border-neutral-200 flex items-center gap-1">
                          {stage.step2.targetFolder}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md border border-blue-200 self-start sm:self-auto">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {stage.step2.catalogedBadge}
                  </span>
                </div>
                <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 mb-2">{stage.step2.tagsLabel}</div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {stage.step2.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono bg-white border border-neutral-300 text-neutral-800 px-2.5 py-1 rounded-md shadow-2xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-md">
                      {stage.step2.addTagLabel}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <span className="text-xs font-mono text-neutral-500">{stage.step2.folderCount}</span>
                  <button
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-neutral-950 text-white hover:bg-neutral-800 transition-colors shadow-xs flex items-center gap-1"
                    onClick={() => goToStep(3)}
                    type="button"
                  >
                    {stage.step2.actionButton}
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">🗓️</span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                        {stage.articleTitle}
                      </h4>
                      <p className="text-xs font-mono text-neutral-500">{stage.step3.breadcrumb}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-md font-semibold">
                      {stage.step3.scheduleBadge}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg border border-neutral-200 bg-neutral-50">
                    <div className="text-[11px] font-mono text-neutral-500 mb-2">{stage.step3.actionTypeLabel}</div>
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 bg-neutral-900 text-white text-xs font-mono px-3 py-1 rounded-md font-medium shadow-xs">
                        {stage.step3.actionSelected}
                      </span>
                      <span className="text-xs font-mono bg-white border border-neutral-200 text-neutral-500 px-2.5 py-1 rounded-md">
                        {stage.step3.actionOption2}
                      </span>
                      <span className="text-xs font-mono bg-white border border-neutral-200 text-neutral-500 px-2.5 py-1 rounded-md">
                        {stage.step3.actionOption3}
                      </span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg border border-neutral-200 bg-neutral-50">
                    <div className="text-[11px] font-mono text-neutral-500 mb-2">{stage.step3.durationLabel}</div>
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-700">
                      <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded font-semibold text-neutral-900">
                        {stage.step3.durationValue}
                      </span>
                      <span className="text-neutral-400">→</span>
                      <span className="text-emerald-700 font-medium">{stage.step3.durationTarget}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <span className="text-xs font-mono text-neutral-500">{stage.step3.priorityLabel}</span>
                  <button
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-xs flex items-center gap-1"
                    onClick={() => goToStep(4)}
                    type="button"
                  >
                    {stage.step3.actionButton}
                  </button>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-100 pb-3 bg-emerald-50/50 -m-5 sm:-m-6 p-5 sm:p-6 rounded-t-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-neutral-900 line-through opacity-80 leading-snug">
                        {stage.articleTitle}
                      </h4>
                      <p className="text-xs font-mono text-emerald-800">{stage.step4.completedLine}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono bg-emerald-600 text-white px-3 py-1 rounded-md font-semibold shadow-xs">
                    {stage.step4.completedBadge}
                  </span>
                </div>
                <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg border border-neutral-200 bg-neutral-50 text-center">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase">{stage.step4.mentalStateLabel}</div>
                    <div className="text-sm font-bold text-emerald-600 mt-0.5">{stage.step4.mentalStateValue}</div>
                  </div>
                  <div className="p-3 rounded-lg border border-neutral-200 bg-neutral-50 text-center">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase">{stage.step4.archiveLabel}</div>
                    <div className="text-sm font-semibold text-neutral-800 mt-0.5 font-mono">
                      {stage.step4.archiveValue}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg border border-neutral-200 bg-neutral-50 text-center">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase">{stage.step4.progressLabel}</div>
                    <div className="text-sm font-bold text-neutral-900 mt-0.5 font-mono">
                      {stage.step4.progressValue}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <span className="text-xs font-mono text-neutral-400">{stage.step4.restartHint}</span>
                  <button
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition-colors shadow-xs flex items-center gap-1"
                    onClick={() => goToStep(1)}
                    type="button"
                  >
                    {stage.step4.restartButton}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
